import React, { useState, useEffect } from 'react';
import { quizzes, getTradingTier, getLocalDateString, getYesterdayDateString, isOlderThanYesterday } from './data/quizzes';
import type { QuizItem } from './data/quizzes';
import { Dashboard } from './components/Dashboard';
import { QuizCard } from './components/QuizCard';
import { Flame, Award, Play, Trophy, Settings } from 'lucide-react';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';
import { DrillGymTab } from './components/DrillGymTab';
import { SettingsTab } from './components/SettingsTab';

type ViewMode = 'dashboard' | 'quiz' | 'drill' | 'settings';

import { 
  createDefaultRatingState, 
  processSessionUpdates, 
  ALL_CATEGORIES
} from './lib/ratingEngine';
import type { SessionAnswer } from './lib/ratingEngine';
import type { UserRatingState } from './lib/ratingEngine';

const parseSavedRatingState = (savedStr: string | null): UserRatingState => {
  const defaultState = createDefaultRatingState(ALL_CATEGORIES);
  if (!savedStr) return defaultState;
  try {
    const parsed = JSON.parse(savedStr);
    
    // 1. If it's already the new format with overallRating, return it
    if (parsed && typeof parsed.overallRating === 'number' && parsed.categories) {
      ALL_CATEGORIES.forEach((cat: string) => {
        if (!parsed.categories[cat]) {
          parsed.categories[cat] = {
            rating: 1000,
            attempts: 0,
            correct: 0,
            nEff: 0,
            recentAnswers: [],
            seenQuestions: {},
            level: 1,
            accuracy: 50
          };
        }
      });
      // Ensure sessionHistory exists
      if (!parsed.sessionHistory) {
        parsed.sessionHistory = [];
      }
      return parsed as UserRatingState;
    }
    
    // 2. Migration from old DrillStat format
    const migrated = { ...defaultState };
    const oldCategoryMap: Record<string, string> = {
      '캔들 패턴 인지': '캔들/가격행동',
      '지지/저항 & 돌파': '시장구조/SR',
      '추세선과 채널': '추세/레짐',
      '차트 패턴 포착': '패턴/돌파',
      '보조지표 다이버전스': '지표/컨플루언스',
      '자금관리/손익비': '리스크/심리'
    };
    
    let totalAttempts = 0;
    Object.entries(parsed).forEach(([oldCat, oldStat]: [string, any]) => {
      const newCat = oldCategoryMap[oldCat];
      if (newCat && oldStat) {
        const attempts = oldStat.attempts || 0;
        const accuracy = oldStat.accuracy || 0;
        const correct = Math.round(attempts * (accuracy / 100));
        const rating = 1000 + (attempts > 0 ? (accuracy - 50) * 6 : 0);
        
        totalAttempts += attempts;
        
        migrated.categories[newCat] = {
          rating: Math.max(800, Math.min(1800, Math.round(rating))),
          attempts: attempts,
          correct: correct,
          nEff: attempts,
          recentAnswers: Array(Math.min(attempts, 10)).fill(accuracy >= 50 ? 1 : 0),
          seenQuestions: {},
          level: oldStat.level || 1,
          accuracy: accuracy
        };
      }
    });
    
    migrated.overallRating = 1000 + Math.min(600, totalAttempts * 15);
    return migrated;
  } catch (e) {
    console.error("ChartMon: Failed to parse rating state, returning default", e);
    return defaultState;
  }
};

const getCategoryKey = (category: string): 'candle' | 'structure' | 'trend' | 'pattern' | 'volume' | 'indicator' | 'execution' | 'risk' => {
  switch (category) {
    case '캔들/가격행동': return 'candle';
    case '시장구조/SR': return 'structure';
    case '추세/레짐': return 'trend';
    case '패턴/돌파': return 'pattern';
    case '거래량/유동성': return 'volume';
    case '지표/컨플루언스': return 'indicator';
    case '셋업/실행': return 'execution';
    case '리스크/심리': return 'risk';
    default: return 'candle';
  }
};


export const App: React.FC = () => {
  // Gamification states loaded from LocalStorage (or defaults)
  const [streak, setStreak] = useState<number>(() => {
    return Number(localStorage.getItem('chartmon_streak')) || 5;
  });
  const [xp, setXp] = useState<number>(() => {
    return Number(localStorage.getItem('chartmon_xp')) || 150;
  });
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>(() => {
    const saved = localStorage.getItem('chartmon_completed');
    return saved ? JSON.parse(saved) : [];
  });
  const [ratingState, setRatingState] = useState<UserRatingState>(() => {
    const saved = localStorage.getItem('chartmon_drill_stats');
    return parseSavedRatingState(saved);
  });

  const [lastActiveDate, setLastActiveDate] = useState<string | null>(() => {
    return localStorage.getItem('chartmon_last_active') || null;
  });
  const [lastDailyCompletedDate, setLastDailyCompletedDate] = useState<string | null>(() => {
    return localStorage.getItem('chartmon_last_daily_completed') || null;
  });
  const [streakBroken, setStreakBroken] = useState<boolean>(false);
  const [sessionXp, setSessionXp] = useState<number>(0);
  const [sessionCompletedIds, setSessionCompletedIds] = useState<number[]>([]);
  const [sessionCorrectAnswers, setSessionCorrectAnswers] = useState<number>(0);
  const [isDailySession, setIsDailySession] = useState<boolean>(false);
  const [isDailyReview, setIsDailyReview] = useState<boolean>(false);
  const [sessionAnswers, setSessionAnswers] = useState<SessionAnswer[]>([]);

  const [quizzesList, setQuizzesList] = useState<QuizItem[]>(quizzes);
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [activeQuizList, setActiveQuizList] = useState<QuizItem[]>([]);
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [hasAutoStartedDaily, setHasAutoStartedDaily] = useState<boolean>(false);
  const [showDailyPrompt, setShowDailyPrompt] = useState<boolean>(false);

  // Fetch quizzes and profiles from Supabase if configured
  useEffect(() => {
    let authListenerSubscription: any = null;

    async function syncUserProfile(user: any) {
      setUserId(user.id);
      setUserEmail(user.email || 'Authenticated User');
      try {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (!error && profile) {
          const profileStreak = profile.streak;
          const profileXp = profile.xp;
          const profileCompleted = profile.completed_quizzes || [];
          const profileActiveDate = profile.last_active_date || null;
          const profileDailyCompletedDate = profile.last_daily_completed_date || null;
          const profileDrillStats = profile.drill_stats || {};
          const parsedRating = parseSavedRatingState(
            typeof profileDrillStats === 'string' ? profileDrillStats : JSON.stringify(profileDrillStats)
          );

          // Compare dates to see if streak is broken
          const today = getLocalDateString();
          let finalStreak = profileStreak;
          if (profileActiveDate && isOlderThanYesterday(profileActiveDate, today)) {
            finalStreak = 0;
            setStreakBroken(true);
            // Sync broken streak to server
            try {
              await supabase.from('profiles').upsert({
                id: user.id,
                streak: 0,
                xp: profileXp,
                trading_level: getTradingTier(profileXp).level,
                completed_quizzes: profileCompleted,
                last_active_date: profileActiveDate,
                last_daily_completed_date: profileDailyCompletedDate,
                drill_stats: parsedRating,
                updated_at: new Date().toISOString()
              });
            } catch (err) {
              console.error('ChartMon: Resetting broken streak on Supabase failed.', err);
            }
          }

          setStreak(finalStreak);
          setXp(profileXp);
          setCompletedQuizzes(profileCompleted);
          setLastActiveDate(profileActiveDate);
          setLastDailyCompletedDate(profileDailyCompletedDate);
          setRatingState(parsedRating);

          localStorage.setItem('chartmon_streak', String(finalStreak));
          localStorage.setItem('chartmon_xp', String(profileXp));
          localStorage.setItem('chartmon_completed', JSON.stringify(profileCompleted));
          localStorage.setItem('chartmon_drill_stats', JSON.stringify(parsedRating));
          if (profileActiveDate) localStorage.setItem('chartmon_last_active', profileActiveDate);
          if (profileDailyCompletedDate) localStorage.setItem('chartmon_last_daily_completed', profileDailyCompletedDate);
        } else {
          // If profile does not exist, initialize it with current local/default states
          const localStreak = Number(localStorage.getItem('chartmon_streak')) || 0;
          const localXp = Number(localStorage.getItem('chartmon_xp')) || 0;
          const localCompleted = JSON.parse(localStorage.getItem('chartmon_completed') || '[]');
          const localDrillStatsStr = localStorage.getItem('chartmon_drill_stats');
          const localDrillStats = parseSavedRatingState(localDrillStatsStr);

          await supabase.from('profiles').upsert({
            id: user.id,
            streak: localStreak,
            xp: localXp,
            trading_level: getTradingTier(localXp).level,
            completed_quizzes: localCompleted,
            last_active_date: localStorage.getItem('chartmon_last_active'),
            last_daily_completed_date: localStorage.getItem('chartmon_last_daily_completed'),
            drill_stats: localDrillStats,
            updated_at: new Date().toISOString()
          });
        }
      } catch (e) {
        console.error('ChartMon: Sync user profile error.', e);
      }
    }

    async function loadInitialData() {
      // Local helper to check local streak break for guests
      const checkLocalStreak = () => {
        const today = getLocalDateString();
        const savedActiveDate = localStorage.getItem('chartmon_last_active');
        if (savedActiveDate && isOlderThanYesterday(savedActiveDate, today)) {
          setStreak(0);
          setStreakBroken(true);
          localStorage.setItem('chartmon_streak', '0');
        }
      };

      // 1. Fetch quizzes from Supabase
      if (isSupabaseConfigured) {
        try {
          const { data, error } = await supabase
            .from('quizzes')
            .select('*')
            .order('id', { ascending: true });
          
          if (!error && data && data.length > 0) {
            const DATABASE_CATEGORY_MAP: Record<string, string> = {
              '캔들 패턴 인지': '캔들/가격행동',
              '지지/저항 & 돌파': '시장구조/SR',
              '추세선과 채널': '추세/레짐',
              '차트 패턴 포착': '패턴/돌파',
              '보조지표 다이버전스': '지표/컨플루언스',
              '자금관리/손익비': '리스크/심리'
            };

            const THEORY_REF_MAP: Record<string, string> = {
              '01_candlestick_basics.md': '02_candlestick_price_action.md',
              '02_support_resistance.md': '03_market_structure.md',
              '03_trendlines_channels.md': '03_market_structure.md',
              '04_chart_patterns.md': '04_patterns_breakout.md',
              '05_volume_liquidity.md': '05_volume_liquidity.md',
              '06_technical_indicators.md': '06_technical_indicators.md',
              '07_setup_execution.md': '08_setup_entry_exit.md',
              '08_risk_management.md': '09_risk_position_management.md'
            };

            const formatted: QuizItem[] = data.map(q => {
              const mappedCategory = DATABASE_CATEGORY_MAP[q.category] || q.category;
              const mappedTheoryRef = THEORY_REF_MAP[q.theory_ref] || q.theory_ref;
              return {
                id: Number(q.id),
                category: mappedCategory,
                categoryKey: getCategoryKey(mappedCategory),
                difficulty: Number(q.difficulty) || 3,
                theoryRef: mappedTheoryRef,
                question: q.question,
                chartData: q.chart_data,
                drawings: q.drawings,
                options: q.options,
                correctIndex: q.correct_index,
                explanation: q.explanation
              };
            });
            setQuizzesList(formatted);
          }
        } catch (e) {
          console.error('ChartMon: Supabase load quizzes failed, using local.', e);
        }

        // 2. Load authenticated user profile
        try {
          const { data: { session } } = await supabase.auth.getSession();
          const user = session?.user || null;
          if (user) {
            await syncUserProfile(user);
          } else {
            checkLocalStreak();
          }
        } catch (e) {
          console.error('ChartMon: Profile loading failed.', e);
          checkLocalStreak();
        }
      } else {
        checkLocalStreak();
      }
      setIsInitialized(true);
    }

    // Auth listener setup
    if (isSupabaseConfigured) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          await syncUserProfile(session.user);
        } else if (event === 'SIGNED_OUT') {
          setUserId(null);
          setUserEmail(null);
          // Reset stats to guest defaults on sign out
          setStreak(0);
          setXp(0);
          setCompletedQuizzes([]);
          setLastActiveDate(null);
          setLastDailyCompletedDate(null);
          setRatingState(createDefaultRatingState(ALL_CATEGORIES));
          
          localStorage.removeItem('chartmon_streak');
          localStorage.removeItem('chartmon_xp');
          localStorage.removeItem('chartmon_completed');
          localStorage.removeItem('chartmon_drill_stats');
          localStorage.removeItem('chartmon_last_active');
          localStorage.removeItem('chartmon_last_daily_completed');
        }
      });
      authListenerSubscription = subscription;
    }

    loadInitialData();

    return () => {
      if (authListenerSubscription) {
        authListenerSubscription.unsubscribe();
      }
    };
  }, []);

  // Sync state changes with LocalStorage and Supabase (upsert)
  const updateStats = async (
    newXp: number,
    newStreak: number,
    newCompleted: number[],
    newActiveDate: string | null,
    newDailyCompletedDate: string | null,
    newRatingState: UserRatingState
  ) => {
    setXp(newXp);
    setStreak(newStreak);
    setCompletedQuizzes(newCompleted);
    setLastActiveDate(newActiveDate);
    setLastDailyCompletedDate(newDailyCompletedDate);
    setRatingState(newRatingState);

    localStorage.setItem('chartmon_xp', String(newXp));
    localStorage.setItem('chartmon_streak', String(newStreak));
    localStorage.setItem('chartmon_completed', JSON.stringify(newCompleted));
    localStorage.setItem('chartmon_drill_stats', JSON.stringify(newRatingState));
    if (newActiveDate) {
      localStorage.setItem('chartmon_last_active', newActiveDate);
    } else {
      localStorage.removeItem('chartmon_last_active');
    }
    if (newDailyCompletedDate) {
      localStorage.setItem('chartmon_last_daily_completed', newDailyCompletedDate);
    } else {
      localStorage.removeItem('chartmon_last_daily_completed');
    }

    if (isSupabaseConfigured && userId) {
      try {
        const tier = getTradingTier(newXp);
        await supabase.from('profiles').upsert({
          id: userId,
          xp: newXp,
          streak: newStreak,
          trading_level: tier.level,
          completed_quizzes: newCompleted,
          last_active_date: newActiveDate,
          last_daily_completed_date: newDailyCompletedDate,
          drill_stats: newRatingState,
          updated_at: new Date().toISOString()
        });
      } catch (e) {
        console.error('ChartMon: Syncing profile with Supabase failed.', e);
      }
    }
  };

  const handleGoogleLogin = async () => {
    if (!isSupabaseConfigured) return;
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + window.location.pathname
        }
      });
      if (error) {
        alert(`구글 로그인 시도 실패: ${error.message}`);
      }
    } catch (e: any) {
      alert(`오류가 발생했습니다: ${e.message || e}`);
    }
  };

  const handleLogout = async () => {
    if (isSupabaseConfigured) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.error('Logout error:', e);
      }
    }
  };

  const handleDeleteAccount = async () => {
    if (!isSupabaseConfigured || !userId) return;
    try {
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);
      
      if (error) {
        throw error;
      }
      
      await supabase.auth.signOut();
      alert('계정이 성공적으로 삭제되었습니다.');
    } catch (e: any) {
      alert(`계정 삭제 처리 중 오류가 발생했습니다: ${e.message}`);
    }
  };

  const startDailyTraining = () => {
    // Select 15 quizzes: uncompleted first, then fill with completed (all shuffled)
    const uncompleted = quizzesList.filter(q => !completedQuizzes.includes(q.id));
    let selected: QuizItem[];
    const shuffle = (array: QuizItem[]) => [...array].sort(() => 0.5 - Math.random());
    if (uncompleted.length >= 15) {
      selected = shuffle(uncompleted).slice(0, 15);
    } else {
      selected = [...uncompleted];
      const completed = quizzesList.filter(q => completedQuizzes.includes(q.id));
      selected = shuffle(selected); // Shuffle uncompleted too
      selected = [...selected, ...shuffle(completed).slice(0, 15 - selected.length)];
    }

    const today = getLocalDateString();
    const isReview = lastDailyCompletedDate === today;

    setActiveQuizList(selected);
    setActiveQuizIndex(0);
    setSessionXp(0);
    setSessionCompletedIds([]);
    setSessionCorrectAnswers(0);
    setSessionAnswers([]);
    
    if (isReview) {
      setIsDailySession(false);
      setIsDailyReview(true);
    } else {
      setIsDailySession(true);
      setIsDailyReview(false);
    }
    
    setCurrentView('quiz');
  };

  // Auto-start daily training if not completed today on initial load
  useEffect(() => {
    if (isInitialized && !hasAutoStartedDaily) {
      const today = getLocalDateString();
      if (lastDailyCompletedDate !== today) {
        setShowDailyPrompt(true);
      }
      setHasAutoStartedDaily(true);
    }
  }, [isInitialized, lastDailyCompletedDate, hasAutoStartedDaily]);

  const startDrill = (categoryOrFile: string) => {
    const SKILL_TO_THEORY_MAP: Record<string, string> = {
      '시장구조/SR': '03_market_structure.md',
      '캔들/가격행동': '02_candlestick_price_action.md',
      '추세/레짐': '07_multitimeframe_regime.md',
      '패턴/돌파': '04_patterns_breakout.md',
      '거래량/유동성': '05_volume_liquidity.md',
      '지표/컨플루언스': '06_technical_indicators.md',
      '셋업/실행': '08_setup_entry_exit.md',
      '리스크/심리': '09_risk_position_management.md'
    };

    let theoryFile = categoryOrFile;
    if (SKILL_TO_THEORY_MAP[categoryOrFile]) {
      theoryFile = SKILL_TO_THEORY_MAP[categoryOrFile];
    }

    // Filter quizzes by theoryRef
    const categoryQuizzes = quizzesList.filter(q => q.theoryRef === theoryFile);
    if (categoryQuizzes.length === 0) {
      alert('해당 훈련 범주의 퀴즈를 불러올 수 없습니다. 데이터베이스 연동을 확인해 주세요.');
      return;
    }

    // Select 5 random/uncompleted quizzes from this category
    const uncompleted = categoryQuizzes.filter(q => !completedQuizzes.includes(q.id));
    let selected: QuizItem[];
    
    // Shuffle helper
    const shuffle = (array: QuizItem[]) => [...array].sort(() => 0.5 - Math.random());
    
    if (uncompleted.length >= 5) {
      selected = shuffle(uncompleted).slice(0, 5);
    } else {
      selected = [...uncompleted];
      const completed = categoryQuizzes.filter(q => completedQuizzes.includes(q.id));
      selected = [...selected, ...shuffle(completed).slice(0, 5 - selected.length)];
    }

    // Fallback if there are fewer than 5 quizzes total in the database for this category
    if (selected.length < 5 && categoryQuizzes.length > 0) {
      selected = shuffle(categoryQuizzes).slice(0, Math.min(5, categoryQuizzes.length));
    }

    setActiveQuizList(selected);
    setActiveQuizIndex(0);
    setSessionXp(0);
    setSessionCompletedIds([]);
    setSessionCorrectAnswers(0);
    setSessionAnswers([]);
    setIsDailySession(false);
    setIsDailyReview(false);
    setCurrentView('quiz');
  };

  const handleAnswerChecked = (isCorrect: boolean, selectedIndex?: number) => {
    const currentQuiz = activeQuizList[activeQuizIndex];
    if (currentQuiz) {
      // Record session answer for history
      setSessionAnswers(prev => [...prev, {
        quizId: currentQuiz.id,
        selectedIndex: selectedIndex ?? -1,
        isCorrect,
        category: currentQuiz.category,
        difficulty: currentQuiz.difficulty
      }]);

      if (isCorrect) {
        setSessionCorrectAnswers(prev => prev + 1);
        const isAlreadyCompleted = completedQuizzes.includes(currentQuiz.id);
        const earned = isAlreadyCompleted ? 5 : 20;
        setSessionXp(prev => prev + earned);
        setSessionCompletedIds(prev => {
          if (!prev.includes(currentQuiz.id)) {
            return [...prev, currentQuiz.id];
          }
          return prev;
        });
      }
    }
  };

  const handleNextQuiz = () => {
    if (activeQuizIndex + 1 < activeQuizList.length) {
      setActiveQuizIndex(prev => prev + 1);
    } else {
      // Session finished!
      const today = getLocalDateString();
      const yesterday = getYesterdayDateString(today);
      
      let finalXp = xp + sessionXp;
      let finalDailyCompletedDate = lastDailyCompletedDate;
      let dailyBonusAwarded = false;

      if (isDailyReview) {
        finalXp += 5; // +5 XP Review completion bonus
      } else {
        if (isDailySession) {
          if (lastDailyCompletedDate !== today) {
            finalXp += 30; // +30 XP Daily Training completion bonus
            finalDailyCompletedDate = today;
            dailyBonusAwarded = true;
          }
        }
      }

      // Calculate streak
      let finalStreak: number;
      if (lastActiveDate === yesterday) {
        finalStreak = streak + 1;
      } else if (lastActiveDate === today) {
        finalStreak = streak;
      } else if (lastActiveDate === null) {
        finalStreak = streak > 0 ? streak : 1;
      } else {
        finalStreak = 1;
      }

      const finalActiveDate = today;
      const combinedCompletedQuizzes = Array.from(
        new Set([...completedQuizzes, ...sessionCompletedIds])
      );

      let nextRatingState = ratingState;

      if (isDailyReview) {
        // Daily Review completion: skip ELO rating and session history update
        let msg = `🎉 데일리 복습 완료!\n- 정답률: ${Math.round((sessionCorrectAnswers / activeQuizList.length) * 100)}% (${sessionCorrectAnswers}/${activeQuizList.length} 정답)\n- 획득 경험치: +${sessionXp} XP\n🎁 복습 완료 보너스 (+5 XP) 추가 지급!`;
        alert(msg);
      } else {
        // ELO Rating and Skill Proficiency processing
        const sessionQuizzes = activeQuizList.map(quiz => ({
          id: quiz.id,
          category: quiz.category,
          difficulty: quiz.difficulty,
          isCorrect: sessionCompletedIds.includes(quiz.id)
        }));

        nextRatingState = processSessionUpdates(
          ratingState, 
          sessionQuizzes, 
          ALL_CATEGORIES, 
          isDailySession ? 'daily' : 'drill'
        );

        // Track level-up triggers
        let levelUpMessage = "";
        ALL_CATEGORIES.forEach(cat => {
          const prevLevel = ratingState.categories[cat]?.level || 1;
          const nextLevel = nextRatingState.categories[cat]?.level || 1;
          if (nextLevel > prevLevel) {
            levelUpMessage += `\n🔥 레벨 업! [${cat}] 훈련 레벨이 Lv.${nextLevel}로 상승했습니다!`;
          }
        });

        // ELO Change display
        const eloDiff = nextRatingState.overallRating - ratingState.overallRating;
        const eloDiffStr = eloDiff >= 0 ? `+${eloDiff}` : `${eloDiff}`;

        // Feedback alert
        let msg = isDailySession
          ? `🎉 오늘의 데일리 트레이닝 완료! (+${sessionXp} XP 획득)\n📈 트레이더 레이팅: ${ratingState.overallRating} → ${nextRatingState.overallRating} RP (${eloDiffStr} RP)`
          : `🎯 실전 훈련 완료!\n- 정답률: ${Math.round((sessionCorrectAnswers / activeQuizList.length) * 100)}% (${sessionCorrectAnswers}/${activeQuizList.length} 정답)\n- 획득 경험치: +${sessionXp} XP\n📈 트레이더 레이팅: ${ratingState.overallRating} → ${nextRatingState.overallRating} RP (${eloDiffStr} RP)`;

        if (isDailySession && dailyBonusAwarded) {
          msg += `\n🎁 일일 완성 보너스 (+30 XP) 추가 지급!`;
        }
        if (levelUpMessage) {
          msg += `\n${levelUpMessage}`;
        }
        alert(msg);

        // Build SessionRecord for history
        const categoryDeltas: Record<string, { before: number; after: number }> = {};
        ALL_CATEGORIES.forEach(cat => {
          const before = ratingState.categories[cat]?.rating || 1000;
          const after = nextRatingState.categories[cat]?.rating || 1000;
          if (before !== after) {
            categoryDeltas[cat] = { before, after };
          }
        });

        const sessionRecord = {
          date: today,
          timestamp: Date.now(),
          type: (isDailySession ? 'daily' : 'drill') as 'daily' | 'drill',
          ratingBefore: ratingState.overallRating,
          ratingAfter: nextRatingState.overallRating,
          categoryDeltas,
          answers: sessionAnswers,
          correctCount: sessionCorrectAnswers,
          totalCount: activeQuizList.length
        };

        // Append to session history (keep last 100 sessions)
        nextRatingState.sessionHistory = [
          ...(nextRatingState.sessionHistory || []),
          sessionRecord
        ].slice(-100);
      }

      // Clean up streak warning since they active today
      setStreakBroken(false);

      // Save and sync
      updateStats(
        finalXp,
        finalStreak,
        combinedCompletedQuizzes,
        finalActiveDate,
        finalDailyCompletedDate,
        nextRatingState
      );

      setCurrentView('dashboard');
    }
  };


  if (!isInitialized) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0f172a',
        color: '#fff',
        fontFamily: 'var(--font-main)'
      }}>
        <div style={{
          fontSize: '32px',
          marginBottom: '16px',
          animation: 'spin 1.5s linear infinite'
        }}>🔄</div>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>차트몬 학습 데이터 불러오는 중...</p>
      </div>
    );
  }

  if (isSupabaseConfigured && !userId) {
    return (
      <div className="welcome-screen">
        <div className="welcome-logo-container">
          <div className="welcome-logo-icon">
            <Award size={40} color="#fff" />
          </div>
          <h2 className="welcome-title">ChartMon</h2>
          <p className="welcome-subtitle">하루 15분 차트 트레이딩 실전 훈련</p>
        </div>

        <div className="welcome-card">
          <div className="welcome-feature-list">
            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <Play size={16} fill="currentColor" />
              </div>
              <div>
                <div className="welcome-feature-title">실제 차트 데이터 기반 퀴즈</div>
                <div className="welcome-feature-desc">과거 실제 금융 차트를 분석하며 올바른 매매 결정을 내리는 훈련을 합니다.</div>
              </div>
            </div>

            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <Trophy size={16} />
              </div>
              <div>
                <div className="welcome-feature-title">트레이더 ELO 레이팅 시스템</div>
                <div className="welcome-feature-desc">문제 난이도와 정답률을 바탕으로 나의 실력을 객관적인 레이팅(RP)으로 측정합니다.</div>
              </div>
            </div>

            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <Flame size={16} fill="currentColor" />
              </div>
              <div>
                <div className="welcome-feature-title">매일 새로운 데일리 세션</div>
                <div className="welcome-feature-desc">하루 한 번, 꾸준한 차트 읽기 연습으로 스트릭을 유지하고 경험치를 쌓아 등급을 올리세요.</div>
              </div>
            </div>
          </div>

          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.1.8-2.6 2.4l3.1 2.4c1.8-1.66 2.9-4.1 2.9-7.22z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.1-2.4c-.86.58-1.97.92-3.26.92-2.5 0-4.63-1.69-5.38-3.96l-3.2 2.48C7.02 22.1 9.3 24 12 24z"/>
              <path fill="#FBBC05" d="M6.62 14.05c-.2-.58-.3-1.2-.3-1.84s.1-1.26.3-1.84L3.42 7.89C2.52 9.7 2 11.77 2 13.92s.52 4.22 1.42 6.03l3.2-2.48z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.4-3.4C17.96 1.19 15.24 0 12 0 9.3 0 7.02 1.9 5.02 4.88l3.2 2.48c.75-2.27 2.88-3.96 5.38-3.96z"/>
            </svg>
            Google 계정으로 시작하기
          </button>
        </div>

        <div className="welcome-footer">
          계속 진행하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Top Header Section */}
      {currentView !== 'quiz' && (
        <header>
          <div className="logo-section" onClick={() => { setCurrentView('dashboard'); }} style={{ cursor: 'pointer' }}>
            <h1>ChartMon</h1>
          </div>
          <div className="stats-bar">
            <div className="stat-item streak" title="연속 활성 일수">
              <Flame size={16} fill="currentColor" />
              <span>{streak}일</span>
            </div>
            <div className="stat-item xp" title="누적 XP">
              <Award size={16} fill="currentColor" />
              <span>{xp} XP</span>
            </div>
          </div>
        </header>
      )}

      {/* Main View Router */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentView === 'dashboard' && (
          <Dashboard
            onStartDailyQuiz={startDailyTraining}
            onStartDrill={startDrill}
            streakBroken={streakBroken}
            onCloseStreakWarning={() => setStreakBroken(false)}
            isDailyCompletedToday={lastDailyCompletedDate === getLocalDateString()}
            ratingState={ratingState}
            completedQuizzes={completedQuizzes}
            allQuizzes={quizzesList}
            xp={xp}
          />
        )}

        {currentView === 'quiz' && activeQuizList.length > 0 && (
          <QuizCard
            quiz={activeQuizList[activeQuizIndex]}
            currentIndex={activeQuizIndex}
            totalQuizzes={activeQuizList.length}
            onClose={() => {
              if (window.confirm('정말로 트레이닝 훈련을 종료하고 나가시겠습니까? 진행 중인 점수는 저장되지 않습니다.')) {
                setCurrentView('dashboard');
              }
            }}
            onAnswerChecked={handleAnswerChecked}
            onNext={handleNextQuiz}
          />
        )}

        {currentView === 'drill' && (
          <DrillGymTab
            onStartDrill={startDrill}
            xp={xp}
            drillStats={ratingState.categories}
          />
        )}

        {currentView === 'settings' && (
          <SettingsTab 
            userId={userId} 
            userEmail={userEmail} 
            onLogout={handleLogout}
            onDeleteAccount={handleDeleteAccount}
          />
        )}
      </main>

      {/* Sticky Bottom 3-Tab Navigation */}
      {currentView !== 'quiz' && (
        <nav className="tabs-navigation" style={{ zIndex: 100 }}>
          <button
            onClick={() => { setCurrentView('drill'); }}
            className={`tab-btn ${currentView === 'drill' ? 'active' : ''}`}
          >
            <Trophy size={20} />
            <span>훈련소</span>
          </button>
          <button
            onClick={() => { setCurrentView('dashboard'); }}
            className={`tab-btn ${currentView === 'dashboard' ? 'active' : ''}`}
          >
            <Play size={20} />
            <span>데일리</span>
          </button>
          <button
            onClick={() => { setCurrentView('settings'); }}
            className={`tab-btn ${currentView === 'settings' ? 'active' : ''}`}
          >
            <Settings size={20} />
            <span>설정</span>
          </button>
        </nav>
      )}

      {showDailyPrompt && (
        <div className="app-modal-overlay">
          <div className="app-modal-card">
            <div className="app-modal-icon-wrap">
              <Flame size={32} fill="currentColor" />
            </div>
            <div>
              <h3 className="app-modal-title">오늘의 훈련 시작</h3>
              <p className="app-modal-desc">
                새로운 하루가 시작되었습니다!<br />
                오늘의 데일리 트레이닝 세션(15문제)을 지금 바로 시작하시겠습니까?
              </p>
            </div>
            <div className="app-modal-actions">
              <button 
                className="app-modal-btn-primary" 
                onClick={() => {
                  setShowDailyPrompt(false);
                  startDailyTraining();
                }}
              >
                지금 시작하기
              </button>
              <button 
                className="app-modal-btn-secondary" 
                onClick={() => setShowDailyPrompt(false)}
              >
                나중에 하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default App;


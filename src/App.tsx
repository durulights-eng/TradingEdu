import React, { useState, useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import { quizzes, getTradingTier, getLocalDateString, getYesterdayDateString, isOlderThanYesterday } from './data/quizzes';
import type { QuizItem } from './data/quizzes';
import { Dashboard } from './components/Dashboard';
import { QuizCard } from './components/QuizCard';
import { Flame, Award, Play, Trophy, Settings, X } from 'lucide-react';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';
import { DrillGymTab } from './components/DrillGymTab';
import { SettingsTab } from './components/SettingsTab';
import { WelcomeOnboarding } from './components/WelcomeOnboarding';
import { PremiumPlansModal } from './components/PremiumPlansModal';

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
  const [termExplanation, setTermExplanation] = useState<{ term: string; definition: string } | null>(null);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(() => {
    return localStorage.getItem('chartmon_onboarding_completed') !== 'true';
  });

  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem('chartmon_is_premium') === 'true';
  });
  const [showPremiumModal, setShowPremiumModal] = useState<boolean>(false);
  const [dailyDrillCount, setDailyDrillCount] = useState<number>(() => {
    const today = getLocalDateString();
    const lastDrill = localStorage.getItem('chartmon_last_drill_date') || '';
    if (lastDrill !== today) {
      localStorage.setItem('chartmon_last_drill_date', today);
      localStorage.setItem('chartmon_daily_drill_count', '0');
      return 0;
    }
    return Number(localStorage.getItem('chartmon_daily_drill_count')) || 0;
  });

  useEffect(() => {
    const today = getLocalDateString();
    const lastDrill = localStorage.getItem('chartmon_last_drill_date') || '';
    if (lastDrill !== today) {
      localStorage.setItem('chartmon_last_drill_date', today);
      localStorage.setItem('chartmon_daily_drill_count', '0');
      setDailyDrillCount(0);
    }
  }, []);

  useEffect(() => {
    const handleShowExplanation = (e: Event) => {
      const customEvent = e as CustomEvent<{ term: string; definition: string }>;
      if (customEvent.detail) {
        setTermExplanation(customEvent.detail);
      }
    };
    window.addEventListener('show-term-explanation', handleShowExplanation);
    return () => {
      window.removeEventListener('show-term-explanation', handleShowExplanation);
    };
  }, []);

  useEffect(() => {
    if (termExplanation) {
      const timer = setTimeout(() => {
        setTermExplanation(null);
      }, 5000);

      const handleGlobalClick = () => {
        setTermExplanation(null);
      };

      const timeoutClick = setTimeout(() => {
        window.addEventListener('click', handleGlobalClick);
        window.addEventListener('touchstart', handleGlobalClick);
      }, 100);

      return () => {
        clearTimeout(timer);
        clearTimeout(timeoutClick);
        window.removeEventListener('click', handleGlobalClick);
        window.removeEventListener('touchstart', handleGlobalClick);
      };
    }
  }, [termExplanation]);

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
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isGuestMode, setIsGuestMode] = useState<boolean>(false);

  const [quizzesList, setQuizzesList] = useState<QuizItem[]>(quizzes);
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [activeQuizList, setActiveQuizList] = useState<QuizItem[]>([]);
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [isProfileLoading, setIsProfileLoading] = useState<boolean>(isSupabaseConfigured);
  const [hasAutoStartedDaily, setHasAutoStartedDaily] = useState<boolean>(false);
  const [showDailyPrompt, setShowDailyPrompt] = useState<boolean>(false);

  // Fetch quizzes and profiles from Supabase if configured
  useEffect(() => {
    let authListenerSubscription: any = null;

    async function syncUserProfile(user: any) {
      setIsProfileLoading(true);
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
          const profileIsPremium = profile.is_premium || false;
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
                is_premium: profileIsPremium,
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
          setIsPremium(profileIsPremium);

          localStorage.setItem('chartmon_streak', String(finalStreak));
          localStorage.setItem('chartmon_xp', String(profileXp));
          localStorage.setItem('chartmon_completed', JSON.stringify(profileCompleted));
          localStorage.setItem('chartmon_drill_stats', JSON.stringify(parsedRating));
          localStorage.setItem('chartmon_is_premium', String(profileIsPremium));
          if (profileActiveDate) localStorage.setItem('chartmon_last_active', profileActiveDate);
          if (profileDailyCompletedDate) localStorage.setItem('chartmon_last_daily_completed', profileDailyCompletedDate);
        } else if (error && error.code === 'PGRST116') {
          // PGRST116 is 'The query returned 0 rows' (profile doesn't exist yet)
          // Initialize it with current local/default states
          const localStreak = Number(localStorage.getItem('chartmon_streak')) || 0;
          const localXp = Number(localStorage.getItem('chartmon_xp')) || 0;
          const localCompleted = JSON.parse(localStorage.getItem('chartmon_completed') || '[]');
          const localDrillStatsStr = localStorage.getItem('chartmon_drill_stats');
          const localDrillStats = parseSavedRatingState(localDrillStatsStr);
          const localIsPremium = localStorage.getItem('chartmon_is_premium') === 'true';

          await supabase.from('profiles').upsert({
            id: user.id,
            streak: localStreak,
            xp: localXp,
            trading_level: getTradingTier(localXp).level,
            completed_quizzes: localCompleted,
            last_active_date: localStorage.getItem('chartmon_last_active'),
            last_daily_completed_date: localStorage.getItem('chartmon_last_daily_completed'),
            drill_stats: localDrillStats,
            is_premium: localIsPremium,
            updated_at: new Date().toISOString()
          });
        } else {
          // A transient network/database error, do not overwrite the profile!
          console.error('ChartMon: Fetch profile database error.', error);
        }
      } catch (e) {
        console.error('ChartMon: Sync user profile error.', e);
      } finally {
        setIsProfileLoading(false);
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
          const fetchPromise = supabase
            .from('quizzes')
            .select('*')
            .order('id', { ascending: true });

          const timeoutPromise = new Promise<any>((_, reject) =>
            setTimeout(() => reject(new Error('Supabase request timeout')), 3000)
          );

          const { data, error } = await Promise.race([fetchPromise, timeoutPromise]) as any;
          
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

            const formatted: QuizItem[] = data.map((q: any) => {
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
          console.error('ChartMon: Supabase load quizzes failed or timed out, using local fallback.', e);
          checkLocalStreak();
        }
      } else {
        checkLocalStreak();
      }
      setIsInitialized(true);
    }

    // Auth listener setup
    if (isSupabaseConfigured) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user) {
          await syncUserProfile(session.user);
        } else {
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

          setIsProfileLoading(false);
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

  // Listen to window scroll events to toggle scrolled state for top-header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Capacitor Deep Link for Native Platforms (OAuth redirects)
  useEffect(() => {
    let active = true;

    if (Capacitor.isNativePlatform()) {
      const setupDeepLink = async () => {
        try {
          const { App: CapApp } = await import('@capacitor/app');
          
          CapApp.addListener('appUrlOpen', async (data: any) => {
            if (!active) return;
            console.log('App opened with URL:', data.url);
            
            try {
              const url = new URL(data.url);
              const hash = url.hash;
              if (hash) {
                const params = new URLSearchParams(hash.substring(1));
                const access_token = params.get('access_token');
                const refresh_token = params.get('refresh_token');

                if (access_token && refresh_token) {
                  const { error } = await supabase.auth.setSession({
                    access_token,
                    refresh_token
                  });
                  if (error) {
                    console.error('ChartMon DeepLink: Error setting session:', error.message);
                    alert(`자동 로그인 실패: ${error.message}`);
                  }
                }
              }
            } catch (err: any) {
              console.error('ChartMon DeepLink: Failed to parse URL:', err);
            }
          });
        } catch (err) {
          console.error('ChartMon DeepLink: Failed to load @capacitor/app plugin', err);
        }
      };

      setupDeepLink();
    }

    return () => {
      active = false;
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
          is_premium: isPremium,
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
      const isNative = Capacitor.isNativePlatform();
      const redirectTo = isNative
        ? 'com.chartmon.app://login-callback'
        : window.location.origin + window.location.pathname;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo
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

  const handlePaymentSuccess = async () => {
    setIsPremium(true);
    localStorage.setItem('chartmon_is_premium', 'true');
    
    if (isSupabaseConfigured && userId) {
      try {
        const { error } = await supabase
          .from('profiles')
          .update({ is_premium: true, updated_at: new Date().toISOString() })
          .eq('id', userId);
        if (error) throw error;
      } catch (e) {
        console.error('ChartMon: Failed to update is_premium on Supabase', e);
      }
    }
  };

  const startDailyTraining = () => {
    const userRating = ratingState.overallRating || 1000;
    
    // 1. Split quizzes into uncompleted and completed
    const uncompletedPool = quizzesList.filter(q => !completedQuizzes.includes(q.id));
    const completedPool = quizzesList.filter(q => completedQuizzes.includes(q.id));
    
    const shuffle = (array: QuizItem[]) => [...array].sort(() => 0.5 - Math.random());
    
    // 2. Select uncompleted quizzes with matching difficulty
    // Target 1: Uncompleted within ±200 RP
    let uncompletedSelected = uncompletedPool.filter(q => {
      const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
      return Math.abs(qRating - userRating) <= 200;
    });
    
    // Target 2: If we need more, expand to ±350 RP
    if (uncompletedSelected.length < 15) {
      const expanded = uncompletedPool.filter(q => {
        const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
        const diff = Math.abs(qRating - userRating);
        return diff > 200 && diff <= 350;
      });
      uncompletedSelected = [...uncompletedSelected, ...expanded];
    }
    
    // Target 3: If still need more, fallback to any uncompleted
    if (uncompletedSelected.length < 15) {
      const rest = uncompletedPool.filter(q => {
        const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
        return Math.abs(qRating - userRating) > 350;
      });
      uncompletedSelected = [...uncompletedSelected, ...rest];
    }
    
    let selected: QuizItem[] = shuffle(uncompletedSelected);
    
    // 3. If total selected is less than 15, fill with completed quizzes matching difficulty
    if (selected.length < 15) {
      const neededCount = 15 - selected.length;
      
      // Completed Target 1: Completed within ±200 RP
      let completedSelected = completedPool.filter(q => {
        const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
        return Math.abs(qRating - userRating) <= 200;
      });
      
      // Completed Target 2: Expanded ±350 RP
      if (completedSelected.length < neededCount) {
        const expanded = completedPool.filter(q => {
          const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
          const diff = Math.abs(qRating - userRating);
          return diff > 200 && diff <= 350;
        });
        completedSelected = [...completedSelected, ...expanded];
      }
      
      // Completed Target 3: Any completed fallback
      if (completedSelected.length < neededCount) {
        const rest = completedPool.filter(q => {
          const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
          return Math.abs(qRating - userRating) > 350;
        });
        completedSelected = [...completedSelected, ...rest];
      }
      
      selected = [...selected, ...shuffle(completedSelected).slice(0, neededCount)];
    } else {
      // Just slice the first 15 (which is already shuffled)
      selected = selected.slice(0, 15);
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

  // Reset daily auto-start check when userId changes (e.g. login/logout)
  useEffect(() => {
    setHasAutoStartedDaily(false);
  }, [userId]);

  // Auto-start daily training if not completed today on initial load
  useEffect(() => {
    if (isSupabaseConfigured && !userId) {
      return;
    }

    if (isInitialized && !isProfileLoading && !hasAutoStartedDaily) {
      const today = getLocalDateString();
      if (lastDailyCompletedDate !== today) {
        setShowDailyPrompt(true);
      }
      setHasAutoStartedDaily(true);
    }
  }, [isInitialized, isProfileLoading, userId, lastDailyCompletedDate, hasAutoStartedDaily]);

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
    let categoryName = categoryOrFile;
    
    if (SKILL_TO_THEORY_MAP[categoryOrFile]) {
      theoryFile = SKILL_TO_THEORY_MAP[categoryOrFile];
    } else {
      // Find category key from theory file
      const reverseMap = Object.entries(SKILL_TO_THEORY_MAP).find(([_, val]) => val === categoryOrFile);
      if (reverseMap) {
        categoryName = reverseMap[0];
      }
    }

    // Premium validation
    if (!isPremium) {
      // Check if it's a premium module (anything other than 01 and 02)
      const isPremiumDrill = theoryFile !== '01_chart_market_basics.md' && theoryFile !== '02_candlestick_price_action.md';
      
      if (isPremiumDrill) {
        setShowPremiumModal(true);
        return;
      }

      // Check daily limit (max 3 drills/gym training sessions)
      if (dailyDrillCount >= 3) {
        setShowPremiumModal(true);
        return;
      }
    }

    // Filter quizzes by theoryRef
    const categoryQuizzes = quizzesList.filter(q => q.theoryRef === theoryFile);
    if (categoryQuizzes.length === 0) {
      alert('해당 훈련 범주의 퀴즈를 불러올 수 없습니다. 데이터베이스 연동을 확인해 주세요.');
      return;
    }

    const categoryRating = ratingState.categories[categoryName]?.rating || 1000;

    // Split category quizzes into uncompleted and completed
    const uncompletedPool = categoryQuizzes.filter(q => !completedQuizzes.includes(q.id));
    const completedPool = categoryQuizzes.filter(q => completedQuizzes.includes(q.id));
    
    const shuffle = (array: QuizItem[]) => [...array].sort(() => 0.5 - Math.random());

    // Select uncompleted quizzes matching rating
    // Target 1: Uncompleted within ±200 RP
    let uncompletedSelected = uncompletedPool.filter(q => {
      const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
      return Math.abs(qRating - categoryRating) <= 200;
    });

    // Target 2: Expand to ±350 RP
    if (uncompletedSelected.length < 5) {
      const expanded = uncompletedPool.filter(q => {
        const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
        const diff = Math.abs(qRating - categoryRating);
        return diff > 200 && diff <= 350;
      });
      uncompletedSelected = [...uncompletedSelected, ...expanded];
    }

    // Target 3: Fallback to all uncompleted
    if (uncompletedSelected.length < 5) {
      const rest = uncompletedPool.filter(q => {
        const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
        return Math.abs(qRating - categoryRating) > 350;
      });
      uncompletedSelected = [...uncompletedSelected, ...rest];
    }

    let selected: QuizItem[] = shuffle(uncompletedSelected);

    // If less than 5, fill with completed quizzes matching rating
    if (selected.length < 5) {
      const neededCount = 5 - selected.length;

      // Completed Target 1: Completed within ±200 RP
      let completedSelected = completedPool.filter(q => {
        const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
        return Math.abs(qRating - categoryRating) <= 200;
      });

      // Completed Target 2: Expanded ±350 RP
      if (completedSelected.length < neededCount) {
        const expanded = completedPool.filter(q => {
          const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
          const diff = Math.abs(qRating - categoryRating);
          return diff > 200 && diff <= 350;
        });
        completedSelected = [...completedSelected, ...expanded];
      }

      // Completed Target 3: All completed fallback
      if (completedSelected.length < neededCount) {
        const rest = completedPool.filter(q => {
          const qRating = 800 + ((q.difficulty || 3) - 1) * 200;
          return Math.abs(qRating - categoryRating) > 350;
        });
        completedSelected = [...completedSelected, ...rest];
      }

      selected = [...selected, ...shuffle(completedSelected).slice(0, neededCount)];
    } else {
      selected = selected.slice(0, 5);
    }

    // Ultimate fallback: if selected is still empty, fallback to categoryQuizzes
    if (selected.length === 0 && categoryQuizzes.length > 0) {
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

    if (!isPremium) {
      const nextCount = dailyDrillCount + 1;
      setDailyDrillCount(nextCount);
      localStorage.setItem('chartmon_daily_drill_count', String(nextCount));
    }

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
        let msg = `🎉 일일 훈련 복습 완료!\n- 정답률: ${Math.round((sessionCorrectAnswers / activeQuizList.length) * 100)}% (${sessionCorrectAnswers}/${activeQuizList.length} 정답)\n- 획득 경험치: +${sessionXp} XP\n🎁 복습 완료 보너스 (+5 XP) 추가 지급!`;
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
          ? `🎉 오늘의 일일 훈련 완료! (+${sessionXp} XP 획득)\n📈 트레이더 레이팅: ${ratingState.overallRating} → ${nextRatingState.overallRating} RP (${eloDiffStr} RP)`
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
        background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
        color: '#fff',
        fontFamily: 'var(--font-main)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow effect in background */}
        <div style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'rgba(59, 130, 246, 0.15)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }} />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 24px'
        }}>
          {/* Logo container */}
          <div style={{
            position: 'relative',
            width: '96px',
            height: '96px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px 2px rgba(139, 92, 246, 0.2)',
            animation: 'pulse 2s infinite ease-in-out'
          }}>
            {/* Custom SVG logo representing a cute chart monster */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Eyes */}
              <circle cx="9" cy="7" r="1.5" fill="#50e3c2"/>
              <circle cx="15" cy="7" r="1.5" fill="#50e3c2"/>
            </svg>
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '36px',
            fontWeight: '800',
            letterSpacing: '-0.05em',
            margin: '0 0 8px 0',
            background: 'linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 12px rgba(59, 130, 246, 0.1)'
          }}>
            ChartMon
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#e2e8f0',
            margin: '0 0 12px 0',
            letterSpacing: '-0.02em'
          }}>
            나만의 AI 주식 차트 트레이너
          </p>

          {/* Promotional description */}
          <p style={{
            fontSize: '13px',
            color: '#94a3b8',
            margin: '0 0 32px 0',
            maxWidth: '280px',
            lineHeight: '1.6',
            fontWeight: '400'
          }}>
            매일 15분, 실제 주식 차트 데이터를 분석하며 실전 트레이딩 감각을 키워보세요.
          </p>

          {/* Sleek Progress / Loading indicator */}
          <div style={{
            width: '180px',
            height: '4px',
            background: '#1e293b',
            borderRadius: '2px',
            overflow: 'hidden',
            marginBottom: '16px'
          }}>
            <div style={{
              height: '100%',
              width: '50%',
              background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)',
              borderRadius: '2px',
              animation: 'loadingProgress 1.8s infinite ease-in-out'
            }} />
          </div>

          <p style={{
            fontSize: '11px',
            color: '#64748b',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            margin: 0
          }}>
            Loading system data...
          </p>
        </div>

        {/* Global style overrides for the custom animations */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loadingProgress {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px 2px rgba(139, 92, 246, 0.2); }
            50% { transform: scale(1.03); box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.6), 0 0 25px 5px rgba(139, 92, 246, 0.4); }
            100% { transform: scale(1); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 20px 2px rgba(139, 92, 246, 0.2); }
          }
        `}} />
      </div>
    );
  }

  if (isSupabaseConfigured && !userId && !isGuestMode) {
    return (
      <div className="welcome-screen">
        <div className="welcome-logo-container">
          <div className="welcome-logo-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Eyes */}
              <circle cx="9" cy="7" r="1.5" fill="#50e3c2"/>
              <circle cx="15" cy="7" r="1.5" fill="#50e3c2"/>
            </svg>
          </div>
          <h2 className="welcome-title">ChartMon</h2>
          <p className="welcome-subtitle">하루 15분 주식 차트 트레이딩 실전 훈련</p>
        </div>

        <div className="welcome-card">
          <div className="welcome-feature-list">
            <div className="welcome-feature-item">
              <div className="welcome-feature-icon">
                <Play size={16} fill="currentColor" />
              </div>
              <div>
                <div className="welcome-feature-title">실제 주식 차트 데이터 기반 퀴즈</div>
                <div className="welcome-feature-desc">과거 실제 주식 차트를 분석하며 올바른 매매 결정을 내리는 훈련을 합니다.</div>
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
                <div className="welcome-feature-title">매일 제공되는 일일 맞춤 훈련</div>
                <div className="welcome-feature-desc">하루 한 번, 꾸준한 주식 차트 읽기 연습으로 스트릭을 유지하고 경험치를 쌓아 등급을 올리세요.</div>
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
          
          <button 
            className="guest-login-btn" 
            onClick={() => setIsGuestMode(true)}
            style={{
              marginTop: '12px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#94a3b8',
              width: '100%',
              padding: '12px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            로그인 없이 게스트로 시작하기
          </button>
        </div>

        <div className="welcome-footer">
          계속 진행하면 서비스 이용약관 및 개인정보 처리방침에 동의하게 됩니다.
        </div>
      </div>
    );
  }

  if (showOnboarding) {
    return <WelcomeOnboarding onClose={() => setShowOnboarding(false)} />;
  }

  return (
    <div className="app-container">
      {currentView !== 'quiz' && (
        <header className={isScrolled ? 'scrolled' : ''}>
          <div className="logo-section" onClick={() => { setCurrentView('dashboard'); }} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="1" fill="#50e3c2"/>
              <circle cx="15" cy="7" r="1" fill="#50e3c2"/>
            </svg>
            <h1 className="logo-text">ChartMon</h1>
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
            isPremium={isPremium}
            onTriggerPremium={() => setShowPremiumModal(true)}
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
            isPremium={isPremium}
            onTriggerPremium={() => setShowPremiumModal(true)}
            dailyDrillCount={dailyDrillCount}
          />
        )}

        {currentView === 'settings' && (
          <SettingsTab 
            userId={userId} 
            userEmail={userEmail} 
            onLogout={handleLogout}
            onDeleteAccount={handleDeleteAccount}
            onTestOnboarding={() => setShowOnboarding(true)}
            isPremium={isPremium}
            onTriggerPremium={() => setShowPremiumModal(true)}
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
            <span>일일 훈련</span>
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
                오늘의 일일 맞춤 훈련(15문제)을 지금 바로 시작하시겠습니까?
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

      {/* Terminology Explanation Slide-down Banner */}
      <div 
        style={{
          position: 'fixed',
          top: termExplanation ? '16px' : '-200px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '480px',
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(124, 108, 250, 0.35)',
          borderRadius: '16px',
          padding: '14px 18px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
          zIndex: 99999,
          transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
        onClick={(e) => {
          // Prevent closing when clicking inside the banner itself
          e.stopPropagation();
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <strong style={{ color: '#60a5fa', fontSize: '14px', fontWeight: '800' }}>
            {termExplanation?.term}
          </strong>
          <button 
            onClick={() => setTermExplanation(null)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
          >
            <X size={16} />
          </button>
        </div>
        <p style={{ 
          color: '#cbd5e1', 
          fontSize: '12.5px', 
          lineHeight: '1.5',
          margin: 0,
          fontWeight: '500'
        }}>
          {termExplanation?.definition}
        </p>
      </div>

      <PremiumPlansModal 
        isOpen={showPremiumModal} 
        onClose={() => setShowPremiumModal(false)} 
        onPaymentSuccess={handlePaymentSuccess} 
      />
    </div>
  );
};
export default App;


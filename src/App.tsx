import React, { useState, useEffect } from 'react';
import { quizzes, getTradingTier, getLocalDateString, getYesterdayDateString, isOlderThanYesterday } from './data/quizzes';
import type { QuizItem } from './data/quizzes';
import { Dashboard } from './components/Dashboard';
import { QuizCard } from './components/QuizCard';
import { Flame, Award, LayoutDashboard, User, CheckCircle, Smartphone, Trophy } from 'lucide-react';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';
import { DrillGymTab } from './components/DrillGymTab';

type ViewMode = 'dashboard' | 'quiz' | 'drill' | 'profile';

import { 
  createDefaultRatingState, 
  processSessionUpdates, 
  ALL_CATEGORIES 
} from './lib/ratingEngine';
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

  const [quizzesList, setQuizzesList] = useState<QuizItem[]>(quizzes);
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [activeQuizList, setActiveQuizList] = useState<QuizItem[]>([]);
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Fetch quizzes and profiles from Supabase if configured
  useEffect(() => {
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
            const formatted: QuizItem[] = data.map(q => ({
              id: Number(q.id),
              category: q.category,
              categoryKey: getCategoryKey(q.category),
              difficulty: Number(q.difficulty) || 3,
              theoryRef: q.theory_ref,
              question: q.question,
              chartData: q.chart_data,
              drawings: q.drawings,
              options: q.options,
              correctIndex: q.correct_index,
              explanation: q.explanation
            }));
            setQuizzesList(formatted);
          }
        } catch (e) {
          console.error('ChartMon: Supabase load quizzes failed, using local.', e);
        }

        // 2. Load authenticated user profile
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            setUserId(user.id);
            setUserEmail(user.email || 'Authenticated User');
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
              checkLocalStreak();
            }
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
    }

    loadInitialData();
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

  const startDailyTraining = () => {
    // Select 15 quizzes: uncompleted first, then fill with completed
    const uncompleted = quizzesList.filter(q => !completedQuizzes.includes(q.id));
    let selected: QuizItem[];
    if (uncompleted.length >= 15) {
      selected = uncompleted.slice(0, 15);
    } else {
      selected = [...uncompleted];
      const completed = quizzesList.filter(q => completedQuizzes.includes(q.id));
      const shuffledCompleted = [...completed].sort(() => 0.5 - Math.random());
      selected = [...selected, ...shuffledCompleted.slice(0, 15 - selected.length)];
    }

    setActiveQuizList(selected);
    setActiveQuizIndex(0);
    setSessionXp(0);
    setSessionCompletedIds([]);
    setSessionCorrectAnswers(0);
    setIsDailySession(true);
    setCurrentView('quiz');
  };

  const startDrill = (category: string) => {
    // Filter quizzes by category
    const categoryQuizzes = quizzesList.filter(q => q.category === category);
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
    setIsDailySession(false);
    setCurrentView('quiz');
  };

  const handleAnswerChecked = (isCorrect: boolean) => {
    if (isCorrect) {
      setSessionCorrectAnswers(prev => prev + 1);
      const currentQuiz = activeQuizList[activeQuizIndex];
      if (currentQuiz) {
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

      if (isDailySession) {
        if (lastDailyCompletedDate !== today) {
          finalXp += 30; // +30 XP Daily Training completion bonus
          finalDailyCompletedDate = today;
          dailyBonusAwarded = true;
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

      // ELO Rating and Skill Proficiency processing
      const sessionQuizzes = activeQuizList.map(quiz => ({
        id: quiz.id,
        category: quiz.category,
        difficulty: quiz.difficulty,
        isCorrect: sessionCompletedIds.includes(quiz.id)
      }));

      const nextRatingState = processSessionUpdates(ratingState, sessionQuizzes, ALL_CATEGORIES);

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

  const currentTier = getTradingTier(xp);

  return (
    <div className="app-container">
      {/* Top Header Section */}
      {currentView !== 'quiz' && (
        <header>
          <div className="logo-section" onClick={() => { setCurrentView('dashboard'); }} style={{ cursor: 'pointer' }}>
            <h1>ChartMon</h1>
          </div>
          <div className="stats-bar">
            <div className="stat-item tier" title={`${currentTier.name}: ${currentTier.description}`} style={{ border: '1px solid rgba(59, 130, 246, 0.25)', background: 'rgba(59, 130, 246, 0.05)', color: 'var(--color-brand)' }}>
              <span>{currentTier.badge} {currentTier.name.split(' ')[0]}</span>
            </div>
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
            xp={xp}
            streakBroken={streakBroken}
            onCloseStreakWarning={() => setStreakBroken(false)}
            isDailyCompletedToday={lastDailyCompletedDate === getLocalDateString()}
            drillStats={ratingState.categories}
            overallRating={ratingState.overallRating}
            completedQuizzes={completedQuizzes}
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

        {currentView === 'profile' && (
          <div style={{ padding: '24px 20px', paddingBottom: '90px', display: 'flex', flex: 1, flexDirection: 'column', gap: '20px' }}>
            <h2 className="card-title">
              <User size={20} style={{ color: 'var(--color-brand)' }} />
              내 프로필
            </h2>

            {/* Profile Avatar Card */}
            <div className="welcome-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', border: '2px solid var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px' }}>
                {currentTier.badge}
              </div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>{currentTier.name}</h3>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Lv.{currentTier.level} 트레이더</p>
              </div>
            </div>

            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Flame size={12} color="var(--color-streak)" /> 학습 스트릭
                </span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-streak)' }}>{streak}일 연속</span>
              </div>
              
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Award size={12} color="var(--color-xp)" /> 획득한 경험치
                </span>
                <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-xp)' }}>{xp} XP</span>
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px', gridColumn: 'span 2' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <CheckCircle size={12} color="var(--color-bullish)" /> 학습 진척도 (모듈 완료 수)
                </span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 800 }}>{completedQuizzes.length} / {quizzesList.length} 개 모듈 완료</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{quizzesList.length > 0 ? Math.round((completedQuizzes.length / quizzesList.length) * 100) : 0}%</span>
                </div>
              </div>
            </div>

            {/* Cloud Data Backup Option */}
            <div style={{ background: 'rgba(59, 130, 246, 0.03)', border: '1px dashed rgba(59, 130, 246, 0.25)', borderRadius: '16px', padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <Smartphone size={18} color="var(--color-brand)" style={{ marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700 }}>{userId ? '클라우드 연동 완료' : '진행 상황을 서버에 저장하세요'}</h4>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px', lineHeight: 1.5 }}>
                    {userId ? `연동 계정: ${userEmail}` : '현재 게스트 모드로 학습 중입니다. 기기를 바꾸거나 앱을 지워도 진행 데이터와 등급이 보존되도록 구글 계정 연동을 준비 중입니다.'}
                  </p>
                </div>
              </div>
              {!userId && (
                <button className="btn-drawer-action check" style={{ fontSize: '13px', padding: '10px' }} onClick={() => alert('구글 클라우드 로그인 연동 준비 중입니다.')}>
                  구글 계정 연동하기 (준비 중)
                </button>
              )}
            </div>

            </div>
        )}
      </main>

      {/* Sticky Bottom Tabs Navigation */}
      {currentView !== 'quiz' && (
        <nav className="tabs-navigation" style={{ zIndex: 100 }}>
          <button
            onClick={() => { setCurrentView('dashboard'); }}
            className={`tab-btn ${currentView === 'dashboard' ? 'active' : ''}`}
          >
            <LayoutDashboard size={20} />
            <span>데일리 트레이닝</span>
          </button>
          <button
            onClick={() => { setCurrentView('drill'); }}
            className={`tab-btn ${currentView === 'drill' ? 'active' : ''}`}
          >
            <Trophy size={20} />
            <span>차트 훈련소</span>
          </button>
          <button
            onClick={() => { setCurrentView('profile'); }}
            className={`tab-btn ${currentView === 'profile' ? 'active' : ''}`}
          >
            <User size={20} />
            <span>내 프로필</span>
          </button>
        </nav>
      )}
    </div>
  );
};
export default App;

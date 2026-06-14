import React, { useState, useEffect } from 'react';
import { quizzes, getTradingTier, getLocalDateString, getYesterdayDateString, isOlderThanYesterday } from './data/quizzes';
import type { QuizItem } from './data/quizzes';
import { Dashboard } from './components/Dashboard';
import { QuizCard } from './components/QuizCard';
import { TheoryReader } from './components/TheoryReader';
import { Flame, Award, LayoutDashboard, User, CheckCircle, Smartphone, BookOpen } from 'lucide-react';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';

type ViewMode = 'dashboard' | 'quiz' | 'theory' | 'profile';

interface DrillStat {
  level: number;
  accuracy: number;
  attempts: number;
}

const getCategoryKey = (category: string): 'candlestick' | 'sr' | 'trendline' | 'pattern' | 'indicator' | 'risk' => {
  switch (category) {
    case '캔들 패턴 인지': return 'candlestick';
    case '지지/저항 & 돌파': return 'sr';
    case '추세선과 채널': return 'trendline';
    case '차트 패턴 포착': return 'pattern';
    case '보조지표 다이버전스': return 'indicator';
    case '자금관리/손익비': return 'risk';
    default: return 'candlestick';
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
  const [drillStats, setDrillStats] = useState<Record<string, DrillStat>>(() => {
    const saved = localStorage.getItem('chartmon_drill_stats');
    return saved ? JSON.parse(saved) : {};
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
  const [sessionCategory, setSessionCategory] = useState<string | null>(null);
  const [isDailySession, setIsDailySession] = useState<boolean>(false);

  const [quizzesList, setQuizzesList] = useState<QuizItem[]>(quizzes);
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [activeQuizList, setActiveQuizList] = useState<QuizItem[]>([]);
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [activeTheoryFile, setActiveTheoryFile] = useState<string>('');
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
                    drill_stats: profileDrillStats,
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
              setDrillStats(profileDrillStats);

              localStorage.setItem('chartmon_streak', String(finalStreak));
              localStorage.setItem('chartmon_xp', String(profileXp));
              localStorage.setItem('chartmon_completed', JSON.stringify(profileCompleted));
              localStorage.setItem('chartmon_drill_stats', JSON.stringify(profileDrillStats));
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
    newDrillStats: Record<string, DrillStat>
  ) => {
    setXp(newXp);
    setStreak(newStreak);
    setCompletedQuizzes(newCompleted);
    setLastActiveDate(newActiveDate);
    setLastDailyCompletedDate(newDailyCompletedDate);
    setDrillStats(newDrillStats);

    localStorage.setItem('chartmon_xp', String(newXp));
    localStorage.setItem('chartmon_streak', String(newStreak));
    localStorage.setItem('chartmon_completed', JSON.stringify(newCompleted));
    localStorage.setItem('chartmon_drill_stats', JSON.stringify(newDrillStats));
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
          drill_stats: newDrillStats,
          updated_at: new Date().toISOString()
        });
      } catch (e) {
        console.error('ChartMon: Syncing profile with Supabase failed.', e);
      }
    }
  };

  const startDailyTraining = () => {
    // Select 3 quizzes: uncompleted first, then fill with completed
    const uncompleted = quizzesList.filter(q => !completedQuizzes.includes(q.id));
    let selected: QuizItem[];
    if (uncompleted.length >= 3) {
      selected = uncompleted.slice(0, 3);
    } else {
      selected = [...uncompleted];
      const completed = quizzesList.filter(q => completedQuizzes.includes(q.id));
      const shuffledCompleted = [...completed].sort(() => 0.5 - Math.random());
      selected = [...selected, ...shuffledCompleted.slice(0, 3 - selected.length)];
    }

    setActiveQuizList(selected);
    setActiveQuizIndex(0);
    setSessionXp(0);
    setSessionCompletedIds([]);
    setSessionCorrectAnswers(0);
    setSessionCategory(null);
    setIsDailySession(true);
    setCurrentView('quiz');
  };

  const startDrill = (category: string) => {
    // Filter quizzes by category
    const categoryQuizzes = quizzesList.filter(q => q.category === category);
    if (categoryQuizzes.length === 0) {
      alert('해당 드릴 범주의 퀴즈를 불러올 수 없습니다. 데이터베이스 연동을 확인해 주세요.');
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
    setSessionCategory(category);
    setIsDailySession(false);
    setCurrentView('quiz');
  };

  const handleSelectModule = (theoryFile: string) => {
    setActiveTheoryFile(theoryFile);
    setCurrentView('theory');
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

      // Update drill statistics if this was a drill session
      const nextDrillStats = { ...drillStats };
      if (sessionCategory) {
        const sessionAccuracy = Math.round((sessionCorrectAnswers / activeQuizList.length) * 100);
        const currentStats = drillStats[sessionCategory] || { level: 1, accuracy: 0, attempts: 0 };
        const nextAttempts = currentStats.attempts + 1;
        const nextAccuracy = Math.max(currentStats.accuracy, sessionAccuracy);
        
        // Calculate new level: Milestones based on attempts & best accuracy
        let nextLevel = 1;
        if (nextAttempts >= 20 && nextAccuracy >= 95) nextLevel = 5;
        else if (nextAttempts >= 10 && nextAccuracy >= 90) nextLevel = 4;
        else if (nextAttempts >= 5 && nextAccuracy >= 80) nextLevel = 3;
        else if (nextAttempts >= 2 && nextAccuracy >= 60) nextLevel = 2;

        nextDrillStats[sessionCategory] = {
          level: nextLevel,
          accuracy: nextAccuracy,
          attempts: nextAttempts
        };

        // Feedback alert
        let msg = `🎯 드릴 훈련 완료!\n- 정답률: ${sessionAccuracy}% (${sessionCorrectAnswers}/${activeQuizList.length} 정답)\n- 획득 경험치: +${sessionXp} XP`;
        if (nextLevel > currentStats.level) {
          msg += `\n\n🔥 레벨 업! [${sessionCategory}] 드릴 레벨이 Lv.${nextLevel}로 상승했습니다!`;
        }
        alert(msg);
      } else {
        // Daily training feedback
        let msg = `🎉 오늘의 데일리 트레이닝 완료! (+${sessionXp} XP 획득)`;
        if (dailyBonusAwarded) {
          msg += `\n🎁 일일 완성 보너스 (+30 XP) 추가 지급!`;
        }
        alert(msg);
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
        nextDrillStats
      );

      setCurrentView('dashboard');
    }
  };

  const currentTier = getTradingTier(xp);

  // 6 Theories details for the list tab
  const theoryModulesList = [
    { id: 1, title: '01. 캔들스틱 기초 (Candlesticks)', desc: '캔들의 구조와 단일/복합 캔들 반전 패턴', file: '01_candlestick_basics.md', category: '캔들스틱 기초' },
    { id: 2, title: '02. 지지와 저항 (Support & Resistance)', desc: '매물대 작도법 및 역할 전환과 가짜 돌파', file: '02_support_resistance.md', category: '지지와 저항' },
    { id: 3, title: '03. 추세선과 채널 (Trendlines & Channels)', desc: '추세 정의 및 평행 채널 작도와 추세선 돌파', file: '03_trendlines_channels.md', category: '추세선과 채널' },
    { id: 4, title: '04. 차트 패턴 (Chart Patterns)', desc: '헤드앤숄더 및 삼각형, 깃발형 패턴의 완성', file: '04_chart_patterns.md', category: '차트 패턴' },
    { id: 5, title: '05. 기술적 보조지표 (Technical Indicators)', desc: 'EMA 정배열, RSI 다이버전스 및 MACD 활용법', file: '05_technical_indicators.md', category: '보조지표' },
    { id: 6, title: '06. 리스크 관리 (Risk Management)', desc: '손익비 계산과 2% 룰 기반 포지션 사이징 공식', file: '06_risk_management.md', category: '리스크 관리' }
  ];

  return (
    <div className="app-container">
      {/* Top Header Section */}
      {currentView !== 'quiz' && (
        <header>
          <div className="logo-section" onClick={() => { setCurrentView('dashboard'); setActiveTheoryFile(''); }} style={{ cursor: 'pointer' }}>
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
            onSelectModule={handleSelectModule}
            onStartDrill={startDrill}
            xp={xp}
            streakBroken={streakBroken}
            onCloseStreakWarning={() => setStreakBroken(false)}
            isDailyCompletedToday={lastDailyCompletedDate === getLocalDateString()}
            drillStats={drillStats}
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

        {currentView === 'theory' && (
          <>
            {activeTheoryFile === '' ? (
              /* Display list of theories to select */
              <div style={{ padding: '24px 20px', paddingBottom: '90px' }}>
                <h2 className="card-title" style={{ marginBottom: '20px' }}>
                  <BookOpen size={20} style={{ color: 'var(--color-brand)' }} />
                  트레이딩 핵심 이론 백과
                </h2>
                <div className="modules-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {theoryModulesList.map((tm) => (
                    <div 
                      key={tm.id} 
                      className="module-card"
                      onClick={() => setActiveTheoryFile(tm.file)}
                      style={{
                        cursor: 'pointer',
                        padding: '18px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'transform 0.2s, border-color 0.2s',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(22, 26, 37, 0.4) 100%)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-brand-glow)'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                    >
                      <div>
                        <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px', color: '#fff' }}>{tm.title}</h3>
                        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{tm.desc}</p>
                      </div>
                      <span className="category-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-brand)', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '6px', flexShrink: 0 }}>
                        {tm.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* Render the selected theory */
              <TheoryReader
                theoryFile={activeTheoryFile}
                onBack={() => setActiveTheoryFile('')}
              />
            )}
          </>
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
            onClick={() => { setCurrentView('dashboard'); setActiveTheoryFile(''); }}
            className={`tab-btn ${currentView === 'dashboard' ? 'active' : ''}`}
          >
            <LayoutDashboard size={20} />
            <span>대시보드</span>
          </button>
          <button
            onClick={() => { setCurrentView('theory'); setActiveTheoryFile(''); }}
            className={`tab-btn ${currentView === 'theory' ? 'active' : ''}`}
          >
            <BookOpen size={20} />
            <span>이론 백과</span>
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

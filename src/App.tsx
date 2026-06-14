import React, { useState, useEffect } from 'react';
import { quizzes, getTradingTier } from './data/quizzes';
import type { QuizItem } from './data/quizzes';
import { Dashboard } from './components/Dashboard';
import { QuizCard } from './components/QuizCard';
import { TheoryReader } from './components/TheoryReader';
import { Flame, Award, LayoutDashboard, User, CheckCircle, Smartphone } from 'lucide-react';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';

type ViewMode = 'dashboard' | 'quiz' | 'theory' | 'profile';

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

  const [quizzesList, setQuizzesList] = useState<QuizItem[]>(quizzes);
  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [activeQuizList, setActiveQuizList] = useState<QuizItem[]>([]);
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [activeTheoryFile, setActiveTheoryFile] = useState<string>('01_candlestick_basics.md');
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Fetch quizzes and profiles from Supabase if configured
  useEffect(() => {
    async function loadInitialData() {
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
              setStreak(profile.streak);
              setXp(profile.xp);
              setCompletedQuizzes(profile.completed_quizzes || []);
            }
          }
        } catch (e) {
          console.error('ChartMon: Profile loading failed.', e);
        }
      }
    }

    loadInitialData();
  }, []);

  // Sync state changes with LocalStorage and Supabase (upsert)
  const updateStats = async (newXp: number, newStreak: number, newCompleted: number[]) => {
    setXp(newXp);
    setStreak(newStreak);
    setCompletedQuizzes(newCompleted);

    localStorage.setItem('chartmon_xp', String(newXp));
    localStorage.setItem('chartmon_streak', String(newStreak));
    localStorage.setItem('chartmon_completed', JSON.stringify(newCompleted));

    if (isSupabaseConfigured && userId) {
      try {
        const tier = getTradingTier(newXp);
        await supabase.from('profiles').upsert({
          id: userId,
          xp: newXp,
          streak: newStreak,
          trading_level: tier.level,
          completed_quizzes: newCompleted,
          updated_at: new Date().toISOString()
        });
      } catch (e) {
        console.error('ChartMon: Syncing profile with Supabase failed.', e);
      }
    }
  };

  const startDailyTraining = () => {
    setActiveQuizList(quizzesList);
    setActiveQuizIndex(0);
    setCurrentView('quiz');
  };

  const startQuizById = (id: number) => {
    const targetQuiz = quizzesList.find(q => q.id === id);
    if (targetQuiz) {
      setActiveQuizList([targetQuiz]);
      setActiveQuizIndex(0);
      setCurrentView('quiz');
    }
  };

  const handleSelectModule = (theoryFile: string) => {
    setActiveTheoryFile(theoryFile);
    setCurrentView('theory');
  };

  const handleAnswerChecked = (isCorrect: boolean) => {
    if (isCorrect) {
      const newXp = xp + 10;
      const currentQuiz = activeQuizList[activeQuizIndex];
      const newCompleted = [...completedQuizzes];
      if (currentQuiz && !completedQuizzes.includes(currentQuiz.id)) {
        newCompleted.push(currentQuiz.id);
      }
      updateStats(newXp, streak, newCompleted);
    }
  };

  const handleNextQuiz = () => {
    if (activeQuizIndex + 1 < activeQuizList.length) {
      setActiveQuizIndex(prev => prev + 1);
    } else {
      alert(`🎉 축하합니다! 오늘의 트레이닝 완료! +${activeQuizList.length * 10} XP 획득!`);
      const newStreak = streak + 1;
      updateStats(xp, newStreak, completedQuizzes);
      setCurrentView('dashboard');
    }
  };

  const currentTier = getTradingTier(xp);

  return (
    <div className="app-container">
      {/* Top Header Section */}
      {currentView !== 'quiz' && (
        <header>
          <div className="logo-section" onClick={() => setCurrentView('dashboard')} style={{ cursor: 'pointer' }}>
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
            onStartQuizById={startQuizById}
            completedQuizzes={completedQuizzes}
            xp={xp}
          />
        )}

        {currentView === 'quiz' && activeQuizList.length > 0 && (
          <QuizCard
            quiz={activeQuizList[activeQuizIndex]}
            currentIndex={activeQuizIndex}
            totalQuizzes={activeQuizList.length}
            onClose={() => setCurrentView('dashboard')}
            onAnswerChecked={handleAnswerChecked}
            onNext={handleNextQuiz}
          />
        )}

        {currentView === 'theory' && (
          <TheoryReader
            theoryFile={activeTheoryFile}
            onBack={() => setCurrentView('dashboard')}
          />
        )}

        {currentView === 'profile' && (
          <div style={{ padding: '24px 20px', display: 'flex', flex: 1, flexDirection: 'column', gap: '20px' }}>
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
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{Math.round((completedQuizzes.length / quizzesList.length) * 100)}%</span>
                </div>
              </div>
            </div>

            {/* Cloud Data Backup Option */}
            <div style={{ background: 'rgba(59, 130, 246, 0.03)', border: '1px dashed rgba(59, 130, 246, 0.25)', borderRadius: '16px', padding: '18px', marginTop: '10px' }}>
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
        <nav className="tabs-navigation">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`tab-btn ${currentView === 'dashboard' || currentView === 'theory' ? 'active' : ''}`}
          >
            <LayoutDashboard size={20} />
            <span>대시보드</span>
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`tab-btn ${currentView === 'profile' ? 'active' : ''}`}
          >
            <User size={20} />
            <span>프로필</span>
          </button>
        </nav>
      )}
    </div>
  );
};
export default App;

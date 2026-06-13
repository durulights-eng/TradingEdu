import React, { useState, useEffect } from 'react';
import { quizzes } from './data/quizzes';
import type { QuizItem } from './data/quizzes';
import { Dashboard } from './components/Dashboard';
import { QuizCard } from './components/QuizCard';
import { TheoryReader } from './components/TheoryReader';
import { Flame, Award, LayoutDashboard, CheckSquare } from 'lucide-react';

type ViewMode = 'dashboard' | 'quiz' | 'theory' | 'roadmap';

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

  const [currentView, setCurrentView] = useState<ViewMode>('dashboard');
  const [activeQuizList, setActiveQuizList] = useState<QuizItem[]>([]);
  const [activeQuizIndex, setActiveQuizIndex] = useState<number>(0);
  const [activeTheoryFile, setActiveTheoryFile] = useState<string>('01_candlestick_basics.md');

  // Business Roadmap Checklist States (for reference inside the app)
  const [roadmapChecklist, setRoadmapChecklist] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('chartmon_roadmap');
    return saved ? JSON.parse(saved) : {
      'github': false,
      'scaffold': true, // Auto checked since we are doing this now!
      'play_console': false,
      'draft_docs': true, // Auto checked since we wrote docs!
      'quizzes': true, // Auto checked since we wrote quizzes!
      'insta_biz': false,
      'meta_ads': false,
      'payments': false
    };
  });

  useEffect(() => {
    localStorage.setItem('chartmon_streak', String(streak));
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('chartmon_xp', String(xp));
  }, [xp]);

  useEffect(() => {
    localStorage.setItem('chartmon_completed', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

  useEffect(() => {
    localStorage.setItem('chartmon_roadmap', JSON.stringify(roadmapChecklist));
  }, [roadmapChecklist]);

  // Daily 15-minute training triggers all quizzes sequentially
  const startDailyTraining = () => {
    // Shuffle quizzes or select all
    setActiveQuizList(quizzes);
    setActiveQuizIndex(0);
    setCurrentView('quiz');
  };

  const startQuizById = (id: number) => {
    const targetQuiz = quizzes.find(q => q.id === id);
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
      setXp(prev => prev + 10);
      // Mark current quiz as completed
      const currentQuiz = activeQuizList[activeQuizIndex];
      if (currentQuiz && !completedQuizzes.includes(currentQuiz.id)) {
        setCompletedQuizzes(prev => [...prev, currentQuiz.id]);
      }
    }
  };

  const handleNextQuiz = () => {
    if (activeQuizIndex + 1 < activeQuizList.length) {
      setActiveQuizIndex(prev => prev + 1);
    } else {
      // Completed the quiz deck!
      alert(`🎉 축하합니다! 오늘의 트레이닝 완료! +${activeQuizList.length * 10} XP 획득!`);
      // Update streak
      setStreak(prev => prev + 1);
      setCurrentView('dashboard');
    }
  };

  const toggleRoadmapItem = (key: string) => {
    setRoadmapChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="app-container">
      {/* Top Header Section */}
      {currentView !== 'quiz' && (
        <header>
          <div className="logo-section" onClick={() => setCurrentView('dashboard')} style={{ cursor: 'pointer' }}>
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
            onSelectModule={handleSelectModule}
            onStartQuizById={startQuizById}
            completedQuizzes={completedQuizzes}
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

        {currentView === 'roadmap' && (
          <div style={{ padding: '24px 20px', display: 'flex', flex: 1, flexDirection: 'column', gap: '20px' }}>
            <h2 className="card-title">
              <CheckSquare size={20} style={{ color: 'var(--color-brand)' }} />
              ChartMon 사업 런칭 로드맵
            </h2>
            <div className="theory-content" style={{ maxHeight: 'calc(100vh - 200px)' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
                기본 사업자등록, 법인 설립 및 구글 개발자 계정이 준비되어 있으므로 아래 단계를 완료하여 서비스를 출시하십시오.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.github} onChange={() => toggleRoadmapItem('github')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.github ? 'var(--text-muted)' : 'var(--text-primary)' }}>1. 깃허브 리포지토리 생성 및 연동</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>ChartMon 비공개 저장소 생성 후 로컬 코드 푸시</span>
                  </div>
                </label>

                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.scaffold} onChange={() => toggleRoadmapItem('scaffold')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.scaffold ? 'var(--text-muted)' : 'var(--text-primary)' }}>2. 앱 코딩 스캐폴딩 구축 [완료]</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Vite + React + TS 기반 대시보드/차트/퀴즈 UI 완료</span>
                  </div>
                </label>

                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.draft_docs} onChange={() => toggleRoadmapItem('draft_docs')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.draft_docs ? 'var(--text-muted)' : 'var(--text-primary)' }}>3. 트레이딩 이론 및 마케팅 카피 작성 [완료]</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>6개의 대분류 기술적 분석 문서 docs/ 폴더에 보관 완료</span>
                  </div>
                </label>

                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.quizzes} onChange={() => toggleRoadmapItem('quizzes')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.quizzes ? 'var(--text-muted)' : 'var(--text-primary)' }}>4. 실전 차트 퀴즈 설계 및 바인딩 [완료]</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>총 6개 실전 분석 퀴즈 데이터 및 캔버스 렌더러 구축 완료</span>
                  </div>
                </label>

                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.insta_biz} onChange={() => toggleRoadmapItem('insta_biz')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.insta_biz ? 'var(--text-muted)' : 'var(--text-primary)' }}>5. 인스타그램 비즈니스 계정 개설</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>페이스북 페이지 연결 및 인스타 프로필 세팅, 링크트리 추가</span>
                  </div>
                </label>

                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.meta_ads} onChange={() => toggleRoadmapItem('meta_ads')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.meta_ads ? 'var(--text-muted)' : 'var(--text-primary)' }}>6. 메타(페이스북/인스타) 광고 캠페인 세팅</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>이론 기반 후킹 쇼츠(Reels) 영상 제작 및 잠재고객 광고 송출</span>
                  </div>
                </label>

                <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', padding: '12px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                  <input type="checkbox" checked={roadmapChecklist.payments} onChange={() => toggleRoadmapItem('payments')} style={{ marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', color: roadmapChecklist.payments ? 'var(--text-muted)' : 'var(--text-primary)' }}>7. 구글 플레이 인앱 결제(Billing) 연동 및 출시</strong>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>구글 플레이 콘솔 상품 등록 및 인앱 구독 API 연동 후 배포</span>
                  </div>
                </label>
              </div>
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
            onClick={() => setCurrentView('roadmap')}
            className={`tab-btn ${currentView === 'roadmap' ? 'active' : ''}`}
          >
            <CheckSquare size={20} />
            <span>비즈니스 로드맵</span>
          </button>
        </nav>
      )}
    </div>
  );
};
export default App;

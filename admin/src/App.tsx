import React, { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from './lib/supabaseClient';
import { ChartVisualizer } from './components/ChartVisualizer';
import type { Candlestick } from './components/ChartVisualizer';
import { 
  Lock, 
  Users, 
  BookOpen, 
  Eye, 
  RefreshCw, 
  Plus, 
  Edit2, 
  Trash2, 
  LogOut, 
  CheckCircle, 
  X, 
  Info
} from 'lucide-react';

// Interfaces
interface QuizItem {
  id: number;
  category: string;
  categoryKey: 'candlestick' | 'sr' | 'trendline' | 'pattern' | 'indicator' | 'risk';
  theoryRef: string;
  question: string;
  chartData: Candlestick[];
  drawings: {
    type: 'line' | 'horizontal-line' | 'channel' | 'text';
    points: { x: number; y: number }[];
    label?: string;
    color?: string;
  }[];
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface UserProfile {
  id: string;
  xp: number;
  streak: number;
  trading_level: number;
  completed_quizzes: number[];
  last_active_date: string | null;
  last_daily_completed_date: string | null;
  drill_stats?: Record<string, { level: number; accuracy: number; attempts: number }>;
}

interface TradingTier {
  level: number;
  name: string;
  minXp: number;
  maxXp: number;
  badge: string;
}

// Trading Tiers definitions
const tradingTiers: TradingTier[] = [
  { level: 1, name: "모의 투자자 (Paper Trader)", minXp: 0, maxXp: 199, badge: "🌱" },
  { level: 2, name: "차트 초심자 (Chart Novice)", minXp: 200, maxXp: 499, badge: "📈" },
  { level: 3, name: "기술 분석가 (Technical Analyst)", minXp: 500, maxXp: 999, badge: "🔍" },
  { level: 4, name: "원칙 트레이더 (Discipline Trader)", minXp: 1000, maxXp: 1999, badge: "🛡️" },
  { level: 5, name: "시장 마스터 (Market Master)", minXp: 2000, maxXp: Infinity, badge: "👑" }
];

const getTradingTier = (xp: number): TradingTier => {
  return tradingTiers.find(t => xp >= t.minXp && xp <= t.maxXp) || tradingTiers[0];
};

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

const CATEGORIES = [
  '캔들 패턴 인지',
  '지지/저항 & 돌파',
  '추세선과 채널',
  '차트 패턴 포착',
  '보조지표 다이버전스',
  '자금관리/손익비'
];

const THEORY_FILES: Record<string, string> = {
  '캔들 패턴 인지': '01_candlestick_basics.md',
  '지지/저항 & 돌파': '02_support_resistance.md',
  '추세선과 채널': '03_trendlines_channels.md',
  '차트 패턴 포착': '04_chart_patterns.md',
  '보조지표 다이버전스': '05_technical_indicators.md',
  '자금관리/손익비': '06_risk_management.md'
};

export const App: React.FC = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('chartmon_admin_auth') === 'true';
  });
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Navigation tab
  const [activeTab, setActiveTab] = useState<'users' | 'quizzes' | 'inspector'>('users');

  // Users Tab states
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  // Quizzes Tab states
  const [quizzesList, setQuizzesList] = useState<QuizItem[]>([]);
  const [loadingQuizzes, setLoadingQuizzes] = useState(false);

  // Editing/CRUD state
  const [editingQuiz, setEditingQuiz] = useState<Partial<QuizItem> | null>(null);
  const [isNewQuiz, setIsNewQuiz] = useState(false);

  // Editor Form States
  const [formCategory, setFormCategory] = useState('캔들 패턴 인지');
  const [formTheoryRef, setFormTheoryRef] = useState('01_candlestick_basics.md');
  const [formQuestion, setFormQuestion] = useState('');
  const [formChartData, setFormChartData] = useState('[]');
  const [formDrawings, setFormDrawings] = useState('[]');
  const [formOptions, setFormOptions] = useState<string[]>(['', '', '', '']);
  const [formCorrectIndex, setFormCorrectIndex] = useState<number>(0);
  const [formExplanation, setFormExplanation] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [savingQuiz, setSavingQuiz] = useState(false);

  // Inspector Tab states
  const [selectedQuizId, setSelectedQuizId] = useState<number | null>(null);
  const [inspectorUserAnswer, setInspectorUserAnswer] = useState<number | null>(null);
  const [inspectorAnswered, setInspectorAnswered] = useState(false);

  // Quiz Preview Modal states (from clicking list item)
  const [previewQuiz, setPreviewQuiz] = useState<QuizItem | null>(null);
  const [previewUserAnswer, setPreviewUserAnswer] = useState<number | null>(null);
  const [previewAnswered, setPreviewAnswered] = useState(false);

  // Fetch Users
  const fetchUsers = async () => {
    if (!isSupabaseConfigured) return;
    setLoadingUsers(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .order('xp', { ascending: false });

      if (error) throw error;

      if (data) {
        const formatted: UserProfile[] = data.map((u: any) => ({
          id: u.id,
          xp: u.xp,
          streak: u.streak,
          trading_level: u.trading_level,
          completed_quizzes: u.completed_quizzes || [],
          last_active_date: u.last_active_date || null,
          last_daily_completed_date: u.last_daily_completed_date || null,
          drill_stats: u.drill_stats || {}
        }));
        setUsers(formatted);
      }
    } catch (e: any) {
      console.error('AdminPanel: Fetching users failed', e);
      alert(`사용자 조회 실패: ${e.message}`);
    } finally {
      setLoadingUsers(false);
    }
  };

  // Fetch Quizzes
  const fetchQuizzes = async () => {
    if (!isSupabaseConfigured) return;
    setLoadingQuizzes(true);
    try {
      const { data, error } = await supabase
        .from('quizzes')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;

      if (data) {
        const formatted: QuizItem[] = data.map((q: any) => ({
          id: Number(q.id),
          category: q.category,
          categoryKey: getCategoryKey(q.category),
          theoryRef: q.theory_ref,
          question: q.question,
          chartData: q.chart_data || [],
          drawings: q.drawings || [],
          options: q.options || [],
          correctIndex: q.correct_index,
          explanation: q.explanation
        }));
        setQuizzesList(formatted);
        
        // Default select in inspector if nothing selected
        if (formatted.length > 0 && selectedQuizId === null) {
          setSelectedQuizId(formatted[0].id);
        }
      }
    } catch (e: any) {
      console.error('AdminPanel: Fetching quizzes failed', e);
      alert(`퀴즈 로드 실패: ${e.message}`);
    } finally {
      setLoadingQuizzes(false);
    }
  };

  // Auth check & initial fetches
  useEffect(() => {
    if (isAuthenticated) {
      fetchUsers();
      fetchQuizzes();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'chartmon123!') {
      setIsAuthenticated(true);
      sessionStorage.setItem('chartmon_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('비밀번호가 일치하지 않습니다.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('chartmon_admin_auth');
    setPassword('');
  };

  // Open Editor for Add
  const handleAddQuizClick = () => {
    setIsNewQuiz(true);
    setFormCategory('캔들 패턴 인지');
    setFormTheoryRef('01_candlestick_basics.md');
    setFormQuestion('');
    setFormChartData('[\n  {"time": "10:00", "open": 100, "high": 105, "low": 98, "close": 102},\n  {"time": "10:15", "open": 102, "high": 108, "low": 101, "close": 107},\n  {"time": "10:30", "open": 107, "high": 110, "low": 104, "close": 105},\n  {"time": "10:45", "open": 105, "high": 112, "low": 103, "close": 111}\n]');
    setFormDrawings('[]');
    setFormOptions(['', '', '', '']);
    setFormCorrectIndex(0);
    setFormExplanation('');
    setFormError('');
    setFormSuccess('');
    
    // Trigger modal open
    setEditingQuiz({});
  };

  // Open Editor for Edit
  const handleEditQuizClick = (quiz: QuizItem) => {
    setIsNewQuiz(false);
    setFormCategory(quiz.category);
    setFormTheoryRef(quiz.theoryRef);
    setFormQuestion(quiz.question);
    setFormChartData(JSON.stringify(quiz.chartData, null, 2));
    setFormDrawings(JSON.stringify(quiz.drawings || [], null, 2));
    setFormOptions([...quiz.options]);
    setFormCorrectIndex(quiz.correctIndex);
    setFormExplanation(quiz.explanation);
    setFormError('');
    setFormSuccess('');
    
    setEditingQuiz(quiz);
  };

  // Handle Delete Quiz
  const handleDeleteQuizClick = async (quizId: number) => {
    if (!window.confirm(`정말로 Quiz #${quizId}번 문제를 삭제하시겠습니까?`)) return;

    try {
      const { error } = await supabase
        .from('quizzes')
        .delete()
        .eq('id', quizId);

      if (error) throw error;
      
      alert(`Quiz #${quizId} 삭제 완료.`);
      fetchQuizzes();
      if (selectedQuizId === quizId) {
        setSelectedQuizId(null);
      }
    } catch (e: any) {
      console.error(e);
      alert(`삭제 중 오류 발생: ${e.message}`);
    }
  };

  // Auto-set theory reference when category changes in editor
  const handleCategoryChange = (cat: string) => {
    setFormCategory(cat);
    if (THEORY_FILES[cat]) {
      setFormTheoryRef(THEORY_FILES[cat]);
    }
  };

  // Save Quiz Form (Add/Edit)
  const handleSaveQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Validations
    if (!formQuestion.trim()) return setFormError('질문을 입력해주세요.');
    if (formOptions.some(opt => !opt.trim())) return setFormError('모든 객관식 보기를 완성해주세요.');
    if (!formExplanation.trim()) return setFormError('해설을 입력해주세요.');

    let parsedChartData: Candlestick[] = [];
    try {
      parsedChartData = JSON.parse(formChartData);
      if (!Array.isArray(parsedChartData)) throw new Error('Array type expected');
    } catch (err: any) {
      return setFormError(`차트 데이터 JSON 파싱 에러: ${err.message}`);
    }

    let parsedDrawings = [];
    try {
      parsedDrawings = JSON.parse(formDrawings || '[]');
      if (!Array.isArray(parsedDrawings)) throw new Error('Array type expected');
    } catch (err: any) {
      return setFormError(`보조선 작도 정보 JSON 파싱 에러: ${err.message}`);
    }

    setSavingQuiz(true);

    try {
      const payload: any = {
        category: formCategory,
        theory_ref: formTheoryRef,
        question: formQuestion,
        chart_data: parsedChartData,
        drawings: parsedDrawings,
        options: formOptions,
        correct_index: formCorrectIndex,
        explanation: formExplanation
      };

      if (!isNewQuiz && editingQuiz?.id) {
        payload.id = editingQuiz.id;
      }

      const { error } = await supabase
        .from('quizzes')
        .upsert(payload);

      if (error) throw error;

      setFormSuccess(isNewQuiz ? '새 퀴즈가 성공적으로 등록되었습니다!' : '퀴즈 수정을 성공적으로 완료했습니다.');
      fetchQuizzes();
      
      // Close modal shortly
      setTimeout(() => {
        setEditingQuiz(null);
      }, 1000);
    } catch (e: any) {
      console.error(e);
      setFormError(`저장 중 오류 발생: ${e.message}`);
    } finally {
      setSavingQuiz(false);
    }
  };

  const handleOptionChange = (idx: number, val: string) => {
    const next = [...formOptions];
    next[idx] = val;
    setFormOptions(next);
  };

  // Inspector interactive simulator
  const activeInspectorQuiz = quizzesList.find(q => q.id === selectedQuizId);

  const handleSelectInspectorQuiz = (id: number) => {
    setSelectedQuizId(id);
    setInspectorUserAnswer(null);
    setInspectorAnswered(false);
  };

  const handleInspectorAnswer = (idx: number) => {
    if (inspectorAnswered) return;
    setInspectorUserAnswer(idx);
    setInspectorAnswered(true);
  };

  // Render Login Screen
  if (!isAuthenticated) {
    return (
      <div className="login-overlay">
        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-icon-wrap">
            <Lock size={32} />
          </div>
          <div>
            <h2>ChartMon Admin</h2>
            <p>차트몬 운영관리자 전용 로그인 포털</p>
          </div>
          <div className="form-group">
            <label htmlFor="pass">Operator Password</label>
            <input 
              id="pass"
              type="password" 
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
            />
            {authError && <span className="error-text">{authError}</span>}
          </div>
          <button type="submit" className="btn btn-brand">접속 인증하기</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      {/* Top Header */}
      <header>
        <div className="logo-section">
          <h1>🛡️ ChartMon Operator Admin Portal</h1>
        </div>
        <div className="header-actions">
          <span className="status-badge connected">
            Supabase Active
          </span>
          <button className="btn btn-secondary" onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <LogOut size={14} />
            <span>로그아웃</span>
          </button>
        </div>
      </header>

      {/* Tabs navigation */}
      <div className="tabs-nav">
        <button 
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          <Users size={16} />
          <span>사용자 프로필 관리</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
          onClick={() => setActiveTab('quizzes')}
        >
          <BookOpen size={16} />
          <span>문제은행 CRUD 관리</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === 'inspector' ? 'active' : ''}`}
          onClick={() => setActiveTab('inspector')}
        >
          <Eye size={16} />
          <span>퀴즈 실전 검수기</span>
        </button>
      </div>

      {/* Panel Views */}
      <div className="panel-container">
        {activeTab === 'users' && (
          <div className="panel-card">
            <div className="panel-header">
              <h3 className="panel-title">
                <Users size={20} color="var(--color-brand)" />
                유저 정보 및 학습 성과 실시간 현황
              </h3>
              <button 
                className="btn btn-secondary" 
                onClick={fetchUsers} 
                disabled={loadingUsers}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <RefreshCw size={14} className={loadingUsers ? 'spin-anim' : ''} />
                <span>목록 갱신</span>
              </button>
            </div>

            {loadingUsers ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
                사용자 목록 데이터를 불러오는 중...
              </div>
            ) : users.length === 0 ? (
              <div className="empty-state">
                <Info size={32} />
                <p>가입한 유저 정보가 존재하지 않습니다.</p>
              </div>
            ) : (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>User ID (UUID)</th>
                      <th>회원 등급</th>
                      <th>경험치 (XP)</th>
                      <th>학습 스트릭</th>
                      <th>퀴즈 완료</th>
                      <th>최근 활동 날짜</th>
                      <th>데일리 완료 날짜</th>
                      <th>드릴 훈련 수준 (Category Drill Levels)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map(u => {
                      const tier = getTradingTier(u.xp);
                      return (
                        <tr key={u.id}>
                          <td className="user-id-cell" title={u.id}>
                            {u.id.substring(0, 8)}...{u.id.substring(u.id.length - 8)}
                          </td>
                          <td>
                            <span className="badge-tag level" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                              <span>{tier.badge}</span>
                              <span>{tier.name.split(' ')[0]}</span>
                            </span>
                          </td>
                          <td>
                            <span className="badge-tag xp">{u.xp} XP</span>
                          </td>
                          <td>
                            <span className="badge-tag streak" style={{ color: 'var(--color-warn)' }}>🔥 {u.streak}일</span>
                          </td>
                          <td>{u.completed_quizzes.length}개</td>
                          <td>{u.last_active_date || '-'}</td>
                          <td>{u.last_daily_completed_date || '-'}</td>
                          <td style={{ fontSize: '11px', color: 'var(--text-secondary)', maxWidth: '350px', lineHeight: 1.4 }}>
                            {u.drill_stats && Object.keys(u.drill_stats).length > 0 ? (
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {Object.entries(u.drill_stats).map(([cat, stat]) => (
                                  <span key={cat} style={{ background: 'rgba(255,255,255,0.03)', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                                    {cat.substring(0, 4)}: Lv.{stat.level} ({stat.accuracy}%)
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span style={{ color: 'var(--text-muted)' }}>기록 없음</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'quizzes' && (
          <div className="panel-card">
            <div className="panel-header">
              <h3 className="panel-title">
                <BookOpen size={20} color="var(--color-accent)" />
                퀴즈 문제은행 DB 내역 ({quizzesList.length}개 퀴즈)
              </h3>
              <div className="quiz-grid-actions">
                <button 
                  className="btn btn-secondary" 
                  onClick={fetchQuizzes} 
                  disabled={loadingQuizzes}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <RefreshCw size={14} className={loadingQuizzes ? 'spin-anim' : ''} />
                  <span>목록 갱신</span>
                </button>
                <button 
                  className="btn btn-brand" 
                  onClick={handleAddQuizClick}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Plus size={14} />
                  <span>새 퀴즈 문제 등록</span>
                </button>
              </div>
            </div>

            {loadingQuizzes ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
                Supabase에서 퀴즈 목록 로딩 중...
              </div>
            ) : quizzesList.length === 0 ? (
              <div className="empty-state">
                <Info size={32} />
                <p>등록된 퀴즈가 없습니다. 우측 상단의 등록 버튼을 눌러 추가해주세요.</p>
              </div>
            ) : (
              <div className="quiz-list">
                {quizzesList.map(q => (
                  <div 
                    key={q.id} 
                    className="quiz-row-card" 
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setPreviewQuiz(q);
                      setPreviewUserAnswer(null);
                      setPreviewAnswered(false);
                    }}
                  >
                    <div className="quiz-row-info">
                      <div className="quiz-row-meta">
                        <span style={{ fontWeight: 800, color: '#fff', fontSize: '14px' }}>#{q.id}</span>
                        <span className="quiz-category-tag">{q.category}</span>
                        <span className="quiz-theory-tag">📄 {q.theoryRef}</span>
                      </div>
                      <div className="quiz-question-text">{q.question}</div>
                      <div className="quiz-options-summary">
                        <strong>보기:</strong> {q.options.map((opt, oIdx) => (
                          <span key={oIdx} style={{ marginRight: '10px', color: oIdx === q.correctIndex ? 'var(--color-success)' : 'inherit' }}>
                            {oIdx + 1}) {opt} {oIdx === q.correctIndex && '✓'}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="quiz-row-actions" onClick={e => e.stopPropagation()}>
                      <button 
                        className="icon-btn" 
                        title="수정하기"
                        onClick={() => handleEditQuizClick(q)}
                      >
                        <Edit2 size={14} />
                      </button>
                      <button 
                        className="icon-btn delete" 
                        title="삭제하기"
                        onClick={() => handleDeleteQuizClick(q.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'inspector' && (
          <div className="panel-card">
            <h3 className="panel-title" style={{ marginBottom: '20px' }}>
              <Eye size={20} color="var(--color-success)" />
              실전처럼 풀어보는 대화형 퀴즈 검수기
            </h3>

            {quizzesList.length === 0 ? (
              <div className="empty-state">
                <Info size={32} />
                <p>검수할 퀴즈 목록이 비어있습니다. 먼저 문제은행 탭에서 문제를 등록해주세요.</p>
              </div>
            ) : (
              <div className="inspector-layout">
                {/* Left quiz selector list */}
                <div className="inspector-sidebar">
                  {quizzesList.map(q => (
                    <div 
                      key={q.id}
                      className={`inspector-quiz-item ${selectedQuizId === q.id ? 'active' : ''}`}
                      onClick={() => handleSelectInspectorQuiz(q.id)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <strong style={{ fontSize: '12px', color: '#fff' }}>#{q.id}</strong>
                        <span style={{ fontSize: '10px', color: 'var(--color-brand)' }}>{q.category.substring(0, 4)}</span>
                      </div>
                      <p style={{ fontSize: '11px', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {q.question}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right interactive preview pane */}
                <div className="inspector-content">
                  {activeInspectorQuiz ? (
                    <div className="inspector-preview-card">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                        <span className="quiz-category-tag">{activeInspectorQuiz.category}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>참고 이론: {activeInspectorQuiz.theoryRef}</span>
                      </div>

                      <h4 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px', color: '#fff', lineHeight: 1.5 }}>
                        Q. {activeInspectorQuiz.question}
                      </h4>

                      {/* Render Visual Chart Canvas */}
                      <ChartVisualizer 
                        chartData={activeInspectorQuiz.chartData} 
                        drawings={activeInspectorQuiz.drawings} 
                      />

                      <div className="inspector-options-list">
                        {activeInspectorQuiz.options.map((opt, idx) => {
                          let optClass = '';
                          if (inspectorAnswered) {
                            if (idx === activeInspectorQuiz.correctIndex) {
                              optClass = 'correct-answer';
                            }
                            if (inspectorUserAnswer === idx) {
                              optClass = idx === activeInspectorQuiz.correctIndex ? 'selected-correct' : 'selected-incorrect';
                            }
                          }

                          return (
                            <button
                              key={idx}
                              className={`inspector-option ${optClass}`}
                              onClick={() => handleInspectorAnswer(idx)}
                              disabled={inspectorAnswered}
                            >
                              <span style={{ 
                                display: 'inline-flex', 
                                width: '20px', 
                                height: '20px', 
                                borderRadius: '4px', 
                                border: '1px solid var(--border-color)', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                fontSize: '11px',
                                fontWeight: 700,
                                background: inspectorUserAnswer === idx ? 'currentColor' : 'transparent',
                                color: inspectorUserAnswer === idx ? '#000' : 'inherit'
                              }}>
                                {idx + 1}
                              </span>
                              <span>{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Interactive Feedback Panel */}
                      {inspectorAnswered && (
                        <div className={`inspector-feedback ${inspectorUserAnswer === activeInspectorQuiz.correctIndex ? 'correct' : 'incorrect'}`}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '8px', fontSize: '14px' }}>
                            {inspectorUserAnswer === activeInspectorQuiz.correctIndex ? (
                              <>
                                <CheckCircle size={16} />
                                <span>정답입니다!</span>
                              </>
                            ) : (
                              <>
                                <X size={16} />
                                <span>오답입니다.</span>
                              </>
                            )}
                          </div>
                          <p style={{ fontSize: '12px', lineHeight: 1.6, marginBottom: '12px' }}>
                            <strong>상세 설명:</strong> {activeInspectorQuiz.explanation}
                          </p>
                          <button 
                            className="btn btn-secondary"
                            onClick={() => {
                              setInspectorUserAnswer(null);
                              setInspectorAnswered(false);
                            }}
                            style={{ fontSize: '11px', padding: '6px 12px' }}
                          >
                            테스트 다시 하기
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
                      문제를 선택하여 검수를 시작해 주세요.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Editor Modal Overlay */}
      {editingQuiz !== null && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                {isNewQuiz ? '🆕 신규 퀴즈 문제 등록' : `✏️ Quiz #${editingQuiz.id} 문제 수정`}
              </h3>
              <button className="icon-btn" onClick={() => setEditingQuiz(null)}>
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleSaveQuiz}>
              <div className="modal-body">
                {formError && <div className="error-text" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '10px 14px', borderRadius: '8px' }}>⚠️ {formError}</div>}
                {formSuccess && <div className="success-alert">✓ {formSuccess}</div>}

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>드릴 카테고리</label>
                    <select 
                      className="form-control"
                      value={formCategory}
                      onChange={e => handleCategoryChange(e.target.value)}
                      style={{ background: '#0d0f14' }}
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>매칭 이론 파일 (.md)</label>
                    <input 
                      type="text"
                      className="form-control"
                      value={formTheoryRef}
                      onChange={e => setFormTheoryRef(e.target.value)}
                      placeholder="예: 01_candlestick_basics.md"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>질문 (Question)</label>
                  <textarea 
                    className="form-control"
                    rows={2}
                    value={formQuestion}
                    onChange={e => setFormQuestion(e.target.value)}
                    placeholder="예: 하락 추세 지속 도중 바닥권에서 출현한 아래 망치형 캔들의 다음 분석은 무엇인가요?"
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>차트 데이터 (JSON array - Candlesticks)</label>
                    <textarea 
                      className="form-control code-textarea"
                      rows={7}
                      value={formChartData}
                      onChange={e => setFormChartData(e.target.value)}
                      placeholder="[ { 'time': '10:00', 'open': 10, 'high': 12, 'low': 9, 'close': 11 } ]"
                    />
                  </div>
                  <div className="form-group">
                    <label>보조선 및 작도 데이터 (JSON array - Drawings)</label>
                    <textarea 
                      className="form-control code-textarea"
                      rows={7}
                      value={formDrawings}
                      onChange={e => setFormDrawings(e.target.value)}
                      placeholder="[ { 'type': 'horizontal-line', 'points': [{'x': 0, 'y': 100}], 'label': 'S/R', 'color': '#3b82f6' } ]"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>객관식 보기 4개 (Options)</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {formOptions.map((opt, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)' }}>{idx + 1}</span>
                        <input 
                          type="text"
                          className="form-control"
                          style={{ flex: 1 }}
                          value={opt}
                          onChange={e => handleOptionChange(idx, e.target.value)}
                          placeholder={`보기 ${idx + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group" style={{ maxWidth: '200px' }}>
                  <label>정답 번호 (Correct Index)</label>
                  <select 
                    className="form-control"
                    value={formCorrectIndex}
                    onChange={e => setFormCorrectIndex(Number(e.target.value))}
                    style={{ background: '#0d0f14' }}
                  >
                    <option value={0}>보기 1번 정답</option>
                    <option value={1}>보기 2번 정답</option>
                    <option value={2}>보기 3번 정답</option>
                    <option value={3}>보기 4번 정답</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>정답 해설 (Explanation)</label>
                  <textarea 
                    className="form-control"
                    rows={3}
                    value={formExplanation}
                    onChange={e => setFormExplanation(e.target.value)}
                    placeholder="정답이 해당 보기인 이유와 차트 기술 분석 상의 근거를 한국어로 명확히 서술하세요."
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setEditingQuiz(null)}>취소</button>
                <button type="submit" className="btn btn-brand" disabled={savingQuiz}>
                  {savingQuiz ? '저장 중...' : '저장 완료'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Interactive Quiz Preview Modal */}
      {previewQuiz !== null && (
        <div className="modal-overlay" onClick={() => setPreviewQuiz(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="quiz-category-tag" style={{ margin: 0 }}>{previewQuiz.category}</span>
                <span>실전 문제 검수 (Quiz #{previewQuiz.id})</span>
              </h3>
              <button className="icon-btn" onClick={() => setPreviewQuiz(null)}>
                <X size={18} />
              </button>
            </div>
            <div className="modal-body" style={{ gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>매칭 이론: {previewQuiz.theoryRef}</span>
              </div>

              <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>
                Q. {previewQuiz.question}
              </h4>

              {/* Render Visual Chart Canvas */}
              <ChartVisualizer 
                chartData={previewQuiz.chartData} 
                drawings={previewQuiz.drawings} 
              />

              <div className="inspector-options-list">
                {previewQuiz.options.map((opt, idx) => {
                  let optClass = '';
                  if (previewAnswered) {
                    if (idx === previewQuiz.correctIndex) {
                      optClass = 'correct-answer';
                    }
                    if (previewUserAnswer === idx) {
                      optClass = idx === previewQuiz.correctIndex ? 'selected-correct' : 'selected-incorrect';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      className={`inspector-option ${optClass}`}
                      onClick={() => {
                        if (previewAnswered) return;
                        setPreviewUserAnswer(idx);
                        setPreviewAnswered(true);
                      }}
                      disabled={previewAnswered}
                    >
                      <span style={{ 
                        display: 'inline-flex', 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '4px', 
                        border: '1px solid var(--border-color)', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700,
                        background: previewUserAnswer === idx ? 'currentColor' : 'transparent',
                        color: previewUserAnswer === idx ? '#000' : 'inherit'
                      }}>
                        {idx + 1}
                      </span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Interactive Feedback Panel */}
              {previewAnswered && (
                <div className={`inspector-feedback ${previewUserAnswer === previewQuiz.correctIndex ? 'correct' : 'incorrect'}`} style={{ marginTop: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '8px', fontSize: '14px' }}>
                    {previewUserAnswer === previewQuiz.correctIndex ? (
                      <>
                        <CheckCircle size={16} />
                        <span>정답입니다!</span>
                      </>
                    ) : (
                      <>
                        <X size={16} />
                        <span>오답입니다.</span>
                      </>
                    )}
                  </div>
                  <p style={{ fontSize: '12px', lineHeight: 1.6, marginBottom: '12px' }}>
                    <strong>상세 설명:</strong> {previewQuiz.explanation}
                  </p>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => {
                      setPreviewUserAnswer(null);
                      setPreviewAnswered(false);
                    }}
                    style={{ fontSize: '11px', padding: '6px 12px' }}
                  >
                    다시 풀기
                  </button>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setPreviewQuiz(null)}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

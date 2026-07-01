/* eslint-disable @typescript-eslint/no-explicit-any */
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
  Info,
  Play
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
  drill_stats?: Record<string, { level: number; accuracy: number; attempts: number; drillSessionCount?: number }>;
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
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [authError, setAuthError] = useState('');

  // Navigation tab
  const [activeTab, setActiveTab] = useState<'users' | 'quizzes' | 'inspector' | 'simulator'>('users');

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

  // Simulator Tab states
  const [simRawData, setSimRawData] = useState<string>(() => {
    return JSON.stringify([
      {"time": "Day 1", "open": 100, "high": 102, "low": 99, "close": 101},
      {"time": "Day 2", "open": 101, "high": 104, "low": 100, "close": 103},
      {"time": "Day 3", "open": 103, "high": 103, "low": 98, "close": 99},
      {"time": "Day 4", "open": 99, "high": 105, "low": 99, "close": 104},
      {"time": "Day 5", "open": 104, "high": 106, "low": 102, "close": 105},
      {"time": "Day 6", "open": 105, "high": 109, "low": 104, "close": 108},
      {"time": "Day 7", "open": 108, "high": 110, "low": 107, "close": 109},
      {"time": "Day 8", "open": 109, "high": 109, "low": 105, "close": 106},
      {"time": "Day 9", "open": 106, "high": 112, "low": 106, "close": 111},
      {"time": "Day 10", "open": 111, "high": 115, "low": 110, "close": 114},
      {"time": "Day 11", "open": 114, "high": 118, "low": 113, "close": 117},
      {"time": "Day 12", "open": 117, "high": 119, "low": 115, "close": 116},
      {"time": "Day 13", "open": 116, "high": 121, "low": 114, "close": 120},
      {"time": "Day 14", "open": 120, "high": 123, "low": 119, "close": 122},
      {"time": "Day 15", "open": 122, "high": 122, "low": 117, "close": 118},
      {"time": "Day 16", "open": 118, "high": 120, "low": 116, "close": 117},
      {"time": "Day 17", "open": 117, "high": 124, "low": 117, "close": 123},
      {"time": "Day 18", "open": 123, "high": 126, "low": 122, "close": 125},
      {"time": "Day 19", "open": 125, "high": 128, "low": 124, "close": 126},
      {"time": "Day 20", "open": 126, "high": 130, "low": 125, "close": 129}
    ], null, 2);
  });
  const [simAnonymizedData, setSimAnonymizedData] = useState<Candlestick[]>([]);
  const [simAnonymizerName, setSimAnonymizerName] = useState<string>('익명의 미국 IT 대기업 A사');
  const [simTrueIdentity, setSimTrueIdentity] = useState<string>('AAPL (2021년 3월)');
  const [simJitterRange, setSimJitterRange] = useState<number>(0.02);
  const [simScaleType, setSimScaleType] = useState<'percent' | 'none'>('percent');
  
  // Interactive Simulation Runner states
  const [simRunning, setSimRunning] = useState<boolean>(false);
  const [simPlayIndex, setSimPlayIndex] = useState<number>(5);
  const [simPlaySpeed, setSimPlaySpeed] = useState<number>(1000); // ms per candle
  const [simBalance, setSimBalance] = useState<number>(10000);
  const [simTrades, setSimTrades] = useState<any[]>([]);
  const [simPosition, setSimPosition] = useState<any | null>(null);
  const [simResultReport, setSimResultReport] = useState<any | null>(null);
  const [simDrawings, setSimDrawings] = useState<any[]>([]);

  // Simulation playback loop
  useEffect(() => {
    let timer: any = null;
    if (simRunning && simAnonymizedData.length > 0) {
      timer = setInterval(() => {
        setSimPlayIndex((prev) => {
          if (prev >= simAnonymizedData.length - 1) {
            setSimRunning(false);
            clearInterval(timer);
            // End simulation and trigger auto close
            setTimeout(() => {
              handleEndSimulation();
            }, 100);
            return prev;
          }
          return prev + 1;
        });
      }, simPlaySpeed);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [simRunning, simAnonymizedData, simPlaySpeed, simPosition, simBalance]);

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

  // Auth check & session recovery on mount
  useEffect(() => {
    const initAuth = async () => {
      if (!isSupabaseConfigured) {
        setCheckingAuth(false);
        return;
      }
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session && session.user) {
          // Check if admin
          const { data: adminRecord, error } = await supabase
            .from('admin_users')
            .select('user_id')
            .eq('user_id', session.user.id)
            .single();

          if (!error && adminRecord) {
            setIsAuthenticated(true);
            setAuthError('');
          } else {
            // Not admin
            setAuthError('관리자 권한이 없는 계정입니다. (등록된 관리자 ID가 아님)');
            await supabase.auth.signOut();
            setIsAuthenticated(false);
          }
        }
      } catch (e) {
        console.error('AdminPanel Auth Init Error:', e);
      } finally {
        setCheckingAuth(false);
      }
    };

    initAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const load = async () => {
        // Defer execution slightly to avoid synchronous setState cascading render warning
        await Promise.resolve();
        await Promise.all([fetchUsers(), fetchQuizzes()]);
      };
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  // Handle Google Login
  const handleGoogleLogin = async () => {
    if (!isSupabaseConfigured) {
      setAuthError('Supabase가 설정되지 않았습니다.');
      return;
    }
    setCheckingAuth(true);
    setAuthError('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + window.location.pathname
        }
      });
      if (error) {
        setAuthError(`구글 로그인 실패: ${error.message}`);
        setCheckingAuth(false);
      }
    } catch (e: any) {
      setAuthError(`오류가 발생했습니다: ${e.message || e}`);
      setCheckingAuth(false);
    }
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSupabaseConfigured) {
      setAuthError('Supabase가 설정되지 않았습니다.');
      return;
    }
    setCheckingAuth(true);
    setAuthError('');
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        setAuthError(`로그인 실패: ${error.message}`);
        setIsAuthenticated(false);
        setCheckingAuth(false);
        return;
      }

      if (data?.user) {
        // Verify is_admin
        const { data: adminRecord, error: adminError } = await supabase
          .from('admin_users')
          .select('user_id')
          .eq('user_id', data.user.id)
          .single();

        if (adminError || !adminRecord) {
          setAuthError('관리자 권한이 없는 계정입니다.');
          await supabase.auth.signOut();
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
          setAuthError('');
        }
      }
    } catch (e: any) {
      setAuthError(`오류가 발생했습니다: ${e.message || e}`);
      setIsAuthenticated(false);
    } finally {
      setCheckingAuth(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    setIsAuthenticated(false);
    setEmail('');
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

    let parsedChartData: Candlestick[];
    try {
      parsedChartData = JSON.parse(formChartData);
      if (!Array.isArray(parsedChartData)) throw new Error('Array type expected');
    } catch (err: any) {
      return setFormError(`차트 데이터 JSON 파싱 에러: ${err.message}`);
    }

    let parsedDrawings: any[];
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

  // Anonymize & Scale Data
  const handleAnonymize = () => {
    try {
      const parsed = JSON.parse(simRawData);
      if (!Array.isArray(parsed)) throw new Error('데이터는 배열 형태이어야 합니다.');
      
      if (parsed.length === 0) return;
      
      // Calculate scaling multiplier based on first candle's open price
      const firstOpen = parsed[0].open;
      
      const processed = parsed.map((c: any, index: number) => {
        let open = c.open;
        let high = c.high;
        let low = c.low;
        let close = c.close;
        
        if (simScaleType === 'percent') {
          const factor = 100 / firstOpen;
          open = open * factor;
          high = high * factor;
          low = low * factor;
          close = close * factor;
        }
        
        // Apply jittering noise
        if (simJitterRange > 0) {
          const getJitter = (val: number) => {
            const maxJitter = val * (simJitterRange / 100);
            const jitter = (Math.random() * 2 - 1) * maxJitter;
            return Number((val + jitter).toFixed(2));
          };
          open = getJitter(open);
          high = getJitter(high);
          low = getJitter(low);
          close = getJitter(close);
          
          // Ensure high is highest, low is lowest
          high = Math.max(high, open, close);
          low = Math.min(low, open, close);
        } else {
          open = Number(open.toFixed(2));
          high = Number(high.toFixed(2));
          low = Number(low.toFixed(2));
          close = Number(close.toFixed(2));
        }
        
        return {
          time: c.time || `Day ${index + 1}`,
          open,
          high,
          low,
          close
        };
      });
      
      setSimAnonymizedData(processed);
      setSimPlayIndex(Math.min(5, processed.length - 1));
      setSimRunning(false);
      setSimBalance(10000);
      setSimTrades([]);
      setSimPosition(null);
      setSimResultReport(null);
      setSimDrawings([]);
      alert('성공적으로 데이터를 익명화 및 가공했습니다! 아래 차트와 시뮬레이터에서 확인하세요.');
    } catch (e: any) {
      alert(`데이터 가공 실패: ${e.message}`);
    }
  };

  // Buy position entry
  const handleSimBuy = () => {
    if (simAnonymizedData.length === 0) return;
    if (simPosition) return alert('이미 진입한 포지션이 있습니다.');
    const currentCandle = simAnonymizedData[simPlayIndex];
    const entryPrice = currentCandle.close;
    
    const pos = {
      type: 'BUY',
      entryPrice,
      entryIndex: simPlayIndex,
      leverage: 1
    };
    setSimPosition(pos);
    
    // Add drawing marker
    const marker = {
      type: 'text' as const,
      points: [{ x: simPlayIndex, y: entryPrice }],
      label: '▲ BUY',
      color: '#ef4444'
    };
    setSimDrawings(prev => [...prev, marker]);
  };

  // Sell position entry
  const handleSimSell = () => {
    if (simAnonymizedData.length === 0) return;
    if (simPosition) return alert('이미 진입한 포지션이 있습니다.');
    const currentCandle = simAnonymizedData[simPlayIndex];
    const entryPrice = currentCandle.close;
    
    const pos = {
      type: 'SELL',
      entryPrice,
      entryIndex: simPlayIndex,
      leverage: 1
    };
    setSimPosition(pos);
    
    // Add drawing marker
    const marker = {
      type: 'text' as const,
      points: [{ x: simPlayIndex, y: entryPrice }],
      label: '▼ SELL',
      color: '#10b981'
    };
    setSimDrawings(prev => [...prev, marker]);
  };

  // Exit position
  const handleSimExit = () => {
    if (!simPosition) return alert('청산할 포지션이 없습니다.');
    const currentCandle = simAnonymizedData[simPlayIndex];
    const exitPrice = currentCandle.close;
    
    let profitPct = 0;
    if (simPosition.type === 'BUY') {
      profitPct = ((exitPrice - simPosition.entryPrice) / simPosition.entryPrice) * 100 * simPosition.leverage;
    } else {
      profitPct = ((simPosition.entryPrice - exitPrice) / simPosition.entryPrice) * 100 * simPosition.leverage;
    }
    
    const pnl = simBalance * (profitPct / 100);
    const newBalance = Number((simBalance + pnl).toFixed(2));
    
    const trade = {
      type: simPosition.type,
      entryPrice: simPosition.entryPrice,
      exitPrice,
      entryIndex: simPosition.entryIndex,
      exitIndex: simPlayIndex,
      profitPct: Number(profitPct.toFixed(2)),
      pnl: Number(pnl.toFixed(2))
    };
    
    setSimBalance(newBalance);
    setSimTrades(prev => [...prev, trade]);
    setSimPosition(null);
    
    // Add exit marker drawing
    const marker = {
      type: 'text' as const,
      points: [{ x: simPlayIndex, y: exitPrice }],
      label: `■ EXIT (${profitPct >= 0 ? '+' : ''}${profitPct.toFixed(1)}%)`,
      color: '#3b82f6'
    };
    setSimDrawings(prev => [...prev, marker]);
  };

  // End simulation & generate final report
  const handleEndSimulation = () => {
    if (simAnonymizedData.length === 0) return;
    
    setSimBalance((prevBalance) => {
      let finalBalance = prevBalance;
      const updatedTrades = [...simTrades];
      
      if (simPosition) {
        const lastIndex = simAnonymizedData.length - 1;
        const currentCandle = simAnonymizedData[lastIndex];
        const exitPrice = currentCandle.close;
        
        let profitPct = 0;
        if (simPosition.type === 'BUY') {
          profitPct = ((exitPrice - simPosition.entryPrice) / simPosition.entryPrice) * 100 * simPosition.leverage;
        } else {
          profitPct = ((simPosition.entryPrice - exitPrice) / simPosition.entryPrice) * 100 * simPosition.leverage;
        }
        
        const pnl = finalBalance * (profitPct / 100);
        finalBalance = Number((finalBalance + pnl).toFixed(2));
        
        const trade = {
          type: simPosition.type,
          entryPrice: simPosition.entryPrice,
          exitPrice,
          entryIndex: simPosition.entryIndex,
          exitIndex: lastIndex,
          profitPct: Number(profitPct.toFixed(2)),
          pnl: Number(pnl.toFixed(2)),
          forced: true
        };
        updatedTrades.push(trade);
      }
      
      // Calculate stats
      const totalTrades = updatedTrades.length;
      const winningTrades = updatedTrades.filter(t => t.profitPct > 0).length;
      const winRate = totalTrades > 0 ? (winningTrades / totalTrades) * 100 : 0;
      const totalProfitPct = ((finalBalance - 10000) / 10000) * 100;
      
      setSimTrades(updatedTrades);
      setSimPosition(null);
      setSimRunning(false);
      
      setSimResultReport({
        totalTrades,
        winRate: Number(winRate.toFixed(1)),
        totalProfitPct: Number(totalProfitPct.toFixed(2)),
        finalBalance,
        anonymizerName: simAnonymizerName,
        trueIdentity: simTrueIdentity
      });

      return finalBalance;
    });
  };

  // Reset simulator
  const handleResetSimulator = () => {
    setSimPlayIndex(Math.min(5, simAnonymizedData.length - 1));
    setSimRunning(false);
    setSimBalance(10000);
    setSimTrades([]);
    setSimPosition(null);
    setSimResultReport(null);
    setSimDrawings([]);
  };

  // Render Login Screen
  if (checkingAuth) {
    return (
      <div className="login-overlay">
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <div className="spin-anim" style={{ fontSize: '32px', marginBottom: '16px' }}>🔄</div>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>관리자 권한 및 세션 확인 중...</p>
        </div>
      </div>
    );
  }

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
            <label htmlFor="email">이메일 주소 (Operator Email)</label>
            <input 
              id="email"
              type="email" 
              className="form-control"
              placeholder="admin@chartmon.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required={!authError} // Make it not strictly required if only doing Google login
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">비밀번호 (Password)</label>
            <input 
              id="pass"
              type="password" 
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required={!authError}
            />
            {authError && <span className="error-text" style={{ display: 'block', marginTop: '8px', color: 'var(--color-error)' }}>⚠️ {authError}</span>}
          </div>
          <button type="submit" className="btn btn-brand" style={{ width: '100%' }}>접속 인증하기</button>
          
          <div className="admin-login-divider">또는</div>
          
          <button 
            type="button" 
            className="google-login-btn-admin" 
            onClick={handleGoogleLogin}
            style={{ width: '100%' }}
          >
            <svg className="google-icon" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-.1.8-2.6 2.4l3.1 2.4c1.8-1.66 2.9-4.1 2.9-7.22z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-3.1-2.4c-.86.58-1.97.92-3.26.92-2.5 0-4.63-1.69-5.38-3.96l-3.2 2.48C7.02 22.1 9.3 24 12 24z"/>
              <path fill="#FBBC05" d="M6.62 14.05c-.2-.58-.3-1.2-.3-1.84s.1-1.26.3-1.84L3.42 7.89C2.52 9.7 2 11.77 2 13.92s.52 4.22 1.42 6.03l3.2-2.48z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.4-3.4C17.96 1.19 15.24 0 12 0 9.3 0 7.02 1.9 5.02 4.88l3.2 2.48c.75-2.27 2.88-3.96 5.38-3.96z"/>
            </svg>
            Google 계정으로 로그인
          </button>
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
        <button 
          className={`tab-btn ${activeTab === 'simulator' ? 'active' : ''}`}
          onClick={() => setActiveTab('simulator')}
        >
          <Play size={16} />
          <span>백테스트 & 익명화 시뮬레이터</span>
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

        {activeTab === 'simulator' && (
          <div className="panel-card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            
            {/* Left Column: Data Config & Anonymization */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                🔧 데이터 수급 및 익명화 가공 도구
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                    1. 원본 차트 데이터 (JSON 캔들 배열)
                  </label>
                  <textarea
                    value={simRawData}
                    onChange={(e) => setSimRawData(e.target.value)}
                    style={{
                      width: '100%',
                      height: '180px',
                      background: '#0d1117',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      color: '#58a6ff',
                      fontFamily: 'monospace',
                      fontSize: '11px',
                      padding: '10px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                      익명화 칭호 (가칭)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={simAnonymizerName}
                      onChange={(e) => setSimAnonymizerName(e.target.value)}
                      placeholder="예: 익명의 미국 IT 대기업 A사"
                      style={{ background: '#161a25', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '6px 10px', width: '100%', fontSize: '13px' }}
                    />
                  </div>
                  
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                      실제 원래 종목/정보 (정답 노출용)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={simTrueIdentity}
                      onChange={(e) => setSimTrueIdentity(e.target.value)}
                      placeholder="예: AAPL (2021년 3월)"
                      style={{ background: '#161a25', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '6px 10px', width: '100%', fontSize: '13px' }}
                    />
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'center' }}>
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                      노이즈 감도 (Jittering % 범위)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      value={simJitterRange}
                      onChange={(e) => setSimJitterRange(parseFloat(e.target.value) || 0)}
                      style={{ background: '#161a25', color: '#fff', border: '1px solid var(--border-color)', borderRadius: '6px', padding: '6px 10px', width: '100%', fontSize: '13px' }}
                    />
                  </div>
                  
                  <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#fff', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={simScaleType === 'percent'}
                        onChange={(e) => setSimScaleType(e.target.checked ? 'percent' : 'none')}
                        style={{ cursor: 'pointer' }}
                      />
                      상대 비율화 (시가 100 기준)
                    </label>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                  <button type="button" className="btn btn-brand" onClick={handleAnonymize} style={{ flex: 1 }}>
                    ⚡ 익명화 가공 & 시뮬레이터 로드
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      if (quizzesList.length > 0) {
                        setSimRawData(JSON.stringify(quizzesList[0].chartData, null, 2));
                        setSimAnonymizerName(`익명의 ${quizzesList[0].category} 팩 차트`);
                        setSimTrueIdentity('퀴즈 문제 1번 차트 데이터');
                        alert('문제 1번의 차트 데이터를 원본 창에 복사했습니다. [익명화 가공] 버튼을 눌러 로드하세요.');
                      } else {
                        alert('퀴즈 데이터가 없습니다.');
                      }
                    }}
                  >
                    퀴즈 데이터 복사
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column: Interactive Simulator Runner */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {simAnonymizedData.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', border: '2px dashed var(--border-color)', borderRadius: '12px', color: 'var(--text-muted)', padding: '40px' }}>
                  <Play size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
                  <p style={{ textAlign: 'center', fontSize: '13px' }}>왼쪽 도구에서 데이터를 익명화 가공하여 시뮬레이터를 활성화해 주세요.</p>
                </div>
              ) : (
                <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <span className="badge-tag level" style={{ fontSize: '11px', background: 'rgba(124, 108, 250, 0.15)', color: 'var(--color-brand)', padding: '2px 8px', borderRadius: '4px' }}>
                        {simAnonymizerName}
                      </span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                      진행 상태: <strong>{simPlayIndex + 1}</strong> / {simAnonymizedData.length} 캔들
                    </div>
                  </div>

                  <ChartVisualizer
                    chartData={simAnonymizedData.slice(0, simPlayIndex + 1)}
                    drawings={simDrawings}
                  />

                  {/* Position state header */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', margin: '10px 0', fontSize: '12px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>가상 잔액</span>
                      <strong style={{ fontSize: '14px', color: '#ffba3a' }}>${simBalance.toLocaleString()}</strong>
                    </div>
                    <div style={{ textAlign: 'center', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>보유 포지션</span>
                      {simPosition ? (
                        <strong style={{ fontSize: '14px', color: simPosition.type === 'BUY' ? '#ef4444' : '#10b981' }}>
                          {simPosition.type} (${simPosition.entryPrice.toFixed(1)})
                        </strong>
                      ) : (
                        <strong style={{ fontSize: '14px', color: 'var(--text-muted)' }}>없음 (FLAT)</strong>
                      )}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '2px' }}>체결 거래</span>
                      <strong style={{ fontSize: '14px', color: '#fff' }}>{simTrades.length}회</strong>
                    </div>
                  </div>

                  {/* Playback & Trades controls */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                    {/* Streaming Speed Control */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--text-secondary)' }}>
                      <span>차트 재생 속도: </span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {[2000, 1000, 500, 200].map(sp => (
                          <button
                            key={sp}
                            type="button"
                            onClick={() => setSimPlaySpeed(sp)}
                            style={{
                              padding: '3px 8px',
                              background: simPlaySpeed === sp ? 'var(--color-brand)' : 'rgba(255,255,255,0.05)',
                              border: 'none',
                              borderRadius: '4px',
                              color: '#fff',
                              fontSize: '10px',
                              cursor: 'pointer'
                            }}
                          >
                            {sp === 2000 ? '0.5x' : sp === 1000 ? '1.0x' : sp === 500 ? '2.0x' : '5.0x'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Simulation buttons */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button
                        type="button"
                        className={`btn ${simRunning ? 'btn-secondary' : 'btn-brand'}`}
                        onClick={() => setSimRunning(!simRunning)}
                        style={{ flex: 1 }}
                      >
                        {simRunning ? '⏸️ 일시정지' : '▶️ 시뮬레이션 시작'}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                          if (simPlayIndex < simAnonymizedData.length - 1) {
                            setSimPlayIndex(prev => prev + 1);
                          }
                        }}
                        disabled={simRunning || simPlayIndex >= simAnonymizedData.length - 1}
                        style={{ padding: '8px 12px' }}
                      >
                        +1 캔들
                      </button>
                      <button type="button" className="btn btn-secondary" onClick={handleResetSimulator} style={{ padding: '8px 12px' }}>
                        🔄 리셋
                      </button>
                    </div>

                    {/* Position entering buttons */}
                    <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                      <button
                        type="button"
                        className="btn btn-brand"
                        onClick={handleSimBuy}
                        disabled={simPosition !== null}
                        style={{ flex: 1, background: '#ef4444', borderColor: '#ef4444' }}
                      >
                        롱 (BUY) 진입
                      </button>
                      <button
                        type="button"
                        className="btn btn-brand"
                        onClick={handleSimSell}
                        disabled={simPosition !== null}
                        style={{ flex: 1, background: '#10b981', borderColor: '#10b981' }}
                      >
                        숏 (SELL) 진입
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleSimExit}
                        disabled={simPosition === null}
                        style={{ flex: 1, background: '#3b82f6', color: '#fff', borderColor: '#3b82f6' }}
                      >
                        포지션 청산 (EXIT)
                      </button>
                    </div>
                    
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleEndSimulation}
                      style={{ marginTop: '4px', width: '100%', fontSize: '12px', padding: '6px' }}
                    >
                      🚩 시뮬레이션 즉시 종료 및 결과 분석
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Results Report overlay modal */}
            {simResultReport && (
              <div className="modal-overlay" style={{ zIndex: 9999 }}>
                <div className="modal-content" style={{ maxWidth: '450px' }}>
                  <div className="modal-header">
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>📊 백테스트 시뮬레이션 복기 리포트</h3>
                    <button className="icon-btn" onClick={() => setSimResultReport(null)}>
                      <X size={18} />
                    </button>
                  </div>
                  <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
                    <div style={{ textAlign: 'center', background: 'rgba(255, 186, 58, 0.08)', padding: '16px', borderRadius: '10px', border: '1px solid rgba(255, 186, 58, 0.2)' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>최종 자산 결과</span>
                      <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffba3a', margin: '4px 0 0 0' }}>
                        ${simResultReport.finalBalance.toLocaleString()}
                      </h2>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>가칭 종목명</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold' }}>{simResultReport.anonymizerName}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>진짜 원래 정체</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-brand)' }}>{simResultReport.trueIdentity}</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>총 매매 횟수</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold' }}>{simResultReport.totalTrades}회</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>매매 승률 (Win Rate)</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold', color: simResultReport.winRate >= 50 ? '#ef4444' : '#64748b' }}>
                            {simResultReport.winRate}%
                          </td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>최종 수익률</td>
                          <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 'bold', color: simResultReport.totalProfitPct >= 0 ? '#ef4444' : '#3b82f6' }}>
                            {simResultReport.totalProfitPct >= 0 ? '+' : ''}{simResultReport.totalProfitPct}%
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div>
                      <h4 style={{ fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>거래 일지 내역</h4>
                      <div style={{ maxHeight: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '6px', background: '#0d1117', padding: '10px', borderRadius: '8px' }}>
                        {simTrades.length === 0 ? (
                          <div style={{ color: 'var(--text-muted)', fontSize: '11px', textAlign: 'center', padding: '10px' }}>체결된 거래가 없습니다.</div>
                        ) : (
                          simTrades.map((t, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', borderBottom: '1px dashed rgba(255,255,255,0.05)', paddingBottom: '4px' }}>
                              <span style={{ color: t.type === 'BUY' ? '#ef4444' : '#10b981' }}>
                                #{idx + 1} {t.type} (캔들 {t.entryIndex} ➡️ {t.exitIndex}{t.forced ? ' 강제종료' : ''})
                              </span>
                              <span style={{ color: t.profitPct >= 0 ? '#ef4444' : '#3b82f6', fontWeight: 'bold' }}>
                                {t.profitPct >= 0 ? '+' : ''}{t.profitPct}% (${t.pnl >= 0 ? '+' : ''}{t.pnl})
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setSimResultReport(null)}>확인 및 복기 완료</button>
                  </div>
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

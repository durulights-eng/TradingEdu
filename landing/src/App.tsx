import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Brain,
  Check,
  ChevronRight,
  Flame,
  Gauge,
  LineChart,
  Play,
  Radar,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Zap,
} from 'lucide-react';

type Habit = 'chase' | 'stop' | 'risk';

const quizAnswers = [
  { id: 'A', label: 'A 지점', state: 'neutral' },
  { id: 'B', label: 'B 지점', state: 'correct' },
  { id: 'C', label: 'C 지점', state: 'neutral' },
  { id: 'D', label: 'D 지점', state: 'neutral' },
] as const;

const habitLabels: Record<Habit, string> = {
  chase: '오르면 추격매수, 내리면 물타기',
  stop: '작도는 하지만 손절 타이밍을 놓침',
  risk: '승률은 높은데 한 번에 크게 잃음',
};

const resultMap: Record<Habit, { title: string; survival: string; training: string; note: string }> = {
  chase: {
    title: '뇌동매매 돌파 추종자',
    survival: '18%',
    training: '가짜 돌파·휩소 구별 훈련',
    note: '상승 캔들만 보고 따라붙는 습관이 가장 큰 리스크입니다.',
  },
  stop: {
    title: '손절 지연형 차트 분석가',
    survival: '27%',
    training: '무효화 라인·리테스트 판단 훈련',
    note: '분석은 하지만 진입 후 판단 기준이 흐려지는 패턴입니다.',
  },
  risk: {
    title: '고승률 과몰입 트레이더',
    survival: '22%',
    training: '2% 리스크·포지션 사이징 훈련',
    note: '맞히는 능력보다 한 번의 손실을 제한하는 능력이 먼저입니다.',
  },
};

function App() {
  const [selectedPoint, setSelectedPoint] = useState<string | null>(null);
  const [habit, setHabit] = useState<Habit | null>(null);

  const result = useMemo(() => resultMap[habit ?? 'chase'], [habit]);
  const quizCompleted = selectedPoint !== null;
  const diagnosisCompleted = quizCompleted && habit !== null;

  return (
    <main>
      <header className="site-nav">
        <a className="brand-mark" href="#top" aria-label="ChartMon">
          <span className="brand-symbol">
            <LineChart size={18} />
          </span>
          <span>ChartMon</span>
        </a>
        <nav className="nav-links" aria-label="주요 섹션">
          <a href="#diagnosis">무료 진단</a>
          <a href="#system">훈련 시스템</a>
          <a href="#pricing">요금제</a>
        </nav>
        <a className="nav-cta" href="#diagnosis">
          <Play size={16} />
          15초 진단
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            이 차트, 3초 안에 함정이 보이나요?
          </div>
          <h1>
            차트 공부했는데도
            <br />
            매수 버튼 앞에서
            <span> 흔들리나요?</span>
          </h1>
          <p className="hero-subcopy">
            책으로 배운 패턴은 실전 차트에서 자주 배신합니다. ChartMon은 가짜 돌파, 손절 지연,
            포지션 사이징 실수를 매일 문제로 찔러주는 차트 트레이닝 앱입니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#diagnosis">
              내 약점 15초 진단
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#system">
              훈련 방식 보기
              <ChevronRight size={18} />
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Timer size={15} /> 15문제 데일리
            </span>
            <span>
              <Radar size={15} /> ELO 레이팅
            </span>
            <span>
              <Flame size={15} /> 스트릭 습관화
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="ChartMon 앱 미리보기">
          <div className="phone-shell">
            <div className="phone-status">
              <span>ChartMon</span>
              <span>15:00</span>
            </div>
            <div className="phone-title-row">
              <div>
                <p>오늘의 트레이닝</p>
                <strong>가짜 돌파 구간 찾기</strong>
              </div>
              <span className="elo-pill">1626 RP</span>
            </div>
            <div className="chart-panel">
              <div className="chart-grid" />
              <div className="candle candle-a" />
              <div className="candle candle-b" />
              <div className="candle candle-c" />
              <div className="candle candle-d" />
              <div className="candle candle-e" />
              <div className="trap-zone">Bull Trap</div>
              <svg viewBox="0 0 420 220" className="chart-line" aria-hidden="true">
                <polyline points="20,160 72,130 120,148 168,92 214,108 252,54 300,82 350,126 398,146" />
                <line x1="54" y1="145" x2="392" y2="145" />
              </svg>
            </div>
            <div className="answer-grid">
              <button>A 지점</button>
              <button className="active">B 지점</button>
              <button>C 지점</button>
              <button>D 지점</button>
            </div>
            <div className="feedback-strip">
              <Check size={16} />
              <span>정답. 돌파 후 거래량이 붙지 않고 바로 재진입 실패.</span>
            </div>
          </div>
          <div className="floating-card score-card">
            <Gauge size={18} />
            <span>맞춤 난이도</span>
            <strong>Lv. 4.2</strong>
          </div>
          <div className="floating-card streak-card">
            <Trophy size={18} />
            <span>이번 주</span>
            <strong>5일 연속</strong>
          </div>
        </div>
      </section>

      <section className="metric-band" aria-label="핵심 지표">
        <div>
          <strong>15문제</strong>
          <span>하루 맞춤 퀴즈</span>
        </div>
        <div>
          <strong>8축</strong>
          <span>스킬 레이더 분석</span>
        </div>
        <div>
          <strong>5천만</strong>
          <span>가상 시뮬레이션 원금</span>
        </div>
        <div>
          <strong>10초</strong>
          <span>약점 진단 테스트</span>
        </div>
      </section>

      <section className="diagnosis-section" id="diagnosis">
        <div className="section-heading">
          <span className="section-kicker">Free Skill Check</span>
          <h2>틀리면 운이 나쁜 게 아니라, 반복되는 습관이 보입니다.</h2>
          <p>차트 한 문제와 매매 습관 하나만으로도 지금 가장 먼저 고쳐야 할 훈련이 드러납니다.</p>
        </div>

        <div className="diagnosis-layout">
          <article className="quiz-stage">
            <div className="stage-label">
              <span>Step 01</span>
              <strong>3초 차트 판단</strong>
            </div>
            <div className="mini-chart">
              <svg viewBox="0 0 520 240" aria-label="가짜 돌파 차트">
                <defs>
                  <linearGradient id="priceGlow" x1="0" x2="1">
                    <stop offset="0" stopColor="#23d18b" />
                    <stop offset="1" stopColor="#29b6f6" />
                  </linearGradient>
                </defs>
                <path className="support" d="M30 165H488" />
                <path className="price" d="M28 190 C70 150 95 172 128 145 S196 72 238 116 S298 154 338 116 S410 62 486 150" />
                <circle cx="128" cy="145" r="12" />
                <circle className="correct-dot" cx="410" cy="72" r="15" />
                <text x="112" y="130">A</text>
                <text x="394" y="56">B</text>
                <text x="324" y="108">C</text>
                <text x="470" y="146">D</text>
              </svg>
            </div>
            <h3>상위 5% 트레이더만 빠르게 구별하는 가짜 돌파 구간은?</h3>
            <div className="choice-grid">
              {quizAnswers.map((answer) => (
                <button
                  key={answer.id}
                  className={[
                    selectedPoint === answer.id ? 'selected' : '',
                    selectedPoint && answer.state === 'correct' ? 'correct' : '',
                    selectedPoint === answer.id && answer.state !== 'correct' ? 'wrong' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setSelectedPoint(answer.id)}
                >
                  {answer.label}
                </button>
              ))}
            </div>
          </article>

          <article className={`quiz-stage ${quizCompleted ? '' : 'muted'}`}>
            <div className="stage-label">
              <span>Step 02</span>
              <strong>매매 습관 진단</strong>
            </div>
            <h3>현재 가장 자주 반복하는 실수는?</h3>
            <div className="habit-list">
              {(Object.keys(habitLabels) as Habit[]).map((key) => (
                <button
                  key={key}
                  className={habit === key ? 'selected' : ''}
                  disabled={!quizCompleted}
                  onClick={() => setHabit(key)}
                >
                  <span>{habitLabels[key]}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </article>

          <article className={`result-panel ${diagnosisCompleted ? 'active' : ''}`}>
            <div className="stage-label">
              <span>Step 03</span>
              <strong>결과 & 앱 다운로드</strong>
            </div>
            <div className="risk-meter">
              <span>시장 생존율</span>
              <strong>{diagnosisCompleted ? result.survival : '--'}</strong>
            </div>
            <h3>{diagnosisCompleted ? result.title : '진단을 완료하면 결과가 열립니다'}</h3>
            <p>{diagnosisCompleted ? result.note : '차트 판단과 습관 응답을 합쳐 맞춤 훈련 패키지를 생성합니다.'}</p>
            <div className="training-prescription">
              <Target size={18} />
              <span>{diagnosisCompleted ? result.training : '맞춤 훈련 생성 대기 중'}</span>
            </div>
            <a className="download-button" href="#download">
              <Smartphone size={18} />
              Google Play에서 무료 훈련 시작
            </a>
          </article>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-heading align-left">
          <span className="section-kicker">Training System</span>
          <h2>문제 풀이가 아니라, 차트 판단 근육을 만드는 구조.</h2>
        </div>
        <div className="feature-grid">
          <article>
            <Brain />
            <h3>개인 맞춤 난이도</h3>
            <p>오답 패턴과 카테고리별 숙련도를 보고 다음 문제 난이도를 자동 조정합니다.</p>
          </article>
          <article>
            <Activity />
            <h3>ELO식 레이팅</h3>
            <p>쉬운 문제 반복보다 어려운 문제에서 기대 이상으로 맞히는 실력을 반영합니다.</p>
          </article>
          <article>
            <BarChart3 />
            <h3>8축 스킬 레이더</h3>
            <p>캔들, 구조, 추세, 돌파, 거래량, 지표, 실행, 리스크를 분리 진단합니다.</p>
          </article>
          <article>
            <ShieldAlert />
            <h3>리스크 관리 훈련</h3>
            <p>승률보다 중요한 손절, 손익비, 포지션 사이징 문제를 매일 반복합니다.</p>
          </article>
        </div>
      </section>

      <section className="shortform-section">
        <div className="section-heading">
          <span className="section-kicker">Shorts Funnel</span>
          <h2>개미가 자주 당하는 장면만 골라 훈련합니다.</h2>
        </div>
        <div className="shortform-grid">
          <article>
            <span>01</span>
            <h3>쌍바닥의 함정</h3>
            <p>W자 패턴만 보고 들어갔다가 전저점 이탈 휩소에 당하는 장면으로 진입.</p>
          </article>
          <article>
            <span>02</span>
            <h3>RSI 과매도 지옥</h3>
            <p>RSI 30만 믿고 매수한 뒤 밴드워크로 무너지는 상황을 보여줍니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>승률 90%가 파산하는 이유</h3>
            <p>작은 수익 열 번보다 큰 손실 한 번이 계좌를 망치는 구조를 자극합니다.</p>
          </article>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-copy">
          <span className="section-kicker">Pricing</span>
          <h2>무료 진단으로 시작하고, 매일 훈련으로 전환.</h2>
          <p>처음엔 무료로 약점을 확인하고, 매일 15문제로 가짜 돌파와 리스크 실수를 줄여갑니다.</p>
        </div>
        <div className="pricing-table">
          <article>
            <h3>Basic</h3>
            <strong>0원</strong>
            <p>매일 3회 데일리 퀴즈와 기초 이론</p>
            <a href="#download">무료 시작</a>
          </article>
          <article className="featured-plan">
            <div className="plan-badge">
              <BadgeCheck size={15} />
              추천
            </div>
            <h3>Premium</h3>
            <strong>월 9,900원</strong>
            <p>무제한 드릴, 오답 패키지, 심화 패턴 분석</p>
            <a href="#download">훈련 패키지 받기</a>
          </article>
        </div>
      </section>

      <section className="final-cta" id="download">
        <Zap size={28} />
        <h2>오늘부터 손실을 복기 말고, 미리 훈련하세요.</h2>
        <p>15초 무료 진단 결과를 앱에서 이어받아 하루 15문제 맞춤 훈련으로 연결합니다.</p>
        <a className="primary-button" href="https://play.google.com/store" target="_blank" rel="noreferrer">
          Google Play로 이동
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

export default App;

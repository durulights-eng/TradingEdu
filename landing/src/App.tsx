import { useMemo, useState } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  ChevronRight,
  Flame,
  Gauge,
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
    title: '손절 지연형 주식 차트 분석가',
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

  const [contactEmail, setContactEmail] = useState('');
  const [contactType, setContactType] = useState('bug');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail || !contactMessage) return;
    setIsSubmitting(true);
    
    // Simulate API call or write to database
    await new Promise((resolve) => setTimeout(resolve, 1200));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setContactEmail('');
    setContactMessage('');
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const result = useMemo(() => resultMap[habit ?? 'chase'], [habit]);
  const quizCompleted = selectedPoint !== null;
  const diagnosisCompleted = quizCompleted && habit !== null;

  return (
    <>
      <main>
      <header className="site-nav">
        <a className="brand-mark" href="#top" aria-label="ChartMon">
          <img src="/icon.svg" className="brand-logo" alt="ChartMon" />
          <span>ChartMon</span>
        </a>
        <nav className="nav-links" aria-label="주요 섹션">
          <a href="#diagnosis">무료 진단</a>
          <a href="#system">훈련 시스템</a>
          <a href="#contact">문의/제보</a>
        </nav>
        <a className="nav-cta" href="#diagnosis">
          <Play size={16} />
          15초 무료 진단
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            이 주식 차트, 3초 안에 함정이 보이나요?
          </div>
          <h1>
            주식 차트 공부했는데도
            <br />
            매수 버튼 앞에서
            <span> 흔들리나요?</span>
          </h1>
          <p className="hero-subcopy">
            책으로 배운 단순 패턴은 실전 주식 차트에서 무너지기 쉽습니다. 차트몬은 가짜 돌파, 손절 지연,
            포지션 사이징 등 치명적인 매매 실수를 직관적인 퀴즈로 바로잡아 주는 주식 차트 트레이닝 앱입니다.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#diagnosis">
              내 약점 15초 진단하기
              <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#system">
              훈련 방식 보기
              <ChevronRight size={18} />
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Timer size={15} /> 매일 15분 트레이닝
            </span>
            <span>
              <Radar size={15} /> 실시간 실력 ELO 레이팅
            </span>
            <span>
              <Flame size={15} /> 매일 훈련 습관화
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
          <strong>15분</strong>
          <span>매일 맞춤 트레이닝</span>
        </div>
        <div>
          <strong>8대 지표</strong>
          <span>스킬 레이더 분석</span>
        </div>
        <div>
          <strong>5천만</strong>
          <span>가상 시뮬레이션 원금</span>
        </div>
        <div>
          <strong>10초</strong>
          <span>초고속 약점 진단</span>
        </div>
      </section>

      <section className="diagnosis-section" id="diagnosis">
        <div className="section-heading">
          <span className="section-kicker">Free Skill Check</span>
          <h2>틀리면 운이 나쁜 게 아니라, 반복되는 습관이 보입니다.</h2>
          <p>주식 차트 한 문제와 매매 습관 하나만으로도 지금 가장 먼저 고쳐야 할 훈련이 드러납니다.</p>
        </div>

        <div className="diagnosis-layout">
          <article className="quiz-stage">
            <div className="stage-label">
              <span>Step 01</span>
              <strong>3초 주식 차트 판단</strong>
            </div>
            <div className="mini-chart">
              <svg viewBox="0 0 520 240" aria-label="가짜 돌파 주식 차트">
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
            <p>{diagnosisCompleted ? result.note : '주식 차트 판단과 습관 응답을 합쳐 맞춤 훈련 패키지를 생성합니다.'}</p>
            {diagnosisCompleted && (
              <p style={{ 
                color: 'var(--cyan)', 
                fontSize: '13px', 
                lineHeight: '1.5', 
                marginTop: '10px', 
                marginBottom: '10px',
                fontWeight: 700,
                textAlign: 'left'
              }}>
                📢 내 등급에 맞춰 실시간으로 난이도가 정밀 튜닝되는 1:1 AI 트레이닝 시스템. 하루 15분 투자로 상위 5% 트레이더의 차트 근육을 이식하세요.
              </p>
            )}
            <div className="training-prescription">
              <Target size={18} />
              <span>{diagnosisCompleted ? result.training : '맞춤 훈련 생성 대기 중'}</span>
            </div>

            {diagnosisCompleted && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 186, 58, 0.15) 0%, rgba(255, 186, 58, 0.03) 100%)',
                border: '1px solid rgba(255, 186, 58, 0.25)',
                borderRadius: '8px',
                padding: '12px 14px',
                marginTop: '12px',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'left'
              }}>
                <span style={{ fontSize: '18px' }}>🎁</span>
                <div>
                  <strong style={{ color: 'var(--amber)', fontSize: '13px', display: 'block', fontWeight: 800 }}>
                    가입 혜택: PRO 멤버십 할인 이벤트 진행 중
                  </strong>
                  <span style={{ color: 'var(--muted)', fontSize: '11px', display: 'block', marginTop: '2px', lineHeight: 1.3 }}>
                    AI 실시간 ELO 1:1 맞춤형 난이도 튜닝 및 모든 강좌 무제한 액세스
                  </span>
                </div>
              </div>
            )}

            <a className="download-button" href="#download">
              <Smartphone size={18} />
              Google Play에서 {diagnosisCompleted ? 'PRO 멤버십' : '무료 훈련'} 시작
            </a>
          </article>
        </div>
      </section>

      <section className="system-section" id="system">
        <div className="section-heading align-left">
          <span className="section-kicker">Training System</span>
          <h2>문제 풀이가 아니라, 주식 차트 판단 근육을 만드는 구조.</h2>
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
          <span className="section-kicker">Shorts Training</span>
          <h2>개인 투자자가 가장 취약한 실전 패턴만 골라 훈련합니다.</h2>
        </div>
        <div className="shortform-grid">
          <article>
            <span>01</span>
            <h3>쌍바닥의 함정</h3>
            <p>쌍바닥 지지만 믿고 진입했다가 직전 저점 지지 붕괴(휩소)에 무너지는 패턴을 극복합니다.</p>
          </article>
          <article>
            <span>02</span>
            <h3>과매도 구간의 함정</h3>
            <p>RSI가 과매도(30 이하)라는 것만 믿고 성급히 매수했다가 바닥이 뚫리는 패턴을 교정합니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>승률 90%가 파산하는 이유</h3>
            <p>작은 수익을 아무리 많이 누적해도 단 한 번의 대형 손실로 계좌가 망가지는 구조적 한계를 깨닫게 합니다.</p>
          </article>
        </div>
      </section>

  <section className="reviews-section" id="reviews">
    <div className="section-heading">
      <span className="section-kicker">User Reviews</span>
      <h2>실전 훈련으로 나쁜 매매 습관을 극복한 트레이더들</h2>
      <p>ChartMon을 통해 뇌동매매와 손절 지연을 극복하고, 안정적인 수익 모델을 찾아가고 있습니다.</p>
    </div>
    <div className="reviews-grid">
      <article className="review-card">
        <div className="review-rating">⭐⭐⭐⭐⭐</div>
        <p className="review-text">"매번 돌파인 줄 알고 샀다가 꼭대기에서 물리던 고질병이 있었는데, 앱에서 가짜 돌파 휩소 문제를 계속 풀다 보니 진입 전에 거래량과 캔들 꼬리를 한 번 더 확인하는 습관이 완전히 몸에 뱄습니다."</p>
        <div className="review-author">
          <strong>전업 트레이더 L씨</strong>
          <span>레이팅 1720 RP</span>
        </div>
      </article>
      <article className="review-card">
        <div className="review-rating">⭐⭐⭐⭐⭐</div>
        <p className="review-text">"작도는 잘하는데 막상 진입하면 손절가를 뒤로 미루다가 크게 깨지곤 했습니다. 앱의 리스크 관리 훈련에서 2% 고정 손실 계산과 무효화 라인 리테스트 문제를 매일 푸니, 이제 칼손절이 두렵지 않습니다."</p>
        <div className="review-author">
          <strong>직장인 투자자 K씨</strong>
          <span>레이팅 1450 RP</span>
        </div>
      </article>
      <article className="review-card">
        <div className="review-rating">⭐⭐⭐⭐⭐</div>
        <p className="review-text">"이론 책을 수십 권 읽어도 실전에선 맨날 흔들렸는데, 게임처럼 매일 15분씩 ELO 레이팅 올리면서 연습하니까 부담 없고 너무 재밌습니다. 특히 8축 레이더 차트로 제 약점이 리스크 관리라는 걸 팩트로 알게 되었네요."</p>
        <div className="review-author">
          <strong>가상자산 투자자 정모씨</strong>
          <span>레이팅 1580 RP</span>
        </div>
      </article>
    </div>
  </section>

  <section className="diagnosis-section" id="contact" style={{ padding: '80px 0', borderTop: '1px solid var(--line)', width: 'min(1180px, calc(100% - 32px))', margin: '0 auto' }}>
    <div className="section-heading">
      <span className="section-kicker">Contact Us</span>
      <h2>문의하기 & 버그 제보</h2>
      <p>차트몬을 이용하면서 불편하셨던 점이나 제안 사항을 보내주시면 신속히 반영하겠습니다.</p>
    </div>

    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 16px' }}>
      {isSubmitted ? (
        <div style={{
          background: 'rgba(35, 209, 139, 0.08)',
          border: '1px solid rgba(35, 209, 139, 0.3)',
          borderRadius: '8px',
          padding: '24px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
        }}>
          <span style={{ fontSize: '32px', display: 'block', marginBottom: '12px' }}>🎉</span>
          <h3 style={{ color: '#fff', fontSize: '18px', margin: '0 0 8px' }}>피드백이 성공적으로 전달되었습니다!</h3>
          <p style={{ color: 'var(--muted)', fontSize: '14px', margin: 0 }}>보내주신 소중한 의견은 차트몬 개선에 큰 도움이 됩니다. 감사합니다.</p>
        </div>
      ) : (
        <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: 650, color: 'var(--muted)' }}>이메일 주소</label>
            <input
              type="email"
              required
              placeholder="name@example.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              style={{
                background: 'var(--navy)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '12px 14px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--cyan)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--line)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: 650, color: 'var(--muted)' }}>문의 유형</label>
            <select
              value={contactType}
              onChange={(e) => setContactType(e.target.value)}
              style={{
                background: 'var(--navy)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '12px 14px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                backgroundImage: 'url("data:image/svg+xml;utf8,<svg fill=\'%238b99aa\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/></svg>")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                cursor: 'pointer'
              }}
            >
              <option value="bug" style={{ background: '#070b12' }}>버그 제보</option>
              <option value="feature" style={{ background: '#070b12' }}>기능 건의</option>
              <option value="alliance" style={{ background: '#070b12' }}>제휴 문의</option>
              <option value="etc" style={{ background: '#070b12' }}>기타</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '13px', fontWeight: 650, color: 'var(--muted)' }}>내용</label>
            <textarea
              required
              placeholder="의견이나 발견하신 버그의 상세 증상을 작성해주세요."
              rows={5}
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              style={{
                background: 'var(--navy)',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '12px 14px',
                color: '#fff',
                fontSize: '14px',
                lineHeight: '1.6',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--cyan)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--line)'}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              background: 'linear-gradient(135deg, var(--cyan) 0%, #0091ea 100%)',
              border: 'none',
              borderRadius: '8px',
              padding: '14px',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 800,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              transition: 'opacity 0.2s',
              marginTop: '6px'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
          >
            {isSubmitting ? '제출하는 중...' : '소중한 피드백 보내기'}
          </button>
        </form>
      )}
    </div>
  </section>

  <section className="final-cta" id="download">
        <Zap size={28} />
        <h2>잃고 나서 복기하지 말고, 잃기 전에 훈련하세요.</h2>
        <p>15초 실력 진단 결과를 바탕으로, 앱에서 상세한 취약점 분석 리포트와 일일 맞춤 훈련을 이어받습니다.</p>
        <a className="primary-button" href="https://play.google.com/store" target="_blank" rel="noreferrer">
          Google Play로 이동
          <ArrowRight size={18} />
        </a>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-mark">
            <img src="/icon.svg" className="brand-logo" alt="ChartMon" />
            <span>ChartMon</span>
          </div>
          <p className="footer-tagline">나만의 AI 주식 차트 선생님, 차트몬</p>
          <p className="footer-company" style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '4px' }}>사이스페이스(주)</p>
          <p className="footer-contact">문의: <a href="mailto:contact@42space.net">contact@42space.net</a></p>
        </div>
        
        <div className="footer-links-group">
          <div className="footer-links-col">
            <h4>서비스</h4>
            <a href="#diagnosis">무료 약점 진단</a>
            <a href="#system">훈련 시스템 소개</a>
          </div>
          <div className="footer-links-col">
            <h4>고객지원 & 법적고지</h4>
            <a href="/terms.html" target="_blank" rel="noreferrer">이용약관</a>
            <a href="/privacy.html" target="_blank" rel="noreferrer">개인정보 처리방침</a>
            <a href="/contact.html" target="_blank" rel="noreferrer">문의 및 피드백</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-disclaimer">
          <strong>투자 면책 고지</strong>: 차트몬에서 제공하는 모든 퀴즈, 주식 차트 해설 및 정보는 오직 교육 및 모의 분석 훈련 목적으로만 제공됩니다. 실제 어떠한 주식, 가상자산, 금융 상품의 매수/매도 권유나 투자 조언이 아니며, 본 정보를 참고한 모든 거래에 따른 투자 결과 및 손실에 대한 책임은 이용자 본인에게 귀속됩니다.
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} 사이스페이스(주). All rights reserved.
        </p>
      </div>
    </footer>
  </>
  );
}

export default App;

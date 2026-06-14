import React from 'react';
import { BookOpen, Play, CheckCircle } from 'lucide-react';
import { getTradingTier, tradingTiers } from '../data/quizzes';

interface DashboardProps {
  onStartDailyQuiz: () => void;
  onSelectModule: (theoryFile: string) => void;
  onStartQuizById: (id: number) => void;
  completedQuizzes: number[];
  xp: number;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onStartDailyQuiz,
  onSelectModule,
  onStartQuizById,
  completedQuizzes,
  xp
}) => {
  const modules = [
    { id: 1, title: '캔들스틱 기초 (Candlesticks)', desc: '캔들의 구조와 단일/복합 캔들 반전 패턴', file: '01_candlestick_basics.md' },
    { id: 2, title: '지지와 저항 (Support & Resistance)', desc: '매물대 작도법 및 역할 전환과 가짜 돌파', file: '02_support_resistance.md' },
    { id: 3, title: '추세선과 채널 (Trendlines & Channels)', desc: '추세 정의 및 평행 채널 작도와 추세선 돌파', file: '03_trendlines_channels.md' },
    { id: 4, title: '차트 패턴 (Chart Patterns)', desc: '헤드앤숄더 및 삼각형, 깃발형 패턴의 완성', file: '04_chart_patterns.md' },
    { id: 5, title: '기술적 보조지표 (Technical Indicators)', desc: 'EMA 정배열, RSI 다이버전스 및 MACD 활용법', file: '05_technical_indicators.md' },
    { id: 6, title: '리스크 관리 (Risk Management)', desc: '손익비 계산과 2% 룰 기반 포지션 사이징 공식', file: '06_risk_management.md' }
  ];

  const tier = getTradingTier(xp);
  const nextTier = tradingTiers.find(t => t.level === tier.level + 1);
  const xpNeeded = nextTier ? nextTier.minXp - xp : 0;
  const currentTierRange = nextTier ? nextTier.minXp - tier.minXp : 1000;
  const xpProgress = nextTier ? ((xp - tier.minXp) / currentTierRange) * 100 : 100;

  return (
    <div className="dashboard-wrapper">
      {/* Welcome & Daily 15-Min CTA */}
      <div className="welcome-card">
        <h2>하루 15분, 트레이딩 트레이닝 📈</h2>
        <p>실제 차트 시나리오 기반의 맞춤형 퀴즈로 시장을 이기는 트레이더로 성장하세요.</p>
        <button className="btn-primary" onClick={onStartDailyQuiz}>
          <Play size={18} fill="currentColor" />
          오늘의 15분 트레이닝 시작
        </button>
      </div>

      {/* User Tier Progression Card */}
      <div className="welcome-card" style={{ background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(22, 26, 37, 0.6) 100%)', border: '1px solid rgba(168, 85, 247, 0.25)', padding: '20px', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-xp)', background: 'rgba(168, 85, 247, 0.1)', padding: '4px 8px', borderRadius: '6px' }}>현재 트레이더 레벨</span>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '20px', fontWeight: 800, marginTop: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {tier.badge} {tier.name}
            </h2>
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-xp)' }}>Lv.{tier.level}</span>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '14px' }}>{tier.description}</p>
        
        {nextTier ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px' }}>
              <span>다음 등급: {nextTier.badge} {nextTier.name.split(' ')[0]}</span>
              <span>{xpNeeded} XP 남음 ({xp} / {nextTier.minXp} XP)</span>
            </div>
            <div className="progress-track" style={{ height: '8px' }}>
              <div className="progress-fill" style={{ width: `${xpProgress}%`, background: 'linear-gradient(90deg, var(--color-xp) 0%, #d946ef 100%)' }}></div>
            </div>
          </div>
        ) : (
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-streak)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>👑 마켓 마스터 등급 달성! 당신은 최고 수준의 트레이더입니다.</span>
          </div>
        )}
      </div>

      {/* Course Modules Curriculum */}
      <div>
        <h2 className="card-title">
          <BookOpen size={20} className="text-brand" style={{ color: 'var(--color-brand)' }} />
          차트 트레이딩 커리큘럼
        </h2>
        <div className="modules-list">
          {modules.map((m) => {
            const isCompleted = completedQuizzes.includes(m.id);
            return (
              <div key={m.id} className="module-card">
                <div className="module-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h3 style={{ color: isCompleted ? 'var(--color-bullish)' : 'var(--text-primary)' }}>
                      0{m.id}. {m.title}
                    </h3>
                    {isCompleted && <CheckCircle size={14} color="var(--color-bullish)" fill="rgba(16, 185, 129, 0.2)" />}
                  </div>
                  <p>{m.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <button 
                    onClick={() => onSelectModule(m.file)}
                    className="tab-btn" 
                    style={{ padding: '8px', border: '1px solid var(--border-color)', borderRadius: '8px' }}
                    title="이론 보기"
                  >
                    <BookOpen size={16} />
                  </button>
                  <button 
                    onClick={() => onStartQuizById(m.id)}
                    className="tab-btn active" 
                    style={{ padding: '8px', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '8px', background: 'rgba(59, 130, 246, 0.05)' }}
                    title="퀴즈 풀기"
                  >
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

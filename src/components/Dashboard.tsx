import React from 'react';
import { BookOpen, Play, Lock, Trophy, Star } from 'lucide-react';
import { getTradingTier, tradingTiers } from '../data/quizzes';

interface DrillStat {
  level: number;
  accuracy: number;
  attempts: number;
}

interface DashboardProps {
  onStartDailyQuiz: () => void;
  onSelectModule: (theoryFile: string) => void;
  onStartDrill: (category: string) => void;
  xp: number;
  streakBroken?: boolean;
  onCloseStreakWarning?: () => void;
  isDailyCompletedToday: boolean;
  drillStats: Record<string, DrillStat>;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onStartDailyQuiz,
  onSelectModule,
  onStartDrill,
  xp,
  streakBroken = false,
  onCloseStreakWarning = () => {},
  isDailyCompletedToday,
  drillStats
}) => {
  const drills = [
    {
      id: 1,
      category: '캔들 패턴 인지',
      title: '캔들 패턴 인지 드릴',
      desc: '캔들 구조 분석 및 단일/복합 캔들 반전 형태 즉각 인지',
      file: '01_candlestick_basics.md',
      minXp: 0,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(22, 26, 37, 0.8) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.25)'
    },
    {
      id: 2,
      category: '지지/저항 & 돌파',
      title: '지지/저항 & 돌파 드릴',
      desc: '매물대 작도, 역할 전환(Role Reversal) 및 가짜 돌파 포착',
      file: '02_support_resistance.md',
      minXp: 0,
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(22, 26, 37, 0.8) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.25)'
    },
    {
      id: 3,
      category: '추세선과 채널',
      title: '추세선 & 채널 드릴',
      desc: '추세선 작도, 평행 채널 상하단 타점 및 중심선 돌파 식별',
      file: '03_trendlines_channels.md',
      minXp: 300,
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(22, 26, 37, 0.8) 100%)',
      borderColor: 'rgba(245, 158, 11, 0.25)'
    },
    {
      id: 4,
      category: '차트 패턴 포착',
      title: '차트 패턴 포착 드릴',
      desc: '헤드앤숄더, 이중 천정/바닥, 삼각형 및 깃발 패턴 검수',
      file: '04_chart_patterns.md',
      minXp: 300,
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(22, 26, 37, 0.8) 100%)',
      borderColor: 'rgba(239, 68, 68, 0.25)'
    },
    {
      id: 5,
      category: '보조지표 다이버전스',
      title: '보조지표 & 다이버전스 드릴',
      desc: 'EMA 배열 상태, RSI 과매도 고착화 오류 및 다이버전스 포착',
      file: '05_technical_indicators.md',
      minXp: 600,
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(22, 26, 37, 0.8) 100%)',
      borderColor: 'rgba(139, 92, 246, 0.25)'
    },
    {
      id: 6,
      category: '자금관리/손익비',
      title: '자금관리 & 손익비 드릴',
      desc: '2% 룰 포지션 사이징 수학 공식, 손익비 기댓값 계산 및 청산 방어',
      file: '06_risk_management.md',
      minXp: 600,
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(22, 26, 37, 0.8) 100%)',
      borderColor: 'rgba(236, 72, 153, 0.25)'
    }
  ];

  const tier = getTradingTier(xp);
  const nextTier = tradingTiers.find(t => t.level === tier.level + 1);
  const xpNeeded = nextTier ? nextTier.minXp - xp : 0;
  const currentTierRange = nextTier ? nextTier.minXp - tier.minXp : 1000;
  const xpProgress = nextTier ? ((xp - tier.minXp) / currentTierRange) * 100 : 100;

  return (
    <div className="dashboard-wrapper" style={{ padding: '24px 20px', paddingBottom: '90px' }}>
      {/* Streak Broken Warning Banner */}
      {streakBroken && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '16px',
          padding: '14px 18px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          animation: 'fadeIn 0.3s ease-out'
        }}>
          <span style={{ fontSize: '13px', color: '#f87171', fontWeight: 600, lineHeight: 1.4 }}>
            📢 최근 학습을 거르셔서 연속 학습 스트릭이 깨졌습니다! 오늘 훈련을 완료해 새로운 스트릭을 시작해 보세요.
          </span>
          <button 
            onClick={onCloseStreakWarning}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 800,
              padding: '4px'
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Welcome & Daily Workout Card */}
      {isDailyCompletedToday ? (
        <div className="welcome-card" style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.18) 0%, rgba(18, 22, 33, 0.8) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.35)',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.05)'
        }}>
          <h2 style={{ color: 'var(--color-bullish)', fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} fill="var(--color-bullish)" />
            오늘의 데일리 트레이닝 완료!
          </h2>
          <p style={{ margin: '10px 0 16px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            오늘의 맞춤형 차트 학습 3문제를 모두 완수하셨습니다. (+30 XP 보너스 획득)
          </p>
          <button className="btn-primary" onClick={onStartDailyQuiz} style={{ background: 'var(--color-bullish)', color: '#fff', fontWeight: 700, padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={16} fill="currentColor" />
            데일리 트레이닝 복습하기 (+5 XP)
          </button>
        </div>
      ) : (
        <div className="welcome-card" style={{ borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800 }}>하루 15분, 실전 차트 근육 키우기 💪</h2>
          <p style={{ margin: '10px 0 16px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            실전 차트 데이터로 구성된 3개의 데일리 훈련을 풀고 연속 스트릭 보너스(+30 XP)를 획득해 보세요.
          </p>
          <button className="btn-primary" onClick={onStartDailyQuiz} style={{ fontWeight: 700, padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={16} fill="currentColor" />
            오늘의 데일리 트레이닝 시작 (3문제)
          </button>
        </div>
      )}

      {/* User Tier Progression Card */}
      <div className="welcome-card" style={{ 
        background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(18, 22, 33, 0.8) 100%)', 
        border: '1px solid rgba(168, 85, 247, 0.3)', 
        borderRadius: '20px',
        padding: '24px', 
        marginBottom: '28px',
        boxShadow: '0 8px 32px rgba(168, 85, 247, 0.05)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <span style={{ fontSize: '10px', fontWeight: 800, color: '#c084fc', background: 'rgba(168, 85, 247, 0.15)', padding: '4px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
              현재 트레이더 레벨
            </span>
            <h2 style={{ fontFamily: 'var(--font-title)', fontSize: '22px', fontWeight: 800, marginTop: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {tier.badge} {tier.name}
            </h2>
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, color: '#c084fc' }}>Lv.{tier.level}</span>
        </div>
        <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>{tier.description}</p>
        
        {nextTier ? (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              <span>다음 등급: {nextTier.badge} {nextTier.name.split(' ')[0]}</span>
              <span>{xpNeeded} XP 남음 ({xp} / {nextTier.minXp} XP)</span>
            </div>
            <div className="progress-track" style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
              <div className="progress-fill" style={{ width: `${xpProgress}%`, background: 'linear-gradient(90deg, #a855f7 0%, #d946ef 100%)', borderRadius: '4px' }}></div>
            </div>
          </div>
        ) : (
          <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-streak)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>👑 마켓 마스터 등급 달성! 당신은 최고 수준의 트레이더입니다.</span>
          </div>
        )}
      </div>

      {/* Drill Gym Section */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Trophy size={22} style={{ color: 'var(--color-brand)' }} />
          <h2 style={{ fontSize: '18px', fontWeight: 800 }}>실전 차트 트레이닝 체육관</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {drills.map((d) => {
            const isLocked = xp < d.minXp;
            const stats = drillStats[d.category] || { level: 1, accuracy: 0, attempts: 0 };
            
            return (
              <div 
                key={d.id} 
                style={{ 
                  background: d.gradient, 
                  border: `1px solid ${isLocked ? 'rgba(255, 255, 255, 0.05)' : d.borderColor}`,
                  borderRadius: '20px', 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  position: 'relative',
                  opacity: isLocked ? 0.6 : 1,
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Lock Overlay Banner */}
                {isLocked && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    fontWeight: 700
                  }}>
                    <Lock size={12} />
                    <span>{d.minXp} XP 해제</span>
                  </div>
                )}

                {/* Drill Title & Description */}
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {d.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {d.desc}
                  </p>
                </div>

                {/* Statistics Row (Level, Accuracy, Attempts) */}
                {!isLocked && (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.2fr 1fr', 
                    background: 'rgba(0, 0, 0, 0.2)', 
                    borderRadius: '12px', 
                    padding: '10px 8px',
                    textAlign: 'center',
                    fontSize: '11px'
                  }}>
                    <div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>레벨</div>
                      <div style={{ color: 'var(--color-brand)', fontWeight: 800 }}>Lv.{stats.level}</div>
                    </div>
                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>최고 정확도</div>
                      <div style={{ color: 'var(--color-bullish)', fontWeight: 800 }}>{stats.accuracy}%</div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>훈련 횟수</div>
                      <div style={{ color: '#fff', fontWeight: 800 }}>{stats.attempts}회</div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <button 
                    onClick={() => onSelectModule(d.file)}
                    style={{ 
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      borderRadius: '12px',
                      padding: '10px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <BookOpen size={14} />
                    <span>이론 보기</span>
                  </button>

                  <button 
                    onClick={() => !isLocked && onStartDrill(d.category)}
                    disabled={isLocked}
                    style={{ 
                      flex: 1.3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: isLocked ? 'rgba(255,255,255,0.02)' : 'var(--color-brand)',
                      border: 'none',
                      color: isLocked ? 'rgba(255,255,255,0.15)' : '#fff',
                      borderRadius: '12px',
                      padding: '10px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: isLocked ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {isLocked ? <Lock size={14} /> : <Play size={14} fill="currentColor" />}
                    <span>{isLocked ? '잠김' : '드릴 훈련 시작'}</span>
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

export default Dashboard;

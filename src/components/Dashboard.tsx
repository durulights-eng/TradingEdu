import React from 'react';
import { Play, Star, Trophy, TrendingUp } from 'lucide-react';
import { SkillRadarChart } from './SkillRadarChart';
import { type CategoryStat, getEloTier } from '../lib/ratingEngine';

interface DashboardProps {
  onStartDailyQuiz: () => void;
  xp: number;
  streakBroken?: boolean;
  onCloseStreakWarning?: () => void;
  isDailyCompletedToday: boolean;
  drillStats: Record<string, CategoryStat>;
  overallRating: number;
  completedQuizzes: number[];
}


const getSkillAnalysisFeedback = (drillStats: Record<string, CategoryStat>) => {
  const attempts = Object.values(drillStats).reduce((sum, s) => sum + s.attempts, 0);
  if (attempts === 0) {
    return (
      <span>데일리 트레이닝과 실전 훈련을 거듭할수록 분석 데이터가 정교해집니다.</span>
    );
  }

  let strongest = "";
  let weakest = "";
  let maxAcc = -1;
  let minAcc = 101;

  Object.entries(drillStats).forEach(([category, stat]) => {
    if (stat.attempts > 0) {
      if (stat.accuracy > maxAcc) {
        maxAcc = stat.accuracy;
        strongest = category;
      }
      if (stat.accuracy < minAcc) {
        minAcc = stat.accuracy;
        weakest = category;
      }
    }
  });

  if (!strongest) {
    return <span>훈련 진행 데이터를 수집하고 있습니다. 더 많은 문제를 풀어보세요!</span>;
  }

  const theoryTips: Record<string, string> = {
    '캔들/가격행동': '이론 백과의 "캔들스틱 기초" 모듈을 학습하여 개별 캔들의 숨겨진 심리를 복습해 보세요.',
    '시장구조/SR': '이론 백과의 "지지와 저항" 모듈에서 수평 매물대의 역할 전환 개념을 다시 숙지해 보세요.',
    '추세/레짐': '이론 백과의 "추세선과 채널" 모듈을 통해 추세선의 신뢰도를 판정하는 3rd Touch 룰을 학습해 보세요.',
    '패턴/돌파': '이론 백과의 "차트 패턴" 모듈에서 헤드앤숄더 넥라인 돌파 및 어센딩 트라이앵글의 수렴 원리를 정독해 보세요.',
    '거래량/유동성': '이론 백과의 "지지와 저항" 또는 "차트 패턴" 부문에서 불트랩과 베어트랩 등 가짜 돌파를 포착하는 거래량 분석 팁을 복습해 보세요.',
    '지표/컨플루언스': '이론 백과의 "보조지표와 다이버전스" 모듈을 정독하여 RSI의 일반/히든 상승 다이버전스 생성 원리를 이해해 보세요.',
    '셋업/실행': '이론 백과의 "자금관리 및 손익비" 모듈을 다시 보며 추적 손절매(Trailing Stop)와 진입 필터 조건들을 확립해 보세요.',
    '리스크/심리': '이론 백과의 "자금관리 및 손익비" 모듈에서 2% 룰 기반 포지션 사이징과 승률 대비 손익비 본전 공식을 마스터해 보세요.'
  };

  const weakTip = theoryTips[weakest] || '다른 훈련 과목도 병행하여 육각형 균형을 맞춰보세요!';

  if (strongest === weakest) {
    return (
      <span>현재 <strong>{strongest}</strong> 분야의 학습을 시작하셨습니다. 다른 훈련 과목도 병행하여 스킬 균형을 맞춰보세요!</span>
    );
  }

  return (
    <span>
      🎯 회원님은 현재 <strong style={{ color: 'var(--text-primary)' }}>{strongest}</strong> 분야(숙련도 {maxAcc}%)에 가장 강점을 보이고 있습니다. 반면, 상대적으로 숙련도가 낮은 <strong style={{ color: 'var(--text-primary)' }}>{weakest}</strong> 분야(숙련도 {minAcc}%)의 보완 훈련을 추천합니다.<br />
      💡 <strong>가이드:</strong> {weakTip}
    </span>
  );
};

export const Dashboard: React.FC<DashboardProps> = ({
  onStartDailyQuiz,
  xp,
  streakBroken = false,
  onCloseStreakWarning = () => {},
  isDailyCompletedToday,
  drillStats,
  overallRating,
  completedQuizzes
}) => {
  const hasCompletedFirstSession = completedQuizzes.length > 0 || Object.values(drillStats).some(s => s.attempts > 0);
  const ratingTier = getEloTier(overallRating);

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
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.01) 100%)',
          border: '1px solid rgba(16, 185, 129, 0.22)',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.03)'
        }}>
          <h2 style={{ color: 'var(--color-bullish)', fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} fill="var(--color-bullish)" />
            오늘의 데일리 트레이닝 완료!
          </h2>
          <p style={{ margin: '10px 0 18px 0', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            오늘의 맞춤형 차트 학습 15문제를 모두 완수하셨습니다. (+30 XP 연속 학습 보너스 획득)
          </p>
          <button className="btn-primary" onClick={onStartDailyQuiz} style={{ background: 'var(--color-bullish)', color: '#fff', fontWeight: 700, padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={16} fill="currentColor" />
            데일리 트레이닝 복습하기 (+5 XP)
          </button>
        </div>
      ) : (
        <div className="welcome-card" style={{ borderRadius: '20px', padding: '24px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 800 }}>하루 15분, 실전 차트 근육 키우기 💪</h2>
          <p style={{ margin: '10px 0 18px 0', fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            실전 차트 데이터로 구성된 15개의 데일리 훈련을 풀고 연속 스트릭 보너스(+30 XP)를 획득해 보세요.
          </p>
          <button className="btn-primary" onClick={onStartDailyQuiz} style={{ fontWeight: 700, padding: '12px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Play size={16} fill="currentColor" />
            오늘의 데일리 트레이닝 시작 (15문제)
          </button>
        </div>
      )}

      {/* ELO Rating & Skill Radar Section (Unlocked after first session) */}
      {hasCompletedFirstSession ? (
        <div className="welcome-card" style={{
          background: 'linear-gradient(135deg, rgba(90, 82, 229, 0.08) 0%, rgba(90, 82, 229, 0.01) 100%)',
          border: '1px solid rgba(90, 82, 229, 0.22)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 8px 32px rgba(90, 82, 229, 0.03)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
            <Trophy size={18} style={{ color: 'var(--color-brand)' }} />
            <span style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)' }}>나의 실시간 트레이딩 실력 분석</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Rating Stats Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>
                  트레이더 레이팅 (ELO)
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '6px' }}>
                  <span style={{ fontSize: '28px', fontWeight: 900, color: 'var(--text-primary)', fontFamily: 'var(--font-title)' }}>
                    {overallRating}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-brand)' }}>RP</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, color: ratingTier.color }}>
                    {ratingTier.badge} {ratingTier.name}
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  완료한 문제 수: <strong style={{ color: 'var(--text-primary)' }}>{completedQuizzes.length}개</strong>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  누적 경험치: <strong style={{ color: 'var(--color-xp)' }}>{xp} XP</strong>
                </div>
              </div>
            </div>

            {/* Hexagonal Skill Radar Chart */}
            <div style={{
              background: 'var(--bg-muted)',
              borderRadius: '16px',
              padding: '20px 12px',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <TrendingUp size={13} style={{ color: 'var(--color-brand)' }} />
                <span style={{ fontSize: '11.5px', fontWeight: 700, color: 'var(--text-secondary)' }}>스킬 부문별 이해도 (숙련도 점수 기준)</span>
              </div>
              <SkillRadarChart drillStats={drillStats} />
            </div>

            {/* Dynamic Analysis Feedback Callout */}
            <div style={{
              background: 'rgba(90, 82, 229, 0.04)',
              borderLeft: '4px solid var(--color-brand)',
              borderRadius: '8px',
              padding: '12px 14px',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6'
            }}>
              {getSkillAnalysisFeedback(drillStats)}
            </div>
          </div>
        </div>
      ) : (
        /* Empty / Locked Placeholder */
        <div className="welcome-card" style={{
          background: 'rgba(255, 255, 255, 0.01)',
          border: '1px dashed var(--border-color)',
          borderRadius: '20px',
          padding: '30px 24px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>🔒</span>
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            트레이딩 실력 분석 잠금 해제 대기 중
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto' }}>
            첫 세션(데일리 또는 실전 훈련)을 완료하면 회원님의 ELO 실력 레이팅과 6대 지표 스킬 육각형 차트 분석이 여기에 열립니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

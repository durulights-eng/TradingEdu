import React, { useState } from 'react';
import { Play, Star, Trophy, TrendingUp, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { SkillRadarChart } from './SkillRadarChart';
import { SessionReview } from './SessionReview';
import type { QuizItem } from '../data/quizzes';
import { 
  type CategoryStat, 
  type UserRatingState, 
  type SessionRecord,
  type StatPeriod,
  getEloTier, 
  getCategoryStatsForPeriod, 
  ALL_CATEGORIES 
} from '../lib/ratingEngine';

interface DashboardProps {
  onStartDailyQuiz: () => void;
  onStartDrill?: (category: string) => void;
  streakBroken?: boolean;
  onCloseStreakWarning?: () => void;
  isDailyCompletedToday: boolean;
  ratingState: UserRatingState;
  completedQuizzes: number[];
  allQuizzes: QuizItem[];
  xp: number;
}

const categoryMinXpMap: Record<string, number> = {
  '캔들/가격행동': 0,
  '시장구조/SR': 0,
  '추세/레짐': 150,
  '패턴/돌파': 300,
  '거래량/유동성': 450,
  '지표/컨플루언스': 600,
  '셋업/실행': 750,
  '리스크/심리': 900
};

const renderSkillAnalysisFeedback = (drillStats: Record<string, CategoryStat>, xp: number, onStartDrill?: (category: string) => void) => {
  const attempts = Object.values(drillStats).reduce((sum, s) => sum + s.attempts, 0);
  
  if (attempts === 0) {
    return (
      <div style={{
        background: 'rgba(90, 82, 229, 0.03)',
        border: '1px solid rgba(90, 82, 229, 0.12)',
        borderRadius: '14px',
        padding: '16px',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '12px',
        lineHeight: '1.5'
      }}>
        💡 <strong>데일리 트레이닝</strong> 또는 <strong>실전 훈련</strong>을 진행하여 데이터를 축적하면, 여기에 나만의 강점/약점 분석 및 보완 학습 추천 리포트가 생성됩니다.
      </div>
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
    return (
      <div style={{
        background: 'rgba(90, 82, 229, 0.03)',
        border: '1px solid rgba(90, 82, 229, 0.12)',
        borderRadius: '14px',
        padding: '16px',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '12px'
      }}>
        훈련 데이터 분석 중입니다. 더 많은 문제를 풀어보세요!
      </div>
    );
  }

  // If strongest and weakest are same, it means only 1 category has data
  if (strongest === weakest) {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px'
      }}>
        <div style={{
          background: 'rgba(16, 185, 129, 0.03)',
          border: '1px solid rgba(16, 185, 129, 0.12)',
          borderRadius: '14px',
          padding: '14px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '10px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)' }}>🏆 첫 도전 과목</span>
            </div>
            <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>{strongest}</h4>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
              현재 해당 분야의 훈련을 시작하셨습니다. 정답률을 높여가며 스킬을 마스터해 보세요!
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--color-bullish)', fontFamily: 'var(--font-title)' }}>{maxAcc}</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-bullish)' }}>% 정답률</span>
          </div>
        </div>

        <div style={{
          background: 'var(--bg-muted)',
          border: '1px solid var(--border-color)',
          borderRadius: '14px',
          padding: '14px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          gap: '8px'
        }}>
          <span style={{ fontSize: '20px' }}>⚖️</span>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>균형 잡힌 학습</h4>
          <p style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            다른 훈련 과목도 골고루 시도해 보시면 더욱 상세한 스킬 레포트가 제공됩니다.
          </p>
        </div>
      </div>
    );
  }

  const minXpRequired = categoryMinXpMap[weakest] ?? 0;
  const isLocked = xp < minXpRequired;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px'
    }}>
      {/* 강점 카드 */}
      <div style={{
        background: 'rgba(16, 185, 129, 0.03)',
        border: '1px solid rgba(16, 185, 129, 0.12)',
        borderRadius: '14px',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)' }}>🏆 최대 강점</span>
          </div>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)', wordBreak: 'keep-all' }}>{strongest}</h4>
          <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
            현재 가장 안정적인 이해도와 실력을 보여주고 있습니다.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--color-bullish)', fontFamily: 'var(--font-title)' }}>{maxAcc}</span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-bullish)' }}>% 정답률</span>
        </div>
      </div>

      {/* 보완 카드 */}
      <div style={{
        background: 'rgba(239, 68, 68, 0.03)',
        border: '1px solid rgba(239, 68, 68, 0.12)',
        borderRadius: '14px',
        padding: '14px 16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)' }}>🛠️ 보완 권장</span>
          </div>
          <h4 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)', wordBreak: 'keep-all' }}>{weakest}</h4>
          <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.4' }}>
            레이팅 향상을 위해 해당 과목의 집중 학습이 필요합니다.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontSize: '20px', fontWeight: 900, color: 'var(--color-bearish)', fontFamily: 'var(--font-title)' }}>{minAcc}</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--color-bearish)' }}>% 정답률</span>
          </div>
          {onStartDrill && (
            <button 
              onClick={() => {
                if (isLocked) {
                  alert(`이 과목의 전용 실전 훈련을 진행하려면 최소 ${minXpRequired} XP가 필요합니다. (현재: ${xp} XP)\n\n오늘의 데일리 트레이닝이나 다른 해제된 과목 훈련을 통해 XP를 획득해 보세요!`);
                } else {
                  onStartDrill(weakest);
                }
              }}
              style={{
                width: '100%',
                background: isLocked ? '#cbd5e1' : 'var(--color-bearish)',
                color: isLocked ? 'var(--text-muted)' : '#fff',
                border: isLocked ? '1px solid var(--border-color)' : 'none',
                borderRadius: '8px',
                padding: '6px 0',
                fontSize: '11px',
                fontWeight: 800,
                cursor: 'pointer',
                textAlign: 'center',
                boxShadow: isLocked ? 'none' : '0 2px 4px rgba(239, 68, 68, 0.15)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseOver={(e) => {
                if (!isLocked) e.currentTarget.style.filter = 'brightness(0.9)';
              }}
              onMouseOut={(e) => {
                if (!isLocked) e.currentTarget.style.filter = 'none';
              }}
            >
              {isLocked ? `🔒 ${minXpRequired} XP 필요` : '보완 훈련 시작'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export const Dashboard: React.FC<DashboardProps> = ({
  onStartDailyQuiz,
  onStartDrill,
  streakBroken = false,
  onCloseStreakWarning = () => {},
  isDailyCompletedToday,
  ratingState,
  completedQuizzes,
  allQuizzes,
  xp
}) => {
  const [statPeriod, setStatPeriod] = useState<StatPeriod>('all');
  const [reviewingSession, setReviewingSession] = useState<SessionRecord | null>(null);

  const ratingTier = getEloTier(ratingState.overallRating);
  const hasData = completedQuizzes.length > 0 || Object.values(ratingState.categories).some(s => s.attempts > 0);

  const periodStats = getCategoryStatsForPeriod(ratingState, statPeriod, ALL_CATEGORIES);
  const sessionHistory = [...(ratingState.sessionHistory || [])].sort((a, b) => b.timestamp - a.timestamp);

  const periodLabels: { key: StatPeriod; label: string }[] = [
    { key: '1d', label: '1D' },
    { key: '1w', label: '1W' },
    { key: '1m', label: '1M' },
    { key: 'all', label: '전체' }
  ];

  // If reviewing a session, show the session review component
  if (reviewingSession) {
    return (
      <div style={{ padding: '24px 20px', paddingBottom: '90px' }}>
        <SessionReview
          session={reviewingSession}
          allQuizzes={allQuizzes}
          onBack={() => setReviewingSession(null)}
        />
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper" style={{ padding: '24px 20px', paddingBottom: '90px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Streak Broken Warning Banner */}
      {streakBroken && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: '14px',
          padding: '14px 18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '13px', color: '#ef4444', fontWeight: 600, lineHeight: 1.4 }}>
            📢 연속 학습 스트릭이 깨졌습니다! 오늘 훈련을 완료해 새로운 스트릭을 시작하세요.
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

      {/* Daily Training Card */}
      {isDailyCompletedToday ? (
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: '18px',
          padding: '22px',
          boxShadow: 'var(--shadow-soft)'
        }}>
          <h2 style={{ color: 'var(--color-bullish)', fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={18} fill="var(--color-bullish)" />
            오늘의 데일리 트레이닝 완료!
          </h2>
          <p style={{ margin: '10px 0 16px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            오늘의 맞춤형 차트 학습 15문제를 모두 완수하셨습니다. (+30 XP 보너스 획득)
          </p>
          <button className="btn-primary" onClick={onStartDailyQuiz} style={{ 
            background: 'var(--color-bullish)', 
            color: '#fff', 
            fontWeight: 700, 
            padding: '12px 20px', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            width: '100%',
            justifyContent: 'center'
          }}>
            <Play size={16} fill="currentColor" />
            데일리 트레이닝 복습하기 (+5 XP)
          </button>
        </div>
      ) : (
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: '18px',
          padding: '22px',
          boxShadow: 'var(--shadow-soft)'
        }}>
          <h2 style={{ fontSize: '18px', fontWeight: 800 }}>하루 15분, 실전 차트 근육 키우기 💪</h2>
          <p style={{ margin: '10px 0 16px 0', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
            실전 차트 데이터로 구성된 15개의 데일리 훈련을 풀고 연속 스트릭 보너스(+30 XP)를 획득해 보세요.
          </p>
          <button className="btn-primary" onClick={onStartDailyQuiz} style={{ 
            fontWeight: 700, 
            padding: '12px 20px', 
            borderRadius: '12px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            width: '100%',
            justifyContent: 'center'
          }}>
            <Play size={16} fill="currentColor" />
            오늘의 데일리 트레이닝 시작 (15문제)
          </button>
        </div>
      )}

      {/* ELO Rating Card */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: 'var(--shadow-soft)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              트레이더 레이팅
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginTop: '6px' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, color: 'var(--text-primary)', fontFamily: 'var(--font-title)' }}>
                {ratingState.overallRating}
              </span>
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-brand)' }}>RP</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: ratingTier.color }}>
                {ratingTier.badge} {ratingTier.name}
              </span>
            </div>
          </div>
          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
              완료한 문제: <strong style={{ color: 'var(--text-primary)' }}>{completedQuizzes.length}개</strong>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
              총 세션: <strong style={{ color: 'var(--text-primary)' }}>{sessionHistory.length}회</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 8-Axis Skill Radar Chart with Period Toggle */}
      {hasData ? (
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: 'var(--shadow-soft)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TrendingUp size={14} style={{ color: 'var(--color-brand)' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                스킬 레이더
              </span>
            </div>

            {/* Period Toggle */}
            <div className="period-toggle-group">
              {periodLabels.map(({ key, label }) => (
                <button
                  key={key}
                  className={`period-toggle-btn ${statPeriod === key ? 'active' : ''}`}
                  onClick={() => setStatPeriod(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            background: 'var(--bg-muted)',
            borderRadius: '12px',
            padding: '16px 8px',
            border: '1px solid var(--border-color)'
          }}>
            <SkillRadarChart drillStats={periodStats} periodLabel={periodLabels.find(p => p.key === statPeriod)?.label} />
          </div>

          {/* Analysis Feedback Cards */}
          <div style={{ marginTop: '4px' }}>
            {renderSkillAnalysisFeedback(periodStats, xp, onStartDrill)}
          </div>
        </div>
      ) : (
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px dashed var(--border-color)',
          borderRadius: '16px',
          padding: '30px 24px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '28px', display: 'block', marginBottom: '12px' }}>🔒</span>
          <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
            실력 분석 잠금 해제 대기 중
          </h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto' }}>
            첫 세션을 완료하면 ELO 레이팅과 8축 스킬 레이더 분석이 여기에 열립니다.
          </p>
        </div>
      )}

      {/* Session History */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Calendar size={14} style={{ color: 'var(--color-brand)' }} />
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
            세션 히스토리
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: 'auto' }}>
            {sessionHistory.length}개의 기록
          </span>
        </div>

        {sessionHistory.length === 0 ? (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px dashed var(--border-color)',
            borderRadius: '14px',
            padding: '24px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              아직 완료된 세션이 없습니다.
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {sessionHistory.slice(0, 20).map((session, idx) => {
              const diff = session.ratingAfter - session.ratingBefore;
              const diffStr = diff >= 0 ? `+${diff}` : `${diff}`;
              const accuracy = session.totalCount > 0 
                ? Math.round((session.correctCount / session.totalCount) * 100) 
                : 0;

              return (
                <button
                  key={idx}
                  className="session-card"
                  onClick={() => setReviewingSession(session)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: session.type === 'daily' 
                        ? 'rgba(90, 82, 229, 0.08)' 
                        : 'rgba(16, 185, 129, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {session.type === 'daily' 
                        ? <Trophy size={16} style={{ color: 'var(--color-brand)' }} />
                        : <TrendingUp size={16} style={{ color: 'var(--color-bullish)' }} />
                      }
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {session.type === 'daily' ? '데일리 트레이닝' : '실전 훈련'}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {session.date} · 정답률 {accuracy}% ({session.correctCount}/{session.totalCount})
                      </div>
                    </div>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '4px',
                    fontSize: '14px',
                    fontWeight: 800,
                    color: diff >= 0 ? 'var(--color-bullish)' : 'var(--color-bearish)',
                    flexShrink: 0
                  }}>
                    {diff >= 0 
                      ? <ArrowUpRight size={14} /> 
                      : <ArrowDownRight size={14} />
                    }
                    {diffStr} RP
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

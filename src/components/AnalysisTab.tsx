import React, { useState } from 'react';
import { TrendingUp, Trophy, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
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

interface AnalysisTabProps {
  ratingState: UserRatingState;
  completedQuizzes: number[];
  allQuizzes: QuizItem[];
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

  if (strongest === weakest) {
    return (
      <span>현재 <strong>{strongest}</strong> 분야의 학습을 시작하셨습니다. 다른 훈련 과목도 병행하여 스킬 균형을 맞춰보세요!</span>
    );
  }

  return (
    <span>
      🎯 <strong style={{ color: 'var(--text-primary)' }}>{strongest}</strong> 분야({maxAcc}%)에 가장 강점을 보이고 있습니다. 
      <strong style={{ color: 'var(--text-primary)' }}> {weakest}</strong> 분야({minAcc}%)의 보완 훈련을 추천합니다.
    </span>
  );
};

export const AnalysisTab: React.FC<AnalysisTabProps> = ({
  ratingState,
  completedQuizzes,
  allQuizzes
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
    <div className="dashboard-wrapper" style={{ padding: '24px 20px', paddingBottom: '90px' }}>
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
          boxShadow: 'var(--shadow-soft)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
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

          {/* Analysis Feedback */}
          <div style={{
            background: 'rgba(90, 82, 229, 0.04)',
            borderLeft: '3px solid var(--color-brand)',
            borderRadius: '6px',
            padding: '10px 12px',
            fontSize: '12px',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginTop: '14px'
          }}>
            {getSkillAnalysisFeedback(periodStats)}
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
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
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

export default AnalysisTab;

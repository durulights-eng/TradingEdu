import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import type { SessionRecord } from '../lib/ratingEngine';
import type { QuizItem } from '../data/quizzes';

interface SessionReviewProps {
  session: SessionRecord;
  allQuizzes: QuizItem[];
  onBack: () => void;
}

export const SessionReview: React.FC<SessionReviewProps> = ({ session, allQuizzes, onBack }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const eloDiff = session.ratingAfter - session.ratingBefore;
  const eloDiffStr = eloDiff >= 0 ? `+${eloDiff}` : `${eloDiff}`;
  const accuracy = session.totalCount > 0 
    ? Math.round((session.correctCount / session.totalCount) * 100)
    : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'none',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 600,
          padding: 0,
          alignSelf: 'flex-start'
        }}
      >
        <ArrowLeft size={18} />
        <span>실력분석으로 돌아가기</span>
      </button>

      {/* Session summary header */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: '16px',
        padding: '18px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
              {session.type === 'daily' ? '일일 훈련' : '실전 훈련'} · {session.date}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>
              세션 오답노트
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '20px', fontWeight: 800, color: eloDiff >= 0 ? 'var(--color-bullish)' : 'var(--color-bearish)' }}>
              {eloDiffStr} RP
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
              정답률 {accuracy}% ({session.correctCount}/{session.totalCount})
            </div>
          </div>
        </div>
      </div>

      {/* Question list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {session.answers.map((answer, idx) => {
          const quiz = allQuizzes.find(q => q.id === answer.quizId);
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              style={{
                background: 'var(--bg-surface)',
                border: `1px solid ${answer.isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}`,
                borderRadius: '14px',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Question header (clickable) */}
              <button
                onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  {answer.isCorrect 
                    ? <CheckCircle size={20} style={{ color: 'var(--color-bullish)' }} />
                    : <XCircle size={20} style={{ color: 'var(--color-bearish)' }} />
                  }
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ 
                    fontSize: '13px', 
                    fontWeight: 700, 
                    color: 'var(--text-primary)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    Q{idx + 1}. {quiz?.question || `문제 #${answer.quizId}`}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>
                    {answer.category} · 난이도 {answer.difficulty}
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  {isExpanded 
                    ? <ChevronUp size={16} style={{ color: 'var(--text-muted)' }} />
                    : <ChevronDown size={16} style={{ color: 'var(--text-muted)' }} />
                  }
                </div>
              </button>

              {/* Expanded explanation */}
              {isExpanded && quiz && (
                <div style={{
                  borderTop: '1px solid var(--border-color)',
                  padding: '14px 16px',
                  background: answer.isCorrect ? 'rgba(16, 185, 129, 0.03)' : 'rgba(239, 68, 68, 0.03)'
                }}>
                  {/* Options display */}
                  <div style={{ marginBottom: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {quiz.options.map((opt, optIdx) => {
                      const isCorrectOption = optIdx === quiz.correctIndex;
                      const isUserSelection = optIdx === answer.selectedIndex;
                      return (
                        <div
                          key={optIdx}
                          style={{
                            padding: '8px 12px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            lineHeight: 1.4,
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            background: isCorrectOption 
                              ? 'rgba(16, 185, 129, 0.08)' 
                              : isUserSelection && !isCorrectOption 
                                ? 'rgba(239, 68, 68, 0.08)'
                                : 'var(--bg-muted)',
                            border: `1px solid ${
                              isCorrectOption 
                                ? 'rgba(16, 185, 129, 0.25)' 
                                : isUserSelection && !isCorrectOption 
                                  ? 'rgba(239, 68, 68, 0.25)'
                                  : 'var(--border-color)'
                            }`,
                            color: 'var(--text-primary)',
                            fontWeight: isCorrectOption || isUserSelection ? 700 : 400
                          }}
                        >
                          <span style={{ 
                            flexShrink: 0, 
                            width: '18px', 
                            height: '18px', 
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '11px',
                            fontWeight: 800,
                            background: isCorrectOption 
                              ? 'var(--color-bullish)' 
                              : isUserSelection 
                                ? 'var(--color-bearish)' 
                                : 'var(--bg-subtle)',
                            color: (isCorrectOption || isUserSelection) ? '#fff' : 'var(--text-muted)',
                            border: (!isCorrectOption && !isUserSelection) ? '1px solid var(--border-color)' : 'none'
                          }}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation */}
                  <div style={{
                    background: 'var(--color-brand-glow)',
                    borderLeft: '3px solid var(--color-brand)',
                    borderRadius: '6px',
                    padding: '10px 12px',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6
                  }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px', fontSize: '11px' }}>
                      💡 해설
                    </div>
                    {quiz.explanation}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SessionReview;

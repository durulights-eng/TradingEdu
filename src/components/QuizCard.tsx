import React, { useState } from 'react';
import type { QuizItem } from '../data/quizzes';
import { ChartVisualizer } from './ChartVisualizer';
import { X, CheckCircle, AlertTriangle, BookOpen } from 'lucide-react';
import { TheoryReader } from './TheoryReader';
import { HighlightText } from './HighlightText';

interface QuizCardProps {
  quiz: QuizItem;
  currentIndex: number;
  totalQuizzes: number;
  onClose: () => void;
  onAnswerChecked: (isCorrect: boolean, selectedIndex: number) => void;
  onNext: () => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({
  quiz,
  currentIndex,
  totalQuizzes,
  onClose,
  onAnswerChecked,
  onNext
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isTheoryOpen, setIsTheoryOpen] = useState(false);

  const progressPercentage = (currentIndex / totalQuizzes) * 100;

  const handleSelect = (index: number) => {
    if (isChecked) return; // Cannot change after checking
    setSelectedOption(index);

    const correct = index === quiz.correctIndex;
    setIsCorrect(correct);
    setIsChecked(true);
    onAnswerChecked(correct, index);
  };

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="quiz-container" style={{ position: 'relative' }}>
      {/* Top Progress Bar Header */}
      <div className="quiz-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <button className="btn-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="progress-track" style={{ flex: 1, margin: '0 8px' }}>
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* inline theory helper button */}
          <button 
            onClick={() => setIsTheoryOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: 'var(--color-brand)',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '11px',
              fontWeight: 800,
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <BookOpen size={12} />
            <span>이론 사전</span>
          </button>

          <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: 'var(--font-title)' }}>
            {currentIndex + 1} / {totalQuizzes}
          </span>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="question-box">
        <span className="category-tag">{quiz.category}</span>
        <p className="question-text"><HighlightText text={quiz.question} /></p>
      </div>

      {/* Chart Visualizer */}
      {quiz.chartData && quiz.chartData.length > 1 && (
        <ChartVisualizer chartData={quiz.chartData} drawings={quiz.drawings} />
      )}

      {/* Multiple Choices */}
      <div className="options-list">
        {quiz.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          let optionClass = "option-btn";
          if (isChecked) {
            if (idx === quiz.correctIndex) {
              optionClass += " correct";
            } else if (isSelected) {
              optionClass += " wrong";
            }
          } else if (isSelected) {
            optionClass += " selected";
          }

          return (
            <button
              key={idx}
              className={optionClass}
              onClick={() => handleSelect(idx)}
              disabled={isChecked}
            >
              <span className="option-index">{optionLetters[idx]}</span>
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Drawer for Feedback */}
      <div className={`action-drawer ${isChecked ? (isCorrect ? 'correct correct-animation' : 'incorrect incorrect-animation') : ''}`}>
        {!isChecked ? (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '48px', 
            color: 'var(--text-secondary)', 
            fontSize: '13px', 
            fontWeight: 500,
            letterSpacing: '-0.02em'
          }}>
            문제를 분석하고 위의 보기 중 정답을 선택하세요.
          </div>
        ) : (
          <>
            <div className={`feedback-header ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? (
                <>
                  <CheckCircle size={24} fill="var(--color-bullish-glow)" />
                  <span>정답입니다! (+10 XP)</span>
                </>
              ) : (
                <>
                  <AlertTriangle size={24} fill="var(--color-bearish-glow)" />
                  <span>오답입니다...</span>
                </>
              )}
            </div>
            <p className="explanation-text"><HighlightText text={quiz.explanation} /></p>
            <button
              className={`btn-drawer-action ${isCorrect ? 'continue-correct' : 'continue-incorrect'}`}
              onClick={() => {
                setSelectedOption(null);
                setIsChecked(false);
                onNext();
              }}
            >
              계속하기
            </button>
          </>
        )}
      </div>

      {/* Sliding Theory Drawer Overlay */}
      {isTheoryOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(5px)',
          zIndex: 2000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }} onClick={() => setIsTheoryOpen(false)}>
          <div style={{
            backgroundColor: 'var(--bg-surface)',
            borderTop: '1px solid var(--border-color)',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            maxHeight: '75vh',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.5)'
          }} onClick={e => e.stopPropagation()}>
            {/* Drawer Header */}
             <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} style={{ color: 'var(--color-brand)' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 800 }}>핵심 이론 사전</h3>
              </div>
              <button 
                onClick={() => setIsTheoryOpen(false)}
                style={{
                  background: 'var(--bg-muted)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '28px',
                  height: '28px',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={16} />
              </button>
            </div>
            
            {/* Scrollable Content */}
            <div style={{ overflowY: 'auto', flex: 1, paddingBottom: '10px' }}>
              <TheoryReader theoryFile={quiz.theoryRef} isInline={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;

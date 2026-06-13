import React, { useState } from 'react';
import type { QuizItem } from '../data/quizzes';
import { ChartVisualizer } from './ChartVisualizer';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

interface QuizCardProps {
  quiz: QuizItem;
  currentIndex: number;
  totalQuizzes: number;
  onClose: () => void;
  onAnswerChecked: (isCorrect: boolean) => void;
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

  const progressPercentage = ((currentIndex) / totalQuizzes) * 100;

  const handleSelect = (index: number) => {
    if (isChecked) return; // Cannot change after checking
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null || isChecked) return;

    const correct = selectedOption === quiz.correctIndex;
    setIsCorrect(correct);
    setIsChecked(true);
    onAnswerChecked(correct);
  };

  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="quiz-container">
      {/* Top Progress Bar Header */}
      <div className="quiz-header">
        <button className="btn-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: 'var(--font-title)' }}>
          {currentIndex + 1} / {totalQuizzes}
        </span>
      </div>

      {/* Main Question Card */}
      <div className="question-box">
        <span className="category-tag">{quiz.category}</span>
        <p className="question-text">{quiz.question}</p>
      </div>

      {/* Chart Visualizer */}
      <ChartVisualizer chartData={quiz.chartData} drawings={quiz.drawings} />

      {/* Multiple Choices */}
      <div className="options-list">
        {quiz.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          let optionClass = "option-btn";
          if (isSelected) optionClass += " selected";

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
          <>
            <button
              className="btn-drawer-action check"
              onClick={handleCheck}
              disabled={selectedOption === null}
            >
              정답 확인
            </button>
          </>
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
            <p className="explanation-text">{quiz.explanation}</p>
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
    </div>
  );
};

import React from 'react';

interface InteractiveTermProps {
  term: string;
  definition: string;
}

export const InteractiveTerm: React.FC<InteractiveTermProps> = ({ term, definition }) => {
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const event = new CustomEvent('show-term-explanation', {
      detail: { term, definition }
    });
    window.dispatchEvent(event);
  };

  return (
    <span
      onClick={handleClick}
      onTouchStart={handleClick}
      style={{
        borderBottom: '1.5px dotted var(--color-brand)',
        cursor: 'pointer',
        fontWeight: '700',
        color: 'var(--color-brand)',
        display: 'inline-block',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }}
    >
      {term}
    </span>
  );
};

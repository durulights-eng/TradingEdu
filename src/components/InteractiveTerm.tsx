import React, { useState, useRef, useEffect } from 'react';

interface InteractiveTermProps {
  term: string;
  definition: string;
}

export const InteractiveTerm: React.FC<InteractiveTermProps> = ({ term, definition }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'above' | 'below'>('above');
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    // Prevent default on touch to avoid system callouts or text selection
    if (e.type === 'touchstart') {
      e.stopPropagation();
    }
    
    // Determine tooltip vertical orientation based on viewport position
    if (spanRef.current) {
      const rect = spanRef.current.getBoundingClientRect();
      if (rect.top < 150) {
        setTooltipPosition('below');
      } else {
        setTooltipPosition('above');
      }
    }
    
    setShowTooltip(true);
  };

  const handleEnd = () => {
    setShowTooltip(false);
  };

  useEffect(() => {
    const handleGlobalTouchEnd = () => {
      setShowTooltip(false);
    };
    if (showTooltip) {
      window.addEventListener('touchend', handleGlobalTouchEnd);
      window.addEventListener('mouseup', handleGlobalTouchEnd);
    }
    return () => {
      window.removeEventListener('touchend', handleGlobalTouchEnd);
      window.removeEventListener('mouseup', handleGlobalTouchEnd);
    };
  }, [showTooltip]);

  return (
    <span
      ref={spanRef}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      onTouchCancel={handleEnd}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      style={{
        borderBottom: '1.5px dotted var(--color-brand)',
        cursor: 'help',
        fontWeight: '700',
        color: 'var(--color-brand)',
        position: 'relative',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        display: 'inline-block'
      }}
    >
      {term}
      {showTooltip && (
        <span
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '240px',
            backgroundColor: '#1e293b',
            color: '#ffffff',
            fontSize: '11px',
            padding: '10px 14px',
            borderRadius: '10px',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
            zIndex: 9999,
            textAlign: 'left',
            pointerEvents: 'none',
            whiteSpace: 'normal',
            fontWeight: '500',
            lineHeight: '1.45',
            fontFamily: 'var(--font-main)',
            ...(tooltipPosition === 'above' ? {
              bottom: '100%',
              marginBottom: '10px'
            } : {
              top: '100%',
              marginTop: '10px'
            })
          }}
        >
          <strong style={{ display: 'block', marginBottom: '4px', color: '#60a5fa', fontSize: '12px' }}>
            {term}
          </strong>
          {definition}
          
          {/* Arrow */}
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              borderWidth: '6px',
              borderStyle: 'solid',
              pointerEvents: 'none',
              ...(tooltipPosition === 'above' ? {
                top: '100%',
                borderColor: '#1e293b transparent transparent transparent'
              } : {
                bottom: '100%',
                borderColor: 'transparent transparent #1e293b transparent'
              })
            }}
          />
        </span>
      )}
    </span>
  );
};

import React, { useEffect, useRef } from 'react';
import type { CategoryStat } from '../lib/ratingEngine';

interface SkillRadarChartProps {
  drillStats: Record<string, CategoryStat>;
  periodLabel?: string;
}

export const SkillRadarChart: React.FC<SkillRadarChartProps> = ({ drillStats, periodLabel: _periodLabel }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const axes = [
    { name: '캔들/가격', key: '캔들/가격행동' },
    { name: '시장구조', key: '시장구조/SR' },
    { name: '추세/레짐', key: '추세/레짐' },
    { name: '패턴/돌파', key: '패턴/돌파' },
    { name: '거래량', key: '거래량/유동성' },
    { name: '보조지표', key: '지표/컨플루언스' },
    { name: '셋업/실행', key: '셋업/실행' },
    { name: '리스크/심리', key: '리스크/심리' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI manually with fixed base size of 280 x 180
    const dpr = window.devicePixelRatio || 1;
    const width = 340;
    const height = 260;
    const center = { x: 170, y: 130 };
    const radius = 75; // Max radius for 100% value (tuned for 8 axes labels space)

    // Explicitly sync resolution with dpr
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.resetTransform();
    ctx.scale(dpr, dpr);

    // Clear background
    ctx.clearRect(0, 0, width, height);

    // Get axis values (default to 50 for baseline aesthetic if no attempts, max 100)
    const values = axes.map(axis => {
      const stats = drillStats[axis.key];
      if (stats && stats.attempts > 0) {
        return Math.max(30, stats.accuracy); // accuracy is the computed proficiency
      }
      return 50; // default baseline (50%) for visual elegance on un-attempted categories
    });

    const getVertexPosition = (index: number, val: number) => {
      // Rotate by -Math.PI / 2 to make the first vertex point straight up
      // 8 axes means 45 degrees step (Math.PI / 4)
      const angle = (index * Math.PI) / 4 - Math.PI / 2;
      const r = (val / 100) * radius;
      return {
        x: center.x + r * Math.cos(angle),
        y: center.y + r * Math.sin(angle)
      };
    };

    // 1. Draw Grid Octagons (at 33%, 66%, 100%)
    ctx.lineWidth = 1;
    const gridLevels = [33, 66, 100];
    gridLevels.forEach(level => {
      ctx.strokeStyle = level === 100 ? 'rgba(148, 163, 184, 0.24)' : 'rgba(148, 163, 184, 0.12)';
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const pt = getVertexPosition(i, level);
        if (i === 0) {
          ctx.moveTo(pt.x, pt.y);
        } else {
          ctx.lineTo(pt.x, pt.y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    });

    // 2. Draw Spoke Lines from Center to Vertices
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.12)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const pt = getVertexPosition(i, 100);
      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(pt.x, pt.y);
      ctx.stroke();
    }

    // 3. Draw the Filled Skill Area with Shadow Glow
    ctx.fillStyle = 'rgba(124, 108, 250, 0.16)';
    ctx.strokeStyle = '#7c6cfa';
    ctx.lineWidth = 2.5;

    ctx.shadowColor = 'rgba(124, 108, 250, 0.25)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;

    ctx.beginPath();
    values.forEach((val, idx) => {
      const pt = getVertexPosition(idx, val);
      if (idx === 0) {
        ctx.moveTo(pt.x, pt.y);
      } else {
        ctx.lineTo(pt.x, pt.y);
      }
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Turn off shadow for dots and text
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // 4. Draw Premium Dots at the vertices of the Skill Area
    values.forEach((val, idx) => {
      const pt = getVertexPosition(idx, val);
      
      // Outer ring
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#7c6cfa';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      // Inner solid center
      ctx.fillStyle = '#7c6cfa';
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 2, 0, 2 * Math.PI);
      ctx.fill();
    });

    // 5. Draw Labels
    ctx.font = 'bold 9px Inter, system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#8b99aa'; // slate-400 for dark theme readability
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    axes.forEach((axis, idx) => {
      const labelPt = getVertexPosition(idx, 128); // Position labels slightly further out
      
      // Fine-tune alignment depending on position
      const angle = (idx * Math.PI) / 4 - Math.PI / 2;
      
      if (Math.abs(Math.cos(angle)) < 0.1) {
        ctx.textAlign = 'center';
      } else if (Math.cos(angle) > 0) {
        ctx.textAlign = 'left';
      } else {
        ctx.textAlign = 'right';
      }

      if (Math.abs(Math.sin(angle)) < 0.1) {
        ctx.textBaseline = 'middle';
      } else if (Math.sin(angle) > 0) {
        ctx.textBaseline = 'top';
      } else {
        ctx.textBaseline = 'bottom';
      }

      // Read proficiency score and build string
      const stats = drillStats[axis.key];
      const hasAttempts = stats && stats.attempts > 0;
      const scoreStr = hasAttempts ? `${stats.accuracy}%` : '-';
      const labelText = `${axis.name} (${scoreStr})`;

      ctx.fillText(labelText, labelPt.x, labelPt.y);
    });

  }, [drillStats]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '260px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <canvas ref={canvasRef} style={{ width: '340px', height: '260px' }} />
    </div>
  );
};

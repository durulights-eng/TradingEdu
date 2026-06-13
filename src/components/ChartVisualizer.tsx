import React, { useEffect, useRef } from 'react';
import type { Candlestick } from '../data/quizzes';

interface ChartVisualizerProps {
  chartData: Candlestick[];
  drawings?: {
    type: 'line' | 'horizontal-line' | 'channel' | 'text';
    points: { x: number; y: number }[];
    label?: string;
    color?: string;
  }[];
}

export const ChartVisualizer: React.FC<ChartVisualizerProps> = ({ chartData, drawings }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    // Clear Canvas
    ctx.fillStyle = '#11141e';
    ctx.fillRect(0, 0, width, height);

    if (chartData.length === 0) return;

    // Calculate margins
    const topMargin = 20;
    const bottomMargin = 25;
    const leftMargin = 15;
    const rightMargin = 45;

    const chartWidth = width - leftMargin - rightMargin;
    const chartHeight = height - topMargin - bottomMargin;

    // Find min/max price for scaling
    let maxPrice = -Infinity;
    let minPrice = Infinity;

    chartData.forEach(candle => {
      if (candle.high > maxPrice) maxPrice = candle.high;
      if (candle.low < minPrice) minPrice = candle.low;
    });

    // Also factor drawings into min/max bounds if any
    drawings?.forEach(drawing => {
      drawing.points.forEach(pt => {
        if (pt.y > maxPrice) maxPrice = pt.y;
        if (pt.y < minPrice) minPrice = pt.y;
      });
    });

    // Add a bit of padding to price range
    const pricePadding = (maxPrice - minPrice) * 0.15 || 5;
    maxPrice += pricePadding;
    minPrice -= pricePadding;
    const priceRange = maxPrice - minPrice;

    // Helper functions to convert data coordinate to canvas pixel
    const getXPixel = (index: number) => {
      const spacing = chartWidth / (chartData.length - 0.5);
      return leftMargin + index * spacing + spacing / 2;
    };

    const getYPixel = (price: number) => {
      return topMargin + chartHeight - ((price - minPrice) / priceRange) * chartHeight;
    };

    // Draw Grid Lines & Price Labels
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.font = '10px Inter';
    ctx.fillStyle = '#64748b';
    ctx.textAlign = 'left';

    const gridLinesCount = 4;
    for (let i = 0; i <= gridLinesCount; i++) {
      const price = minPrice + (priceRange * i) / gridLinesCount;
      const y = getYPixel(price);

      // Draw horizontal grid line
      ctx.beginPath();
      ctx.moveTo(leftMargin, y);
      ctx.lineTo(width - rightMargin, y);
      ctx.stroke();

      // Draw price text
      ctx.fillText(`$${price.toFixed(1)}`, width - rightMargin + 5, y + 3);
    }

    // Draw Candlesticks
    const candleWidth = Math.max(4, (chartWidth / chartData.length) * 0.55);

    chartData.forEach((candle, index) => {
      const x = getXPixel(index);
      const yOpen = getYPixel(candle.open);
      const yClose = getYPixel(candle.close);
      const yHigh = getYPixel(candle.high);
      const yLow = getYPixel(candle.low);

      const isBullish = candle.close >= candle.open;
      const color = isBullish ? '#10b981' : '#ef4444';

      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 1.5;

      // Draw shadow (wick)
      ctx.beginPath();
      ctx.moveTo(x, yHigh);
      ctx.lineTo(x, yLow);
      ctx.stroke();

      // Draw body
      const bodyHeight = Math.max(1.5, Math.abs(yClose - yOpen));
      const bodyY = Math.min(yOpen, yClose);

      ctx.fillRect(x - candleWidth / 2, bodyY, candleWidth, bodyHeight);

      // Draw horizontal border for very thin candles (doji)
      if (bodyHeight <= 1.5) {
        ctx.beginPath();
        ctx.moveTo(x - candleWidth / 2, bodyY);
        ctx.lineTo(x + candleWidth / 2, bodyY);
        ctx.stroke();
      }

      // Draw Time labels at the bottom
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'center';
      if (index % 2 === 0 || index === chartData.length - 1) {
        ctx.fillText(candle.time, x, height - 8);
      }
    });

    // Draw Indicator Drawings
    drawings?.forEach(drawing => {
      ctx.strokeStyle = drawing.color || '#3b82f6';
      ctx.lineWidth = 2.5;

      if (drawing.type === 'horizontal-line') {
        const y = getYPixel(drawing.points[0].y);
        ctx.beginPath();
        ctx.setLineDash([4, 4]); // dashed
        ctx.moveTo(leftMargin, y);
        ctx.lineTo(width - rightMargin, y);
        ctx.stroke();
        ctx.setLineDash([]); // reset

        // Label
        if (drawing.label) {
          ctx.fillStyle = drawing.color || '#3b82f6';
          ctx.font = '700 9px Outfit';
          ctx.textAlign = 'left';
          ctx.fillText(drawing.label, leftMargin + 5, y - 6);
        }
      } else if (drawing.type === 'line') {
        ctx.beginPath();
        drawing.points.forEach((pt, idx) => {
          const x = getXPixel(pt.x);
          const y = getYPixel(pt.y);
          if (idx === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });
        ctx.stroke();

        // Label
        if (drawing.label && drawing.points.length > 0) {
          const lastPt = drawing.points[drawing.points.length - 1];
          const x = getXPixel(lastPt.x);
          const y = getYPixel(lastPt.y);
          ctx.fillStyle = drawing.color || '#3b82f6';
          ctx.font = '700 9px Outfit';
          ctx.textAlign = 'right';
          ctx.fillText(drawing.label, x - 5, y - 6);
        }
      }
    });

  }, [chartData, drawings]);

  return (
    <div className="chart-card">
      <div className="canvas-container">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

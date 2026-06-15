const fs = require('fs');
const path = require('path');

try {
  // Read quizzes.ts
  const filePath = path.join(__dirname, '../src/data/quizzes.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  // Truncate at the TradingTier interface definition to avoid importing excess variables
  const tierIndex = content.indexOf('export interface TradingTier');
  if (tierIndex !== -1) {
    content = content.substring(0, tierIndex);
  }

  // Strip TypeScript annotations using simple regexes
  content = content.replace(/export interface [\s\S]*?\n\n/g, '');
  content = content.replace(/: QuizItem\[\]/g, '');
  content = content.replace(/: Candlestick\[\]/g, '');
  content = content.replace(/: {[\s\S]*?}\[\]/g, '');
  content = content.replace('export const quizzes', 'const quizzes');
  
  // Make sure it ends at the end of the quizzes array
  const quizzesEndIndex = content.lastIndexOf('];');
  if (quizzesEndIndex !== -1) {
    content = content.substring(0, quizzesEndIndex + 2);
  }
  content += '\nmodule.exports = quizzes;\n';

  // Write to a temporary file
  const tempPath = path.join(__dirname, 'temp_quizzes_html.cjs');
  fs.writeFileSync(tempPath, content);

  // Require the temp file
  const quizzes = require(tempPath);

  // Cleanup the temp file
  fs.unlinkSync(tempPath);

  // Compute category statistics
  const categoryStats = {};
  quizzes.forEach(q => {
    categoryStats[q.category] = (categoryStats[q.category] || 0) + 1;
  });

  const categories = Object.keys(categoryStats);

  // Generate HTML
  let html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChartMon - 실전 차트 트레이닝 퀴즈 리스트</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #2962ff;
      --primary-hover: #1f4fd4;
      --bg-main: #f8fafc;
      --bg-card: #ffffff;
      --border-color: #e2e8f0;
      --text-primary: #0f172a;
      --text-secondary: #475569;
      --text-muted: #94a3b8;
      --color-bullish: #089981;
      --color-bearish: #f23645;
      --radius-lg: 16px;
      --radius-md: 12px;
      --radius-sm: 8px;
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.02);
      --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg-main);
      color: var(--text-primary);
      line-height: 1.6;
      padding-bottom: 60px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 32px 16px;
    }

    header {
      margin-bottom: 40px;
      text-align: center;
    }

    header h1 {
      font-size: 2.2rem;
      font-weight: 800;
      color: #1e3a8a;
      margin-bottom: 12px;
      letter-spacing: -0.025em;
    }

    header p {
      color: var(--text-secondary);
      font-size: 1.1rem;
    }

    /* Stats Summary Dashboard */
    .stats-dashboard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 16px;
      margin-bottom: 32px;
    }

    .stat-card {
      background: var(--bg-card);
      padding: 16px;
      border-radius: var(--radius-md);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      text-align: center;
      transition: transform 0.2s ease;
    }

    .stat-card:hover {
      transform: translateY(-2px);
    }

    .stat-number {
      font-size: 1.8rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 0.8rem;
      color: var(--text-secondary);
      font-weight: 600;
      word-break: keep-all;
    }

    /* Filters Bar */
    .control-panel {
      background: var(--bg-card);
      padding: 20px;
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-md);
      margin-bottom: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    @media (min-width: 768px) {
      .control-panel {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .filters-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .filter-btn {
      background: #f1f5f9;
      border: 1px solid var(--border-color);
      color: var(--text-secondary);
      padding: 8px 16px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .filter-btn:hover {
      background: #e2e8f0;
      color: var(--text-primary);
    }

    .filter-btn.active {
      background: var(--primary);
      border-color: var(--primary);
      color: white;
    }

    .search-wrapper {
      position: relative;
      min-width: 280px;
    }

    @media (max-width: 767px) {
      .search-wrapper {
        width: 100%;
      }
    }

    .search-input {
      width: 100%;
      padding: 10px 16px;
      padding-left: 40px;
      border-radius: 9999px;
      border: 1px solid #cbd5e1;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;
    }

    .search-input:focus {
      border-color: var(--primary);
    }

    .search-icon {
      position: absolute;
      left: 14px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      pointer-events: none;
    }

    /* Grid Layout */
    .quizzes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 24px;
    }

    .quiz-card {
      background: var(--bg-card);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-md);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .quiz-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }

    .card-header {
      padding: 16px 20px;
      background: #f8fafc;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .quiz-title {
      font-weight: 800;
      color: #1e3a8a;
      font-size: 0.95rem;
    }

    .category-tag {
      background: #edf3ff;
      color: var(--primary);
      padding: 4px 10px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 700;
      border: 1px solid #cddcff;
    }

    .card-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 16px;
    }

    .question-text {
      font-weight: 700;
      font-size: 1rem;
      color: var(--text-primary);
      line-height: 1.5;
    }

    /* Chart visualization */
    .chart-container {
      height: 220px;
      border: 1px solid #edf1f7;
      border-radius: var(--radius-md);
      overflow: hidden;
      position: relative;
      background-color: #ffffff;
    }

    .chart-canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    /* Option Items */
    .options-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .option-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 10px 12px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-color);
      font-size: 0.85rem;
      background: var(--bg-main);
      text-align: left;
    }

    .option-item.correct {
      background: #ecfdf5;
      border-color: #a7f3d0;
      color: #065f46;
      font-weight: 600;
    }

    .option-idx {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      background: #e2e8f0;
      font-size: 0.75rem;
      font-weight: 800;
      color: var(--text-secondary);
      flex-shrink: 0;
    }

    .option-item.correct .option-idx {
      background: var(--color-bullish);
      color: white;
    }

    /* Collapsible Explanation Box */
    .explanation-toggle {
      background: #f1f5f9;
      border: none;
      width: 100%;
      padding: 10px;
      border-radius: var(--radius-sm);
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--text-secondary);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }

    .explanation-toggle:hover {
      background: #e2e8f0;
    }

    .explanation-box {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-out, border 0.3s, padding 0.3s;
      background: #fffbeb;
      border-radius: var(--radius-sm);
      border: 0 solid #fef3c7;
    }

    .explanation-box.open {
      max-height: 500px;
      border: 1px solid #fef3c7;
      padding: 12px;
      margin-top: 10px;
    }

    .explanation-title {
      font-weight: 700;
      font-size: 0.85rem;
      color: #b45309;
      margin-bottom: 6px;
    }

    .explanation-content {
      font-size: 0.8rem;
      color: #78350f;
      line-height: 1.5;
    }

    .theory-link {
      display: inline-block;
      margin-top: 8px;
      font-size: 0.75rem;
      color: var(--primary);
      text-decoration: none;
      font-weight: 600;
    }

    .theory-link:hover {
      text-decoration: underline;
    }

    /* Empty state */
    .no-results {
      grid-column: 1 / -1;
      text-align: center;
      padding: 48px;
      background: var(--bg-card);
      border-radius: var(--radius-lg);
      border: 1px dashed var(--border-color);
      color: var(--text-secondary);
      font-weight: 600;
      display: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>ChartMon 퀴즈 리스트 시각화</h1>
      <p>팀원 검토 및 데이터 무결성 체크용 리스트</p>
    </header>

    <!-- Stats Dashboard -->
    <div class="stats-dashboard">
      <div class="stat-card">
        <div class="stat-number">${quizzes.length}</div>
        <div class="stat-label">전체 문제 수</div>
      </div>
      ${categories.map(cat => `
      <div class="stat-card">
        <div class="stat-number">${categoryStats[cat]}</div>
        <div class="stat-label">${cat}</div>
      </div>
      `).join('')}
    </div>

    <!-- Filters & Search -->
    <div class="control-panel">
      <div class="filters-wrapper">
        <button class="filter-btn active" onclick="filterCategory('all', this)">전체</button>
        ${categories.map(cat => `
        <button class="filter-btn" onclick="filterCategory('${cat}', this)">${cat}</button>
        `).join('')}
      </div>
      <div class="search-wrapper">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <input type="text" class="search-input" id="searchInput" placeholder="질문 또는 해설 검색..." oninput="filterSearch()">
      </div>
    </div>

    <!-- Quizzes Grid -->
    <div class="quizzes-grid" id="quizzesGrid">
      ${quizzes.map((q, idx) => {
        const optionLetters = ['A', 'B', 'C', 'D'];
        return `
      <div class="quiz-card" data-category="${q.category}" data-question="${q.question.replace(/"/g, '&quot;')}" data-explanation="${q.explanation.replace(/"/g, '&quot;')}">
        <div class="card-header">
          <span class="quiz-id">문제 #${q.id}</span>
          <span class="category-tag">${q.category}</span>
        </div>
        <div class="card-body">
          <p class="question-text">${q.question}</p>
          
          <!-- Interactive Chart Canvas -->
          <div class="chart-container">
            <canvas class="chart-canvas" id="canvas-${q.id}"></canvas>
          </div>

          <!-- Options -->
          <div class="options-list">
            ${q.options.map((opt, oIdx) => {
              const isCorrect = oIdx === q.correctIndex;
              return `
            <div class="option-item ${isCorrect ? 'correct' : ''}">
              <span class="option-idx">${optionLetters[oIdx]}</span>
              <span>${opt}</span>
            </div>
              `;
            }).join('')}
          </div>

          <!-- Collapsible Explanation -->
          <div>
            <button class="explanation-toggle" onclick="toggleExplanation(${q.id}, this)">
              <span>정답 및 해설 보기</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="explanation-box" id="explanation-${q.id}">
              <div class="explanation-title">💡 정답: ${optionLetters[q.correctIndex]} 번</div>
              <div class="explanation-content">${q.explanation}</div>
              <a href="./trading-theories/${q.theoryRef}" class="theory-link">📖 관련 이론: ${q.theoryRef}</a>
            </div>
          </div>
        </div>
      </div>
        `;
      }).join('')}
      
      <div class="no-results" id="noResults">
        검색 결과와 일치하는 문제가 없습니다.
      </div>
    </div>
  </div>

  <script>
    // Embedded Quizzes Data for Canvas Draw
    const quizzesData = ${JSON.stringify(quizzes)};

    // Canvas drawing utility
    function hexToRgba(hex, alpha) {
      if (hex.startsWith('#')) {
        const c = hex.substring(1);
        if (c.length === 3) {
          const r = parseInt(c[0] + c[0], 16);
          const g = parseInt(c[1] + c[1], 16);
          const b = parseInt(c[2] + c[2], 16);
          return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        } else if (c.length === 6) {
          const r = parseInt(c.substring(0, 2), 16);
          const g = parseInt(c.substring(2, 4), 16);
          const b = parseInt(c.substring(4, 6), 16);
          return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
        }
      }
      return hex;
    }

    function renderQuizChart(quiz) {
      const canvas = document.getElementById('canvas-' + quiz.id);
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const width = rect.width;
      const height = rect.height;

      // Clear
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      const chartData = quiz.chartData;
      if (!chartData || chartData.length === 0) return;

      const drawings = quiz.drawings || [];

      // Margins
      const topMargin = 20;
      const bottomMargin = 25;
      const leftMargin = 15;
      const rightMargin = 45;

      const chartWidth = width - leftMargin - rightMargin;
      const chartHeight = height - topMargin - bottomMargin;

      // Min/Max Price bounds
      let maxPrice = -Infinity;
      let minPrice = Infinity;

      chartData.forEach(candle => {
        if (candle.high > maxPrice) maxPrice = candle.high;
        if (candle.low < minPrice) minPrice = candle.low;
      });

      drawings.forEach(dr => {
        if (dr.points) {
          dr.points.forEach(pt => {
            if (pt.y > maxPrice) maxPrice = pt.y;
            if (pt.y < minPrice) minPrice = pt.y;
          });
        }
      });

      const pricePadding = (maxPrice - minPrice) * 0.15 || 5;
      maxPrice += pricePadding;
      minPrice -= pricePadding;
      const priceRange = maxPrice - minPrice;

      const getXPixel = (index) => {
        const spacing = chartWidth / (chartData.length - 0.5);
        return leftMargin + index * spacing + spacing / 2;
      };

      const getYPixel = (price) => {
        return topMargin + chartHeight - ((price - minPrice) / priceRange) * chartHeight;
      };

      // Draw Grid Lines & Price Labels
      ctx.strokeStyle = '#edf1f7';
      ctx.lineWidth = 1;
      ctx.font = '10px sans-serif';
      ctx.fillStyle = '#8a95a5';
      ctx.textAlign = 'left';

      const gridLinesCount = 4;
      for (let i = 0; i <= gridLinesCount; i++) {
        const price = minPrice + (priceRange * i) / gridLinesCount;
        const y = getYPixel(price);

        ctx.beginPath();
        ctx.moveTo(leftMargin, y);
        ctx.lineTo(width - rightMargin, y);
        ctx.stroke();

        ctx.fillText('$' + price.toFixed(1), width - rightMargin + 5, y + 3);
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
        const color = isBullish ? '#089981' : '#f23645';

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 1.5;

        // Wick
        ctx.beginPath();
        ctx.moveTo(x, yHigh);
        ctx.lineTo(x, yLow);
        ctx.stroke();

        // Body
        const bodyHeight = Math.max(1.5, Math.abs(yClose - yOpen));
        const bodyY = Math.min(yOpen, yClose);
        ctx.fillRect(x - candleWidth / 2, bodyY, candleWidth, bodyHeight);

        // Time labels
        ctx.fillStyle = '#8a95a5';
        ctx.textAlign = 'center';
        if (index % 2 === 0 || index === chartData.length - 1) {
          ctx.fillText(candle.time, x, height - 8);
        }
      });

      // Draw Indicator Drawings
      drawings.forEach(drawing => {
        ctx.strokeStyle = drawing.color || '#2962ff';
        ctx.fillStyle = drawing.color || '#2962ff';
        ctx.lineWidth = 2;

        if (drawing.type === 'horizontal-line') {
          const y = getYPixel(drawing.points[0].y);
          ctx.beginPath();
          ctx.setLineDash([4, 4]);
          ctx.moveTo(leftMargin, y);
          ctx.lineTo(width - rightMargin, y);
          ctx.stroke();
          ctx.setLineDash([]);

          if (drawing.label) {
            ctx.font = 'bold 9px sans-serif';
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

          if (drawing.label && drawing.points.length > 0) {
            const lastPt = drawing.points[drawing.points.length - 1];
            const x = getXPixel(lastPt.x);
            const y = getYPixel(lastPt.y);
            ctx.font = 'bold 9px sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText(drawing.label, x - 5, y - 6);
          }
        } else if (drawing.type === 'channel' && drawing.points.length >= 4) {
          const x0 = getXPixel(drawing.points[0].x);
          const y0 = getYPixel(drawing.points[0].y);
          const x1 = getXPixel(drawing.points[1].x);
          const y1 = getYPixel(drawing.points[1].y);

          const x2 = getXPixel(drawing.points[2].x);
          const y2 = getYPixel(drawing.points[2].y);
          const x3 = getXPixel(drawing.points[3].x);
          const y3 = getYPixel(drawing.points[3].y);

          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.moveTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.stroke();

          ctx.fillStyle = hexToRgba(drawing.color || '#f59e0b', 0.08);
          ctx.beginPath();
          ctx.moveTo(x0, y0);
          ctx.lineTo(x1, y1);
          ctx.lineTo(x3, y3);
          ctx.lineTo(x2, y2);
          ctx.closePath();
          ctx.fill();

          if (drawing.label) {
            ctx.fillStyle = drawing.color || '#f59e0b';
            ctx.font = 'bold 9px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(drawing.label, x0 + 5, y0 - 6);
          }
        }
      });
    }

    // Toggle Explanation handler
    function toggleExplanation(id, btn) {
      const box = document.getElementById('explanation-' + id);
      if (!box) return;
      
      const isOpen = box.classList.toggle('open');
      const svg = btn.querySelector('svg');
      
      if (isOpen) {
        svg.style.transform = 'rotate(180deg)';
      } else {
        svg.style.transform = 'none';
      }
    }

    // Filter Category Logic
    let currentCategory = 'all';
    function filterCategory(cat, btn) {
      currentCategory = cat;
      
      // Update active button state
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      applyFilters();
    }

    // Filter Search Input Logic
    function filterSearch() {
      applyFilters();
    }

    function applyFilters() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.quiz-card');
      let visibleCount = 0;

      cards.forEach(card => {
        const cat = card.dataset.category;
        const question = card.dataset.question.toLowerCase();
        const explanation = card.dataset.explanation.toLowerCase();
        
        const matchesCat = (currentCategory === 'all' || cat === currentCategory);
        const matchesQuery = (!query || question.includes(query) || explanation.includes(query));

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      const noResults = document.getElementById('noResults');
      if (visibleCount === 0) {
        noResults.style.display = 'block';
      } else {
        noResults.style.display = 'none';
      }
    }

    // Initial render of all charts
    window.addEventListener('DOMContentLoaded', () => {
      quizzesData.forEach(quiz => {
        // Render asynchronously to avoid UI block on initial load
        setTimeout(() => {
          renderQuizChart(quiz);
        }, 10);
      });
    });

    // Resize handler to redraw charts
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        quizzesData.forEach(quiz => {
          renderQuizChart(quiz);
        });
      }, 200);
    });
  </script>
</body>
</html>`;

  // Write the HTML visualization file to docs
  const htmlPath = path.join(__dirname, 'quizzes_visualization.html');
  fs.writeFileSync(htmlPath, html);
  console.log('HTML visualization generated successfully in docs/quizzes_visualization.html');

} catch (err) {
  console.error('Failed to generate HTML visualization:', err);
}

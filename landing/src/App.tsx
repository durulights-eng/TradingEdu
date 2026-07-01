import { useState, useEffect, useRef } from 'react';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Brain,
  ChevronRight,
  Flame,
  Play,
  ShieldAlert,
  Target,
  Timer,
  Zap,
  Star,
  RefreshCw,
} from 'lucide-react';

// Drills Custom SVGs
const DrillOneChart = ({ answerSelected }: { answerSelected: boolean }) => {
  return (
    <svg viewBox="0 0 500 230" className="sample-chart-svg" style={{ display: 'block', width: '100%' }}>
      {/* Grid lines */}
      <line x1="20" y1="50" x2="480" y2="50" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="90" x2="480" y2="90" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="4 4" />
      <line x1="20" y1="130" x2="480" y2="130" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="170" x2="480" y2="170" stroke="rgba(255, 255, 255, 0.04)" />
      
      {/* Resistance Line Label */}
      <text x="25" y="84" fill="rgba(148, 163, 184, 0.4)" fontSize="9" fontWeight="700" letterSpacing="0.05em">저항선 (Resistance Line)</text>

      {/* Candle 1 (Red) */}
      <line x1="50" y1="150" x2="50" y2="195" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="44" y="160" width="12" height="25" fill="var(--red)" rx="1.5" />

      {/* Candle 2 (Green) */}
      <line x1="90" y1="125" x2="90" y2="175" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="84" y="135" width="12" height="25" fill="var(--green)" rx="1.5" />

      {/* Candle 3 (Red) */}
      <line x1="130" y1="135" x2="130" y2="160" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="124" y="140" width="12" height="15" fill="var(--red)" rx="1.5" />

      {/* Candle 4 (Green) */}
      <line x1="170" y1="95" x2="170" y2="150" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="164" y="105" width="12" height="35" fill="var(--green)" rx="1.5" />

      {/* Candle 5 (Green) */}
      <line x1="210" y1="95" x2="210" y2="125" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="204" y="100" width="12" height="15" fill="var(--green)" rx="1.5" />

      {/* Candle 6 (Breakout Green) */}
      <line x1="250" y1="55" x2="250" y2="115" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="244" y="65" width="12" height="35" fill="var(--green)" rx="1.5" />
      
      {/* Breakout Label */}
      <path d="M 250,135 L 250,118 M 246,124 L 250,118 L 254,124" stroke="var(--cyan)" strokeWidth="2" fill="none" />
      <text x="250" y="148" textAnchor="middle" fill="var(--cyan)" fontSize="9" fontWeight="800">돌파 시도 지점 (A)</text>

      {/* Subsequent candles (revealed after selection) */}
      {answerSelected && (
        <>
          {/* Candle 7 (Red - Bearish confirmation) */}
          <line x1="290" y1="60" x2="290" y2="105" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="284" y="68" width="12" height="25" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 8 (Red) */}
          <line x1="330" y1="80" x2="330" y2="135" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="324" y="90" width="12" height="35" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 9 (Red) */}
          <line x1="370" y1="110" x2="370" y2="170" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="364" y="125" width="12" height="35" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 10 (Red) */}
          <line x1="410" y1="150" x2="410" y2="185" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="404" y="160" width="12" height="15" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Invalidation path */}
          <path d="M 285,45 Q 350,20 410,140" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3 3" className="fade-in-fast" />
          <text x="350" y="32" textAnchor="middle" fill="var(--red)" fontSize="9" fontWeight="800" className="fade-in-fast">Bull Trap (가짜 돌파 확인)</text>
        </>
      )}
    </svg>
  );
};

const DrillTwoChart = ({ answerSelected }: { answerSelected: boolean }) => {
  return (
    <svg viewBox="0 0 500 230" className="sample-chart-svg" style={{ display: 'block', width: '100%' }}>
      {/* Grid lines */}
      <line x1="20" y1="50" x2="480" y2="50" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="140" x2="480" y2="140" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="4 4" />
      <line x1="20" y1="90" x2="480" y2="90" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="180" x2="480" y2="180" stroke="rgba(255, 255, 255, 0.04)" />
      
      {/* Support Line Label */}
      <text x="25" y="134" fill="rgba(148, 163, 184, 0.4)" fontSize="9" fontWeight="700" letterSpacing="0.05em">직전 저점 지지선 (Support Line)</text>

      {/* Candle 1 (Green) */}
      <line x1="50" y1="70" x2="50" y2="105" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="44" y="75" width="12" height="20" fill="var(--green)" rx="1.5" />

      {/* Candle 2 (Red) */}
      <line x1="90" y1="90" x2="90" y2="135" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="84" y="95" width="12" height="30" fill="var(--red)" rx="1.5" />

      {/* Candle 3 (Green) */}
      <line x1="130" y1="100" x2="130" y2="125" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="124" y="105" width="12" height="15" fill="var(--green)" rx="1.5" />

      {/* Candle 4 (Red) */}
      <line x1="170" y1="110" x2="170" y2="142" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="164" y="115" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Candle 5 (Red) */}
      <line x1="210" y1="125" x2="210" y2="148" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="204" y="130" width="12" height="12" fill="var(--red)" rx="1.5" />

      {/* Candle 6 (Decision Red on Support) */}
      <line x1="250" y1="125" x2="250" y2="144" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="244" y="135" width="12" height="7" fill="var(--red)" rx="1.5" />
      
      {/* Target Arrow */}
      <path d="M 250,165 L 250,148 M 246,154 L 250,148 L 254,154" stroke="var(--cyan)" strokeWidth="2" fill="none" />
      <text x="250" y="178" textAnchor="middle" fill="var(--cyan)" fontSize="9" fontWeight="800">지지 테스트 지점 (C)</text>

      {/* Subsequent candles */}
      {answerSelected && (
        <>
          {/* Candle 7 (Red breakout) */}
          <line x1="290" y1="140" x2="290" y2="185" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="284" y="142" width="12" height="35" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 8 (Red) */}
          <line x1="330" y1="170" x2="330" y2="215" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="324" y="175" width="12" height="30" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 9 (Red) */}
          <line x1="370" y1="200" x2="370" y2="225" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="364" y="205" width="12" height="15" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <path d="M 285,130 Q 350,135 370,210" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3 3" className="fade-in-fast" />
          <text x="350" y="125" textAnchor="middle" fill="var(--red)" fontSize="9" fontWeight="800" className="fade-in-fast">지지 실패 · 하락 가속</text>
        </>
      )}
    </svg>
  );
};

const DrillThreeChart = ({ answerSelected }: { answerSelected: boolean }) => {
  return (
    <svg viewBox="0 0 500 230" className="sample-chart-svg" style={{ display: 'block', width: '100%' }}>
      {/* Divider */}
      <line x1="10" y1="145" x2="490" y2="145" stroke="rgba(255, 255, 255, 0.08)" />
      
      {/* Price Grid */}
      <line x1="20" y1="40" x2="480" y2="40" stroke="rgba(255, 255, 255, 0.02)" />
      <line x1="20" y1="90" x2="480" y2="90" stroke="rgba(255, 255, 255, 0.02)" />
      
      <text x="25" y="30" fill="rgba(148, 163, 184, 0.4)" fontSize="9" fontWeight="700" letterSpacing="0.05em">주가 차트 (Price)</text>

      {/* Price Candle 1 */}
      <line x1="50" y1="40" x2="50" y2="75" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="44" y="45" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Price Candle 2 */}
      <line x1="90" y1="60" x2="90" y2="95" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="84" y="65" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Price Candle 3 */}
      <line x1="130" y1="80" x2="130" y2="115" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="124" y="85" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Price Candle 4 (Green) */}
      <line x1="170" y1="90" x2="170" y2="115" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="164" y="95" width="12" height="15" fill="var(--green)" rx="1.5" />

      {/* Price Candle 5 */}
      <line x1="210" y1="100" x2="210" y2="135" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="204" y="105" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Price Candle 6 (Decision Candle) */}
      <line x1="250" y1="120" x2="250" y2="142" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="244" y="125" width="12" height="12" fill="var(--red)" rx="1.5" />
      
      {/* RSI Sub-pane Grid */}
      <line x1="20" y1="180" x2="480" y2="180" stroke="rgba(255, 91, 103, 0.15)" strokeDasharray="3 3" />
      <text x="25" y="162" fill="rgba(148, 163, 184, 0.4)" fontSize="9" fontWeight="700" letterSpacing="0.05em">보조지표 RSI (과매도선: 30)</text>
      <text x="430" y="176" fill="rgba(255, 91, 103, 0.4)" fontSize="8" fontWeight="800">RSI 30</text>

      {/* RSI Line */}
      <path d="M 50,155 L 90,165 L 130,185 L 170,178 L 210,192 L 250,196" fill="none" stroke="var(--amber)" strokeWidth="2" />
      <circle cx="250" cy="196" r="3.5" fill="var(--cyan)" />

      {answerSelected && (
        <>
          {/* Price Candles 7-10 */}
          <line x1="290" y1="135" x2="290" y2="165" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="284" y="140" width="12" height="20" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <line x1="330" y1="155" x2="330" y2="185" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="324" y="160" width="12" height="20" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <line x1="370" y1="175" x2="370" y2="200" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="364" y="180" width="15" height="15" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <line x1="410" y1="185" x2="410" y2="215" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="404" y="190" width="12" height="20" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* RSI Line Extension */}
          <path d="M 250,196 L 290,198 L 330,195 L 370,196 L 410,190" fill="none" stroke="var(--amber)" strokeWidth="2" className="fade-in-fast" />
          <text x="350" y="212" textAnchor="middle" fill="var(--red)" fontSize="9" fontWeight="800" className="fade-in-fast">RSI 과매도권 횡보 & 주가 지속 폭락</text>
        </>
      )}
    </svg>
  );
};

const DrillFourChart = ({ answerSelected }: { answerSelected: boolean }) => {
  return (
    <svg viewBox="0 0 500 230" className="sample-chart-svg" style={{ display: 'block', width: '100%' }}>
      {/* Grid lines */}
      <line x1="20" y1="50" x2="480" y2="50" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="130" x2="480" y2="130" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="170" x2="480" y2="170" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="90" x2="480" y2="90" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="4 4" />
      
      {/* Resistance Line Label */}
      <text x="25" y="84" fill="rgba(148, 163, 184, 0.4)" fontSize="9" fontWeight="700" letterSpacing="0.05em">박스권 상단 저항선 (Range Resistance)</text>

      {/* Moving Averages */}
      {/* Short MA (Golden Crossing) */}
      <path d="M 30,170 Q 150,150 250,90 T 450,160" fill="none" stroke="var(--cyan)" strokeWidth="1.5" />
      {/* Long MA */}
      <path d="M 30,150 Q 150,140 250,95 T 450,105" fill="none" stroke="var(--amber)" strokeWidth="1.5" />

      {/* Candles */}
      {/* Candle 1 (Red) */}
      <line x1="50" y1="140" x2="50" y2="170" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="44" y="145" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Candle 2 (Green) */}
      <line x1="90" y1="130" x2="90" y2="160" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="84" y="135" width="12" height="20" fill="var(--green)" rx="1.5" />

      {/* Candle 3 (Red) */}
      <line x1="130" y1="120" x2="130" y2="150" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="124" y="125" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Candle 4 (Green) */}
      <line x1="170" y1="100" x2="170" y2="140" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="164" y="105" width="12" height="25" fill="var(--green)" rx="1.5" />

      {/* Candle 5 (Green Golden Cross Candle) */}
      <line x1="210" y1="85" x2="210" y2="120" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="204" y="90" width="12" height="25" fill="var(--green)" rx="1.5" />

      {/* Candle 6 (Decision Candle) */}
      <line x1="250" y1="80" x2="250" y2="110" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="244" y="85" width="12" height="15" fill="var(--red)" rx="1.5" />

      {/* Target Arrow */}
      <path d="M 250,135 L 250,118 M 246,124 L 250,118 L 254,124" stroke="var(--cyan)" strokeWidth="2" fill="none" />
      <text x="250" y="148" textAnchor="middle" fill="var(--cyan)" fontSize="9" fontWeight="800">이평선 골든크로스 & 저항선 봉착 지점</text>

      {answerSelected && (
        <>
          {/* Subsequent candles: Fall down */}
          {/* Candle 7 (Red) */}
          <line x1="290" y1="100" x2="290" y2="140" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="284" y="105" width="12" height="30" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 8 (Red) */}
          <line x1="330" y1="130" x2="330" y2="175" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="324" y="135" width="12" height="35" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          {/* Candle 9 (Red) */}
          <line x1="370" y1="160" x2="370" y2="195" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="364" y="165" width="12" height="25" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <path d="M 285,90 Q 340,95 380,180" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3 3" className="fade-in-fast" />
          <text x="355" y="80" textAnchor="middle" fill="var(--red)" fontSize="9" fontWeight="800" className="fade-in-fast">돌파 실패 · 골든크로스 함정 확정</text>
        </>
      )}
    </svg>
  );
};

const DrillFiveChart = ({ answerSelected }: { answerSelected: boolean }) => {
  return (
    <svg viewBox="0 0 500 230" className="sample-chart-svg" style={{ display: 'block', width: '100%' }}>
      {/* Grid lines */}
      <line x1="20" y1="60" x2="480" y2="60" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="110" x2="480" y2="110" stroke="rgba(255, 255, 255, 0.04)" />
      <line x1="20" y1="150" x2="480" y2="150" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="4 4" />
      
      {/* Neckline Label */}
      <text x="25" y="144" fill="rgba(148, 163, 184, 0.4)" fontSize="9" fontWeight="700" letterSpacing="0.05em">헤드앤숄더 넥라인 지지 붕괴선 (Neckline)</text>

      {/* Head and Shoulders candles outline */}
      {/* Left Shoulder (Green/Red) */}
      <line x1="50" y1="110" x2="50" y2="145" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="44" y="115" width="12" height="20" fill="var(--green)" rx="1.5" />
      <line x1="90" y1="120" x2="90" y2="155" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="84" y="125" width="12" height="20" fill="var(--red)" rx="1.5" />

      {/* Head */}
      <line x1="130" y1="80" x2="130" y2="120" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="124" y="85" width="12" height="30" fill="var(--green)" rx="1.5" />
      <line x1="170" y1="100" x2="170" y2="150" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="164" y="105" width="12" height="35" fill="var(--red)" rx="1.5" />

      {/* Right Shoulder */}
      <line x1="210" y1="120" x2="210" y2="152" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="204" y="125" width="12" height="20" fill="var(--green)" rx="1.5" />
      
      {/* Neckline Breakdown Candle */}
      <line x1="250" y1="140" x2="250" y2="185" stroke="var(--red)" strokeWidth="1.5" />
      <rect x="244" y="148" width="12" height="25" fill="var(--red)" rx="1.5" />

      {/* Pullback (Green candle returning to retest Neckline) */}
      <line x1="290" y1="135" x2="290" y2="170" stroke="var(--green)" strokeWidth="1.5" />
      <rect x="284" y="140" width="12" height="20" fill="var(--green)" rx="1.5" />

      {/* Target Arrow */}
      <path d="M 290,195 L 290,178 M 286,184 L 290,178 L 294,184" stroke="var(--cyan)" strokeWidth="2" fill="none" />
      <text x="290" y="208" textAnchor="middle" fill="var(--cyan)" fontSize="9" fontWeight="800">리테스트(Pullback) 저항 확인 지점</text>

      {answerSelected && (
        <>
          {/* Fall down */}
          <line x1="330" y1="150" x2="330" y2="195" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="324" y="155" width="12" height="35" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <line x1="370" y1="180" x2="370" y2="225" stroke="var(--red)" strokeWidth="1.5" className="fade-in-fast" />
          <rect x="364" y="185" width="12" height="30" fill="var(--red)" rx="1.5" className="fade-in-fast" />

          <path d="M 320,150 Q 360,165 380,220" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="3 3" className="fade-in-fast" />
          <text x="350" y="132" textAnchor="middle" fill="var(--red)" fontSize="9" fontWeight="800" className="fade-in-fast">넥라인 리테스트 완료 후 저항 급락</text>
        </>
      )}
    </svg>
  );
};

// Review scroller columns static data
const col1Reviews = [
  { initial: '이', name: '이**', rating: '전업 트레이더 · 1720 RP', headline: '"돌파 휩소에 당하던 나쁜 습관을 고쳤습니다"', text: '이전에는 장대양봉만 보이면 충동적으로 추격매수를 들어갔다가 꼭대기 매물에 물리곤 했습니다. 차트몬에서 휩소 판독 훈련을 집중적으로 풀면서, 이제는 진입 전에 거래량과 꼬리 캔들 비율을 머리보다 눈이 먼저 확인합니다.', grad: 'grad-cyan' },
  { initial: '김', name: '김**', rating: '자영업자 · 1320 RP', headline: '"뇌동매매 습관이 완전히 잡혔습니다"', text: '매매 원칙은 알아도 막상 장 시작하면 뇌동매매 하던 습관이 완전히 잡혔습니다. 실제 캔들 백데이터로 매수 타점 퀴즈를 반복하니 장중에 흥분하지 않게 되네요.', grad: 'grad-green' },
  { initial: '박', name: '박**', rating: '가상자산 트레이더 · 1650 RP', headline: '"알트코인 추격매수 병 완치"', text: '급등하는 알트코인 추격매수해서 물리던 버릇을 고쳤습니다. 이제는 지지와 저항 지점이 완전히 이탈되는지, 캔들이 몸통으로 마감하는지 확인하는 습관이 완전히 박혔습니다.', grad: 'grad-cyan' },
  { initial: '최', name: '최**', rating: '직장인 · 1280 RP', headline: '"제 진짜 차트 실력을 객관적으로 알게 됨"', text: '주식 공부를 많이 했다고 자부했는데, 실제 캔들 백데이터 퀴즈를 직접 풀어보니 제 오답률이 엄청났습니다. 약점 분석을 데이터로 보여주니 정신이 번쩍 드네요.', grad: 'grad-amber' }
];

const col2Reviews = [
  { initial: '정', name: '정**', rating: '직장인 투자자 · 1450 RP', headline: '"기계적인 손절을 잡을 수 있게 되었습니다"', text: '머리로는 손절선을 그리면서도 막상 체결되면 물타기 하면서 손절 라인을 무한히 뒤로 미뤘습니다. 앱에서 제공하는 리스크 관리 퀴즈를 풀며 이제 기계적으로 버튼이 나갑니다.', grad: 'grad-green' },
  { initial: '강', name: '강**', rating: '대학생 · 1150 RP', headline: '"지루하지 않게 패턴 학습이 가능합니다"', text: '개인 공부 시작하려는 입문자에게 최고의 앱입니다. 퀴즈 게임 같아서 지루하지 않게 다양한 차트 유형과 휩소 패턴을 빠르게 학습하고 익히고 있어요.', grad: 'grad-cyan' },
  { initial: '윤', name: '윤**', rating: '전업 트레이더 · 1810 RP', headline: '"차트 퀴즈 퀄리티가 상당합니다"', text: '실제 과거 캔들 백데이터를 기반으로 추출된 문제들이라 복습용으로 최고입니다. 고수 트레이더들도 휩소 필터링 감각을 리마인드하기 위해 매일 풀기 좋습니다.', grad: 'grad-amber' },
  { initial: '조', name: '조**', rating: '주부 투자자 · 1390 RP', headline: '"RSI 과매도 지표 함정을 깨달았습니다"', text: '보조지표 과매도만 보고 성급하게 진입했다가 낭패를 본 적이 많았는데, 지표 맹점 훈련을 거치며 진짜 돌파와 속임수 반등을 구별하는 눈이 생겼습니다.', grad: 'cyan' }
];

const col3Reviews = [
  { initial: '임', name: '임**', rating: '가상자산 투자자 · 1580 RP', headline: '"이론과 실전 휩소의 차이를 느껴보세요"', text: '책으로 보던 깔끔한 이론과 달리 실전 캔들이 주는 노이즈와 휩소를 어떻게 대응할지 시뮬레이션해 줍니다. 학습 등급 오를 때의 성취감도 게임처럼 쏠쏠하네요.', grad: 'grad-amber' },
  { initial: '한', name: '한**', rating: '퇴직 후 전업 · 1220 RP', headline: '"장중 심리 관리에 탁월합니다"', text: '차트 분석 능력도 중요하지만 장중에 흔들리는 멘탈을 매일 아침 트레이닝 팩으로 다잡을 수 있습니다. 뇌동매매 횟수가 이전 대비 80% 이상 확연히 줄어들었습니다.', grad: 'grad-cyan' },
  { initial: '오', name: '오**', rating: '직장인 · 1510 RP', headline: '"이론 백과의 가이드가 진짜 훌륭함"', text: '이론 백과 탭의 상세 해설과 깔끔한 작도 가이드라인이 책보다 훨씬 이해하기 편합니다. 어설픈 유튜브 강의나 책 여러 권 보는 것보다 차트몬이 확실하네요.', grad: 'grad-green' },
  { initial: '서', name: '서**', rating: '트레이더 · 1690 RP', headline: '"가짜 돌파 분별 드릴 실전 연동 최고"', text: '돌파 매매 시 가짜 돌파 분별 드릴이 실전에 바로 연동되어 큰 도움이 되었습니다. 손익비 중심의 트레이닝 구조라 초보나 전업 모두에게 강력히 추천합니다.', grad: 'grad-cyan' }
];


// Scrolling review column sub-component
const ScrollColumn = ({ reviews, direction, speedClass }: { reviews: typeof col1Reviews, direction: 'up' | 'down', speedClass: string }) => {
  return (
    <div className={`review-scroll-col col-${direction} ${speedClass}`}>
      {/* First set of reviews */}
      <div className="review-cards-set">
        {reviews.map((rev, idx) => (
          <div key={idx} className="review-card">
            <div className="review-header">
              <div className={`avatar-initial ${rev.grad}`}>{rev.initial}</div>
              <div>
                <strong>{rev.name}</strong>
                <span className="tier-badge">{rev.rating}</span>
              </div>
            </div>
            <div className="review-rating">
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <span className="verified">인증된 회원</span>
            </div>
            <h4 className="review-headline">{rev.headline}</h4>
            <p className="review-text">{rev.text}</p>
          </div>
        ))}
      </div>
      {/* Second set (duplicate for seamless loop) */}
      <div className="review-cards-set" aria-hidden="true">
        {reviews.map((rev, idx) => (
          <div key={`dup-${idx}`} className="review-card">
            <div className="review-header">
              <div className={`avatar-initial ${rev.grad}`}>{rev.initial}</div>
              <div>
                <strong>{rev.name}</strong>
                <span className="tier-badge">{rev.rating}</span>
              </div>
            </div>
            <div className="review-rating">
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <Star size={13} fill="var(--amber)" stroke="var(--amber)" />
              <span className="verified">인증된 회원</span>
            </div>
            <h4 className="review-headline">{rev.headline}</h4>
            <p className="review-text">{rev.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  // Multiple Sample Drills State
  const [drillIndex, setDrillIndex] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [drillAnswers, setDrillAnswers] = useState<Record<number, 'A' | 'B' | null>>({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [showReport, setShowReport] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [activeDrillTab, setActiveDrillTab] = useState<'explanation' | 'chart'>('explanation');
  const [countdown, setCountdown] = useState<number>(3);

  const explanationTimeoutRef = useRef<any>(null);
  const nextQuestionTimeoutRef = useRef<any>(null);
  const countdownIntervalRef = useRef<any>(null);

  const handleSelectAnswer = (key: 'A' | 'B') => {
    setDrillAnswers((prev) => ({ ...prev, [drillIndex]: key }));

    if (explanationTimeoutRef.current) clearTimeout(explanationTimeoutRef.current);
    if (nextQuestionTimeoutRef.current) clearTimeout(nextQuestionTimeoutRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

    explanationTimeoutRef.current = setTimeout(() => {
      setShowExplanation(true);
      setActiveDrillTab('explanation');
      setCountdown(3);

      if (drillIndex < 4) {
        let currentCount = 3;
        countdownIntervalRef.current = setInterval(() => {
          currentCount -= 1;
          setCountdown(currentCount);
          if (currentCount <= 0) {
            clearInterval(countdownIntervalRef.current);
            setDrillIndex((prev) => (prev + 1) as 0 | 1 | 2 | 3 | 4);
            setShowExplanation(false);
          }
        }, 1000);
      }
    }, 2000);
  };

  const goToNextDrill = () => {
    if (explanationTimeoutRef.current) clearTimeout(explanationTimeoutRef.current);
    if (nextQuestionTimeoutRef.current) clearTimeout(nextQuestionTimeoutRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    setDrillIndex((prev) => (prev + 1) as 0 | 1 | 2 | 3 | 4);
    setShowExplanation(false);
  };


  useEffect(() => {
    return () => {
      if (explanationTimeoutRef.current) clearTimeout(explanationTimeoutRef.current);
      if (nextQuestionTimeoutRef.current) clearTimeout(nextQuestionTimeoutRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, []);

  // App Features Showcase State & Autoplay
  const [activeFeature, setActiveFeature] = useState<'daily' | 'drills' | 'radar' | 'theory'>('daily');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState<boolean>(true);

  const featuresRef = useRef<HTMLDivElement>(null);

  // Sticky scroll listener for Features Showcase (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 980) return; // Disable scroll listener on mobile/tablet
      if (!featuresRef.current) return;
      const rect = featuresRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollRange = containerHeight - windowHeight;
      if (scrollRange <= 0) return;
      
      const progress = Math.max(0, Math.min(1, -rect.top / scrollRange));
      
      if (progress < 0.25) {
        setActiveFeature('daily');
      } else if (progress < 0.5) {
        setActiveFeature('drills');
      } else if (progress < 0.75) {
        setActiveFeature('radar');
      } else {
        setActiveFeature('theory');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Autoplay Slideshow Effect
  useEffect(() => {
    if (autoplay) {
      const features: ('daily' | 'drills' | 'radar' | 'theory')[] = ['daily', 'drills', 'radar', 'theory'];
      const interval = setInterval(() => {
        if (window.innerWidth > 980) return; // Do not autoplay on desktop (use sticky scroll)
        setActiveFeature((current) => {
          const nextIndex = (features.indexOf(current) + 1) % features.length;
          return features[nextIndex];
        });
      }, 3500); // Cycle every 3.5 seconds
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Handle Tab Manual Selection
  const handleFeatureTabClick = (feature: 'daily' | 'drills' | 'radar' | 'theory') => {
    setActiveFeature(feature);
    setAutoplay(false); // Stop autoplay when user interacts
    
    if (window.innerWidth > 980 && featuresRef.current) {
      const rect = featuresRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const containerTop = scrollTop + rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollRange = containerHeight - windowHeight;
      
      if (scrollRange > 0) {
        let targetProgress = 0.1;
        if (feature === 'drills') targetProgress = 0.375;
        else if (feature === 'radar') targetProgress = 0.625;
        else if (feature === 'theory') targetProgress = 0.875;
        
        window.scrollTo({
          top: containerTop + scrollRange * targetProgress,
          behavior: 'smooth'
        });
      }
    }
  };

  // Drills Data Definition
  const drills = [
    {
      title: 'Q. 저항선을 강하게 돌파하는 이 장대양봉(A 지점), 돌파 매수로 진입해야 할까요?',
      badge: '휩소 및 가짜돌파 판별 (Drill #104)',
      difficulty: 'Level 3.8',
      chart: <DrillOneChart answerSelected={drillAnswers[0] !== null} />,
      options: [
        { key: 'A', label: '돌파 매수 진입 (Buy Breakout)', correct: false },
        { key: 'B', label: '돌파 무효화 대비 관망 (Wait / Hold)', correct: true }
      ],
      explanationTitle: '💡 기술적 해설 및 핵심 단서',
      bullets: [
        {
          title: '1. 거래량 가중치 분석 (가장 중요)',
          text: '해당 양봉의 거래량이 이전 평균 거래량을 넘어서지 못했습니다. 신뢰할 수 있는 진짜 돌파는 저항선 매물을 받아내기 위한 대량 거래량이 수반되어야 합니다.'
        },
        {
          title: '2. 저항선 돌파의 무효화',
          text: '돌파 이후 즉시 이전 저항선 아래로 하향 이탈하며 가짜 돌파(Bull Trap) 패턴이 확정되었습니다. 이 경우 직전 저항선이 다시 강력한 저항으로 작동하여 하락세가 심화됩니다.'
        }
      ],
      successMsg: '정답입니다! 가짜 돌파를 성공적으로 거르고 자산을 지켰습니다.',
      failMsg: '아쉽습니다. 전형적인 Bull Trap에 노출되었습니다.'
    },
    {
      title: 'Q. 직전 저점 지지선에 도달한 이 장대음봉(C 지점), 반등을 노리고 매수(물타기)해야 할까요?',
      badge: '지지선 이탈 판별 (Drill #209)',
      difficulty: 'Level 4.2',
      chart: <DrillTwoChart answerSelected={drillAnswers[1] !== null} />,
      options: [
        { key: 'A', label: '반등 지지 매수 진입 (Buy Bounce)', correct: false },
        { key: 'B', label: '지지선 붕괴 확인 후 관망 (Wait / Stop)', correct: true }
      ],
      explanationTitle: '💡 기술적 해설 및 핵심 단서',
      bullets: [
        {
          title: '1. 강한 하락 모멘텀과 거래량',
          text: '지지선 부근에서 장대음봉과 함께 하락 거래량이 급증하는 것은 매수세가 완전히 붕괴되었음을 의미합니다. 지지선에서 매수 대기하는 것보다 지지선 이탈 확률이 매우 높습니다.'
        },
        {
          title: '2. 지지선의 저항선 전환',
          text: '지지 라인이 붕괴된 후에는 이전 지지선이 새로운 저항선으로 대치됩니다. 따라서 성급하게 매수를 받기보다 무효화 라인 이탈이 끝날 때까지 대기해야 합니다.'
        }
      ],
      successMsg: '정답입니다! 지지선 붕괴를 예측하고 섣부른 물타기를 멈췄습니다.',
      failMsg: '아쉽습니다. 매수세가 붕괴되고 지지선 이탈이 심화된 지점입니다.'
    },
    {
      title: 'Q. 보조지표 RSI가 25(과매도) 이하로 하락했습니다. 즉시 매수로 진입해야 할까요?',
      badge: 'RSI 과매도 함정 (Drill #315)',
      difficulty: 'Level 4.5',
      chart: <DrillThreeChart answerSelected={drillAnswers[2] !== null} />,
      options: [
        { key: 'A', label: '지표 과매도 즉시 매수 (Buy Oversold)', correct: false },
        { key: 'B', label: '차트 추세 반전 확인 후 진입 (Wait for Reversal)', correct: true }
      ],
      explanationTitle: '💡 기술적 해설 및 핵심 단서',
      bullets: [
        {
          title: '1. 과매도의 함정 (Oversold Trap)',
          text: 'RSI가 30 이하로 내려가 과매도 상태가 되더라도 강한 하향 추세에서는 며칠 혹은 몇 주 동안 과매도에 머물며 주가는 계속해서 폭락할 수 있습니다.'
        },
        {
          title: '2. 캔들 가격 역배열 확인',
          text: '보조지표는 가격의 후행 지표입니다. 지표만 보고 들어가기보다는 캔들의 단기 고점이 높아지거나 이중 바닥 등의 가격 반전 시그널이 차트에 출현할 때까지 진입을 유보해야 합니다.'
        }
      ],
      successMsg: '정답입니다! 지표 과매도 함정에 속지 않고 캔들 반전을 침착하게 기다렸습니다.',
      failMsg: '아쉽습니다. 지표는 과매도이지만 주가는 추가적으로 폭락한 지점입니다.'
    },
    {
      title: 'Q. 이동평균선이 골든크로스되며 거래량이 상승하는 것처럼 보이지만, 박스권 상단 저항선에 걸렸습니다. 돌파 매수로 진입해야 할까요?',
      badge: '골든크로스 함정 (Drill #412)',
      difficulty: 'Level 4.6',
      chart: <DrillFourChart answerSelected={drillAnswers[3] !== null} />,
      options: [
        { key: 'A', label: '추세 추종 돌파 매수 (Buy Breakout)', correct: false },
        { key: 'B', label: '저항선 확실한 돌파 확인 후 관망 (Wait for Breakout)', correct: true }
      ],
      explanationTitle: '💡 기술적 해설 및 핵심 단서',
      bullets: [
        {
          title: '1. 박스권 저항과 이평선의 후행성',
          text: '이동평균선 골든크로스는 후행성 지표로, 이미 상승이 꽤 진행된 상태에서 발생합니다. 특히 상단의 강력한 박스권 저항대를 앞두고 있을 때는 저항 매물로 인해 쉽게 밀릴 수 있습니다.'
        },
        {
          title: '2. 거래량과 꼬리 캔들의 분석',
          text: '저항선 근처에서 긴 위꼬리를 가진 음봉이 출현하면 매도 압력이 매우 강함을 뜻합니다. 돌파를 확실히 매듭짓고 종가가 안착하는 것을 확인한 후에 대응하는 것이 안전합니다.'
        }
      ],
      successMsg: '정답입니다! 이평선 골든크로스 함정에 속지 않고 저항선 대기 후 리스크를 회피했습니다.',
      failMsg: '아쉽습니다. 상단 매물대 저항에 가로막혀 즉시 하락 반전하는 함정 구간이었습니다.'
    },
    {
      title: 'Q. 헤드앤숄더 패턴의 넥라인이 무너진 후, 다시 지지선 근처까지 반등(Pullback)이 나왔습니다. 매수로 물타거나 신규 매수로 진입해야 할까요?',
      badge: '넥라인 리테스트 판별 (Drill #521)',
      difficulty: 'Level 4.9',
      chart: <DrillFiveChart answerSelected={drillAnswers[4] !== null} />,
      options: [
        { key: 'A', label: '넥라인 복귀 기대 매수 (Buy Bounce)', correct: false },
        { key: 'B', label: '저항선 전환 확인 후 대기/손절 (Short / Wait)', correct: true }
      ],
      explanationTitle: '💡 기술적 해설 및 핵심 단서',
      bullets: [
        {
          title: '1. 지지의 저항 전환 법칙 (Support-Resistance Swap)',
          text: '한번 강하게 뚫린 주요 지지선(넥라인)은 반등 시 매우 강력한 저항선 역할을 하게 됩니다. 이 구간에서의 반등은 매수 기회가 아닌 탈출이나 숏(Short) 포지션 진입의 최적 타이밍입니다.'
        },
        {
          title: '2. 거래량의 수축',
          text: '반등 국면에서 거래량이 눈에 띄게 수축하면 매수 주체가 부재함을 의미하며, 저항선을 뚫지 못하고 2차 급락(하락 3파)으로 이어질 위험이 지극히 높습니다.'
        }
      ],
      successMsg: '정답입니다! 넥라인 리테스트 저항을 파악하고 하락 3파 급락을 피하셨습니다.',
      failMsg: '아쉽습니다. 지지선 붕괴 후 저항선으로 대치되어 급격히 무너진 전형적인 하락 지속형 반등이었습니다.'
    }
  ];

  const currentDrill = drills[drillIndex];
  const activeAnswer = drillAnswers[drillIndex];

  // Calculate score on final step
  const score = Object.keys(drillAnswers).reduce((acc, idx) => {
    const drillIdx = parseInt(idx);
    const correctAns = drills[drillIdx].options.find(o => o.correct)?.key;
    return acc + (drillAnswers[drillIdx] === correctAns ? 1 : 0);
  }, 0);

  const resetAllDrills = () => {
    if (explanationTimeoutRef.current) clearTimeout(explanationTimeoutRef.current);
    if (nextQuestionTimeoutRef.current) clearTimeout(nextQuestionTimeoutRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    setDrillAnswers({ 0: null, 1: null, 2: null, 3: null, 4: null });
    setDrillIndex(0);
    setShowExplanation(false);
    setShowReport(false);
  };

  return (
    <>
      <main>
        {/* Navigation */}
        <header className="site-nav">
          <a className="brand-mark" href="#top" aria-label="ChartMon">
            <img src="/icon.svg" className="brand-logo" alt="ChartMon" />
            <span>ChartMon</span>
          </a>
          <nav className="nav-links" aria-label="주요 섹션">
            <a href="#drill-test">실전 문제 체험</a>
            <a href="#features">기능 소개</a>
            <a href="#reviews">유저 리뷰</a>
          </nav>
          <a className="nav-cta" href="#drill-test">
            <Play size={12} fill="currentColor" />
            실전 퀴즈 풀기
          </a>
        </header>

        {/* Hero Section */}
        <section className="hero-section" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <Zap size={14} />
              실전 트레이더를 위한 차트 근육 트레이너
            </div>
            <h1>
              차트 이론을 외워도
              <br />
              매수 버튼 앞에서 <span style={{ whiteSpace: 'nowrap' }}>흔들리나요?</span>
            </h1>
            <p className="hero-subcopy">
              단순 지지와 저항 공식을 아는 것과, 실전 차트의 수많은 노이즈 속에서 휩소(Whipsaw)를 구별해내는 것은 다른 차원의 문제입니다.
              차트몬은 실제 캔들 백데이터를 바탕으로 한 AI 학습 기반 레이팅 문제를 통해, 나쁜 매매 습관과 심리 오작동을 교정하는 차트 훈련 시스템입니다.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#drill-test">
                실전 차트 문제 풀어보기
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#features">
                핵심 기능 모아보기
                <ChevronRight size={18} />
              </a>
            </div>
            <div className="trust-row">
              <span>
                <Timer size={14} /> 매일 15분 루틴
              </span>
              <span>
                <Target size={14} /> 2,000+ 실제 캔들 백데이터
              </span>
              <span>
                <Flame size={14} /> 오답 원인 분석 리포트
              </span>
            </div>
          </div>

          {/* Premium UI Floating Card Stack (Replaces phone mockup) */}
          <div className="hero-visual" aria-label="ChartMon 앱 대시보드 미리보기">
            <div className="hero-card-stack">
              {/* Card 1: ELO & Mission */}
              <div className="hero-stack-card card-elo">
                <div className="card-header-row">
                  <span className="user-name">트레이더 K</span>
                  <span className="user-tier">Gold I</span>
                </div>
                <div className="elo-value-row">
                  <strong>1,680 RP</strong>
                  <span className="rating-up">+15 RP (오늘)</span>
                </div>
                <div className="mission-progress">
                  <div className="progress-text">
                    <span>오늘의 미션 달성도</span>
                    <strong>80%</strong>
                  </div>
                  <div className="progress-bar-thin">
                    <div className="fill" style={{ width: '80%' }} />
                  </div>
                </div>
                <div className="streak-badge-row">
                  <Flame size={14} className="color-amber" />
                  <span>12일 연속 훈련 완료</span>
                </div>
              </div>

              {/* Card 2: Analysis Leak */}
              <div className="hero-stack-card card-leak">
                <div className="leak-badge-row">
                  <ShieldAlert size={14} className="color-red" />
                  <span>AI 약점 진단 경고</span>
                </div>
                <h3>리스크 관리 취약점 분석됨</h3>
                <div className="leak-metric-row">
                  <span>손익비 준수율</span>
                  <strong className="color-red">32%</strong>
                </div>
                <p className="leak-tip">
                  손절선 무효화 라인 리테스트 문제 위주로 AI 맞춤 문제집이 추천됩니다.
                </p>
              </div>

              {/* Card 3: Mini Drill Screen */}
              <div className="hero-stack-card card-mini-drill">
                <div className="drill-tag-row">
                  <span>실전 Drill #104</span>
                  <span className="status-correct">정답</span>
                </div>
                <div className="mini-chart-visual">
                  <svg viewBox="0 0 160 80" className="mini-chart-svg">
                    <line x1="10" y1="50" x2="150" y2="50" stroke="rgba(255, 255, 255, 0.1)" strokeDasharray="3 3" />
                    <path d="M 20,70 L 40,60 L 60,65 L 80,45 L 100,52 L 120,30 L 140,55" fill="none" stroke="var(--red)" strokeWidth="1.5" />
                    <circle cx="120" cy="30" r="3" fill="var(--cyan)" />
                  </svg>
                </div>
                <div className="mini-drill-choices">
                  <span className="choice-btn">A. 돌파 매수</span>
                  <span className="choice-btn active">B. 관망 (대기)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metric Band removed */}

        {/* Shorts Section (Typical Leaks) */}
        <section className="shortform-section">
          <div className="section-heading">
            <span className="section-kicker">Common Account Leaks</span>
            <h2>대다수 개인 투자자의 계좌를 파산시키는 3대 함정</h2>
          </div>
          <div className="shortform-grid">
            <article>
              <span className="num-badge">01</span>
              <h3>쌍바닥의 함정</h3>
              <p>쌍바닥 지지만 믿고 진입했다가 직전 저점 지지선이 붕괴(휩소)하며 강제 청산당하는 실패 케이스를 교정합니다.</p>
            </article>
            <article>
              <span className="num-badge">02</span>
              <h3>과매도 지표의 맹신</h3>
              <p>RSI가 과매도(30 이하)라는 단순 수치만 맹신하고 매수했다가 무제한 지하실을 겪는 지연적 하락을 판별합니다.</p>
            </article>
            <article>
              <span className="num-badge">03</span>
              <h3>고승률 파산의 법칙</h3>
              <p>평소 작은 수익은 여러 번 누적하지만, 단 한 번의 손절 지연으로 계좌가 완전히 반토막 나는 구조적 한계를 훈련을 통해 깨닫게 만듭니다.</p>
            </article>
          </div>
        </section>

        {/* Interactive Sample Drills Game */}
        <section className="diagnosis-section" id="drill-test">
          <div className="section-heading">
            <span className="section-kicker">Interactive Sample Drill</span>
            <h2>실전 차트 휩소(속임수) 판별 테스트</h2>
            <p>
              차트몬 앱의 실제 문제를 직접 풀어보세요. 선택 즉시 향후 가격 흐름과 함께 상세한 기술적 해설이 공개됩니다.
            </p>
          </div>

          <div className="sample-drill-container">
            <div className="drill-card">
              {!showReport ? (
                <>
                  <div className="drill-card-header">
                    <span className="drill-badge">{currentDrill.badge}</span>
                    <span className="difficulty-tag">진행도: {drillIndex + 1} / 5 | {currentDrill.difficulty}</span>
                  </div>
                  
                  <div className="drill-question">
                    <h3>{currentDrill.title}</h3>
                  </div>

                  {showExplanation && (
                    <div className="drill-tabs-row fade-in">
                      <button
                        className={`drill-tab-btn ${activeDrillTab === 'explanation' ? 'active' : ''}`}
                        onClick={() => setActiveDrillTab('explanation')}
                      >
                        기술적 해설
                      </button>
                      <button
                        className={`drill-tab-btn ${activeDrillTab === 'chart' ? 'active' : ''}`}
                        onClick={() => setActiveDrillTab('chart')}
                      >
                        차트 확인
                      </button>
                    </div>
                  )}

                  <div className="drill-chart-wrapper">
                    {showExplanation && activeDrillTab === 'explanation' ? (
                      <div className="drill-explanation-content fade-in">
                        <h4>{currentDrill.explanationTitle}</h4>
                        <div className="explanation-bullet-grid">
                          {currentDrill.bullets.map((bullet, idx) => (
                            <div className="bullet-item" key={idx}>
                              <strong>{bullet.title}</strong>
                              <p>{bullet.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      currentDrill.chart
                    )}
                  </div>

                  {!showExplanation ? (
                    <div className="drill-options-grid">
                      {currentDrill.options.map((opt) => {
                        const hasSelectedThisOpt = activeAnswer === opt.key;
                        const hasAnsweredCurrent = activeAnswer !== null;
                        
                        let btnClass = '';
                        if (hasSelectedThisOpt) {
                          btnClass = opt.correct ? 'selected correct' : 'selected wrong';
                        } else if (hasAnsweredCurrent) {
                          btnClass = 'muted';
                        }

                        return (
                          <button
                            key={opt.key}
                            className={`drill-opt-btn ${btnClass}`}
                            disabled={hasAnsweredCurrent}
                            onClick={() => handleSelectAnswer(opt.key as 'A' | 'B')}
                          >
                            <span className="btn-key">{opt.key}</span>
                            <span className="btn-label">{opt.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="drill-result-actions fade-in">
                      <div className="result-info-pane">
                        <div className="result-status-row">
                          <span className={`compact-result-badge ${activeAnswer === currentDrill.options.find(o => o.correct)?.key ? 'correct' : 'wrong'}`}>
                            {activeAnswer === currentDrill.options.find(o => o.correct)?.key ? '정답' : '오답'}
                          </span>
                          <span className="result-message">
                            {activeAnswer === currentDrill.options.find(o => o.correct)?.key 
                              ? currentDrill.successMsg 
                              : currentDrill.failMsg}
                          </span>
                        </div>
                      </div>
                      
                      <div className="action-buttons-group">
                        {drillIndex < 4 ? (
                          <button className="quiz-next-btn" onClick={goToNextDrill}>
                            다음 문제 ({drillIndex + 2}/5) · {countdown}초
                          </button>
                        ) : (
                          <button className="quiz-next-btn" onClick={() => setShowReport(true)}>
                            종합 진단 보고서 확인
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Final Diagnostic Report Card
                <div className="drill-report-pane fade-in">
                  <div className="drill-card-header">
                    <span className="drill-badge success" style={{ color: 'var(--green)', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>실전 차트 판독 리포트</span>
                    <span className="difficulty-tag">진단 완료</span>
                  </div>

                  <div className="report-summary-box">
                    <div className="accuracy-pane">
                      <span>차트 판독 정확도</span>
                      <strong>{Math.round((score / 5) * 100)}% <span className="score-fraction">({score}/5 정답)</span></strong>
                    </div>
                    
                    <div className="evaluation-pane">
                      <span>종합 분석 의견</span>
                      <p>
                        {score === 5 
                          ? '축하합니다! 거래량 속임수, 지지 붕괴, RSI 과매도 trap, 골든크로스 함정, 헤드앤숄더 넥라인 리테스트 등 모든 실전 차트의 위험 요소를 완벽히 피해갔습니다. 차트의 원칙을 고수하는 최고의 트레이더입니다.' 
                          : score >= 3 
                            ? '준수한 정확도이지만 특정 휩소 구간이나 보조지표의 함정에 속아 거래 손실을 초래할 수 있습니다. 취약 유형의 집중 반복 훈련을 통해 오판율을 낮출 필요가 있습니다.'
                            : '매매 진입이 성급하고 추세의 방향성보다 지표 및 돌파 장대양봉 자체에 흥분하는 경향이 큽니다. 리스크 관리와 손절 지점 무효화 훈련이 시급합니다.'}
                      </p>
                    </div>
                  </div>

                  <div className="prescription-card">
                    <div className="card-kicker">
                      <Target size={15} /> 추천 훈련 처방전
                    </div>
                    <strong className="prescription-title">
                      {score === 5 
                        ? '고급 포지션 사이징 & 파산 법칙 훈련' 
                        : score >= 3 
                          ? 'RSI 과매도 필터 및 무효화 라인 리테스트 훈련' 
                          : '돌파 휩소 차단 및 리스크 오답 복기 훈련'}
                    </strong>
                    <p className="prescription-desc">
                      오답 원인을 분석하여 개인화된 맞춤형 보완 훈련 패키지를 매칭하고 즉각적인 능력 보정 훈련에 돌입합니다.
                    </p>
                  </div>

                  <div className="report-action-row">
                    <a className="download-button" href="https://play.google.com/store" target="_blank" rel="noreferrer" style={{ flex: 1, padding: '16px' }}>
                      Google Play에서 무료 시작하기
                    </a>
                    <button className="retry-btn" onClick={resetAllDrills}>
                      <RefreshCw size={14} />
                      처음부터 다시 풀기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Feature Hub Section (Interactive Showcase with Sticky Scroll) */}
        <div className="features-scroll-wrapper" ref={featuresRef}>
          <section className="system-section sticky-features" id="features">
            <div className="section-heading">
              <span className="section-kicker">Core Features</span>
              <h2>차트몬이 제공하는 핵심 트레이닝 기능</h2>
              <p>
                단순히 지식을 암기하는 것이 아니라, 실제 캔들 백데이터를 통해 실전 차트 감각을 키우도록 설계되었습니다.
              </p>
            </div>

            <div className="showcase-container">
            {/* Left Column: Tab Selectors */}
            <div className="showcase-tabs">
              <button 
                className={`showcase-tab ${activeFeature === 'daily' ? 'active' : ''}`}
                onClick={() => handleFeatureTabClick('daily')}
              >
                <div className="tab-icon-wrapper">
                  <Flame size={18} />
                </div>
                <div className="tab-text-wrapper">
                  <h3>일일 맞춤 훈련 (Daily Routine)</h3>
                  <p>나의 약점과 현재 실력 등급(RP)에 맞는 차트 문제를 매일 아침 자동 구성합니다.</p>
                </div>
              </button>

              <button 
                className={`showcase-tab ${activeFeature === 'drills' ? 'active' : ''}`}
                onClick={() => handleFeatureTabClick('drills')}
              >
                <div className="tab-icon-wrapper">
                  <Target size={18} />
                </div>
                <div className="tab-text-wrapper">
                  <h3>테마별 훈련소 (Drill Gym)</h3>
                  <p>돌파 매매, 지지선 붕괴, RSI 과매도 등 내가 원하는 세부 테마만 모아 집중 복습합니다.</p>
                </div>
              </button>

              <button 
                className={`showcase-tab ${activeFeature === 'radar' ? 'active' : ''}`}
                onClick={() => handleFeatureTabClick('radar')}
              >
                <div className="tab-icon-wrapper">
                  <BarChart3 size={18} />
                </div>
                <div className="tab-text-wrapper">
                  <h3>8대 매매 능력 통계 (Analytics)</h3>
                  <p>캔들 분석력, 리스크 관리, 추세 판단 등 거래 데이터를 기반으로 취약점을 계량화합니다.</p>
                </div>
              </button>

              <button 
                className={`showcase-tab ${activeFeature === 'theory' ? 'active' : ''}`}
                onClick={() => handleFeatureTabClick('theory')}
              >
                <div className="tab-icon-wrapper">
                  <Timer size={18} />
                </div>
                <div className="tab-text-wrapper">
                  <h3>트레이더 이론 백과 (Library)</h3>
                  <p>이론이 실전에 어떻게 적용되는지, 고화질 수작업 다이어그램과 해설 가이드를 수록했습니다.</p>
                </div>
              </button>
            </div>

            {/* Right Column: Screen Previews inside a Minimalistic Smartphone Frame */}
            <div className="showcase-mockup-pane">
              <div className="phone-shell">
                <div className="phone-screen-container">
                  <div className="phone-screen-header">
                    <span>ChartMon Pro</span>
                    <div className="battery-row">
                      <span>LTE</span>
                      <span className="battery-bar" />
                    </div>
                  </div>

                  {activeFeature === 'daily' && (
                    <div className="mock-screen daily-screen fade-in-fast">
                      <div className="mock-header">
                        <div>
                          <span className="sub">Today Routine</span>
                          <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: 800 }}>일일 맞춤 훈련</h3>
                        </div>
                        <span className="badge-rp" style={{ background: 'rgba(35, 209, 139, 0.15)', color: 'var(--green)', border: '1px solid rgba(35, 209, 139, 0.25)' }}>1680 RP</span>
                      </div>

                      <div className="daily-stats-row" style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                        <div className="stat-card-small" style={{ flex: 1, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px' }}>
                          <span style={{ fontSize: '8px', color: 'var(--muted)', display: 'block' }}>오늘의 달성률</span>
                          <strong style={{ fontSize: '14px', color: '#fff', display: 'block', marginTop: '2px' }}>80%</strong>
                        </div>
                        <div className="stat-card-small" style={{ flex: 1, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px' }}>
                          <span style={{ fontSize: '8px', color: 'var(--muted)', display: 'block' }}>연속 스트릭</span>
                          <strong style={{ fontSize: '14px', color: 'var(--amber)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '2px' }}><Flame size={12} fill="var(--amber)" />12일</strong>
                        </div>
                      </div>

                      <div className="streak-days" style={{ marginTop: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)', padding: '8px', borderRadius: '8px' }}>
                        <div className="streak-days-list" style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span className="day completed">월</span>
                          <span className="day completed">화</span>
                          <span className="day completed">수</span>
                          <span className="day completed">목</span>
                          <span className="day completed">금</span>
                          <span className="day active">토</span>
                          <span className="day">일</span>
                        </div>
                      </div>

                      <div className="daily-task-card" style={{ marginTop: 'auto', background: 'rgba(12, 17, 25, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <strong style={{ color: '#fff', fontSize: '12px', display: 'block' }}>휩소 및 리스크 제어 세트</strong>
                        <p style={{ fontSize: '9px', color: 'var(--muted)', margin: '2px 0 8px' }}>5문제 중 4문제 완료 (80%)</p>
                        <div className="progress-bar-thin">
                          <div className="fill" style={{ width: '80%' }} />
                        </div>
                        <button className="mock-cta-button" style={{ background: 'linear-gradient(90deg, var(--cyan) 0%, #0091ea 100%)', color: '#fff' }}>오늘의 훈련 이어하기</button>
                      </div>
                    </div>
                  )}

                  {activeFeature === 'drills' && (
                    <div className="mock-screen drills-screen fade-in-fast">
                      <div className="mock-sub-header" style={{ marginBottom: '10px' }}>테마별 집중 훈련소</div>
                      
                      <div className="theory-cards-stack">
                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>1. 돌파 및 가짜돌파 (Breakouts)</strong>
                            <div className="mock-progress-row" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                              <div className="progress-bar-thin" style={{ width: '50px', margin: 0 }}><div className="fill" style={{ width: '78%' }} /></div>
                              <span style={{ fontSize: '8px', color: 'var(--muted)' }}>정답률 78% · 128문제</span>
                            </div>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>

                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>2. 지지와 저항 (Support & Resistance)</strong>
                            <div className="mock-progress-row" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                              <div className="progress-bar-thin" style={{ width: '50px', margin: 0 }}><div className="fill" style={{ width: '85%' }} /></div>
                              <span style={{ fontSize: '8px', color: 'var(--muted)' }}>정답률 85% · 96문제</span>
                            </div>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>

                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>3. RSI 과매도 함정 (RSI Traps)</strong>
                            <div className="mock-progress-row" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                              <div className="progress-bar-thin" style={{ width: '50px', margin: 0 }}><div className="fill" style={{ width: '64%' }} /></div>
                              <span style={{ fontSize: '8px', color: 'var(--muted)' }}>정답률 64% · 42문제</span>
                            </div>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>

                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>4. 포지션 사이징 수학 (Risk Sizing)</strong>
                            <div className="mock-progress-row" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                              <div className="progress-bar-thin" style={{ width: '50px', margin: 0 }}><div className="fill" style={{ width: '52%' }} /></div>
                              <span style={{ fontSize: '8px', color: 'var(--muted)' }}>정답률 52% · 18문제</span>
                            </div>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeFeature === 'radar' && (
                    <div className="mock-screen radar-screen fade-in-fast">
                      <div className="mock-sub-header" style={{ marginBottom: '8px' }}>8대 매매 능력치 분석</div>
                      
                      <div className="mock-radar-chart-container" style={{ display: 'grid', placeItems: 'center', height: '140px', position: 'relative' }}>
                        <svg viewBox="0 0 160 160" style={{ width: '130px', height: '130px' }}>
                          {/* Outer Octagon Grid Line (R=60) */}
                          <polygon points="140,80 122.4,122.4 80,140 37.6,122.4 20,80 37.6,37.6 80,20 122.4,37.6" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                          {/* Middle Octagon Grid Line (R=40) */}
                          <polygon points="120,80 108.3,108.3 80,120 51.7,108.3 40,80 51.7,51.7 80,40 108.3,51.7" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1" />
                          {/* Inner Octagon Grid Line (R=20) */}
                          <polygon points="100,80 94.1,94.1 80,100 65.9,94.1 60,80 65.9,65.9 80,60 94.1,65.9" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                          
                          {/* Axis lines */}
                          <line x1="80" y1="20" x2="80" y2="140" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                          <line x1="20" y1="80" x2="140" y2="80" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                          <line x1="37.6" y1="37.6" x2="122.4" y2="122.4" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                          <line x1="37.6" y1="122.4" x2="122.4" y2="37.6" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />

                          {/* Skill Polygon (Calculated values) */}
                          <polygon points="125,80 105.5,105.5 80,129 67.3,92.7 41,80 50.3,50.3 80,47 113.9,46.1" fill="rgba(41, 182, 246, 0.25)" stroke="var(--cyan)" strokeWidth="1.5" />
                          
                          {/* Labels */}
                          <text x="80" y="15" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="700">추세판단</text>
                          <text x="145" y="82" textAnchor="start" fill="#fff" fontSize="6.5" fontWeight="700">캔들분석</text>
                          <text x="80" y="150" textAnchor="middle" fill="#fff" fontSize="6.5" fontWeight="700">자금관리</text>
                          <text x="15" y="82" textAnchor="end" fill="#fff" fontSize="6.5" fontWeight="700">보조지표</text>
                          
                          <text x="127" y="34" textAnchor="start" fill="rgba(255, 255, 255, 0.5)" fontSize="5.5">복기훈련</text>
                          <text x="127" y="129" textAnchor="start" fill="rgba(255, 255, 255, 0.5)" fontSize="5.5">지지저항</text>
                          <text x="33" y="129" textAnchor="end" fill="rgba(255, 255, 255, 0.5)" fontSize="5.5">매매속도</text>
                          <text x="33" y="34" textAnchor="end" fill="rgba(255, 255, 255, 0.5)" fontSize="5.5">멘탈제어</text>
                        </svg>
                      </div>

                      <div className="mock-feedback-box green-box" style={{ marginTop: 'auto', background: 'rgba(255, 91, 103, 0.05)', borderColor: 'rgba(255, 91, 103, 0.15)' }}>
                        <strong className="color-red" style={{ fontSize: '10px', display: 'block', marginBottom: '3px' }}>💡 AI 권장 가이드</strong>
                        <p style={{ color: '#ffb9bf', fontSize: '9px', lineHeight: 1.4 }}>손절 지연으로 인한 자금 운용 규칙 미준수 패턴이 분석됩니다. 실전 훈련소에서 [포지션 사이징] 훈련을 진행하십시오.</p>
                      </div>
                    </div>
                  )}

                  {activeFeature === 'theory' && (
                    <div className="mock-screen theory-screen fade-in-fast">
                      <div className="mock-sub-header" style={{ marginBottom: '10px' }}>트레이더 이론 백과</div>

                      <div className="theory-cards-stack">
                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>1강. 지지와 저항 기본 작도론</strong>
                            <span style={{ fontSize: '8px', color: 'var(--cyan)', display: 'block', marginTop: '2px' }}>⏱️ 12분 · 실습 일러스트 포함</span>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>

                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>2강. 다중 바닥 패턴과 휩소 필터</strong>
                            <span style={{ fontSize: '8px', color: 'var(--cyan)', display: 'block', marginTop: '2px' }}>⏱️ 15분 · 실습 일러스트 포함</span>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>

                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>3강. 포지션 사이징과 자산 분배</strong>
                            <span style={{ fontSize: '8px', color: 'var(--cyan)', display: 'block', marginTop: '2px' }}>⏱️ 20분 · 실습 일러스트 포함</span>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>

                        <div className="mock-theory-card" style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                          <div className="info">
                            <strong style={{ fontSize: '11px' }}>4강. 분봉 휩소 제거 분류 공식</strong>
                            <span style={{ fontSize: '8px', color: 'var(--cyan)', display: 'block', marginTop: '2px' }}>⏱️ 18분 · 실습 일러스트 포함</span>
                          </div>
                          <span className="badge-free" style={{ color: 'var(--cyan)', background: 'rgba(41, 182, 246, 0.1)', fontSize: '8px', padding: '1px 4px' }}>무료</span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

        {/* Feature Grid (Clean, simple card style) */}
        <section className="features-grid-section">
          <div className="grid-heading">
            <span className="section-kicker">Core Principles</span>
            <h2>단순 지식 암기가 아닌 실전 차트 감각을 훈련하는 방법</h2>
          </div>
          <div className="feature-grid">
            <article>
              <div className="feature-icon"><Brain /></div>
              <h3>AI 맞춤 난이도 제어</h3>
              <p>나의 정답률과 소요 시간을 트래킹하여 문제 풀이 난이도를 실시간으로 조율합니다.</p>
            </article>
            <article>
              <div className="feature-icon"><Activity /></div>
              <h3>AI 학습 평가 레이팅</h3>
              <p>기계적인 문제 반복이 아니라 본인의 실력 성장에 상응하여 랭킹 점수(RP)를 계산합니다.</p>
            </article>
            <article>
              <div className="feature-icon"><BarChart3 /></div>
              <h3>8대 스킬 레이더 분석</h3>
              <p>진입 속도, 손익비 조율, 지표 신뢰성 등 트레이딩 능력치를 다각도로 세분화하여 측정합니다.</p>
            </article>
            <article>
              <div className="feature-icon"><ShieldAlert /></div>
              <h3>리스크 시뮬레이션</h3>
              <p>매매 기법의 승률보다 자산 보존에 직결되는 자금 운용 규칙을 직접 적용하며 연습합니다.</p>
            </article>
          </div>
        </section>

        {/* Reviews Section (Infinite Scrolling Columns) */}
        <section className="reviews-section" id="reviews">
          <div className="section-heading">
            <span className="section-kicker">Verified Reviews</span>
            <h2>실전 차트 트레이닝을 경험한 유저들</h2>
            <p>뇌동매매와 손절 실수를 줄이고 안정적인 투자 우위를 구축한 트레이더들의 증명입니다.</p>
          </div>
          
          <div className="reviews-scroller-container">
            <div className="reviews-scroller-grid">
              <ScrollColumn reviews={col1Reviews} direction="up" speedClass="col-up" />
              <ScrollColumn reviews={col2Reviews} direction="down" speedClass="col-down" />
              <ScrollColumn reviews={col3Reviews} direction="up" speedClass="col-up-slow" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" id="faq" style={{
          padding: '100px 20px',
          maxWidth: '760px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <div className="section-heading" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-kicker" style={{ 
              display: 'inline-block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#10b981',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '12px'
            }}>FAQ</span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em', margin: '0 0 16px 0' }}>자주 묻는 질문</h2>
            <p style={{ fontSize: '15px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>차트몬 트레이너의 핵심 기능과 과학적인 차트 훈련 이론에 대한 답변입니다.</p>
          </div>

          <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            {[
              {
                q: "차트몬은 어떤 서비스인가요?",
                a: "차트몬은 주식 및 가상자산의 실제 과거 캔들 데이터를 활용해 캔들 매매를 시뮬레이션하고, 개인의 트레이딩 성향을 분석해주는 교육용 AI 차트 훈련 플랫폼입니다. 단순 이론 암기가 아닌, 실전 차트 데이터의 다양한 변곡점 속에서 기계적인 리스크 관리와 진입 기준을 훈련하도록 설계되었습니다."
              },
              {
                q: "트레이닝 점수(RP)와 리그 등급은 어떻게 결정되나요?",
                a: "체계적인 실력 진단을 위해 체스나 e스포츠에서 검증된 ELO 기반의 RP(Rating Point) 레이팅 시스템을 도입했습니다. 사용자가 차트 퀴즈와 훈련을 해결할 때마다 실시간으로 점수가 갱신되며, 브론즈부터 마스터까지의 리그 티어를 통해 자신의 차트 분석 실력이 전 세계 트레이더들 사이에서 어느 수준인지 정량적으로 보여줍니다."
              },
              {
                q: "AI 오답 분석 리포트는 어떤 피드백을 제공하나요?",
                a: "유저의 거래 이력에서 캔들 분석력, 추세 추종 정확성, 진입 손익비 등 8가지 트레이딩 핵심 평가 지표를 분석합니다. 훈련 종료 시 사용자가 어떤 심리적 트랩(예: 돌파 휩소 속임수, 뇌동매매 등)에 취약한지 원인을 분석하고, 개인화된 최적의 오답 보완 코스를 처방전 형태로 설계해 줍니다."
              },
              {
                q: "차트 데이터는 실제 시장 데이터를 사용하나요?",
                a: "네, 100% 실제 데이터입니다. 차트몬의 모든 문제는 임의로 그려낸 가짜 차트가 아니라 비트코인, 이더리움 및 글로벌 주요 전통 자산의 수십만 개 실제 역사적 캔들 백데이터(Historical Candlestick Backdata)를 분석하여 제작되었습니다. 실제 주가 움직임 속의 거친 노이즈와 속임수 무빙을 그대로 재현하여 실감 나는 매매 훈련이 가능합니다."
              }
            ].map((faq, index) => {
              const isOpen = expandedFaq === index;
              return (
                <div 
                  key={index} 
                  style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                    transition: 'border-color 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '24px 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      color: isOpen ? '#f8fafc' : '#cbd5e1',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontSize: '16px',
                      fontWeight: 600,
                      gap: '24px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (!isOpen) e.currentTarget.style.color = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (!isOpen) e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    <span>{faq.q}</span>
                    <span 
                      style={{ 
                        fontSize: '22px', 
                        fontWeight: 300,
                        color: isOpen ? '#10b981' : '#64748b',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease',
                        display: 'inline-block',
                        lineHeight: '1',
                        userSelect: 'none'
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div 
                    style={{
                      maxHeight: isOpen ? '200px' : '0',
                      opacity: isOpen ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <p style={{ 
                      margin: '0 0 24px 0', 
                      fontSize: '14.5px', 
                      color: '#94a3b8', 
                      lineHeight: '1.7',
                      textAlign: 'left'
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta" id="download">
          <Zap size={28} />
          <h2>잃고 나서 복기하지 말고,<br />잃기 전에 훈련을 시작하세요.</h2>
          <p>
            체계적인 실전 차트 트레이닝을 통해 감정적 매매를 배제하고 기계적인 리스크 관리를 체득하세요.
          </p>
          <a className="primary-button" href="https://play.google.com/store" target="_blank" rel="noreferrer">
            Google Play에서 시작하기
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="brand-mark">
              <img src="/icon.svg" className="brand-logo" alt="ChartMon" />
              <span>ChartMon</span>
            </div>
            <p className="footer-tagline">나만의 AI 주식 차트 트레이너, 차트몬</p>
            <p className="footer-company" style={{ fontSize: '13px', color: 'var(--muted)', marginTop: '4px' }}>사이스페이스(주)</p>
            <p className="footer-contact">문의: <a href="mailto:contact@42space.net">contact@42space.net</a></p>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-links-col">
              <h4>서비스</h4>
              <a href="#drill-test">실전 문제 체험</a>
              <a href="#features">기능 소개</a>
            </div>
            <div className="footer-links-col">
              <h4>고객지원 & 법적고지</h4>
              <a href="/terms.html" target="_blank" rel="noreferrer">이용약관</a>
              <a href="/privacy.html" target="_blank" rel="noreferrer">개인정보 처리방침</a>
              <a href="/contact.html" target="_blank" rel="noreferrer">문의 및 피드백</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            <strong>투자 면책 고지</strong>: 차트몬에서 제공하는 모든 퀴즈, 주식 차트 해설 및 정보는 오직 교육 및 모의 분석 훈련 목적으로만 제공됩니다. 실제 어떠한 주식, 가상자산, 금융 상품의 매수/매도 권유나 투자 조언이 아니며, 본 정보를 참고한 모든 거래에 따른 투자 결과 및 손실에 대한 책임은 이용자 본인에게 귀속됩니다.
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} 사이스페이스(주). All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

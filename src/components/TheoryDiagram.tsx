import React from 'react';

export type TheoryDiagramType =
  | 'ohlc'
  | 'candles'
  | 'support-resistance'
  | 'market-structure'
  | 'breakout'
  | 'volume'
  | 'indicator'
  | 'multitimeframe'
  | 'risk-reward'
  | 'execution'
  | 'journal';

interface TheoryDiagramProps {
  type: TheoryDiagramType;
  caption: string;
}

const Grid = () => (
  <>
    {[40, 80, 120, 160].map(y => <line key={`h-${y}`} x1="18" y1={y} x2="402" y2={y} className="theory-grid-line" />)}
    {[70, 130, 190, 250, 310, 370].map(x => <line key={`v-${x}`} x1={x} y1="18" x2={x} y2="188" className="theory-grid-line" />)}
  </>
);

const Ohlc = () => (
  <>
    <Grid />
    {/* Bullish Candle */}
    <line x1="74" y1="36" x2="74" y2="170" className="bull-stroke" />
    <rect x="52" y="72" width="44" height="62" rx="3" className="bull-fill" />
    <text x="74" y="26" textAnchor="middle">고가 (H)</text>
    <text x="74" y="184" textAnchor="middle">저가 (L)</text>
    <text x="74" y="66" textAnchor="middle">종가 (C)</text>
    <text x="74" y="149" textAnchor="middle">시가 (O)</text>

    {/* Bearish Candle */}
    <line x1="194" y1="34" x2="194" y2="174" className="bear-stroke" />
    <rect x="172" y="70" width="44" height="70" rx="3" className="bear-fill" />
    <text x="194" y="26" textAnchor="middle">고가 (H)</text>
    <text x="194" y="184" textAnchor="middle">저가 (L)</text>
    <text x="194" y="64" textAnchor="middle">시가 (O)</text>
    <text x="194" y="155" textAnchor="middle">종가 (C)</text>

    {/* Price Path (OHLC Concept) */}
    <path d="M 285 130 C 305 170, 310 30, 335 40 C 355 60, 360 160, 385 90" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" strokeDasharray="5 4" />
    <circle cx="285" cy="130" r="4.5" className="accent-dot" />
    <text x="285" y="120" textAnchor="middle">시 (O)</text>

    <circle cx="335" cy="40" r="4.5" className="bear-dot" />
    <text x="335" y="28" textAnchor="middle">고 (H)</text>

    <circle cx="360" cy="140" r="4.5" className="bull-dot" />
    <text x="360" y="156" textAnchor="middle">저 (L)</text>

    <circle cx="385" cy="90" r="4.5" className="accent-dot" />
    <text x="385" y="80" textAnchor="middle">종 (C)</text>
  </>
);

const Candles = () => (
  <>
    <Grid />
    <line x1="92" y1="36" x2="92" y2="170" className="bull-stroke" />
    <rect x="70" y="72" width="44" height="62" rx="3" className="bull-fill" />
    <text x="92" y="26" textAnchor="middle">고가</text>
    <text x="92" y="184" textAnchor="middle">저가</text>
    <text x="92" y="66" textAnchor="middle">종가</text>
    <text x="92" y="149" textAnchor="middle">시가</text>
    <line x1="236" y1="34" x2="236" y2="174" className="bear-stroke" />
    <rect x="214" y="70" width="44" height="70" rx="3" className="bear-fill" />
    <text x="236" y="26" textAnchor="middle">고가</text>
    <text x="236" y="184" textAnchor="middle">저가</text>
    <text x="236" y="64" textAnchor="middle">시가</text>
    <text x="236" y="155" textAnchor="middle">종가</text>
    <path d="M310 154 L334 154 L334 64 L358 64" className="accent-line" />
    <text x="334" y="48" textAnchor="middle">몸통과 꼬리의 비율</text>
  </>
);

const SupportResistance = () => (
  <>
    <Grid />
    <line x1="22" y1="54" x2="398" y2="54" className="bear-dash" />
    <line x1="22" y1="154" x2="398" y2="154" className="bull-dash" />
    <path d="M24 150 C60 70 92 160 132 76 S208 150 250 62 S322 152 396 72" className="price-line" />
    <circle cx="132" cy="76" r="6" className="bear-dot" />
    <circle cx="250" cy="62" r="6" className="bear-dot" />
    <circle cx="92" cy="154" r="6" className="bull-dot" />
    <circle cx="208" cy="154" r="6" className="bull-dot" />
    <text x="28" y="45">저항: 매도 반응 구간</text>
    <text x="28" y="176">지지: 매수 반응 구간</text>
  </>
);

const MarketStructure = () => (
  <>
    <Grid />
    <path d="M24 164 L78 112 L124 142 L184 78 L232 112 L292 40 L344 82 L398 50" className="price-line" />
    {[[78,112,'HH'],[124,142,'HL'],[184,78,'HH'],[232,112,'HL'],[292,40,'HH']].map(([x,y,label]) => (
      <g key={`${x}-${y}`}><circle cx={x} cy={y} r="5" className="accent-dot" /><text x={x} y={Number(y)-12} textAnchor="middle">{label}</text></g>
    ))}
    <line x1="184" y1="78" x2="398" y2="78" className="accent-dash" />
    <text x="318" y="70" textAnchor="middle">BOS</text>
  </>
);

const Breakout = () => (
  <>
    <Grid />
    <rect x="24" y="68" width="250" height="90" rx="4" className="zone-fill" />
    <line x1="24" y1="68" x2="396" y2="68" className="bear-dash" />
    <path d="M28 140 L70 92 L110 142 L154 88 L198 130 L238 82 L274 70 L304 36 L338 78 L366 68 L398 40" className="price-line" />
    <circle cx="338" cy="78" r="7" className="bull-dot" />
    <text x="145" y="126" textAnchor="middle">수렴/박스</text>
    <text x="304" y="26" textAnchor="middle">돌파</text>
    <text x="354" y="96" textAnchor="middle">리테스트</text>
  </>
);

const Volume = () => (
  <>
    <Grid />
    <path d="M24 142 L70 120 L116 132 L162 92 L208 110 L254 60 L300 70 L346 40 L398 52" className="price-line" />
    {[44,70,38,88,52,132,72,152,110].map((h, i) => (
      <rect key={i} x={26 + i * 43} y={188 - h / 2} width="22" height={h / 2} rx="2" className={i === 7 ? 'accent-bar' : 'volume-bar'} />
    ))}
    <text x="326" y="180" textAnchor="middle">거래량 확장 = 참여 확인</text>
  </>
);

const Indicator = () => (
  <>
    <Grid />
    <path d="M24 132 C70 104 92 142 132 98 S214 54 254 90 S328 126 398 64" className="price-line" />
    <path d="M24 148 C80 134 120 130 170 112 S278 86 398 82" className="average-line" />
    <line x1="24" y1="166" x2="398" y2="166" className="accent-dash" />
    <text x="46" y="158">RSI 30</text>
    <text x="302" y="74">가격</text>
    <text x="294" y="104">이동평균</text>
  </>
);

const MultiTimeframe = () => (
  <>
    <Grid />
    <rect x="24" y="28" width="110" height="140" rx="6" className="zone-fill" />
    <rect x="154" y="48" width="110" height="120" rx="6" className="zone-fill" />
    <rect x="284" y="76" width="110" height="92" rx="6" className="zone-fill" />
    <path d="M36 136 L62 104 L84 118 L118 72" className="price-line" />
    <path d="M166 138 L192 112 L218 124 L252 84" className="price-line" />
    <path d="M296 146 L320 116 L344 132 L382 96" className="price-line" />
    <text x="79" y="22" textAnchor="middle">상위: 방향</text>
    <text x="209" y="42" textAnchor="middle">중위: 구조</text>
    <text x="339" y="70" textAnchor="middle">하위: 진입</text>
  </>
);

const RiskReward = () => (
  <>
    <Grid />
    <line x1="42" y1="105" x2="388" y2="105" className="accent-line" />
    <rect x="92" y="30" width="212" height="74" rx="5" className="profit-zone" />
    <rect x="92" y="106" width="212" height="48" rx="5" className="loss-zone" />
    <text x="70" y="109" textAnchor="end">진입</text>
    <text x="198" y="70" textAnchor="middle">목표 +2R</text>
    <text x="198" y="136" textAnchor="middle">손절 -1R</text>
    <path d="M330 106 L330 42 M322 50 L330 42 L338 50" className="bull-stroke" />
  </>
);

const Execution = () => (
  <>
    <Grid />
    <path d="M22 152 L84 124 L140 144 L196 88 L246 112 L304 56 L398 78" className="price-line" />
    <line x1="196" y1="24" x2="196" y2="184" className="accent-dash" />
    <line x1="304" y1="24" x2="304" y2="184" className="bull-dash" />
    <text x="196" y="20" textAnchor="middle">진입 트리거</text>
    <text x="304" y="20" textAnchor="middle">부분 익절</text>
    <circle cx="196" cy="88" r="7" className="accent-dot" />
    <circle cx="304" cy="56" r="7" className="bull-dot" />
  </>
);

const Journal = () => (
  <>
    <Grid />
    <rect x="30" y="32" width="360" height="130" rx="7" className="zone-fill" />
    <line x1="48" y1="66" x2="372" y2="66" className="theory-grid-line" />
    <line x1="48" y1="102" x2="372" y2="102" className="theory-grid-line" />
    <line x1="48" y1="138" x2="372" y2="138" className="theory-grid-line" />
    <text x="52" y="55">셋업</text><text x="140" y="55">계획</text><text x="228" y="55">실행</text><text x="316" y="55">복기</text>
    <path d="M52 84 L62 94 L78 76" className="bull-stroke" />
    <path d="M52 120 L62 130 L78 112" className="bull-stroke" />
    <text x="140" y="90">무효화 가격</text><text x="228" y="90">감정 2/5</text><text x="316" y="90">규칙 준수</text>
    <text x="140" y="126">리스크 1R</text><text x="228" y="126">슬리피지</text><text x="316" y="126">다음 수정</text>
  </>
);

export const TheoryDiagram: React.FC<TheoryDiagramProps> = ({ type, caption }) => {
  const diagrams: Record<TheoryDiagramType, React.ReactNode> = {
    ohlc: <Ohlc />, candles: <Candles />, 'support-resistance': <SupportResistance />, 'market-structure': <MarketStructure />,
    breakout: <Breakout />, volume: <Volume />, indicator: <Indicator />, multitimeframe: <MultiTimeframe />,
    'risk-reward': <RiskReward />, execution: <Execution />, journal: <Journal />,
  };

  return (
    <figure className="theory-diagram">
      <svg viewBox="0 0 420 206" role="img" aria-label={caption}>{diagrams[type]}</svg>
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

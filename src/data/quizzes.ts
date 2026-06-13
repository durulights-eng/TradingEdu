export interface Candlestick {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface QuizItem {
  id: number;
  category: string;
  theoryRef: string;
  question: string;
  chartData: Candlestick[];
  drawings?: {
    type: 'line' | 'horizontal-line' | 'channel' | 'text';
    points: { x: number; y: number }[]; // x refers to array index, y refers to price
    label?: string;
    color?: string;
  }[];
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizzes: QuizItem[] = [
  {
    id: 1,
    category: "캔들스틱 (Candlesticks)",
    theoryRef: "01_candlestick_basics.md",
    question: "최근 15분 차트에서 장기 하락세 끝에 아래와 같은 캔들이 형성되었습니다. 이 캔들의 명칭과 향후 매매 대응으로 가장 적합한 것은 무엇인가요?",
    chartData: [
      { time: "10:00", open: 120, high: 122, low: 118, close: 119 },
      { time: "10:15", open: 119, high: 120, low: 113, close: 114 },
      { time: "10:30", open: 114, high: 115, low: 108, close: 109 },
      { time: "10:45", open: 109, high: 110, low: 101, close: 102 },
      { time: "11:00", open: 102, high: 103, low: 90, close: 101 } // 망치형 (Hammer)
    ],
    options: [
      "역망치형 (Inverted Hammer) - 하락세가 거세므로 즉각 매도",
      "망치형 (Hammer) - 저가 매수세 유입 확인, 지지 여부 확인 후 매수 대기",
      "도지 (Doji) - 매수와 매도 균형 상태이므로 관망",
      "상승 장악형 (Bullish Engulfing) - 직전 봉을 장악했으므로 시장가 매수"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 몸통이 짧고 아래꼬리가 몸통 길이의 2배 이상 길게 형성된 '망치형(Hammer)' 캔들입니다. 이는 하락 추세 바닥권에서 장중 매도 세력을 매수 세력이 강력하게 밀어 올렸음을 의미합니다. 즉각 매수보다는 다음 봉에서 이 가격대가 지지되는지 확인하고 진입하는 것이 안전합니다. (참고 문서: 01_candlestick_basics.md)"
  },
  {
    id: 2,
    category: "지지와 저항 (Support & Resistance)",
    theoryRef: "02_support_resistance.md",
    question: "주가가 장기 저항선인 150달러를 대량 거래량과 함께 강하게 상향 돌파했습니다. 돌파 직후 현명한 트레이더의 매수 타점은 어디일까요?",
    chartData: [
      { time: "D-4", open: 140, high: 148, low: 139, close: 145 },
      { time: "D-3", open: 145, high: 149, low: 143, close: 144 },
      { time: "D-2", open: 144, high: 156, low: 143, close: 154 }, // 돌파봉
      { time: "D-1", open: 154, high: 155, low: 149, close: 151 }, // 리테스트 중
      { time: "Today", open: 151, high: 153, low: 150, close: 152 } // 지지 확인
    ],
    drawings: [
      {
        type: "horizontal-line",
        points: [{ x: 0, y: 150 }, { x: 4, y: 150 }],
        label: "돌파된 저항선 -> 지지선 전환선 (150)",
        color: "#3b82f6"
      }
    ],
    options: [
      "돌파하자마자 상단 꼭대기에서 추격 매수 (D-2 종가)",
      "돌파 후 다시 150달러 지지선 부근으로 내려와 지지력을 검증할 때 (Today)",
      "주가가 이전 바닥인 140달러까지 완전히 내려갈 때까지 대기",
      "돌파했으므로 이제 매도(숏) 포지션 구축"
    ],
    correctIndex: 1,
    explanation: "저항선이 뚫리면 역할 전환(Role Reversal)에 의해 강력한 지지선으로 변합니다. 돌파 시점에 추격 매수하는 것보다는, 주가가 돌파된 저항선(150달러)으로 되돌림(Pullback/Retest)하여 지지받는 것을 확인하고 진입하는 것이 리스크 대비 기대 수익이 가장 높습니다. (참고 문서: 02_support_resistance.md)"
  },
  {
    id: 3,
    category: "추세선과 채널 (Trendlines & Channels)",
    theoryRef: "03_trendlines_channels.md",
    question: "아래 차트에서 저점들을 잇는 우상향 추세선이 작도되었습니다. 만약 오늘 캔들이 이 추세선 아래로 이탈하며 종가 마감할 경우 올바른 해석은 무엇인가요?",
    chartData: [
      { time: "W-5", open: 100, high: 105, low: 100, close: 103 },
      { time: "W-4", open: 103, high: 110, low: 102, close: 108 },
      { time: "W-3", open: 108, high: 109, low: 105, close: 106 }, // 추세선 터치 2
      { time: "W-2", open: 106, high: 115, low: 107, close: 113 },
      { time: "Today", open: 113, high: 114, low: 103, close: 104 } // 추세선 이탈 종가
    ],
    drawings: [
      {
        type: "line",
        points: [{ x: 0, y: 100 }, { x: 2, y: 105 }, { x: 4, y: 110 }],
        label: "상승 추세선",
        color: "#10b981"
      }
    ],
    options: [
      "상승 추세선이 이탈되었으므로 매도 심리가 붕괴되고 하락 반전될 가능성이 큼",
      "이탈은 일시적 휩소이므로 레버리지를 극대화하여 추가 매수",
      "추세선은 종가와 무관하므로 아무런 변화 없이 상승 추세 유지로 해석",
      "채널 상단 저항선에 닿았으므로 매도 대응"
    ],
    correctIndex: 0,
    explanation: "상승 추세선 아래로 캔들의 종가가 이탈하여 마감하는 것은 매수세의 힘이 다하고 매도 우위로 시장 판도가 바뀌는 '추세 붕괴(Breakdown)' 신호입니다. 이는 손절을 고려하거나 보유 주식 비중을 강하게 축소해야 하는 시그널입니다. (참고 문서: 03_trendlines_channels.md)"
  },
  {
    id: 4,
    category: "차트 패턴 (Chart Patterns)",
    theoryRef: "04_chart_patterns.md",
    question: "아래 차트는 세 번의 고점을 형성하며 헤드앤숄더(Head & Shoulders) 패턴을 만들고 있습니다. 이 패턴의 최종 완성이 선언되고 숏(매도) 포지션을 공식 진입할 수 있는 시점은 언제인가요?",
    chartData: [
      { time: "1일차", open: 100, high: 115, low: 98, close: 110 }, // 왼쪽 어깨
      { time: "2일차", open: 110, high: 130, low: 95, close: 105 }, // 머리
      { time: "3일차", open: 105, high: 114, low: 96, close: 110 }, // 오른쪽 어깨
      { time: "4일차", open: 110, high: 111, low: 93, close: 94 } // 넥라인 이탈 시도
    ],
    drawings: [
      {
        type: "horizontal-line",
        points: [{ x: 0, y: 96 }, { x: 3, y: 96 }],
        label: "넥라인 (96)",
        color: "#ef4444"
      }
    ],
    options: [
      "머리 고점(130)을 찍고 내려올 때 즉시 숏 진입",
      "오른쪽 어깨 고점(114) 부근에서 예측하여 미리 숏 진입",
      "저점들을 이은 넥라인(96)을 거래량을 동반하여 아래로 확정 돌파(이탈)할 때",
      "오른쪽 어깨가 왼쪽 어깨보다 낮아지는 것이 확인되면 넥라인 돌파 상관없이 진입"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더 패턴은 오른쪽 어깨 형성 후 저점 지지선인 '넥라인(Neckline)'을 하방으로 확실히 돌파해야만 최종 완성(Breakdown)됩니다. 돌파가 확인되기 전에 미리 진입하면 넥라인에서 반등하여 헤드앤숄더 패턴이 실패하는 휩소에 노출되어 큰 손실을 입을 수 있습니다. (참고 문서: 04_chart_patterns.md)"
  },
  {
    id: 5,
    category: "기술적 보조지표 (Technical Indicators)",
    theoryRef: "05_technical_indicators.md",
    question: "아래 차트에서 주가는 계속해서 신저가를 갱신하며 하락하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상이 관측됩니다. 이 현상의 명칭과 대응법으로 알맞은 것은 무엇인가요?",
    chartData: [
      { time: "D-4", open: 110, high: 112, low: 98, close: 100 }, // 주가 저점 100 (RSI 25)
      { time: "D-3", open: 100, high: 104, low: 96, close: 98 },
      { time: "D-2", open: 98, high: 101, low: 92, close: 94 }, // 주가 저점 94 (RSI 28)
      { time: "D-1", open: 94, high: 97, low: 93, close: 96 },
      { time: "Today", open: 96, high: 99, low: 95, close: 98 }
    ],
    options: [
      "하락 다이버전스 (Bearish Divergence) - 강력한 하락 예고이므로 공매도",
      "상승 다이버전스 (Bullish Divergence) - 주가는 내리지만 하방 에너지가 약화되어 추세 반등(상승) 가능성 큼, 분할 매수 고려",
      "골든크로스 (Golden Cross) - 단기이평선 돌파이므로 시장가 풀매수",
      "과매수 고착화 현상 - 주가가 바닥이므로 추가 급락 경고"
    ],
    correctIndex: 1,
    explanation: "주가의 저점은 낮아지는데 보조지표(RSI)의 저점은 올라가는 불일치 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 매도 압력이 현저히 약해지고 조만간 상승 추세로 전환될 수 있음을 시사하는 신뢰도 높은 반전 신호입니다. (참고 문서: 05_technical_indicators.md)"
  },
  {
    id: 6,
    category: "리스크 관리 (Risk Management)",
    theoryRef: "06_risk_management.md",
    question: "현재 총 투자 원금은 1,000만 원입니다. 리스크 관리 '2% 룰'을 엄격하게 적용하여 1회 매매 시 최대 20만 원까지만 잃고자 합니다. 진입하려는 종목의 손절폭이 -4%로 잡혔을 때, 최대 매수(진입) 가능 금액은 얼마인가요?",
    chartData: [
      { time: "Day-1", open: 5000, high: 5200, low: 4900, close: 5100 },
      { time: "Today", open: 5100, high: 5150, low: 5000, close: 5000 }
    ],
    options: [
      "1,000만 원 전액 풀매수",
      "200만 원",
      "500만 원",
      "800만 원"
    ],
    correctIndex: 2,
    explanation: "2% 룰 공식에 의해 `최대 진입 금액 = (총자산 * 0.02) / 손절 비율` 입니다. 따라서 `200,000원 / 0.04 = 5,000,000원`이 됩니다. 500만 원을 매수하면 주가가 손절선인 -4%에 도달해 강제 손절되더라도 총 자산 대비 손실은 정확히 2%인 20만 원으로 제한됩니다. (참고 문서: 06_risk_management.md)"
  }
];

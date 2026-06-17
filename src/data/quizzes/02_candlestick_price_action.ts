import type { QuizItem } from './types';

export const quizzes_candlestick_price_action: QuizItem[] = [
  {
    id: 1,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 120,
            "high": 122,
            "low": 118,
            "close": 119,
            "volume": 86
        },
        {
            "time": "10:15",
            "open": 119,
            "high": 120,
            "low": 113,
            "close": 114,
            "volume": 123
        },
        {
            "time": "10:30",
            "open": 114,
            "high": 115,
            "low": 108,
            "close": 109,
            "volume": 127
        },
        {
            "time": "10:45",
            "open": 109,
            "high": 110,
            "low": 101,
            "close": 102,
            "volume": 96
        },
        {
            "time": "11:00",
            "open": 102,
            "high": 103,
            "low": 90,
            "close": 101,
            "volume": 113
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 2,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "주가가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 108,
            "low": 99,
            "close": 105,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 105,
            "high": 115,
            "low": 104,
            "close": 112,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 112,
            "high": 125,
            "low": 111,
            "close": 123,
            "volume": 100
        },
        {
            "time": "Day 4",
            "open": 123,
            "high": 128,
            "low": 120,
            "close": 126,
            "volume": 120
        },
        {
            "time": "Day 5",
            "open": 126,
            "high": 145,
            "low": 125,
            "close": 127,
            "volume": 102
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 3,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 98,
            "high": 100,
            "low": 95,
            "close": 96,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 96,
            "high": 97,
            "low": 92,
            "close": 93,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 93,
            "high": 95,
            "low": 88,
            "close": 89,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 87,
            "high": 102,
            "low": 86,
            "close": 101,
            "volume": 98
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 5,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 125,
            "low": 119,
            "close": 124,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 124,
            "high": 130,
            "low": 123,
            "close": 129,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 130,
            "high": 131,
            "low": 115,
            "close": 116,
            "volume": 103
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 주가 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 31,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(150달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(145달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 125,
            "low": 119,
            "close": 124,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 124,
            "high": 135,
            "low": 123,
            "close": 134,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 134,
            "high": 148,
            "low": 133,
            "close": 146,
            "volume": 97
        },
        {
            "time": "Day 4",
            "open": 146,
            "high": 151,
            "low": 140,
            "close": 147,
            "volume": 128
        },
        {
            "time": "Day 5",
            "open": 141,
            "high": 143,
            "low": 135,
            "close": 136,
            "volume": 130
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 33,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "주가가 강력한 횡보 박스권 고점(200달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 175,
            "high": 185,
            "low": 174,
            "close": 182,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 182,
            "high": 195,
            "low": 180,
            "close": 193,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 193,
            "high": 202,
            "low": 190,
            "close": 191,
            "volume": 104
        },
        {
            "time": "Day 4",
            "open": 191,
            "high": 201,
            "low": 188,
            "close": 189,
            "volume": 111
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 200
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(200달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 34,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 100달러선 아래로 떨어지던 주가가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(93달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 110,
            "high": 111,
            "low": 104,
            "close": 105,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 105,
            "high": 106,
            "low": 97,
            "close": 98,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 92,
            "high": 101,
            "low": 91,
            "close": 100,
            "volume": 94
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(91달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 101,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 180,
            "high": 183,
            "low": 177,
            "close": 178.5,
            "volume": 100
        },
        {
            "time": "10:15",
            "open": 178.5,
            "high": 180,
            "low": 169.5,
            "close": 171,
            "volume": 88
        },
        {
            "time": "10:30",
            "open": 171,
            "high": 172.5,
            "low": 162,
            "close": 163.5,
            "volume": 124
        },
        {
            "time": "10:45",
            "open": 163.5,
            "high": 165,
            "low": 151.5,
            "close": 153,
            "volume": 128
        },
        {
            "time": "11:00",
            "open": 153,
            "high": 154.5,
            "low": 135,
            "close": 151.5,
            "volume": 121
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 102,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "코인 가격가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 162,
            "low": 148.5,
            "close": 157.5,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 157.5,
            "high": 172.5,
            "low": 156,
            "close": 168,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 168,
            "high": 187.5,
            "low": 166.5,
            "close": 184.5,
            "volume": 103
        },
        {
            "time": "Day 4",
            "open": 184.5,
            "high": 192,
            "low": 180,
            "close": 189,
            "volume": 103
        },
        {
            "time": "Day 5",
            "open": 189,
            "high": 217.5,
            "low": 187.5,
            "close": 190.5,
            "volume": 96
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 103,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 147,
            "high": 150,
            "low": 142.5,
            "close": 144,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 144,
            "high": 145.5,
            "low": 138,
            "close": 139.5,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 139.5,
            "high": 142.5,
            "low": 132,
            "close": 133.5,
            "volume": 126
        },
        {
            "time": "Day 4",
            "open": 130.5,
            "high": 153,
            "low": 129,
            "close": 151.5,
            "volume": 105
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 105,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 180,
            "high": 187.5,
            "low": 178.5,
            "close": 186,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 186,
            "high": 195,
            "low": 184.5,
            "close": 193.5,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 195,
            "high": 196.5,
            "low": 172.5,
            "close": 174,
            "volume": 127
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 코인 가격 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 131,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(225달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(217.50달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 180,
            "high": 187.5,
            "low": 178.5,
            "close": 186,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 186,
            "high": 202.5,
            "low": 184.5,
            "close": 201,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 201,
            "high": 222,
            "low": 199.5,
            "close": 219,
            "volume": 120
        },
        {
            "time": "Day 4",
            "open": 219,
            "high": 226.5,
            "low": 210,
            "close": 220.5,
            "volume": 115
        },
        {
            "time": "Day 5",
            "open": 211.5,
            "high": 214.5,
            "low": 202.5,
            "close": 204,
            "volume": 131
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 133,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "코인 가격가 강력한 횡보 박스권 고점(300달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 262.5,
            "high": 277.5,
            "low": 261,
            "close": 273,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 273,
            "high": 292.5,
            "low": 270,
            "close": 289.5,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 289.5,
            "high": 303,
            "low": 285,
            "close": 286.5,
            "volume": 94
        },
        {
            "time": "Day 4",
            "open": 286.5,
            "high": 301.5,
            "low": 282,
            "close": 283.5,
            "volume": 111
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 300
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(300달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 134,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 150달러선 아래로 떨어지던 코인 가격가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(139.50달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 165,
            "high": 166.5,
            "low": 156,
            "close": 157.5,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 157.5,
            "high": 159,
            "low": 145.5,
            "close": 147,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 138,
            "high": 151.5,
            "low": 136.5,
            "close": 150,
            "volume": 104
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(136.50달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 201,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 240,
            "high": 244,
            "low": 236,
            "close": 238,
            "volume": 92
        },
        {
            "time": "10:15",
            "open": 238,
            "high": 240,
            "low": 226,
            "close": 228,
            "volume": 97
        },
        {
            "time": "10:30",
            "open": 228,
            "high": 230,
            "low": 216,
            "close": 218,
            "volume": 113
        },
        {
            "time": "10:45",
            "open": 218,
            "high": 220,
            "low": 202,
            "close": 204,
            "volume": 108
        },
        {
            "time": "11:00",
            "open": 204,
            "high": 206,
            "low": 180,
            "close": 202,
            "volume": 116
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 202,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "시세가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 216,
            "low": 198,
            "close": 210,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 210,
            "high": 230,
            "low": 208,
            "close": 224,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 224,
            "high": 250,
            "low": 222,
            "close": 246,
            "volume": 124
        },
        {
            "time": "Day 4",
            "open": 246,
            "high": 256,
            "low": 240,
            "close": 252,
            "volume": 94
        },
        {
            "time": "Day 5",
            "open": 252,
            "high": 290,
            "low": 250,
            "close": 254,
            "volume": 100
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 203,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 196,
            "high": 200,
            "low": 190,
            "close": 192,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 192,
            "high": 194,
            "low": 184,
            "close": 186,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 186,
            "high": 190,
            "low": 176,
            "close": 178,
            "volume": 90
        },
        {
            "time": "Day 4",
            "open": 174,
            "high": 204,
            "low": 172,
            "close": 202,
            "volume": 104
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 205,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 250,
            "low": 238,
            "close": 248,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 248,
            "high": 260,
            "low": 246,
            "close": 258,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 260,
            "high": 262,
            "low": 230,
            "close": 232,
            "volume": 125
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 시세 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 231,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(300달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(290달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 250,
            "low": 238,
            "close": 248,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 248,
            "high": 270,
            "low": 246,
            "close": 268,
            "volume": 89
        },
        {
            "time": "Day 3",
            "open": 268,
            "high": 296,
            "low": 266,
            "close": 292,
            "volume": 100
        },
        {
            "time": "Day 4",
            "open": 292,
            "high": 302,
            "low": 280,
            "close": 294,
            "volume": 116
        },
        {
            "time": "Day 5",
            "open": 282,
            "high": 286,
            "low": 270,
            "close": 272,
            "volume": 118
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 233,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "시세가 강력한 횡보 박스권 고점(400달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 350,
            "high": 370,
            "low": 348,
            "close": 364,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 364,
            "high": 390,
            "low": 360,
            "close": 386,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 386,
            "high": 404,
            "low": 380,
            "close": 382,
            "volume": 88
        },
        {
            "time": "Day 4",
            "open": 382,
            "high": 402,
            "low": 376,
            "close": 378,
            "volume": 95
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 400
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(400달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 234,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 200달러선 아래로 떨어지던 시세가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(186달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 220,
            "high": 222,
            "low": 208,
            "close": 210,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 210,
            "high": 212,
            "low": 194,
            "close": 196,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 184,
            "high": 202,
            "low": 182,
            "close": 200,
            "volume": 104
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(182달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 301,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 360,
            "high": 366,
            "low": 354,
            "close": 357,
            "volume": 98
        },
        {
            "time": "10:15",
            "open": 357,
            "high": 360,
            "low": 339,
            "close": 342,
            "volume": 112
        },
        {
            "time": "10:30",
            "open": 342,
            "high": 345,
            "low": 324,
            "close": 327,
            "volume": 94
        },
        {
            "time": "10:45",
            "open": 327,
            "high": 330,
            "low": 303,
            "close": 306,
            "volume": 94
        },
        {
            "time": "11:00",
            "open": 306,
            "high": 309,
            "low": 270,
            "close": 303,
            "volume": 118
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 302,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "삼성전자 주가가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 324,
            "low": 297,
            "close": 315,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 315,
            "high": 345,
            "low": 312,
            "close": 336,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 336,
            "high": 375,
            "low": 333,
            "close": 369,
            "volume": 117
        },
        {
            "time": "Day 4",
            "open": 369,
            "high": 384,
            "low": 360,
            "close": 378,
            "volume": 95
        },
        {
            "time": "Day 5",
            "open": 378,
            "high": 435,
            "low": 375,
            "close": 381,
            "volume": 129
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 303,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 294,
            "high": 300,
            "low": 285,
            "close": 288,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 288,
            "high": 291,
            "low": 276,
            "close": 279,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 279,
            "high": 285,
            "low": 264,
            "close": 267,
            "volume": 92
        },
        {
            "time": "Day 4",
            "open": 261,
            "high": 306,
            "low": 258,
            "close": 303,
            "volume": 107
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 305,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 360,
            "high": 375,
            "low": 357,
            "close": 372,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 372,
            "high": 390,
            "low": 369,
            "close": 387,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 390,
            "high": 393,
            "low": 345,
            "close": 348,
            "volume": 89
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 삼성전자 주가 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 331,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(450달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(435달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 360,
            "high": 375,
            "low": 357,
            "close": 372,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 372,
            "high": 405,
            "low": 369,
            "close": 402,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 402,
            "high": 444,
            "low": 399,
            "close": 438,
            "volume": 108
        },
        {
            "time": "Day 4",
            "open": 438,
            "high": 453,
            "low": 420,
            "close": 441,
            "volume": 124
        },
        {
            "time": "Day 5",
            "open": 423,
            "high": 429,
            "low": 405,
            "close": 408,
            "volume": 100
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 333,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "삼성전자 주가가 강력한 횡보 박스권 고점(600달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 525,
            "high": 555,
            "low": 522,
            "close": 546,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 546,
            "high": 585,
            "low": 540,
            "close": 579,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 579,
            "high": 606,
            "low": 570,
            "close": 573,
            "volume": 97
        },
        {
            "time": "Day 4",
            "open": 573,
            "high": 603,
            "low": 564,
            "close": 567,
            "volume": 102
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 600
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(600달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 334,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 300달러선 아래로 떨어지던 삼성전자 주가가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(279달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 330,
            "high": 333,
            "low": 312,
            "close": 315,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 315,
            "high": 318,
            "low": 291,
            "close": 294,
            "volume": 99
        },
        {
            "time": "Day 3",
            "open": 276,
            "high": 303,
            "low": 273,
            "close": 300,
            "volume": 93
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(273달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 401,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 600,
            "high": 610,
            "low": 590,
            "close": 595,
            "volume": 115
        },
        {
            "time": "10:15",
            "open": 595,
            "high": 600,
            "low": 565,
            "close": 570,
            "volume": 119
        },
        {
            "time": "10:30",
            "open": 570,
            "high": 575,
            "low": 540,
            "close": 545,
            "volume": 89
        },
        {
            "time": "10:45",
            "open": 545,
            "high": 550,
            "low": 505,
            "close": 510,
            "volume": 130
        },
        {
            "time": "11:00",
            "open": 510,
            "high": 515,
            "low": 450,
            "close": 505,
            "volume": 102
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 402,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "테슬라 주가가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 540,
            "low": 495,
            "close": 525,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 525,
            "high": 575,
            "low": 520,
            "close": 560,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 560,
            "high": 625,
            "low": 555,
            "close": 615,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 615,
            "high": 640,
            "low": 600,
            "close": 630,
            "volume": 128
        },
        {
            "time": "Day 5",
            "open": 630,
            "high": 725,
            "low": 625,
            "close": 635,
            "volume": 120
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 403,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 490,
            "high": 500,
            "low": 475,
            "close": 480,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 480,
            "high": 485,
            "low": 460,
            "close": 465,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 465,
            "high": 475,
            "low": 440,
            "close": 445,
            "volume": 123
        },
        {
            "time": "Day 4",
            "open": 435,
            "high": 510,
            "low": 430,
            "close": 505,
            "volume": 102
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 405,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 600,
            "high": 625,
            "low": 595,
            "close": 620,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 620,
            "high": 650,
            "low": 615,
            "close": 645,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 650,
            "high": 655,
            "low": 575,
            "close": 580,
            "volume": 91
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 테슬라 주가 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 431,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(750달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(725달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 600,
            "high": 625,
            "low": 595,
            "close": 620,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 620,
            "high": 675,
            "low": 615,
            "close": 670,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 670,
            "high": 740,
            "low": 665,
            "close": 730,
            "volume": 117
        },
        {
            "time": "Day 4",
            "open": 730,
            "high": 755,
            "low": 700,
            "close": 735,
            "volume": 122
        },
        {
            "time": "Day 5",
            "open": 705,
            "high": 715,
            "low": 675,
            "close": 680,
            "volume": 111
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 433,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "테슬라 주가가 강력한 횡보 박스권 고점(1,000달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 875,
            "high": 925,
            "low": 870,
            "close": 910,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 910,
            "high": 975,
            "low": 900,
            "close": 965,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 965,
            "high": 1010,
            "low": 950,
            "close": 955,
            "volume": 101
        },
        {
            "time": "Day 4",
            "open": 955,
            "high": 1005,
            "low": 940,
            "close": 945,
            "volume": 106
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1000
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(1,000달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 434,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 500달러선 아래로 떨어지던 테슬라 주가가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(465달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 550,
            "high": 555,
            "low": 520,
            "close": 525,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 525,
            "high": 530,
            "low": 485,
            "close": 490,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 460,
            "high": 505,
            "low": 455,
            "close": 500,
            "volume": 95
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(455달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 501,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 960,
            "high": 976,
            "low": 944,
            "close": 952,
            "volume": 119
        },
        {
            "time": "10:15",
            "open": 952,
            "high": 960,
            "low": 904,
            "close": 912,
            "volume": 95
        },
        {
            "time": "10:30",
            "open": 912,
            "high": 920,
            "low": 864,
            "close": 872,
            "volume": 98
        },
        {
            "time": "10:45",
            "open": 872,
            "high": 880,
            "low": 808,
            "close": 816,
            "volume": 109
        },
        {
            "time": "11:00",
            "open": 816,
            "high": 824,
            "low": 720,
            "close": 808,
            "volume": 113
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 502,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "애플 주가가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 864,
            "low": 792,
            "close": 840,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 840,
            "high": 920,
            "low": 832,
            "close": 896,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 896,
            "high": 1000,
            "low": 888,
            "close": 984,
            "volume": 114
        },
        {
            "time": "Day 4",
            "open": 984,
            "high": 1024,
            "low": 960,
            "close": 1008,
            "volume": 116
        },
        {
            "time": "Day 5",
            "open": 1008,
            "high": 1160,
            "low": 1000,
            "close": 1016,
            "volume": 99
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 503,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 784,
            "high": 800,
            "low": 760,
            "close": 768,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 768,
            "high": 776,
            "low": 736,
            "close": 744,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 744,
            "high": 760,
            "low": 704,
            "close": 712,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 696,
            "high": 816,
            "low": 688,
            "close": 808,
            "volume": 110
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 505,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 1000,
            "low": 952,
            "close": 992,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 992,
            "high": 1040,
            "low": 984,
            "close": 1032,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 1040,
            "high": 1048,
            "low": 920,
            "close": 928,
            "volume": 123
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 애플 주가 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 531,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(1,200달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(1,160달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 1000,
            "low": 952,
            "close": 992,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 992,
            "high": 1080,
            "low": 984,
            "close": 1072,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 1072,
            "high": 1184,
            "low": 1064,
            "close": 1168,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 1168,
            "high": 1208,
            "low": 1120,
            "close": 1176,
            "volume": 109
        },
        {
            "time": "Day 5",
            "open": 1128,
            "high": 1144,
            "low": 1080,
            "close": 1088,
            "volume": 119
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 533,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "애플 주가가 강력한 횡보 박스권 고점(1,600달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1400,
            "high": 1480,
            "low": 1392,
            "close": 1456,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1456,
            "high": 1560,
            "low": 1440,
            "close": 1544,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 1544,
            "high": 1616,
            "low": 1520,
            "close": 1528,
            "volume": 123
        },
        {
            "time": "Day 4",
            "open": 1528,
            "high": 1608,
            "low": 1504,
            "close": 1512,
            "volume": 104
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1600
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(1,600달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 534,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 800달러선 아래로 떨어지던 애플 주가가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(744달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 880,
            "high": 888,
            "low": 832,
            "close": 840,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 840,
            "high": 848,
            "low": 776,
            "close": 784,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 736,
            "high": 808,
            "low": 728,
            "close": 800,
            "volume": 109
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(728달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 601,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 1200,
            "high": 1220,
            "low": 1180,
            "close": 1190,
            "volume": 88
        },
        {
            "time": "10:15",
            "open": 1190,
            "high": 1200,
            "low": 1130,
            "close": 1140,
            "volume": 104
        },
        {
            "time": "10:30",
            "open": 1140,
            "high": 1150,
            "low": 1080,
            "close": 1090,
            "volume": 116
        },
        {
            "time": "10:45",
            "open": 1090,
            "high": 1100,
            "low": 1010,
            "close": 1020,
            "volume": 100
        },
        {
            "time": "11:00",
            "open": 1020,
            "high": 1030,
            "low": 900,
            "close": 1010,
            "volume": 105
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 602,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "나스닥 시세가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1080,
            "low": 990,
            "close": 1050,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1050,
            "high": 1150,
            "low": 1040,
            "close": 1120,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 1120,
            "high": 1250,
            "low": 1110,
            "close": 1230,
            "volume": 109
        },
        {
            "time": "Day 4",
            "open": 1230,
            "high": 1280,
            "low": 1200,
            "close": 1260,
            "volume": 125
        },
        {
            "time": "Day 5",
            "open": 1260,
            "high": 1450,
            "low": 1250,
            "close": 1270,
            "volume": 127
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 603,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 980,
            "high": 1000,
            "low": 950,
            "close": 960,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 960,
            "high": 970,
            "low": 920,
            "close": 930,
            "volume": 89
        },
        {
            "time": "Day 3",
            "open": 930,
            "high": 950,
            "low": 880,
            "close": 890,
            "volume": 101
        },
        {
            "time": "Day 4",
            "open": 870,
            "high": 1020,
            "low": 860,
            "close": 1010,
            "volume": 111
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 605,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1250,
            "low": 1190,
            "close": 1240,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 1240,
            "high": 1300,
            "low": 1230,
            "close": 1290,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 1300,
            "high": 1310,
            "low": 1150,
            "close": 1160,
            "volume": 127
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 나스닥 시세 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 631,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(1,500달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(1,450달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1250,
            "low": 1190,
            "close": 1240,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 1240,
            "high": 1350,
            "low": 1230,
            "close": 1340,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 1340,
            "high": 1480,
            "low": 1330,
            "close": 1460,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 1460,
            "high": 1510,
            "low": 1400,
            "close": 1470,
            "volume": 97
        },
        {
            "time": "Day 5",
            "open": 1410,
            "high": 1430,
            "low": 1350,
            "close": 1360,
            "volume": 104
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 633,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "나스닥 시세가 강력한 횡보 박스권 고점(2,000달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1750,
            "high": 1850,
            "low": 1740,
            "close": 1820,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 1820,
            "high": 1950,
            "low": 1800,
            "close": 1930,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 1930,
            "high": 2020,
            "low": 1900,
            "close": 1910,
            "volume": 107
        },
        {
            "time": "Day 4",
            "open": 1910,
            "high": 2010,
            "low": 1880,
            "close": 1890,
            "volume": 118
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2000
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(2,000달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 634,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 1,000달러선 아래로 떨어지던 나스닥 시세가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(930달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1100,
            "high": 1110,
            "low": 1040,
            "close": 1050,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 1050,
            "high": 1060,
            "low": 970,
            "close": 980,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 920,
            "high": 1010,
            "low": 910,
            "close": 1000,
            "volume": 89
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(910달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 701,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 1440,
            "high": 1464,
            "low": 1416,
            "close": 1428,
            "volume": 115
        },
        {
            "time": "10:15",
            "open": 1428,
            "high": 1440,
            "low": 1356,
            "close": 1368,
            "volume": 85
        },
        {
            "time": "10:30",
            "open": 1368,
            "high": 1380,
            "low": 1296,
            "close": 1308,
            "volume": 97
        },
        {
            "time": "10:45",
            "open": 1308,
            "high": 1320,
            "low": 1212,
            "close": 1224,
            "volume": 130
        },
        {
            "time": "11:00",
            "open": 1224,
            "high": 1236,
            "low": 1080,
            "close": 1212,
            "volume": 96
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 702,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "엔비디아 주가가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1296,
            "low": 1188,
            "close": 1260,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 1260,
            "high": 1380,
            "low": 1248,
            "close": 1344,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 1344,
            "high": 1500,
            "low": 1332,
            "close": 1476,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 1476,
            "high": 1536,
            "low": 1440,
            "close": 1512,
            "volume": 92
        },
        {
            "time": "Day 5",
            "open": 1512,
            "high": 1740,
            "low": 1500,
            "close": 1524,
            "volume": 115
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 703,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1176,
            "high": 1200,
            "low": 1140,
            "close": 1152,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1152,
            "high": 1164,
            "low": 1104,
            "close": 1116,
            "volume": 99
        },
        {
            "time": "Day 3",
            "open": 1116,
            "high": 1140,
            "low": 1056,
            "close": 1068,
            "volume": 100
        },
        {
            "time": "Day 4",
            "open": 1044,
            "high": 1224,
            "low": 1032,
            "close": 1212,
            "volume": 108
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 705,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1440,
            "high": 1500,
            "low": 1428,
            "close": 1488,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 1488,
            "high": 1560,
            "low": 1476,
            "close": 1548,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 1560,
            "high": 1572,
            "low": 1380,
            "close": 1392,
            "volume": 94
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 엔비디아 주가 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 731,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(1,800달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(1,740달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1440,
            "high": 1500,
            "low": 1428,
            "close": 1488,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 1488,
            "high": 1620,
            "low": 1476,
            "close": 1608,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 1608,
            "high": 1776,
            "low": 1596,
            "close": 1752,
            "volume": 104
        },
        {
            "time": "Day 4",
            "open": 1752,
            "high": 1812,
            "low": 1680,
            "close": 1764,
            "volume": 123
        },
        {
            "time": "Day 5",
            "open": 1692,
            "high": 1716,
            "low": 1620,
            "close": 1632,
            "volume": 127
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 733,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "엔비디아 주가가 강력한 횡보 박스권 고점(2,400달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2100,
            "high": 2220,
            "low": 2088,
            "close": 2184,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 2184,
            "high": 2340,
            "low": 2160,
            "close": 2316,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 2316,
            "high": 2424,
            "low": 2280,
            "close": 2292,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 2292,
            "high": 2412,
            "low": 2256,
            "close": 2268,
            "volume": 121
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2400
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(2,400달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 734,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 1,200달러선 아래로 떨어지던 엔비디아 주가가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(1,116달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1320,
            "high": 1332,
            "low": 1248,
            "close": 1260,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 1260,
            "high": 1272,
            "low": 1164,
            "close": 1176,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 1104,
            "high": 1212,
            "low": 1092,
            "close": 1200,
            "volume": 125
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(1,092달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 801,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 2400,
            "high": 2440,
            "low": 2360,
            "close": 2380,
            "volume": 99
        },
        {
            "time": "10:15",
            "open": 2380,
            "high": 2400,
            "low": 2260,
            "close": 2280,
            "volume": 92
        },
        {
            "time": "10:30",
            "open": 2280,
            "high": 2300,
            "low": 2160,
            "close": 2180,
            "volume": 123
        },
        {
            "time": "10:45",
            "open": 2180,
            "high": 2200,
            "low": 2020,
            "close": 2040,
            "volume": 124
        },
        {
            "time": "11:00",
            "open": 2040,
            "high": 2060,
            "low": 1800,
            "close": 2020,
            "volume": 112
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 802,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "리플 시세가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2160,
            "low": 1980,
            "close": 2100,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 2100,
            "high": 2300,
            "low": 2080,
            "close": 2240,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 2240,
            "high": 2500,
            "low": 2220,
            "close": 2460,
            "volume": 98
        },
        {
            "time": "Day 4",
            "open": 2460,
            "high": 2560,
            "low": 2400,
            "close": 2520,
            "volume": 128
        },
        {
            "time": "Day 5",
            "open": 2520,
            "high": 2900,
            "low": 2500,
            "close": 2540,
            "volume": 119
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 803,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1960,
            "high": 2000,
            "low": 1900,
            "close": 1920,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 1920,
            "high": 1940,
            "low": 1840,
            "close": 1860,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 1860,
            "high": 1900,
            "low": 1760,
            "close": 1780,
            "volume": 92
        },
        {
            "time": "Day 4",
            "open": 1740,
            "high": 2040,
            "low": 1720,
            "close": 2020,
            "volume": 126
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 805,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2400,
            "high": 2500,
            "low": 2380,
            "close": 2480,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 2480,
            "high": 2600,
            "low": 2460,
            "close": 2580,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 2600,
            "high": 2620,
            "low": 2300,
            "close": 2320,
            "volume": 103
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 리플 시세 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 831,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(3,000달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(2,900달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2400,
            "high": 2500,
            "low": 2380,
            "close": 2480,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 2480,
            "high": 2700,
            "low": 2460,
            "close": 2680,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 2680,
            "high": 2960,
            "low": 2660,
            "close": 2920,
            "volume": 127
        },
        {
            "time": "Day 4",
            "open": 2920,
            "high": 3020,
            "low": 2800,
            "close": 2940,
            "volume": 114
        },
        {
            "time": "Day 5",
            "open": 2820,
            "high": 2860,
            "low": 2700,
            "close": 2720,
            "volume": 96
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 833,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "리플 시세가 강력한 횡보 박스권 고점(4,000달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 3500,
            "high": 3700,
            "low": 3480,
            "close": 3640,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 3640,
            "high": 3900,
            "low": 3600,
            "close": 3860,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 3860,
            "high": 4040,
            "low": 3800,
            "close": 3820,
            "volume": 102
        },
        {
            "time": "Day 4",
            "open": 3820,
            "high": 4020,
            "low": 3760,
            "close": 3780,
            "volume": 107
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 4000
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(4,000달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 834,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 2,000달러선 아래로 떨어지던 리플 시세가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(1,860달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2200,
            "high": 2220,
            "low": 2080,
            "close": 2100,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 2100,
            "high": 2120,
            "low": 1940,
            "close": 1960,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 1840,
            "high": 2020,
            "low": 1820,
            "close": 2000,
            "volume": 91
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(1,820달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
  {
    id: 901,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "하락 추세 지속 도중 바닥권에서 몸통이 짧고 아래꼬리가 몸통의 2배 이상인 아래 캔들이 출현했습니다. 이 캔들의 명칭과 올바른 대응은?",
    chartData: [
        {
            "time": "10:00",
            "open": 6000,
            "high": 6100,
            "low": 5900,
            "close": 5950,
            "volume": 82
        },
        {
            "time": "10:15",
            "open": 5950,
            "high": 6000,
            "low": 5650,
            "close": 5700,
            "volume": 86
        },
        {
            "time": "10:30",
            "open": 5700,
            "high": 5750,
            "low": 5400,
            "close": 5450,
            "volume": 121
        },
        {
            "time": "10:45",
            "open": 5450,
            "high": 5500,
            "low": 5050,
            "close": 5100,
            "volume": 123
        },
        {
            "time": "11:00",
            "open": 5100,
            "high": 5150,
            "low": 4500,
            "close": 5050,
            "volume": 102
        }
    ],
    options: [
        "역망치형 (Inverted Hammer) - 하락 경고 및 공매도 대기",
        "망치형 (Hammer) - 저점 지지 및 분할 매수 대기",
        "도지 (Doji) - 매수세와 매도세의 팽팽한 균형 및 관망",
        "하락 장악형 (Bearish Engulfing) - 추세 반전 및 즉시 손절"
    ],
    correctIndex: 1,
    explanation: "마지막 캔들은 아래꼬리가 긴 '망치형(Hammer)' 캔들로 하락 압력을 이겨내고 저가 매수세가 밀어 올렸음을 의미하는 대표적 상승 전환 신호입니다. 지지를 확인한 뒤 분할 매수 관점으로 대기해야 합니다."
  },
  {
    id: 902,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "골드 가격가 장기간 급등한 뒤, 고점 부근에서 위꼬리가 매우 길고 몸통이 짧은 형태의 캔들이 발생했습니다. 이 캔들의 해석으로 가장 적절한 것은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5400,
            "low": 4950,
            "close": 5250,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 5250,
            "high": 5750,
            "low": 5200,
            "close": 5600,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 5600,
            "high": 6250,
            "low": 5550,
            "close": 6150,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 6150,
            "high": 6400,
            "low": 6000,
            "close": 6300,
            "volume": 119
        },
        {
            "time": "Day 5",
            "open": 6300,
            "high": 7250,
            "low": 6250,
            "close": 6350,
            "volume": 106
        }
    ],
    options: [
        "유성형 (Shooting Star) - 고점 저항 및 하락 전환 예고",
        "망치형 (Hammer) - 저점 매수세 유입 및 상승 랠리 기대",
        "상승 장악형 (Bullish Engulfing) - 추세 반전 및 홀딩 유도",
        "도지 (Doji) - 추세 지속 가능성 및 일시 관망"
    ],
    correctIndex: 0,
    explanation: "급등세 끝에서 위꼬리가 몸통보다 훨씬 길게 솟아오른 캔들은 '유성형(Shooting Star)'입니다. 장중 상승 시도를 강력한 차익 실현 및 매도 압력이 짓눌렀음을 보여주며, 하락 추세 전환의 강력한 경고 시그널입니다."
  },
  {
    id: 903,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "직전의 음봉 몸통을 다음 날의 거대한 양봉 몸통이 완전히 감싸 안는 아래 형태가 포착되었습니다. 이 패턴의 이름과 신뢰도는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4900,
            "high": 5000,
            "low": 4750,
            "close": 4800,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 4800,
            "high": 4850,
            "low": 4600,
            "close": 4650,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 4650,
            "high": 4750,
            "low": 4400,
            "close": 4450,
            "volume": 112
        },
        {
            "time": "Day 4",
            "open": 4350,
            "high": 5100,
            "low": 4300,
            "close": 5050,
            "volume": 108
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 추세 반전 신뢰도 낮음",
        "상승 장악형 (Bullish Engulfing) - 매수 전환 신뢰도 높음",
        "상승 관통형 (Piercing Line) - 중간 강도의 반전 신호",
        "석별형 (Evening Star) - 상승 추세 종결 신호"
    ],
    correctIndex: 1,
    explanation: "전일의 하락 음봉 몸통을 다음 날의 장대 양봉이 완전히 덮어버리는 형태를 '상승 장악형(Bullish Engulfing)' 패턴이라고 합니다. 하락 추세 끝에서 나타날 경우 단기 하락세가 종료되고 강력한 매수세가 들어왔음을 뜻해 전환 신뢰도가 매우 높습니다."
  },
  {
    id: 905,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 2,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점에서 직전 양봉의 몸통을 거대 음봉이 아래로 덮어버리는 캔들 조합이 발생했습니다. 이 현상을 의미하는 용어는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6000,
            "high": 6250,
            "low": 5950,
            "close": 6200,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 6200,
            "high": 6500,
            "low": 6150,
            "close": 6450,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 6500,
            "high": 6550,
            "low": 5750,
            "close": 5800,
            "volume": 89
        }
    ],
    options: [
        "하락 장악형 (Bearish Engulfing) - 고점 하락 전환 예고",
        "상승 장악형 (Bullish Engulfing) - 고점 돌파 랠리 예고",
        "하락 잉태형 (Harami) - 기존 하락세의 일시 둔화",
        "샛별형 (Morning Star) - 바닥권 상승 반전 예고"
    ],
    correctIndex: 0,
    explanation: "고점에서 직전 양봉을 음봉이 감싸 안은 형태는 '하락 장악형(Bearish Engulfing)'입니다. 매수 세력을 매도 공급이 압도했다는 명백한 증거로, 골드 가격 추세가 하락으로 반전할 리스크가 큽니다."
  },
  {
    id: 931,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "상승 추세 고점 영역(7,500달러선)에서 몸통이 매우 작고 아래꼬리가 긴 행잉맨(Hanging Man) 캔들이 출현한 이후, 다음 날 시가가 전일 종가보다 큰 갭을 그리며 낮게 하락 출발(7,250달러)했습니다. 포지션을 보유한 스윙 트레이더로서 가장 적절한 위기 대응 행동은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6000,
            "high": 6250,
            "low": 5950,
            "close": 6200,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 6200,
            "high": 6750,
            "low": 6150,
            "close": 6700,
            "volume": 105
        },
        {
            "time": "Day 3",
            "open": 6700,
            "high": 7400,
            "low": 6650,
            "close": 7300,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 7300,
            "high": 7550,
            "low": 7000,
            "close": 7350,
            "volume": 127
        },
        {
            "time": "Day 5",
            "open": 7050,
            "high": 7150,
            "low": 6750,
            "close": 6800,
            "volume": 114
        }
    ],
    options: [
        "상승 랠리를 기대로 보유 비중 확대 및 추격 매수",
        "일시적 속임수(휩소) 판단으로 추가 레버리지 매수",
        "행잉맨 출현 후 갭하락에 따른 전량 또는 일부 정리",
        "조치 없이 전고점 돌파 시까지 무기한 관망 및 홀딩"
    ],
    correctIndex: 2,
    explanation: "고가권에서 나타난 행잉맨(Hanging Man)은 잠재적 하락 전환 신호이며, 특히 다음날 갭하락 음봉으로 직전 행잉맨의 저가를 깨고 내려가는 움직임은 강력한 하락 컨펌 시그널입니다. 따라서 이 시점에서는 즉시 비중을 전량 정리하거나 최소 절반 이상 매도하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 933,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "02_candlestick_price_action.md",
    question: "골드 가격가 강력한 횡보 박스권 고점(10,000달러 저항선)에 세 번째 터치하는 와중에, 윗꼬리가 길고 몸통이 매우 얇은 유성형(Shooting Star) 캔들이 이틀 연속 발생했습니다. 거래량 역시 저항선 부근에서 매수세가 더 올라가지 못하고 매도 압력이 실려 나타났습니다. 롱(매수) 포지션을 들고 있는 당신의 합리적인 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 8750,
            "high": 9250,
            "low": 8700,
            "close": 9100,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 9100,
            "high": 9750,
            "low": 9000,
            "close": 9650,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 9650,
            "high": 10100,
            "low": 9500,
            "close": 9550,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 9550,
            "high": 10050,
            "low": 9400,
            "close": 9450,
            "volume": 123
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 10000
                }
            ],
            "label": "박스권 상단 저항선 (200)",
            "color": "#ef4444"
        }
    ],
    options: [
        "신고가 갱신을 예상한 전재산 추가 불타기",
        "저항 돌파 실패 신호 확인 후 분할 익절 및 관망",
        "손익 평단가 부근이므로 추가 손절 없이 방치",
        "거래를 종료하고 다른 신규 급등주를 시장가 추격"
    ],
    correctIndex: 1,
    explanation: "박스권 상단 저항선(10,000달러)에 부딪히며 나타난 유성형(Shooting Star) 연속 출현은 저항 돌파 실패와 차익 실현 세력의 강력한 등장을 경고하는 캔들 신호입니다. 돌파를 확신하기보다는 리스크 관리 관점에서 물량을 축소(50% 분할 익절)하거나 전량 매도하여 이익을 확정 짓는 것이 현명합니다."
  },
  {
    id: 934,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "02_candlestick_price_action.md",
    question: "극심한 하락 추세 중 5,000달러선 아래로 떨어지던 골드 가격가 전일 장대음봉을 형성했습니다. 그러나 당일 시가는 갭하락하여 더 낮게 시작했으나, 장중에 강한 매수세가 들어오며 전일 음봉 몸통의 정확히 70% 라인(4,650달러선) 위로 덮어버리는 관통형(Piercing Line) 상승 캔들로 마감했습니다. 종가 매수(롱) 진입 시 원칙 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5500,
            "high": 5550,
            "low": 5200,
            "close": 5250,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 5250,
            "high": 5300,
            "low": 4850,
            "close": 4900,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 4600,
            "high": 5050,
            "low": 4550,
            "close": 5000,
            "volume": 91
        }
    ],
    options: [
        "상승 모멘텀 미달로 매수 보류 및 하방 숏 포지션 진입",
        "관통형 확인 후 분할 매수 및 당일 최저점 손절 설정",
        "손절 라인 설정 없이 100% 비중 시장가 매수 집행",
        "조정을 대기하며 예약 주문 없이 무작정 관망 유지"
    ],
    correctIndex: 1,
    explanation: "전일 음봉의 50% 이상을 당일 양봉 몸통으로 관통해 올린 '관통형(Piercing Line)'은 하락 모멘텀이 쇠퇴하고 저가 매수세가 우위를 점하기 시작했음을 뜻하는 바닥 신호입니다. 이 패턴 확인 후 진입할 시에는 손절 한도를 당일 최저점(4,550달러) 밑에 가깝게 설정할 수 있어 매우 유리한 리스크 대비 기대수익 매매가 성립됩니다."
  },
];

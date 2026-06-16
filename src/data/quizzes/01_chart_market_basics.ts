import type { QuizItem } from './types';

export const quizzes_chart_market_basics: QuizItem[] = [
  {
    id: 4,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 155,
            "low": 148,
            "close": 152,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 152,
            "high": 156,
            "low": 151,
            "close": 154,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 154,
            "high": 159,
            "low": 150,
            "close": 154,
            "volume": 101
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 8,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 90,
            "close": 91,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 91,
            "high": 98,
            "low": 90,
            "close": 97,
            "volume": 105
        },
        {
            "time": "Day 3",
            "open": 97,
            "high": 105,
            "low": 96,
            "close": 104,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 104,
            "high": 106,
            "low": 91,
            "close": 92,
            "volume": 131
        },
        {
            "time": "Day 5",
            "open": 92,
            "high": 100,
            "low": 90,
            "close": 99,
            "volume": 130
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 90
                },
                {
                    "x": 4,
                    "y": 90
                }
            ],
            "label": "90달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(90달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 주가의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 14,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 주가가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 130,
            "high": 132,
            "low": 125,
            "close": 127,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 127,
            "high": 128,
            "low": 120,
            "close": 122,
            "volume": 96
        },
        {
            "time": "Day 3",
            "open": 122,
            "high": 123,
            "low": 115,
            "close": 117,
            "volume": 88
        },
        {
            "time": "Day 4",
            "open": 117,
            "high": 128,
            "low": 116,
            "close": 127,
            "volume": 130
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 131
                },
                {
                    "x": 2,
                    "y": 122
                },
                {
                    "x": 3,
                    "y": 118
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 주식을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 주가 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 32,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(80달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 87달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 101,
            "low": 93,
            "close": 94,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 94,
            "high": 95,
            "low": 88,
            "close": 89,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 89,
            "high": 90,
            "low": 80,
            "close": 81,
            "volume": 112
        },
        {
            "time": "Day 4",
            "open": 80,
            "high": 82,
            "low": 75,
            "close": 80,
            "volume": 107
        },
        {
            "time": "Day 5",
            "open": 80,
            "high": 88,
            "low": 79,
            "close": 87,
            "volume": 104
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 87달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(75달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 75달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(75달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 73,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 100,
            "high": 100,
            "low": 100,
            "close": 100
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 104,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 225,
            "high": 232.5,
            "low": 222,
            "close": 228,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 228,
            "high": 234,
            "low": 226.5,
            "close": 231,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 231,
            "high": 238.5,
            "low": 225,
            "close": 231,
            "volume": 100
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 108,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 135,
            "close": 136.5,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 136.5,
            "high": 147,
            "low": 135,
            "close": 145.5,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 145.5,
            "high": 157.5,
            "low": 144,
            "close": 156,
            "volume": 127
        },
        {
            "time": "Day 4",
            "open": 156,
            "high": 159,
            "low": 136.5,
            "close": 138,
            "volume": 119
        },
        {
            "time": "Day 5",
            "open": 138,
            "high": 150,
            "low": 135,
            "close": 148.5,
            "volume": 123
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 135
                },
                {
                    "x": 4,
                    "y": 135
                }
            ],
            "label": "135달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(135달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 코인 가격의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 114,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 코인 가격가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 195,
            "high": 198,
            "low": 187.5,
            "close": 190.5,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 190.5,
            "high": 192,
            "low": 180,
            "close": 183,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 183,
            "high": 184.5,
            "low": 172.5,
            "close": 175.5,
            "volume": 102
        },
        {
            "time": "Day 4",
            "open": 175.5,
            "high": 192,
            "low": 174,
            "close": 190.5,
            "volume": 131
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 196.5
                },
                {
                    "x": 2,
                    "y": 183
                },
                {
                    "x": 3,
                    "y": 177
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 알트코인을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 코인 가격 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 132,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(120달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 130.50달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 151.5,
            "low": 139.5,
            "close": 141,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 141,
            "high": 142.5,
            "low": 132,
            "close": 133.5,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 133.5,
            "high": 135,
            "low": 120,
            "close": 121.5,
            "volume": 103
        },
        {
            "time": "Day 4",
            "open": 120,
            "high": 123,
            "low": 112.5,
            "close": 120,
            "volume": 94
        },
        {
            "time": "Day 5",
            "open": 120,
            "high": 132,
            "low": 118.5,
            "close": 130.5,
            "volume": 124
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 130.50달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(112.50달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 112.50달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(112.50달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 173,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 150,
            "high": 150,
            "low": 150,
            "close": 150
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 204,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 310,
            "low": 296,
            "close": 304,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 304,
            "high": 312,
            "low": 302,
            "close": 308,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 308,
            "high": 318,
            "low": 300,
            "close": 308,
            "volume": 127
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 208,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 180,
            "close": 182,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 182,
            "high": 196,
            "low": 180,
            "close": 194,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 194,
            "high": 210,
            "low": 192,
            "close": 208,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 208,
            "high": 212,
            "low": 182,
            "close": 184,
            "volume": 124
        },
        {
            "time": "Day 5",
            "open": 184,
            "high": 200,
            "low": 180,
            "close": 198,
            "volume": 117
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 180
                },
                {
                    "x": 4,
                    "y": 180
                }
            ],
            "label": "180달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(180달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 시세의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 214,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 시세가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 260,
            "high": 264,
            "low": 250,
            "close": 254,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 254,
            "high": 256,
            "low": 240,
            "close": 244,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 244,
            "high": 246,
            "low": 230,
            "close": 234,
            "volume": 126
        },
        {
            "time": "Day 4",
            "open": 234,
            "high": 256,
            "low": 232,
            "close": 254,
            "volume": 129
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 262
                },
                {
                    "x": 2,
                    "y": 244
                },
                {
                    "x": 3,
                    "y": 236
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 가상자산을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 시세 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 232,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(160달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 174달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 202,
            "low": 186,
            "close": 188,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 188,
            "high": 190,
            "low": 176,
            "close": 178,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 178,
            "high": 180,
            "low": 160,
            "close": 162,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 160,
            "high": 164,
            "low": 150,
            "close": 160,
            "volume": 94
        },
        {
            "time": "Day 5",
            "open": 160,
            "high": 176,
            "low": 158,
            "close": 174,
            "volume": 101
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 174달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(150달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 150달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(150달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 273,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 200,
            "high": 200,
            "low": 200,
            "close": 200
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 304,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 450,
            "high": 465,
            "low": 444,
            "close": 456,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 456,
            "high": 468,
            "low": 453,
            "close": 462,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 462,
            "high": 477,
            "low": 450,
            "close": 462,
            "volume": 116
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 308,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 270,
            "close": 273,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 273,
            "high": 294,
            "low": 270,
            "close": 291,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 291,
            "high": 315,
            "low": 288,
            "close": 312,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 312,
            "high": 318,
            "low": 273,
            "close": 276,
            "volume": 117
        },
        {
            "time": "Day 5",
            "open": 276,
            "high": 300,
            "low": 270,
            "close": 297,
            "volume": 98
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 270
                },
                {
                    "x": 4,
                    "y": 270
                }
            ],
            "label": "270달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(270달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 삼성전자 주가의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 314,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 삼성전자 주가가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 390,
            "high": 396,
            "low": 375,
            "close": 381,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 381,
            "high": 384,
            "low": 360,
            "close": 366,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 366,
            "high": 369,
            "low": 345,
            "close": 351,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 351,
            "high": 384,
            "low": 348,
            "close": 381,
            "volume": 100
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 393
                },
                {
                    "x": 2,
                    "y": 366
                },
                {
                    "x": 3,
                    "y": 354
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 국내 주식을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 삼성전자 주가 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 332,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(240달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 261달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 303,
            "low": 279,
            "close": 282,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 282,
            "high": 285,
            "low": 264,
            "close": 267,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 267,
            "high": 270,
            "low": 240,
            "close": 243,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 240,
            "high": 246,
            "low": 225,
            "close": 240,
            "volume": 110
        },
        {
            "time": "Day 5",
            "open": 240,
            "high": 264,
            "low": 237,
            "close": 261,
            "volume": 116
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 261달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(225달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 225달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(225달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 373,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 300,
            "high": 300,
            "low": 300,
            "close": 300
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 404,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 750,
            "high": 775,
            "low": 740,
            "close": 760,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 760,
            "high": 780,
            "low": 755,
            "close": 770,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 770,
            "high": 795,
            "low": 750,
            "close": 770,
            "volume": 124
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 408,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 450,
            "close": 455,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 455,
            "high": 490,
            "low": 450,
            "close": 485,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 485,
            "high": 525,
            "low": 480,
            "close": 520,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 520,
            "high": 530,
            "low": 455,
            "close": 460,
            "volume": 116
        },
        {
            "time": "Day 5",
            "open": 460,
            "high": 500,
            "low": 450,
            "close": 495,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 450
                },
                {
                    "x": 4,
                    "y": 450
                }
            ],
            "label": "450달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(450달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 테슬라 주가의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 414,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 테슬라 주가가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 650,
            "high": 660,
            "low": 625,
            "close": 635,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 635,
            "high": 640,
            "low": 600,
            "close": 610,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 610,
            "high": 615,
            "low": 575,
            "close": 585,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 585,
            "high": 640,
            "low": 580,
            "close": 635,
            "volume": 118
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 655
                },
                {
                    "x": 2,
                    "y": 610
                },
                {
                    "x": 3,
                    "y": 590
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 해외 주식을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 테슬라 주가 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 432,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(400달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 435달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 505,
            "low": 465,
            "close": 470,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 470,
            "high": 475,
            "low": 440,
            "close": 445,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 445,
            "high": 450,
            "low": 400,
            "close": 405,
            "volume": 111
        },
        {
            "time": "Day 4",
            "open": 400,
            "high": 410,
            "low": 375,
            "close": 400,
            "volume": 99
        },
        {
            "time": "Day 5",
            "open": 400,
            "high": 440,
            "low": 395,
            "close": 435,
            "volume": 112
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 435달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(375달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 375달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(375달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 473,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 500,
            "high": 500,
            "low": 500,
            "close": 500
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 504,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1240,
            "low": 1184,
            "close": 1216,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 1216,
            "high": 1248,
            "low": 1208,
            "close": 1232,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 1232,
            "high": 1272,
            "low": 1200,
            "close": 1232,
            "volume": 98
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 508,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 720,
            "close": 728,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 728,
            "high": 784,
            "low": 720,
            "close": 776,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 776,
            "high": 840,
            "low": 768,
            "close": 832,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 832,
            "high": 848,
            "low": 728,
            "close": 736,
            "volume": 116
        },
        {
            "time": "Day 5",
            "open": 736,
            "high": 800,
            "low": 720,
            "close": 792,
            "volume": 103
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 720
                },
                {
                    "x": 4,
                    "y": 720
                }
            ],
            "label": "720달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(720달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 애플 주가의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 514,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 애플 주가가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1040,
            "high": 1056,
            "low": 1000,
            "close": 1016,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 1016,
            "high": 1024,
            "low": 960,
            "close": 976,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 976,
            "high": 984,
            "low": 920,
            "close": 936,
            "volume": 121
        },
        {
            "time": "Day 4",
            "open": 936,
            "high": 1024,
            "low": 928,
            "close": 1016,
            "volume": 93
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1048
                },
                {
                    "x": 2,
                    "y": 976
                },
                {
                    "x": 3,
                    "y": 944
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 미국 주식을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 애플 주가 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 532,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(640달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 696달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 808,
            "low": 744,
            "close": 752,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 752,
            "high": 760,
            "low": 704,
            "close": 712,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 712,
            "high": 720,
            "low": 640,
            "close": 648,
            "volume": 95
        },
        {
            "time": "Day 4",
            "open": 640,
            "high": 656,
            "low": 600,
            "close": 640,
            "volume": 104
        },
        {
            "time": "Day 5",
            "open": 640,
            "high": 704,
            "low": 632,
            "close": 696,
            "volume": 121
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 696달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(600달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 600달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(600달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 573,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 800,
            "high": 800,
            "low": 800,
            "close": 800
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 604,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1500,
            "high": 1550,
            "low": 1480,
            "close": 1520,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 1520,
            "high": 1560,
            "low": 1510,
            "close": 1540,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 1540,
            "high": 1590,
            "low": 1500,
            "close": 1540,
            "volume": 125
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 608,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 900,
            "close": 910,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 910,
            "high": 980,
            "low": 900,
            "close": 970,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 970,
            "high": 1050,
            "low": 960,
            "close": 1040,
            "volume": 92
        },
        {
            "time": "Day 4",
            "open": 1040,
            "high": 1060,
            "low": 910,
            "close": 920,
            "volume": 99
        },
        {
            "time": "Day 5",
            "open": 920,
            "high": 1000,
            "low": 900,
            "close": 990,
            "volume": 120
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 900
                },
                {
                    "x": 4,
                    "y": 900
                }
            ],
            "label": "900달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(900달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 나스닥 시세의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 614,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 나스닥 시세가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1300,
            "high": 1320,
            "low": 1250,
            "close": 1270,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 1270,
            "high": 1280,
            "low": 1200,
            "close": 1220,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 1220,
            "high": 1230,
            "low": 1150,
            "close": 1170,
            "volume": 102
        },
        {
            "time": "Day 4",
            "open": 1170,
            "high": 1280,
            "low": 1160,
            "close": 1270,
            "volume": 111
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1310
                },
                {
                    "x": 2,
                    "y": 1220
                },
                {
                    "x": 3,
                    "y": 1180
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 지수 선물을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 나스닥 시세 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 632,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(800달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 870달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1010,
            "low": 930,
            "close": 940,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 940,
            "high": 950,
            "low": 880,
            "close": 890,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 890,
            "high": 900,
            "low": 800,
            "close": 810,
            "volume": 93
        },
        {
            "time": "Day 4",
            "open": 800,
            "high": 820,
            "low": 750,
            "close": 800,
            "volume": 100
        },
        {
            "time": "Day 5",
            "open": 800,
            "high": 880,
            "low": 790,
            "close": 870,
            "volume": 127
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 870달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(750달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 750달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(750달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 673,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 1000,
            "high": 1000,
            "low": 1000,
            "close": 1000
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 704,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1800,
            "high": 1860,
            "low": 1776,
            "close": 1824,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 1824,
            "high": 1872,
            "low": 1812,
            "close": 1848,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 1848,
            "high": 1908,
            "low": 1800,
            "close": 1848,
            "volume": 120
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 708,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1080,
            "close": 1092,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 1092,
            "high": 1176,
            "low": 1080,
            "close": 1164,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 1164,
            "high": 1260,
            "low": 1152,
            "close": 1248,
            "volume": 121
        },
        {
            "time": "Day 4",
            "open": 1248,
            "high": 1272,
            "low": 1092,
            "close": 1104,
            "volume": 130
        },
        {
            "time": "Day 5",
            "open": 1104,
            "high": 1200,
            "low": 1080,
            "close": 1188,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1080
                },
                {
                    "x": 4,
                    "y": 1080
                }
            ],
            "label": "1,080달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(1,080달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 엔비디아 주가의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 714,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 엔비디아 주가가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1560,
            "high": 1584,
            "low": 1500,
            "close": 1524,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 1524,
            "high": 1536,
            "low": 1440,
            "close": 1464,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 1464,
            "high": 1476,
            "low": 1380,
            "close": 1404,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 1404,
            "high": 1536,
            "low": 1392,
            "close": 1524,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1572
                },
                {
                    "x": 2,
                    "y": 1464
                },
                {
                    "x": 3,
                    "y": 1416
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 성장주을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 엔비디아 주가 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 732,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(960달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 1,044달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1212,
            "low": 1116,
            "close": 1128,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 1128,
            "high": 1140,
            "low": 1056,
            "close": 1068,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 1068,
            "high": 1080,
            "low": 960,
            "close": 972,
            "volume": 116
        },
        {
            "time": "Day 4",
            "open": 960,
            "high": 984,
            "low": 900,
            "close": 960,
            "volume": 123
        },
        {
            "time": "Day 5",
            "open": 960,
            "high": 1056,
            "low": 948,
            "close": 1044,
            "volume": 101
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 1,044달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(900달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 900달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(900달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 773,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 1200,
            "high": 1200,
            "low": 1200,
            "close": 1200
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 804,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 3000,
            "high": 3100,
            "low": 2960,
            "close": 3040,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 3040,
            "high": 3120,
            "low": 3020,
            "close": 3080,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 3080,
            "high": 3180,
            "low": 3000,
            "close": 3080,
            "volume": 108
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 808,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 1800,
            "close": 1820,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 1820,
            "high": 1960,
            "low": 1800,
            "close": 1940,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 1940,
            "high": 2100,
            "low": 1920,
            "close": 2080,
            "volume": 104
        },
        {
            "time": "Day 4",
            "open": 2080,
            "high": 2120,
            "low": 1820,
            "close": 1840,
            "volume": 109
        },
        {
            "time": "Day 5",
            "open": 1840,
            "high": 2000,
            "low": 1800,
            "close": 1980,
            "volume": 101
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1800
                },
                {
                    "x": 4,
                    "y": 1800
                }
            ],
            "label": "1,800달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(1,800달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 리플 시세의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 814,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 리플 시세가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2600,
            "high": 2640,
            "low": 2500,
            "close": 2540,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 2540,
            "high": 2560,
            "low": 2400,
            "close": 2440,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 2440,
            "high": 2460,
            "low": 2300,
            "close": 2340,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 2340,
            "high": 2560,
            "low": 2320,
            "close": 2540,
            "volume": 106
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 2620
                },
                {
                    "x": 2,
                    "y": 2440
                },
                {
                    "x": 3,
                    "y": 2360
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 메이저 코인을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 리플 시세 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 832,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(1,600달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 1,740달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2020,
            "low": 1860,
            "close": 1880,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1880,
            "high": 1900,
            "low": 1760,
            "close": 1780,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 1780,
            "high": 1800,
            "low": 1600,
            "close": 1620,
            "volume": 103
        },
        {
            "time": "Day 4",
            "open": 1600,
            "high": 1640,
            "low": 1500,
            "close": 1600,
            "volume": 116
        },
        {
            "time": "Day 5",
            "open": 1600,
            "high": 1760,
            "low": 1580,
            "close": 1740,
            "volume": 133
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 1,740달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(1,500달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 1,500달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(1,500달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 873,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 2000,
            "high": 2000,
            "low": 2000,
            "close": 2000
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 904,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "시가와 종가가 거의 일치하여 몸통이 거의 없고 위아래 꼬리만 달린 십자(+) 모양 캔들이 출현했습니다. 이 캔들에 대한 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 7500,
            "high": 7750,
            "low": 7400,
            "close": 7600,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 7600,
            "high": 7800,
            "low": 7550,
            "close": 7700,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 7700,
            "high": 7950,
            "low": 7500,
            "close": 7700,
            "volume": 114
        }
    ],
    options: [
        "상승세가 끝났으므로 100% 확률로 급락한다는 뜻",
        "매수세와 매도세의 팽팽한 균형, 추세 전환 임박 또는 횡보 탐색의 도지(Doji) 캔들",
        "매도가 이겼으므로 숏 포지션 진입",
        "하락 세력이 완전히 사라져 상방 빔이 나온다는 뜻"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
  },
  {
    id: 908,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 1,
    theoryRef: "01_chart_market_basics.md",
    question: "아래 차트에서 3번 연속 강하게 반등하며 가격 하락을 저지해 준 주요 가격대는 무엇을 의미하나요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 4500,
            "close": 4550,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 4550,
            "high": 4900,
            "low": 4500,
            "close": 4850,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 4850,
            "high": 5250,
            "low": 4800,
            "close": 5200,
            "volume": 90
        },
        {
            "time": "Day 4",
            "open": 5200,
            "high": 5300,
            "low": 4550,
            "close": 4600,
            "volume": 93
        },
        {
            "time": "Day 5",
            "open": 4600,
            "high": 5000,
            "low": 4500,
            "close": 4950,
            "volume": 112
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 4500
                },
                {
                    "x": 4,
                    "y": 4500
                }
            ],
            "label": "4,500달러선",
            "color": "#10b981"
        }
    ],
    options: [
        "강력한 저항선 (Resistance Line)",
        "강력한 지지선 (Support Line) - 매수 수요 밀집 지대",
        "골든크로스 수렴선",
        "이격도 붕괴선"
    ],
    correctIndex: 1,
    explanation: "특정 가격(4,500달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 골드 가격의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 914,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "01_chart_market_basics.md",
    question: "고점들을 잇는 우하향 하락 추세선을 골드 가격가 대량의 거래량을 동반하며 장대양봉 종가로 상향 돌파(Breakout)했습니다. 의미하는 시그널은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6500,
            "high": 6600,
            "low": 6250,
            "close": 6350,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 6350,
            "high": 6400,
            "low": 6000,
            "close": 6100,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 6100,
            "high": 6150,
            "low": 5750,
            "close": 5850,
            "volume": 114
        },
        {
            "time": "Day 4",
            "open": 5850,
            "high": 6400,
            "low": 5800,
            "close": 6350,
            "volume": 103
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 6550
                },
                {
                    "x": 2,
                    "y": 6100
                },
                {
                    "x": 3,
                    "y": 5900
                }
            ],
            "label": "하락 추세선",
            "color": "#ef4444"
        }
    ],
    options: [
        "하락 추세가 여전히 강력하므로 보유 원자재을 전부 공매도",
        "기존 하락 추세가 종결되고 새로운 상승 추세(Bullish Reversal)로의 전환 가능성 큼, 매수 타이밍 포착",
        "속임수 돌파가 확실하므로 대량의 물타기 집행",
        "아무런 방향성 힌트를 주지 않는 일상적인 거래"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 골드 가격 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 932,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "지속적인 하락 추세 도중 바닥권(4,000달러선)에서 시가와 종가가 일치하고 긴 아래꼬리를 단 십자 형태의 도지(Doji) 캔들이 생성되었습니다. 다음 날 대량의 거래량과 함께 장대양봉이 솟구치며 4,350달러로 마감하는 샛별형(Morning Star) 조합이 확정되었습니다. 이때 가장 합리적인 매수 진입 지점과 손절가 기준은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5050,
            "low": 4650,
            "close": 4700,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 4700,
            "high": 4750,
            "low": 4400,
            "close": 4450,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 4450,
            "high": 4500,
            "low": 4000,
            "close": 4050,
            "volume": 106
        },
        {
            "time": "Day 4",
            "open": 4000,
            "high": 4100,
            "low": 3750,
            "close": 4000,
            "volume": 127
        },
        {
            "time": "Day 5",
            "open": 4000,
            "high": 4400,
            "low": 3950,
            "close": 4350,
            "volume": 105
        }
    ],
    options: [
        "손절 라인을 잡지 않고, 4,350달러 부근에서 원금의 100%를 시장가로 즉시 몰빵 매수한다.",
        "샛별형 패턴 완성을 확인했으므로 분할 매수로 진입을 시작하되, 리스크 통제를 위해 도지 캔들의 최저점(3,750달러) 바로 아래에 기계적 손절매(Stop Loss)를 설정한다.",
        "추세가 이미 많이 올랐으므로 다시 3,750달러까지 떨어질 때까지 어떠한 예약 주문도 없이 무작정 관망한다.",
        "양봉 꼭대기에서 숏(공매도)으로 역베팅을 하고 손절매는 두지 않는다."
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(3,750달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
  },
  {
    id: 973,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "01_chart_market_basics.md",
    question: "차트 분석 결과, 돌파 시점의 체결 변동성과 거래소 호가창의 얇은 매물 상태를 감안할 때 내가 진입하려는 주문 가격에서 체결이 뒤로 밀리는 '슬리피지(Slippage)'가 심각하게 예상됩니다. 이를 감안한 올바른 주문 실행법은?",
    chartData: [
        {
            "time": "Today",
            "open": 5000,
            "high": 5000,
            "low": 5000,
            "close": 5000
        }
    ],
    options: [
        "가격 왜곡에 상관없이 무조건 최고 배율 시장가로 긁어서 집입한다.",
        "돌파 시점의 추격 시장가 진입은 포지션 단가를 극도로 악화시킬 수 있으므로 진입 물량을 쪼개거나, 돌파 확정 이후 저항선 지리 리테스트를 줄 때 한도가 고정된 지정가 대기 주문(Limit Order)을 사용하여 불필요한 비용을 통제한다.",
        "슬리피지는 차트 왜곡이 아니므로 거래소 고객센터에 항의만 한다.",
        "호가창을 무시하고 무제한 레버리지 주문을 전송한다."
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
];

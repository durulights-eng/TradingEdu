import type { QuizItem } from './types';

export const quizzes: QuizItem[] = [
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
            "close": 119
        },
        {
            "time": "10:15",
            "open": 119,
            "high": 120,
            "low": 113,
            "close": 114
        },
        {
            "time": "10:30",
            "open": 114,
            "high": 115,
            "low": 108,
            "close": 109
        },
        {
            "time": "10:45",
            "open": 109,
            "high": 110,
            "low": 101,
            "close": 102
        },
        {
            "time": "11:00",
            "open": 102,
            "high": 103,
            "low": 90,
            "close": 101
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
            "close": 105
        },
        {
            "time": "Day 2",
            "open": 105,
            "high": 115,
            "low": 104,
            "close": 112
        },
        {
            "time": "Day 3",
            "open": 112,
            "high": 125,
            "low": 111,
            "close": 123
        },
        {
            "time": "Day 4",
            "open": 123,
            "high": 128,
            "low": 120,
            "close": 126
        },
        {
            "time": "Day 5",
            "open": 126,
            "high": 145,
            "low": 125,
            "close": 127
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
            "close": 96
        },
        {
            "time": "Day 2",
            "open": 96,
            "high": 97,
            "low": 92,
            "close": 93
        },
        {
            "time": "Day 3",
            "open": 93,
            "high": 95,
            "low": 88,
            "close": 89
        },
        {
            "time": "Day 4",
            "open": 87,
            "high": 102,
            "low": 86,
            "close": 101
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
            "close": 152
        },
        {
            "time": "Day 2",
            "open": 152,
            "high": 156,
            "low": 151,
            "close": 154
        },
        {
            "time": "Day 3",
            "open": 154,
            "high": 159,
            "low": 150,
            "close": 154
        }
    ],
    options: [
        "상승세 동력 상실로 인한 추세의 하방 반전",
        "매수/매도 세력 균형에 따른 도지(Doji) 횡보",
        "매도세 지배에 따른 즉각적인 숏 포지션 진입",
        "하락 세력 이탈로 인한 즉각적인 상승 랠리"
    ],
    correctIndex: 1,
    explanation: "시가와 종가가 거의 같은 십자 모양의 캔들은 '도지(Doji)' 캔들입니다. 이는 힘의 균형이 팽팽함을 시사하며, 기존 추세의 힘이 빠지고 잠재적인 방향성 전환(상승/하락 모두 포함)의 변곡점이 다가오고 있음을 의미합니다."
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
            "close": 124
        },
        {
            "time": "Day 2",
            "open": 124,
            "high": 130,
            "low": 123,
            "close": 129
        },
        {
            "time": "Day 3",
            "open": 130,
            "high": 131,
            "low": 115,
            "close": 116
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
    id: 6,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "주가가 장기 저항선인 150달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 150달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 140,
            "high": 148,
            "low": 139,
            "close": 145
        },
        {
            "time": "Day 2",
            "open": 145,
            "high": 149,
            "low": 143,
            "close": 144
        },
        {
            "time": "Day 3",
            "open": 144,
            "high": 156,
            "low": 143,
            "close": 154
        },
        {
            "time": "Day 4",
            "open": 154,
            "high": 155,
            "low": 149,
            "close": 151
        },
        {
            "time": "Day 5",
            "open": 151,
            "high": 153,
            "low": 150,
            "close": 152
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 150
                },
                {
                    "x": 4,
                    "y": 150
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 140달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 주가가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 7,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "주가가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 98,
            "high": 101,
            "low": 97,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 102,
            "low": 99,
            "close": 101
        },
        {
            "time": "Day 3",
            "open": 101,
            "high": 110,
            "low": 100,
            "close": 108
        },
        {
            "time": "Day 4",
            "open": 108,
            "high": 109,
            "low": 95,
            "close": 96
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 102
                },
                {
                    "x": 3,
                    "y": 102
                }
            ],
            "label": "저항선",
            "color": "#ef4444"
        }
    ],
    options: [
        "진짜 상승 돌파 (True Breakout)",
        "불 트랩 (Bull Trap) - 매수자 청산 유도 가짜 돌파",
        "베어 트랩 (Bear Trap) - 매도자 청산 유도 가짜 하방",
        "골든 크로스 (Golden Cross) - 이평선 돌파"
    ],
    correctIndex: 1,
    explanation: "저항선을 일시적으로 뚫었다가 대량 매도세와 함께 직후 캔들에서 하방으로 원상복귀하는 현상을 '불 트랩(Bull Trap/가짜 돌파)'이라고 합니다. 돌파 후 리테스트를 기다리지 않고 급히 추격 매수했던 투자자들이 고점에 물리는 대표적 함정입니다."
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
            "close": 91
        },
        {
            "time": "Day 2",
            "open": 91,
            "high": 98,
            "low": 90,
            "close": 97
        },
        {
            "time": "Day 3",
            "open": 97,
            "high": 105,
            "low": 96,
            "close": 104
        },
        {
            "time": "Day 4",
            "open": 104,
            "high": 106,
            "low": 91,
            "close": 92
        },
        {
            "time": "Day 5",
            "open": 92,
            "high": 100,
            "low": 90,
            "close": 99
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
        "강력한 저항선 (Resistance Line) - 매도 매물대",
        "강력한 지지선 (Support Line) - 매수 매물대",
        "골든크로스 수렴선 - 이평선 밀집대",
        "이격도 붕괴선 - 가격 과열 분기점"
    ],
    correctIndex: 1,
    explanation: "특정 가격(90달러)에 접근할 때마다 대기 중이던 저가 매수세가 유입되어 주가의 추가 하락을 방어해 준 이 라인은 '강력한 지지선(Support Line)'입니다. 이탈하기 전까지는 손절 라인을 바로 밑에 두고 진입하기에 가장 손익비 좋은 구간입니다."
  },
  {
    id: 9,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 주가가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 122,
            "low": 118,
            "close": 119
        },
        {
            "time": "Day 2",
            "open": 119,
            "high": 120,
            "low": 110,
            "close": 111
        },
        {
            "time": "Day 3",
            "open": 111,
            "high": 123,
            "low": 110,
            "close": 122
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 115
                },
                {
                    "x": 2,
                    "y": 115
                }
            ],
            "label": "지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "불 트랩 (Bull Trap) - 가짜 상방 돌파",
        "베어 트랩 (Bear Trap) - 가짜 하방 이탈",
        "리테스트 실패 - 지지선 붕괴",
        "추세 추종 돌파 - 하방 랠리 가속"
    ],
    correctIndex: 1,
    explanation: "지지선을 아래로 뚫고 내려가 하락세가 지속될 것처럼 유도한 뒤, 매물을 털어내고 강력하게 다시 반등해 올리는 현상을 '베어 트랩(Bear Trap)'이라고 합니다. 하락 돌파로 생각하고 공매도를 치거나 손절했던 사람들의 손실을 강제하며 가격이 급등하게 만듭니다."
  },
  {
    id: 10,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 105,
            "low": 90,
            "close": 102
        },
        {
            "time": "Day 2",
            "open": 102,
            "high": 105,
            "low": 93,
            "close": 103
        },
        {
            "time": "Day 3",
            "open": 103,
            "high": 105,
            "low": 96,
            "close": 104
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 105
                },
                {
                    "x": 2,
                    "y": 105
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 부근에서 저점들을 높여가며 밀어 올리는 수렴 현상",
        "거래량이 완전히 소멸하여 긴 횡보 상태를 보이는 현상",
        "지속적인 매도세로 인해 갑작스럽게 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 11,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 100,
            "high": 105,
            "low": 100,
            "close": 103
        },
        {
            "time": "W-4",
            "open": 103,
            "high": 110,
            "low": 102,
            "close": 108
        },
        {
            "time": "W-3",
            "open": 108,
            "high": 109,
            "low": 105,
            "close": 106
        },
        {
            "time": "W-2",
            "open": 106,
            "high": 115,
            "low": 107,
            "close": 113
        },
        {
            "time": "Today",
            "open": 113,
            "high": 114,
            "low": 103,
            "close": 104
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 100
                },
                {
                    "x": 2,
                    "y": 105
                },
                {
                    "x": 4,
                    "y": 110
                }
            ],
            "label": "상승 추세선",
            "color": "#10b981"
        }
    ],
    options: [
        "추세선 이탈은 영향이 없으므로 비중 유지",
        "상승 추세 붕괴로 하락 반전 대비 비중 축소",
        "일시적인 속임수이므로 추가 불타기 진입",
        "채널 상단 도달에 따른 즉각적인 매수 대응"
    ],
    correctIndex: 1,
    explanation: "신뢰받던 우상향 상승 추세선 하방으로 캔들의 종가가 이탈 마감하는 것은 매수 중심의 시장 주도권이 붕괴했음을 뜻합니다. 지지를 잃은 하락 가속화 리스크에 대비해야 합니다."
  },
  {
    id: 12,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 152,
            "low": 135,
            "close": 140
        },
        {
            "time": "Day 2",
            "open": 140,
            "high": 147,
            "low": 139,
            "close": 145
        },
        {
            "time": "Day 3",
            "open": 145,
            "high": 146,
            "low": 128,
            "close": 130
        },
        {
            "time": "Day 4",
            "open": 130,
            "high": 138,
            "low": 129,
            "close": 136
        },
        {
            "time": "Day 5",
            "open": 136,
            "high": 137,
            "low": 118,
            "close": 120
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 150
                },
                {
                    "x": 4,
                    "y": 135
                },
                {
                    "x": 0,
                    "y": 135
                },
                {
                    "x": 4,
                    "y": 120
                }
            ],
            "label": "하향 평행 채널",
            "color": "#f59e0b"
        }
    ],
    options: [
        "추세 추종 매매 - 대세 상승이므로 장기 보유",
        "채널 하단 반등 매매 - 단기 역추세 매수 대응",
        "양방향 물타기 매매 - 평단가를 낮춰 탈출 대기",
        "돌파 매매 - 채널 하방 붕괴 확정 시 매수 대응"
    ],
    correctIndex: 1,
    explanation: "가격이 평행한 하락 터널 내에서 움직이는 '하향 평행 채널(Descending Channel)'입니다. 채널 하단 라인 터치 시에는 기술적 단기 반등이 자주 출현하므로, 손절선을 짧게 잡고 반등 타점을 노리는 역추세(Counter-trend) 트레이딩이 가능합니다."
  },
  {
    id: 13,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 주가가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 99,
            "close": 101
        },
        {
            "time": "Day 2",
            "open": 101,
            "high": 108,
            "low": 101,
            "close": 107
        },
        {
            "time": "Day 3",
            "open": 107,
            "high": 109,
            "low": 104,
            "close": 105
        },
        {
            "time": "Day 4",
            "open": 105,
            "high": 115,
            "low": 105,
            "close": 114
        },
        {
            "time": "Day 5",
            "open": 114,
            "high": 116,
            "low": 112,
            "close": 113
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 102
                },
                {
                    "x": 4,
                    "y": 115
                },
                {
                    "x": 0,
                    "y": 99
                },
                {
                    "x": 4,
                    "y": 112
                }
            ],
            "label": "상승 평행 채널",
            "color": "#10b981"
        }
    ],
    options: [
        "채널 상방 돌파를 예상한 고배율 레버리지 매수",
        "채널 상단 저항에 따른 분할 익절 및 대기",
        "채널 중간 조정 시 지정을 통한 시장가 추격",
        "채널 붕괴 신호에 따른 전량 기계적 손절"
    ],
    correctIndex: 1,
    explanation: "상승 채널이라고 해도 상단 저항선에 닿으면 다시 채널 하단이나 중심선까지 조정을 받을 가능성이 매우 큽니다. 따라서 고점 영역에서의 추격매수를 금지하고, 기존 포지션을 분할 익절하는 기회로 삼아야 합니다."
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
            "close": 127
        },
        {
            "time": "Day 2",
            "open": 127,
            "high": 128,
            "low": 120,
            "close": 122
        },
        {
            "time": "Day 3",
            "open": 122,
            "high": 123,
            "low": 115,
            "close": 117
        },
        {
            "time": "Day 4",
            "open": 117,
            "high": 128,
            "low": 116,
            "close": 127
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
        "하락 추세 지속에 따른 숏 포지션 추가 매수",
        "하락 추세 돌파 및 상승 전환 가능성에 따른 매수",
        "속임수 돌파를 예상한 즉시 반대 숏 포지션 진입",
        "추세와 무관하게 횡보 흐름으로 판단해 관망"
    ],
    correctIndex: 1,
    explanation: "중요한 하락 추세선을 주가 몸통이 확실하게 뚫고 마감하는 것은 기존 하락 관성의 지배력이 종료되고 상승 추세로 돌아설 수 있는 가장 대표적인 추세 전환(Reversal) 확인 시그널입니다."
  },
  {
    id: 15,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 101,
            "low": 100,
            "close": 101
        },
        {
            "time": "Day 2",
            "open": 101,
            "high": 105,
            "low": 102,
            "close": 104
        }
    ],
    options: [
        "차트상 선이 정배열로 정돈되어 그려질 때",
        "최소 3개 이상의 뚜렷한 저점/고점 터치 확인 시",
        "가파른 각도로 90도에 가깝게 작도될 때",
        "보조지표와 결합하여 수평으로 그려질 때"
    ],
    correctIndex: 1,
    explanation: "두 점만으로도 선을 그릴 수 있지만, 3번째 터치(3rd Touch)에서 정확한 지지나 저항을 보이고 반등해 주는 순간부터 시장 참여자들이 공식 인지하는 신뢰도 높은 추세선이 됩니다."
  },
  {
    id: 16,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(96달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 115,
            "low": 98,
            "close": 110
        },
        {
            "time": "Day 2",
            "open": 110,
            "high": 130,
            "low": 95,
            "close": 105
        },
        {
            "time": "Day 3",
            "open": 105,
            "high": 114,
            "low": 96,
            "close": 110
        },
        {
            "time": "Day 4",
            "open": 110,
            "high": 111,
            "low": 93,
            "close": 94
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 96
                },
                {
                    "x": 3,
                    "y": 96
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(130달러) 부근에서 예측 숏 진입",
        "오른쪽 어깨가 올라가고 있을 때 돌파 전 선진입",
        "저점들을 연결한 넥라인의 하방 돌파 완료 시",
        "패턴 완성과 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 17,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 주가가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 100,
            "low": 80,
            "close": 85
        },
        {
            "time": "Day 2",
            "open": 85,
            "high": 95,
            "low": 84,
            "close": 94
        },
        {
            "time": "Day 3",
            "open": 94,
            "high": 95,
            "low": 79,
            "close": 82
        },
        {
            "time": "Day 4",
            "open": 82,
            "high": 99,
            "low": 81,
            "close": 98
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 95
                },
                {
                    "x": 3,
                    "y": 95
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 가능성에 따른 전량 손절 대응",
        "W 패턴 이중 바닥 완성 및 넥라인 돌파 시 매수",
        "박스권 횡보 판단에 따른 무대응 및 관망",
        "이중 바닥의 하방 이탈을 예상한 숏 포지션 진입"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 주가가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 95달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 18,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 주가 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 50,
            "high": 80,
            "low": 49,
            "close": 78
        },
        {
            "time": "Day 2",
            "open": 78,
            "high": 79,
            "low": 72,
            "close": 74
        },
        {
            "time": "Day 3",
            "open": 74,
            "high": 76,
            "low": 70,
            "close": 71
        },
        {
            "time": "Day 4",
            "open": 71,
            "high": 85,
            "low": 70,
            "close": 83
        }
    ],
    options: [
        "이중 천정형 패턴 - 고점 도달 시 숏 진입",
        "불 플래그 패턴 - 깃발 돌파 시 추가 상승 기대",
        "헤드앤숄더 패턴 - 넥라인 하방 돌파 타겟",
        "대칭 삼각수렴 패턴 - 변동성 축소 후 돌파 대기"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 19,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 주가가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(120달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 140,
            "low": 99,
            "close": 135
        },
        {
            "time": "Day 2",
            "open": 135,
            "high": 136,
            "low": 120,
            "close": 122
        },
        {
            "time": "Day 3",
            "open": 122,
            "high": 140,
            "low": 121,
            "close": 138
        },
        {
            "time": "Day 4",
            "open": 138,
            "high": 139,
            "low": 115,
            "close": 116
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 120
                },
                {
                    "x": 3,
                    "y": 120
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 추세의 지속 연장에 따른 추가 매수",
        "이중 천정형(M 패턴) 완성에 따른 하락 반전 대비",
        "단기 조정에 따른 일시적 횡보 박스권 진입",
        "방향성 없는 일상적인 잔파동으로 판단해 홀딩"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(140달러)을 넘지 못하고 넥라인(120달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 20,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 80,
            "high": 100,
            "low": 80,
            "close": 95
        },
        {
            "time": "Day 2",
            "open": 95,
            "high": 100,
            "low": 86,
            "close": 98
        },
        {
            "time": "Day 3",
            "open": 98,
            "high": 100,
            "low": 92,
            "close": 99
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 100
                },
                {
                    "x": 2,
                    "y": 100
                }
            ],
            "label": "수평 저항선",
            "color": "#ef4444"
        },
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 80
                },
                {
                    "x": 1,
                    "y": 86
                },
                {
                    "x": 2,
                    "y": 92
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 - 일반적으로 하방 돌파 기대",
        "어센딩 트라이앵글 - 매수 압력 우위로 상방 돌파 기대",
        "헤드앤숄더 패턴 - 넥라인 하방 돌파 기대",
        "상향 평행 채널 - 상하단 터치식 채널 매매 기대"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(100달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 21,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "주가는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 110,
            "high": 112,
            "low": 98,
            "close": 100
        },
        {
            "time": "D-3",
            "open": 100,
            "high": 104,
            "low": 96,
            "close": 98
        },
        {
            "time": "D-2",
            "open": 98,
            "high": 101,
            "low": 92,
            "close": 94
        },
        {
            "time": "D-1",
            "open": 94,
            "high": 97,
            "low": 93,
            "close": 96
        },
        {
            "time": "Today",
            "open": 96,
            "high": 99,
            "low": 95,
            "close": 98
        }
    ],
    options: [
        "하락 다이버전스 - 가격 상승 둔화에 따른 공매도",
        "상승 다이버전스 - 하락 둔화 및 반등 신호로 매수",
        "데드 크로스 - 이평선 하방 교차에 따른 관망",
        "과매수 이탈 시그널 - 단기 반등에 따른 매수"
    ],
    correctIndex: 1,
    explanation: "주가의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 22,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "주가는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 120,
            "low": 99,
            "close": 118
        },
        {
            "time": "Day 2",
            "open": 118,
            "high": 122,
            "low": 115,
            "close": 120
        },
        {
            "time": "Day 3",
            "open": 120,
            "high": 135,
            "low": 119,
            "close": 133
        }
    ],
    options: [
        "하락 다이버전스 - 매수 둔화 및 하락 우려로 익절",
        "상승 다이버전스 - 추가 급등 기대로 신규 매수",
        "골든 크로스 - 추세 강화에 따른 홀딩",
        "볼린저 밴드 스퀴즈 - 변동성 수축 후 돌파"
    ],
    correctIndex: 0,
    explanation: "주가는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 23,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 98,
            "close": 99
        },
        {
            "time": "Day 2",
            "open": 99,
            "high": 104,
            "low": 99,
            "close": 103
        },
        {
            "time": "Day 3",
            "open": 103,
            "high": 110,
            "low": 103,
            "close": 109
        }
    ],
    options: [
        "데드 크로스 - 단기 이평의 하방 교차로 매도 신호",
        "골든 크로스 - 단기 이평의 상방 교차로 매수 신호",
        "볼린저 스퀴즈 - 변동성 수축 및 돌파 신호",
        "다이버전스 수렴 - 지표와 가격의 동반 횡보"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 24,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 101,
            "low": 88,
            "close": 89
        },
        {
            "time": "Day 2",
            "open": 89,
            "high": 90,
            "low": 75,
            "close": 76
        },
        {
            "time": "Day 3",
            "open": 76,
            "high": 77,
            "low": 62,
            "close": 63
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "주가의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 25,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "주가의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 101,
            "low": 99,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 100,
            "low": 99,
            "close": 99
        },
        {
            "time": "Day 3",
            "open": 99,
            "high": 100,
            "low": 99,
            "close": 100
        }
    ],
    options: [
        "변동성 사멸로 인한 장기 횡보 및 거래 정지",
        "밴드 스퀴즈 후 변동성 팽창에 따른 추세 분출",
        "주가의 하방 붕괴로 인한 강한 하락 파동 시작",
        "이평선들의 수평 정렬에 따른 완전한 추세 고정"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 26,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 3,
    theoryRef: "09_risk_position_management.md",
    question: "총 투자 원금은 1,000만 원이며, 1회 거래 시 최대 손실 허용액을 원금의 2%(20만 원)로 제한하는 '2% 룰'을 지키려 합니다. 진입하려는 종목의 손절 라인 폭이 -5%일 때, 최대 매수(진입) 가능 금액은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 10000,
            "high": 10500,
            "low": 9800,
            "close": 10200
        },
        {
            "time": "Day 2",
            "open": 10200,
            "high": 10300,
            "low": 10000,
            "close": 10000
        }
    ],
    options: [
        "1,000만 원 (원금 전액 진입)",
        "200만 원 (원금의 20% 진입)",
        "400만 원 (원금의 40% 진입)",
        "500만 원 (원금의 50% 진입)"
    ],
    correctIndex: 2,
    explanation: "2% 룰에 기초한 포지션 사이징 공식은 `진입금액 = (총원금 * 리스크비율) / 손절비율` 입니다. 따라서 `20만 원 / 0.05 = 400만 원`이 됩니다. 400만 원어치 주식을 샀을 때 가격이 -5% 떨어져 강제 손절을 맞아도 내 계좌 총액에서 손실을 보는 돈은 정확히 2%인 20만 원으로 통제됩니다."
  },
  {
    id: 27,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 2,
    theoryRef: "09_risk_position_management.md",
    question: "어느 주식에 10,000원에 매수 진입합니다. 손절 라인은 9,500원(-5%)에 배치하고, 목표가는 11,500원(+15%)에 설정했습니다. 이 트레이딩 시나리오의 손익비(Risk-to-Reward Ratio)는 얼마입니까?",
    chartData: [
        {
            "time": "Today",
            "open": 10000,
            "high": 10000,
            "low": 10000,
            "close": 10000
        }
    ],
    options: [
        "1 : 1 (동일한 기대 수익과 리스크)",
        "1 : 2 (기대 수익이 리스크의 2배)",
        "1 : 3 (기대 수익이 리스크의 3배)",
        "2 : 1 (기대 수익이 리스크의 0.5배)"
    ],
    correctIndex: 2,
    explanation: "손절 폭(500원) 대비 익절 폭(1,500원)의 비례를 의미하므로 `1,500 / 500 = 3`, 즉 손익비는 1:3이 됩니다. 이처럼 잃는 돈의 최소 2~3배를 벌 수 있는 손익비 높은 구간만 반복적으로 거래해야 장기적으로 계좌가 생존합니다."
  },
  {
    id: 28,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 4,
    theoryRef: "09_risk_position_management.md",
    question: "손익비를 엄격히 통제하여 항상 기대 손실의 2배를 버는 매매(손익비 1:2)만 고집합니다. 이 경우 내 계좌 잔고가 손실 없이 제자리걸음(본전)을 유지하기 위해 필요한 수학적인 최소 승률(Win Rate)은 얼마인가요?",
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
        "50.0% (최소 절반 이상 성공)",
        "33.3% (3번 중 1번 성공으로 본전)",
        "25.0% (4번 중 1번 성공으로 본전)",
        "66.6% (3번 중 2번 성공으로 본전)"
    ],
    correctIndex: 1,
    explanation: "손익비가 1:2일 경우, 1번 이기면 +2를 벌고 2번 지면 -2를 잃으므로 3번 매매 중 1번만 이겨도 누적 수익은 0이 됩니다. 즉 손익비를 1:2 이상으로 유지하면 수학적으로 승률이 겨우 33.3%만 나와도 절대 파산하지 않고 계좌가 우상향할 발판이 마련됩니다."
  },
  {
    id: 29,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "10,000원에 산 주식이 15,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 15,000원 달성 후 주가가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 10000,
            "high": 12000,
            "low": 9900,
            "close": 11900
        },
        {
            "time": "Day 2",
            "open": 11900,
            "high": 15000,
            "low": 11800,
            "close": 14800
        }
    ],
    options: [
        "10,000원 (본전 수준 청산)",
        "13,500원 (최고점 대비 10% 하방 청산)",
        "14,000원 (최고점 대비 6.6% 하방 청산)",
        "12,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 15,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 13,500원`으로 확정 셋업되며, 주가가 13,500원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 30,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 3,
    theoryRef: "09_risk_position_management.md",
    question: "레버리지 10배를 적용하여 비트코인 롱(매수) 포지션을 구축했습니다. 만약 비트코인 가격이 매수가 대비 몇 % 역방향으로 등락하면 내 투자 원금이 100% 강제 청산(증거금 완전 소멸)당할까요?",
    chartData: [
        {
            "time": "Today",
            "open": 50000,
            "high": 50100,
            "low": 49900,
            "close": 50000
        }
    ],
    options: [
        "5.0% 하락 시",
        "10.0% 하락 시",
        "20.0% 하락 시",
        "100.0% 하락 시"
    ],
    correctIndex: 1,
    explanation: "레버리지 비율과 청산 거리 비율은 역수 관계입니다. `100% / 레버리지 배수` 공식에 따라, 10배 레버리지는 주가가 내 베팅의 반대 방향으로 단 10%만 움직여도 투자 원금이 전부 증발하고 포지션이 강제 종료(Liquidation)됩니다. 고배율 레버리지가 파산의 지름길인 이유입니다."
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
            "close": 124
        },
        {
            "time": "Day 2",
            "open": 124,
            "high": 135,
            "low": 123,
            "close": 134
        },
        {
            "time": "Day 3",
            "open": 134,
            "high": 148,
            "low": 133,
            "close": 146
        },
        {
            "time": "Day 4",
            "open": 146,
            "high": 151,
            "low": 140,
            "close": 147
        },
        {
            "time": "Day 5",
            "open": 141,
            "high": 143,
            "low": 135,
            "close": 136
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
            "close": 94
        },
        {
            "time": "Day 2",
            "open": 94,
            "high": 95,
            "low": 88,
            "close": 89
        },
        {
            "time": "Day 3",
            "open": 89,
            "high": 90,
            "low": 80,
            "close": 81
        },
        {
            "time": "Day 4",
            "open": 80,
            "high": 82,
            "low": 75,
            "close": 80
        },
        {
            "time": "Day 5",
            "open": 80,
            "high": 88,
            "low": 79,
            "close": 87
        }
    ],
    options: [
        "손절 없이 100% 비중으로 시장가 매수",
        "샛별형 완성에 따라 분할 매수 후 최저점 손절 셋업",
        "바닥 도달 기대로 주문 없이 무작정 대기",
        "상승 꼭대기에서 숏 진입 후 손절 없이 방치"
    ],
    correctIndex: 1,
    explanation: "하락 추세 끝에 도지와 장대양봉이 결합된 샛별형(Morning Star)은 매우 신뢰도 높은 바닥 상승 전환 신호입니다. 이 패턴을 보고 진입할 때는 반등 상승세에 분할 매수로 동참하되, 바닥을 잡아준 도지 캔들의 최저점(75달러) 아래를 최종 손절 라인으로 잡는 것이 수학적으로 가장 리스크 대비 보상 비율(손익비)이 훌륭한 전략입니다."
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
            "close": 182
        },
        {
            "time": "Day 2",
            "open": 182,
            "high": 195,
            "low": 180,
            "close": 193
        },
        {
            "time": "Day 3",
            "open": 193,
            "high": 202,
            "low": 190,
            "close": 191
        },
        {
            "time": "Day 4",
            "open": 191,
            "high": 201,
            "low": 188,
            "close": 189
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
            "close": 105
        },
        {
            "time": "Day 2",
            "open": 105,
            "high": 106,
            "low": 97,
            "close": 98
        },
        {
            "time": "Day 3",
            "open": 92,
            "high": 101,
            "low": 91,
            "close": 100
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
    id: 35,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 주가가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 128,
            "low": 119,
            "close": 127
        },
        {
            "time": "Day 2",
            "open": 127,
            "high": 138,
            "low": 126,
            "close": 136
        },
        {
            "time": "Day 3",
            "open": 133,
            "high": 134,
            "low": 130,
            "close": 131
        }
    ],
    options: [
        "상승 둔화 조짐에 따른 보유 물량 50% 분할 익절",
        "추세 일시 조정으로 간주하여 비중 확대 추가 매수",
        "추세 종결 판단에 따른 고배율 숏 포지션 즉시 진입",
        "이익 실현 없이 전량 장기 보유 전략 유지"
    ],
    correctIndex: 0,
    explanation: "하락 잉태형(Bearish Harami)은 이전의 강한 상승 추세 동력이 감속하기 시작했으며, 매도 압력이 힘을 기르고 있음을 암시하는 변곡 캔들입니다. 따라서 단기 스윙 트레이더는 물량의 일부(50%)를 분할 익절하여 리스크를 낮추고, 다음 캔들에서 이전 양봉 저점을 깨뜨리는 하락 하방 이탈이 추가되는지 지켜보는 것이 정석입니다."
  },
  {
    id: 36,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 100달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.5달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 105,
            "high": 108,
            "low": 102,
            "close": 103
        },
        {
            "time": "Day 2",
            "open": 103,
            "high": 104,
            "low": 99,
            "close": 100
        },
        {
            "time": "Day 3",
            "open": 100,
            "high": 101,
            "low": 98,
            "close": 98.5
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 100
                }
            ],
            "label": "중요 지지선 (100)",
            "color": "#10b981"
        }
    ],
    options: [
        "추가 물타기를 위해 자금을 동원하여 평단가 관리",
        "중요 지지선 붕괴(Breakdown) 확인 후 즉시 전량 손절",
        "지속 하락 시 추가 평단가 관리를 위해 매수 유보",
        "하방 이탈 시 즉시 반대 고배율 롱 포지션 진입"
    ],
    correctIndex: 1,
    explanation: "거래량이 동반된 장대음봉으로 주요 지지선 아래에서 종가가 결정되는 이탈 마감은 매수 지지 세력의 패배이자 추세 붕괴(Breakdown)의 신호입니다. 이 시점에서 물타기를 하거나 존버를 하면 파산적인 하락 조정을 겪을 수 있으므로 즉시 룰에 근거한 '전량 손절'을 집행해야 계좌를 살릴 수 있습니다."
  },
  {
    id: 37,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "150달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 주가가 숨 고르기 조정을 받으며 150달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 140,
            "high": 146,
            "low": 139,
            "close": 144
        },
        {
            "time": "Day 2",
            "open": 144,
            "high": 157,
            "low": 143,
            "close": 155
        },
        {
            "time": "Day 3",
            "open": 155,
            "high": 156,
            "low": 149,
            "close": 150
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 150
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선 (150)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "가짜 돌파(휩소) 판단에 따른 고배율 숏 진입",
        "돌파 후 리테스트 성공 확인 시 지지선 눌림목 매수",
        "추격 매수 기회 상실로 판단하고 거래 포기",
        "160달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(150달러)으로 주가가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 38,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 80달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 95,
            "high": 98,
            "low": 80,
            "close": 88
        },
        {
            "time": "Day 2",
            "open": 88,
            "high": 91,
            "low": 80,
            "close": 84
        },
        {
            "time": "Day 3",
            "open": 84,
            "high": 86,
            "low": 80,
            "close": 81
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 80
                }
            ],
            "label": "지지선 (80)",
            "color": "#10b981"
        }
    ],
    options: [
        "삼중 바닥 지지로 판단하고 매수 비중 대폭 확대",
        "디센딩 수렴 확인 후 하방 이탈 위험 대비 관망",
        "물타기 평단가 관리를 위해 매수 보증금 추가 투입",
        "추세와 무관하게 숏 포지션으로 전환 후 무기한 보유"
    ],
    correctIndex: 1,
    explanation: "지지선 부근에서 고점이 점점 낮아지는 '디센딩' 형태는 매수 지원 강도가 둔화되고 매도 출하 공급이 가격을 계속 하방으로 압박하고 있음을 증명합니다. 지지 성공보다 지선 하방 붕괴 후 급락할 확률이 높으므로, 지지선이라는 명목만으로 함부로 매수 진입하지 말고 돌파/이탈 컨펌을 기다려 관망하는 것이 현명합니다."
  },
  {
    id: 39,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "주가가 120달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 116달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 112,
            "high": 118,
            "low": 111,
            "close": 117
        },
        {
            "time": "Day 2",
            "open": 117,
            "high": 122,
            "low": 116,
            "close": 121
        },
        {
            "time": "Day 3",
            "open": 121,
            "high": 122,
            "low": 115,
            "close": 116
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 120
                }
            ],
            "label": "장기 저항선 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "불 트랩(Bull Trap) 확인 후 추가 하락 방지 즉시 손절",
        "저항선 부근 매수세 복귀를 기대하며 전량 홀딩",
        "평단가 관리 차원에서 추가 물타기 매수 집행",
        "상황을 판단하기 위해 시장가로 추가 분할 진입"
    ],
    correctIndex: 0,
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(120달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 40,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "10_psychology_routine_review.md",
    question: "주요 지지선(250달러선)이 아래로 무너질 때 제때 손절 처리를 하지 못해 주가가 220달러선까지 끌려 내려갔습니다. 다행히 단기 매도 진정세로 반등이 나와 주가가 다시 250달러 부근까지 상승하여 회복을 눈앞에 두고 있습니다. 이때 손실을 최소화하는 현명한 시나리오 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 260,
            "high": 262,
            "low": 248,
            "close": 249
        },
        {
            "time": "Day 2",
            "open": 249,
            "high": 250,
            "low": 220,
            "close": 222
        },
        {
            "time": "Day 3",
            "open": 222,
            "high": 235,
            "low": 221,
            "close": 234
        },
        {
            "time": "Day 4",
            "open": 234,
            "high": 251,
            "low": 233,
            "close": 249
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 250
                }
            ],
            "label": "붕괴된 지지선 -> 저항선으로 변형 (250)",
            "color": "#ef4444"
        }
    ],
    options: [
        "역할 전환(저항선) 도달에 따른 탈출 및 현금화",
        "V자 반등 성공 확신에 따른 추가 매수 비중 확대",
        "원금 회복 및 추가 수익 시까지 영구 홀딩 관망",
        "하락 추세 지속에 따른 반대 숏 포지션 스위칭"
    ],
    correctIndex: 0,
    explanation: "하방으로 깨진 지지선은 반등할 때 가장 뚫기 힘든 '강력한 저항선'으로 성격이 바뀝니다. 따라서 손절 기회를 놓치고 물려있던 트레이더는 반등하여 옛 지지선(250달러)에 도달했을 때를 '최선의 리스크 탈출 기회(탈출구)'로 삼아 전량 매도하거나 비중을 극도로 덜어내야 다가올 2차 하락 파동의 파산을 막을 수 있습니다."
  },
  {
    id: 41,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "주가가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 100,
            "close": 102
        },
        {
            "time": "Day 2",
            "open": 102,
            "high": 110,
            "low": 102,
            "close": 109
        },
        {
            "time": "Day 3",
            "open": 109,
            "high": 125,
            "low": 109,
            "close": 124
        },
        {
            "time": "Day 4",
            "open": 124,
            "high": 125,
            "low": 114,
            "close": 115
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 100
                },
                {
                    "x": 3,
                    "y": 123
                }
            ],
            "label": "가파른 단기 추세선 (붕괴)",
            "color": "#ef4444"
        },
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 100
                },
                {
                    "x": 3,
                    "y": 110
                }
            ],
            "label": "완만한 장기 추세선 (지탱 중)",
            "color": "#10b981"
        }
    ],
    options: [
        "추세 붕괴 판단에 따른 전량 손절 및 영구 이탈",
        "가속 추세 이탈에 따른 50% 분할 익절 및 분산",
        "단기 지지선 붕괴를 무시한 고배율 물타기 매수",
        "장기 추세선까지 조정을 대비한 신규 매수 대기"
    ],
    correctIndex: 1,
    explanation: "가파르게 우상향하던 가속 추세선(Accelerated Trendline)이 하방 돌파되는 것은 기존 폭등 랠리의 속도가 둔화되고 완만한 본래 장기 추세선(장기 매물대)을 향해 정상적인 가격 조정을 받기 시작했음을 뜻합니다. 따라서 물량의 50%가량을 털어 수익을 실현하고 남은 물량으로 장기 추세선의 3rd Touch 지지 성공 여부를 테스트하는 것이 리스크 관리의 기본입니다."
  },
  {
    id: 42,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 90,
            "close": 92
        },
        {
            "time": "Day 2",
            "open": 92,
            "high": 94,
            "low": 82,
            "close": 83
        },
        {
            "time": "Day 3",
            "open": 83,
            "high": 85,
            "low": 75,
            "close": 76
        },
        {
            "time": "Day 4",
            "open": 76,
            "high": 90,
            "low": 75,
            "close": 89
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 102
                },
                {
                    "x": 3,
                    "y": 86
                },
                {
                    "x": 0,
                    "y": 90
                },
                {
                    "x": 3,
                    "y": 76
                }
            ],
            "label": "하락 평행 채널 상한/하한",
            "color": "#f59e0b"
        }
    ],
    options: [
        "상단 돌파 확인 즉시 숏 전량 손절 및 대피",
        "채널 재진입 기대로 숏 포지션 추가 물타기",
        "손절 없이 유지하면서 포지션 본전 도달 대기",
        "포지션 유지 후 증거금을 출금하여 강제 횡보"
    ],
    correctIndex: 0,
    explanation: "하락 평행 채널의 상단 저항선 상향 돌파(Breakout)는 기존 하락 트렌드의 사멸과 매수세 지배령 복귀를 뜻합니다. 지표와 거래량이 동반된 돌파 확인 시에는 숏 포지션을 지체 없이 기계적으로 칼손절하여 자산을 보호하는 것이 원칙입니다."
  },
  {
    id: 43,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 주가가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 108,
            "low": 99,
            "close": 106
        },
        {
            "time": "Day 2",
            "open": 106,
            "high": 112,
            "low": 102,
            "close": 104
        },
        {
            "time": "Day 3",
            "open": 104,
            "high": 106,
            "low": 98,
            "close": 100
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 110
                },
                {
                    "x": 2,
                    "y": 112
                },
                {
                    "x": 0,
                    "y": 98
                },
                {
                    "x": 2,
                    "y": 100
                }
            ],
            "label": "상승 평행 채널",
            "color": "#10b981"
        }
    ],
    options: [
        "채널 내 유지를 기대로 지정가 즉시 매수",
        "중심선 저항 확인 후 채널 하단 안착 대기",
        "하방 휩소 판단에 따른 레버리지 추가 매수",
        "추세와 무관한 숏 포지션 구축 후 관망"
    ],
    correctIndex: 1,
    explanation: "상승 평행 채널에서 미드라인(Mid-line)은 매우 중요한 심리적 지지와 저항선입니다. 미드라인이 저항선으로 뒤바뀌어 음봉으로 흘러내리는 경우 높은 확률로 채널 하단 경계선까지 가격이 조정을 받게 되므로, 중심선 저항 확인 시점에서는 섣부른 매수 진입을 피하고 채널 하단의 명확한 반등 타점을 유도해야 합니다."
  },
  {
    id: 44,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 80,
            "high": 90,
            "low": 80,
            "close": 88
        },
        {
            "time": "Day 2",
            "open": 88,
            "high": 99,
            "low": 88,
            "close": 95
        },
        {
            "time": "Day 3",
            "open": 95,
            "high": 96,
            "low": 90,
            "close": 92
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 80
                },
                {
                    "x": 1,
                    "y": 88
                },
                {
                    "x": 2,
                    "y": 90
                }
            ],
            "label": "상승 추세선 (3rd Touch 기대선)",
            "color": "#10b981"
        }
    ],
    options: [
        "손절 라인 없이 지정가로 1차 매수 몰빵 진입",
        "3rd Touch 타점 진입 및 추세선 하단 칼손절 셋업",
        "하방 붕괴 예상을 통한 고배율 숏 즉각 진입",
        "목표가 터치 시까지 무작정 대기 후 추격 매수"
    ],
    correctIndex: 1,
    explanation: "추세선 상의 3번째 지지 포인트(3rd Touch)는 추세 신뢰도가 형성되는 대단히 성공률 높은 정석적 눌림목 타점입니다. 진입 가격과 손절 라인(추세선 이탈가)의 거리가 매우 가깝기 때문에 기대 수익 대비 잃을 금액이 매우 적어 프로 트레이더들이 가장 선호하는 칼손절 매수 스팟입니다."
  },
  {
    id: 45,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "주가가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 120달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 125,
            "high": 126,
            "low": 110,
            "close": 112
        },
        {
            "time": "Day 2",
            "open": 112,
            "high": 113,
            "low": 98,
            "close": 100
        },
        {
            "time": "Day 3",
            "open": 100,
            "high": 119,
            "low": 99,
            "close": 118
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 125
                },
                {
                    "x": 1,
                    "y": 112
                },
                {
                    "x": 2,
                    "y": 105
                }
            ],
            "label": "하락 추세선 (돌파됨)",
            "color": "#ef4444"
        },
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 120
                }
            ],
            "label": "수평 매물대 저항선 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "돌파 확인 즉시 종가 기준 시장가 100% 매수",
        "수평 저항 돌파 검증 시까지 매수 유보 및 대기",
        "돌파 전조 현상 기대로 레버리지 선배팅 집행",
        "추세선 돌파를 가짜로 간주한 숏 포지션 진입"
    ],
    correctIndex: 1,
    explanation: "하락 추세선의 돌파는 긍정적이나 수평 매물대 저항선이 바로 위에 있다면 이중 저항 작용에 의해 막히는 경우가 대단히 잦습니다. 추세선 상방 휩소(속임수)에 당하지 않으려면 겹저항 중 최종 관문인 수평 매물대 저항선 돌파 혹은 리테스트 지지를 확인하고 진입하는 것이 보수적이고 안전한 원칙입니다."
  },
  {
    id: 46,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(100달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 100달러를 돌파할 것을 미리 예측하고 98달러에서 비중 100% 매수로 진입했습니다. 그러나 주가는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 92달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 80,
            "high": 100,
            "low": 80,
            "close": 95
        },
        {
            "time": "Day 2",
            "open": 95,
            "high": 100,
            "low": 88,
            "close": 97
        },
        {
            "time": "Day 3",
            "open": 97,
            "high": 98,
            "low": 91,
            "close": 92
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 100
                }
            ],
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 80
                },
                {
                    "x": 1,
                    "y": 88
                },
                {
                    "x": 2,
                    "y": 94
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "하방 이탈 확인 즉시 손절하여 추가 폭락 차단",
        "조정을 이용해 평단가를 조절하는 분할 물타기",
        "본전 탈출 시까지 포지션을 유지하며 관망",
        "손절 라인을 하단으로 조정하고 대기 주문 유지"
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(92달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 47,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(80달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(87달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 95,
            "high": 95,
            "low": 70,
            "close": 78
        },
        {
            "time": "Day 2",
            "open": 78,
            "high": 82,
            "low": 60,
            "close": 75
        },
        {
            "time": "Day 3",
            "open": 75,
            "high": 79,
            "low": 68,
            "close": 76
        },
        {
            "time": "Day 4",
            "open": 76,
            "high": 88,
            "low": 75,
            "close": 87
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 80
                }
            ],
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO) 현상에 따른 돌파봉 꼭대기 추격 매수",
        "돌파 넥라인 부근의 리테스트 조정 눌림목 매수",
        "반등 랠리 종결 판단에 따른 역베팅 숏 포지션",
        "추세 전환 확인 후 무조건적인 관심종목 제외"
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(80달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 48,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(110달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 130,
            "high": 132,
            "low": 110,
            "close": 112
        },
        {
            "time": "Day 2",
            "open": 112,
            "high": 116,
            "low": 102,
            "close": 104
        },
        {
            "time": "Day 3",
            "open": 104,
            "high": 108,
            "low": 98,
            "close": 100
        },
        {
            "time": "Day 4",
            "open": 100,
            "high": 112,
            "low": 99,
            "close": 110
        }
    ],
    options: [
        "손절 없이 청산가에 의존하여 장기 홀딩",
        "상방 돌파 확인 후 진입 및 직전 최저점 손절 셋업",
        "평단가 개선을 위한 지속적인 분할 물타기 매수",
        "상단 저항선 돌파 시점을 이용한 숏 포지션 스위칭"
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 98달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 49,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "주가가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(300달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 260,
            "high": 280,
            "low": 260,
            "close": 278
        },
        {
            "time": "Day 2",
            "open": 278,
            "high": 295,
            "low": 272,
            "close": 290
        },
        {
            "time": "Day 3",
            "open": 290,
            "high": 305,
            "low": 298,
            "close": 301
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 260
                },
                {
                    "x": 1,
                    "y": 272
                },
                {
                    "x": 2,
                    "y": 298
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 하방 이탈 위험에 따른 롱 포지션 매도",
        "상승 지속 확신에 따른 레버리지 추가 불타기",
        "장기 상승 흐름 기대로 손절 없이 무기한 홀딩",
        "다른 종목으로의 포지션 분산을 위한 관망"
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 50,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 주가가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(150달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 140,
            "high": 142,
            "low": 128,
            "close": 130
        },
        {
            "time": "Day 2",
            "open": 130,
            "high": 140,
            "low": 129,
            "close": 138
        },
        {
            "time": "Day 3",
            "open": 138,
            "high": 140,
            "low": 134,
            "close": 135
        },
        {
            "time": "Day 4",
            "open": 135,
            "high": 154,
            "low": 134,
            "close": 152
        }
    ],
    options: [
        "핸들 상방 돌파 확인 후 진입 및 핸들 저점 손절",
        "하락 지속 판단에 따른 즉각적인 전량 손절",
        "평단가 부근이므로 추가 손절 설정 없이 관망",
        "돌파 여부 확인 전 고점 돌파 매수 주문 100%"
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 134달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 51,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(100달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 90,
            "high": 110,
            "low": 88,
            "close": 105
        },
        {
            "time": "Day 2",
            "open": 105,
            "high": 107,
            "low": 98,
            "close": 100
        }
    ],
    options: [
        "하락 전환 신호로 판단하여 전량 즉시 손절",
        "추세 지속 신호 기대로 지선 부근 추가/신규 매수",
        "지표 과매수 판단에 따른 계좌 거래 정지",
        "손절 설정 없이 무제한 레버리지 롱 대응"
    ],
    correctIndex: 1,
    explanation: "주가의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(98달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 52,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "주가가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 115,
            "low": 99,
            "close": 112
        },
        {
            "time": "Day 2",
            "open": 112,
            "high": 128,
            "low": 110,
            "close": 125
        },
        {
            "time": "Day 3",
            "open": 125,
            "high": 139,
            "low": 122,
            "close": 136
        }
    ],
    options: [
        "과매수 도달 판단에 따른 고배율 숏 무리한 진입",
        "추종 손절매(Trailing Stop)를 통한 수익 극대화",
        "상승폭 만족에 따른 즉각적인 전량 시장가 익절",
        "손절 가격을 해제하고 시세 지속 시까지 방치"
    ],
    correctIndex: 1,
    explanation: "강세 추세가 지나치게 강할 경우 볼린저 밴드 상단을 타고 오르는 밴드워크 현상과 RSI 과매수 현상이 영구 유지될 수 있습니다. 이때 단순 과매수 수치를 이유로 숏 포지션을 잡으면 파산합니다. 기존 매수 포지션의 익절선(Trailing Stop)을 상향 관리하여 추세 상승 이익을 극대화하고 신규 진입은 자제하는 것이 정석 리스크 관리입니다."
  },
  {
    id: 53,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 주가가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 100,
            "high": 102,
            "low": 90,
            "close": 91
        },
        {
            "time": "Hour 2",
            "open": 91,
            "high": 92,
            "low": 80,
            "close": 82
        }
    ],
    options: [
        "단기 음봉 관성 기대로 즉각 숏 포지션 진입",
        "큰 시간 프레임의 상승 다이버전스 타점 매수",
        "지표 충돌로 판단하고 시장가 즉시 롱 진입",
        "변동성 기대로 무작정 도박성 잡코인 진입"
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 54,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "주가는 200달러 저항대를 뚫고 220달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 180,
            "high": 205,
            "low": 179,
            "close": 200
        },
        {
            "time": "Day 2",
            "open": 200,
            "high": 222,
            "low": 198,
            "close": 220
        }
    ],
    options: [
        "추세 지속 확신으로 보유 비중 추가 불타기",
        "상승 모멘텀 약화 다이버전스 확인 후 50% 익절",
        "익절 설정 없이 전고점 도달 시까지 홀딩",
        "고점 붕괴 기대로 숏 포지션 10배 베팅"
    ],
    correctIndex: 1,
    explanation: "주가는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 55,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "주가가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 105,
            "high": 106,
            "low": 99,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 101,
            "low": 95,
            "close": 96
        }
    ],
    options: [
        "지지선 이탈 및 데드크로스 확인 즉시 손절",
        "이평선 지지력을 믿고 하방 물타기 추가 매수",
        "하락 조정 후 반등 기대로 무기한 홀딩 관망",
        "청산가 도달 시까지 어떠한 대응 없이 방치"
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 56,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 3,
    theoryRef: "09_risk_position_management.md",
    question: "주식 매수 후 가격이 급락하여 내가 설정해 둔 최대 감내 손실 한도인 계좌 총원금 대비 -2% 라인(손절매 지정 가격)에 완벽하게 닿았습니다. 마침 본전 생각과 함께 '조금만 더 버티면 반등할 텐데...'하는 강한 뇌동매매 유혹이 솟구칩니다. 이때 원칙 트레이더의 결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 99,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 101,
            "low": 94,
            "close": 95
        }
    ],
    options: [
        "손절 라인을 임의로 하향 조정하고 홀딩",
        "평단가 관리 차원의 지속적 물타기 매수 집행",
        "원칙에 따라 뇌동을 제어하고 즉시 기계적 손절",
        "손실은 배제하고 반등 기대를 통한 무기한 보유"
    ],
    correctIndex: 2,
    explanation: "트레이딩의 승패는 예측이 아닌 '리스크 통제'에 달려 있습니다. 사전에 정한 계좌 대비 2% 리스크 한도에 도달했을 때 희망 회로를 돌리며 손절을 미루거나 물타기를 집행하는 순간 계좌는 서서히 영으로 깎여 파산합니다. 멘탈의 충동을 통제하고 기계적으로 전량 칼손절하는 것이 절대 파산하지 않는 시장의 1법칙입니다."
  },
  {
    id: 57,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 3,
    theoryRef: "10_psychology_routine_review.md",
    question: "최근 3회 연속 거래에서 계속해서 손절(Stop Loss)을 맞아 뇌 내의 도파민 체계가 무너지고 심리가 극도로 불안해져 분노와 보복 매매 충동이 밀려옵니다. 이 상황에서 파산을 막는 가장 훌륭한 매매 심리 대처법은?",
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
        "손실 복구를 위해 레버리지를 증액해 즉시 진입",
        "뇌동 방지를 위해 HTS를 종료하고 매매 일지 작성 및 휴식",
        "추천 매매 신호 유료 리딩방에 즉시 가입 및 추종",
        "심리적 회복을 위해 역베팅 숏 포지션 추가"
    ],
    correctIndex: 1,
    explanation: "연속 손실 후 발생하는 복수심과 분노는 트레이더를 뇌동매매와 계좌 파멸로 이끄는 가장 치명적인 감정 상태입니다. 멘탈 붕괴를 느꼈을 때는 즉각 행동을 멈추고 시스템을 강제 종료하여 시장과 물리적 격리를 통해 냉정을 찾는 것만이 자산을 파산 리스크로부터 살려내는 훌륭한 트레이딩 행동입니다."
  },
  {
    id: 58,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "09_risk_position_management.md",
    question: "진입하고자 하는 매수 자리를 분석해 보니, 기술적 분석 상 이길 수 있는 확률(승률)은 반반인 50% 수준입니다. 그러나 손절 시 기대 손실금액 대비 성공 시 획득할 수 있는 기대 수익금액의 비율(손익비)을 정밀 셋업 해보니 1 : 1.2 수준으로 다소 애매하게 도출되었습니다. 원칙 트레이더의 진입 결정은?",
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
        "단기 변동성 기대로 부적합한 손익비 시장가 진입",
        "마이너스 기댓값 거래 유보 및 우수 타점 대기",
        "레버리지를 높여 손익비 구조를 임의 조정 시도",
        "반대 방향으로 고배율 역베팅을 즉시 실행"
    ],
    correctIndex: 1,
    explanation: "수학적으로 승률 50%일 때 손익비가 최소 1:2(잃을 때 1, 벌 때 2) 이상이 나오지 않으면 복리 매매 시 수수료와 호가 슬리피지에 밀려 잔고가 무조건 마이너스로 수렴합니다. 타점이 눈에 들어오더라도 사전에 기대 손익비 필터에 걸려 탈락한다면 패스를 선언하고 관망하는 것이 현명한 생존 원칙입니다."
  },
  {
    id: 59,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 4,
    theoryRef: "09_risk_position_management.md",
    question: "갑작스러운 거시 경제 발표로 내가 매매 중인 종목의 캔들 변동성 폭(ATR)이 평소 시세의 2배 수준으로 널뛰기 시작했습니다. 1회 거래당 내 계좌 원금의 최대 2% 리스크 한도를 동일하게 고수하기 위해 취해야 할 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 98,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 110,
            "low": 90,
            "close": 102
        }
    ],
    options: [
        "평소 변동성과 동일한 비중 및 손절 거리 고수",
        "손절 거리를 넓히는 대신 진입 포지션 수량 축소",
        "변동성이 확대되었으므로 2배 비중으로 적극 지름",
        "즉시 전량 손절하고 시장 상황 정상화 대기"
    ],
    correctIndex: 1,
    explanation: "시장 변동성이 커질 때는 손절 스톱 아웃이 잦으므로 손절폭(%)을 넓혀 숨 쉴 공간을 확보해 주는 것이 합리적입니다. 단, 손절폭을 2배로 늘린다면 계좌 대비 리스크 한도가 2배(4%)로 커지므로, 진입 포지션의 계약 수량을 50%로 줄여 리스크 노출 총액을 2%로 완벽하게 동일 통제하는 것이 포지션 사이징(Position Sizing)의 정석 원칙입니다."
  },
  {
    id: 60,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 3,
    theoryRef: "09_risk_position_management.md",
    question: "투자자 A의 전체 투자 원금은 500만 원이며, 1회 거래당 최대 허용 리스크 금액은 원금의 2%인 10만 원입니다. 현재 주가가 10,000원이며, 기술적 분석 상 합리적인 손절선은 지지선 바로 밑인 9,500원(-5%)입니다. 2% 룰 리스크 관리 원칙에 따라 A가 진입(매수)해야 하는 최대 주식 수량은?",
    chartData: [
        {
            "time": "Today",
            "open": 10000,
            "high": 10000,
            "low": 10000,
            "close": 10000
        }
    ],
    options: [
        "500주 (투자금 전액 시장가 매수)",
        "200주 (손실 한도 10만 원 맞춤 매수)",
        "50주 (보수적 극단적 비중 축소)",
        "100주 (절반 비중 고정 매수)"
    ],
    correctIndex: 1,
    explanation: "포지션 크기 계산 공식은 `최대 매수 규모 = 최대 허용 리스크 금액 / 손절매 비율` 입니다. 이 시나리오에서 `100,000원 / 0.05(5%) = 2,000,000원`이 최대 허용 진입금액이 되며, 이를 주가 10,000원으로 나누면 `200주`가 도출됩니다. 200주 진입 후 -5% 가격 폭락으로 손절 당해도 내 총원금에서 깎이는 돈은 정확히 10만 원(2%)으로 완벽히 리스크 통제됩니다."
  },
  {
    id: 61,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "주가가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 105,
            "low": 99,
            "close": 104
        },
        {
            "time": "Day 2",
            "open": 104,
            "high": 109,
            "low": 103,
            "close": 108
        },
        {
            "time": "Day 3",
            "open": 108,
            "high": 110,
            "low": 107,
            "close": 108
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 109
                },
                {
                    "x": 2,
                    "y": 109
                }
            ],
            "label": "저항선",
            "color": "#ef4444"
        }
    ],
    options: [
        "강한 매수 기세 기대로 즉시 돌파 매매 풀매수",
        "저항벽 매도 공급 세력 분산 확인 후 이익 실현",
        "대량 거래 확인에 따른 손절 해제 후 장기 투자",
        "반등 실패에 따른 고배율 보복 숏 베팅 가동"
    ],
    correctIndex: 1,
    explanation: "캔들 몸통 크기(스프레드)가 좁은데 거래량이 매우 크게 폭증했다는 것은 저항선 부근에서 들어오는 매수세만큼 세력의 매도 물량 공급이 쏟아져 막강한 저항 벽을 형성하고 있다는 뜻입니다. VSA에서는 이를 불화(Disharmony)로 규정하며 상승 추세 감속 및 하락 반전의 경고로 해독합니다."
  },
  {
    id: 62,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "주가가 장기 횡보하던 박스권 지지선인 200달러를 깨고 195달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 201달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 210,
            "high": 212,
            "low": 200,
            "close": 202
        },
        {
            "time": "Day 2",
            "open": 202,
            "high": 204,
            "low": 195,
            "close": 201
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 200
                },
                {
                    "x": 1,
                    "y": 200
                }
            ],
            "label": "지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "지지선 붕괴 확정으로 간주한 시장가 숏 추격",
        "스윕(sweep) 판단 하에 아래꼬리 저점 손절 잡고 롱",
        "아무런 신호도 아니라고 판단하고 포지션 방치",
        "지지선 이탈 기대로 전량 손절 후 시장 영구 탈출"
    ],
    correctIndex: 1,
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(195달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 63,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "주가는 250달러에서 290달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 230,
            "high": 260,
            "low": 228,
            "close": 255
        },
        {
            "time": "Wave 2",
            "open": 255,
            "high": 275,
            "low": 250,
            "close": 270
        },
        {
            "time": "Wave 3",
            "open": 270,
            "high": 290,
            "low": 265,
            "close": 288
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "주가는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 64,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 99,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 112,
            "low": 99,
            "close": 110
        }
    ],
    options: [
        "수렴 끝자락에서 거래량이 최저치인 상태 유지",
        "평균 대비 1.5~2배 이상 거래량 급증하며 돌파 마감",
        "거래량이 전혀 변하지 않는 평이한 상태 유지",
        "호가 스프레드가 가장 좁아지는 횡보 상태"
    ],
    correctIndex: 1,
    explanation: "참된 저항 돌파(True Breakout)는 저항선 부근의 두터운 대기 매도 공급 물량을 대규모 자금으로 전부 씹어 삼키고 돌파해야 함을 뜻합니다. 따라서 반드시 평균 대비 1.5배~2배 이상의 거래량 분출이 동반되어야 신뢰할 수 있으며, 거래량이 적은 돌파는 꼬리 달고 내려앉는 불 트랩(Bull Trap)일 확률이 매우 높습니다."
  },
  {
    id: 65,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "비트코인 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 50000,
            "high": 50500,
            "low": 49200,
            "close": 49500
        },
        {
            "time": "Day 2",
            "open": 49500,
            "high": 49800,
            "low": 48000,
            "close": 49600
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 49200
                },
                {
                    "x": 1,
                    "y": 49200
                }
            ],
            "label": "전저점 지지선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "지지선을 장대음봉으로 돌파하여 20% 폭락 마감",
        "전저점 이탈로 손절 유도 후 지지선 위 아래꼬리 안착",
        "오차 없이 지지선 터치 후 꼬리 없는 수평 도지 횡보",
        "거래량 없이 즉각 상승 빔 분출로 전고점 탈환"
    ],
    correctIndex: 1,
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 주가는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 66,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 115,
            "low": 98,
            "close": 101
        }
    ],
    options: [
        "강한 저점 매수 기회로 인지하여 비중 대폭 추가",
        "고점 매도 Rejection 확인 후 기존 롱 포지션 대피",
        "박스 횡보 수렴 기대로 마틴게일 추가 매수 가동",
        "이평선 정배열 판단에 따른 포지션 변경 없이 홀딩"
    ],
    correctIndex: 1,
    explanation: "위꼬리가 매우 긴 캔들이 대량 거래량과 함께 터졌다는 것은 고점 돌파 시도가 있었으나 그 자리에 숨어 있던 세력의 막강한 청산 매도 벽(Supply)을 만나 격렬하게 두들겨 맞고 밀려났음을 의미합니다. 상방 거절의 심리가 지배적이므로 고점 피로 및 하락 전환이 임박한 위험 징후입니다."
  },
  {
    id: 67,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "주가가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 100,
            "high": 103,
            "low": 97,
            "close": 101
        },
        {
            "time": "Week 2",
            "open": 101,
            "high": 102,
            "low": 99,
            "close": 100
        }
    ],
    options: [
        "박스권 변동성 부재 기대로 장기 무대응 관망",
        "에너지 수축 스퀴즈 확인 후 밴드 이탈 돌파 대기",
        "지표 신뢰 불가 판단으로 볼린저 밴드 지표 삭제",
        "중심선 지지로 판단하여 고배율 매수 대기 주문"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 68,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "주가는 HL(Higher Low)을 형성하며 이전 직전 저점(90달러)보다 높은 저점(95달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 90,
            "close": 91
        },
        {
            "time": "Day 2",
            "open": 91,
            "high": 96,
            "low": 95,
            "close": 95
        }
    ],
    options: [
        "일반 상승 다이버전스 - 추세 종결로 즉각 공매도",
        "히든 상승 다이버전스 - 지선 눌림목 롱 진입 활용",
        "일반 하락 다이버전스 - 모든 매수 포지션 정리",
        "지표 오작동 휩소 구간 판단으로 양방향 관망"
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 69,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "트위터 및 뉴스의 호재 찌라시 확인 즉시 추격",
        "지지선+이평선+다이버전스+아래꼬리 등 분석 중첩 시",
        "RSI 과매수 영역 진입 즉시 롱 포지션 진입",
        "독립적 분석 없이 오직 보조지표의 단일 수치 신호"
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 70,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(120달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 110,
            "high": 112,
            "low": 109,
            "close": 111
        },
        {
            "time": "Day 2",
            "open": 111,
            "high": 124,
            "low": 110,
            "close": 122
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 120
                },
                {
                    "x": 1,
                    "y": 120
                }
            ],
            "label": "저항선",
            "color": "#ef4444"
        }
    ],
    options: [
        "돌파 마감 확인 즉시 시장가 추가 매수 집행",
        "돌파된 저항선의 지지 전환(Retest) 시 지정가 진입",
        "반등 조정이 불가능하다고 판단하여 최고점 롱 추격",
        "속임수 돌파 확신으로 고배율 역베팅 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항 돌파 후 즉시 가격을 따라붙는 추격 매수는 휩소 조정 시 심각한 손실을 초래합니다. 돌파된 라인이 S/R Flip을 통해 지지로 작용하는지 확인하는 되돌림 리테스트(Retest) 시점에 진입하는 것이, 지선 바로 아래에 좁은 손절 라인을 설계하고 이익 기대 폭을 넓힐 수 있는 가장 이상적인 정석 실행법입니다."
  },
  {
    id: 71,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 100,
            "high": 100,
            "low": 100,
            "close": 100
        },
        {
            "time": "Day 1",
            "open": 100,
            "high": 106,
            "low": 100,
            "close": 105
        }
    ],
    options: [
        "1차 저항대 진입 시 레버리지를 활용해 불타기",
        "목표가 터치 시까지 100% 비중 무대응 홀딩",
        "1:1 지점 50% 분할 익절 및 남은 물량 본전 손절 상향",
        "단기 반등 확인 즉시 전량 기계적 청산 및 퇴장"
    ],
    correctIndex: 2,
    explanation: "이득이 발생해 손익비 1:1 수준에 오면 물량의 절반을 분할 익절(Scale-out)하고 남은 포지션의 스톱로스를 진입가로 이동(Break-even)시키는 것이 포지션 관리의 기본입니다. 이렇게 셋업하면 차트가 갑자기 폭락세로 뒤집혀도 최소 본전 혹은 반절 익절 약수익으로 끝나 해당 거래의 최대 리스크가 Zero(0)로 봉쇄됩니다."
  },
  {
    id: 72,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 주가가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 110,
            "low": 99,
            "close": 108
        },
        {
            "time": "Day 2",
            "open": 108,
            "high": 120,
            "low": 107,
            "close": 118
        },
        {
            "time": "Day 3",
            "open": 118,
            "high": 135,
            "low": 117,
            "close": 132
        }
    ],
    options: [
        "RSI 과과열 조짐 확인 즉시 시장가 전량 익절",
        "Higher Low 지지 직하방으로 손절 추종 익절 셋업",
        "이익 보존을 포기하고 손익절 라인을 해제 후 홀딩",
        "즉시 숏 포지션 10배로 맞불을 놓는다"
    ],
    correctIndex: 1,
    explanation: "강세 추세가 터졌을 때 지레짐작으로 청산하면 상승 파동의 초입만 먹고 끝납니다. 추세 붕괴의 명확한 신호(BOS/MSB)가 나오거나, 가격의 구조적 높은 저점(HL)이 깨질 때까지 손절 라인을 계속 추종해서 상향하는 '추격 손절매(Trailing Stop)'를 가동하는 것이 추세 이익을 극대화하는 정석 기법입니다."
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
        "시장가로 최고 배율을 설정하여 즉시 체결",
        "돌파 확인 후 지정가 대기 주문으로 단가 조절",
        "슬리피지를 예방하기 위해 즉각적인 거래 취소",
        "호가창 스프레드와 무관하게 고배율 레버리지"
    ],
    correctIndex: 1,
    explanation: "변동성이 크고 호가가 얇은 시장에서 돌파 시 시장가 진입은 나쁜 단가로 체결되는 슬리피지 비용을 발생시켜 시작부터 손실을 크게 안고 갑니다. 돌파 확인 후 되돌림 가격대에서 지정가(Limit Order)를 대기시켜 체결 단가를 내 손아귀에 고정하는 리스크 관리가 필요합니다."
  },
  {
    id: 74,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "10_psychology_routine_review.md",
    question: "원칙 기반의 정석 매매 셋업(Trading Setup)을 설계할 때, 진입 전 반드시 사전에 수치로 명문화되어 결정되어야 할 요소가 아닌 것은?",
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
        "진입 조건(Trigger)과 구체적인 손절 가격(Stop Loss)",
        "거래 당일 본인의 주관적인 직감과 감정적 목표가",
        "진입하려는 구체적인 포지션 규모 및 분할 익절선",
        "거래 아이디어가 무효화되는 구체적 가격 지점"
    ],
    correctIndex: 1,
    explanation: "매매 셋업은 규칙에 기반한 수치들(진입가, 손절가, 목표가, 수량)로 사전에 철저히 규격화되어야 합니다. 당일의 운이나 주관적 느낌, 예감에 기초한 비과학적 청산 설정은 셋업에서 배제되어야 할 대표적 뇌동매매 요소입니다."
  },
  {
    id: 75,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 주가가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 100,
            "low": 80,
            "close": 82
        },
        {
            "time": "Day 2",
            "open": 82,
            "high": 86,
            "low": 78,
            "close": 85
        }
    ],
    options: [
        "익일 가격 상황과 관계없이 100배 레버리지 진입",
        "중첩 자리 핀바(rejection) 확인 후 익일 시가 롱 진입",
        "상단 저항 도달 판단으로 즉각적인 숏 포지션 진입",
        "돌파 랠리가 완전히 끝날 때까지 HTS 종료 및 관망"
    ],
    correctIndex: 1,
    explanation: "훌륭한 트레이딩 실행은 'IF(조건 만족 시) ➔ THEN(원칙대로 포지션 진입 및 손절/목표가 기계적 배치)'의 룰베이스 알고리즘에 의해 움직여야 감정을 배제할 수 있습니다. 지지 구간 중첩과 핀바 출현 조건이 성립했으므로 다음 봉 시가에 진입하되 꼬리 저점 이탈 시 칼손절하여 리스크를 통제하는 것이 정석입니다."
  },
  {
    id: 76,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 4,
    theoryRef: "09_risk_position_management.md",
    question: "나의 트레이딩 시스템 승률이 40%로 다소 낮게 고정되어 있습니다. 이 시스템을 통해 장기적으로 파산하지 않고 복리로 계좌 자산을 우상향시키기 위해 필수적으로 지켜야 할 손익비(평균손실 대비 평균수익 비율)의 최소 기준은?",
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
        "손익비 1:1 수준 (매매 승률이 낮을 때 파산)",
        "승률 40% 대비 기댓값 개선을 위한 손익비 1:1.5 이상",
        "낮은 승률 상태에서 손익비와 무관하게 무조건 파산",
        "승률 극복을 위한 레버리지 20배 수준 설정"
    ],
    correctIndex: 1,
    explanation: "승률이 40%일 때 기대값 수학적 수수료 감안 최소 손익비는 1:1.5입니다. 손익비 1.5배 이상 구간만 취하면 10번 중 6번 손절당하고 단 4번만 익절하더라도 계좌 총합은 수익 우위에 서게 됩니다. 저승률 시스템일수록 철저히 손익비가 유리한 진입가 근처 타점만 기계적으로 필터링해 진입해야 생존합니다."
  },
  {
    id: 77,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 4,
    theoryRef: "09_risk_position_management.md",
    question: "선물 트레이더인 B는 담보금 효율을 극대화한다는 명목으로 50배 레버리지 롱 포지션 진입을 실행했습니다. 진입 가격 대비 B의 포지션 원금이 완전 소멸(강제 청산)되는 역방향 하락 거리(%)는 대략 몇 % 수준입니까?",
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
        "진입 단가 대비 20.0%의 강한 하락 발생 시",
        "진입 단가 대비 단 -2.0% 변동성 노이즈 터치 시",
        "진입 단가 대비 50.0%의 강한 폭락 발생 시",
        "청산가가 산출되지 않는 특이 종목 거래 시"
    ],
    correctIndex: 1,
    explanation: "청산 거리 계산 공식은 대략 `100% / 레버리지 배수` 입니다. 50배 고배율 레버리지의 경우, 내 포지션 반대 방향으로 단 **-2%**의 시세 변동성(장중 흔한 잔파동 노이즈)만 터치해도 원금이 100% 강제 청산 증발됩니다. 고배율 레버리지는 수학적 확률상 100% 파멸을 초래하는 도박성 거래 행위입니다."
  },
  {
    id: 78,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 5,
    theoryRef: "09_risk_position_management.md",
    question: "트레이딩 계좌 총자산이 2,000만 원인 트레이더가 있습니다. 1회 거래당 총자산의 2% 룰 원칙에 근거하여 리스크 한도(40만 원)를 설정했습니다. 진입하려는 종목의 손절가 거리가 -8%인 경우, 2% 룰을 완벽하게 충족하는 최대 진입(매수) 금액은?",
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
        "2,000만 원 전액 매수 (손절 폭을 배제한 대규모 베팅)",
        "500만 원 진입 (-8% 손절 시 리스크 한도 40만 원 충족)",
        "1,000만 원 진입 (손익비 1:1 기준에 맞춘 베팅)",
        "200만 원 진입 (보수적 원칙에 입각한 극단적 축소)"
    ],
    correctIndex: 1,
    explanation: "포지션 사이징 공식은 `진입금액 = 최대 리스크 허용액(40만 원) / 손절 비율(0.08)` 입니다. 이에 따라 `400,000원 / 0.08 = 5,000,000원`이 도출됩니다. 500만 원 규모로 매수 진입 시 가격이 급락해 -8% 손절 라인을 때려도 내 총자산에서 깎이는 금액은 정확히 원칙 한도인 40만 원(2%)으로 제한되어 계좌가 완벽히 방어됩니다."
  },
  {
    id: 79,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 3,
    theoryRef: "10_psychology_routine_review.md",
    question: "장중에 내가 째려보며 타점을 기다리던 주식이 아무런 조정도 없이 장대양봉을 그리며 갑자기 수직 폭등하기 시작하여 5% 이상 치솟았습니다. 이때 머릿속에 '나만 두고 날아가는 것 아닌가'하는 극심한 소외감 공포(FOMO)가 솟구칩니다. 원칙 트레이더의 올바른 심리 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 102,
            "low": 99,
            "close": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 106,
            "low": 100,
            "close": 105
        }
    ],
    options: [
        "추세 연장 판단으로 시장가 전액 추격 매수",
        "FOMO 판단 하에 매수 보류 및 정석 되돌림 타점 대기",
        "돌파 실패 판단 하에 반대 방향 고배율 숏 베팅",
        "거래를 종료하고 즉각 주식 시장에서 전량 탈출"
    ],
    correctIndex: 1,
    explanation: "나만 기회를 잃는다는 공포(FOMO)로 날아가는 장대양봉 꼭대기에서 추격 매수하는 행위는 고점 물리기를 자처하는 가장 흔한 뇌동매매 패턴입니다. 내 타점을 비껴간 상승은 내 돈이 아니라고 인정하고, 사전에 정의한 룰베이스 타점까지 냉정하게 대기하는 것이 장기 생존자의 멘탈 습관입니다."
  },
  {
    id: 80,
    category: "리스크/심리",
    categoryKey: "risk",
    difficulty: 4,
    theoryRef: "10_psychology_routine_review.md",
    question: "오전 거래에서 원칙을 어긴 무리한 진입으로 인해 3회 연속 스톱아웃(손절)을 당하여 당일 원금의 -6%의 큰 손실을 입었습니다. 본전 생각과 분노로 눈이 뒤집혀 비중을 올려 한 판으로 복수하려는 '보폭 매매' 충동이 폭발할 때, 파산을 막는 가장 강력한 멘탈 시스템 룰은?",
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
        "손실 만회를 위해 빌린 돈으로 100배 고배율 복수 베팅",
        "일일 손실 한도 도달에 따른 매매 강제 종료 및 격리",
        "주변 유료 전문가 추천 종목을 탐색해 즉각 매수",
        "RSI 과매도 상태이므로 즉시 반대 숏 포지션 진입"
    ],
    correctIndex: 1,
    explanation: "연패를 겪은 후 홧김에 비중을 더 크게 실어 한 번에 본전을 찾으려는 보복 매매는 계좌를 하루 만에 휴지조각으로 만드는 가장 무서운 파산 유도 심리 상태입니다. 이를 막기 위해 하루 최대 손실 한도 한계선(예: 3회 손절 또는 원금의 5%)을 정해두고, 이 한계선 터치 시 즉시 차트를 종료하고 냉각기를 강제 집행하는 룰이 필수입니다."
  },
];

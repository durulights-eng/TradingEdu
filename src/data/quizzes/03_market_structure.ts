import type { QuizItem } from './types';

export const quizzes_market_structure: QuizItem[] = [
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
            "close": 145,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 145,
            "high": 149,
            "low": 143,
            "close": 144,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 144,
            "high": 156,
            "low": 143,
            "close": 154,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 154,
            "high": 155,
            "low": 149,
            "close": 151,
            "volume": 367
        },
        {
            "time": "Day 5",
            "open": 151,
            "high": 153,
            "low": 150,
            "close": 152,
            "volume": 418
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
            "close": 103,
            "volume": 117
        },
        {
            "time": "W-4",
            "open": 103,
            "high": 110,
            "low": 102,
            "close": 108,
            "volume": 98
        },
        {
            "time": "W-3",
            "open": 108,
            "high": 109,
            "low": 105,
            "close": 106,
            "volume": 105
        },
        {
            "time": "W-2",
            "open": 106,
            "high": 115,
            "low": 107,
            "close": 113,
            "volume": 128
        },
        {
            "time": "Today",
            "open": 113,
            "high": 114,
            "low": 103,
            "close": 104,
            "volume": 101
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
            "close": 101,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 101,
            "high": 108,
            "low": 101,
            "close": 107,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 107,
            "high": 109,
            "low": 104,
            "close": 105,
            "volume": 126
        },
        {
            "time": "Day 4",
            "open": 105,
            "high": 115,
            "low": 105,
            "close": 114,
            "volume": 94
        },
        {
            "time": "Day 5",
            "open": 114,
            "high": 116,
            "low": 112,
            "close": 113,
            "volume": 114
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
            "close": 101,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 101,
            "high": 105,
            "low": 102,
            "close": 104,
            "volume": 95
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
            "close": 103,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 103,
            "high": 104,
            "low": 99,
            "close": 100,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 100,
            "high": 101,
            "low": 98,
            "close": 98.5,
            "volume": 109
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
            "close": 144,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 144,
            "high": 157,
            "low": 143,
            "close": 155,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 155,
            "high": 156,
            "low": 149,
            "close": 150,
            "volume": 94
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
            "close": 88,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 88,
            "high": 91,
            "low": 80,
            "close": 84,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 84,
            "high": 86,
            "low": 80,
            "close": 81,
            "volume": 102
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
            "close": 102,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 102,
            "high": 110,
            "low": 102,
            "close": 109,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 109,
            "high": 125,
            "low": 109,
            "close": 124,
            "volume": 91
        },
        {
            "time": "Day 4",
            "open": 124,
            "high": 125,
            "low": 114,
            "close": 115,
            "volume": 107
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
            "close": 88,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 88,
            "high": 99,
            "low": 88,
            "close": 95,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 95,
            "high": 96,
            "low": 90,
            "close": 92,
            "volume": 109
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
    id: 106,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "코인 가격가 장기 저항선인 225달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 225달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 210,
            "high": 222,
            "low": 208.5,
            "close": 217.5,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 217.5,
            "high": 223.5,
            "low": 214.5,
            "close": 216,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 216,
            "high": 234,
            "low": 214.5,
            "close": 231,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 231,
            "high": 232.5,
            "low": 223.5,
            "close": 226.5,
            "volume": 389
        },
        {
            "time": "Day 5",
            "open": 226.5,
            "high": 229.5,
            "low": 225,
            "close": 228,
            "volume": 324
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 225
                },
                {
                    "x": 4,
                    "y": 225
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 210달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 코인 가격가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 111,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 150,
            "high": 157.5,
            "low": 150,
            "close": 154.5,
            "volume": 104
        },
        {
            "time": "W-4",
            "open": 154.5,
            "high": 165,
            "low": 153,
            "close": 162,
            "volume": 104
        },
        {
            "time": "W-3",
            "open": 162,
            "high": 163.5,
            "low": 157.5,
            "close": 159,
            "volume": 111
        },
        {
            "time": "W-2",
            "open": 159,
            "high": 172.5,
            "low": 160.5,
            "close": 169.5,
            "volume": 121
        },
        {
            "time": "Today",
            "open": 169.5,
            "high": 171,
            "low": 154.5,
            "close": 156,
            "volume": 104
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 150
                },
                {
                    "x": 2,
                    "y": 157.5
                },
                {
                    "x": 4,
                    "y": 165
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
    id: 113,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 코인 가격가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 148.5,
            "close": 151.5,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 151.5,
            "high": 162,
            "low": 151.5,
            "close": 160.5,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 160.5,
            "high": 163.5,
            "low": 156,
            "close": 157.5,
            "volume": 115
        },
        {
            "time": "Day 4",
            "open": 157.5,
            "high": 172.5,
            "low": 157.5,
            "close": 171,
            "volume": 92
        },
        {
            "time": "Day 5",
            "open": 171,
            "high": 174,
            "low": 168,
            "close": 169.5,
            "volume": 100
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 153
                },
                {
                    "x": 4,
                    "y": 172.5
                },
                {
                    "x": 0,
                    "y": 148.5
                },
                {
                    "x": 4,
                    "y": 168
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
    id: 115,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 151.5,
            "low": 150,
            "close": 151.5,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 151.5,
            "high": 157.5,
            "low": 153,
            "close": 156,
            "volume": 118
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
    id: 136,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 150달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.7.50달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 157.5,
            "high": 162,
            "low": 153,
            "close": 154.5,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 154.5,
            "high": 156,
            "low": 148.5,
            "close": 150,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 150,
            "high": 151.5,
            "low": 147,
            "close": 147.75,
            "volume": 120
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
    id: 137,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "225달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 코인 가격가 숨 고르기 조정을 받으며 225달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 210,
            "high": 219,
            "low": 208.5,
            "close": 216,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 216,
            "high": 235.5,
            "low": 214.5,
            "close": 232.5,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 232.5,
            "high": 234,
            "low": 223.5,
            "close": 225,
            "volume": 124
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 225
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
        "240달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(225달러)으로 코인 가격가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 138,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 120달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 142.5,
            "high": 147,
            "low": 120,
            "close": 132,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 132,
            "high": 136.5,
            "low": 120,
            "close": 126,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 126,
            "high": 129,
            "low": 120,
            "close": 121.5,
            "volume": 115
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
    id: 141,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "코인 가격가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 150,
            "close": 153,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 153,
            "high": 165,
            "low": 153,
            "close": 163.5,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 163.5,
            "high": 187.5,
            "low": 163.5,
            "close": 186,
            "volume": 107
        },
        {
            "time": "Day 4",
            "open": 186,
            "high": 187.5,
            "low": 171,
            "close": 172.5,
            "volume": 102
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 150
                },
                {
                    "x": 3,
                    "y": 184.5
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
                    "y": 150
                },
                {
                    "x": 3,
                    "y": 165
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
    id: 144,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 135,
            "low": 120,
            "close": 132,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 132,
            "high": 148.5,
            "low": 132,
            "close": 142.5,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 142.5,
            "high": 144,
            "low": 135,
            "close": 138,
            "volume": 111
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 120
                },
                {
                    "x": 1,
                    "y": 132
                },
                {
                    "x": 2,
                    "y": 135
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
    id: 206,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "시세가 장기 저항선인 300달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 300달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 280,
            "high": 296,
            "low": 278,
            "close": 290,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 290,
            "high": 298,
            "low": 286,
            "close": 288,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 288,
            "high": 312,
            "low": 286,
            "close": 308,
            "volume": 127
        },
        {
            "time": "Day 4",
            "open": 308,
            "high": 310,
            "low": 298,
            "close": 302,
            "volume": 357
        },
        {
            "time": "Day 5",
            "open": 302,
            "high": 306,
            "low": 300,
            "close": 304,
            "volume": 408
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 300
                },
                {
                    "x": 4,
                    "y": 300
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 280달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 시세가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 211,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 200,
            "high": 210,
            "low": 200,
            "close": 206,
            "volume": 96
        },
        {
            "time": "W-4",
            "open": 206,
            "high": 220,
            "low": 204,
            "close": 216,
            "volume": 121
        },
        {
            "time": "W-3",
            "open": 216,
            "high": 218,
            "low": 210,
            "close": 212,
            "volume": 117
        },
        {
            "time": "W-2",
            "open": 212,
            "high": 230,
            "low": 214,
            "close": 226,
            "volume": 122
        },
        {
            "time": "Today",
            "open": 226,
            "high": 228,
            "low": 206,
            "close": 208,
            "volume": 114
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 200
                },
                {
                    "x": 2,
                    "y": 210
                },
                {
                    "x": 4,
                    "y": 220
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
    id: 213,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 시세가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 198,
            "close": 202,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 202,
            "high": 216,
            "low": 202,
            "close": 214,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 214,
            "high": 218,
            "low": 208,
            "close": 210,
            "volume": 104
        },
        {
            "time": "Day 4",
            "open": 210,
            "high": 230,
            "low": 210,
            "close": 228,
            "volume": 92
        },
        {
            "time": "Day 5",
            "open": 228,
            "high": 232,
            "low": 224,
            "close": 226,
            "volume": 133
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 204
                },
                {
                    "x": 4,
                    "y": 230
                },
                {
                    "x": 0,
                    "y": 198
                },
                {
                    "x": 4,
                    "y": 224
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
    id: 215,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 202,
            "low": 200,
            "close": 202,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 202,
            "high": 210,
            "low": 204,
            "close": 208,
            "volume": 122
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
    id: 236,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 200달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.10달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 210,
            "high": 216,
            "low": 204,
            "close": 206,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 206,
            "high": 208,
            "low": 198,
            "close": 200,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 200,
            "high": 202,
            "low": 196,
            "close": 197,
            "volume": 124
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
    id: 237,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "300달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 시세가 숨 고르기 조정을 받으며 300달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 280,
            "high": 292,
            "low": 278,
            "close": 288,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 288,
            "high": 314,
            "low": 286,
            "close": 310,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 310,
            "high": 312,
            "low": 298,
            "close": 300,
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
            "label": "돌파된 저항선 -> 지지선 전환선 (150)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "가짜 돌파(휩소) 판단에 따른 고배율 숏 진입",
        "돌파 후 리테스트 성공 확인 시 지지선 눌림목 매수",
        "추격 매수 기회 상실로 판단하고 거래 포기",
        "320달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(300달러)으로 시세가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 238,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 160달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 190,
            "high": 196,
            "low": 160,
            "close": 176,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 176,
            "high": 182,
            "low": 160,
            "close": 168,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 168,
            "high": 172,
            "low": 160,
            "close": 162,
            "volume": 121
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 160
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
    id: 241,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "시세가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 200,
            "close": 204,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 204,
            "high": 220,
            "low": 204,
            "close": 218,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 218,
            "high": 250,
            "low": 218,
            "close": 248,
            "volume": 117
        },
        {
            "time": "Day 4",
            "open": 248,
            "high": 250,
            "low": 228,
            "close": 230,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 200
                },
                {
                    "x": 3,
                    "y": 246
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
                    "y": 200
                },
                {
                    "x": 3,
                    "y": 220
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
    id: 244,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 160,
            "high": 180,
            "low": 160,
            "close": 176,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 176,
            "high": 198,
            "low": 176,
            "close": 190,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 190,
            "high": 192,
            "low": 180,
            "close": 184,
            "volume": 113
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 160
                },
                {
                    "x": 1,
                    "y": 176
                },
                {
                    "x": 2,
                    "y": 180
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
    id: 306,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "삼성전자 주가가 장기 저항선인 450달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 450달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 420,
            "high": 444,
            "low": 417,
            "close": 435,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 435,
            "high": 447,
            "low": 429,
            "close": 432,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 432,
            "high": 468,
            "low": 429,
            "close": 462,
            "volume": 93
        },
        {
            "time": "Day 4",
            "open": 462,
            "high": 465,
            "low": 447,
            "close": 453,
            "volume": 416
        },
        {
            "time": "Day 5",
            "open": 453,
            "high": 459,
            "low": 450,
            "close": 456,
            "volume": 403
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
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 420달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 삼성전자 주가가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 311,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 300,
            "high": 315,
            "low": 300,
            "close": 309,
            "volume": 112
        },
        {
            "time": "W-4",
            "open": 309,
            "high": 330,
            "low": 306,
            "close": 324,
            "volume": 93
        },
        {
            "time": "W-3",
            "open": 324,
            "high": 327,
            "low": 315,
            "close": 318,
            "volume": 99
        },
        {
            "time": "W-2",
            "open": 318,
            "high": 345,
            "low": 321,
            "close": 339,
            "volume": 97
        },
        {
            "time": "Today",
            "open": 339,
            "high": 342,
            "low": 309,
            "close": 312,
            "volume": 134
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 300
                },
                {
                    "x": 2,
                    "y": 315
                },
                {
                    "x": 4,
                    "y": 330
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
    id: 313,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 삼성전자 주가가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 297,
            "close": 303,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 303,
            "high": 324,
            "low": 303,
            "close": 321,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 321,
            "high": 327,
            "low": 312,
            "close": 315,
            "volume": 107
        },
        {
            "time": "Day 4",
            "open": 315,
            "high": 345,
            "low": 315,
            "close": 342,
            "volume": 122
        },
        {
            "time": "Day 5",
            "open": 342,
            "high": 348,
            "low": 336,
            "close": 339,
            "volume": 105
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 306
                },
                {
                    "x": 4,
                    "y": 345
                },
                {
                    "x": 0,
                    "y": 297
                },
                {
                    "x": 4,
                    "y": 336
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
    id: 315,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 303,
            "low": 300,
            "close": 303,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 303,
            "high": 315,
            "low": 306,
            "close": 312,
            "volume": 112
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
    id: 336,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 300달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.15달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 315,
            "high": 324,
            "low": 306,
            "close": 309,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 309,
            "high": 312,
            "low": 297,
            "close": 300,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 300,
            "high": 303,
            "low": 294,
            "close": 295.5,
            "volume": 107
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
    id: 337,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "450달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 삼성전자 주가가 숨 고르기 조정을 받으며 450달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 420,
            "high": 438,
            "low": 417,
            "close": 432,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 432,
            "high": 471,
            "low": 429,
            "close": 465,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 465,
            "high": 468,
            "low": 447,
            "close": 450,
            "volume": 115
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 450
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
        "480달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(450달러)으로 삼성전자 주가가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 338,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 240달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 285,
            "high": 294,
            "low": 240,
            "close": 264,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 264,
            "high": 273,
            "low": 240,
            "close": 252,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 252,
            "high": 258,
            "low": 240,
            "close": 243,
            "volume": 117
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 240
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
    id: 341,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "삼성전자 주가가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 300,
            "close": 306,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 306,
            "high": 330,
            "low": 306,
            "close": 327,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 327,
            "high": 375,
            "low": 327,
            "close": 372,
            "volume": 101
        },
        {
            "time": "Day 4",
            "open": 372,
            "high": 375,
            "low": 342,
            "close": 345,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 300
                },
                {
                    "x": 3,
                    "y": 369
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
                    "y": 300
                },
                {
                    "x": 3,
                    "y": 330
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
    id: 344,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 270,
            "low": 240,
            "close": 264,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 264,
            "high": 297,
            "low": 264,
            "close": 285,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 285,
            "high": 288,
            "low": 270,
            "close": 276,
            "volume": 90
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 240
                },
                {
                    "x": 1,
                    "y": 264
                },
                {
                    "x": 2,
                    "y": 270
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
    id: 406,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "테슬라 주가가 장기 저항선인 750달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 750달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 700,
            "high": 740,
            "low": 695,
            "close": 725,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 725,
            "high": 745,
            "low": 715,
            "close": 720,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 720,
            "high": 780,
            "low": 715,
            "close": 770,
            "volume": 102
        },
        {
            "time": "Day 4",
            "open": 770,
            "high": 775,
            "low": 745,
            "close": 755,
            "volume": 361
        },
        {
            "time": "Day 5",
            "open": 755,
            "high": 765,
            "low": 750,
            "close": 760,
            "volume": 357
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 750
                },
                {
                    "x": 4,
                    "y": 750
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 700달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 테슬라 주가가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 411,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 500,
            "high": 525,
            "low": 500,
            "close": 515,
            "volume": 86
        },
        {
            "time": "W-4",
            "open": 515,
            "high": 550,
            "low": 510,
            "close": 540,
            "volume": 111
        },
        {
            "time": "W-3",
            "open": 540,
            "high": 545,
            "low": 525,
            "close": 530,
            "volume": 120
        },
        {
            "time": "W-2",
            "open": 530,
            "high": 575,
            "low": 535,
            "close": 565,
            "volume": 103
        },
        {
            "time": "Today",
            "open": 565,
            "high": 570,
            "low": 515,
            "close": 520,
            "volume": 107
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 500
                },
                {
                    "x": 2,
                    "y": 525
                },
                {
                    "x": 4,
                    "y": 550
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
    id: 413,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 테슬라 주가가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 495,
            "close": 505,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 505,
            "high": 540,
            "low": 505,
            "close": 535,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 535,
            "high": 545,
            "low": 520,
            "close": 525,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 525,
            "high": 575,
            "low": 525,
            "close": 570,
            "volume": 112
        },
        {
            "time": "Day 5",
            "open": 570,
            "high": 580,
            "low": 560,
            "close": 565,
            "volume": 133
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 510
                },
                {
                    "x": 4,
                    "y": 575
                },
                {
                    "x": 0,
                    "y": 495
                },
                {
                    "x": 4,
                    "y": 560
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
    id: 415,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 505,
            "low": 500,
            "close": 505,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 505,
            "high": 525,
            "low": 510,
            "close": 520,
            "volume": 114
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
    id: 436,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 500달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.25달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 525,
            "high": 540,
            "low": 510,
            "close": 515,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 515,
            "high": 520,
            "low": 495,
            "close": 500,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 500,
            "high": 505,
            "low": 490,
            "close": 492.5,
            "volume": 92
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 500
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
    id: 437,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "750달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 테슬라 주가가 숨 고르기 조정을 받으며 750달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 700,
            "high": 730,
            "low": 695,
            "close": 720,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 720,
            "high": 785,
            "low": 715,
            "close": 775,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 775,
            "high": 780,
            "low": 745,
            "close": 750,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 750
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
        "800달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(750달러)으로 테슬라 주가가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 438,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 400달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 475,
            "high": 490,
            "low": 400,
            "close": 440,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 440,
            "high": 455,
            "low": 400,
            "close": 420,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 420,
            "high": 430,
            "low": 400,
            "close": 405,
            "volume": 115
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
    id: 441,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "테슬라 주가가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 500,
            "close": 510,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 510,
            "high": 550,
            "low": 510,
            "close": 545,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 545,
            "high": 625,
            "low": 545,
            "close": 620,
            "volume": 88
        },
        {
            "time": "Day 4",
            "open": 620,
            "high": 625,
            "low": 570,
            "close": 575,
            "volume": 128
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 500
                },
                {
                    "x": 3,
                    "y": 615
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
                    "y": 500
                },
                {
                    "x": 3,
                    "y": 550
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
    id: 444,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 400,
            "high": 450,
            "low": 400,
            "close": 440,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 440,
            "high": 495,
            "low": 440,
            "close": 475,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 475,
            "high": 480,
            "low": 450,
            "close": 460,
            "volume": 105
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 400
                },
                {
                    "x": 1,
                    "y": 440
                },
                {
                    "x": 2,
                    "y": 450
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
    id: 506,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "애플 주가가 장기 저항선인 1,200달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 1,200달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1120,
            "high": 1184,
            "low": 1112,
            "close": 1160,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 1160,
            "high": 1192,
            "low": 1144,
            "close": 1152,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 1152,
            "high": 1248,
            "low": 1144,
            "close": 1232,
            "volume": 108
        },
        {
            "time": "Day 4",
            "open": 1232,
            "high": 1240,
            "low": 1192,
            "close": 1208,
            "volume": 353
        },
        {
            "time": "Day 5",
            "open": 1208,
            "high": 1224,
            "low": 1200,
            "close": 1216,
            "volume": 402
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1200
                },
                {
                    "x": 4,
                    "y": 1200
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 1,120달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 애플 주가가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 511,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 800,
            "high": 840,
            "low": 800,
            "close": 824,
            "volume": 104
        },
        {
            "time": "W-4",
            "open": 824,
            "high": 880,
            "low": 816,
            "close": 864,
            "volume": 122
        },
        {
            "time": "W-3",
            "open": 864,
            "high": 872,
            "low": 840,
            "close": 848,
            "volume": 120
        },
        {
            "time": "W-2",
            "open": 848,
            "high": 920,
            "low": 856,
            "close": 904,
            "volume": 126
        },
        {
            "time": "Today",
            "open": 904,
            "high": 912,
            "low": 824,
            "close": 832,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 800
                },
                {
                    "x": 2,
                    "y": 840
                },
                {
                    "x": 4,
                    "y": 880
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
    id: 513,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 애플 주가가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 792,
            "close": 808,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 808,
            "high": 864,
            "low": 808,
            "close": 856,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 856,
            "high": 872,
            "low": 832,
            "close": 840,
            "volume": 107
        },
        {
            "time": "Day 4",
            "open": 840,
            "high": 920,
            "low": 840,
            "close": 912,
            "volume": 109
        },
        {
            "time": "Day 5",
            "open": 912,
            "high": 928,
            "low": 896,
            "close": 904,
            "volume": 135
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 816
                },
                {
                    "x": 4,
                    "y": 920
                },
                {
                    "x": 0,
                    "y": 792
                },
                {
                    "x": 4,
                    "y": 896
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
    id: 515,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 808,
            "low": 800,
            "close": 808,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 808,
            "high": 840,
            "low": 816,
            "close": 832,
            "volume": 113
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
    id: 536,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 800달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.40달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 840,
            "high": 864,
            "low": 816,
            "close": 824,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 824,
            "high": 832,
            "low": 792,
            "close": 800,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 800,
            "high": 808,
            "low": 784,
            "close": 788,
            "volume": 96
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 800
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
    id: 537,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "1,200달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 애플 주가가 숨 고르기 조정을 받으며 1,200달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1120,
            "high": 1168,
            "low": 1112,
            "close": 1152,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 1152,
            "high": 1256,
            "low": 1144,
            "close": 1240,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 1240,
            "high": 1248,
            "low": 1192,
            "close": 1200,
            "volume": 92
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1200
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
        "1,280달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(1,200달러)으로 애플 주가가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 538,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 640달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 760,
            "high": 784,
            "low": 640,
            "close": 704,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 704,
            "high": 728,
            "low": 640,
            "close": 672,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 672,
            "high": 688,
            "low": 640,
            "close": 648,
            "volume": 112
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 640
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
    id: 541,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "애플 주가가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 800,
            "close": 816,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 816,
            "high": 880,
            "low": 816,
            "close": 872,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 872,
            "high": 1000,
            "low": 872,
            "close": 992,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 992,
            "high": 1000,
            "low": 912,
            "close": 920,
            "volume": 114
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 800
                },
                {
                    "x": 3,
                    "y": 984
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
                    "y": 800
                },
                {
                    "x": 3,
                    "y": 880
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
    id: 544,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 640,
            "high": 720,
            "low": 640,
            "close": 704,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 704,
            "high": 792,
            "low": 704,
            "close": 760,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 760,
            "high": 768,
            "low": 720,
            "close": 736,
            "volume": 93
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 640
                },
                {
                    "x": 1,
                    "y": 704
                },
                {
                    "x": 2,
                    "y": 720
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
    id: 606,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "나스닥 시세가 장기 저항선인 1,500달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 1,500달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1400,
            "high": 1480,
            "low": 1390,
            "close": 1450,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 1450,
            "high": 1490,
            "low": 1430,
            "close": 1440,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 1440,
            "high": 1560,
            "low": 1430,
            "close": 1540,
            "volume": 95
        },
        {
            "time": "Day 4",
            "open": 1540,
            "high": 1550,
            "low": 1490,
            "close": 1510,
            "volume": 341
        },
        {
            "time": "Day 5",
            "open": 1510,
            "high": 1530,
            "low": 1500,
            "close": 1520,
            "volume": 387
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1500
                },
                {
                    "x": 4,
                    "y": 1500
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 1,400달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 나스닥 시세가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 611,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 1000,
            "high": 1050,
            "low": 1000,
            "close": 1030,
            "volume": 112
        },
        {
            "time": "W-4",
            "open": 1030,
            "high": 1100,
            "low": 1020,
            "close": 1080,
            "volume": 115
        },
        {
            "time": "W-3",
            "open": 1080,
            "high": 1090,
            "low": 1050,
            "close": 1060,
            "volume": 88
        },
        {
            "time": "W-2",
            "open": 1060,
            "high": 1150,
            "low": 1070,
            "close": 1130,
            "volume": 114
        },
        {
            "time": "Today",
            "open": 1130,
            "high": 1140,
            "low": 1030,
            "close": 1040,
            "volume": 118
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1000
                },
                {
                    "x": 2,
                    "y": 1050
                },
                {
                    "x": 4,
                    "y": 1100
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
    id: 613,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 나스닥 시세가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 990,
            "close": 1010,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 1010,
            "high": 1080,
            "low": 1010,
            "close": 1070,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 1070,
            "high": 1090,
            "low": 1040,
            "close": 1050,
            "volume": 101
        },
        {
            "time": "Day 4",
            "open": 1050,
            "high": 1150,
            "low": 1050,
            "close": 1140,
            "volume": 92
        },
        {
            "time": "Day 5",
            "open": 1140,
            "high": 1160,
            "low": 1120,
            "close": 1130,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1020
                },
                {
                    "x": 4,
                    "y": 1150
                },
                {
                    "x": 0,
                    "y": 990
                },
                {
                    "x": 4,
                    "y": 1120
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
    id: 615,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1010,
            "low": 1000,
            "close": 1010,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 1010,
            "high": 1050,
            "low": 1020,
            "close": 1040,
            "volume": 90
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
    id: 636,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 1,000달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.50달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1050,
            "high": 1080,
            "low": 1020,
            "close": 1030,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 1030,
            "high": 1040,
            "low": 990,
            "close": 1000,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 1000,
            "high": 1010,
            "low": 980,
            "close": 985,
            "volume": 123
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
    id: 637,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "1,500달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 나스닥 시세가 숨 고르기 조정을 받으며 1,500달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1400,
            "high": 1460,
            "low": 1390,
            "close": 1440,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 1440,
            "high": 1570,
            "low": 1430,
            "close": 1550,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 1550,
            "high": 1560,
            "low": 1490,
            "close": 1500,
            "volume": 105
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1500
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
        "1,600달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(1,500달러)으로 나스닥 시세가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 638,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 800달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 950,
            "high": 980,
            "low": 800,
            "close": 880,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 880,
            "high": 910,
            "low": 800,
            "close": 840,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 840,
            "high": 860,
            "low": 800,
            "close": 810,
            "volume": 88
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 800
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
    id: 641,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "나스닥 시세가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 1000,
            "close": 1020,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 1020,
            "high": 1100,
            "low": 1020,
            "close": 1090,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 1090,
            "high": 1250,
            "low": 1090,
            "close": 1240,
            "volume": 117
        },
        {
            "time": "Day 4",
            "open": 1240,
            "high": 1250,
            "low": 1140,
            "close": 1150,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1000
                },
                {
                    "x": 3,
                    "y": 1230
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
                    "y": 1000
                },
                {
                    "x": 3,
                    "y": 1100
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
    id: 644,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 900,
            "low": 800,
            "close": 880,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 880,
            "high": 990,
            "low": 880,
            "close": 950,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 950,
            "high": 960,
            "low": 900,
            "close": 920,
            "volume": 102
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 800
                },
                {
                    "x": 1,
                    "y": 880
                },
                {
                    "x": 2,
                    "y": 900
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
    id: 706,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "엔비디아 주가가 장기 저항선인 1,800달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 1,800달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1680,
            "high": 1776,
            "low": 1668,
            "close": 1740,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 1740,
            "high": 1788,
            "low": 1716,
            "close": 1728,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 1728,
            "high": 1872,
            "low": 1716,
            "close": 1848,
            "volume": 116
        },
        {
            "time": "Day 4",
            "open": 1848,
            "high": 1860,
            "low": 1788,
            "close": 1812,
            "volume": 339
        },
        {
            "time": "Day 5",
            "open": 1812,
            "high": 1836,
            "low": 1800,
            "close": 1824,
            "volume": 347
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
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 1,680달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 엔비디아 주가가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 711,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 1200,
            "high": 1260,
            "low": 1200,
            "close": 1236,
            "volume": 105
        },
        {
            "time": "W-4",
            "open": 1236,
            "high": 1320,
            "low": 1224,
            "close": 1296,
            "volume": 107
        },
        {
            "time": "W-3",
            "open": 1296,
            "high": 1308,
            "low": 1260,
            "close": 1272,
            "volume": 111
        },
        {
            "time": "W-2",
            "open": 1272,
            "high": 1380,
            "low": 1284,
            "close": 1356,
            "volume": 118
        },
        {
            "time": "Today",
            "open": 1356,
            "high": 1368,
            "low": 1236,
            "close": 1248,
            "volume": 128
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1200
                },
                {
                    "x": 2,
                    "y": 1260
                },
                {
                    "x": 4,
                    "y": 1320
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
    id: 713,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 엔비디아 주가가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1188,
            "close": 1212,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 1212,
            "high": 1296,
            "low": 1212,
            "close": 1284,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 1284,
            "high": 1308,
            "low": 1248,
            "close": 1260,
            "volume": 93
        },
        {
            "time": "Day 4",
            "open": 1260,
            "high": 1380,
            "low": 1260,
            "close": 1368,
            "volume": 118
        },
        {
            "time": "Day 5",
            "open": 1368,
            "high": 1392,
            "low": 1344,
            "close": 1356,
            "volume": 130
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1224
                },
                {
                    "x": 4,
                    "y": 1380
                },
                {
                    "x": 0,
                    "y": 1188
                },
                {
                    "x": 4,
                    "y": 1344
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
    id: 715,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1212,
            "low": 1200,
            "close": 1212,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 1212,
            "high": 1260,
            "low": 1224,
            "close": 1248,
            "volume": 100
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
    id: 736,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 1,200달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.60달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1260,
            "high": 1296,
            "low": 1224,
            "close": 1236,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 1236,
            "high": 1248,
            "low": 1188,
            "close": 1200,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 1200,
            "high": 1212,
            "low": 1176,
            "close": 1182,
            "volume": 94
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1200
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
    id: 737,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "1,800달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 엔비디아 주가가 숨 고르기 조정을 받으며 1,800달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1680,
            "high": 1752,
            "low": 1668,
            "close": 1728,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 1728,
            "high": 1884,
            "low": 1716,
            "close": 1860,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 1860,
            "high": 1872,
            "low": 1788,
            "close": 1800,
            "volume": 91
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1800
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
        "1,920달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(1,800달러)으로 엔비디아 주가가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 738,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 960달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1140,
            "high": 1176,
            "low": 960,
            "close": 1056,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 1056,
            "high": 1092,
            "low": 960,
            "close": 1008,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 1008,
            "high": 1032,
            "low": 960,
            "close": 972,
            "volume": 93
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 960
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
    id: 741,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "엔비디아 주가가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1200,
            "close": 1224,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 1224,
            "high": 1320,
            "low": 1224,
            "close": 1308,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 1308,
            "high": 1500,
            "low": 1308,
            "close": 1488,
            "volume": 93
        },
        {
            "time": "Day 4",
            "open": 1488,
            "high": 1500,
            "low": 1368,
            "close": 1380,
            "volume": 129
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1200
                },
                {
                    "x": 3,
                    "y": 1476
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
                    "y": 1200
                },
                {
                    "x": 3,
                    "y": 1320
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
    id: 744,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 1080,
            "low": 960,
            "close": 1056,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 1056,
            "high": 1188,
            "low": 1056,
            "close": 1140,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 1140,
            "high": 1152,
            "low": 1080,
            "close": 1104,
            "volume": 91
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 960
                },
                {
                    "x": 1,
                    "y": 1056
                },
                {
                    "x": 2,
                    "y": 1080
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
    id: 806,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "리플 시세가 장기 저항선인 3,000달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 3,000달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2800,
            "high": 2960,
            "low": 2780,
            "close": 2900,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 2900,
            "high": 2980,
            "low": 2860,
            "close": 2880,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 2880,
            "high": 3120,
            "low": 2860,
            "close": 3080,
            "volume": 123
        },
        {
            "time": "Day 4",
            "open": 3080,
            "high": 3100,
            "low": 2980,
            "close": 3020,
            "volume": 378
        },
        {
            "time": "Day 5",
            "open": 3020,
            "high": 3060,
            "low": 3000,
            "close": 3040,
            "volume": 369
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 3000
                },
                {
                    "x": 4,
                    "y": 3000
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 2,800달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 리플 시세가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 811,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 2000,
            "high": 2100,
            "low": 2000,
            "close": 2060,
            "volume": 93
        },
        {
            "time": "W-4",
            "open": 2060,
            "high": 2200,
            "low": 2040,
            "close": 2160,
            "volume": 108
        },
        {
            "time": "W-3",
            "open": 2160,
            "high": 2180,
            "low": 2100,
            "close": 2120,
            "volume": 111
        },
        {
            "time": "W-2",
            "open": 2120,
            "high": 2300,
            "low": 2140,
            "close": 2260,
            "volume": 118
        },
        {
            "time": "Today",
            "open": 2260,
            "high": 2280,
            "low": 2060,
            "close": 2080,
            "volume": 112
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 2000
                },
                {
                    "x": 2,
                    "y": 2100
                },
                {
                    "x": 4,
                    "y": 2200
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
    id: 813,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 리플 시세가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 1980,
            "close": 2020,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 2020,
            "high": 2160,
            "low": 2020,
            "close": 2140,
            "volume": 90
        },
        {
            "time": "Day 3",
            "open": 2140,
            "high": 2180,
            "low": 2080,
            "close": 2100,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 2100,
            "high": 2300,
            "low": 2100,
            "close": 2280,
            "volume": 102
        },
        {
            "time": "Day 5",
            "open": 2280,
            "high": 2320,
            "low": 2240,
            "close": 2260,
            "volume": 114
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 2040
                },
                {
                    "x": 4,
                    "y": 2300
                },
                {
                    "x": 0,
                    "y": 1980
                },
                {
                    "x": 4,
                    "y": 2240
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
    id: 815,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2020,
            "low": 2000,
            "close": 2020,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 2020,
            "high": 2100,
            "low": 2040,
            "close": 2080,
            "volume": 86
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
    id: 836,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 2,000달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.100달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2100,
            "high": 2160,
            "low": 2040,
            "close": 2060,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 2060,
            "high": 2080,
            "low": 1980,
            "close": 2000,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 2000,
            "high": 2020,
            "low": 1960,
            "close": 1970,
            "volume": 113
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
    id: 837,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "3,000달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 리플 시세가 숨 고르기 조정을 받으며 3,000달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2800,
            "high": 2920,
            "low": 2780,
            "close": 2880,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 2880,
            "high": 3140,
            "low": 2860,
            "close": 3100,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 3100,
            "high": 3120,
            "low": 2980,
            "close": 3000,
            "volume": 117
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 3000
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
        "3,200달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(3,000달러)으로 리플 시세가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 838,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 1,600달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1900,
            "high": 1960,
            "low": 1600,
            "close": 1760,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 1760,
            "high": 1820,
            "low": 1600,
            "close": 1680,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 1680,
            "high": 1720,
            "low": 1600,
            "close": 1620,
            "volume": 102
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
    id: 841,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "리플 시세가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 2000,
            "close": 2040,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 2040,
            "high": 2200,
            "low": 2040,
            "close": 2180,
            "volume": 90
        },
        {
            "time": "Day 3",
            "open": 2180,
            "high": 2500,
            "low": 2180,
            "close": 2480,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 2480,
            "high": 2500,
            "low": 2280,
            "close": 2300,
            "volume": 116
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 2000
                },
                {
                    "x": 3,
                    "y": 2460
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
                    "y": 2000
                },
                {
                    "x": 3,
                    "y": 2200
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
    id: 844,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1600,
            "high": 1800,
            "low": 1600,
            "close": 1760,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 1760,
            "high": 1980,
            "low": 1760,
            "close": 1900,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 1900,
            "high": 1920,
            "low": 1800,
            "close": 1840,
            "volume": 95
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1600
                },
                {
                    "x": 1,
                    "y": 1760
                },
                {
                    "x": 2,
                    "y": 1800
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
    id: 906,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "골드 가격가 장기 저항선인 7,500달러를 거래량 실린 강한 캔들로 돌파한 뒤, 다시 7,500달러 부근으로 내려와 버티고 있습니다. 가장 안전한 진입 방식은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 7000,
            "high": 7400,
            "low": 6950,
            "close": 7250,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 7250,
            "high": 7450,
            "low": 7150,
            "close": 7200,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 7200,
            "high": 7800,
            "low": 7150,
            "close": 7700,
            "volume": 96
        },
        {
            "time": "Day 4",
            "open": 7700,
            "high": 7750,
            "low": 7450,
            "close": 7550,
            "volume": 332
        },
        {
            "time": "Day 5",
            "open": 7550,
            "high": 7650,
            "low": 7500,
            "close": 7600,
            "volume": 336
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 7500
                },
                {
                    "x": 4,
                    "y": 7500
                }
            ],
            "label": "돌파된 저항선 -> 지지선 전환선",
            "color": "#3b82f6"
        }
    ],
    options: [
        "돌파 시점에 시장가로 즉시 진입하는 추격 매수",
        "돌파 후 저항선의 지지선 전환(Retest) 확인 시 진입",
        "이전 최저가 부근인 7,000달러 조정 시까지 대기 매수",
        "돌파 후 즉시 단기 조정을 예상한 역추세 숏 진입"
    ],
    correctIndex: 1,
    explanation: "저항선이 강하게 뚫리면 역할 전환(Role Reversal)에 의해 신규 지지선으로 바뀝니다. 돌파 시점에 뇌동매매하기보다는 돌파된 선 부근으로 골드 가격가 눌려 지지(Retest)를 완성할 때 진입하는 것이 리스크 대비 기대 수익이 큽니다."
  },
  {
    id: 911,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "저점들을 연결한 우상향 상승 추세선 아래로 캔들의 종가(마감가격)가 이탈했습니다. 기술적 분석 관점의 올바른 해석은 무엇입니까?",
    chartData: [
        {
            "time": "W-5",
            "open": 5000,
            "high": 5250,
            "low": 5000,
            "close": 5150,
            "volume": 82
        },
        {
            "time": "W-4",
            "open": 5150,
            "high": 5500,
            "low": 5100,
            "close": 5400,
            "volume": 111
        },
        {
            "time": "W-3",
            "open": 5400,
            "high": 5450,
            "low": 5250,
            "close": 5300,
            "volume": 89
        },
        {
            "time": "W-2",
            "open": 5300,
            "high": 5750,
            "low": 5350,
            "close": 5650,
            "volume": 114
        },
        {
            "time": "Today",
            "open": 5650,
            "high": 5700,
            "low": 5150,
            "close": 5200,
            "volume": 117
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 5000
                },
                {
                    "x": 2,
                    "y": 5250
                },
                {
                    "x": 4,
                    "y": 5500
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
    id: 913,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "우상향 상승 평행 채널의 상단 저항선 부근까지 골드 가격가 도달했습니다. 합리적인 추세 채널 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 4950,
            "close": 5050,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 5050,
            "high": 5400,
            "low": 5050,
            "close": 5350,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 5350,
            "high": 5450,
            "low": 5200,
            "close": 5250,
            "volume": 123
        },
        {
            "time": "Day 4",
            "open": 5250,
            "high": 5750,
            "low": 5250,
            "close": 5700,
            "volume": 96
        },
        {
            "time": "Day 5",
            "open": 5700,
            "high": 5800,
            "low": 5600,
            "close": 5650,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 5100
                },
                {
                    "x": 4,
                    "y": 5750
                },
                {
                    "x": 0,
                    "y": 4950
                },
                {
                    "x": 4,
                    "y": 5600
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
    id: 915,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 2,
    theoryRef: "03_market_structure.md",
    question: "추세선 작도 시 신뢰도를 판단하는 가장 중요한 규칙은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5050,
            "low": 5000,
            "close": 5050,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 5050,
            "high": 5250,
            "low": 5100,
            "close": 5200,
            "volume": 122
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
    id: 936,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "오랫동안 지켜지던 핵심 지지선인 5,000달러 부근에서 매수 진입을 완료했습니다. 그러나 가격이 대량의 거래량을 동반하며 장대음봉으로 지지선을 하방으로 강하게 뚫어냈고, 종가가 지지선 대비 1.5% 아래인 98.250달러로 결정되었습니다. 이 상황에서 원칙을 지키는 올바른 위기 대응 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5250,
            "high": 5400,
            "low": 5100,
            "close": 5150,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 5150,
            "high": 5200,
            "low": 4950,
            "close": 5000,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 5000,
            "high": 5050,
            "low": 4900,
            "close": 4925,
            "volume": 102
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 5000
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
    id: 937,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "7,500달러의 중요 저항선이 강한 거래량을 실은 돌파봉으로 뚫렸습니다. 이후 골드 가격가 숨 고르기 조정을 받으며 7,500달러 부근까지 되돌아왔고(리테스트 구간), 저항선 부근에서 거래량이 크게 감소하며 아래꼬리가 달린 도지 캔들로 안착하는 모습을 보입니다. 이때 가장 안전하고 합리적인 매매 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 7000,
            "high": 7300,
            "low": 6950,
            "close": 7200,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 7200,
            "high": 7850,
            "low": 7150,
            "close": 7750,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 7750,
            "high": 7800,
            "low": 7450,
            "close": 7500,
            "volume": 96
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 7500
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
        "8,000달러 추가 돌파를 타겟으로 시장가 추격 매수"
    ],
    correctIndex: 1,
    explanation: "강하게 돌파된 저항선은 룰 체인지에 의해 지지선으로 변합니다(역할 전환). 돌파 당시 추격 매수하기보다, 돌파된 선(7,500달러)으로 골드 가격가 되돌아오는 리테스트(Retest) 시점에 저조한 거래량과 지지 캔들을 확인하고 손절선을 바로 밑에 설정하여 눌림목 진입하는 것이 리스크가 가장 적은 프로 트레이더의 정석입니다."
  },
  {
    id: 938,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "가격이 4,000달러 지지선 근처에서 반등을 시도하고 있으나, 반등의 폭이 직전 고점에 턱없이 못 미치며 저점 부근으로 다시 짓눌리고 있습니다. 즉, 고점들이 계속 낮아지는 하락 우위 삼각수렴(Descending)의 형태가 지지선 바로 위에서 감지됩니다. 이 시점에서 지지선 반등을 믿고 신규 매수(롱)를 진입하는 것은 원칙에 맞습니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4750,
            "high": 4900,
            "low": 4000,
            "close": 4400,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 4400,
            "high": 4550,
            "low": 4000,
            "close": 4200,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 4200,
            "high": 4300,
            "low": 4000,
            "close": 4050,
            "volume": 96
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
    id: 941,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "03_market_structure.md",
    question: "골드 가격가 매우 가파르게 올라가던 1차 단기 상승 추세선을 강한 음봉 종가로 뚫고 내려왔습니다. 다행히 각도가 완만하고 탄탄한 장기 핵심 상승 추세선은 저 밑에 지지 영역을 유지하고 있습니다. 스윙 트레이더로서 가장 정석적인 포지션 제어 방식은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 5000,
            "close": 5100,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 5100,
            "high": 5500,
            "low": 5100,
            "close": 5450,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 5450,
            "high": 6250,
            "low": 5450,
            "close": 6200,
            "volume": 98
        },
        {
            "time": "Day 4",
            "open": 6200,
            "high": 6250,
            "low": 5700,
            "close": 5750,
            "volume": 110
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 5000
                },
                {
                    "x": 3,
                    "y": 6150
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
                    "y": 5000
                },
                {
                    "x": 3,
                    "y": 5500
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
    id: 944,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "03_market_structure.md",
    question: "저점과 저점을 이은 장기 상승 추세선 상의 3번째 터치 포인트(지지선 부근)에 캔들이 매우 조심스럽게 안착하며 아래꼬리를 형성했습니다. 손익비(Risk-to-Reward) 관점에서 가장 이상적인 매수 타점 집행 및 손절 셋업 방법은 무엇입니까?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4000,
            "high": 4500,
            "low": 4000,
            "close": 4400,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 4400,
            "high": 4950,
            "low": 4400,
            "close": 4750,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 4750,
            "high": 4800,
            "low": 4500,
            "close": 4600,
            "volume": 125
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 4000
                },
                {
                    "x": 1,
                    "y": 4400
                },
                {
                    "x": 2,
                    "y": 4500
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
];

import type { QuizItem } from './types';

export const quizzes_patterns_breakout: QuizItem[] = [
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
            "close": 102,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 102,
            "high": 105,
            "low": 93,
            "close": 103,
            "volume": 99
        },
        {
            "time": "Day 3",
            "open": 103,
            "high": 105,
            "low": 96,
            "close": 104,
            "volume": 119
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
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
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
            "close": 110,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 110,
            "high": 130,
            "low": 95,
            "close": 105,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 105,
            "high": 114,
            "low": 96,
            "close": 110,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 110,
            "high": 111,
            "low": 93,
            "close": 94,
            "volume": 122
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
        "머리 꼭대기(130달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
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
            "close": 85,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 85,
            "high": 95,
            "low": 84,
            "close": 94,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 94,
            "high": 95,
            "low": 79,
            "close": 82,
            "volume": 104
        },
        {
            "time": "Day 4",
            "open": 82,
            "high": 99,
            "low": 81,
            "close": 98,
            "volume": 98
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
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 95달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
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
            "close": 78,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 78,
            "high": 79,
            "low": 72,
            "close": 74,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 74,
            "high": 76,
            "low": 70,
            "close": 71,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 71,
            "high": 85,
            "low": 70,
            "close": 83,
            "volume": 130
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 30달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
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
            "close": 135,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 135,
            "high": 136,
            "low": 120,
            "close": 122,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 122,
            "high": 140,
            "low": 121,
            "close": 138,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 138,
            "high": 139,
            "low": 115,
            "close": 116,
            "volume": 99
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
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
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
            "close": 95,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 95,
            "high": 100,
            "low": 86,
            "close": 98,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 98,
            "high": 100,
            "low": 92,
            "close": 99,
            "volume": 101
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
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(100달러)을 상향 뚫고 오르는 확률이 높습니다."
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
            "close": 95,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 95,
            "high": 100,
            "low": 88,
            "close": 97,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 97,
            "high": 98,
            "low": 91,
            "close": 92,
            "volume": 103
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
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "80달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 100달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
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
            "close": 78,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 78,
            "high": 82,
            "low": 60,
            "close": 75,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 75,
            "high": 79,
            "low": 68,
            "close": 76,
            "volume": 97
        },
        {
            "time": "Day 4",
            "open": 76,
            "high": 88,
            "low": 75,
            "close": 87,
            "volume": 105
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
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(87달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(80달러선) 부근으로 주가가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 주식이라 조롱하며 관심종목에서 지운다."
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
            "close": 112,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 112,
            "high": 116,
            "low": 102,
            "close": 104,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 104,
            "high": 108,
            "low": 98,
            "close": 100,
            "volume": 96
        },
        {
            "time": "Day 4",
            "open": 100,
            "high": 112,
            "low": 99,
            "close": 110,
            "volume": 115
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(98달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 90달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
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
            "close": 278,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 278,
            "high": 295,
            "low": 272,
            "close": 290,
            "volume": 32
        },
        {
            "time": "Day 3",
            "open": 290,
            "high": 305,
            "low": 298,
            "close": 301,
            "volume": 28
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
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "500달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
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
            "close": 130,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 130,
            "high": 140,
            "low": 129,
            "close": 138,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 138,
            "high": 140,
            "low": 134,
            "close": 135,
            "volume": 123
        },
        {
            "time": "Day 4",
            "open": 135,
            "high": 154,
            "low": 134,
            "close": 152,
            "volume": 123
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(134달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 134달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 110,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 157.5,
            "low": 135,
            "close": 153,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 153,
            "high": 157.5,
            "low": 139.5,
            "close": 154.5,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 154.5,
            "high": 157.5,
            "low": 144,
            "close": 156,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 157.5
                },
                {
                    "x": 2,
                    "y": 157.5
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 116,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(144달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 172.5,
            "low": 147,
            "close": 165,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 165,
            "high": 195,
            "low": 142.5,
            "close": 157.5,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 157.5,
            "high": 171,
            "low": 144,
            "close": 165,
            "volume": 111
        },
        {
            "time": "Day 4",
            "open": 165,
            "high": 166.5,
            "low": 139.5,
            "close": 141,
            "volume": 128
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 144
                },
                {
                    "x": 3,
                    "y": 144
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(195달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 117,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 코인 가격가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 150,
            "low": 120,
            "close": 127.5,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 127.5,
            "high": 142.5,
            "low": 126,
            "close": 141,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 141,
            "high": 142.5,
            "low": 118.5,
            "close": 123,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 123,
            "high": 148.5,
            "low": 121.5,
            "close": 147,
            "volume": 121
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 142.5
                },
                {
                    "x": 3,
                    "y": 142.5
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 142.50달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 코인 가격가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 142.50달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 118,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 코인 가격 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 75,
            "high": 120,
            "low": 73.5,
            "close": 117,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 117,
            "high": 118.5,
            "low": 108,
            "close": 111,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 111,
            "high": 114,
            "low": 105,
            "close": 106.5,
            "volume": 91
        },
        {
            "time": "Day 4",
            "open": 106.5,
            "high": 127.5,
            "low": 105,
            "close": 124.5,
            "volume": 128
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 45달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 119,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 코인 가격가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(180달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 210,
            "low": 148.5,
            "close": 202.5,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 202.5,
            "high": 204,
            "low": 180,
            "close": 183,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 183,
            "high": 210,
            "low": 181.5,
            "close": 207,
            "volume": 91
        },
        {
            "time": "Day 4",
            "open": 207,
            "high": 208.5,
            "low": 172.5,
            "close": 174,
            "volume": 112
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
                    "x": 3,
                    "y": 180
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(210달러)을 넘지 못하고 넥라인(180달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 120,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 150,
            "low": 120,
            "close": 142.5,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 142.5,
            "high": 150,
            "low": 129,
            "close": 147,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 147,
            "high": 150,
            "low": 138,
            "close": 148.5,
            "volume": 119
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
                    "x": 2,
                    "y": 150
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
                    "y": 120
                },
                {
                    "x": 1,
                    "y": 129
                },
                {
                    "x": 2,
                    "y": 138
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(150달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 146,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(150달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 150달러를 돌파할 것을 미리 예측하고 147달러에서 비중 100% 매수로 진입했습니다. 그러나 코인 가격는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 138달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120,
            "high": 150,
            "low": 120,
            "close": 142.5,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 142.5,
            "high": 150,
            "low": 132,
            "close": 145.5,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 145.5,
            "high": 147,
            "low": 136.5,
            "close": 138,
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 141
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "120달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 150달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(138달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 147,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(120달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(130.50달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 142.5,
            "high": 142.5,
            "low": 105,
            "close": 117,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 117,
            "high": 123,
            "low": 90,
            "close": 112.5,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 112.5,
            "high": 118.5,
            "low": 102,
            "close": 114,
            "volume": 106
        },
        {
            "time": "Day 4",
            "open": 114,
            "high": 132,
            "low": 112.5,
            "close": 130.5,
            "volume": 106
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(130.50달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(120달러선) 부근으로 코인 가격가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 알트코인이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(120달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 148,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(165달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 195,
            "high": 198,
            "low": 165,
            "close": 168,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 168,
            "high": 174,
            "low": 153,
            "close": 156,
            "volume": 86
        },
        {
            "time": "Day 3",
            "open": 156,
            "high": 162,
            "low": 147,
            "close": 150,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 150,
            "high": 168,
            "low": 148.5,
            "close": 165,
            "volume": 113
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(147달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 135달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 147달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 149,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "코인 가격가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(450달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 390,
            "high": 420,
            "low": 390,
            "close": 417,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 417,
            "high": 442.5,
            "low": 408,
            "close": 435,
            "volume": 19
        },
        {
            "time": "Day 3",
            "open": 435,
            "high": 457.5,
            "low": 447,
            "close": 451.5,
            "volume": 30
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 390
                },
                {
                    "x": 1,
                    "y": 408
                },
                {
                    "x": 2,
                    "y": 447
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "750달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 150,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 코인 가격가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(225달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 210,
            "high": 213,
            "low": 192,
            "close": 195,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 195,
            "high": 210,
            "low": 193.5,
            "close": 207,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 207,
            "high": 210,
            "low": 201,
            "close": 202.5,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 202.5,
            "high": 231,
            "low": 201,
            "close": 228,
            "volume": 117
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(201달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 201달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 210,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 210,
            "low": 180,
            "close": 204,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 204,
            "high": 210,
            "low": 186,
            "close": 206,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 206,
            "high": 210,
            "low": 192,
            "close": 208,
            "volume": 100
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 210
                },
                {
                    "x": 2,
                    "y": 210
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 216,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(192달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 230,
            "low": 196,
            "close": 220,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 220,
            "high": 260,
            "low": 190,
            "close": 210,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 210,
            "high": 228,
            "low": 192,
            "close": 220,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 220,
            "high": 222,
            "low": 186,
            "close": 188,
            "volume": 131
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 192
                },
                {
                    "x": 3,
                    "y": 192
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(260달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 217,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 시세가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 200,
            "low": 160,
            "close": 170,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 170,
            "high": 190,
            "low": 168,
            "close": 188,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 188,
            "high": 190,
            "low": 158,
            "close": 164,
            "volume": 90
        },
        {
            "time": "Day 4",
            "open": 164,
            "high": 198,
            "low": 162,
            "close": 196,
            "volume": 92
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 190
                },
                {
                    "x": 3,
                    "y": 190
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 190달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 시세가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 190달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 218,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 시세 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100,
            "high": 160,
            "low": 98,
            "close": 156,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 156,
            "high": 158,
            "low": 144,
            "close": 148,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 148,
            "high": 152,
            "low": 140,
            "close": 142,
            "volume": 112
        },
        {
            "time": "Day 4",
            "open": 142,
            "high": 170,
            "low": 140,
            "close": 166,
            "volume": 116
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 60달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 219,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 시세가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(240달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 280,
            "low": 198,
            "close": 270,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 270,
            "high": 272,
            "low": 240,
            "close": 244,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 244,
            "high": 280,
            "low": 242,
            "close": 276,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 276,
            "high": 278,
            "low": 230,
            "close": 232,
            "volume": 123
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 240
                },
                {
                    "x": 3,
                    "y": 240
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(280달러)을 넘지 못하고 넥라인(240달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 220,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 160,
            "high": 200,
            "low": 160,
            "close": 190,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 190,
            "high": 200,
            "low": 172,
            "close": 196,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 196,
            "high": 200,
            "low": 184,
            "close": 198,
            "volume": 96
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
                    "x": 2,
                    "y": 200
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
                    "y": 160
                },
                {
                    "x": 1,
                    "y": 172
                },
                {
                    "x": 2,
                    "y": 184
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(200달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 246,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(200달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 200달러를 돌파할 것을 미리 예측하고 196달러에서 비중 100% 매수로 진입했습니다. 그러나 시세는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 184달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 160,
            "high": 200,
            "low": 160,
            "close": 190,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 190,
            "high": 200,
            "low": 176,
            "close": 194,
            "volume": 96
        },
        {
            "time": "Day 3",
            "open": 194,
            "high": 196,
            "low": 182,
            "close": 184,
            "volume": 91
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 188
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "160달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 200달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(184달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 247,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(160달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(174달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 190,
            "high": 190,
            "low": 140,
            "close": 156,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 156,
            "high": 164,
            "low": 120,
            "close": 150,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 150,
            "high": 158,
            "low": 136,
            "close": 152,
            "volume": 90
        },
        {
            "time": "Day 4",
            "open": 152,
            "high": 176,
            "low": 150,
            "close": 174,
            "volume": 110
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(174달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(160달러선) 부근으로 시세가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 가상자산이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(160달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 248,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(220달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 260,
            "high": 264,
            "low": 220,
            "close": 224,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 224,
            "high": 232,
            "low": 204,
            "close": 208,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 208,
            "high": 216,
            "low": 196,
            "close": 200,
            "volume": 116
        },
        {
            "time": "Day 4",
            "open": 200,
            "high": 224,
            "low": 198,
            "close": 220,
            "volume": 128
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(196달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 180달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 196달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 249,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "시세가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(600달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 520,
            "high": 560,
            "low": 520,
            "close": 556,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 556,
            "high": 590,
            "low": 544,
            "close": 580,
            "volume": 33
        },
        {
            "time": "Day 3",
            "open": 580,
            "high": 610,
            "low": 596,
            "close": 602,
            "volume": 15
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 520
                },
                {
                    "x": 1,
                    "y": 544
                },
                {
                    "x": 2,
                    "y": 596
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "1,000달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 250,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 시세가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(300달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 280,
            "high": 284,
            "low": 256,
            "close": 260,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 260,
            "high": 280,
            "low": 258,
            "close": 276,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 276,
            "high": 280,
            "low": 268,
            "close": 270,
            "volume": 103
        },
        {
            "time": "Day 4",
            "open": 270,
            "high": 308,
            "low": 268,
            "close": 304,
            "volume": 100
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(268달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 268달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 310,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 315,
            "low": 270,
            "close": 306,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 306,
            "high": 315,
            "low": 279,
            "close": 309,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 309,
            "high": 315,
            "low": 288,
            "close": 312,
            "volume": 90
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 315
                },
                {
                    "x": 2,
                    "y": 315
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 316,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(288달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 345,
            "low": 294,
            "close": 330,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 330,
            "high": 390,
            "low": 285,
            "close": 315,
            "volume": 90
        },
        {
            "time": "Day 3",
            "open": 315,
            "high": 342,
            "low": 288,
            "close": 330,
            "volume": 106
        },
        {
            "time": "Day 4",
            "open": 330,
            "high": 333,
            "low": 279,
            "close": 282,
            "volume": 123
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 288
                },
                {
                    "x": 3,
                    "y": 288
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(390달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 317,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 삼성전자 주가가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 300,
            "low": 240,
            "close": 255,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 255,
            "high": 285,
            "low": 252,
            "close": 282,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 282,
            "high": 285,
            "low": 237,
            "close": 246,
            "volume": 121
        },
        {
            "time": "Day 4",
            "open": 246,
            "high": 297,
            "low": 243,
            "close": 294,
            "volume": 105
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 285
                },
                {
                    "x": 3,
                    "y": 285
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 285달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 삼성전자 주가가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 285달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 318,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 삼성전자 주가 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 240,
            "low": 147,
            "close": 234,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 234,
            "high": 237,
            "low": 216,
            "close": 222,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 222,
            "high": 228,
            "low": 210,
            "close": 213,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 213,
            "high": 255,
            "low": 210,
            "close": 249,
            "volume": 98
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 90달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 319,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 삼성전자 주가가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(360달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 420,
            "low": 297,
            "close": 405,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 405,
            "high": 408,
            "low": 360,
            "close": 366,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 366,
            "high": 420,
            "low": 363,
            "close": 414,
            "volume": 114
        },
        {
            "time": "Day 4",
            "open": 414,
            "high": 417,
            "low": 345,
            "close": 348,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 360
                },
                {
                    "x": 3,
                    "y": 360
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(420달러)을 넘지 못하고 넥라인(360달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 320,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 300,
            "low": 240,
            "close": 285,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 285,
            "high": 300,
            "low": 258,
            "close": 294,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 294,
            "high": 300,
            "low": 276,
            "close": 297,
            "volume": 114
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
                    "x": 2,
                    "y": 300
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
                    "y": 240
                },
                {
                    "x": 1,
                    "y": 258
                },
                {
                    "x": 2,
                    "y": 276
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(300달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 346,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(300달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 300달러를 돌파할 것을 미리 예측하고 294달러에서 비중 100% 매수로 진입했습니다. 그러나 삼성전자 주가는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 276달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 300,
            "low": 240,
            "close": 285,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 285,
            "high": 300,
            "low": 264,
            "close": 291,
            "volume": 105
        },
        {
            "time": "Day 3",
            "open": 291,
            "high": 294,
            "low": 273,
            "close": 276,
            "volume": 106
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 282
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "240달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 300달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(276달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 347,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(240달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(261달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 285,
            "high": 285,
            "low": 210,
            "close": 234,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 234,
            "high": 246,
            "low": 180,
            "close": 225,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 225,
            "high": 237,
            "low": 204,
            "close": 228,
            "volume": 88
        },
        {
            "time": "Day 4",
            "open": 228,
            "high": 264,
            "low": 225,
            "close": 261,
            "volume": 111
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(261달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(240달러선) 부근으로 삼성전자 주가가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 국내 주식이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(240달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 348,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(330달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 390,
            "high": 396,
            "low": 330,
            "close": 336,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 336,
            "high": 348,
            "low": 306,
            "close": 312,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 312,
            "high": 324,
            "low": 294,
            "close": 300,
            "volume": 107
        },
        {
            "time": "Day 4",
            "open": 300,
            "high": 336,
            "low": 297,
            "close": 330,
            "volume": 130
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(294달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 270달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 294달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 349,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "삼성전자 주가가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(900달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 780,
            "high": 840,
            "low": 780,
            "close": 834,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 834,
            "high": 885,
            "low": 816,
            "close": 870,
            "volume": 19
        },
        {
            "time": "Day 3",
            "open": 870,
            "high": 915,
            "low": 894,
            "close": 903,
            "volume": 26
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 780
                },
                {
                    "x": 1,
                    "y": 816
                },
                {
                    "x": 2,
                    "y": 894
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "1,500달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 350,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 삼성전자 주가가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(450달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 420,
            "high": 426,
            "low": 384,
            "close": 390,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 390,
            "high": 420,
            "low": 387,
            "close": 414,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 414,
            "high": 420,
            "low": 402,
            "close": 405,
            "volume": 121
        },
        {
            "time": "Day 4",
            "open": 405,
            "high": 462,
            "low": 402,
            "close": 456,
            "volume": 112
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(402달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 402달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 410,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 525,
            "low": 450,
            "close": 510,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 510,
            "high": 525,
            "low": 465,
            "close": 515,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 515,
            "high": 525,
            "low": 480,
            "close": 520,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 525
                },
                {
                    "x": 2,
                    "y": 525
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 416,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(480달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 575,
            "low": 490,
            "close": 550,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 550,
            "high": 650,
            "low": 475,
            "close": 525,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 525,
            "high": 570,
            "low": 480,
            "close": 550,
            "volume": 103
        },
        {
            "time": "Day 4",
            "open": 550,
            "high": 555,
            "low": 465,
            "close": 470,
            "volume": 128
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 480
                },
                {
                    "x": 3,
                    "y": 480
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(650달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 417,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 테슬라 주가가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 500,
            "low": 400,
            "close": 425,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 425,
            "high": 475,
            "low": 420,
            "close": 470,
            "volume": 89
        },
        {
            "time": "Day 3",
            "open": 470,
            "high": 475,
            "low": 395,
            "close": 410,
            "volume": 114
        },
        {
            "time": "Day 4",
            "open": 410,
            "high": 495,
            "low": 405,
            "close": 490,
            "volume": 116
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 475
                },
                {
                    "x": 3,
                    "y": 475
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 475달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 테슬라 주가가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 475달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 418,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 테슬라 주가 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 250,
            "high": 400,
            "low": 245,
            "close": 390,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 390,
            "high": 395,
            "low": 360,
            "close": 370,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 370,
            "high": 380,
            "low": 350,
            "close": 355,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 355,
            "high": 425,
            "low": 350,
            "close": 415,
            "volume": 128
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 150달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 419,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 테슬라 주가가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(600달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 700,
            "low": 495,
            "close": 675,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 675,
            "high": 680,
            "low": 600,
            "close": 610,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 610,
            "high": 700,
            "low": 605,
            "close": 690,
            "volume": 104
        },
        {
            "time": "Day 4",
            "open": 690,
            "high": 695,
            "low": 575,
            "close": 580,
            "volume": 131
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 600
                },
                {
                    "x": 3,
                    "y": 600
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(700달러)을 넘지 못하고 넥라인(600달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 420,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 400,
            "high": 500,
            "low": 400,
            "close": 475,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 475,
            "high": 500,
            "low": 430,
            "close": 490,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 490,
            "high": 500,
            "low": 460,
            "close": 495,
            "volume": 88
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 500
                },
                {
                    "x": 2,
                    "y": 500
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
                    "y": 400
                },
                {
                    "x": 1,
                    "y": 430
                },
                {
                    "x": 2,
                    "y": 460
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(500달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 446,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(500달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 500달러를 돌파할 것을 미리 예측하고 490달러에서 비중 100% 매수로 진입했습니다. 그러나 테슬라 주가는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 460달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 400,
            "high": 500,
            "low": 400,
            "close": 475,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 475,
            "high": 500,
            "low": 440,
            "close": 485,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 485,
            "high": 490,
            "low": 455,
            "close": 460,
            "volume": 95
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 470
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "400달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 500달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(460달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 447,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(400달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(435달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 475,
            "high": 475,
            "low": 350,
            "close": 390,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 390,
            "high": 410,
            "low": 300,
            "close": 375,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 375,
            "high": 395,
            "low": 340,
            "close": 380,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 380,
            "high": 440,
            "low": 375,
            "close": 435,
            "volume": 103
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(435달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(400달러선) 부근으로 테슬라 주가가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 해외 주식이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(400달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 448,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(550달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 650,
            "high": 660,
            "low": 550,
            "close": 560,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 560,
            "high": 580,
            "low": 510,
            "close": 520,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 520,
            "high": 540,
            "low": 490,
            "close": 500,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 500,
            "high": 560,
            "low": 495,
            "close": 550,
            "volume": 100
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(490달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 450달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 490달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 449,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "테슬라 주가가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(1,500달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1300,
            "high": 1400,
            "low": 1300,
            "close": 1390,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 1390,
            "high": 1475,
            "low": 1360,
            "close": 1450,
            "volume": 18
        },
        {
            "time": "Day 3",
            "open": 1450,
            "high": 1525,
            "low": 1490,
            "close": 1505,
            "volume": 32
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1300
                },
                {
                    "x": 1,
                    "y": 1360
                },
                {
                    "x": 2,
                    "y": 1490
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "2,500달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 450,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 테슬라 주가가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(750달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 700,
            "high": 710,
            "low": 640,
            "close": 650,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 650,
            "high": 700,
            "low": 645,
            "close": 690,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 690,
            "high": 700,
            "low": 670,
            "close": 675,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 675,
            "high": 770,
            "low": 670,
            "close": 760,
            "volume": 113
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(670달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 670달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 510,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 840,
            "low": 720,
            "close": 816,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 816,
            "high": 840,
            "low": 744,
            "close": 824,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 824,
            "high": 840,
            "low": 768,
            "close": 832,
            "volume": 96
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 840
                },
                {
                    "x": 2,
                    "y": 840
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 516,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(768달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 920,
            "low": 784,
            "close": 880,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 880,
            "high": 1040,
            "low": 760,
            "close": 840,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 840,
            "high": 912,
            "low": 768,
            "close": 880,
            "volume": 127
        },
        {
            "time": "Day 4",
            "open": 880,
            "high": 888,
            "low": 744,
            "close": 752,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 768
                },
                {
                    "x": 3,
                    "y": 768
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(1,040달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 517,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 애플 주가가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 800,
            "low": 640,
            "close": 680,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 680,
            "high": 760,
            "low": 672,
            "close": 752,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 752,
            "high": 760,
            "low": 632,
            "close": 656,
            "volume": 102
        },
        {
            "time": "Day 4",
            "open": 656,
            "high": 792,
            "low": 648,
            "close": 784,
            "volume": 95
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 760
                },
                {
                    "x": 3,
                    "y": 760
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 760달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 애플 주가가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 760달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 518,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 애플 주가 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 400,
            "high": 640,
            "low": 392,
            "close": 624,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 624,
            "high": 632,
            "low": 576,
            "close": 592,
            "volume": 86
        },
        {
            "time": "Day 3",
            "open": 592,
            "high": 608,
            "low": 560,
            "close": 568,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 568,
            "high": 680,
            "low": 560,
            "close": 664,
            "volume": 130
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 240달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 519,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 애플 주가가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(960달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 1120,
            "low": 792,
            "close": 1080,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 1080,
            "high": 1088,
            "low": 960,
            "close": 976,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 976,
            "high": 1120,
            "low": 968,
            "close": 1104,
            "volume": 120
        },
        {
            "time": "Day 4",
            "open": 1104,
            "high": 1112,
            "low": 920,
            "close": 928,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 960
                },
                {
                    "x": 3,
                    "y": 960
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(1,120달러)을 넘지 못하고 넥라인(960달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 520,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 640,
            "high": 800,
            "low": 640,
            "close": 760,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 760,
            "high": 800,
            "low": 688,
            "close": 784,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 784,
            "high": 800,
            "low": 736,
            "close": 792,
            "volume": 109
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 800
                },
                {
                    "x": 2,
                    "y": 800
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
                    "y": 640
                },
                {
                    "x": 1,
                    "y": 688
                },
                {
                    "x": 2,
                    "y": 736
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(800달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 546,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(800달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 800달러를 돌파할 것을 미리 예측하고 784달러에서 비중 100% 매수로 진입했습니다. 그러나 애플 주가는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 736달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 640,
            "high": 800,
            "low": 640,
            "close": 760,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 760,
            "high": 800,
            "low": 704,
            "close": 776,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 776,
            "high": 784,
            "low": 728,
            "close": 736,
            "volume": 97
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 752
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "640달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 800달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(736달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 547,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(640달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(696달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 760,
            "high": 760,
            "low": 560,
            "close": 624,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 624,
            "high": 656,
            "low": 480,
            "close": 600,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 600,
            "high": 632,
            "low": 544,
            "close": 608,
            "volume": 122
        },
        {
            "time": "Day 4",
            "open": 608,
            "high": 704,
            "low": 600,
            "close": 696,
            "volume": 129
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(696달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(640달러선) 부근으로 애플 주가가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 미국 주식이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(640달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 548,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(880달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1040,
            "high": 1056,
            "low": 880,
            "close": 896,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 896,
            "high": 928,
            "low": 816,
            "close": 832,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 832,
            "high": 864,
            "low": 784,
            "close": 800,
            "volume": 90
        },
        {
            "time": "Day 4",
            "open": 800,
            "high": 896,
            "low": 792,
            "close": 880,
            "volume": 127
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(784달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 720달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 784달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 549,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "애플 주가가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(2,400달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2080,
            "high": 2240,
            "low": 2080,
            "close": 2224,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 2224,
            "high": 2360,
            "low": 2176,
            "close": 2320,
            "volume": 29
        },
        {
            "time": "Day 3",
            "open": 2320,
            "high": 2440,
            "low": 2384,
            "close": 2408,
            "volume": 24
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 2080
                },
                {
                    "x": 1,
                    "y": 2176
                },
                {
                    "x": 2,
                    "y": 2384
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "4,000달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 550,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 애플 주가가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(1,200달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1120,
            "high": 1136,
            "low": 1024,
            "close": 1040,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 1040,
            "high": 1120,
            "low": 1032,
            "close": 1104,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 1104,
            "high": 1120,
            "low": 1072,
            "close": 1080,
            "volume": 90
        },
        {
            "time": "Day 4",
            "open": 1080,
            "high": 1232,
            "low": 1072,
            "close": 1216,
            "volume": 107
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(1,072달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 1,072달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 610,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1050,
            "low": 900,
            "close": 1020,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 1020,
            "high": 1050,
            "low": 930,
            "close": 1030,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 1030,
            "high": 1050,
            "low": 960,
            "close": 1040,
            "volume": 98
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1050
                },
                {
                    "x": 2,
                    "y": 1050
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 616,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(960달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1150,
            "low": 980,
            "close": 1100,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 1100,
            "high": 1300,
            "low": 950,
            "close": 1050,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 1050,
            "high": 1140,
            "low": 960,
            "close": 1100,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 1100,
            "high": 1110,
            "low": 930,
            "close": 940,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 960
                },
                {
                    "x": 3,
                    "y": 960
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(1,300달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 617,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 나스닥 시세가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1000,
            "low": 800,
            "close": 850,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 850,
            "high": 950,
            "low": 840,
            "close": 940,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 940,
            "high": 950,
            "low": 790,
            "close": 820,
            "volume": 114
        },
        {
            "time": "Day 4",
            "open": 820,
            "high": 990,
            "low": 810,
            "close": 980,
            "volume": 107
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 950
                },
                {
                    "x": 3,
                    "y": 950
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 950달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 나스닥 시세가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 950달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 618,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 나스닥 시세 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 800,
            "low": 490,
            "close": 780,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 780,
            "high": 790,
            "low": 720,
            "close": 740,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 740,
            "high": 760,
            "low": 700,
            "close": 710,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 710,
            "high": 850,
            "low": 700,
            "close": 830,
            "volume": 107
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 300달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 619,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 나스닥 시세가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(1,200달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1400,
            "low": 990,
            "close": 1350,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 1350,
            "high": 1360,
            "low": 1200,
            "close": 1220,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 1220,
            "high": 1400,
            "low": 1210,
            "close": 1380,
            "volume": 120
        },
        {
            "time": "Day 4",
            "open": 1380,
            "high": 1390,
            "low": 1150,
            "close": 1160,
            "volume": 125
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
                    "x": 3,
                    "y": 1200
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(1,400달러)을 넘지 못하고 넥라인(1,200달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 620,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 1000,
            "low": 800,
            "close": 950,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 950,
            "high": 1000,
            "low": 860,
            "close": 980,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 980,
            "high": 1000,
            "low": 920,
            "close": 990,
            "volume": 109
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1000
                },
                {
                    "x": 2,
                    "y": 1000
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
                    "y": 800
                },
                {
                    "x": 1,
                    "y": 860
                },
                {
                    "x": 2,
                    "y": 920
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(1,000달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 646,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(1,000달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 1,000달러를 돌파할 것을 미리 예측하고 980달러에서 비중 100% 매수로 진입했습니다. 그러나 나스닥 시세는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 920달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 1000,
            "low": 800,
            "close": 950,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 950,
            "high": 1000,
            "low": 880,
            "close": 970,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 970,
            "high": 980,
            "low": 910,
            "close": 920,
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
            "label": "수평 저항선 (100)",
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
                    "x": 1,
                    "y": 880
                },
                {
                    "x": 2,
                    "y": 940
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "800달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 1,000달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(920달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 647,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(800달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(870달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 950,
            "high": 950,
            "low": 700,
            "close": 780,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 780,
            "high": 820,
            "low": 600,
            "close": 750,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 750,
            "high": 790,
            "low": 680,
            "close": 760,
            "volume": 108
        },
        {
            "time": "Day 4",
            "open": 760,
            "high": 880,
            "low": 750,
            "close": 870,
            "volume": 128
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(870달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(800달러선) 부근으로 나스닥 시세가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 지수 선물이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(800달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 648,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(1,100달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1300,
            "high": 1320,
            "low": 1100,
            "close": 1120,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 1120,
            "high": 1160,
            "low": 1020,
            "close": 1040,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 1040,
            "high": 1080,
            "low": 980,
            "close": 1000,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 1000,
            "high": 1120,
            "low": 990,
            "close": 1100,
            "volume": 118
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(980달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 900달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 980달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 649,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "나스닥 시세가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(3,000달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2600,
            "high": 2800,
            "low": 2600,
            "close": 2780,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 2780,
            "high": 2950,
            "low": 2720,
            "close": 2900,
            "volume": 27
        },
        {
            "time": "Day 3",
            "open": 2900,
            "high": 3050,
            "low": 2980,
            "close": 3010,
            "volume": 33
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 2600
                },
                {
                    "x": 1,
                    "y": 2720
                },
                {
                    "x": 2,
                    "y": 2980
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "5,000달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 650,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 나스닥 시세가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(1,500달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1400,
            "high": 1420,
            "low": 1280,
            "close": 1300,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 1300,
            "high": 1400,
            "low": 1290,
            "close": 1380,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 1380,
            "high": 1400,
            "low": 1340,
            "close": 1350,
            "volume": 113
        },
        {
            "time": "Day 4",
            "open": 1350,
            "high": 1540,
            "low": 1340,
            "close": 1520,
            "volume": 124
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(1,340달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 1,340달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 710,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1260,
            "low": 1080,
            "close": 1224,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 1224,
            "high": 1260,
            "low": 1116,
            "close": 1236,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 1236,
            "high": 1260,
            "low": 1152,
            "close": 1248,
            "volume": 96
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1260
                },
                {
                    "x": 2,
                    "y": 1260
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 716,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(1,152달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1380,
            "low": 1176,
            "close": 1320,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 1320,
            "high": 1560,
            "low": 1140,
            "close": 1260,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 1260,
            "high": 1368,
            "low": 1152,
            "close": 1320,
            "volume": 93
        },
        {
            "time": "Day 4",
            "open": 1320,
            "high": 1332,
            "low": 1116,
            "close": 1128,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1152
                },
                {
                    "x": 3,
                    "y": 1152
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(1,560달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 717,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 엔비디아 주가가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1200,
            "low": 960,
            "close": 1020,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 1020,
            "high": 1140,
            "low": 1008,
            "close": 1128,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 1128,
            "high": 1140,
            "low": 948,
            "close": 984,
            "volume": 126
        },
        {
            "time": "Day 4",
            "open": 984,
            "high": 1188,
            "low": 972,
            "close": 1176,
            "volume": 122
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1140
                },
                {
                    "x": 3,
                    "y": 1140
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 1,140달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 엔비디아 주가가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 1,140달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 718,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 엔비디아 주가 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 600,
            "high": 960,
            "low": 588,
            "close": 936,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 936,
            "high": 948,
            "low": 864,
            "close": 888,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 888,
            "high": 912,
            "low": 840,
            "close": 852,
            "volume": 95
        },
        {
            "time": "Day 4",
            "open": 852,
            "high": 1020,
            "low": 840,
            "close": 996,
            "volume": 125
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 360달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 719,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 엔비디아 주가가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(1,440달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1680,
            "low": 1188,
            "close": 1620,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1620,
            "high": 1632,
            "low": 1440,
            "close": 1464,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 1464,
            "high": 1680,
            "low": 1452,
            "close": 1656,
            "volume": 127
        },
        {
            "time": "Day 4",
            "open": 1656,
            "high": 1668,
            "low": 1380,
            "close": 1392,
            "volume": 98
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1440
                },
                {
                    "x": 3,
                    "y": 1440
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(1,680달러)을 넘지 못하고 넥라인(1,440달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 720,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 1200,
            "low": 960,
            "close": 1140,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 1140,
            "high": 1200,
            "low": 1032,
            "close": 1176,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 1176,
            "high": 1200,
            "low": 1104,
            "close": 1188,
            "volume": 116
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
                    "x": 2,
                    "y": 1200
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
                    "y": 960
                },
                {
                    "x": 1,
                    "y": 1032
                },
                {
                    "x": 2,
                    "y": 1104
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(1,200달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 746,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(1,200달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 1,200달러를 돌파할 것을 미리 예측하고 1,176달러에서 비중 100% 매수로 진입했습니다. 그러나 엔비디아 주가는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 1,104달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 1200,
            "low": 960,
            "close": 1140,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 1140,
            "high": 1200,
            "low": 1056,
            "close": 1164,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 1164,
            "high": 1176,
            "low": 1092,
            "close": 1104,
            "volume": 119
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 1128
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "960달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 1,200달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(1,104달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 747,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(960달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(1,044달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1140,
            "high": 1140,
            "low": 840,
            "close": 936,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 936,
            "high": 984,
            "low": 720,
            "close": 900,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 900,
            "high": 948,
            "low": 816,
            "close": 912,
            "volume": 115
        },
        {
            "time": "Day 4",
            "open": 912,
            "high": 1056,
            "low": 900,
            "close": 1044,
            "volume": 105
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(1,044달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(960달러선) 부근으로 엔비디아 주가가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 성장주이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(960달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 748,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(1,320달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1560,
            "high": 1584,
            "low": 1320,
            "close": 1344,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 1344,
            "high": 1392,
            "low": 1224,
            "close": 1248,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 1248,
            "high": 1296,
            "low": 1176,
            "close": 1200,
            "volume": 100
        },
        {
            "time": "Day 4",
            "open": 1200,
            "high": 1344,
            "low": 1188,
            "close": 1320,
            "volume": 95
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(1,176달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 1,080달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 1,176달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 749,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "엔비디아 주가가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(3,600달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 3120,
            "high": 3360,
            "low": 3120,
            "close": 3336,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 3336,
            "high": 3540,
            "low": 3264,
            "close": 3480,
            "volume": 30
        },
        {
            "time": "Day 3",
            "open": 3480,
            "high": 3660,
            "low": 3576,
            "close": 3612,
            "volume": 29
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 3120
                },
                {
                    "x": 1,
                    "y": 3264
                },
                {
                    "x": 2,
                    "y": 3576
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "6,000달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 750,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 엔비디아 주가가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(1,800달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1680,
            "high": 1704,
            "low": 1536,
            "close": 1560,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 1560,
            "high": 1680,
            "low": 1548,
            "close": 1656,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 1656,
            "high": 1680,
            "low": 1608,
            "close": 1620,
            "volume": 109
        },
        {
            "time": "Day 4",
            "open": 1620,
            "high": 1848,
            "low": 1608,
            "close": 1824,
            "volume": 120
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(1,608달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 1,608달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 810,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2100,
            "low": 1800,
            "close": 2040,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 2040,
            "high": 2100,
            "low": 1860,
            "close": 2060,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 2060,
            "high": 2100,
            "low": 1920,
            "close": 2080,
            "volume": 110
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2100
                },
                {
                    "x": 2,
                    "y": 2100
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 816,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(1,920달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2300,
            "low": 1960,
            "close": 2200,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 2200,
            "high": 2600,
            "low": 1900,
            "close": 2100,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 2100,
            "high": 2280,
            "low": 1920,
            "close": 2200,
            "volume": 89
        },
        {
            "time": "Day 4",
            "open": 2200,
            "high": 2220,
            "low": 1860,
            "close": 1880,
            "volume": 97
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1920
                },
                {
                    "x": 3,
                    "y": 1920
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(2,600달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 817,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 리플 시세가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2000,
            "low": 1600,
            "close": 1700,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 1700,
            "high": 1900,
            "low": 1680,
            "close": 1880,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 1880,
            "high": 1900,
            "low": 1580,
            "close": 1640,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 1640,
            "high": 1980,
            "low": 1620,
            "close": 1960,
            "volume": 92
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1900
                },
                {
                    "x": 3,
                    "y": 1900
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 1,900달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 리플 시세가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 1,900달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 818,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 리플 시세 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1600,
            "low": 980,
            "close": 1560,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 1560,
            "high": 1580,
            "low": 1440,
            "close": 1480,
            "volume": 99
        },
        {
            "time": "Day 3",
            "open": 1480,
            "high": 1520,
            "low": 1400,
            "close": 1420,
            "volume": 100
        },
        {
            "time": "Day 4",
            "open": 1420,
            "high": 1700,
            "low": 1400,
            "close": 1660,
            "volume": 111
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 600달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 819,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 리플 시세가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(2,400달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2800,
            "low": 1980,
            "close": 2700,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 2700,
            "high": 2720,
            "low": 2400,
            "close": 2440,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 2440,
            "high": 2800,
            "low": 2420,
            "close": 2760,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 2760,
            "high": 2780,
            "low": 2300,
            "close": 2320,
            "volume": 107
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2400
                },
                {
                    "x": 3,
                    "y": 2400
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(2,800달러)을 넘지 못하고 넥라인(2,400달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 820,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1600,
            "high": 2000,
            "low": 1600,
            "close": 1900,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 1900,
            "high": 2000,
            "low": 1720,
            "close": 1960,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 1960,
            "high": 2000,
            "low": 1840,
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
                    "y": 2000
                },
                {
                    "x": 2,
                    "y": 2000
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
                    "y": 1600
                },
                {
                    "x": 1,
                    "y": 1720
                },
                {
                    "x": 2,
                    "y": 1840
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(2,000달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 846,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(2,000달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 2,000달러를 돌파할 것을 미리 예측하고 1,960달러에서 비중 100% 매수로 진입했습니다. 그러나 리플 시세는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 1,840달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1600,
            "high": 2000,
            "low": 1600,
            "close": 1900,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1900,
            "high": 2000,
            "low": 1760,
            "close": 1940,
            "volume": 96
        },
        {
            "time": "Day 3",
            "open": 1940,
            "high": 1960,
            "low": 1820,
            "close": 1840,
            "volume": 96
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 1880
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "1,600달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 2,000달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(1,840달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 847,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(1,600달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(1,740달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1900,
            "high": 1900,
            "low": 1400,
            "close": 1560,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 1560,
            "high": 1640,
            "low": 1200,
            "close": 1500,
            "volume": 105
        },
        {
            "time": "Day 3",
            "open": 1500,
            "high": 1580,
            "low": 1360,
            "close": 1520,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 1520,
            "high": 1760,
            "low": 1500,
            "close": 1740,
            "volume": 129
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(1,740달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(1,600달러선) 부근으로 리플 시세가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 메이저 코인이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(1,600달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 848,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(2,200달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2600,
            "high": 2640,
            "low": 2200,
            "close": 2240,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 2240,
            "high": 2320,
            "low": 2040,
            "close": 2080,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 2080,
            "high": 2160,
            "low": 1960,
            "close": 2000,
            "volume": 108
        },
        {
            "time": "Day 4",
            "open": 2000,
            "high": 2240,
            "low": 1980,
            "close": 2200,
            "volume": 125
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(1,960달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 1,800달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 1,960달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 849,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "리플 시세가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(6,000달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5200,
            "high": 5600,
            "low": 5200,
            "close": 5560,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 5560,
            "high": 5900,
            "low": 5440,
            "close": 5800,
            "volume": 32
        },
        {
            "time": "Day 3",
            "open": 5800,
            "high": 6100,
            "low": 5960,
            "close": 6020,
            "volume": 22
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 5200
                },
                {
                    "x": 1,
                    "y": 5440
                },
                {
                    "x": 2,
                    "y": 5960
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "10,000달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 850,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 리플 시세가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(3,000달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2800,
            "high": 2840,
            "low": 2560,
            "close": 2600,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 2600,
            "high": 2800,
            "low": 2580,
            "close": 2760,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 2760,
            "high": 2800,
            "low": 2680,
            "close": 2700,
            "volume": 107
        },
        {
            "time": "Day 4",
            "open": 2700,
            "high": 3080,
            "low": 2680,
            "close": 3040,
            "volume": 131
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(2,680달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 2,680달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
  {
    id: 910,
    category: "시장구조/SR",
    categoryKey: "structure",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "저항선을 뚫어내기 직전 돌파 전조 현상 중 하나인 '지지점 상승'의 특징을 골라보세요.",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5250,
            "low": 4500,
            "close": 5100,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 5100,
            "high": 5250,
            "low": 4650,
            "close": 5150,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 5150,
            "high": 5250,
            "low": 4800,
            "close": 5200,
            "volume": 109
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 5250
                },
                {
                    "x": 2,
                    "y": 5250
                }
            ],
            "label": "저항선 (105)",
            "color": "#ef4444"
        }
    ],
    options: [
        "저항선 부근에서 고점들이 점점 급락하며 붕괴하는 현상",
        "저항선 아래에서 조정을 받을 때, 저점들이 점점 높아지며 저항선을 향해 밀어 올리는 현상 (매수 우위 수렴)",
        "거래량이 완전 소멸하여 영원히 횡보하는 상태",
        "갑작스럽게 아무 이유 없이 급락하는 현상"
    ],
    correctIndex: 1,
    explanation: "저항을 뚫지 못하고 밀려 내려올 때, 이전 저점보다 높은 지점에서 저점을 계속 잡아 올려주는 것은 매도 압력보다 매수 압력이 점점 올라오고 있음을 의미합니다. 수렴 끝에 돌파가 나타날 신뢰도가 매우 높습니다."
  },
  {
    id: 916,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "머리와 양쪽 어깨 형태를 그리며 넥라인 지지선(4,800달러)을 위태롭게 지탱하다가 하방으로 강한 캔들이 이탈했습니다. 숏(매도) 포지션 진입 시점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5750,
            "low": 4900,
            "close": 5500,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 5500,
            "high": 6500,
            "low": 4750,
            "close": 5250,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 5250,
            "high": 5700,
            "low": 4800,
            "close": 5500,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 5500,
            "high": 5550,
            "low": 4650,
            "close": 4700,
            "volume": 112
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 4800
                },
                {
                    "x": 3,
                    "y": 4800
                }
            ],
            "label": "넥라인 지지선",
            "color": "#ef4444"
        }
    ],
    options: [
        "머리 꼭대기(6,500달러) 부근에서 예측 공매도",
        "오른쪽 어깨가 올라가고 있을 때 미리 선진입",
        "저점들을 연결한 핵심 지지선인 '넥라인'을 확실하게 하방 돌파(Breakdown) 완료할 때",
        "패턴 돌파 여부와 무관하게 오른쪽 어깨 끝에서 대기"
    ],
    correctIndex: 2,
    explanation: "헤드앤숄더(Head & Shoulders) 패턴은 오른쪽 어깨를 그린 후, 저점 지지선인 '넥라인(Neckline)'을 거래량을 실어 하방 돌파해야 최종 완성이 선언됩니다. 그전에 진입하면 넥라인 반등 시 극심한 손실을 입습니다."
  },
  {
    id: 917,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 추세 끝에서 골드 가격가 비슷한 깊이의 바닥을 두 번(이중바닥) 형성한 뒤, 중간 고점 저항선(넥라인)을 돌파했습니다. 향후 예상 방향성과 매수 타점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5000,
            "low": 4000,
            "close": 4250,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 4250,
            "high": 4750,
            "low": 4200,
            "close": 4700,
            "volume": 90
        },
        {
            "time": "Day 3",
            "open": 4700,
            "high": 4750,
            "low": 3950,
            "close": 4100,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 4100,
            "high": 4950,
            "low": 4050,
            "close": 4900,
            "volume": 117
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 4750
                },
                {
                    "x": 3,
                    "y": 4750
                }
            ],
            "label": "넥라인 (95)",
            "color": "#3b82f6"
        }
    ],
    options: [
        "추가 폭락 예고이므로 전액 손절",
        "이중 바닥형(W 패턴) 완성으로 강력한 상승 전환 시그널, 4,750달러 넥라인 돌파 시점 또는 눌림목 매수",
        "박스권 횡보이므로 양방향 무시",
        "쌍바닥이 깨진 것이므로 공매도"
    ],
    correctIndex: 1,
    explanation: "W자 모양의 '이중 바닥형(Double Bottom)' 패턴입니다. 골드 가격가 하락을 멈추고 바닥을 두 차례 단단히 지지해 준 뒤 중간 봉우리(넥라인 4,750달러)를 돌파해 마감하면 추세가 상승으로 강하게 전환될 가능성이 매우 높습니다."
  },
  {
    id: 918,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "급격한 기둥식 골드 가격 폭등(깃대) 후, 완만한 하향 평행 채널(깃발) 모양으로 횡보/수렴하다가 채널 상단을 강하게 돌파했습니다. 이 패턴과 예상 목표가는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2500,
            "high": 4000,
            "low": 2450,
            "close": 3900,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 3900,
            "high": 3950,
            "low": 3600,
            "close": 3700,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 3700,
            "high": 3800,
            "low": 3500,
            "close": 3550,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 3550,
            "high": 4250,
            "low": 3500,
            "close": 4150,
            "volume": 130
        }
    ],
    options: [
        "이중 천정형 패턴 - 목표가 없음",
        "불 플래그 (Bull Flag) 패턴 - 깃대의 높이(약 1,500달러 상승폭)만큼 돌파 지점부터 2차 폭등 랠리 기대",
        "헤드앤숄더 패턴 - 하락 타겟 계산",
        "대칭 삼각수렴 - 변동성 붕괴"
    ],
    correctIndex: 1,
    explanation: "대표적 강세 지속 패턴인 '불 플래그(Bull Flag)'입니다. 급격한 상승(깃대) 뒤 숨 고르기 채널(깃발)을 상방 돌파하면, 이전 상승 파동의 크기(깃대 높이)만큼 추가로 수직 랠리를 시작하는 관성이 있습니다."
  },
  {
    id: 919,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "상승 추세의 천정권에서 골드 가격가 동일한 가격 저항을 두 번 확인하며 M자 모양을 만든 뒤, 두 고점 사이의 저점 지지선인 넥라인(6,000달러)을 이탈했습니다. 올바른 해석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 7000,
            "low": 4950,
            "close": 6750,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 6750,
            "high": 6800,
            "low": 6000,
            "close": 6100,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 6100,
            "high": 7000,
            "low": 6050,
            "close": 6900,
            "volume": 109
        },
        {
            "time": "Day 4",
            "open": 6900,
            "high": 6950,
            "low": 5750,
            "close": 5800,
            "volume": 131
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 6000
                },
                {
                    "x": 3,
                    "y": 6000
                }
            ],
            "label": "넥라인 (120)",
            "color": "#ef4444"
        }
    ],
    options: [
        "강력한 상승 연장이므로 추가 매수",
        "이중 천정형(Double Top / M 패턴) 완성으로 상승 추세가 종료되고 하락 반전될 가능성 매우 큼",
        "일시적인 횡보 조절 국면",
        "아무 조건 없는 단순 가격 노이즈"
    ],
    correctIndex: 1,
    explanation: "고점에서 지지받지 못하고 형성된 M자형 '이중 천정형(Double Top)' 패턴입니다. 두 차례 강력한 저항벽(7,000달러)을 넘지 못하고 넥라인(6,000달러)마저 붕괴했으므로 하방 추세가 가속화된다는 신호입니다."
  },
  {
    id: 920,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 저항선은 수평(평평함)을 유지하고 있으나, 저점 지지선은 점점 우상향하며 좁게 수렴하는 차트 형태의 명칭과 일반적인 돌파 방향은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4000,
            "high": 5000,
            "low": 4000,
            "close": 4750,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 4750,
            "high": 5000,
            "low": 4300,
            "close": 4900,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 4900,
            "high": 5000,
            "low": 4600,
            "close": 4950,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 5000
                },
                {
                    "x": 2,
                    "y": 5000
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
                    "y": 4000
                },
                {
                    "x": 1,
                    "y": 4300
                },
                {
                    "x": 2,
                    "y": 4600
                }
            ],
            "label": "상승 지지선",
            "color": "#10b981"
        }
    ],
    options: [
        "디센딩 트라이앵글 (Descending Triangle) - 대개 하방 돌파",
        "어센딩 트라이앵글 (Ascending Triangle / 상승 삼각수렴) - 매수 압력이 우위에 있어 일반적으로 상방 돌파",
        "헤드앤숄더 패턴 - 하방 돌파",
        "상향 평행 채널 - 횡보"
    ],
    correctIndex: 1,
    explanation: "고점 저항은 평평하고 저점은 계속 높아지는 삼각수렴을 '어센딩 트라이앵글(Ascending Triangle)'이라고 합니다. 위로 갈수록 저점이 계속 올라가는 현상은 매수세가 가격을 위로 계속 압박하고 있음을 증명하며, 대개 저항선(5,000달러)을 상향 뚫고 오르는 확률이 높습니다."
  },
  {
    id: 946,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "고점 수평 저항선(5,000달러)과 저점 상승 지지선으로 이루어진 어센딩 트라이앵글 수렴 도중, 5,000달러를 돌파할 것을 미리 예측하고 4,900달러에서 비중 100% 매수로 진입했습니다. 그러나 골드 가격는 돌파에 실패하고 하방 상승 지지선을 대량 거래량 장대음봉으로 뚫어 4,600달러로 하향 마감했습니다. 올바른 매매 액션은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4000,
            "high": 5000,
            "low": 4000,
            "close": 4750,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 4750,
            "high": 5000,
            "low": 4400,
            "close": 4850,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 4850,
            "high": 4900,
            "low": 4550,
            "close": 4600,
            "volume": 120
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
            "label": "수평 저항선 (100)",
            "color": "#ef4444"
        },
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
                    "y": 4700
                }
            ],
            "label": "상승 지지선 (붕괴)",
            "color": "#10b981"
        }
    ],
    options: [
        "예측이 틀려 어센딩 패턴이 아래로 파괴(Breakdown)되었으므로 시나리오 실패를 즉각 인정하고 기계적으로 전량 손절매하여 계좌 추가 파산을 방지한다.",
        "4,000달러선까지 평단가를 낮추는 대규모 물타기 추가 매수를 시작한다.",
        "손절매 없이 본전 5,000달러가 올 때까지 무조건 홀딩(존버)한다.",
        "아무 관리 주문 없이 차트창을 닫고 외면한다."
    ],
    correctIndex: 0,
    explanation: "어센딩 트라이앵글은 상방 확률이 다소 높지만, 하단 지지선이 뚫려 무너지는 순간 패턴 실패와 함께 엄청난 실망 매도 매물이 출하됩니다. 특히 돌파를 미리 예견해 들어간 포지션은 즉시 룰 위반을 시정하고 손절(4,600달러)해야 큰 자산 보호를 할 수 있습니다."
  },
  {
    id: 947,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 3,
    theoryRef: "04_patterns_breakout.md",
    question: "하락 바닥권에서 왼쪽 어깨, 머리, 오른쪽 어깨를 그리며 역헤드앤숄더(Inverse Head & Shoulders) 패턴이 완성되었습니다. 가격이 넥라인 저항벽(4,000달러선)을 돌파했으나 이미 장대양봉으로 높이 솟아(4,350달러) 추격 매수 타이밍을 아쉽게 놓쳤습니다. 이때 뇌동매매를 피하는 가장 현명한 매수 타점 공략법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4750,
            "high": 4750,
            "low": 3500,
            "close": 3900,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 3900,
            "high": 4100,
            "low": 3000,
            "close": 3750,
            "volume": 90
        },
        {
            "time": "Day 3",
            "open": 3750,
            "high": 3950,
            "low": 3400,
            "close": 3800,
            "volume": 115
        },
        {
            "time": "Day 4",
            "open": 3800,
            "high": 4400,
            "low": 3750,
            "close": 4350,
            "volume": 131
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
            "label": "넥라인 저항선 (80)",
            "color": "#ef4444"
        }
    ],
    options: [
        "포모(FOMO / 소외 불안)를 이기지 못하고 꼭대기(4,350달러)에서 전액 시장가 추격 매수한다.",
        "돌파봉 꼭대기에서 타는 것보다, 향후 넥라인(4,000달러선) 부근으로 골드 가격가 눌려 새로운 지지선으로 작동(Retest)하는 조정을 보일 때까지 차분히 대기하여 지지 안착 확인 후 눌림목에서 정석 매수한다.",
        "추세가 끝났으므로 숏 포지션만 진입한다.",
        "무조건 상장폐지될 원자재이라 조롱하며 관심종목에서 지운다."
    ],
    correctIndex: 1,
    explanation: "강한 패턴 돌파봉 확인 후 뇌동매매로 추격하는 것은 손절 거리가 너무 멀어져 손익비가 최악인 나쁜 습관입니다. 정석 돌파 트레이더는 넥라인 역할 전환 지점(4,000달러)으로의 되돌림 눌림목(Retest)을 차분히 기다려 리스크를 짧게 끊고 들어가는 훈련을 해야 합니다."
  },
  {
    id: 948,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "지속적인 하락 추세 중, 고점과 저점이 수렴하며 우하향하는 하락 쐐기형(Falling Wedge) 패턴의 끝자락에 도달했습니다. 거래량이 급감하다가 마침내 쐐기형 상단 저항선을 상방으로 뚫는 강한 양봉 종가 마감(5,500달러)이 포착되었습니다. 합리적인 매수 진입 시 손절가 설정 기준은 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6500,
            "high": 6600,
            "low": 5500,
            "close": 5600,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 5600,
            "high": 5800,
            "low": 5100,
            "close": 5200,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 5200,
            "high": 5400,
            "low": 4900,
            "close": 5000,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 5000,
            "high": 5600,
            "low": 4950,
            "close": 5500,
            "volume": 122
        }
    ],
    options: [
        "손절가를 전혀 설정하지 않고 오직 청산가에 포지션 운명을 맡긴다.",
        "상방 돌파 확인 즉시 매수를 개시하되, 손절가는 쐐기형 수렴의 직전 최저점(4,900달러선) 바로 아래 또는 돌파 봉의 시가 하방에 배치하여 손절폭을 타이트하게 관리한다.",
        "평단가가 4,500달러가 될 때까지 손절 없이 10차례에 걸쳐 분할로 물타기한다.",
        "쐐기형 붕괴이므로 무조건 숏(공매도)으로 전환한다."
    ],
    correctIndex: 1,
    explanation: "하락 쐐기형(Falling Wedge)의 상방 돌파는 강력한 반전 신호입니다. 이 패턴의 장점은 진입 즉시 명확하고 짧은 기준점(수렴 바닥 최저가 4,900달러 혹은 돌파봉 하단)을 손절가로 설정할 수 있어, 리스크 한도를 안전하게 통제한 채 상방 랠리를 도모할 수 있다는 점입니다."
  },
  {
    id: 949,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 5,
    theoryRef: "04_patterns_breakout.md",
    question: "골드 가격가 약한 매수세와 거래량 급감 속에 고점과 저점을 높이며 좁게 상승 쐐기형(Rising Wedge)을 그리고 있습니다. 현재 가격은 상승 쐐기형 하단 지지선(15,000달러)에 아주 밀착하여 붕괴 위기에 놓여 있습니다. 이 시점에서 롱(매수) 포지션을 들고 있는 트레이더의 리스크 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 13000,
            "high": 14000,
            "low": 13000,
            "close": 13900,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 13900,
            "high": 14750,
            "low": 13600,
            "close": 14500,
            "volume": 26
        },
        {
            "time": "Day 3",
            "open": 14500,
            "high": 15250,
            "low": 14900,
            "close": 15050,
            "volume": 16
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 13000
                },
                {
                    "x": 1,
                    "y": 13600
                },
                {
                    "x": 2,
                    "y": 14900
                }
            ],
            "label": "쐐기 하단 지지선 (300)",
            "color": "#ef4444"
        }
    ],
    options: [
        "상승 쐐기형 패턴은 전형적인 하락 이탈(Bearish Breakdown) 패턴이며 거래량 축소는 신뢰도 저하를 반증하므로, 롱 포지션을 즉시 정리/매도하여 비중을 비우거나 하단선 붕괴 확정 시 숏 포지션 구축을 모색한다.",
        "추세 상승 지속으로 확신하고 신용 레버리지를 이용해 풀매수한다.",
        "25,000달러가 돌파될 때까지 절대 손절 없이 무기한 보유한다.",
        "다른 카지노 도박에 참여한다."
    ],
    correctIndex: 0,
    explanation: "상승 쐐기형(Rising Wedge)은 약세 세력이 억지로 쥐어짜며 상승 가격을 만드는 패턴으로, 수렴 끝에서 거래량 소멸과 함께 하방 이탈(Breakdown)하여 폭락할 위험이 매우 높은 대표적인 하락 대비 패턴입니다. 하단 지지선 이탈 낌새 시에는 매수 포지션을 전부 도망쳐 나와야 큰 손실을 막을 수 있습니다."
  },
  {
    id: 950,
    category: "패턴/돌파",
    categoryKey: "pattern",
    difficulty: 4,
    theoryRef: "04_patterns_breakout.md",
    question: "둥근 대야 모양의 바닥(Cup)을 그리며 상승 회복한 골드 가격가 전고점 저항벽 부근에서 하향 채널식 완만한 되돌림 조정 핸들(Handle)을 그리는 중입니다. 이후 핸들의 상단 저항선(7,500달러선)을 강한 거래량의 장대양봉으로 상향 돌파했습니다. 이때 합리적인 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 7000,
            "high": 7100,
            "low": 6400,
            "close": 6500,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 6500,
            "high": 7000,
            "low": 6450,
            "close": 6900,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 6900,
            "high": 7000,
            "low": 6700,
            "close": 6750,
            "volume": 116
        },
        {
            "time": "Day 4",
            "open": 6750,
            "high": 7700,
            "low": 6700,
            "close": 7600,
            "volume": 95
        }
    ],
    options: [
        "이전 컵 깊이만큼의 강력한 2차 상승 파동 랠리가 시작될 확률이 높으므로, 핸들 저점(6,700달러) 바로 아래에 손절매를 걸어두고 신규 매수(롱) 포지션을 진입한다.",
        "컵앤핸들은 하락 사멸 패턴이므로 즉시 전량 매도 및 손절 처리한다.",
        "손익 평단가 부근이므로 추가 손절매 주문을 전혀 설정하지 않고 관망한다.",
        "상황을 외면하고 포지션을 청산한 뒤 게임을 켠다."
    ],
    correctIndex: 0,
    explanation: "전형적인 강세 지속 패턴인 컵앤핸들(Cup & Handle)입니다. 핸들의 하락 조정 채널 상단 돌파는 매물 소화를 성공적으로 완수하고 본 랠리로 진입한다는 강력한 신호입니다. 손익비 관점에서 핸들의 지지 저점인 6,700달러 아래에 안전 손절을 지정한 뒤 진입 시 우수한 기대 수익을 가질 수 있습니다."
  },
];

import type { QuizItem } from './types';

export const quizzes_multitimeframe_regime: QuizItem[] = [
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
            "close": 140,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 140,
            "high": 147,
            "low": 139,
            "close": 145,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 145,
            "high": 146,
            "low": 128,
            "close": 130,
            "volume": 103
        },
        {
            "time": "Day 4",
            "open": 130,
            "high": 138,
            "low": 129,
            "close": 136,
            "volume": 131
        },
        {
            "time": "Day 5",
            "open": 136,
            "high": 137,
            "low": 118,
            "close": 120,
            "volume": 107
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
            "close": 89,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 89,
            "high": 90,
            "low": 75,
            "close": 76,
            "volume": 16
        },
        {
            "time": "Day 3",
            "open": 76,
            "high": 77,
            "low": 62,
            "close": 63,
            "volume": 33
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
            "close": 106,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 106,
            "high": 112,
            "low": 102,
            "close": 104,
            "volume": 111
        },
        {
            "time": "Day 3",
            "open": 104,
            "high": 106,
            "low": 98,
            "close": 100,
            "volume": 109
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
            "close": 112,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 112,
            "high": 128,
            "low": 110,
            "close": 125,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 125,
            "high": 139,
            "low": 122,
            "close": 136,
            "volume": 97
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
    id: 112,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 225,
            "high": 228,
            "low": 202.5,
            "close": 210,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 210,
            "high": 220.5,
            "low": 208.5,
            "close": 217.5,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 217.5,
            "high": 219,
            "low": 192,
            "close": 195,
            "volume": 120
        },
        {
            "time": "Day 4",
            "open": 195,
            "high": 207,
            "low": 193.5,
            "close": 204,
            "volume": 106
        },
        {
            "time": "Day 5",
            "open": 204,
            "high": 205.5,
            "low": 177,
            "close": 180,
            "volume": 133
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 225
                },
                {
                    "x": 4,
                    "y": 202.5
                },
                {
                    "x": 0,
                    "y": 202.5
                },
                {
                    "x": 4,
                    "y": 180
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
    id: 124,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 151.5,
            "low": 132,
            "close": 133.5,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 133.5,
            "high": 135,
            "low": 112.5,
            "close": 114,
            "volume": 15
        },
        {
            "time": "Day 3",
            "open": 114,
            "high": 115.5,
            "low": 93,
            "close": 94.5,
            "volume": 15
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "코인 가격의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 143,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 코인 가격가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 162,
            "low": 148.5,
            "close": 159,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 159,
            "high": 168,
            "low": 153,
            "close": 156,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 156,
            "high": 159,
            "low": 147,
            "close": 150,
            "volume": 104
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 165
                },
                {
                    "x": 2,
                    "y": 168
                },
                {
                    "x": 0,
                    "y": 147
                },
                {
                    "x": 2,
                    "y": 150
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
    id: 152,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "코인 가격가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 172.5,
            "low": 148.5,
            "close": 168,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 168,
            "high": 192,
            "low": 165,
            "close": 187.5,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 187.5,
            "high": 208.5,
            "low": 183,
            "close": 204,
            "volume": 122
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
    id: 212,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 304,
            "low": 270,
            "close": 280,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 280,
            "high": 294,
            "low": 278,
            "close": 290,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 290,
            "high": 292,
            "low": 256,
            "close": 260,
            "volume": 114
        },
        {
            "time": "Day 4",
            "open": 260,
            "high": 276,
            "low": 258,
            "close": 272,
            "volume": 131
        },
        {
            "time": "Day 5",
            "open": 272,
            "high": 274,
            "low": 236,
            "close": 240,
            "volume": 132
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 300
                },
                {
                    "x": 4,
                    "y": 270
                },
                {
                    "x": 0,
                    "y": 270
                },
                {
                    "x": 4,
                    "y": 240
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
    id: 224,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 202,
            "low": 176,
            "close": 178,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 178,
            "high": 180,
            "low": 150,
            "close": 152,
            "volume": 16
        },
        {
            "time": "Day 3",
            "open": 152,
            "high": 154,
            "low": 124,
            "close": 126,
            "volume": 23
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "시세의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 243,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 시세가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 216,
            "low": 198,
            "close": 212,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 212,
            "high": 224,
            "low": 204,
            "close": 208,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 208,
            "high": 212,
            "low": 196,
            "close": 200,
            "volume": 113
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 220
                },
                {
                    "x": 2,
                    "y": 224
                },
                {
                    "x": 0,
                    "y": 196
                },
                {
                    "x": 2,
                    "y": 200
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
    id: 252,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "시세가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 230,
            "low": 198,
            "close": 224,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 224,
            "high": 256,
            "low": 220,
            "close": 250,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 250,
            "high": 278,
            "low": 244,
            "close": 272,
            "volume": 105
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
    id: 312,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 450,
            "high": 456,
            "low": 405,
            "close": 420,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 420,
            "high": 441,
            "low": 417,
            "close": 435,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 435,
            "high": 438,
            "low": 384,
            "close": 390,
            "volume": 115
        },
        {
            "time": "Day 4",
            "open": 390,
            "high": 414,
            "low": 387,
            "close": 408,
            "volume": 102
        },
        {
            "time": "Day 5",
            "open": 408,
            "high": 411,
            "low": 354,
            "close": 360,
            "volume": 134
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 450
                },
                {
                    "x": 4,
                    "y": 405
                },
                {
                    "x": 0,
                    "y": 405
                },
                {
                    "x": 4,
                    "y": 360
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
    id: 324,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 303,
            "low": 264,
            "close": 267,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 267,
            "high": 270,
            "low": 225,
            "close": 228,
            "volume": 33
        },
        {
            "time": "Day 3",
            "open": 228,
            "high": 231,
            "low": 186,
            "close": 189,
            "volume": 34
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "삼성전자 주가의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 343,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 삼성전자 주가가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 324,
            "low": 297,
            "close": 318,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 318,
            "high": 336,
            "low": 306,
            "close": 312,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 312,
            "high": 318,
            "low": 294,
            "close": 300,
            "volume": 110
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 330
                },
                {
                    "x": 2,
                    "y": 336
                },
                {
                    "x": 0,
                    "y": 294
                },
                {
                    "x": 2,
                    "y": 300
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
    id: 352,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "삼성전자 주가가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 345,
            "low": 297,
            "close": 336,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 336,
            "high": 384,
            "low": 330,
            "close": 375,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 375,
            "high": 417,
            "low": 366,
            "close": 408,
            "volume": 104
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
    id: 412,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 750,
            "high": 760,
            "low": 675,
            "close": 700,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 700,
            "high": 735,
            "low": 695,
            "close": 725,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 725,
            "high": 730,
            "low": 640,
            "close": 650,
            "volume": 115
        },
        {
            "time": "Day 4",
            "open": 650,
            "high": 690,
            "low": 645,
            "close": 680,
            "volume": 122
        },
        {
            "time": "Day 5",
            "open": 680,
            "high": 685,
            "low": 590,
            "close": 600,
            "volume": 105
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 750
                },
                {
                    "x": 4,
                    "y": 675
                },
                {
                    "x": 0,
                    "y": 675
                },
                {
                    "x": 4,
                    "y": 600
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
    id: 424,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 505,
            "low": 440,
            "close": 445,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 445,
            "high": 450,
            "low": 375,
            "close": 380,
            "volume": 34
        },
        {
            "time": "Day 3",
            "open": 380,
            "high": 385,
            "low": 310,
            "close": 315,
            "volume": 17
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "테슬라 주가의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 443,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 테슬라 주가가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 540,
            "low": 495,
            "close": 530,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 530,
            "high": 560,
            "low": 510,
            "close": 520,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 520,
            "high": 530,
            "low": 490,
            "close": 500,
            "volume": 113
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 550
                },
                {
                    "x": 2,
                    "y": 560
                },
                {
                    "x": 0,
                    "y": 490
                },
                {
                    "x": 2,
                    "y": 500
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
    id: 452,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "테슬라 주가가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 575,
            "low": 495,
            "close": 560,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 560,
            "high": 640,
            "low": 550,
            "close": 625,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 625,
            "high": 695,
            "low": 610,
            "close": 680,
            "volume": 111
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
    id: 512,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1216,
            "low": 1080,
            "close": 1120,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 1120,
            "high": 1176,
            "low": 1112,
            "close": 1160,
            "volume": 98
        },
        {
            "time": "Day 3",
            "open": 1160,
            "high": 1168,
            "low": 1024,
            "close": 1040,
            "volume": 106
        },
        {
            "time": "Day 4",
            "open": 1040,
            "high": 1104,
            "low": 1032,
            "close": 1088,
            "volume": 125
        },
        {
            "time": "Day 5",
            "open": 1088,
            "high": 1096,
            "low": 944,
            "close": 960,
            "volume": 105
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1200
                },
                {
                    "x": 4,
                    "y": 1080
                },
                {
                    "x": 0,
                    "y": 1080
                },
                {
                    "x": 4,
                    "y": 960
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
    id: 524,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 808,
            "low": 704,
            "close": 712,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 712,
            "high": 720,
            "low": 600,
            "close": 608,
            "volume": 20
        },
        {
            "time": "Day 3",
            "open": 608,
            "high": 616,
            "low": 496,
            "close": 504,
            "volume": 23
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "애플 주가의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 543,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 애플 주가가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 864,
            "low": 792,
            "close": 848,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 848,
            "high": 896,
            "low": 816,
            "close": 832,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 832,
            "high": 848,
            "low": 784,
            "close": 800,
            "volume": 118
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 880
                },
                {
                    "x": 2,
                    "y": 896
                },
                {
                    "x": 0,
                    "y": 784
                },
                {
                    "x": 2,
                    "y": 800
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
    id: 552,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "애플 주가가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 920,
            "low": 792,
            "close": 896,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 896,
            "high": 1024,
            "low": 880,
            "close": 1000,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 1000,
            "high": 1112,
            "low": 976,
            "close": 1088,
            "volume": 103
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
    id: 612,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1500,
            "high": 1520,
            "low": 1350,
            "close": 1400,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 1400,
            "high": 1470,
            "low": 1390,
            "close": 1450,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 1450,
            "high": 1460,
            "low": 1280,
            "close": 1300,
            "volume": 112
        },
        {
            "time": "Day 4",
            "open": 1300,
            "high": 1380,
            "low": 1290,
            "close": 1360,
            "volume": 93
        },
        {
            "time": "Day 5",
            "open": 1360,
            "high": 1370,
            "low": 1180,
            "close": 1200,
            "volume": 134
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1500
                },
                {
                    "x": 4,
                    "y": 1350
                },
                {
                    "x": 0,
                    "y": 1350
                },
                {
                    "x": 4,
                    "y": 1200
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
    id: 624,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1010,
            "low": 880,
            "close": 890,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 890,
            "high": 900,
            "low": 750,
            "close": 760,
            "volume": 22
        },
        {
            "time": "Day 3",
            "open": 760,
            "high": 770,
            "low": 620,
            "close": 630,
            "volume": 23
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "나스닥 시세의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 643,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 나스닥 시세가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1080,
            "low": 990,
            "close": 1060,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 1060,
            "high": 1120,
            "low": 1020,
            "close": 1040,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 1040,
            "high": 1060,
            "low": 980,
            "close": 1000,
            "volume": 92
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1100
                },
                {
                    "x": 2,
                    "y": 1120
                },
                {
                    "x": 0,
                    "y": 980
                },
                {
                    "x": 2,
                    "y": 1000
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
    id: 652,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "나스닥 시세가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1150,
            "low": 990,
            "close": 1120,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 1120,
            "high": 1280,
            "low": 1100,
            "close": 1250,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 1250,
            "high": 1390,
            "low": 1220,
            "close": 1360,
            "volume": 120
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
    id: 712,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1800,
            "high": 1824,
            "low": 1620,
            "close": 1680,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 1680,
            "high": 1764,
            "low": 1668,
            "close": 1740,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 1740,
            "high": 1752,
            "low": 1536,
            "close": 1560,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 1560,
            "high": 1656,
            "low": 1548,
            "close": 1632,
            "volume": 119
        },
        {
            "time": "Day 5",
            "open": 1632,
            "high": 1644,
            "low": 1416,
            "close": 1440,
            "volume": 111
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1800
                },
                {
                    "x": 4,
                    "y": 1620
                },
                {
                    "x": 0,
                    "y": 1620
                },
                {
                    "x": 4,
                    "y": 1440
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
    id: 724,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1212,
            "low": 1056,
            "close": 1068,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 1068,
            "high": 1080,
            "low": 900,
            "close": 912,
            "volume": 34
        },
        {
            "time": "Day 3",
            "open": 912,
            "high": 924,
            "low": 744,
            "close": 756,
            "volume": 16
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "엔비디아 주가의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 743,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 엔비디아 주가가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1296,
            "low": 1188,
            "close": 1272,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 1272,
            "high": 1344,
            "low": 1224,
            "close": 1248,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 1248,
            "high": 1272,
            "low": 1176,
            "close": 1200,
            "volume": 112
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 1320
                },
                {
                    "x": 2,
                    "y": 1344
                },
                {
                    "x": 0,
                    "y": 1176
                },
                {
                    "x": 2,
                    "y": 1200
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
    id: 752,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "엔비디아 주가가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1380,
            "low": 1188,
            "close": 1344,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 1344,
            "high": 1536,
            "low": 1320,
            "close": 1500,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 1500,
            "high": 1668,
            "low": 1464,
            "close": 1632,
            "volume": 114
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
    id: 812,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 3000,
            "high": 3040,
            "low": 2700,
            "close": 2800,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 2800,
            "high": 2940,
            "low": 2780,
            "close": 2900,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 2900,
            "high": 2920,
            "low": 2560,
            "close": 2600,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 2600,
            "high": 2760,
            "low": 2580,
            "close": 2720,
            "volume": 119
        },
        {
            "time": "Day 5",
            "open": 2720,
            "high": 2740,
            "low": 2360,
            "close": 2400,
            "volume": 100
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 3000
                },
                {
                    "x": 4,
                    "y": 2700
                },
                {
                    "x": 0,
                    "y": 2700
                },
                {
                    "x": 4,
                    "y": 2400
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
    id: 824,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2020,
            "low": 1760,
            "close": 1780,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 1780,
            "high": 1800,
            "low": 1500,
            "close": 1520,
            "volume": 34
        },
        {
            "time": "Day 3",
            "open": 1520,
            "high": 1540,
            "low": 1240,
            "close": 1260,
            "volume": 16
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "리플 시세의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 843,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 리플 시세가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2160,
            "low": 1980,
            "close": 2120,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 2120,
            "high": 2240,
            "low": 2040,
            "close": 2080,
            "volume": 89
        },
        {
            "time": "Day 3",
            "open": 2080,
            "high": 2120,
            "low": 1960,
            "close": 2000,
            "volume": 89
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 2200
                },
                {
                    "x": 2,
                    "y": 2240
                },
                {
                    "x": 0,
                    "y": 1960
                },
                {
                    "x": 2,
                    "y": 2000
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
    id: 852,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "리플 시세가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2300,
            "low": 1980,
            "close": 2240,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 2240,
            "high": 2560,
            "low": 2200,
            "close": 2500,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 2500,
            "high": 2780,
            "low": 2440,
            "close": 2720,
            "volume": 88
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
    id: 912,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 3,
    theoryRef: "07_multitimeframe_regime.md",
    question: "아래 차트에서 고점들과 저점들이 일정한 평행 통로를 그리며 하락하고 있습니다. 채널 하단에 도달했을 때 단기 반등을 목표로 하는 매매의 명칭과 관점은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 7500,
            "high": 7600,
            "low": 6750,
            "close": 7000,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 7000,
            "high": 7350,
            "low": 6950,
            "close": 7250,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 7250,
            "high": 7300,
            "low": 6400,
            "close": 6500,
            "volume": 122
        },
        {
            "time": "Day 4",
            "open": 6500,
            "high": 6900,
            "low": 6450,
            "close": 6800,
            "volume": 119
        },
        {
            "time": "Day 5",
            "open": 6800,
            "high": 6850,
            "low": 5900,
            "close": 6000,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 7500
                },
                {
                    "x": 4,
                    "y": 6750
                },
                {
                    "x": 0,
                    "y": 6750
                },
                {
                    "x": 4,
                    "y": 6000
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
    id: 924,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "매우 강력한 원웨이 폭락장 속에서 RSI 지표가 20(과매도 영역) 이하로 깊이 내려왔습니다. 이를 보고 '과매도 반등'을 노리며 기계적 시장가 풀매수를 때렸을 때 나타나는 가장 빈번한 오류는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5050,
            "low": 4400,
            "close": 4450,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 4450,
            "high": 4500,
            "low": 3750,
            "close": 3800,
            "volume": 25
        },
        {
            "time": "Day 3",
            "open": 3800,
            "high": 3850,
            "low": 3100,
            "close": 3150,
            "volume": 34
        }
    ],
    options: [
        "하락 추세 즉시 종료 및 V자 상승 반등 성공",
        "강력한 하락장에서의 지표 과매도 고착화 리스크",
        "거래량 급감으로 인한 호가 정지 및 상장 폐지",
        "골드 가격의 즉각적인 박스권 횡보 및 변동성 축소"
    ],
    correctIndex: 1,
    explanation: "RSI 30 이하 과매도 영역은 반등 신호이기도 하지만, 추세가 지나치게 강력한 하락장일 때는 지표만 과매도 구역에 쳐박힌 채 가격은 계속 급락하는 '과매도 고착화(Oversold Embedded)' 상태가 이어집니다. 다이버전스나 캔들 반전형 확인 없이 수치만 보고 들어가는 매수는 깡통으로 가는 지름길입니다."
  },
  {
    id: 943,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "우상향하는 상승 평행 채널 안에서 순항하던 골드 가격가 중심선(Mid-line)을 뚫고 하방으로 이탈 마감했습니다. 이후 중심선 부근까지 반등을 시도했으나 재차 저항을 받고 아래꼬리가 꺾여 채널 하단선을 향해 하락 조정을 재개하려 합니다. 신규 매수(롱) 포지션 진입을 계획 중인 트레이더의 대응법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5400,
            "low": 4950,
            "close": 5300,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 5300,
            "high": 5600,
            "low": 5100,
            "close": 5200,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 5200,
            "high": 5300,
            "low": 4900,
            "close": 5000,
            "volume": 119
        }
    ],
    drawings: [
        {
            "type": "channel",
            "points": [
                {
                    "x": 0,
                    "y": 5500
                },
                {
                    "x": 2,
                    "y": 5600
                },
                {
                    "x": 0,
                    "y": 4900
                },
                {
                    "x": 2,
                    "y": 5000
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
    id: 952,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "07_multitimeframe_regime.md",
    question: "골드 가격가 호재와 함께 밴드 상단선 바깥을 타고 계속 상승하는 강력한 볼린저 밴드 밴드워크(Band Walk) 현상이 발생 중이며, RSI는 80을 넘어 극단적 과매수 수치를 가리키고 있습니다. 이 구간에서 취해야 할 가장 합리적인 리스크 및 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5750,
            "low": 4950,
            "close": 5600,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 5600,
            "high": 6400,
            "low": 5500,
            "close": 6250,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 6250,
            "high": 6950,
            "low": 6100,
            "close": 6800,
            "volume": 121
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
];

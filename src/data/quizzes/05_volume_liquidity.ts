import type { QuizItem } from './types';

export const quizzes_volume_liquidity: QuizItem[] = [
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
            "close": 100,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 102,
            "low": 99,
            "close": 101,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 101,
            "high": 110,
            "low": 100,
            "close": 108,
            "volume": 29
        },
        {
            "time": "Day 4",
            "open": 108,
            "high": 109,
            "low": 95,
            "close": 96,
            "volume": 22
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
            "close": 119,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 119,
            "high": 120,
            "low": 110,
            "close": 111,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 111,
            "high": 123,
            "low": 110,
            "close": 122,
            "volume": 91
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
            "close": 127,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 127,
            "high": 138,
            "low": 126,
            "close": 136,
            "volume": 103
        },
        {
            "time": "Day 3",
            "open": 133,
            "high": 134,
            "low": 130,
            "close": 131,
            "volume": 97
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
            "close": 117,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 117,
            "high": 122,
            "low": 116,
            "close": 121,
            "volume": 353
        },
        {
            "time": "Day 3",
            "open": 121,
            "high": 122,
            "low": 115,
            "close": 116,
            "volume": 408
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
            "close": 92,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 92,
            "high": 94,
            "low": 82,
            "close": 83,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 83,
            "high": 85,
            "low": 75,
            "close": 76,
            "volume": 99
        },
        {
            "time": "Day 4",
            "open": 76,
            "high": 90,
            "low": 75,
            "close": 89,
            "volume": 131
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
            "close": 104,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 104,
            "high": 109,
            "low": 103,
            "close": 108,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 108,
            "high": 110,
            "low": 107,
            "close": 108,
            "volume": 102
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
            "close": 202,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 202,
            "high": 204,
            "low": 195,
            "close": 201,
            "volume": 90
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
            "close": 255,
            "volume": 94
        },
        {
            "time": "Wave 2",
            "open": 255,
            "high": 275,
            "low": 250,
            "close": 270,
            "volume": 85
        },
        {
            "time": "Wave 3",
            "open": 270,
            "high": 290,
            "low": 265,
            "close": 288,
            "volume": 127
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
            "close": 100,
            "volume": 328
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 112,
            "low": 99,
            "close": 110,
            "volume": 404
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
            "close": 49500,
            "volume": 30
        },
        {
            "time": "Day 2",
            "open": 49500,
            "high": 49800,
            "low": 48000,
            "close": 49600,
            "volume": 15
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
    id: 107,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "코인 가격가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 147,
            "high": 151.5,
            "low": 145.5,
            "close": 150,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 150,
            "high": 153,
            "low": 148.5,
            "close": 151.5,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 151.5,
            "high": 165,
            "low": 150,
            "close": 162,
            "volume": 30
        },
        {
            "time": "Day 4",
            "open": 162,
            "high": 163.5,
            "low": 142.5,
            "close": 144,
            "volume": 17
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 153
                },
                {
                    "x": 3,
                    "y": 153
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
    id: 109,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 코인 가격가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 180,
            "high": 183,
            "low": 177,
            "close": 178.5,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 178.5,
            "high": 180,
            "low": 165,
            "close": 166.5,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 166.5,
            "high": 184.5,
            "low": 165,
            "close": 183,
            "volume": 93
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 172.5
                },
                {
                    "x": 2,
                    "y": 172.5
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
    id: 135,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 코인 가격가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 180,
            "high": 192,
            "low": 178.5,
            "close": 190.5,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 190.5,
            "high": 207,
            "low": 189,
            "close": 204,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 199.5,
            "high": 201,
            "low": 195,
            "close": 196.5,
            "volume": 112
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
    id: 139,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "코인 가격가 180달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 174달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 168,
            "high": 177,
            "low": 166.5,
            "close": 175.5,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 175.5,
            "high": 183,
            "low": 174,
            "close": 181.5,
            "volume": 401
        },
        {
            "time": "Day 3",
            "open": 181.5,
            "high": 183,
            "low": 172.5,
            "close": 174,
            "volume": 419
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 180
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(180달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 142,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 135,
            "close": 138,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 138,
            "high": 141,
            "low": 123,
            "close": 124.5,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 124.5,
            "high": 127.5,
            "low": 112.5,
            "close": 114,
            "volume": 95
        },
        {
            "time": "Day 4",
            "open": 114,
            "high": 135,
            "low": 112.5,
            "close": 133.5,
            "volume": 108
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
                    "x": 3,
                    "y": 129
                },
                {
                    "x": 0,
                    "y": 135
                },
                {
                    "x": 3,
                    "y": 114
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
    id: 161,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "코인 가격가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 157.5,
            "low": 148.5,
            "close": 156,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 156,
            "high": 163.5,
            "low": 154.5,
            "close": 162,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 162,
            "high": 165,
            "low": 160.5,
            "close": 162,
            "volume": 113
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 163.5
                },
                {
                    "x": 2,
                    "y": 163.5
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
    id: 162,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "코인 가격가 장기 횡보하던 박스권 지지선인 300달러를 깨고 292.50달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 301.50달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 315,
            "high": 318,
            "low": 300,
            "close": 303,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 303,
            "high": 306,
            "low": 292.5,
            "close": 301.5,
            "volume": 97
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
                    "x": 1,
                    "y": 300
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(292.50달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 163,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "코인 가격는 375달러에서 435달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 345,
            "high": 390,
            "low": 342,
            "close": 382.5,
            "volume": 87
        },
        {
            "time": "Wave 2",
            "open": 382.5,
            "high": 412.5,
            "low": 375,
            "close": 405,
            "volume": 100
        },
        {
            "time": "Wave 3",
            "open": 405,
            "high": 435,
            "low": 397.5,
            "close": 432,
            "volume": 105
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "코인 가격는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 164,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 148.5,
            "close": 150,
            "volume": 383
        },
        {
            "time": "Day 2",
            "open": 150,
            "high": 168,
            "low": 148.5,
            "close": 165,
            "volume": 347
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
    id: 165,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "이더리움 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 75000,
            "high": 75750,
            "low": 73800,
            "close": 74250,
            "volume": 29
        },
        {
            "time": "Day 2",
            "open": 74250,
            "high": 74700,
            "low": 72000,
            "close": 74400,
            "volume": 24
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 73800
                },
                {
                    "x": 1,
                    "y": 73800
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 코인 가격는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 166,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 172.5,
            "low": 147,
            "close": 151.5
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
    id: 207,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "시세가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 196,
            "high": 202,
            "low": 194,
            "close": 200,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 200,
            "high": 204,
            "low": 198,
            "close": 202,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 202,
            "high": 220,
            "low": 200,
            "close": 216,
            "volume": 33
        },
        {
            "time": "Day 4",
            "open": 216,
            "high": 218,
            "low": 190,
            "close": 192,
            "volume": 22
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 204
                },
                {
                    "x": 3,
                    "y": 204
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
    id: 209,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 시세가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 244,
            "low": 236,
            "close": 238,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 238,
            "high": 240,
            "low": 220,
            "close": 222,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 222,
            "high": 246,
            "low": 220,
            "close": 244,
            "volume": 119
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 230
                },
                {
                    "x": 2,
                    "y": 230
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
    id: 235,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 시세가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 240,
            "high": 256,
            "low": 238,
            "close": 254,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 254,
            "high": 276,
            "low": 252,
            "close": 272,
            "volume": 123
        },
        {
            "time": "Day 3",
            "open": 266,
            "high": 268,
            "low": 260,
            "close": 262,
            "volume": 100
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
    id: 239,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "시세가 240달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 232달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 224,
            "high": 236,
            "low": 222,
            "close": 234,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 234,
            "high": 244,
            "low": 232,
            "close": 242,
            "volume": 342
        },
        {
            "time": "Day 3",
            "open": 242,
            "high": 244,
            "low": 230,
            "close": 232,
            "volume": 323
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(240달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 242,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 180,
            "close": 184,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 184,
            "high": 188,
            "low": 164,
            "close": 166,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 166,
            "high": 170,
            "low": 150,
            "close": 152,
            "volume": 120
        },
        {
            "time": "Day 4",
            "open": 152,
            "high": 180,
            "low": 150,
            "close": 178,
            "volume": 131
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
                    "x": 3,
                    "y": 172
                },
                {
                    "x": 0,
                    "y": 180
                },
                {
                    "x": 3,
                    "y": 152
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
    id: 261,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "시세가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 210,
            "low": 198,
            "close": 208,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 208,
            "high": 218,
            "low": 206,
            "close": 216,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 216,
            "high": 220,
            "low": 214,
            "close": 216,
            "volume": 99
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 218
                },
                {
                    "x": 2,
                    "y": 218
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
    id: 262,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "시세가 장기 횡보하던 박스권 지지선인 400달러를 깨고 390달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 402달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 420,
            "high": 424,
            "low": 400,
            "close": 404,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 404,
            "high": 408,
            "low": 390,
            "close": 402,
            "volume": 90
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 400
                },
                {
                    "x": 1,
                    "y": 400
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(390달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 263,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "시세는 500달러에서 580달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 460,
            "high": 520,
            "low": 456,
            "close": 510,
            "volume": 91
        },
        {
            "time": "Wave 2",
            "open": 510,
            "high": 550,
            "low": 500,
            "close": 540,
            "volume": 88
        },
        {
            "time": "Wave 3",
            "open": 540,
            "high": 580,
            "low": 530,
            "close": 576,
            "volume": 122
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "시세는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 264,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 198,
            "close": 200,
            "volume": 381
        },
        {
            "time": "Day 2",
            "open": 200,
            "high": 224,
            "low": 198,
            "close": 220,
            "volume": 346
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
    id: 265,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "솔라나 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100000,
            "high": 101000,
            "low": 98400,
            "close": 99000,
            "volume": 31
        },
        {
            "time": "Day 2",
            "open": 99000,
            "high": 99600,
            "low": 96000,
            "close": 99200,
            "volume": 31
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 98400
                },
                {
                    "x": 1,
                    "y": 98400
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 시세는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 266,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 230,
            "low": 196,
            "close": 202
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
    id: 307,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "삼성전자 주가가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 294,
            "high": 303,
            "low": 291,
            "close": 300,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 300,
            "high": 306,
            "low": 297,
            "close": 303,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 303,
            "high": 330,
            "low": 300,
            "close": 324,
            "volume": 22
        },
        {
            "time": "Day 4",
            "open": 324,
            "high": 327,
            "low": 285,
            "close": 288,
            "volume": 17
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 306
                },
                {
                    "x": 3,
                    "y": 306
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
    id: 309,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 삼성전자 주가가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 360,
            "high": 366,
            "low": 354,
            "close": 357,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 357,
            "high": 360,
            "low": 330,
            "close": 333,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 333,
            "high": 369,
            "low": 330,
            "close": 366,
            "volume": 121
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 345
                },
                {
                    "x": 2,
                    "y": 345
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
    id: 335,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 삼성전자 주가가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 360,
            "high": 384,
            "low": 357,
            "close": 381,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 381,
            "high": 414,
            "low": 378,
            "close": 408,
            "volume": 108
        },
        {
            "time": "Day 3",
            "open": 399,
            "high": 402,
            "low": 390,
            "close": 393,
            "volume": 91
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
    id: 339,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "삼성전자 주가가 360달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 348달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 336,
            "high": 354,
            "low": 333,
            "close": 351,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 351,
            "high": 366,
            "low": 348,
            "close": 363,
            "volume": 364
        },
        {
            "time": "Day 3",
            "open": 363,
            "high": 366,
            "low": 345,
            "close": 348,
            "volume": 327
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 360
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(360달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 342,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 270,
            "close": 276,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 276,
            "high": 282,
            "low": 246,
            "close": 249,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 249,
            "high": 255,
            "low": 225,
            "close": 228,
            "volume": 123
        },
        {
            "time": "Day 4",
            "open": 228,
            "high": 270,
            "low": 225,
            "close": 267,
            "volume": 101
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
                    "x": 3,
                    "y": 258
                },
                {
                    "x": 0,
                    "y": 270
                },
                {
                    "x": 3,
                    "y": 228
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
    id: 361,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "삼성전자 주가가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 315,
            "low": 297,
            "close": 312,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 312,
            "high": 327,
            "low": 309,
            "close": 324,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 324,
            "high": 330,
            "low": 321,
            "close": 324,
            "volume": 112
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 327
                },
                {
                    "x": 2,
                    "y": 327
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
    id: 362,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "삼성전자 주가가 장기 횡보하던 박스권 지지선인 600달러를 깨고 585달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 603달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 630,
            "high": 636,
            "low": 600,
            "close": 606,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 606,
            "high": 612,
            "low": 585,
            "close": 603,
            "volume": 108
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
                    "x": 1,
                    "y": 600
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(585달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 363,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "삼성전자 주가는 750달러에서 870달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 690,
            "high": 780,
            "low": 684,
            "close": 765,
            "volume": 113
        },
        {
            "time": "Wave 2",
            "open": 765,
            "high": 825,
            "low": 750,
            "close": 810,
            "volume": 116
        },
        {
            "time": "Wave 3",
            "open": 810,
            "high": 870,
            "low": 795,
            "close": 864,
            "volume": 100
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "삼성전자 주가는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 364,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 297,
            "close": 300,
            "volume": 368
        },
        {
            "time": "Day 2",
            "open": 300,
            "high": 336,
            "low": 297,
            "close": 330,
            "volume": 396
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
    id: 365,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "삼성전자 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150000,
            "high": 151500,
            "low": 147600,
            "close": 148500,
            "volume": 17
        },
        {
            "time": "Day 2",
            "open": 148500,
            "high": 149400,
            "low": 144000,
            "close": 148800,
            "volume": 17
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 147600
                },
                {
                    "x": 1,
                    "y": 147600
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 삼성전자 주가는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 366,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 345,
            "low": 294,
            "close": 303
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
    id: 407,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "테슬라 주가가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 490,
            "high": 505,
            "low": 485,
            "close": 500,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 500,
            "high": 510,
            "low": 495,
            "close": 505,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 505,
            "high": 550,
            "low": 500,
            "close": 540,
            "volume": 15
        },
        {
            "time": "Day 4",
            "open": 540,
            "high": 545,
            "low": 475,
            "close": 480,
            "volume": 19
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 510
                },
                {
                    "x": 3,
                    "y": 510
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
    id: 409,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 테슬라 주가가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 600,
            "high": 610,
            "low": 590,
            "close": 595,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 595,
            "high": 600,
            "low": 550,
            "close": 555,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 555,
            "high": 615,
            "low": 550,
            "close": 610,
            "volume": 126
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 575
                },
                {
                    "x": 2,
                    "y": 575
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
    id: 435,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 테슬라 주가가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 600,
            "high": 640,
            "low": 595,
            "close": 635,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 635,
            "high": 690,
            "low": 630,
            "close": 680,
            "volume": 106
        },
        {
            "time": "Day 3",
            "open": 665,
            "high": 670,
            "low": 650,
            "close": 655,
            "volume": 97
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
    id: 439,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "테슬라 주가가 600달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 580달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 560,
            "high": 590,
            "low": 555,
            "close": 585,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 585,
            "high": 610,
            "low": 580,
            "close": 605,
            "volume": 347
        },
        {
            "time": "Day 3",
            "open": 605,
            "high": 610,
            "low": 575,
            "close": 580,
            "volume": 375
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(600달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 442,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 450,
            "close": 460,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 460,
            "high": 470,
            "low": 410,
            "close": 415,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 415,
            "high": 425,
            "low": 375,
            "close": 380,
            "volume": 125
        },
        {
            "time": "Day 4",
            "open": 380,
            "high": 450,
            "low": 375,
            "close": 445,
            "volume": 105
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
                    "x": 3,
                    "y": 430
                },
                {
                    "x": 0,
                    "y": 450
                },
                {
                    "x": 3,
                    "y": 380
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
    id: 461,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "테슬라 주가가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 525,
            "low": 495,
            "close": 520,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 520,
            "high": 545,
            "low": 515,
            "close": 540,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 540,
            "high": 550,
            "low": 535,
            "close": 540,
            "volume": 126
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 545
                },
                {
                    "x": 2,
                    "y": 545
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
    id: 462,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "테슬라 주가가 장기 횡보하던 박스권 지지선인 1,000달러를 깨고 975달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 1,005달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1050,
            "high": 1060,
            "low": 1000,
            "close": 1010,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 1010,
            "high": 1020,
            "low": 975,
            "close": 1005,
            "volume": 97
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
                    "x": 1,
                    "y": 1000
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(975달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 463,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "테슬라 주가는 1,250달러에서 1,450달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 1150,
            "high": 1300,
            "low": 1140,
            "close": 1275,
            "volume": 103
        },
        {
            "time": "Wave 2",
            "open": 1275,
            "high": 1375,
            "low": 1250,
            "close": 1350,
            "volume": 89
        },
        {
            "time": "Wave 3",
            "open": 1350,
            "high": 1450,
            "low": 1325,
            "close": 1440,
            "volume": 95
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "테슬라 주가는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 464,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 495,
            "close": 500,
            "volume": 358
        },
        {
            "time": "Day 2",
            "open": 500,
            "high": 560,
            "low": 495,
            "close": 550,
            "volume": 409
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
    id: 465,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "테슬라 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 250000,
            "high": 252500,
            "low": 246000,
            "close": 247500,
            "volume": 28
        },
        {
            "time": "Day 2",
            "open": 247500,
            "high": 249000,
            "low": 240000,
            "close": 248000,
            "volume": 25
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 246000
                },
                {
                    "x": 1,
                    "y": 246000
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 테슬라 주가는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 466,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 575,
            "low": 490,
            "close": 505
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
    id: 507,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "애플 주가가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 784,
            "high": 808,
            "low": 776,
            "close": 800,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 800,
            "high": 816,
            "low": 792,
            "close": 808,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 808,
            "high": 880,
            "low": 800,
            "close": 864,
            "volume": 28
        },
        {
            "time": "Day 4",
            "open": 864,
            "high": 872,
            "low": 760,
            "close": 768,
            "volume": 17
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 816
                },
                {
                    "x": 3,
                    "y": 816
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
    id: 509,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 애플 주가가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 976,
            "low": 944,
            "close": 952,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 952,
            "high": 960,
            "low": 880,
            "close": 888,
            "volume": 96
        },
        {
            "time": "Day 3",
            "open": 888,
            "high": 984,
            "low": 880,
            "close": 976,
            "volume": 115
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 920
                },
                {
                    "x": 2,
                    "y": 920
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
    id: 535,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 애플 주가가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 960,
            "high": 1024,
            "low": 952,
            "close": 1016,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 1016,
            "high": 1104,
            "low": 1008,
            "close": 1088,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 1064,
            "high": 1072,
            "low": 1040,
            "close": 1048,
            "volume": 114
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
    id: 539,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "애플 주가가 960달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 928달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 896,
            "high": 944,
            "low": 888,
            "close": 936,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 936,
            "high": 976,
            "low": 928,
            "close": 968,
            "volume": 347
        },
        {
            "time": "Day 3",
            "open": 968,
            "high": 976,
            "low": 920,
            "close": 928,
            "volume": 388
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(960달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 542,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 720,
            "close": 736,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 736,
            "high": 752,
            "low": 656,
            "close": 664,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 664,
            "high": 680,
            "low": 600,
            "close": 608,
            "volume": 105
        },
        {
            "time": "Day 4",
            "open": 608,
            "high": 720,
            "low": 600,
            "close": 712,
            "volume": 111
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
                    "x": 3,
                    "y": 688
                },
                {
                    "x": 0,
                    "y": 720
                },
                {
                    "x": 3,
                    "y": 608
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
    id: 561,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "애플 주가가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 840,
            "low": 792,
            "close": 832,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 832,
            "high": 872,
            "low": 824,
            "close": 864,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 864,
            "high": 880,
            "low": 856,
            "close": 864,
            "volume": 91
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 872
                },
                {
                    "x": 2,
                    "y": 872
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
    id: 562,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "애플 주가가 장기 횡보하던 박스권 지지선인 1,600달러를 깨고 1,560달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 1,608달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1680,
            "high": 1696,
            "low": 1600,
            "close": 1616,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 1616,
            "high": 1632,
            "low": 1560,
            "close": 1608,
            "volume": 118
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1600
                },
                {
                    "x": 1,
                    "y": 1600
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(1,560달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 563,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "애플 주가는 2,000달러에서 2,320달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 1840,
            "high": 2080,
            "low": 1824,
            "close": 2040,
            "volume": 84
        },
        {
            "time": "Wave 2",
            "open": 2040,
            "high": 2200,
            "low": 2000,
            "close": 2160,
            "volume": 119
        },
        {
            "time": "Wave 3",
            "open": 2160,
            "high": 2320,
            "low": 2120,
            "close": 2304,
            "volume": 125
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "애플 주가는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 564,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 792,
            "close": 800,
            "volume": 338
        },
        {
            "time": "Day 2",
            "open": 800,
            "high": 896,
            "low": 792,
            "close": 880,
            "volume": 387
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
    id: 565,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "애플 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 400000,
            "high": 404000,
            "low": 393600,
            "close": 396000,
            "volume": 30
        },
        {
            "time": "Day 2",
            "open": 396000,
            "high": 398400,
            "low": 384000,
            "close": 396800,
            "volume": 20
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 393600
                },
                {
                    "x": 1,
                    "y": 393600
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 애플 주가는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 566,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 920,
            "low": 784,
            "close": 808
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
    id: 607,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "나스닥 시세가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 980,
            "high": 1010,
            "low": 970,
            "close": 1000,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 1000,
            "high": 1020,
            "low": 990,
            "close": 1010,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 1010,
            "high": 1100,
            "low": 1000,
            "close": 1080,
            "volume": 23
        },
        {
            "time": "Day 4",
            "open": 1080,
            "high": 1090,
            "low": 950,
            "close": 960,
            "volume": 27
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1020
                },
                {
                    "x": 3,
                    "y": 1020
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
    id: 609,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 나스닥 시세가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1220,
            "low": 1180,
            "close": 1190,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 1190,
            "high": 1200,
            "low": 1100,
            "close": 1110,
            "volume": 101
        },
        {
            "time": "Day 3",
            "open": 1110,
            "high": 1230,
            "low": 1100,
            "close": 1220,
            "volume": 122
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1150
                },
                {
                    "x": 2,
                    "y": 1150
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
    id: 635,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 나스닥 시세가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1280,
            "low": 1190,
            "close": 1270,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 1270,
            "high": 1380,
            "low": 1260,
            "close": 1360,
            "volume": 115
        },
        {
            "time": "Day 3",
            "open": 1330,
            "high": 1340,
            "low": 1300,
            "close": 1310,
            "volume": 89
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
    id: 639,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "나스닥 시세가 1,200달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 1,160달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1120,
            "high": 1180,
            "low": 1110,
            "close": 1170,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 1170,
            "high": 1220,
            "low": 1160,
            "close": 1210,
            "volume": 357
        },
        {
            "time": "Day 3",
            "open": 1210,
            "high": 1220,
            "low": 1150,
            "close": 1160,
            "volume": 342
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(1,200달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 642,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 900,
            "close": 920,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 920,
            "high": 940,
            "low": 820,
            "close": 830,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 830,
            "high": 850,
            "low": 750,
            "close": 760,
            "volume": 122
        },
        {
            "time": "Day 4",
            "open": 760,
            "high": 900,
            "low": 750,
            "close": 890,
            "volume": 113
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
                    "x": 3,
                    "y": 860
                },
                {
                    "x": 0,
                    "y": 900
                },
                {
                    "x": 3,
                    "y": 760
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
    id: 661,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "나스닥 시세가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1050,
            "low": 990,
            "close": 1040,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 1040,
            "high": 1090,
            "low": 1030,
            "close": 1080,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 1080,
            "high": 1100,
            "low": 1070,
            "close": 1080,
            "volume": 100
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1090
                },
                {
                    "x": 2,
                    "y": 1090
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
    id: 662,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "나스닥 시세가 장기 횡보하던 박스권 지지선인 2,000달러를 깨고 1,950달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 2,010달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2100,
            "high": 2120,
            "low": 2000,
            "close": 2020,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 2020,
            "high": 2040,
            "low": 1950,
            "close": 2010,
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
                },
                {
                    "x": 1,
                    "y": 2000
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(1,950달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 663,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "나스닥 시세는 2,500달러에서 2,900달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 2300,
            "high": 2600,
            "low": 2280,
            "close": 2550,
            "volume": 82
        },
        {
            "time": "Wave 2",
            "open": 2550,
            "high": 2750,
            "low": 2500,
            "close": 2700,
            "volume": 106
        },
        {
            "time": "Wave 3",
            "open": 2700,
            "high": 2900,
            "low": 2650,
            "close": 2880,
            "volume": 104
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "나스닥 시세는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 664,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 990,
            "close": 1000,
            "volume": 362
        },
        {
            "time": "Day 2",
            "open": 1000,
            "high": 1120,
            "low": 990,
            "close": 1100,
            "volume": 401
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
    id: 665,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "나스닥 지수 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500000,
            "high": 505000,
            "low": 492000,
            "close": 495000,
            "volume": 33
        },
        {
            "time": "Day 2",
            "open": 495000,
            "high": 498000,
            "low": 480000,
            "close": 496000,
            "volume": 20
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 492000
                },
                {
                    "x": 1,
                    "y": 492000
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 나스닥 시세는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 666,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1150,
            "low": 980,
            "close": 1010
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
    id: 707,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "엔비디아 주가가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1176,
            "high": 1212,
            "low": 1164,
            "close": 1200,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 1200,
            "high": 1224,
            "low": 1188,
            "close": 1212,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 1212,
            "high": 1320,
            "low": 1200,
            "close": 1296,
            "volume": 33
        },
        {
            "time": "Day 4",
            "open": 1296,
            "high": 1308,
            "low": 1140,
            "close": 1152,
            "volume": 26
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1224
                },
                {
                    "x": 3,
                    "y": 1224
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
    id: 709,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 엔비디아 주가가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1440,
            "high": 1464,
            "low": 1416,
            "close": 1428,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 1428,
            "high": 1440,
            "low": 1320,
            "close": 1332,
            "volume": 89
        },
        {
            "time": "Day 3",
            "open": 1332,
            "high": 1476,
            "low": 1320,
            "close": 1464,
            "volume": 108
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1380
                },
                {
                    "x": 2,
                    "y": 1380
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
    id: 735,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 엔비디아 주가가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1440,
            "high": 1536,
            "low": 1428,
            "close": 1524,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 1524,
            "high": 1656,
            "low": 1512,
            "close": 1632,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 1596,
            "high": 1608,
            "low": 1560,
            "close": 1572,
            "volume": 108
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
    id: 739,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "엔비디아 주가가 1,440달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 1,392달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1344,
            "high": 1416,
            "low": 1332,
            "close": 1404,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 1404,
            "high": 1464,
            "low": 1392,
            "close": 1452,
            "volume": 391
        },
        {
            "time": "Day 3",
            "open": 1452,
            "high": 1464,
            "low": 1380,
            "close": 1392,
            "volume": 374
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1440
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(1,440달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 742,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1080,
            "close": 1104,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 1104,
            "high": 1128,
            "low": 984,
            "close": 996,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 996,
            "high": 1020,
            "low": 900,
            "close": 912,
            "volume": 115
        },
        {
            "time": "Day 4",
            "open": 912,
            "high": 1080,
            "low": 900,
            "close": 1068,
            "volume": 94
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
                    "x": 3,
                    "y": 1032
                },
                {
                    "x": 0,
                    "y": 1080
                },
                {
                    "x": 3,
                    "y": 912
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
    id: 761,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "엔비디아 주가가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1260,
            "low": 1188,
            "close": 1248,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 1248,
            "high": 1308,
            "low": 1236,
            "close": 1296,
            "volume": 99
        },
        {
            "time": "Day 3",
            "open": 1296,
            "high": 1320,
            "low": 1284,
            "close": 1296,
            "volume": 120
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 1308
                },
                {
                    "x": 2,
                    "y": 1308
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
    id: 762,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "엔비디아 주가가 장기 횡보하던 박스권 지지선인 2,400달러를 깨고 2,340달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 2,412달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2520,
            "high": 2544,
            "low": 2400,
            "close": 2424,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 2424,
            "high": 2448,
            "low": 2340,
            "close": 2412,
            "volume": 118
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
                    "x": 1,
                    "y": 2400
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(2,340달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 763,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "엔비디아 주가는 3,000달러에서 3,480달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 2760,
            "high": 3120,
            "low": 2736,
            "close": 3060,
            "volume": 85
        },
        {
            "time": "Wave 2",
            "open": 3060,
            "high": 3300,
            "low": 3000,
            "close": 3240,
            "volume": 96
        },
        {
            "time": "Wave 3",
            "open": 3240,
            "high": 3480,
            "low": 3180,
            "close": 3456,
            "volume": 115
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "엔비디아 주가는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 764,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1188,
            "close": 1200,
            "volume": 338
        },
        {
            "time": "Day 2",
            "open": 1200,
            "high": 1344,
            "low": 1188,
            "close": 1320,
            "volume": 378
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
    id: 765,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "엔비디아 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 600000,
            "high": 606000,
            "low": 590400,
            "close": 594000,
            "volume": 31
        },
        {
            "time": "Day 2",
            "open": 594000,
            "high": 597600,
            "low": 576000,
            "close": 595200,
            "volume": 25
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 590400
                },
                {
                    "x": 1,
                    "y": 590400
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 엔비디아 주가는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 766,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1380,
            "low": 1176,
            "close": 1212
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
    id: 807,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "리플 시세가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1960,
            "high": 2020,
            "low": 1940,
            "close": 2000,
            "volume": 113
        },
        {
            "time": "Day 2",
            "open": 2000,
            "high": 2040,
            "low": 1980,
            "close": 2020,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 2020,
            "high": 2200,
            "low": 2000,
            "close": 2160,
            "volume": 18
        },
        {
            "time": "Day 4",
            "open": 2160,
            "high": 2180,
            "low": 1900,
            "close": 1920,
            "volume": 16
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2040
                },
                {
                    "x": 3,
                    "y": 2040
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
    id: 809,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 리플 시세가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2400,
            "high": 2440,
            "low": 2360,
            "close": 2380,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 2380,
            "high": 2400,
            "low": 2200,
            "close": 2220,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 2220,
            "high": 2460,
            "low": 2200,
            "close": 2440,
            "volume": 126
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2300
                },
                {
                    "x": 2,
                    "y": 2300
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
    id: 835,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 리플 시세가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2400,
            "high": 2560,
            "low": 2380,
            "close": 2540,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 2540,
            "high": 2760,
            "low": 2520,
            "close": 2720,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 2660,
            "high": 2680,
            "low": 2600,
            "close": 2620,
            "volume": 112
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
    id: 839,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "리플 시세가 2,400달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 2,320달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2240,
            "high": 2360,
            "low": 2220,
            "close": 2340,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 2340,
            "high": 2440,
            "low": 2320,
            "close": 2420,
            "volume": 387
        },
        {
            "time": "Day 3",
            "open": 2420,
            "high": 2440,
            "low": 2300,
            "close": 2320,
            "volume": 341
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(2,400달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 842,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 1800,
            "close": 1840,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 1840,
            "high": 1880,
            "low": 1640,
            "close": 1660,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 1660,
            "high": 1700,
            "low": 1500,
            "close": 1520,
            "volume": 118
        },
        {
            "time": "Day 4",
            "open": 1520,
            "high": 1800,
            "low": 1500,
            "close": 1780,
            "volume": 113
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
                    "x": 3,
                    "y": 1720
                },
                {
                    "x": 0,
                    "y": 1800
                },
                {
                    "x": 3,
                    "y": 1520
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
    id: 861,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "리플 시세가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2100,
            "low": 1980,
            "close": 2080,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 2080,
            "high": 2180,
            "low": 2060,
            "close": 2160,
            "volume": 117
        },
        {
            "time": "Day 3",
            "open": 2160,
            "high": 2200,
            "low": 2140,
            "close": 2160,
            "volume": 98
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2180
                },
                {
                    "x": 2,
                    "y": 2180
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
    id: 862,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "리플 시세가 장기 횡보하던 박스권 지지선인 4,000달러를 깨고 3,900달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 4,020달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4200,
            "high": 4240,
            "low": 4000,
            "close": 4040,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 4040,
            "high": 4080,
            "low": 3900,
            "close": 4020,
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
                },
                {
                    "x": 1,
                    "y": 4000
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(3,900달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 863,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "리플 시세는 5,000달러에서 5,800달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 4600,
            "high": 5200,
            "low": 4560,
            "close": 5100,
            "volume": 110
        },
        {
            "time": "Wave 2",
            "open": 5100,
            "high": 5500,
            "low": 5000,
            "close": 5400,
            "volume": 84
        },
        {
            "time": "Wave 3",
            "open": 5400,
            "high": 5800,
            "low": 5300,
            "close": 5760,
            "volume": 105
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "리플 시세는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 864,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 1980,
            "close": 2000,
            "volume": 348
        },
        {
            "time": "Day 2",
            "open": 2000,
            "high": 2240,
            "low": 1980,
            "close": 2200,
            "volume": 376
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
    id: 865,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "리플 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000000,
            "high": 1010000,
            "low": 984000,
            "close": 990000,
            "volume": 33
        },
        {
            "time": "Day 2",
            "open": 990000,
            "high": 996000,
            "low": 960000,
            "close": 992000,
            "volume": 24
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 984000
                },
                {
                    "x": 1,
                    "y": 984000
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 리플 시세는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 866,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2300,
            "low": 1960,
            "close": 2020
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
    id: 907,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "골드 가격가 저항선 위로 거래량 없이 장대양봉을 뿜어 올렸으나, 다음 날 곧바로 장대음봉으로 밀어붙이며 저항선 아래로 내려왔습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4900,
            "high": 5050,
            "low": 4850,
            "close": 5000,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 5000,
            "high": 5100,
            "low": 4950,
            "close": 5050,
            "volume": 107
        },
        {
            "time": "Day 3",
            "open": 5050,
            "high": 5500,
            "low": 5000,
            "close": 5400,
            "volume": 20
        },
        {
            "time": "Day 4",
            "open": 5400,
            "high": 5450,
            "low": 4750,
            "close": 4800,
            "volume": 26
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 5100
                },
                {
                    "x": 3,
                    "y": 5100
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
    id: 909,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "지지선 아래로 골드 가격가 이탈하여 공매도가 폭증했으나, 이내 거래량이 급증하며 양봉으로 지지선을 회복한 뒤 반등을 시작했습니다. 이 현상의 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6000,
            "high": 6100,
            "low": 5900,
            "close": 5950,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 5950,
            "high": 6000,
            "low": 5500,
            "close": 5550,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 5550,
            "high": 6150,
            "low": 5500,
            "close": 6100,
            "volume": 95
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 5750
                },
                {
                    "x": 2,
                    "y": 5750
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
    id: 935,
    category: "캔들/가격행동",
    categoryKey: "candle",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "강한 급등세를 지속하던 골드 가격가 최고점에서 큰 거래량을 터뜨리며 장대양봉을 만들었습니다. 그러나 다음 날, 전일 양봉 몸통의 한가운데 범위 안에서 움직이며 시가와 종가가 모두 갇혀버리는 짧은 음봉인 '하락 잉태형(Bearish Harami)' 캔들이 형성되었습니다. 단기 스윙 트레이더로서 당신의 포지션 리스크 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6000,
            "high": 6400,
            "low": 5950,
            "close": 6350,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 6350,
            "high": 6900,
            "low": 6300,
            "close": 6800,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 6650,
            "high": 6700,
            "low": 6500,
            "close": 6550,
            "volume": 106
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
    id: 939,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "골드 가격가 6,000달러의 장기 저항벽을 거래량이 거의 실리지 않은 얇은 양봉으로 상방으로 살짝 뚫었으나, 바로 다음 날 직전 양봉 몸통을 통째로 덮어버리는 대량 거래량의 장대음봉이 출현하며 5,800달러로 곤두박질쳤습니다. 매수 포지션을 추격 진입했던 당신의 올바른 조치는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5600,
            "high": 5900,
            "low": 5550,
            "close": 5850,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 5850,
            "high": 6100,
            "low": 5800,
            "close": 6050,
            "volume": 366
        },
        {
            "time": "Day 3",
            "open": 6050,
            "high": 6100,
            "low": 5750,
            "close": 5800,
            "volume": 392
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 6000
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
    explanation: "거래량 없는 돌파 직후에 거래량 실린 강한 음봉이 기존 돌파선(6,000달러) 아래로 재진입하여 마감하는 현상은 전형적인 불 트랩(Bull Trap/가짜 돌파) 함정입니다. 돌파 당시 샀던 매수자들의 패닉 셀이 출현하며 하락 가속화가 나오기 쉬우므로 즉시 손절하여 물량을 털어내야 생존할 수 있습니다."
  },
  {
    id: 942,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "고점과 저점이 연속으로 낮아지는 명확한 하락 평행 채널 내에서 하락 압력을 받아 숏(매도) 포지션을 잡고 수익 중이었습니다. 그런데 당일 캔들이 대량의 거래량과 함께 장대양봉을 그리며 채널 상단 저항선 위로 종가 안착(상방 돌파)했습니다. 숏 포지션을 쥔 당신의 결단은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 4500,
            "close": 4600,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 4600,
            "high": 4700,
            "low": 4100,
            "close": 4150,
            "volume": 121
        },
        {
            "time": "Day 3",
            "open": 4150,
            "high": 4250,
            "low": 3750,
            "close": 3800,
            "volume": 110
        },
        {
            "time": "Day 4",
            "open": 3800,
            "high": 4500,
            "low": 3750,
            "close": 4450,
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
                    "x": 3,
                    "y": 4300
                },
                {
                    "x": 0,
                    "y": 4500
                },
                {
                    "x": 3,
                    "y": 3800
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
    id: 961,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "골드 가격가 수평 저항선 부근까지 급상승했으나 캔들 몸통(Spread)이 지극히 좁아진 도지 형태로 마감하였고, 거래량은 이전 5일 평균 대비 3배 이상 폭증했습니다. VSA(Volume Spread Analysis) 관점에서 가장 타당한 차트 분석은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5250,
            "low": 4950,
            "close": 5200,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 5200,
            "high": 5450,
            "low": 5150,
            "close": 5400,
            "volume": 89
        },
        {
            "time": "Day 3",
            "open": 5400,
            "high": 5500,
            "low": 5350,
            "close": 5400,
            "volume": 107
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 5450
                },
                {
                    "x": 2,
                    "y": 5450
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
    id: 962,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "골드 가격가 장기 횡보하던 박스권 지지선인 10,000달러를 깨고 9,750달러까지 하락 투매가 발생했으나, 종가 마감 직전 거래량이 크게 실린 긴 아래꼬리를 그리며 다시 10,050달러 위로 복귀 안착했습니다. 이 스톱 헌팅 유동성 현상에서의 실전 트레이더의 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 10500,
            "high": 10600,
            "low": 10000,
            "close": 10100,
            "volume": 107
        },
        {
            "time": "Day 2",
            "open": 10100,
            "high": 10200,
            "low": 9750,
            "close": 10050,
            "volume": 101
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 10000
                },
                {
                    "x": 1,
                    "y": 10000
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
    explanation: "지지선 아래에 걸려 있던 개인들의 손절 주문(Sell Stop)을 강제로 청산(Liquidity Sweep)시킨 뒤, 세력이 물량을 헐값에 다 받아 삼켜 종가를 지지선 위로 신속하게 복귀시킨 휩소(베어 트랩) 패턴입니다. 아래꼬리 극점(9,750달러)에 아주 좁은 손절 라인을 설정할 수 있어, 기대 손익비가 극대화되는 고확률 상승 반전 매수 타점입니다."
  },
  {
    id: 963,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "골드 가격는 12,500달러에서 14,500달러까지 계속 고점을 높이며 상승 추세를 이어가고 있습니다. 그러나 각 상승 파동마다 터지는 거래량은 전고점 돌파 시점 대비 눈에 띄게 하향 곡선을 그리며 감소하고 있습니다. VSA 기법에 따른 합리적인 진단은?",
    chartData: [
        {
            "time": "Wave 1",
            "open": 11500,
            "high": 13000,
            "low": 11400,
            "close": 12750,
            "volume": 101
        },
        {
            "time": "Wave 2",
            "open": 12750,
            "high": 13750,
            "low": 12500,
            "close": 13500,
            "volume": 109
        },
        {
            "time": "Wave 3",
            "open": 13500,
            "high": 14500,
            "low": 13250,
            "close": 14400,
            "volume": 110
        }
    ],
    options: [
        "가격 상승으로 인한 매수 지속 강화 초강세",
        "매도 물량 고갈에 따른 무중력 안심 홀딩",
        "신규 자금 유입 둔화 거래량 다이버전스로 분할 익절",
        "지표 조작으로 판단하여 매매 중단 및 차트 종료"
    ],
    correctIndex: 2,
    explanation: "골드 가격는 상승하여 신고점을 갱신하지만 파동별 거래량이 지속 감소하는 흐름은 '거래량 다이버전스'로 상승 모멘텀의 내부 엔진이 식어감을 경고합니다. 조만간 가벼운 매도 포격에도 대규모의 차익 실현 폭락 조정이 발생할 수 있는 잠재적 폭락 국면이므로 물량을 덜어내고 현금을 확보해야 합니다."
  },
  {
    id: 964,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 3,
    theoryRef: "05_volume_liquidity.md",
    question: "가격이 이전 고점 저항선을 뚫고 강하게 솟구치며 장대양봉을 만들었습니다. 이때 가짜 이탈(Whipsaw / Bull Trap)이 아닌 진성 돌파(True Breakout)로 판정할 수 있는 가장 신뢰도 높은 거래량 기준은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 4950,
            "close": 5000,
            "volume": 370
        },
        {
            "time": "Day 2",
            "open": 5000,
            "high": 5600,
            "low": 4950,
            "close": 5500,
            "volume": 354
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
    id: 965,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 5,
    theoryRef: "05_volume_liquidity.md",
    question: "금 선물 차트에서 중요 지지선 직전 저점 아래에 엄청난 규모의 롱 포지션 청산 및 매도 손절 주문이 쌓여 있는 유동성 풀(Liquidity Pool) 구간이 감지되었습니다. 세력이 이 구간을 공략할 때 나타날 캔들의 전형적인 무빙 패턴은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2500000,
            "high": 2525000,
            "low": 2460000,
            "close": 2475000,
            "volume": 25
        },
        {
            "time": "Day 2",
            "open": 2475000,
            "high": 2490000,
            "low": 2400000,
            "close": 2480000,
            "volume": 20
        }
    ],
    drawings: [
        {
            "type": "horizontal-line",
            "points": [
                {
                    "x": 0,
                    "y": 2460000
                },
                {
                    "x": 1,
                    "y": 2460000
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
    explanation: "기관 세력(스마트 머니)은 대량 포지션을 구축하기 위해 개인의 손절 주문(Sell Stop)을 의도적으로 터트려 매도 유동성을 유도한 후 이를 다 매수합니다. 이로 인해 골드 가격는 지지선 아래로 일시 급락 후(스톱 헌팅), 아래꼬리를 매우 길게 달며 지선 안쪽으로 급반등 마감하게 됩니다. 이것이 유동성 스윕(Liquidity Sweep)의 정석 패턴입니다."
  },
  {
    id: 966,
    category: "거래량/유동성",
    categoryKey: "volume",
    difficulty: 4,
    theoryRef: "05_volume_liquidity.md",
    question: "상승 추세 도중 전고점 저항선 부근에서 위꼬리가 아주 긴 캔들이 터졌고, 거래량은 최근 보름 중 최고 수치로 솟구쳤습니다. VSA 관점에서 이 상승 거절(Upside Rejection) 현상에 대한 올바른 대처는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5750,
            "low": 4900,
            "close": 5050
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
];

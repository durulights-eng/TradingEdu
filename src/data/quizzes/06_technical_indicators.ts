import type { QuizItem } from './types';

export const quizzes_technical_indicators: QuizItem[] = [
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
            "close": 100,
            "volume": 96
        },
        {
            "time": "D-3",
            "open": 100,
            "high": 104,
            "low": 96,
            "close": 98,
            "volume": 94
        },
        {
            "time": "D-2",
            "open": 98,
            "high": 101,
            "low": 92,
            "close": 94,
            "volume": 91
        },
        {
            "time": "D-1",
            "open": 94,
            "high": 97,
            "low": 93,
            "close": 96,
            "volume": 118
        },
        {
            "time": "Today",
            "open": 96,
            "high": 99,
            "low": 95,
            "close": 98,
            "volume": 115
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 주가 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
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
            "close": 118,
            "volume": 92
        },
        {
            "time": "Day 2",
            "open": 118,
            "high": 122,
            "low": 115,
            "close": 120,
            "volume": 94
        },
        {
            "time": "Day 3",
            "open": 120,
            "high": 135,
            "low": 119,
            "close": 133,
            "volume": 116
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
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
            "close": 99,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 99,
            "high": 104,
            "low": 99,
            "close": 103,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 103,
            "high": 110,
            "low": 103,
            "close": 109,
            "volume": 102
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
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
            "close": 100,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 100,
            "low": 99,
            "close": 99,
            "volume": 104
        },
        {
            "time": "Day 3",
            "open": 99,
            "high": 100,
            "low": 99,
            "close": 100,
            "volume": 93
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 주가가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "주가가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
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
            "close": 105,
            "volume": 82
        },
        {
            "time": "Day 2",
            "open": 105,
            "high": 107,
            "low": 98,
            "close": 100,
            "volume": 90
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 98달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "주가의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(98달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
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
            "close": 91,
            "volume": 91
        },
        {
            "time": "Hour 2",
            "open": 91,
            "high": 92,
            "low": 80,
            "close": 82,
            "volume": 92
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
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
            "close": 200,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 200,
            "high": 222,
            "low": 198,
            "close": 220,
            "volume": 113
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
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
            "close": 100,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 100,
            "high": 101,
            "low": 95,
            "close": 96,
            "volume": 92
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
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
            "close": 101,
            "volume": 112
        },
        {
            "time": "Week 2",
            "open": 101,
            "high": 102,
            "low": 99,
            "close": 100,
            "volume": 102
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
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
            "close": 91,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 91,
            "high": 96,
            "low": 95,
            "close": 95,
            "volume": 119
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 95달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 121,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 165,
            "high": 168,
            "low": 147,
            "close": 150,
            "volume": 81
        },
        {
            "time": "D-3",
            "open": 150,
            "high": 156,
            "low": 144,
            "close": 147,
            "volume": 90
        },
        {
            "time": "D-2",
            "open": 147,
            "high": 151.5,
            "low": 138,
            "close": 141,
            "volume": 125
        },
        {
            "time": "D-1",
            "open": 141,
            "high": 145.5,
            "low": 139.5,
            "close": 144,
            "volume": 94
        },
        {
            "time": "Today",
            "open": 144,
            "high": 148.5,
            "low": 142.5,
            "close": 147,
            "volume": 125
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 코인 가격 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "코인 가격의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 122,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 180,
            "low": 148.5,
            "close": 177,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 177,
            "high": 183,
            "low": 172.5,
            "close": 180,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 180,
            "high": 202.5,
            "low": 178.5,
            "close": 199.5,
            "volume": 116
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "코인 가격는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 123,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 147,
            "close": 148.5,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 148.5,
            "high": 156,
            "low": 148.5,
            "close": 154.5,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 154.5,
            "high": 165,
            "low": 154.5,
            "close": 163.5,
            "volume": 95
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 125,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 151.5,
            "low": 148.5,
            "close": 150,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 150,
            "high": 150,
            "low": 148.5,
            "close": 148.5,
            "volume": 99
        },
        {
            "time": "Day 3",
            "open": 148.5,
            "high": 150,
            "low": 148.5,
            "close": 150,
            "volume": 100
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 코인 가격가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "코인 가격가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 151,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(150달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 135,
            "high": 165,
            "low": 132,
            "close": 157.5,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 157.5,
            "high": 160.5,
            "low": 147,
            "close": 150,
            "volume": 97
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 147달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "코인 가격의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(147달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 153,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 코인 가격가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 150,
            "high": 153,
            "low": 135,
            "close": 136.5,
            "volume": 86
        },
        {
            "time": "Hour 2",
            "open": 136.5,
            "high": 138,
            "low": 120,
            "close": 123,
            "volume": 114
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 154,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격는 300달러 저항대를 뚫고 330달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 270,
            "high": 307.5,
            "low": 268.5,
            "close": 300,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 300,
            "high": 333,
            "low": 297,
            "close": 330,
            "volume": 123
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "코인 가격는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 155,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 157.5,
            "high": 159,
            "low": 148.5,
            "close": 150,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 150,
            "high": 151.5,
            "low": 142.5,
            "close": 144,
            "volume": 84
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 167,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 150,
            "high": 154.5,
            "low": 145.5,
            "close": 151.5,
            "volume": 80
        },
        {
            "time": "Week 2",
            "open": 151.5,
            "high": 153,
            "low": 148.5,
            "close": 150,
            "volume": 109
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 168,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "코인 가격는 HL(Higher Low)을 형성하며 이전 직전 저점(135달러)보다 높은 저점(142.50달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 153,
            "low": 135,
            "close": 136.5,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 136.5,
            "high": 144,
            "low": 142.5,
            "close": 142.5,
            "volume": 113
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 142.50달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 169,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 221,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "시세는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 220,
            "high": 224,
            "low": 196,
            "close": 200,
            "volume": 95
        },
        {
            "time": "D-3",
            "open": 200,
            "high": 208,
            "low": 192,
            "close": 196,
            "volume": 95
        },
        {
            "time": "D-2",
            "open": 196,
            "high": 202,
            "low": 184,
            "close": 188,
            "volume": 123
        },
        {
            "time": "D-1",
            "open": 188,
            "high": 194,
            "low": 186,
            "close": 192,
            "volume": 113
        },
        {
            "time": "Today",
            "open": 192,
            "high": 198,
            "low": 190,
            "close": 196,
            "volume": 99
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 시세 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "시세의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 222,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "시세는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 240,
            "low": 198,
            "close": 236,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 236,
            "high": 244,
            "low": 230,
            "close": 240,
            "volume": 95
        },
        {
            "time": "Day 3",
            "open": 240,
            "high": 270,
            "low": 238,
            "close": 266,
            "volume": 115
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "시세는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 223,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 196,
            "close": 198,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 198,
            "high": 208,
            "low": 198,
            "close": 206,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 206,
            "high": 220,
            "low": 206,
            "close": 218,
            "volume": 98
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 225,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "시세의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 202,
            "low": 198,
            "close": 200,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 200,
            "high": 200,
            "low": 198,
            "close": 198,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 198,
            "high": 200,
            "low": 198,
            "close": 200,
            "volume": 111
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 시세가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "시세가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 251,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(200달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 180,
            "high": 220,
            "low": 176,
            "close": 210,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 210,
            "high": 214,
            "low": 196,
            "close": 200,
            "volume": 98
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 196달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "시세의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(196달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 253,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 시세가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 200,
            "high": 204,
            "low": 180,
            "close": 182,
            "volume": 117
        },
        {
            "time": "Hour 2",
            "open": 182,
            "high": 184,
            "low": 160,
            "close": 164,
            "volume": 90
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 254,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "시세는 400달러 저항대를 뚫고 440달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 360,
            "high": 410,
            "low": 358,
            "close": 400,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 400,
            "high": 444,
            "low": 396,
            "close": 440,
            "volume": 86
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "시세는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 255,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "시세가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 210,
            "high": 212,
            "low": 198,
            "close": 200,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 200,
            "high": 202,
            "low": 190,
            "close": 192,
            "volume": 94
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 267,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "시세가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 200,
            "high": 206,
            "low": 194,
            "close": 202,
            "volume": 97
        },
        {
            "time": "Week 2",
            "open": 202,
            "high": 204,
            "low": 198,
            "close": 200,
            "volume": 107
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 268,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "시세는 HL(Higher Low)을 형성하며 이전 직전 저점(180달러)보다 높은 저점(190달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 204,
            "low": 180,
            "close": 182,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 182,
            "high": 192,
            "low": 190,
            "close": 190,
            "volume": 113
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 190달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 269,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 321,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 330,
            "high": 336,
            "low": 294,
            "close": 300,
            "volume": 93
        },
        {
            "time": "D-3",
            "open": 300,
            "high": 312,
            "low": 288,
            "close": 294,
            "volume": 116
        },
        {
            "time": "D-2",
            "open": 294,
            "high": 303,
            "low": 276,
            "close": 282,
            "volume": 108
        },
        {
            "time": "D-1",
            "open": 282,
            "high": 291,
            "low": 279,
            "close": 288,
            "volume": 101
        },
        {
            "time": "Today",
            "open": 288,
            "high": 297,
            "low": 285,
            "close": 294,
            "volume": 120
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 삼성전자 주가 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "삼성전자 주가의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 322,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 360,
            "low": 297,
            "close": 354,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 354,
            "high": 366,
            "low": 345,
            "close": 360,
            "volume": 116
        },
        {
            "time": "Day 3",
            "open": 360,
            "high": 405,
            "low": 357,
            "close": 399,
            "volume": 88
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "삼성전자 주가는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 323,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 294,
            "close": 297,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 297,
            "high": 312,
            "low": 297,
            "close": 309,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 309,
            "high": 330,
            "low": 309,
            "close": 327,
            "volume": 125
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 325,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 303,
            "low": 297,
            "close": 300,
            "volume": 104
        },
        {
            "time": "Day 2",
            "open": 300,
            "high": 300,
            "low": 297,
            "close": 297,
            "volume": 86
        },
        {
            "time": "Day 3",
            "open": 297,
            "high": 300,
            "low": 297,
            "close": 300,
            "volume": 116
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 삼성전자 주가가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "삼성전자 주가가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 351,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(300달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 270,
            "high": 330,
            "low": 264,
            "close": 315,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 315,
            "high": 321,
            "low": 294,
            "close": 300,
            "volume": 85
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 294달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "삼성전자 주가의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(294달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 353,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 삼성전자 주가가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 300,
            "high": 306,
            "low": 270,
            "close": 273,
            "volume": 93
        },
        {
            "time": "Hour 2",
            "open": 273,
            "high": 276,
            "low": 240,
            "close": 246,
            "volume": 116
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 354,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가는 600달러 저항대를 뚫고 660달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 540,
            "high": 615,
            "low": 537,
            "close": 600,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 600,
            "high": 666,
            "low": 594,
            "close": 660,
            "volume": 119
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "삼성전자 주가는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 355,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 315,
            "high": 318,
            "low": 297,
            "close": 300,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 300,
            "high": 303,
            "low": 285,
            "close": 288,
            "volume": 112
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 367,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 300,
            "high": 309,
            "low": 291,
            "close": 303,
            "volume": 99
        },
        {
            "time": "Week 2",
            "open": 303,
            "high": 306,
            "low": 297,
            "close": 300,
            "volume": 119
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 368,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "삼성전자 주가는 HL(Higher Low)을 형성하며 이전 직전 저점(270달러)보다 높은 저점(285달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 306,
            "low": 270,
            "close": 273,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 273,
            "high": 288,
            "low": 285,
            "close": 285,
            "volume": 86
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 285달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 369,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 421,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 550,
            "high": 560,
            "low": 490,
            "close": 500,
            "volume": 103
        },
        {
            "time": "D-3",
            "open": 500,
            "high": 520,
            "low": 480,
            "close": 490,
            "volume": 110
        },
        {
            "time": "D-2",
            "open": 490,
            "high": 505,
            "low": 460,
            "close": 470,
            "volume": 116
        },
        {
            "time": "D-1",
            "open": 470,
            "high": 485,
            "low": 465,
            "close": 480,
            "volume": 106
        },
        {
            "time": "Today",
            "open": 480,
            "high": 495,
            "low": 475,
            "close": 490,
            "volume": 100
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 테슬라 주가 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "테슬라 주가의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 422,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 600,
            "low": 495,
            "close": 590,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 590,
            "high": 610,
            "low": 575,
            "close": 600,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 600,
            "high": 675,
            "low": 595,
            "close": 665,
            "volume": 116
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "테슬라 주가는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 423,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 490,
            "close": 495,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 495,
            "high": 520,
            "low": 495,
            "close": 515,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 515,
            "high": 550,
            "low": 515,
            "close": 545,
            "volume": 104
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 425,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 505,
            "low": 495,
            "close": 500,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 500,
            "high": 500,
            "low": 495,
            "close": 495,
            "volume": 100
        },
        {
            "time": "Day 3",
            "open": 495,
            "high": 500,
            "low": 495,
            "close": 500,
            "volume": 111
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 테슬라 주가가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "테슬라 주가가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 451,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(500달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 450,
            "high": 550,
            "low": 440,
            "close": 525,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 525,
            "high": 535,
            "low": 490,
            "close": 500,
            "volume": 96
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 490달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "테슬라 주가의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(490달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 453,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 테슬라 주가가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 500,
            "high": 510,
            "low": 450,
            "close": 455,
            "volume": 109
        },
        {
            "time": "Hour 2",
            "open": 455,
            "high": 460,
            "low": 400,
            "close": 410,
            "volume": 117
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 454,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가는 1,000달러 저항대를 뚫고 1,100달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 900,
            "high": 1025,
            "low": 895,
            "close": 1000,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 1000,
            "high": 1110,
            "low": 990,
            "close": 1100,
            "volume": 115
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "테슬라 주가는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 455,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 525,
            "high": 530,
            "low": 495,
            "close": 500,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 500,
            "high": 505,
            "low": 475,
            "close": 480,
            "volume": 103
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 467,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 500,
            "high": 515,
            "low": 485,
            "close": 505,
            "volume": 97
        },
        {
            "time": "Week 2",
            "open": 505,
            "high": 510,
            "low": 495,
            "close": 500,
            "volume": 121
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 468,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "테슬라 주가는 HL(Higher Low)을 형성하며 이전 직전 저점(450달러)보다 높은 저점(475달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 510,
            "low": 450,
            "close": 455,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 455,
            "high": 480,
            "low": 475,
            "close": 475,
            "volume": 104
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 475달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 469,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 521,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 880,
            "high": 896,
            "low": 784,
            "close": 800,
            "volume": 95
        },
        {
            "time": "D-3",
            "open": 800,
            "high": 832,
            "low": 768,
            "close": 784,
            "volume": 109
        },
        {
            "time": "D-2",
            "open": 784,
            "high": 808,
            "low": 736,
            "close": 752,
            "volume": 97
        },
        {
            "time": "D-1",
            "open": 752,
            "high": 776,
            "low": 744,
            "close": 768,
            "volume": 105
        },
        {
            "time": "Today",
            "open": 768,
            "high": 792,
            "low": 760,
            "close": 784,
            "volume": 122
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 애플 주가 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "애플 주가의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 522,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 960,
            "low": 792,
            "close": 944,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 944,
            "high": 976,
            "low": 920,
            "close": 960,
            "volume": 113
        },
        {
            "time": "Day 3",
            "open": 960,
            "high": 1080,
            "low": 952,
            "close": 1064,
            "volume": 89
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "애플 주가는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 523,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 784,
            "close": 792,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 792,
            "high": 832,
            "low": 792,
            "close": 824,
            "volume": 87
        },
        {
            "time": "Day 3",
            "open": 824,
            "high": 880,
            "low": 824,
            "close": 872,
            "volume": 107
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 525,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 808,
            "low": 792,
            "close": 800,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 800,
            "high": 800,
            "low": 792,
            "close": 792,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 792,
            "high": 800,
            "low": 792,
            "close": 800,
            "volume": 96
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 애플 주가가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "애플 주가가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 551,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(800달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 720,
            "high": 880,
            "low": 704,
            "close": 840,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 840,
            "high": 856,
            "low": 784,
            "close": 800,
            "volume": 98
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 784달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "애플 주가의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(784달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 553,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 애플 주가가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 800,
            "high": 816,
            "low": 720,
            "close": 728,
            "volume": 81
        },
        {
            "time": "Hour 2",
            "open": 728,
            "high": 736,
            "low": 640,
            "close": 656,
            "volume": 93
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 554,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가는 1,600달러 저항대를 뚫고 1,760달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1440,
            "high": 1640,
            "low": 1432,
            "close": 1600,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 1600,
            "high": 1776,
            "low": 1584,
            "close": 1760,
            "volume": 90
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "애플 주가는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 555,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 840,
            "high": 848,
            "low": 792,
            "close": 800,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 800,
            "high": 808,
            "low": 760,
            "close": 768,
            "volume": 123
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 567,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 800,
            "high": 824,
            "low": 776,
            "close": 808,
            "volume": 110
        },
        {
            "time": "Week 2",
            "open": 808,
            "high": 816,
            "low": 792,
            "close": 800,
            "volume": 87
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 568,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "애플 주가는 HL(Higher Low)을 형성하며 이전 직전 저점(720달러)보다 높은 저점(760달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 816,
            "low": 720,
            "close": 728,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 728,
            "high": 768,
            "low": 760,
            "close": 760,
            "volume": 95
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 760달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 569,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 621,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 1100,
            "high": 1120,
            "low": 980,
            "close": 1000,
            "volume": 103
        },
        {
            "time": "D-3",
            "open": 1000,
            "high": 1040,
            "low": 960,
            "close": 980,
            "volume": 102
        },
        {
            "time": "D-2",
            "open": 980,
            "high": 1010,
            "low": 920,
            "close": 940,
            "volume": 118
        },
        {
            "time": "D-1",
            "open": 940,
            "high": 970,
            "low": 930,
            "close": 960,
            "volume": 124
        },
        {
            "time": "Today",
            "open": 960,
            "high": 990,
            "low": 950,
            "close": 980,
            "volume": 112
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 나스닥 시세 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "나스닥 시세의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 622,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1200,
            "low": 990,
            "close": 1180,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 1180,
            "high": 1220,
            "low": 1150,
            "close": 1200,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 1200,
            "high": 1350,
            "low": 1190,
            "close": 1330,
            "volume": 125
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "나스닥 시세는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 623,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 980,
            "close": 990,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 990,
            "high": 1040,
            "low": 990,
            "close": 1030,
            "volume": 122
        },
        {
            "time": "Day 3",
            "open": 1030,
            "high": 1100,
            "low": 1030,
            "close": 1090,
            "volume": 94
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 625,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1010,
            "low": 990,
            "close": 1000,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 1000,
            "high": 1000,
            "low": 990,
            "close": 990,
            "volume": 84
        },
        {
            "time": "Day 3",
            "open": 990,
            "high": 1000,
            "low": 990,
            "close": 1000,
            "volume": 115
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 나스닥 시세가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "나스닥 시세가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 651,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(1,000달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 900,
            "high": 1100,
            "low": 880,
            "close": 1050,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 1050,
            "high": 1070,
            "low": 980,
            "close": 1000,
            "volume": 94
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 980달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "나스닥 시세의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(980달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 653,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 나스닥 시세가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 1000,
            "high": 1020,
            "low": 900,
            "close": 910,
            "volume": 88
        },
        {
            "time": "Hour 2",
            "open": 910,
            "high": 920,
            "low": 800,
            "close": 820,
            "volume": 89
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 654,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세는 2,000달러 저항대를 뚫고 2,200달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1800,
            "high": 2050,
            "low": 1790,
            "close": 2000,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 2000,
            "high": 2220,
            "low": 1980,
            "close": 2200,
            "volume": 92
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "나스닥 시세는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 655,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1050,
            "high": 1060,
            "low": 990,
            "close": 1000,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 1000,
            "high": 1010,
            "low": 950,
            "close": 960,
            "volume": 115
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 667,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 1000,
            "high": 1030,
            "low": 970,
            "close": 1010,
            "volume": 114
        },
        {
            "time": "Week 2",
            "open": 1010,
            "high": 1020,
            "low": 990,
            "close": 1000,
            "volume": 110
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 668,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "나스닥 시세는 HL(Higher Low)을 형성하며 이전 직전 저점(900달러)보다 높은 저점(950달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1020,
            "low": 900,
            "close": 910,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 910,
            "high": 960,
            "low": 950,
            "close": 950,
            "volume": 121
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 950달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 669,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 721,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 1320,
            "high": 1344,
            "low": 1176,
            "close": 1200,
            "volume": 116
        },
        {
            "time": "D-3",
            "open": 1200,
            "high": 1248,
            "low": 1152,
            "close": 1176,
            "volume": 116
        },
        {
            "time": "D-2",
            "open": 1176,
            "high": 1212,
            "low": 1104,
            "close": 1128,
            "volume": 112
        },
        {
            "time": "D-1",
            "open": 1128,
            "high": 1164,
            "low": 1116,
            "close": 1152,
            "volume": 121
        },
        {
            "time": "Today",
            "open": 1152,
            "high": 1188,
            "low": 1140,
            "close": 1176,
            "volume": 104
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 엔비디아 주가 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "엔비디아 주가의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 722,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1440,
            "low": 1188,
            "close": 1416,
            "volume": 111
        },
        {
            "time": "Day 2",
            "open": 1416,
            "high": 1464,
            "low": 1380,
            "close": 1440,
            "volume": 105
        },
        {
            "time": "Day 3",
            "open": 1440,
            "high": 1620,
            "low": 1428,
            "close": 1596,
            "volume": 123
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "엔비디아 주가는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 723,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1176,
            "close": 1188,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 1188,
            "high": 1248,
            "low": 1188,
            "close": 1236,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 1236,
            "high": 1320,
            "low": 1236,
            "close": 1308,
            "volume": 122
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 725,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1212,
            "low": 1188,
            "close": 1200,
            "volume": 105
        },
        {
            "time": "Day 2",
            "open": 1200,
            "high": 1200,
            "low": 1188,
            "close": 1188,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 1188,
            "high": 1200,
            "low": 1188,
            "close": 1200,
            "volume": 102
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 엔비디아 주가가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "엔비디아 주가가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 751,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(1,200달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1080,
            "high": 1320,
            "low": 1056,
            "close": 1260,
            "volume": 83
        },
        {
            "time": "Day 2",
            "open": 1260,
            "high": 1284,
            "low": 1176,
            "close": 1200,
            "volume": 102
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 1,176달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "엔비디아 주가의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(1,176달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 753,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 엔비디아 주가가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 1200,
            "high": 1224,
            "low": 1080,
            "close": 1092,
            "volume": 97
        },
        {
            "time": "Hour 2",
            "open": 1092,
            "high": 1104,
            "low": 960,
            "close": 984,
            "volume": 97
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 754,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가는 2,400달러 저항대를 뚫고 2,640달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2160,
            "high": 2460,
            "low": 2148,
            "close": 2400,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 2400,
            "high": 2664,
            "low": 2376,
            "close": 2640,
            "volume": 116
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "엔비디아 주가는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 755,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1260,
            "high": 1272,
            "low": 1188,
            "close": 1200,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 1200,
            "high": 1212,
            "low": 1140,
            "close": 1152,
            "volume": 122
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 767,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 1200,
            "high": 1236,
            "low": 1164,
            "close": 1212,
            "volume": 99
        },
        {
            "time": "Week 2",
            "open": 1212,
            "high": 1224,
            "low": 1188,
            "close": 1200,
            "volume": 99
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 768,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "엔비디아 주가는 HL(Higher Low)을 형성하며 이전 직전 저점(1,080달러)보다 높은 저점(1,140달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1224,
            "low": 1080,
            "close": 1092,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 1092,
            "high": 1152,
            "low": 1140,
            "close": 1140,
            "volume": 118
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 1,140달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 769,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 821,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 2200,
            "high": 2240,
            "low": 1960,
            "close": 2000,
            "volume": 87
        },
        {
            "time": "D-3",
            "open": 2000,
            "high": 2080,
            "low": 1920,
            "close": 1960,
            "volume": 106
        },
        {
            "time": "D-2",
            "open": 1960,
            "high": 2020,
            "low": 1840,
            "close": 1880,
            "volume": 98
        },
        {
            "time": "D-1",
            "open": 1880,
            "high": 1940,
            "low": 1860,
            "close": 1920,
            "volume": 128
        },
        {
            "time": "Today",
            "open": 1920,
            "high": 1980,
            "low": 1900,
            "close": 1960,
            "volume": 116
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 리플 시세 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "리플 시세의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 822,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2400,
            "low": 1980,
            "close": 2360,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 2360,
            "high": 2440,
            "low": 2300,
            "close": 2400,
            "volume": 112
        },
        {
            "time": "Day 3",
            "open": 2400,
            "high": 2700,
            "low": 2380,
            "close": 2660,
            "volume": 125
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "리플 시세는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 823,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 1960,
            "close": 1980,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 1980,
            "high": 2080,
            "low": 1980,
            "close": 2060,
            "volume": 86
        },
        {
            "time": "Day 3",
            "open": 2060,
            "high": 2200,
            "low": 2060,
            "close": 2180,
            "volume": 101
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 825,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2020,
            "low": 1980,
            "close": 2000,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 2000,
            "high": 2000,
            "low": 1980,
            "close": 1980,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 1980,
            "high": 2000,
            "low": 1980,
            "close": 2000,
            "volume": 121
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 리플 시세가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "리플 시세가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 851,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(2,000달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1800,
            "high": 2200,
            "low": 1760,
            "close": 2100,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 2100,
            "high": 2140,
            "low": 1960,
            "close": 2000,
            "volume": 119
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 1,960달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "리플 시세의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(1,960달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 853,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 리플 시세가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 2000,
            "high": 2040,
            "low": 1800,
            "close": 1820,
            "volume": 91
        },
        {
            "time": "Hour 2",
            "open": 1820,
            "high": 1840,
            "low": 1600,
            "close": 1640,
            "volume": 120
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 854,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세는 4,000달러 저항대를 뚫고 4,400달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 3600,
            "high": 4100,
            "low": 3580,
            "close": 4000,
            "volume": 101
        },
        {
            "time": "Day 2",
            "open": 4000,
            "high": 4440,
            "low": 3960,
            "close": 4400,
            "volume": 119
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "리플 시세는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 855,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2100,
            "high": 2120,
            "low": 1980,
            "close": 2000,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 2000,
            "high": 2020,
            "low": 1900,
            "close": 1920,
            "volume": 106
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 867,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 2000,
            "high": 2060,
            "low": 1940,
            "close": 2020,
            "volume": 107
        },
        {
            "time": "Week 2",
            "open": 2020,
            "high": 2040,
            "low": 1980,
            "close": 2000,
            "volume": 84
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 868,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "리플 시세는 HL(Higher Low)을 형성하며 이전 직전 저점(1,800달러)보다 높은 저점(1,900달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2040,
            "low": 1800,
            "close": 1820,
            "volume": 114
        },
        {
            "time": "Day 2",
            "open": 1820,
            "high": 1920,
            "low": 1900,
            "close": 1900,
            "volume": 91
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 1,900달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 869,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
  {
    id: 921,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격는 매일 하락하여 신저가를 갱신하고 있으나, RSI 보조지표의 저점은 점점 높아지는 현상을 발견했습니다. 올바른 용어와 매매 대응법은?",
    chartData: [
        {
            "time": "D-4",
            "open": 5500,
            "high": 5600,
            "low": 4900,
            "close": 5000,
            "volume": 92
        },
        {
            "time": "D-3",
            "open": 5000,
            "high": 5200,
            "low": 4800,
            "close": 4900,
            "volume": 121
        },
        {
            "time": "D-2",
            "open": 4900,
            "high": 5050,
            "low": 4600,
            "close": 4700,
            "volume": 103
        },
        {
            "time": "D-1",
            "open": 4700,
            "high": 4850,
            "low": 4650,
            "close": 4800,
            "volume": 118
        },
        {
            "time": "Today",
            "open": 4800,
            "high": 4950,
            "low": 4750,
            "close": 4900,
            "volume": 130
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 공매도 포지션 구축",
        "상승 다이버전스 (Bullish Divergence) - 골드 가격 하락 관성이 둔화되고 매수 압력이 쌓여 반등이 임박했다는 강한 매수 시그널",
        "데드 크로스 (Death Cross) - 하락 탈출",
        "과매수 붕괴 시그널 - 무조건 매도"
    ],
    correctIndex: 1,
    explanation: "골드 가격의 가격 저점은 낮아지나 보조지표(RSI)의 운동 저점이 높아지는 현상을 '상승 다이버전스(Bullish Divergence)'라고 합니다. 이는 하방 에너지의 실질적 소멸과 상승 압력의 내부 응축을 의미하는 기술적 분석에서 가장 신뢰도 높은 추세 전환 시그널입니다."
  },
  {
    id: 922,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격는 급격히 치솟으며 최고가 갱신 랠리를 이어가고 있으나, RSI 지표의 고점은 계속 낮아지고 있습니다. 이 현상을 지칭하는 명칭과 대처법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 6000,
            "low": 4950,
            "close": 5900,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 5900,
            "high": 6100,
            "low": 5750,
            "close": 6000,
            "volume": 86
        },
        {
            "time": "Day 3",
            "open": 6000,
            "high": 6750,
            "low": 5950,
            "close": 6650,
            "volume": 117
        }
    ],
    options: [
        "하락 다이버전스 (Bearish Divergence) - 매수 동력이 크게 꺾이고 고점 붕괴가 임박했으므로 보유 물량 익절 및 매수 중단",
        "상승 다이버전스 (Bullish Divergence) - 추가 급등 찬스이므로 풀매수",
        "골든크로스 상승 - 영원한 보유",
        "볼린저 밴드 지지 반등"
    ],
    correctIndex: 0,
    explanation: "골드 가격는 계속 고점을 높이고 있으나 보조지표의 고점은 꺾여 낮아지는 현상을 '하락 다이버전스(Bearish Divergence)'라고 합니다. 이는 매수세의 힘이 표면적인 가격 상승에 비해 실질적으로 빠르게 축소되고 있음을 경고하며, 조만간 큰 급락이 발생할 확률이 높습니다."
  },
  {
    id: 923,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 2,
    theoryRef: "06_technical_indicators.md",
    question: "이동평균선(EMA) 20일선(단기)이 50일선(중기)을 아래에서 위로 강하게 뚫고 솟구쳐 올랐습니다. 이 교차 현상의 정식 명칭은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 4900,
            "close": 4950,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 4950,
            "high": 5200,
            "low": 4950,
            "close": 5150,
            "volume": 92
        },
        {
            "time": "Day 3",
            "open": 5150,
            "high": 5500,
            "low": 5150,
            "close": 5450,
            "volume": 112
        }
    ],
    options: [
        "데드 크로스 (Death Cross) - 강한 매도 시그널",
        "골든 크로스 (Golden Cross) - 단기 추세가 중장기 평균 시세를 뚫어 상승 추세 전환을 알리는 매수 시그널",
        "볼린저 스퀴즈 (Bollinger Squeeze)",
        "다이버전스 수렴"
    ],
    correctIndex: 1,
    explanation: "단기 이평선이 장기 이평선을 위로 치고 올라가는 현상을 '골든 크로스(Golden Cross)'라고 합니다. 이는 최근 매수 평단가가 장기 평균가보다 확연히 높아졌음을 시사하며, 상승 추세가 본 궤도에 올랐음을 입증해 줍니다."
  },
  {
    id: 925,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 3,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격의 변동성이 극도로 축소되며 볼린저 밴드의 폭이 매우 좁아지는 '스퀴즈(Squeeze)' 현상이 나타났습니다. 이후 기대되는 시장 변동성의 원리는 무엇인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5050,
            "low": 4950,
            "close": 5000,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 5000,
            "high": 5000,
            "low": 4950,
            "close": 4950,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 4950,
            "high": 5000,
            "low": 4950,
            "close": 5000,
            "volume": 109
        }
    ],
    options: [
        "변동성이 영구적으로 사멸하여 골드 가격가 상장폐지된다",
        "강한 수축(Squeeze) 뒤에는 반드시 변동성의 폭발적인 팽창(Expansion) 랠리가 뒤따르므로, 밴드 상방/하방 이탈 방향으로 큰 추세가 분출된다",
        "골드 가격가 무조건 절반으로 폭락한다",
        "이평선들이 전부 수평으로 정렬하여 추세가 완전히 고정된다"
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 수축(Squeeze)은 시장의 숨 고르기 및 힘 모으기를 뜻합니다. 에너지가 최대한 압축된 후에는 밴드 상단 혹은 하단선을 이탈하며 매우 거대한 변동성 팽창(Expansion) 추세가 시작되므로, 방향성을 유심히 지켜봐야 합니다."
  },
  {
    id: 951,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "강력한 대세 상승 국면인 종목이 일시 조정을 거쳐 전저점 지지 영역(5,000달러)에 도달해 저점을 지키고 있습니다(저점 높임 또는 수평). 그런데 이때 보조지표 RSI의 저점은 이전보다 훨씬 깊게 파여 낮아지는 '히든 상승 다이버전스(Hidden Bullish Divergence)'가 포착되었습니다. 현명한 의사결정은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 4500,
            "high": 5500,
            "low": 4400,
            "close": 5250,
            "volume": 98
        },
        {
            "time": "Day 2",
            "open": 5250,
            "high": 5350,
            "low": 4900,
            "close": 5000,
            "volume": 116
        }
    ],
    options: [
        "추세가 완전히 꺾인 하락 전환 신호이므로 즉시 전량 매도 및 손절 처리한다.",
        "히든 상승 다이버전스는 강력한 '기존 상승 추세 지속(Trend Continuation)'을 뜻하므로, 4,900달러선 아래에 손절가를 잡고 우호적인 평단가에 추가 매수 혹은 신규 롱 진입을 실행한다.",
        "RSI가 과매도에 가까워졌으므로 거래소 계좌를 정지하고 관망한다.",
        "손절 라인 없이 무제한 레버리지 롱으로 맞선다."
    ],
    correctIndex: 1,
    explanation: "골드 가격의 저점은 높아지는데 보조지표(RSI 등)의 저점은 낮아지는 형태는 '히든 상승 다이버전스'입니다. 이는 기존의 강력한 상승 트렌드 내부에서 일시 조정을 겪는 매수자들이 활기차게 물량을 주워 담아 다음 상승 랠리를 추진한다는 신호이므로, 짧은 손절 라인(4,900달러)을 설정하고 매수 비중을 태우기 가장 적합한 정석 타점입니다."
  },
  {
    id: 953,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "1시간 봉 차트 상에서 골드 가격가 확실히 낮아졌으나 RSI 저점은 유의미하게 상승한 '상승 다이버전스'가 확인되어 매수 타점을 노리고 있습니다. 다만 15분 봉 단기 차트에서는 하락 장대음봉 관성이 아직 살아있어 매도 압력이 보입니다. 멀티 타임프레임 트레이더의 진입 의사결정은?",
    chartData: [
        {
            "time": "Hour 1",
            "open": 5000,
            "high": 5100,
            "low": 4500,
            "close": 4550,
            "volume": 117
        },
        {
            "time": "Hour 2",
            "open": 4550,
            "high": 4600,
            "low": 4000,
            "close": 4100,
            "volume": 99
        }
    ],
    options: [
        "15분 봉 단기 음봉이 쏟아지고 있으므로 1시간 봉의 반전 신호는 완전 무시하고 숏으로 스위칭한다.",
        "시간 프레임이 클수록 다이버전스 신호의 성공 확률과 신뢰도가 월등히 높으므로, 큰 방향성(상승 반전)을 설정한 뒤 15분 봉 단기 차트에서 음봉 캔들의 크기가 축소되고 지지 단기 캔들이 형성될 때 분할로 매수 진입한다.",
        "생각하기 귀찮으므로 시장가 100% 비중으로 즉시 롱 포지션을 진입한다.",
        "두 지표가 충돌하므로 모든 주문을 취소하고 잡코인을 도박식으로 산다."
    ],
    correctIndex: 1,
    explanation: "큰 프레임(1시간 봉)의 다이버전스가 주는 중장기 추세 신뢰도는 작은 프레임의 단기 노이즈보다 압도적으로 강력합니다. 단, 진입 시 타이밍의 정밀도를 높이기 위해 소파동(15분 봉)의 하락 동력이 꺾이고 지지해 주는 단기 확인 캔들이 나오는 찰나에 롱 포지션 타이밍을 잡는 것이 멀티 타임프레임 정석 매매입니다."
  },
  {
    id: 954,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격는 10,000달러 저항대를 뚫고 11,000달러까지 계속 우상향하며 고점을 갱신하고 있으나, MACD 오실레이터의 히스토그램 산 높이는 직전 고점 시점 대비 현저하게 쪼그라들며 꺾여 내려가 하락 다이버전스를 형성 중입니다. 현명한 포지션 보유자의 이익 관리 행동은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 9000,
            "high": 10250,
            "low": 8950,
            "close": 10000,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 10000,
            "high": 11100,
            "low": 9900,
            "close": 11000,
            "volume": 85
        }
    ],
    options: [
        "추가 폭등이 쏟아질 대세 상승 장이므로 전액 추가 불타기(매수)한다.",
        "가격 상승 이면에서 실제 매수 엔진의 강도(모멘텀)가 약화되는 하락 다이버전스 경고음이 울렸으므로, 리스크 관리를 위해 보유 포지션의 최소 50% 이상을 분할 익절하여 이익을 확정하고 추가 상승 욕심을 덜어낸다.",
        "익절 라인을 전혀 설정하지 않고 관망한다.",
        "무조건 숏 10배로 스위칭 매도 베팅한다."
    ],
    correctIndex: 1,
    explanation: "골드 가격는 올라가나 모멘텀 지표인 MACD 오실레이터 고점이 낮아지는 현상은 대표적인 하락 다이버전스로, 매수 에너지가 속 빈 강정처럼 쇠퇴하고 있어 언제든 급격한 폭락 조정이 발생할 수 있는 고위험 신호입니다. 이 시점에는 탐욕을 통제하고 물량의 50% 이상을 분할 매도하여 현금을 챙기는 것이 원칙입니다."
  },
  {
    id: 955,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격가 하락 횡보하던 도중, 단기 지평선인 EMA 20일선이 중장기선인 EMA 50일선에 극도로 밀착하며 수렴했습니다. 당일 대량 거래량의 음봉 캔들이 터지며 단기선이 장기선 아래로 교차하기 직전(데드크로스 임박)이며 주요 지지선 밑으로 떨어졌습니다. 롱(매수) 포지션 보유자의 올바른 대응은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5250,
            "high": 5300,
            "low": 4950,
            "close": 5000,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 5000,
            "high": 5050,
            "low": 4750,
            "close": 4800,
            "volume": 113
        }
    ],
    options: [
        "이평선 데드크로스 직전이고 지지선 붕괴는 하락 가속화 리스크가 가득한 위험 경보이므로, 희망 회로를 끄고 보유 포지션을 즉시 전량 손절/매도하여 소중한 원금을 대피시킨다.",
        "대이평선 지지력을 믿고 추가 매수로 물을 크게 탄다.",
        "아무 조치 없이 하락 추세가 다시 전고점을 뚫을 때까지 무기한 관망한다.",
        "계좌 청산가가 도달할 때까지 무제한 보유한다."
    ],
    correctIndex: 0,
    explanation: "20일선과 50일선의 데드크로스 임박 수렴 상태에서 가격이 지지선마저 무너뜨린 것은 하락 가속화 추세가 폭발하기 직전인 매우 위험한 기술적 상태입니다. 하락 추세가 본격 정배열(하락 정배열)화 되기 전에 즉시 전량 손절하고 시장 밖에서 피신해 있는 것이 계좌의 영구 파산을 막는 유일한 생존 규칙입니다."
  },
  {
    id: 967,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격가 장기 박스권 횡보를 이어가며 볼린저 밴드의 폭이 최근 몇 달 중 가장 좁은 형태로 밀착 수렴(Squeeze)되었습니다. 이 스퀴즈 국면에 대한 올바른 기술적 이해와 매매 시나리오는?",
    chartData: [
        {
            "time": "Week 1",
            "open": 5000,
            "high": 5150,
            "low": 4850,
            "close": 5050,
            "volume": 118
        },
        {
            "time": "Week 2",
            "open": 5050,
            "high": 5100,
            "low": 4950,
            "close": 5000,
            "volume": 109
        }
    ],
    options: [
        "박스권 폭이 극도로 좁아졌으므로 향후에도 변동성 없이 계속 잔잔하게 기어갈 것이다.",
        "상단과 하단 밴드가 맞닿을 정도로 에너지가 응축 수렴된 상태이며, 조만간 변동성이 사방으로 대폭발(상방 또는 하방으로 강력한 추세 이탈)할 것임을 예고하므로, 밴드 이탈 방향으로 돌파 진입 시나리오를 세운다.",
        "스퀴즈는 지표 오작동이므로 볼린저 밴드를 지우고 다른 차트를 켠다.",
        "중심선 부근에서 고배율 레버리지로 대기 주문 매수를 무조건 지른다."
    ],
    correctIndex: 1,
    explanation: "볼린저 밴드의 폭이 극도로 좁아지는 스퀴즈(Squeeze) 현상은 시장의 표준편차 변동성이 임계치까지 압축 수렴되었음을 알려줍니다. 에너지 압축 뒤에는 항상 폭발적인 가격 분출(상방/하방 이탈)이 뒤따르므로, 밴드를 뚫고 거래량이 실려 돌파 마감하는 방향으로 추세 추종 시나리오를 설계해야 합니다."
  },
  {
    id: 968,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 5,
    theoryRef: "06_technical_indicators.md",
    question: "골드 가격는 HL(Higher Low)을 형성하며 이전 직전 저점(4,500달러)보다 높은 저점(4,750달러)을 지키고 있으나, RSI 지표는 이전 35 수치보다 더 깊숙하게 25 수치까지 떨어졌습니다. 이 지표 불일치 현상의 공식 명칭과 올바른 포지션 셋업은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5100,
            "low": 4500,
            "close": 4550,
            "volume": 85
        },
        {
            "time": "Day 2",
            "open": 4550,
            "high": 4800,
            "low": 4750,
            "close": 4750,
            "volume": 93
        }
    ],
    options: [
        "일반 상승 다이버전스 - 하락 추세의 최종 종결 신호이므로 즉각 공매도를 잡는다.",
        "히든 상승 다이버전스 - 기존의 상승 추세 진행 동력이 눌림목에서 견고하게 유지되고 있음을 뜻하므로, 4,750달러선 아래에 손절을 짧게 걸고 롱(매수) 진입 타점으로 활용한다.",
        "일반 하락 다이버전스 - 상승 추세가 파괴되었으므로 모든 포지션을 비운다.",
        "지표가 오작동하는 휩소 구간이므로 무조건 횡보에 베팅한다."
    ],
    correctIndex: 1,
    explanation: "가격의 저점은 높아졌는데(Higher Low) 모멘텀 지표의 저점은 낮아지는 현상은 '히든 상승 다이버전스(Hidden Bullish Divergence)'입니다. 이는 추세 반전이 아닌 **기존 강세 추세 지속**을 뜻하며, 조정 눌림목이 완성되고 다음 상승 랠리를 준비한다는 최고의 매수 신호 중 하나입니다."
  },
  {
    id: 969,
    category: "지표/컨플루언스",
    categoryKey: "indicator",
    difficulty: 4,
    theoryRef: "06_technical_indicators.md",
    question: "매수 타점을 신중하게 선별하고자 합니다. 기술적 분석의 성공 확률을 비약적으로 끌어올리는 '다중 컨플루언스(Confluence)' 결합 사례로 가장 적합한 조건 구성은?",
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
        "오직 트위터나 뉴스 호재 찌라시 하나만 보고 즉시 시장가로 대량 매수한다.",
        "주요 수평 지지선(S/R) + 200일 장기 이평선(EMA) 지지 중첩 + 1시간 봉 RSI 상승 다이버전스 발생 + 아래꼬리가 긴 핀바 캔들 종가 마감 등 독립적인 분석 근거들이 한 가격대에 포개질 때 진입한다.",
        "RSI 과매수 상태에서 볼린저 밴드 상단을 뚫을 때 무조건 롱을 탄다.",
        "아무 근거 없이 감정이 이끄는 대로 본능적으로 레버리지를 조절한다."
    ],
    correctIndex: 1,
    explanation: "다중 컨플루언스(Confluence)는 독립적인 기술적 근거들이 동일한 특정 가격 구역에 중첩되는 현상입니다. 지지 저항, 이평선, 보조지표 다이버전스, 캔들 가격행동(Rejection 핀바)이 한 곳에 묶여 매수 자리를 형성할 때 매매를 실행하면, 높은 신뢰도와 좁은 손절 라인 덕분에 장기 기대값이 극대화됩니다."
  },
];

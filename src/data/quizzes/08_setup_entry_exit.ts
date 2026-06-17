import type { QuizItem } from './types';

export const quizzes_setup_entry_exit: QuizItem[] = [
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
            "close": 11900,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 11900,
            "high": 15000,
            "low": 11800,
            "close": 14800,
            "volume": 112
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
            "close": 112,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 112,
            "high": 113,
            "low": 98,
            "close": 100,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 100,
            "high": 119,
            "low": 99,
            "close": 118,
            "volume": 92
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
            "close": 111,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 111,
            "high": 124,
            "low": 110,
            "close": 122,
            "volume": 112
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
            "close": 100,
            "volume": 88
        },
        {
            "time": "Day 1",
            "open": 100,
            "high": 106,
            "low": 100,
            "close": 105,
            "volume": 108
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
            "close": 108,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 108,
            "high": 120,
            "low": 107,
            "close": 118,
            "volume": 85
        },
        {
            "time": "Day 3",
            "open": 118,
            "high": 135,
            "low": 117,
            "close": 132,
            "volume": 88
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
            "close": 82,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 82,
            "high": 86,
            "low": 78,
            "close": 85,
            "volume": 115
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
    id: 129,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "15,000원에 산 알트코인이 22,500원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 22,500원 달성 후 코인 가격가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 15000,
            "high": 18000,
            "low": 14850,
            "close": 17850,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 17850,
            "high": 22500,
            "low": 17700,
            "close": 22200,
            "volume": 99
        }
    ],
    options: [
        "15,000원 (본전 수준 청산)",
        "20,250원 (최고점 대비 10% 하방 청산)",
        "21,000원 (최고점 대비 6.6% 하방 청산)",
        "18,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 22,500원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 20,250원`으로 확정 셋업되며, 코인 가격가 20,250원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 145,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "코인 가격가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 180달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 187.5,
            "high": 189,
            "low": 165,
            "close": 168,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 168,
            "high": 169.5,
            "low": 147,
            "close": 150,
            "volume": 93
        },
        {
            "time": "Day 3",
            "open": 150,
            "high": 178.5,
            "low": 148.5,
            "close": 177,
            "volume": 119
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 187.5
                },
                {
                    "x": 1,
                    "y": 168
                },
                {
                    "x": 2,
                    "y": 157.5
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
                    "y": 180
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
    id: 170,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(180달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 165,
            "high": 168,
            "low": 163.5,
            "close": 166.5,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 166.5,
            "high": 186,
            "low": 165,
            "close": 183,
            "volume": 87
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
                    "x": 1,
                    "y": 180
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
    id: 171,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 150,
            "high": 150,
            "low": 150,
            "close": 150,
            "volume": 106
        },
        {
            "time": "Day 1",
            "open": 150,
            "high": 159,
            "low": 150,
            "close": 157.5,
            "volume": 110
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
    id: 172,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 코인 가격가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 165,
            "low": 148.5,
            "close": 162,
            "volume": 112
        },
        {
            "time": "Day 2",
            "open": 162,
            "high": 180,
            "low": 160.5,
            "close": 177,
            "volume": 109
        },
        {
            "time": "Day 3",
            "open": 177,
            "high": 202.5,
            "low": 175.5,
            "close": 198,
            "volume": 116
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
    id: 175,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 코인 가격가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 150,
            "high": 150,
            "low": 120,
            "close": 123,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 123,
            "high": 129,
            "low": 117,
            "close": 127.5,
            "volume": 98
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
    id: 229,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "20,000원에 산 가상자산이 30,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 30,000원 달성 후 시세가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 20000,
            "high": 24000,
            "low": 19800,
            "close": 23800,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 23800,
            "high": 30000,
            "low": 23600,
            "close": 29600,
            "volume": 88
        }
    ],
    options: [
        "20,000원 (본전 수준 청산)",
        "27,000원 (최고점 대비 10% 하방 청산)",
        "28,000원 (최고점 대비 6.6% 하방 청산)",
        "24,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 30,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 27,000원`으로 확정 셋업되며, 시세가 27,000원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 245,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "시세가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 240달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 250,
            "high": 252,
            "low": 220,
            "close": 224,
            "volume": 102
        },
        {
            "time": "Day 2",
            "open": 224,
            "high": 226,
            "low": 196,
            "close": 200,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 200,
            "high": 238,
            "low": 198,
            "close": 236,
            "volume": 115
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 250
                },
                {
                    "x": 1,
                    "y": 224
                },
                {
                    "x": 2,
                    "y": 210
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
                    "y": 240
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
    id: 270,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(240달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 220,
            "high": 224,
            "low": 218,
            "close": 222,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 222,
            "high": 248,
            "low": 220,
            "close": 244,
            "volume": 120
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
                    "x": 1,
                    "y": 240
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
    id: 271,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 200,
            "high": 200,
            "low": 200,
            "close": 200,
            "volume": 94
        },
        {
            "time": "Day 1",
            "open": 200,
            "high": 212,
            "low": 200,
            "close": 210,
            "volume": 116
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
    id: 272,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 시세가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 220,
            "low": 198,
            "close": 216,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 216,
            "high": 240,
            "low": 214,
            "close": 236,
            "volume": 102
        },
        {
            "time": "Day 3",
            "open": 236,
            "high": 270,
            "low": 234,
            "close": 264,
            "volume": 100
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
    id: 275,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 시세가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200,
            "high": 200,
            "low": 160,
            "close": 164,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 164,
            "high": 172,
            "low": 156,
            "close": 170,
            "volume": 100
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
    id: 329,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "30,000원에 산 국내 주식이 45,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 45,000원 달성 후 삼성전자 주가가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 30000,
            "high": 36000,
            "low": 29700,
            "close": 35700,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 35700,
            "high": 45000,
            "low": 35400,
            "close": 44400,
            "volume": 111
        }
    ],
    options: [
        "30,000원 (본전 수준 청산)",
        "40,500원 (최고점 대비 10% 하방 청산)",
        "42,000원 (최고점 대비 6.6% 하방 청산)",
        "36,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 45,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 40,500원`으로 확정 셋업되며, 삼성전자 주가가 40,500원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 345,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "삼성전자 주가가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 360달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 375,
            "high": 378,
            "low": 330,
            "close": 336,
            "volume": 86
        },
        {
            "time": "Day 2",
            "open": 336,
            "high": 339,
            "low": 294,
            "close": 300,
            "volume": 110
        },
        {
            "time": "Day 3",
            "open": 300,
            "high": 357,
            "low": 297,
            "close": 354,
            "volume": 88
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 375
                },
                {
                    "x": 1,
                    "y": 336
                },
                {
                    "x": 2,
                    "y": 315
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
                    "y": 360
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
    id: 370,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(360달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 330,
            "high": 336,
            "low": 327,
            "close": 333,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 333,
            "high": 372,
            "low": 330,
            "close": 366,
            "volume": 94
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
                    "x": 1,
                    "y": 360
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
    id: 371,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 300,
            "high": 300,
            "low": 300,
            "close": 300,
            "volume": 80
        },
        {
            "time": "Day 1",
            "open": 300,
            "high": 318,
            "low": 300,
            "close": 315,
            "volume": 104
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
    id: 372,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 삼성전자 주가가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 330,
            "low": 297,
            "close": 324,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 324,
            "high": 360,
            "low": 321,
            "close": 354,
            "volume": 105
        },
        {
            "time": "Day 3",
            "open": 354,
            "high": 405,
            "low": 351,
            "close": 396,
            "volume": 111
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
    id: 375,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 삼성전자 주가가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 300,
            "high": 300,
            "low": 240,
            "close": 246,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 246,
            "high": 258,
            "low": 234,
            "close": 255,
            "volume": 109
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
    id: 429,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "50,000원에 산 해외 주식이 75,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 75,000원 달성 후 테슬라 주가가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 50000,
            "high": 60000,
            "low": 49500,
            "close": 59500,
            "volume": 116
        },
        {
            "time": "Day 2",
            "open": 59500,
            "high": 75000,
            "low": 59000,
            "close": 74000,
            "volume": 101
        }
    ],
    options: [
        "50,000원 (본전 수준 청산)",
        "67,500원 (최고점 대비 10% 하방 청산)",
        "70,000원 (최고점 대비 6.6% 하방 청산)",
        "60,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 75,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 67,500원`으로 확정 셋업되며, 테슬라 주가가 67,500원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 445,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "테슬라 주가가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 600달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 625,
            "high": 630,
            "low": 550,
            "close": 560,
            "volume": 89
        },
        {
            "time": "Day 2",
            "open": 560,
            "high": 565,
            "low": 490,
            "close": 500,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 500,
            "high": 595,
            "low": 495,
            "close": 590,
            "volume": 98
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 625
                },
                {
                    "x": 1,
                    "y": 560
                },
                {
                    "x": 2,
                    "y": 525
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
                    "y": 600
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
    id: 470,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(600달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 550,
            "high": 560,
            "low": 545,
            "close": 555,
            "volume": 95
        },
        {
            "time": "Day 2",
            "open": 555,
            "high": 620,
            "low": 550,
            "close": 610,
            "volume": 117
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
    id: 471,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 500,
            "high": 500,
            "low": 500,
            "close": 500,
            "volume": 81
        },
        {
            "time": "Day 1",
            "open": 500,
            "high": 530,
            "low": 500,
            "close": 525,
            "volume": 115
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
    id: 472,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 테슬라 주가가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 550,
            "low": 495,
            "close": 540,
            "volume": 100
        },
        {
            "time": "Day 2",
            "open": 540,
            "high": 600,
            "low": 535,
            "close": 590,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 590,
            "high": 675,
            "low": 585,
            "close": 660,
            "volume": 99
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
    id: 475,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 테슬라 주가가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500,
            "high": 500,
            "low": 400,
            "close": 410,
            "volume": 109
        },
        {
            "time": "Day 2",
            "open": 410,
            "high": 430,
            "low": 390,
            "close": 425,
            "volume": 96
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
    id: 529,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "80,000원에 산 미국 주식이 120,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 120,000원 달성 후 애플 주가가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 80000,
            "high": 96000,
            "low": 79200,
            "close": 95200,
            "volume": 103
        },
        {
            "time": "Day 2",
            "open": 95200,
            "high": 120000,
            "low": 94400,
            "close": 118400,
            "volume": 104
        }
    ],
    options: [
        "80,000원 (본전 수준 청산)",
        "108,000원 (최고점 대비 10% 하방 청산)",
        "112,000원 (최고점 대비 6.6% 하방 청산)",
        "96,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 120,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 108,000원`으로 확정 셋업되며, 애플 주가가 108,000원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 545,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "애플 주가가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 960달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1008,
            "low": 880,
            "close": 896,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 896,
            "high": 904,
            "low": 784,
            "close": 800,
            "volume": 119
        },
        {
            "time": "Day 3",
            "open": 800,
            "high": 952,
            "low": 792,
            "close": 944,
            "volume": 113
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
                    "x": 1,
                    "y": 896
                },
                {
                    "x": 2,
                    "y": 840
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
                    "y": 960
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
    id: 570,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(960달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 880,
            "high": 896,
            "low": 872,
            "close": 888,
            "volume": 81
        },
        {
            "time": "Day 2",
            "open": 888,
            "high": 992,
            "low": 880,
            "close": 976,
            "volume": 95
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
                    "x": 1,
                    "y": 960
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
    id: 571,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 800,
            "high": 800,
            "low": 800,
            "close": 800,
            "volume": 86
        },
        {
            "time": "Day 1",
            "open": 800,
            "high": 848,
            "low": 800,
            "close": 840,
            "volume": 115
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
    id: 572,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 애플 주가가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 880,
            "low": 792,
            "close": 864,
            "volume": 99
        },
        {
            "time": "Day 2",
            "open": 864,
            "high": 960,
            "low": 856,
            "close": 944,
            "volume": 91
        },
        {
            "time": "Day 3",
            "open": 944,
            "high": 1080,
            "low": 936,
            "close": 1056,
            "volume": 91
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
    id: 575,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 애플 주가가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 800,
            "high": 800,
            "low": 640,
            "close": 656,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 656,
            "high": 688,
            "low": 624,
            "close": 680,
            "volume": 102
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
    id: 629,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "100,000원에 산 지수 선물이 150,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 150,000원 달성 후 나스닥 시세가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 100000,
            "high": 120000,
            "low": 99000,
            "close": 119000,
            "volume": 106
        },
        {
            "time": "Day 2",
            "open": 119000,
            "high": 150000,
            "low": 118000,
            "close": 148000,
            "volume": 114
        }
    ],
    options: [
        "100,000원 (본전 수준 청산)",
        "135,000원 (최고점 대비 10% 하방 청산)",
        "140,000원 (최고점 대비 6.6% 하방 청산)",
        "120,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 150,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 135,000원`으로 확정 셋업되며, 나스닥 시세가 135,000원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 645,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "나스닥 시세가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 1,200달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1250,
            "high": 1260,
            "low": 1100,
            "close": 1120,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 1120,
            "high": 1130,
            "low": 980,
            "close": 1000,
            "volume": 114
        },
        {
            "time": "Day 3",
            "open": 1000,
            "high": 1190,
            "low": 990,
            "close": 1180,
            "volume": 89
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1250
                },
                {
                    "x": 1,
                    "y": 1120
                },
                {
                    "x": 2,
                    "y": 1050
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
                    "y": 1200
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
    id: 670,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(1,200달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1100,
            "high": 1120,
            "low": 1090,
            "close": 1110,
            "volume": 84
        },
        {
            "time": "Day 2",
            "open": 1110,
            "high": 1240,
            "low": 1100,
            "close": 1220,
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
                },
                {
                    "x": 1,
                    "y": 1200
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
    id: 671,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 1000,
            "high": 1000,
            "low": 1000,
            "close": 1000,
            "volume": 115
        },
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1060,
            "low": 1000,
            "close": 1050,
            "volume": 123
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
    id: 672,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 나스닥 시세가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1100,
            "low": 990,
            "close": 1080,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 1080,
            "high": 1200,
            "low": 1070,
            "close": 1180,
            "volume": 96
        },
        {
            "time": "Day 3",
            "open": 1180,
            "high": 1350,
            "low": 1170,
            "close": 1320,
            "volume": 89
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
    id: 675,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 나스닥 시세가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1000,
            "high": 1000,
            "low": 800,
            "close": 820,
            "volume": 110
        },
        {
            "time": "Day 2",
            "open": 820,
            "high": 860,
            "low": 780,
            "close": 850,
            "volume": 119
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
    id: 729,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "120,000원에 산 성장주이 180,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 180,000원 달성 후 엔비디아 주가가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 120000,
            "high": 144000,
            "low": 118800,
            "close": 142800,
            "volume": 80
        },
        {
            "time": "Day 2",
            "open": 142800,
            "high": 180000,
            "low": 141600,
            "close": 177600,
            "volume": 98
        }
    ],
    options: [
        "120,000원 (본전 수준 청산)",
        "162,000원 (최고점 대비 10% 하방 청산)",
        "168,000원 (최고점 대비 6.6% 하방 청산)",
        "144,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 180,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 162,000원`으로 확정 셋업되며, 엔비디아 주가가 162,000원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 745,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "엔비디아 주가가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 1,440달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1500,
            "high": 1512,
            "low": 1320,
            "close": 1344,
            "volume": 93
        },
        {
            "time": "Day 2",
            "open": 1344,
            "high": 1356,
            "low": 1176,
            "close": 1200,
            "volume": 97
        },
        {
            "time": "Day 3",
            "open": 1200,
            "high": 1428,
            "low": 1188,
            "close": 1416,
            "volume": 95
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 1500
                },
                {
                    "x": 1,
                    "y": 1344
                },
                {
                    "x": 2,
                    "y": 1260
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
                    "y": 1440
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
    id: 770,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(1,440달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1320,
            "high": 1344,
            "low": 1308,
            "close": 1332,
            "volume": 90
        },
        {
            "time": "Day 2",
            "open": 1332,
            "high": 1488,
            "low": 1320,
            "close": 1464,
            "volume": 118
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
                    "x": 1,
                    "y": 1440
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
    id: 771,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 1200,
            "high": 1200,
            "low": 1200,
            "close": 1200,
            "volume": 110
        },
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1272,
            "low": 1200,
            "close": 1260,
            "volume": 94
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
    id: 772,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 엔비디아 주가가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1320,
            "low": 1188,
            "close": 1296,
            "volume": 115
        },
        {
            "time": "Day 2",
            "open": 1296,
            "high": 1440,
            "low": 1284,
            "close": 1416,
            "volume": 88
        },
        {
            "time": "Day 3",
            "open": 1416,
            "high": 1620,
            "low": 1404,
            "close": 1584,
            "volume": 112
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
    id: 775,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 엔비디아 주가가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 1200,
            "high": 1200,
            "low": 960,
            "close": 984,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 984,
            "high": 1032,
            "low": 936,
            "close": 1020,
            "volume": 89
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
    id: 829,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "200,000원에 산 메이저 코인이 300,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 300,000원 달성 후 리플 시세가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 200000,
            "high": 240000,
            "low": 198000,
            "close": 238000,
            "volume": 118
        },
        {
            "time": "Day 2",
            "open": 238000,
            "high": 300000,
            "low": 236000,
            "close": 296000,
            "volume": 88
        }
    ],
    options: [
        "200,000원 (본전 수준 청산)",
        "270,000원 (최고점 대비 10% 하방 청산)",
        "280,000원 (최고점 대비 6.6% 하방 청산)",
        "240,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 300,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 270,000원`으로 확정 셋업되며, 리플 시세가 270,000원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 845,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "리플 시세가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 2,400달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2500,
            "high": 2520,
            "low": 2200,
            "close": 2240,
            "volume": 97
        },
        {
            "time": "Day 2",
            "open": 2240,
            "high": 2260,
            "low": 1960,
            "close": 2000,
            "volume": 96
        },
        {
            "time": "Day 3",
            "open": 2000,
            "high": 2380,
            "low": 1980,
            "close": 2360,
            "volume": 115
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 2500
                },
                {
                    "x": 1,
                    "y": 2240
                },
                {
                    "x": 2,
                    "y": 2100
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
                    "y": 2400
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
    id: 870,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(2,400달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2200,
            "high": 2240,
            "low": 2180,
            "close": 2220,
            "volume": 119
        },
        {
            "time": "Day 2",
            "open": 2220,
            "high": 2480,
            "low": 2200,
            "close": 2440,
            "volume": 89
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
    id: 871,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 2000,
            "high": 2000,
            "low": 2000,
            "close": 2000,
            "volume": 92
        },
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2120,
            "low": 2000,
            "close": 2100,
            "volume": 107
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
    id: 872,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 리플 시세가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2200,
            "low": 1980,
            "close": 2160,
            "volume": 108
        },
        {
            "time": "Day 2",
            "open": 2160,
            "high": 2400,
            "low": 2140,
            "close": 2360,
            "volume": 120
        },
        {
            "time": "Day 3",
            "open": 2360,
            "high": 2700,
            "low": 2340,
            "close": 2640,
            "volume": 94
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
    id: 875,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 리플 시세가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 2000,
            "high": 2000,
            "low": 1600,
            "close": 1640,
            "volume": 117
        },
        {
            "time": "Day 2",
            "open": 1640,
            "high": 1720,
            "low": 1560,
            "close": 1700,
            "volume": 94
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
    id: 929,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 3,
    theoryRef: "08_setup_entry_exit.md",
    question: "500,000원에 산 원자재이 750,000원까지 올랐습니다. 이익을 보존하면서 상승세를 끝까지 타기 위해, 최고점 대비 10% 하방 이탈 시 즉시 자동 익절되는 '추적 손절매(Trailing Stop)'를 적용했습니다. 최고점 750,000원 달성 후 골드 가격가 조정받을 때 실제로 청산(익절)되는 가격은 얼마인가요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 500000,
            "high": 600000,
            "low": 495000,
            "close": 595000,
            "volume": 88
        },
        {
            "time": "Day 2",
            "open": 595000,
            "high": 750000,
            "low": 590000,
            "close": 740000,
            "volume": 103
        }
    ],
    options: [
        "500,000원 (본전 수준 청산)",
        "675,000원 (최고점 대비 10% 하방 청산)",
        "700,000원 (최고점 대비 6.6% 하방 청산)",
        "600,000원 (최고점 대비 20% 하방 청산)"
    ],
    correctIndex: 1,
    explanation: "추적 손절매(Trailing Stop)는 가격 상승에 따라 청산 가격을 자동으로 올려주는 주문입니다. 최고점 750,000원을 기록했으므로 청산 트리거 라인은 최고점에서 10% 차감된 `15,000 * 0.9 = 675,000원`으로 확정 셋업되며, 골드 가격가 675,000원을 건드리는 순간 자동 이익실현됩니다."
  },
  {
    id: 945,
    category: "추세/레짐",
    categoryKey: "trend",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "골드 가격가 장기 하락 추세선을 힘차게 뚫어 상방 돌파(Breakout)했습니다. 하지만 돌파선 바로 위(약 6,000달러)에 최근 여러 번 강한 매도 잔량이 쏟아지며 가격을 찍어 눌렀던 핵심 매물대 저항선이 떡하니 버티고 있습니다. 당신의 신규 진입 매수 순서는 어떻게 결정해야 안전할까요?",
    chartData: [
        {
            "time": "Day 1",
            "open": 6250,
            "high": 6300,
            "low": 5500,
            "close": 5600,
            "volume": 94
        },
        {
            "time": "Day 2",
            "open": 5600,
            "high": 5650,
            "low": 4900,
            "close": 5000,
            "volume": 90
        },
        {
            "time": "Day 3",
            "open": 5000,
            "high": 5950,
            "low": 4950,
            "close": 5900,
            "volume": 107
        }
    ],
    drawings: [
        {
            "type": "line",
            "points": [
                {
                    "x": 0,
                    "y": 6250
                },
                {
                    "x": 1,
                    "y": 5600
                },
                {
                    "x": 2,
                    "y": 5250
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
                    "y": 6000
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
    id: 970,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "중요 수평 저항선(6,000달러)을 상방으로 장대양봉 종가 돌파한 것을 확인하고 롱(매수) 진입 셋업을 준비하고 있습니다. 원칙 트레이더가 뇌동매매 추격을 막고 최상의 손익비를 확보하기 위해 즐겨 쓰는 정석적인 진입 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5500,
            "high": 5600,
            "low": 5450,
            "close": 5550,
            "volume": 96
        },
        {
            "time": "Day 2",
            "open": 5550,
            "high": 6200,
            "low": 5500,
            "close": 6100,
            "volume": 123
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
                    "x": 1,
                    "y": 6000
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
    id: 971,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "포지션 진입 직후, 가격이 계획대로 내 방향으로 순탄하게 우상향하고 있습니다. 기존 진입 시 설정한 손익비 1:2의 최종 목표가 도달 전에, 리스크 관리 차원에서 계좌 드로다운을 0으로 만드는 정석적인 1차 포지션 관리 행동은?",
    chartData: [
        {
            "time": "Entry",
            "open": 5000,
            "high": 5000,
            "low": 5000,
            "close": 5000,
            "volume": 114
        },
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5300,
            "low": 5000,
            "close": 5250,
            "volume": 87
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
    id: 972,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 4,
    theoryRef: "08_setup_entry_exit.md",
    question: "강력한 장기 상승 추세가 터져 골드 가격가 20일 이평선을 타고 계속해서 폭발적으로 신고가를 갱신하고 있습니다. 이때 익절 시점을 서둘러 잡지 않고, 추세 상승 이익을 최대한 길게 끝까지 빨아먹기 위한 정석 청산 실행법은?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5500,
            "low": 4950,
            "close": 5400,
            "volume": 87
        },
        {
            "time": "Day 2",
            "open": 5400,
            "high": 6000,
            "low": 5350,
            "close": 5900,
            "volume": 118
        },
        {
            "time": "Day 3",
            "open": 5900,
            "high": 6750,
            "low": 5850,
            "close": 6600,
            "volume": 124
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
    id: 975,
    category: "셋업/실행",
    categoryKey: "execution",
    difficulty: 5,
    theoryRef: "08_setup_entry_exit.md",
    question: "하락 횡보하던 골드 가격가 중요 매물대이자 피보나치 되돌림 0.618 지점에 정확히 맞닿아 아래꼬리가 긴 양봉 핀바(Pin Bar)를 그리며 마감했습니다. 룰베이스 트레이더가 진입 버튼을 누를 때 성립된 IF-THEN 시나리오는?",
    chartData: [
        {
            "time": "Day 1",
            "open": 5000,
            "high": 5000,
            "low": 4000,
            "close": 4100,
            "volume": 91
        },
        {
            "time": "Day 2",
            "open": 4100,
            "high": 4300,
            "low": 3900,
            "close": 4250,
            "volume": 113
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
];

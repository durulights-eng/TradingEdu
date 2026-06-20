export interface DictionaryTerm {
  term: string;
  definition: string;
  category?: string;
  example?: string;
  aliases?: string[];
}

const baseDictionary: DictionaryTerm[] = [
  // ==========================================
  // Category 1: 주식 & 시장 완전 기초 (삼성전자 주주용)
  // ==========================================
  {
    term: "매수 (Buying)",
    definition: "쉽게 말해 주식을 구매하는 행위입니다. 예컨대 내 계좌로 삼성전자 10주를 사는 것을 매수라고 칭합니다."
  },
  {
    term: "매도 (Selling)",
    definition: "가지고 있는 주식을 파는 행위입니다. 보유 중인 주식을 매도하여 현금으로 회수합니다."
  },
  {
    term: "익절 (Take Profit)",
    definition: "이익을 보고 주식을 파는 것입니다. 삼성전자를 6만 원에 사서 주가가 7만 원으로 올랐을 때 팔아 확실하게 수익을 확정 짓는 기분 좋은 행위입니다."
  },
  {
    term: "손절 / 손절매 (Stop Loss)",
    definition: "더 큰 손실을 막기 위해 울며 겨자 먹기로 손해를 감수하고 파는 것입니다. 삼성전자를 6만 원에 샀는데 5만 5천 원으로 떨어지자, 4만 원대까지 추락할 것에 대비해 손실을 감수하고 즉시 처분해 내 원금을 지키는 생명선입니다."
  },
  {
    term: "평단가 (Average Price)",
    definition: "내가 보유한 주식의 평균 구매 단가입니다. 삼성전자를 7만 원에 1주, 6만 원에 1주 샀다면 내 평단가는 6만 5천 원이 됩니다."
  },
  {
    term: "물타기 (Averaging Down)",
    definition: "주가가 내가 산 가격보다 떨어졌을 때, 추가로 더 매수하여 평균 구매 단가(평단가)를 낮추는 행위입니다. 빠져나올 평단가는 낮아지지만, 주가가 계속 폭락하면 손실 액수가 기하급수적으로 늘어나는 위험한 전술입니다."
  },
  {
    term: "불타기 (Pyramiding)",
    definition: "물타기와 반대로, 주가가 계속 올라갈 때 수익을 극대화하기 위해 포지션 비중을 더 늘려 추가 매수하는 행위입니다. 상승 추세가 확실할 때 유용하나 꼭대기에 물릴 리스크가 존재합니다."
  },
  {
    term: "분할 매수 (Scale-in)",
    definition: "주식을 한 번에 다 사지 않고 시간이나 가격대를 쪼개서 여러 번 나누어 사는 안전한 진입 습관입니다. 평단가 분산에 매우 좋습니다."
  },
  {
    term: "분할 매도 (Scale-out)",
    definition: "주식을 한 번에 다 팔지 않고, 목표가 부근이나 상승 마디마다 나누어 파는 행위입니다. 수익률 보존과 심리적 안정에 결정적 역할을 합니다."
  },
  {
    term: "시가총액 (Market Cap)",
    definition: "그 주식 회사의 전체 몸값(총 가치)입니다. '현재 주가 × 총 발행 주식 수'로 계산하며, 코스피 1위 삼성전자의 몸집 크기를 비교하는 절대 기준입니다."
  },
  {
    term: "예수금 (Deposit)",
    definition: "주식을 사기 위해 증권 계좌에 넣어 둔 순수 내 현금 잔고입니다. 아직 주식을 사지 않고 계좌에 대기 중인 투자 대기 자금입니다."
  },
  {
    term: "증거금 (Margin)",
    definition: "주식을 살 때 보증금처럼 지불하는 최소한의 현금 비율입니다. 예를 들어 증거금률 40%인 주식은 내 돈 40만 원만 있어도 외상(미수)을 써서 100만 원어치 주식을 임시로 주문할 수 있습니다."
  },
  {
    term: "미수금 / 미수거래 (Receivables)",
    definition: "증권사로부터 3영업일 동안 외상으로 주식을 당겨 사는 결제 방식입니다. 3일 안에 외상값을 갚지 않으면 증권사에서 내 주식을 강제로 처분(반대매매)해 갑니다."
  },
  {
    term: "신용융자 (Credit Loan)",
    definition: "내 보유 주식이나 현금을 담보로 삼아 증권사로부터 돈을 빌려 주식을 추가로 매수하는 장기 대출 거래입니다. 주가 하락 시 담보 비율 부족으로 마진콜이나 청산에 직면합니다."
  },
  {
    term: "반대매매 (Forced Sale)",
    definition: "외상(미수)으로 주식을 산 뒤 돈을 제때 안 갚거나, 신용 대출 주식의 주가가 폭락해 최소 담보비율 이하로 떨어졌을 때, 증권사가 아침 9시 장이 열리자마자 강제로 내 주식을 일괄 시장가(하한가 수준)로 강제 처분해 외상값을 회수해가는 무서운 징벌적 청산 제도입니다."
  },
  {
    term: "보통주와 우선주",
    definition: "주주총회 의결권이 있고 주가 변동폭이 큰 '삼성전자'가 보통주이며, 의결권은 없지만 배당금을 약간 더 주는 '삼성전자우'가 우선주입니다."
  },
  {
    term: "D+2 결제 제도",
    definition: "주식 주문 체결 후 실제 돈의 정산과 주식 명의 이전이 완전히 마무리되는 데 걸리는 2영업일의 시간차입니다. 오늘 삼성전자를 매도하여 이익을 냈어도, 그 돈을 내 은행 통장으로 완전히 출금할 수 있는 것은 이틀 뒤 영업일입니다."
  },
  {
    term: "상한가와 하한가",
    definition: "급격한 주가 변동으로부터 투자자를 보호하기 위해 하루 동안 오르내릴 수 있는 주가의 최대 제한 범위입니다. 현재 한국 코스피/코스닥 시장의 상하한가 폭은 전일 종가 기준 ±30%로 제한되어 있습니다."
  },
  {
    term: "예수금 회전율",
    definition: "계좌 내 현금 대비 주식을 얼마나 자주 사고팔았는지를 보여주는 지표입니다. 과도하게 높은 회전율은 잦은 수수료 소모와 뇌동매매의 증거입니다."
  },
  {
    term: "체결 (Execution)",
    definition: "내가 낸 매수/매도 주문이 호가창에서 상대방의 주문과 매칭되어 계약이 최종 완성(거래 성공)되는 상태입니다."
  },

  // ==========================================
  // Category 2: 차트 기본 & 캔들 용어 (주린이 탈출)
  // ==========================================
  {
    term: "봉차트 / 캔들스틱 (Candlestick)",
    definition: "정해진 세션 시간 동안의 가격 움직임(시가, 고가, 저가, 종가)을 촛대 모양으로 표현해 매수/매도 세력의 에너지 균형을 보여주는 차트입니다."
  },
  {
    term: "양봉 (Bullish Candle)",
    definition: "종가가 시가보다 높게 끝나 붉은색(미국 등 해외는 초록색)으로 채워진 상승 캔들로 매수 세력의 승리를 의미합니다."
  },
  {
    term: "음봉 (Bearish Candle)",
    definition: "종가가 시가보다 낮게 끝나 파란색(해외는 빨간색)으로 채워진 하락 캔들로 매도 세력의 지배를 나타냅니다."
  },
  {
    term: "위꼬리 (Upper Wick)",
    definition: "캔들 몸통 위로 뻗은 가느다란 선입니다. 장중에 주가가 크게 올랐다가 고점 저항 세력의 매도 압력에 밀려 내려왔음을 보여줍니다."
  },
  {
    term: "아래꼬리 (Lower Wick)",
    definition: "캔들 몸통 아래로 뻗은 선입니다. 장중에 주가가 크게 폭락했으나 바닥 대기 매수세가 강하게 밀어 올려 가격을 방어해냈음을 증명합니다."
  },
  {
    term: "도지 (Doji / 십자봉)",
    definition: "시가와 종가가 거의 같아서 몸통이 보이지 않고 십자가(+) 모양으로 나타나는 캔들입니다. 매수와 매도가 한치 물러섬 없이 팽팽하게 대치하여 조만간 추세 방향이 꺾일 수 있는 변곡을 의미합니다."
  },
  {
    term: "거래량 (Volume)",
    definition: "해당 캔들 시간 동안 거래가 이루어진 주식이나 코인의 총 개수입니다. 진짜 돈이 실린 돌파인지 가짜 이탈인지를 판독하는 핵심 리트머스 시험지입니다."
  },
  {
    term: "이동평균선 (Moving Average)",
    definition: "특정 기간(예: 20일, 50일) 동안의 종가 가격의 평균값을 매일 이어 만든 부드러운 선입니다. 현재 주가의 장기 흐름과 방향성을 잡는 뼈대입니다."
  },
  {
    term: "갭상승 / 갭하락 (Gap)",
    definition: "장마감 후 돌발 호재나 악재로 인해, 다음 날 장 시작할 때 어제 종가 가격과 상관없이 허공에 붕 떠서 시가가 시작하여 차트 사이에 빈 공간(Gap)이 생기는 현상입니다."
  },
  {
    term: "뇌동매매 (Emotional Trading)",
    definition: "아무런 기술적 분석 원칙이나 시나리오 없이, 장중에 주가가 급등락하는 변동성 화면에 휩쓸려 흥분하여 매수/매도 버튼을 무작정 누르는 파산 유도 매매 행태입니다."
  },
  {
    term: "포모 (FOMO - 소외 공포)",
    definition: "주가가 장대양봉으로 수직 폭등할 때, 나만 기회를 잃고 벼락거지가 될 것 같은 공포감에 눈이 멀어 꼭대기에서 충동적으로 추격 매수하는 대표적 심리 오류입니다."
  },

  // ==========================================
  // Category 3: 차트 구조 & 패턴 용어 (중급 트레이딩)
  // ==========================================
  {
    term: "지지선 (Support)",
    definition: "주가가 하락하다가 특정 가격대에만 닿으면 저가 매수 주문이 강력하게 유입되어 하락을 저지해 준 바닥 지지선입니다."
  },
  {
    term: "저항선 (Resistance)",
    definition: "주가가 상승하다가 특정 가격에 도달할 때마다 매도 물량이 폭탄처럼 쏟아져 추가 상승을 가로막는 머리 위의 저항벽입니다."
  },
  {
    term: "S/R Flip (지지저항 역할전환)",
    definition: "강한 저항선이 장대양봉으로 상방 돌파된 후, 다시 내려올 때 기존 저항선이 강력한 신규 지지선으로 성질이 180도 바뀌어 눌림목 타점을 제공하는 현상입니다."
  },
  {
    term: "추세선 (Trendline)",
    definition: "저점과 높아지는 저점들을 사선으로 연결해 그린 선(상승추세선) 또는 고점과 낮아지는 고점들을 연결한 선(하락추세선)입니다. 반드시 **3번째 터치(3rd Touch)**로 반등 지지력이 입증되어야 유효합니다."
  },
  {
    term: "평행 채널 (Parallel Channel)",
    definition: "추세선과 대칭 평행선을 반대편 고/저점에 투사하여 만든 가격 터널입니다. 채널 상하단은 지지/저항을 주며, 중심선(0.5)은 자석 지지역할을 합니다."
  },
  {
    term: "불 트랩 (Bull Trap / 가짜돌파)",
    definition: "저항선을 위로 뚫어 돌파가 일어난 것처럼 개인들을 속여 추격매수를 유도한 뒤, 대량의 매도세로 캔들을 저항선 아래로 도로 떨어뜨려 고점에 물려 가두는 세력의 하방 함정입니다."
  },
  {
    term: "베어 트랩 (Bear Trap / 가짜이탈)",
    definition: "지지선을 아래로 이탈시켜 하방 투매와 공매도를 유도한 뒤, 순식간에 거래량을 터뜨리며 지지선 위로 다시 올려 폭등을 유발하는 상방 함정입니다."
  },
  {
    term: "헤드앤숄더 (Head & Shoulders)",
    definition: "왼쪽 어깨, 머리, 오른쪽 어깨 모양의 3개 봉우리 고점 반전 패턴으로, 저점 연결 지지선(Neckline)이 아래로 무너질 때 하락 추세가 컨펌됩니다."
  },
  {
    term: "이중 바닥형 (Double Bottom)",
    definition: "바닥 저점을 두 차례 딛고 지지를 공고히 다진 후, 가운데 고점(넥라인) 저항을 상방 돌파하며 시세를 강하게 돌리는 대표적인 바닥 W자 반전 패턴입니다."
  },
  {
    term: "불 플래그 (Bull Flag)",
    definition: "장대양봉 수직 랠리(깃대) 후 우하향하는 좁은 깃발 채널 조정을 거쳐 상단선을 뚫고 나갈 때 깃대 높이만큼 2차 급등을 터뜨리는 상승 지속 패턴입니다."
  },
  {
    term: "삼각수렴 (Triangle Consolidation)",
    definition: "고점과 저점의 폭이 점점 좁혀지며 스프링처럼 힘을 응축하는 패턴입니다. 고점은 일정한데 저점이 높아지면 '상승 삼각수렴(Ascending)'으로 상방 돌파 확률이 높습니다."
  },
  {
    term: "상승 쐐기형 (Rising Wedge)",
    definition: "주가가 저점과 고점을 모두 높이며 쥐어짜듯 좁게 올라가지만, 저점 상승 각도가 더 가파른 쐐기 모양으로, 상승 동력의 소진 및 하방 파국을 알리는 약세 패턴입니다."
  },
  {
    term: "매물대 (Volume/Support Profile)",
    definition: "과거에 엄청난 수량의 거래 체결이 조밀하게 발생하여 악성 매물 및 본전 대기 심리가 밀집되어 있는 지지/저항 매물 구역입니다."
  },
  {
    term: "BOS (Break of Structure)",
    definition: "상승 추세 도중 전고점을 강한 캔들 종가로 뚫고 나가 추세가 가속 연장됨을 알리는 구조 지속 현상입니다."
  },
  {
    term: "CHoCH (Change of Character)",
    definition: "추세의 마지막 스윙 포인트가 반대 방향으로 처음 이탈되어, 기존 강한 추세가 횡보나 되돌림으로 패러다임 변화가 시작됨을 알리는 신호입니다."
  },
  {
    term: "MSB (Market Structure Break)",
    definition: "상승 추세의 고점(HH)을 유발했던 최종 높은 저점(HL) 지지선이 종가로 아래로 뚫려, 기존 상승 추세 구조가 완전히 파괴되었음을 나타내는 이정표입니다."
  },

  // ==========================================
  // Category 4: 보조지표 & 심화 개념 (프로 트레이더용)
  // ==========================================
  {
    term: "지수이동평균 (EMA)",
    definition: "최근 주가에 가중치를 두어 추세 변화를 신속하게 포착하는 이동평균선입니다. 단기 EMA 20, 중기 EMA 50, 장기 EMA 200이 정석입니다."
  },
  {
    term: "상대강도지수 (RSI)",
    definition: "가격 상승 및 하락의 강도와 속도를 0~100 범위로 수치화한 지표입니다. 보통 70 이상을 과매수(과열), 30 이하를 과매도(침체)로 해석합니다."
  },
  {
    term: "과매도 고착화 (Oversold Lock)",
    definition: "장기 폭락 원웨이 하락장 속에서 RSI가 30 이하(10~20) 구역에 장기간 누워서 탈출하지 못하는 현상입니다. 섣부른 물타기 매수를 금지하는 경고등입니다."
  },
  {
    term: "일반 상승 다이버전스 (Regular Bullish)",
    definition: "주가의 저점은 신저점을 갱신했으나(LL) RSI 저점은 올라가는(HL) 흐름 불일치로, 매도세가 완전히 바닥나 조만간 강력한 반등이 나올 변곡 시그널입니다."
  },
  {
    term: "히든 상승 다이버전스 (Hidden Bullish)",
    definition: "주가 저점은 올라가 상승 추세를 유지하는데(HL) RSI 저점은 전저점보다 낮게 조정을 마친(LL) 경우로, 추세 2차 랠리 지속을 예고합니다."
  },
  {
    term: "볼린저 밴드 스퀴즈 (Bollinger Squeeze)",
    definition: "변동성 표준편차가 급격히 수축하여 밴드 상하 폭이 바늘구멍처럼 좁아진 상태입니다. 머지않아 초대형 변동성 분출(상방/하방 빔)이 터질 폭풍전야입니다."
  },
  {
    term: "밴드 워킹 (Band Walking)",
    definition: "볼린저 밴드가 확장하면서 캔들이 밴드 상하단 테두리 선을 타고 연속적으로 강하게 밀어붙여 질주하는 강세/약세 추세 달리기 현상입니다."
  },
  {
    term: "컨플루언스 (Confluence / 중첩)",
    definition: "수평 지선, 장기 이평선, 다이버전스 등 서로 완전히 독립적인 기술적 분석 근거 3~4개가 한 자리에서 겹쳐 나타나는 초고승률 타점 구역입니다."
  },
  {
    term: "와이코프 이론 (Wyckoff Method)",
    definition: "시장의 거대 세력이 오랜 기간 매집(Accumulation)하여 시세를 폭발시키고, 고점에서 분산(Distribution)하여 투매를 유발하는 시세 순환 원리입니다."
  },
  {
    term: "스프링 (Spring)",
    definition: "와이코프 매집 박스권 후반부에 지지선을 하방 휩소 이탈시켜 개인의 손절을 통째로 털어낸 후 즉시 복귀하여 매집을 마감하고 올리는 저점 매수 타이밍입니다."
  },
  {
    term: "스톱 헌팅 (Stop Hunting)",
    definition: "세력이 대규모 매수/매도 포지션을 체결하기 위해, 개인들의 스톱로스(시장가 손절 물량)가 집중된 라인을 고의로 건드려 휩소를 유발하는 행위입니다."
  },
  {
    term: "유동성 스윕 (Liquidity Sweep)",
    definition: "스톱로스가 터지며 쏟아진 매물을 세력이 전부 받아 매집한 후, 캔들 마감 전에 가격을 순식간에 회복시켜 긴 꼬리 핀바를 남기는 휩소 흔적입니다."
  },
  {
    term: "오더블록 (Order Block)",
    definition: "대규모 시세가 위나 아래로 분출되기 직전에 세력이 주문을 깔아두어 방어한 마지막 캔들 영역으로, 향후 리테스트 시 강력한 자석 지저선 역할을 합니다."
  },
  {
    term: "FVG (Fair Value Gap / 불균형 갭)",
    definition: "장대봉 출현으로 호가창의 체결이 일방향으로만 쏠려 발생한 3캔들 공백입니다. 주가는 이 빈 틈을 메꾸기 위해 반드시 회귀하려는 성질을 띱니다."
  },
  {
    term: "피보나치 되돌림 (Fibonacci Retracement)",
    definition: "피보나치 수열 비율을 차트 수직 낙폭에 적용하여, 상승/하락 후 조정 반등이 어디까지 올지 계산하는 비율 지선입니다. (대표 레벨: 0.382, 0.5, 0.618)"
  },

  // ==========================================
  // Category 5: 리스크 & 자금 관리 용어 (계좌 생존 수학)
  // ==========================================
  {
    term: "2% 리스크 룰 (2% Rule)",
    definition: "아무리 내 분석과 예감이 확실하더라도, 1회 거래 실패 시 감수할 최대 손실액이 내 총자산의 2% 이하로 제한되도록 비중을 제어하는 리스크 원칙입니다."
  },
  {
    term: "포지션 사이징 (Position Sizing)",
    definition: "2% 룰과 기술적 손절 비율을 바탕으로, 이번 거래에 진입할 구체적 매수 수량 및 금액을 역산하여 구하는 자금 관리 공식입니다. '허용손실액 / 손절률'"
  },
  {
    term: "손익비 (Risk-Reward Ratio)",
    definition: "포지션 진입 시 감수할 예상 손실 크기 대비 얻을 수 있는 이익 크기의 비율입니다. 손익비 1:2 혹은 1:3 자리를 골라야 승률이 낮아도 계좌가 생존합니다."
  },
  {
    term: "시스템 기댓값 (Expectancy)",
    definition: "내 매매법을 수백 번 반복할 때 한 판당 기대 수익을 나타내는 통계 기대치입니다. '(승률 × 평균수익) - (패률 × 평균손실)'이 0보다 커야 복리 우상향이 가능합니다."
  },
  {
    term: "레버리지 (Leverage)",
    definition: "보증금을 걸고 증권사/거래소로부터 자금을 빌려 베팅 규모를 몇 배로 키워 거래하는 투자법입니다. 수익율도 커지지만 파산 청산 위험도 비례해 커집니다."
  },
  {
    term: "강제 청산 (Liquidation)",
    definition: "선물 거래 등 레버리지 매매 중 손실폭이 커져 유지 보증금 잔고를 건드리는 순간, 거래소가 담보 보호를 위해 포지션을 강제로 강제 종료하여 원금을 몰수하는 현상입니다."
  },
  {
    term: "추적 손절매 (Trailing Stop)",
    definition: "가격이 내 방향으로 유리하게 상승함에 따라 손절가 라인을 고점 아래 일정 마디만큼 함께 추종 상향하여, 추세 반전 시 수익 보존율을 높이는 매매 기법입니다."
  },
  {
    term: "본전 이동 (Break-even Move)",
    definition: "진입한 포지션이 1:1 손익비 지점까지 순탄하게 오를 때, 원래 걸려 있던 손절가를 최초 진입 가격 평단가로 상향 수정하여 최대 손실을 0(Zero)으로 묶는 전술입니다."
  },
  {
    term: "자산 낙폭 / 드로우다운 (Drawdown)",
    definition: "내 계좌 잔고가 역사적 최고점 대비 겪은 누적 손실 비율입니다. 계좌가 반토막(-50%) 나면 본전 복구에는 100%(두 배)의 수익이 강제 요구되는 비대칭성을 갖습니다."
  },
  {
    term: "MDD (Max Drawdown / 최대 자산낙폭)",
    definition: "특정 기간 동안 내 투자 계좌 잔고가 고점 대비 겪은 가장 뼈아픈 최대 낙폭 비율입니다. MDD를 한 자릿수(-10% 이내)로 지켜야 복리 스케일이 안 깨집니다."
  },
  {
    term: "ATR (Average True Range)",
    definition: "최근 일정 기간 캔들의 실질 등락 변동폭을 집계한 지표입니다. 변동성 노이즈에 컷당하지 않고 안전하게 잡을 정석 손절 폭 크기(예: 2*ATR)의 기준이 됩니다."
  },
  {
    term: "캘리 공식 (Kelly Criterion)",
    definition: "시스템의 승률과 손익비를 바탕으로, 파산을 원천 방지하고 자산의 장기 성장 속도를 기하학적으로 극대화할 수 있는 최적의 1회 베팅 비율을 산출하는 공식입니다."
  },

  // ==========================================
  // Category 6: 트레이더 심리 & 매매 루틴 (강철 멘탈)
  // ==========================================
  {
    term: "보복 매매 (Revenge Trading)",
    definition: "손실을 겪은 후 분노와 도파민 중독에 빠져, 잃은 돈을 한 번에 복구하려는 욕심에 비중을 두세 배 늘려 충동적으로 매매를 난사하다 하루 만에 파산하는 상태입니다."
  },
  {
    term: "일일 손실 한도 (Daily Limit)",
    definition: "하루에 감당할 최대 스톱아웃 손실액(예: 원금의 5%)입니다. 이 한도를 터치하면 당일은 모든 매매를 강제 중단하고 HTS를 꺼서 시장과 뇌를 즉각 단절시켜야 합니다."
  },
  {
    term: "매매 냉각기 (Cool-down Period)",
    definition: "큰 손실이나 연패 멘탈 붕괴 상태에서 벗어나 뇌 이성을 복구하고자 최소 1일에서 3일간 거래를 멈추고 관찰과 일지 복기만 수행하는 징벌적 격리 루틴입니다."
  },
  {
    term: "매매 일지 (Trading Journal)",
    definition: "매 거래마다 진입/청산 단가, 손절/익절가 설정 이유, 당시의 감정 상태, 원칙 준수도를 일목요연하게 기록하는 장부로, 프로 트레이더의 생존에 절대적인 핵심 도구입니다."
  },
  {
    term: "자가 감사 (Weekly Audit)",
    definition: "매주 거래 일지를 모아 내가 원칙을 어겨 잃은 '바보 비용(Dumb Money Cost)'을 계량하고, 동일한 실수의 교집합을 차단하기 위해 금지 조항을 정비하는 일요 루틴입니다."
  }
];

const supplementalDictionary: DictionaryTerm[] = [
  { term: 'OHLC', category: '차트 기초', aliases: ['시고저종'], definition: '한 캔들의 시가(Open), 고가(High), 저가(Low), 종가(Close)를 묶어 부르는 표현입니다.', example: '시가 100, 고가 110, 저가 96, 종가 108이면 강한 종가의 양봉입니다.' },
  { term: '틱 (Tick)', category: '차트 기초', definition: '가격이 움직일 수 있는 최소 단위 또는 개별 체결 한 건을 뜻합니다. 시장마다 틱 크기와 틱 가치가 다릅니다.' },
  { term: '틱 차트 (Tick Chart)', category: '차트 기초', definition: '시간이 아니라 일정 체결 건수가 쌓일 때마다 새 봉을 만드는 차트입니다.' },
  { term: '렌코 차트 (Renko Chart)', category: '차트 기초', definition: '시간을 무시하고 가격이 정해진 폭만큼 움직일 때 벽돌을 추가해 추세와 노이즈를 시각화합니다.' },
  { term: '로그 차트 (Log Scale)', category: '차트 기초', definition: '같은 퍼센트 변화가 같은 거리로 표시되는 차트 축입니다. 장기 추세 분석에 적합합니다.' },
  { term: '선형 차트 (Linear Scale)', category: '차트 기초', definition: '같은 절대 가격 차이가 같은 거리로 표시되는 축입니다. 짧고 좁은 가격 구간에 직관적입니다.' },
  { term: '몸통 (Real Body)', category: '캔들', definition: '캔들의 시가와 종가 사이 영역입니다. 길수록 해당 구간에서 한쪽 압력이 강했다는 뜻입니다.' },
  { term: '꼬리 (Wick)', category: '캔들', aliases: ['그림자'], definition: '고가·저가와 몸통 사이의 선입니다. 가격이 한때 이동했지만 되돌려진 범위를 보여줍니다.' },
  { term: '도지 (Doji)', category: '캔들', definition: '시가와 종가가 거의 같은 캔들입니다. 균형과 망설임을 나타내며 위치와 다음 봉 확인이 필요합니다.' },
  { term: '망치형 (Hammer)', category: '캔들', definition: '하락 뒤 긴 아래꼬리와 작은 상단 몸통이 나타난 캔들입니다. 저가 거절 가능성을 보여줍니다.' },
  { term: '역망치형 (Inverted Hammer)', category: '캔들', definition: '하락 뒤 긴 위꼬리와 작은 하단 몸통이 나타납니다. 매수 시도가 있었으나 다음 봉 확인이 필요합니다.' },
  { term: '교수형 (Hanging Man)', category: '캔들', definition: '상승 말기에 나타나는 긴 아래꼬리 캔들입니다. 장중 강한 매도 압력이 들어왔다는 경고가 됩니다.' },
  { term: '유성형 (Shooting Star)', category: '캔들', definition: '상승 뒤 긴 위꼬리와 약한 종가를 가진 캔들로 고가 매수 실패 가능성을 나타냅니다.' },
  { term: '장대봉 (Marubozu)', category: '캔들', definition: '꼬리가 거의 없고 몸통이 매우 긴 캔들입니다. 한 방향의 강한 주도권을 보여줍니다.' },
  { term: '상승 장악형 (Bullish Engulfing)', category: '캔들', definition: '양봉 몸통이 직전 음봉 몸통을 덮는 패턴입니다. 하락 후 주요 지지에서 의미가 커집니다.' },
  { term: '하락 장악형 (Bearish Engulfing)', category: '캔들', definition: '음봉 몸통이 직전 양봉 몸통을 덮는 패턴입니다. 상승 후 주요 저항에서 주의 신호입니다.' },
  { term: '하라미 (Harami)', category: '캔들', definition: '큰 몸통 안에 다음 작은 몸통이 포함되는 패턴으로 모멘텀 둔화와 변동성 압축을 보여줍니다.' },
  { term: '샛별형 (Morning Star)', category: '캔들', definition: '하락 봉, 망설임 봉, 강한 상승 확인 봉으로 구성되는 3봉 반전 패턴입니다.' },
  { term: '석별형 (Evening Star)', category: '캔들', definition: '상승 봉, 망설임 봉, 강한 하락 확인 봉으로 구성되는 3봉 반전 패턴입니다.' },
  { term: '적삼병 (Three White Soldiers)', category: '캔들', definition: '종가가 연속 상승하는 세 개의 강한 양봉으로 지속적인 매수 우위를 보여줍니다.' },
  { term: '흑삼병 (Three Black Crows)', category: '캔들', definition: '종가가 연속 하락하는 세 개의 강한 음봉으로 지속적인 매도 우위를 보여줍니다.' },
  { term: '인사이드 바 (Inside Bar)', category: '캔들', definition: '현재 캔들의 고저가가 이전 캔들 범위 안에 있는 압축 패턴입니다.' },
  { term: '아웃사이드 바 (Outside Bar)', category: '캔들', definition: '현재 캔들의 고저가가 이전 캔들 범위를 모두 넘는 확장 패턴입니다.' },
  { term: '스윙 고점 (Swing High)', category: '시장 구조', definition: '주변 가격보다 높아 단기적인 방향 전환이 나타난 고점입니다.' },
  { term: '스윙 저점 (Swing Low)', category: '시장 구조', definition: '주변 가격보다 낮아 단기적인 방향 전환이 나타난 저점입니다.' },
  { term: 'HH (Higher High)', category: '시장 구조', definition: '이전 주요 고점보다 더 높은 고점으로 상승 구조의 지속을 나타냅니다.' },
  { term: 'HL (Higher Low)', category: '시장 구조', definition: '이전 주요 저점보다 더 높은 저점으로 상승 추세의 방어 지점입니다.' },
  { term: 'LH (Lower High)', category: '시장 구조', definition: '이전 주요 고점보다 낮은 고점으로 하락 추세의 매도 방어 지점입니다.' },
  { term: 'LL (Lower Low)', category: '시장 구조', definition: '이전 주요 저점보다 더 낮은 저점으로 하락 구조의 지속을 나타냅니다.' },
  { term: '외부 구조 (External Structure)', category: '시장 구조', definition: '상위 시간봉이나 큰 스윙으로 정의한 시장의 주요 방향 구조입니다.' },
  { term: '내부 구조 (Internal Structure)', category: '시장 구조', definition: '큰 추세 안에서 나타나는 작은 스윙과 조정 구조입니다.' },
  { term: '구조 전환 (Structure Shift)', category: '시장 구조', definition: '기존 추세를 지키던 스윙이 무너지고 반대 방향 고저점 순서가 형성되는 과정입니다.' },
  { term: 'S/R Flip', category: '시장 구조', aliases: ['역할 전환'], definition: '돌파된 저항이 지지로, 깨진 지지가 저항으로 바뀌는 현상입니다.' },
  { term: '가격 수용 (Acceptance)', category: '시장 구조', definition: '가격이 특정 레벨 밖에서 여러 번 마감하고 거래를 지속해 새 가격대를 인정하는 상태입니다.' },
  { term: '가격 거절 (Rejection)', category: '시장 구조', definition: '특정 가격을 잠시 터치하거나 넘었지만 빠르게 되돌아와 그 가격대를 받아들이지 못한 상태입니다.' },
  { term: '균형 구간 (Balance)', category: '시장 구조', definition: '매수와 매도 압력이 비슷해 가격이 박스 안에서 왕복하는 상태입니다.' },
  { term: '불균형 (Imbalance)', category: '시장 구조', definition: '한쪽 주문이 우세해 가격이 빠르게 이동하고 양방향 거래가 충분히 이루어지지 않은 상태입니다.' },
  { term: '추진 파동 (Impulse)', category: '시장 구조', definition: '추세 방향으로 크고 빠르게 진행되는 가격 움직임입니다.' },
  { term: '조정 파동 (Correction)', category: '시장 구조', definition: '주 추세 반대 방향으로 나타나는 상대적으로 느리고 작은 되돌림입니다.' },
  { term: '변위 (Displacement)', category: '시장 구조', definition: '평균보다 큰 캔들과 속도로 주요 레벨을 이탈하는 강한 방향성 움직임입니다.' },
  { term: '압축 (Compression)', category: '시장 구조', definition: '고저점 폭과 변동성이 점차 줄어 에너지가 모이는 상태입니다.' },
  { term: '확장 (Expansion)', category: '시장 구조', definition: '압축 이후 가격 범위와 변동성이 빠르게 커지는 상태입니다.' },
  { term: '넥라인 (Neckline)', category: '차트 패턴', definition: '헤드앤숄더나 더블탑·바텀에서 패턴 완성을 판단하는 핵심 지지·저항선입니다.' },
  { term: '헤드앤숄더 (Head and Shoulders)', category: '차트 패턴', definition: '왼쪽 어깨, 더 높은 머리, 더 낮은 오른쪽 어깨로 상승 모멘텀 약화를 보여주는 반전 패턴입니다.' },
  { term: '역헤드앤숄더 (Inverse H&S)', category: '차트 패턴', definition: '하락 추세 말기에 나타나는 헤드앤숄더의 반대 형태로 넥라인 돌파가 확인 조건입니다.' },
  { term: '더블탑 (Double Top)', category: '차트 패턴', definition: '비슷한 고점에서 두 번 돌파에 실패한 뒤 넥라인을 깨는 M자형 반전 구조입니다.' },
  { term: '더블바텀 (Double Bottom)', category: '차트 패턴', definition: '비슷한 저점에서 두 번 지지된 뒤 넥라인을 넘는 W자형 반전 구조입니다.' },
  { term: '삼각수렴 (Triangle)', category: '차트 패턴', definition: '고점과 저점의 간격이 줄며 가격이 한 점으로 압축되는 패턴입니다.' },
  { term: '상승 삼각형 (Ascending Triangle)', category: '차트 패턴', definition: '수평 저항과 높아지는 저점으로 매수 압력이 누적되는 패턴입니다.' },
  { term: '하락 삼각형 (Descending Triangle)', category: '차트 패턴', definition: '수평 지지와 낮아지는 고점으로 매도 압력이 누적되는 패턴입니다.' },
  { term: '쐐기형 (Wedge)', category: '차트 패턴', definition: '두 추세선이 같은 방향으로 기울며 수렴하는 패턴으로 기울기와 이전 추세에 따라 해석합니다.' },
  { term: '플래그 (Flag)', category: '차트 패턴', definition: '강한 추진 파동 뒤 반대 방향의 짧고 완만한 채널이 이어지는 지속 패턴입니다.' },
  { term: '페넌트 (Pennant)', category: '차트 패턴', definition: '강한 추진 뒤 작은 대칭 삼각형 형태로 빠르게 압축되는 지속 패턴입니다.' },
  { term: '컵앤핸들 (Cup and Handle)', category: '차트 패턴', definition: '둥근 바닥 뒤 얕은 손잡이 조정이 나타나는 중장기 상승 지속 패턴입니다.' },
  { term: '라운딩 바텀 (Rounding Bottom)', category: '차트 패턴', definition: '하락 압력이 서서히 줄고 매수 압력이 늘며 둥근 바닥을 만드는 장기 전환 구조입니다.' },
  { term: '측정 목표가 (Measured Move)', category: '차트 패턴', definition: '패턴 높이나 이전 추진 파동 길이를 돌파점에서 투영한 참고 목표값입니다.' },
  { term: '시장가 주문 (Market Order)', category: '주문·체결', definition: '가격보다 즉시 체결을 우선하는 주문입니다. 유동성이 낮으면 슬리피지가 커질 수 있습니다.' },
  { term: '지정가 주문 (Limit Order)', category: '주문·체결', definition: '정한 가격 또는 더 유리한 가격에서만 체결되는 주문입니다. 미체결 가능성이 있습니다.' },
  { term: '스탑 주문 (Stop Order)', category: '주문·체결', definition: '지정한 트리거 가격에 도달하면 시장가 주문으로 활성화되는 주문입니다.' },
  { term: '스탑리밋 주문 (Stop Limit)', category: '주문·체결', definition: '트리거 가격 도달 후 지정가 주문을 내는 방식으로 가격은 통제하지만 미체결될 수 있습니다.' },
  { term: 'OCO 주문', category: '주문·체결', definition: '한 주문이 체결되면 다른 주문이 자동 취소되는 묶음 주문입니다. 익절과 손절을 함께 걸 때 사용합니다.' },
  { term: 'IOC 주문', category: '주문·체결', definition: '즉시 체결 가능한 수량만 체결하고 나머지는 취소하는 주문 조건입니다.' },
  { term: 'FOK 주문', category: '주문·체결', definition: '전체 수량을 즉시 체결할 수 있을 때만 실행하고 그렇지 않으면 전부 취소합니다.' },
  { term: '메이커 (Maker)', category: '주문·체결', definition: '호가창에 새 유동성을 추가하는 지정가 주문 참여자입니다.' },
  { term: '테이커 (Taker)', category: '주문·체결', definition: '기존 호가를 즉시 체결해 유동성을 가져가는 시장가성 주문 참여자입니다.' },
  { term: '호가창 (Order Book)', category: '주문·체결', definition: '가격별 매수·매도 대기 주문과 수량을 보여주는 화면입니다.' },
  { term: '시장 깊이 (Market Depth)', category: '주문·체결', definition: '여러 호가에 쌓인 주문량으로 큰 주문을 흡수할 수 있는 정도를 나타냅니다.' },
  { term: '스프레드 (Bid-Ask Spread)', category: '주문·체결', definition: '최우선 매수호가와 최우선 매도호가의 차이로 즉시 거래 비용의 일부입니다.' },
  { term: '슬리피지 (Slippage)', category: '주문·체결', definition: '예상 주문 가격과 실제 평균 체결 가격의 차이입니다.' },
  { term: 'VWAP', category: '지표', aliases: ['거래량가중평균가격'], definition: '가격에 거래량을 가중해 계산한 세션 평균 체결 가격입니다.' },
  { term: 'Anchored VWAP', category: '지표', aliases: ['앵커드 VWAP'], definition: '특정 고점, 저점, 이벤트일부터 계산을 시작한 거래량가중평균가격입니다.' },
  { term: 'SMA', category: '지표', aliases: ['단순이동평균'], definition: '일정 기간 가격에 동일한 가중치를 주어 계산한 이동평균입니다.' },
  { term: 'WMA', category: '지표', aliases: ['가중이동평균'], definition: '최근 가격에 선형적으로 더 큰 가중치를 주는 이동평균입니다.' },
  { term: 'MACD', category: '지표', definition: '빠른 EMA와 느린 EMA의 차이로 추세 모멘텀과 변화 속도를 보여주는 지표입니다.' },
  { term: '스토캐스틱 (Stochastic)', category: '지표', definition: '최근 가격 범위 안에서 현재 종가의 위치를 0~100으로 나타내는 모멘텀 지표입니다.' },
  { term: 'CCI', category: '지표', definition: '현재 가격이 통계적 평균에서 얼마나 멀리 벗어났는지 나타내는 모멘텀 지표입니다.' },
  { term: 'ADX', category: '지표', definition: '추세 방향과 무관하게 추세의 강도를 나타냅니다. 일반적으로 값이 높을수록 방향성이 강합니다.' },
  { term: 'DMI', category: '지표', definition: '+DI와 -DI로 상승·하락 방향 압력의 상대 크기를 비교하는 지표입니다.' },
  { term: '켈트너 채널 (Keltner Channel)', category: '지표', definition: 'EMA를 중심으로 ATR 기반 상하 밴드를 표시하는 변동성 채널입니다.' },
  { term: '일목균형표 (Ichimoku Cloud)', category: '지표', definition: '전환선, 기준선, 선행스팬, 후행스팬으로 추세·균형·지지저항을 함께 보는 지표입니다.' },
  { term: 'OBV', category: '지표', definition: '상승일 거래량은 더하고 하락일 거래량은 빼서 누적 수급 방향을 보는 지표입니다.' },
  { term: 'MFI', category: '지표', definition: '가격과 거래량을 함께 사용해 자금 유입·유출 압력을 0~100으로 표현합니다.' },
  { term: 'CMF', category: '지표', definition: '종가 위치와 거래량을 결합해 일정 기간 매집·분산 압력을 추정합니다.' },
  { term: '볼륨 프로파일 (Volume Profile)', category: '거래량', definition: '시간이 아니라 가격대별로 체결된 거래량을 수평 막대로 표시합니다.' },
  { term: 'POC (Point of Control)', category: '거래량', definition: '볼륨 프로파일 구간에서 가장 많은 거래가 체결된 가격입니다.' },
  { term: 'VAH (Value Area High)', category: '거래량', definition: '전체 거래량의 약 70%가 포함되는 가치 영역의 상단입니다.' },
  { term: 'VAL (Value Area Low)', category: '거래량', definition: '전체 거래량의 약 70%가 포함되는 가치 영역의 하단입니다.' },
  { term: 'HVN (High Volume Node)', category: '거래량', definition: '거래가 많이 쌓여 시장이 가격을 수용한 고거래량 구간입니다.' },
  { term: 'LVN (Low Volume Node)', category: '거래량', definition: '거래가 적어 가격이 빠르게 통과한 저거래량 구간입니다.' },
  { term: 'RVOL (Relative Volume)', category: '거래량', definition: '현재 거래량을 과거 같은 기준의 평균 거래량과 비교한 상대 거래량입니다.' },
  { term: '델타 (Volume Delta)', category: '거래량', definition: '공격적 매수 체결량과 공격적 매도 체결량의 차이입니다.' },
  { term: '누적 델타 (CVD)', category: '거래량', definition: '체결 델타를 누적해 공격적 매수·매도 압력의 흐름을 보여줍니다.' },
  { term: '미결제약정 (Open Interest)', category: '파생상품', definition: '아직 청산되지 않은 선물·옵션 계약의 총수입니다.' },
  { term: '선물 (Futures)', category: '파생상품', definition: '미래 특정 시점의 가격으로 자산을 거래하기로 약정한 표준화 계약입니다.' },
  { term: '무기한 선물 (Perpetual Futures)', category: '파생상품', definition: '만기 없이 펀딩비로 현물 가격과 괴리를 조정하는 선물형 계약입니다.' },
  { term: '펀딩비 (Funding Rate)', category: '파생상품', definition: '무기한 선물 가격을 현물에 가깝게 유지하기 위해 롱과 숏 사이에 주기적으로 주고받는 비용입니다.' },
  { term: '베이시스 (Basis)', category: '파생상품', definition: '선물 가격과 현물 가격의 차이입니다.' },
  { term: '콘탱고 (Contango)', category: '파생상품', definition: '선물 가격이 현물보다 높은 시장 구조입니다.' },
  { term: '백워데이션 (Backwardation)', category: '파생상품', definition: '선물 가격이 현물보다 낮은 시장 구조입니다.' },
  { term: '교차 마진 (Cross Margin)', category: '파생상품', definition: '계정의 가용 증거금을 여러 포지션이 함께 사용해 청산을 방어하는 방식입니다.' },
  { term: '격리 마진 (Isolated Margin)', category: '파생상품', definition: '특정 포지션에 할당한 증거금만 위험에 노출하는 방식입니다.' },
  { term: '옵션 (Option)', category: '파생상품', definition: '정해진 가격으로 기초자산을 사거나 팔 수 있는 권리를 거래하는 계약입니다.' },
  { term: '콜 옵션 (Call)', category: '파생상품', definition: '만기까지 행사가격으로 기초자산을 살 수 있는 권리입니다.' },
  { term: '풋 옵션 (Put)', category: '파생상품', definition: '만기까지 행사가격으로 기초자산을 팔 수 있는 권리입니다.' },
  { term: '행사가격 (Strike Price)', category: '파생상품', definition: '옵션 권리를 행사할 때 적용되는 미리 정한 가격입니다.' },
  { term: '내재변동성 (IV)', category: '파생상품', definition: '옵션 가격에 반영된 시장의 미래 변동성 기대치입니다.' },
  { term: '델타 (Option Delta)', category: '파생상품', definition: '기초자산 가격이 1만큼 변할 때 옵션 가격이 얼마나 변하는지 나타냅니다.' },
  { term: '감마 (Gamma)', category: '파생상품', definition: '기초자산 가격 변화에 따라 옵션 델타가 얼마나 변하는지 나타냅니다.' },
  { term: '세타 (Theta)', category: '파생상품', definition: '시간 경과로 옵션 가치가 하루에 얼마나 감소하는지 나타냅니다.' },
  { term: '베가 (Vega)', category: '파생상품', definition: '내재변동성이 변할 때 옵션 가격이 얼마나 민감하게 움직이는지 나타냅니다.' },
  { term: 'R 멀티플 (R-Multiple)', category: '리스크', definition: '한 거래 결과를 사전에 허용한 손실 1R의 배수로 표현한 값입니다.' },
  { term: '손익분기 승률 (Break-even Win Rate)', category: '리스크', definition: '손익비와 비용을 고려했을 때 기대값이 0이 되는 최소 승률입니다.' },
  { term: 'MAE', category: '리스크', aliases: ['최대 불리 이동'], definition: '진입 후 청산 전까지 포지션이 가장 불리하게 움직인 최대 폭입니다.' },
  { term: 'MFE', category: '리스크', aliases: ['최대 유리 이동'], definition: '진입 후 청산 전까지 포지션이 가장 유리하게 움직인 최대 폭입니다.' },
  { term: '파산 확률 (Risk of Ruin)', category: '리스크', definition: '전략의 승률, 손익비, 위험 비율로 계좌가 감당 불가능한 수준까지 줄어들 확률입니다.' },
  { term: '프로핏 팩터 (Profit Factor)', category: '리스크', definition: '총이익을 총손실로 나눈 값입니다. 1보다 크면 비용 전 이익이 손실보다 큽니다.' },
  { term: '샤프 비율 (Sharpe Ratio)', category: '리스크', definition: '평균 초과수익을 전체 수익률 변동성으로 나눈 위험 조정 성과 지표입니다.' },
  { term: '소르티노 비율 (Sortino Ratio)', category: '리스크', definition: '전체 변동성 대신 하방 변동성만 사용해 위험 조정 수익을 평가합니다.' },
  { term: '칼마 비율 (Calmar Ratio)', category: '리스크', definition: '연환산 수익률을 최대 낙폭으로 나눈 지표입니다.' },
  { term: '오픈 리스크 (Open Risk)', category: '리스크', definition: '현재 열린 모든 포지션이 손절될 경우 발생할 총 예상 손실입니다.' },
  { term: '포트폴리오 히트 (Portfolio Heat)', category: '리스크', definition: '동시에 열려 있는 포지션들의 총 위험을 계좌 대비 비율로 나타냅니다.' },
  { term: '헤지 (Hedge)', category: '리스크', definition: '다른 포지션이나 파생상품으로 기존 보유 자산의 위험을 일부 상쇄하는 행동입니다.' },
  { term: '상관계수 (Correlation)', category: '리스크', definition: '두 자산 수익률이 함께 움직이는 정도를 -1부터 1까지 나타냅니다.' },
  { term: '베타 (Beta)', category: '리스크', definition: '특정 자산이 시장 지수 움직임에 얼마나 민감한지 나타내는 값입니다.' },
  { term: 'FOMO', category: '심리·검증', aliases: ['놓칠 두려움'], definition: '기회를 놓칠 것 같은 두려움 때문에 기준을 낮추고 뒤늦게 추격하는 심리입니다.' },
  { term: '손실회피 (Loss Aversion)', category: '심리·검증', definition: '같은 크기의 이익보다 손실을 더 크게 느껴 손절을 미루고 수익을 일찍 확정하는 편향입니다.' },
  { term: '확증편향 (Confirmation Bias)', category: '심리·검증', definition: '자신의 포지션을 지지하는 정보만 찾고 반대 증거를 무시하는 편향입니다.' },
  { term: '최신편향 (Recency Bias)', category: '심리·검증', definition: '최근 몇 거래 결과를 장기 통계보다 과도하게 중요하게 보는 편향입니다.' },
  { term: '앵커링 (Anchoring)', category: '심리·검증', definition: '매수가나 과거 고점 같은 특정 숫자에 판단이 고정되는 편향입니다.' },
  { term: '과잉확신 (Overconfidence)', category: '심리·검증', definition: '연속 수익 뒤 자신의 예측 능력을 실제보다 높게 평가해 위험을 늘리는 편향입니다.' },
  { term: '처분효과 (Disposition Effect)', category: '심리·검증', definition: '수익 포지션은 빨리 팔고 손실 포지션은 오래 보유하는 행동 편향입니다.' },
  { term: '틸트 (Tilt)', category: '심리·검증', definition: '손실이나 흥분으로 감정이 의사결정을 지배해 평소 규칙을 잃은 상태입니다.' },
  { term: '오버트레이딩 (Overtrading)', category: '심리·검증', definition: '명확한 우위 없이 지나치게 자주 거래해 비용과 실수를 늘리는 행동입니다.' },
  { term: '백테스트 (Backtest)', category: '심리·검증', definition: '과거 데이터에 동일한 거래 규칙을 적용해 성과와 위험을 검증하는 과정입니다.' },
  { term: '포워드 테스트 (Forward Test)', category: '심리·검증', definition: '과거 최적화에 쓰지 않은 미래 구간 또는 실시간 모의 환경에서 전략을 검증하는 과정입니다.' },
  { term: '워크포워드 분석 (Walk-forward)', category: '심리·검증', definition: '학습 구간과 검증 구간을 시간 순서대로 이동시키며 전략 안정성을 평가합니다.' },
  { term: '과최적화 (Overfitting)', category: '심리·검증', definition: '과거 데이터의 우연한 노이즈까지 맞춰 미래 성과가 무너지는 상태입니다.' },
  { term: '생존자 편향 (Survivorship Bias)', category: '심리·검증', definition: '현재 살아남은 종목만 분석해 상장폐지나 실패 사례를 제외하는 편향입니다.' },
  { term: '미래참조 편향 (Look-ahead Bias)', category: '심리·검증', definition: '백테스트 시점에는 알 수 없던 미래 정보를 실수로 사용하는 오류입니다.' },
  { term: '표본 수 (Sample Size)', category: '심리·검증', definition: '전략 통계를 계산하는 거래 개수입니다. 너무 적으면 승률과 기대값의 불확실성이 큽니다.' },
  { term: '아웃 오브 샘플 (Out-of-Sample)', category: '심리·검증', definition: '전략 개발과 최적화에 사용하지 않고 최종 검증용으로 남겨둔 데이터 구간입니다.' }
];

export const dictionary: DictionaryTerm[] = Array.from(
  new Map([...baseDictionary, ...supplementalDictionary].map(item => [item.term, item])).values()
);

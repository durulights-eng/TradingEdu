import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TheoryReaderProps {
  theoryFile: string;
  onBack: () => void;
}

interface TheoryDoc {
  title: string;
  category: string;
  content: React.ReactNode;
}

export const TheoryReader: React.FC<TheoryReaderProps> = ({ theoryFile, onBack }) => {
  const documents: Record<string, TheoryDoc> = {
    '01_candlestick_basics.md': {
      category: '캔들스틱 기초',
      title: '01. Candlestick Chart Basics',
      content: (
        <div className="theory-markdown">
          <h1>캔들스틱 기초 및 패턴 이론</h1>
          <p>이 문서는 주식 차트 분석의 가장 기본이자 핵심인 캔들스틱(Candlestick)의 구조와 해석 방법을 다룹니다.</p>
          
          <h2>1. 캔들스틱의 구조 (Anatomy of a Candlestick)</h2>
          <p>하나의 캔들은 특정 시간(예: 1일, 1시간, 15분) 동안의 가격 움직임을 시각화하며 네 가지 가격으로 구성됩니다.</p>
          <ul>
            <li><strong>시가 (Open)</strong>: 해당 봉이 시작할 때의 가격</li>
            <li><strong>종가 (Close)</strong>: 해당 봉이 마감할 때의 가격</li>
            <li><strong>고가 (High)</strong>: 해당 기간 중 가장 높았던 가격 (위꼬리)</li>
            <li><strong>저가 (Low)</strong>: 해당 기간 중 가장 낮았던 가격 (아래꼬리)</li>
            <li><strong>양봉 (Bullish)</strong>: 종가 &gt; 시가 (초록/빨강) - 매수세 승리</li>
            <li><strong>음봉 (Bearish)</strong>: 종가 &lt; 시가 (빨강/파랑) - 매도세 승리</li>
          </ul>

          <h2>2. 주요 단일 캔들 패턴</h2>
          <blockquote>
            <strong>망치형 (Hammer)</strong><br />
            하락 추세 바닥에서 아래꼬리가 몸통 길이의 2배 이상 길게 형성된 형태. 장중 매도세가 밀어붙였으나, 강력한 저가 매수세가 유입되어 시가 부근까지 끌어올린 반전 신호입니다.
          </blockquote>
          <blockquote>
            <strong>역망치형 (Inverted Hammer)</strong><br />
            몸통이 바닥에 있고 위꼬리가 2배 이상 긴 형태로, 하락 추세를 멈추고 상승 전환을 시도하려는 시장 의지를 나타냅니다.
          </blockquote>

          <h2>3. 복합 캔들 패턴</h2>
          <p><strong>상승 장악형 (Bullish Engulfing)</strong>: 하락 끝자락에서 전날 음봉을 큰 양봉이 완전히 감싸며 장악하는 신호. 강력한 상승 반전 예고.</p>
          <p><strong>하락 장악형 (Bearish Engulfing)</strong>: 상승 고점에서 직전 양봉을 큰 음봉이 덮어버리는 신호. 하락 전환 예고.</p>
        </div>
      )
    },
    '02_support_resistance.md': {
      category: '지지와 저항',
      title: '02. Support & Resistance',
      content: (
        <div className="theory-markdown">
          <h1>지지와 저항 이론</h1>
          <p>지지와 저항은 기술적 분석의 바이블이며, 트레이더들의 매수와 매도 주문이 밀집되어 심리적인 벽을 형성하는 구간입니다.</p>
          
          <h2>1. 지지와 저항의 개념</h2>
          <ul>
            <li><strong>지지선 (Support)</strong>: 주가가 하락할 때 특정 가격대 이하로 떨어지지 않도록 매수수요가 유입되어 받쳐주는 구간.</li>
            <li><strong>저항선 (Resistance)</strong>: 주가가 상승할 때 특정 가격대 이상으로 올라가지 못하게 매물공급이 집중되어 짓누르는 구간.</li>
          </ul>

          <h2>2. 역할 전환 (Role Reversal)</h2>
          <blockquote>
            <strong>저항선 돌파 후 지지선으로 변환</strong><br />
            강력했던 저항선을 강하게 뚫어내면, 그 가격선은 새로운 지지선으로 바뀝니다. 이를 '리테스트(Retest) 눌림목'이라 부르며 최고의 매수 타점 중 하나입니다.
          </blockquote>

          <h2>3. 가짜 돌파 (False Breakout / Bull Trap)</h2>
          <p>저항선을 뚫는 척하면서 거래량이 실린 장대양봉이 나왔다가, 이내 저항선 밑으로 급락하는 경우입니다. 돌파 후 지지력 테스트를 반드시 거쳐야 속임수를 피할 수 있습니다.</p>
        </div>
      )
    },
    '03_trendlines_channels.md': {
      category: '추세선과 채널',
      title: '03. Trendlines & Channels',
      content: (
        <div className="theory-markdown">
          <h1>추세선과 채널 이론</h1>
          <p>시장은 언제나 추세를 형성하며 움직입니다. 추세선을 통해 방향을 정의하고 포지션 진입/청산 타점을 결정합니다.</p>
          
          <h2>1. 추세선 그리는 법</h2>
          <ul>
            <li><strong>상승 추세선</strong>: 높아지는 저점(Higher Lows)들을 연결한 선으로, 동적 지지선 역할을 합니다.</li>
            <li><strong>하락 추세선</strong>: 낮아지는 고점(Lower Highs)들을 연결한 선으로, 동적 저항선 역할을 합니다.</li>
            <li><strong>신뢰성 규칙</strong>: 최소 3번째 터치(3rd Touch)가 일어나 반등/하락에 성공해야만 시장이 인정하는 유효한 추세선이 됩니다.</li>
          </ul>

          <h2>2. 평행 채널 (Parallel Channels)</h2>
          <p>추세선과 평행하게 반대편 고점/저점을 연결하면 채널이 형성되어 채널 하단 지지선 부근 매수, 채널 상단 저항선 부근 매도하는 박스 파동 매매가 수월해집니다.</p>

          <h2>3. 추세 돌파와 붕괴</h2>
          <p><strong>돌파 (Breakout)</strong>: 하락 추세선을 주가 몸통(종가)이 상향 돌파하면 하락 추세가 종료되고 상승 반전을 의미.</p>
          <p><strong>붕괴 (Breakdown)</strong>: 상승 추세선 아래로 이탈하면 매수세가 무너진 것으로 해석하여 비중 축소 및 즉각 손절 필요.</p>
        </div>
      )
    },
    '04_chart_patterns.md': {
      category: '차트 패턴',
      title: '04. Chart Patterns',
      content: (
        <div className="theory-markdown">
          <h1>패턴 매매 이론</h1>
          <p>차트 패턴은 과거 수백만 명의 트레이더들의 행동 양식과 심리가 차트에 기하학적 형태로 박제된 결과물입니다.</p>
          
          <h2>1. 반전 패턴 (Reversal Patterns)</h2>
          <p><strong>헤드앤숄더 (Head & Shoulders)</strong>: 상승 끝자락에서 세 개의 고점을 형성. 왼쪽어깨 - 머리 - 오른쪽어깨가 완성되고 고점 밑 지지선인 <strong>넥라인(Neckline)</strong>을 하방 이탈할 때 강력한 숏 매도 시그널이 됩니다.</p>
          <p><strong>이중 천정형/바닥형 (Double Top/Bottom)</strong>: 고점/저점을 두 번 다져 저항/지지를 강하게 확인하고 반대 방향으로 추세가 꺾이는 대표 패턴.</p>

          <h2>2. 지속 패턴 (Continuation Patterns)</h2>
          <p><strong>불 플래그 (Bull Flag)</strong>: 강한 수직 상승(깃대) 후, 완만하게 우하향하는 채널형(깃발) 횡보를 하다가 상단을 뚫으면 다시 깃대 크기만큼 폭발적으로 2차 상승 랠리를 시작하는 패턴.</p>
        </div>
      )
    },
    '05_technical_indicators.md': {
      category: '보조지표',
      title: '05. Technical Indicators',
      content: (
        <div className="theory-markdown">
          <h1>기술적 보조지표 이론</h1>
          <p>보조지표는 캔들과 거래량 데이터를 가공하여 추세의 세기, 과매수/과매도, 추세 전환 시점을 가시화합니다.</p>
          
          <h2>1. 이동평균선 (Moving Averages)</h2>
          <ul>
            <li><strong>지수이동평균 (EMA)</strong>: 최근 가격에 가중치를 두어 시세 변동에 민감하게 반응하여 많이 애용됩니다.</li>
            <li><strong>정배열</strong>: 단기 &gt; 중기 &gt; 장기 순 정렬. 강력한 상승 추세이므로 매수 관점 유지.</li>
            <li><strong>골든크로스 / 데드크로스</strong>: 단기 이평선이 장기 이평선을 크로스할 때 추세 전환의 첫 신호.</li>
          </ul>

          <h2>2. 상대강도지수 (RSI)</h2>
          <p><strong>RSI &gt;= 70</strong>: 과매수(과도한 급등, 추격매수 주의)</p>
          <p><strong>RSI &lt;= 30</strong>: 과매도(과도한 급락, 반등 준비)</p>
          <blockquote>
            <strong>RSI 다이버전스 (Divergence)</strong><br />
            주가 저점은 낮아지나 RSI 저점은 높아지는 불일치 현상(상승 다이버전스)은 하방 매도세가 약해져 강한 반등이 임박했음을 가리키는 신뢰도 극상의 추세 전환 신호입니다.
          </blockquote>
        </div>
      )
    },
    '06_risk_management.md': {
      category: '리스크 관리',
      title: '06. Risk Management & Psychology',
      content: (
        <div className="theory-markdown">
          <h1>리스크 관리 및 트레이딩 심리</h1>
          <p>자금 관리와 심리 통제에 실패하면, 100번을 잘해도 단 한 번의 실패로 계좌가 전파됩니다.</p>
          
          <h2>1. 손익비 (Risk-to-Reward Ratio)</h2>
          <p>내가 감수할 손절 폭 대비 챙길 익절 폭의 비례. 최소 1:2 비율의 매매만 진입합니다. 손익비가 1:2이면 10번 중 4번만 성공(승률 40%)해도 계좌 잔고는 늘어납니다.</p>

          <h2>2. 2% 룰 (Position Sizing)</h2>
          <p>한 번의 매매에서 전재산의 2% 초과로 손실을 입지 않도록 사전에 매수 수량을 공식화하는 방법입니다.</p>
          <blockquote>
            <strong>진입 금액 공식</strong><br />
            <code>(총 자산 * 0.02) / 손절 비율</code>
          </blockquote>
          <p>총자산 1,000만 원이고, 손절 라인이 -4%라면, <code>20만 원 / 0.04 = 500만 원</code> 만큼만 진입하면 됩니다. 손절을 맞아도 정확히 20만 원(총액의 2%)만 잃고 끝납니다.</p>
        </div>
      )
    }
  };

  const doc = documents[theoryFile] || {
    category: '기타 이론',
    title: 'Theory Doc',
    content: <div className="theory-markdown"><p>해당 문서를 찾을 수 없습니다.</p></div>
  };

  return (
    <div className="theory-wrapper">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
        <button className="btn-close" onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ArrowLeft size={20} />
          <span>목록으로</span>
        </button>
        <span className="category-tag">{doc.category}</span>
      </div>
      <div className="theory-content">
        {doc.content}
      </div>
    </div>
  );
};

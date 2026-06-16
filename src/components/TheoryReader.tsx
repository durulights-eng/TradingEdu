import React from 'react';
import { ArrowLeft, Lightbulb, ShieldAlert } from 'lucide-react';

interface TheoryReaderProps {
  theoryFile: string;
  onBack?: () => void;
  isInline?: boolean;
}

interface TheoryDoc {
  title: string;
  category: string;
  content: React.ReactNode;
}

export const TheoryReader: React.FC<TheoryReaderProps> = ({ theoryFile, onBack, isInline = false }) => {
  const documents: Record<string, TheoryDoc> = {
    '01_chart_market_basics.md': {
      category: 'A. 차트와 시장 기초',
      title: '01. 차트와 시장 기초',
      content: (
        <div className="theory-markdown">
          <h1>01. 차트와 시장 기초 (Chart & Market Basics)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            트레이딩의 첫걸음은 차트를 단순한 선이나 막대가 아니라, 시장 참여자들의 매수와 매도 힘이 실시간으로 부딪히며 만들어낸 가격의 발자취로 이해하는 것입니다.
          </p>

          <h2>1. 차트의 구성 요소와 물리적 해석</h2>
          <h3>A.1.1 가격의 표현: OHLC와 봉차트</h3>
          <p>모든 거래 세션(분, 시간, 일 단위)은 네 가지 핵심 가격(시가, 고가, 저가, 종가)으로 요약되며 몸통(Body)과 꼬리(Wick)로 힘의 방향을 나타냅니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc', marginBottom: '14px' }}>
            <li><strong>시가 (Open)</strong>: 세션이 시작될 때 최초로 체결된 가격. 당일 시장의 초기 합의점이자 심리적 기준선입니다.</li>
            <li><strong>고가 (High)</strong>: 세션 중 매수 강도가 밀어 올린 가장 높은 가격. 매도 공급이 압도한 일시 저항벽입니다.</li>
            <li><strong>저가 (Low)</strong>: 세션 중 매도 압력이 짓누른 가장 낮은 가격. 매수세가 지탱한 일시 지지벽입니다.</li>
            <li><strong>종가 (Close)</strong>: 세션 마감 시점에 최종적으로 합의된 체결 가격. 하루 동안의 치열한 매공방의 최종 승자를 상징하며, 기관들의 당일 정산 및 포지션 마감의 절대적 기준이 됩니다.</li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-muted)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '120px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)', marginBottom: '8px' }}>양봉 (Bullish)</span>
                <div style={{ width: '2.5px', height: '25px', background: 'var(--color-bullish)' }} />
                <div style={{ width: '48px', height: '85px', background: 'rgba(16, 185, 129, 0.12)', border: '2.5px solid var(--color-bullish)', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center', boxSizing: 'border-box' }}>
                  <span style={{ fontSize: '9px', color: '#047857', fontWeight: 800 }}>종가 (Close)</span>
                  <span style={{ fontSize: '11px', color: '#047857', fontWeight: 900 }}>몸통</span>
                  <span style={{ fontSize: '9px', color: '#047857', fontWeight: 800 }}>시가 (Open)</span>
                </div>
                <div style={{ width: '2.5px', height: '30px', background: 'var(--color-bullish)' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '120px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)', marginBottom: '8px' }}>음봉 (Bearish)</span>
                <div style={{ width: '2.5px', height: '30px', background: 'var(--color-bearish)' }} />
                <div style={{ width: '48px', height: '85px', background: 'rgba(239, 68, 68, 0.12)', border: '2.5px solid var(--color-bearish)', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center', boxSizing: 'border-box' }}>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 800 }}>시가 (Open)</span>
                  <span style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 900 }}>몸통</span>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 800 }}>종가 (Close)</span>
                </div>
                <div style={{ width: '2.5px', height: '25px', background: 'var(--color-bearish)' }} />
              </div>
            </div>
          </div>

          <h3>A.1.2 차트 스케일: 선형 vs 로그</h3>
          <p>
            선형 스케일은 가격 변화의 절대 금액 단위(예: 1,000원 상승)를 동일하게 표시하며, 로그 스케일은 가격 변화의 백분율 비율(%)을 기준으로 표시하여 큰 등락 폭을 가진 자산의 왜곡을 방지합니다. 
            장기 분석이나 비트코인처럼 가격 상승률이 수백 %에 달하는 자산을 볼 때는 **반드시 로그 스케일**을 적용해야 지지/저항선 왜곡이 발생하지 않습니다.
          </p>

          <h2>2. 호가창과 가격 형성 원리</h2>
          <h3>A.2.1 오더북과 스프레드</h3>
          <p>지정가 대기 물량은 매수 호가(Bid)와 매도 호가(Ask)로 쌓여 오더북을 형성하고, 최우선 매도 호가와 최우선 매수 호가 사이의 간격을 호가 스프레드(Spread)라고 칭합니다. 유동성이 많을수록 스프레드는 조밀해집니다.</p>

          <h3>A.2.2 주문 체결과 슬리피지</h3>
          <p>시장가 주문은 대기 물량을 즉시 체결하며 가격의 움직임을 유발합니다. 이때 대기 물량이 부족해 진입 단가가 나쁘게 밀려 체결되는 비용을 <strong>슬리피지(Slippage)</strong>라고 합니다.</p>
          <div className="formula-box" style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px', margin: '14px 0', fontFamily: 'monospace', fontSize: '12px', fontWeight: 'bold' }}>
            슬리피지 비용 (%) = ((실제 체결 평균 단가 - 주문 전 최우선 호가) / 주문 전 최우선 호가) × 100
          </div>

          <h2>3. 시장 참여자의 심리와 특성</h2>
          <p>시장은 기관/MM 등의 거대 자금인 스마트 머니와 감정적 결정(FOMO, 복수매매)에 흔들리기 쉬운 개인 투자자(Retail) 간의 거래 유동성 대결로 흘러갑니다. 중요한 경제 지표(CPI, 금리 등) 발표 직전에는 오더북이 얇아지는 <strong>유동성 공백(Liquidity Void)</strong>이 생겨 변동성이 극도로 커지므로 트레이더는 관망을 절대 원칙으로 삼아야 합니다.</p>
        </div>
      )
    },
    '02_candlestick_price_action.md': {
      category: 'B. 캔들스틱과 가격 행동',
      title: '02. 캔들스틱과 가격 행동',
      content: (
        <div className="theory-markdown">
          <h1>02. 캔들스틱과 가격 행동 (Candlesticks & Price Action)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            캔들스틱은 특정 시간 동안 매수자와 매도자가 어떤 강도로 싸웠는지를 직관적으로 보여주는 전쟁터의 축소판입니다.
          </p>

          <h2>1. 캔들의 구조와 물리적 해석</h2>
          <p>캔들은 몸통의 길이(세력의 지배력), 꼬리의 길이(가격 거부 반응), 그리고 전체 범위 대비 종가의 마감 위치라는 3가지 에너지 벡터로 해독합니다. 종가가 상단 90% 이상에서 마감할수록 매수세가 완전히 시장을 장악한 상태를 뜻합니다.</p>

          <h3>B.1.2 캔들 합산 이론 (Candle Blending)</h3>
          <p>연속된 2개 이상의 캔들을 합산하여 1개의 큰 프레임 캔들로 변환해 해독하는 기법입니다. 첫 캔들의 시가에서 마지막 캔들의 종가로 결합하며, 중간 등락 폭을 꼬리로 합성합니다. 이를 통해 복잡한 패턴을 하나의 직관적인 에너지 상태(예: 상승 장악형 ➔ 핀바 캔들)로 단순화할 수 있습니다.</p>

          <h2>2. 핵심 단일 캔들 패턴</h2>
          <div className="pattern-box" style={{ background: 'var(--bg-muted)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <Lightbulb size={16} style={{ color: 'var(--color-brand)' }} />
              망치형 (Hammer) & 유성형 (Shooting Star)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>망치형 (Hammer)</strong>: 하락 바닥권에서 출현하며 아래꼬리가 몸통의 2배 이상 깁니다. 저가 매수세 유입을 뜻하는 대표적 반등 변곡 신호입니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '6px' }}><strong>유성형 (Shooting Star)</strong>: 상승 고가권에서 출현하며 위꼬리가 매우 깁니다. 상방을 저항 세력이 밀어내려 찍어 눌렀음을 뜻하는 하락 전환 신호입니다.</p>
          </div>

          <h2>3. 복합 캔들 조합 패턴</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>상승 장악형 (Bullish Engulfing)</strong>: 직전 음봉 몸통 전체를 다음날의 거대 양봉이 완전히 감싸버린 구조로, 바닥권 상승 반전 신뢰도가 아주 높습니다.</li>
            <li><strong>하락 장악형 (Bearish Engulfing)</strong>: 직전 양봉 몸통 전체를 다음날의 거대 음봉이 완전히 감싸 삼킨 구조로, 고점 차익실현의 강력한 전조입니다.</li>
            <li><strong>샛별형 (Morning Star) & 석별형 (Evening Star)</strong>: 3일간 음봉 - 도지 - 양봉(또는 양봉 - 도지 - 음봉)을 거치며 힘의 균형 브레이크 및 추세 전환을 컨펌해 주는 중장기 변곡 패턴입니다.</li>
          </ul>
        </div>
      )
    },
    '03_market_structure.md': {
      category: 'C. 시장 구조',
      title: '03. 시장 구조',
      content: (
        <div className="theory-markdown">
          <h1>03. 시장 구조 (Market Structure)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            시장 구조는 차트의 뼈대를 이루며, 가격 흐름의 숲을 보게 해줍니다. 구조를 올바르게 분석해야 현재 시장이 상승, 하락, 또는 수렴 중인지 객관적으로 정의할 수 있습니다.
          </p>

          <h2>1. 스윙 포인트와 구조 전환 (BOS / CHoCH / MSB)</h2>
          <p>가격은 지그재그 파동으로 고점(High)과 저점(Low)을 갱신합니다. 좌우 2개씩 총 5개의 캔들 중 고점/저점이 가장 높은 꼭지점을 스윙 포인트라 정의합니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>BOS (Break of Structure)</strong>: 기존 추세 방향으로 고점이나 저점을 이탈 갱신하며 추세를 연장하는 파동입니다.</li>
            <li><strong>CHoCH (Change of Character)</strong>: 진행 중이던 추세에서 최초로 반대 방향의 구조선이 뚫려 흐름 변화의 조짐을 알리는 현상입니다.</li>
            <li><strong>MSB (Market Structure Break)</strong>: 상승을 이끌던 최종 HL(높은 저점) 지지 영역이 하방으로 캔들 종가 무너져 이탈할 때로, 시장 상승 추세 구조가 완전히 파괴되었음을 뜻합니다.</li>
          </ul>

          <h2>2. 지지와 저항 (Support & Resistance)의 원리</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', maxHeight: '150px' }}>
              <line x1="10" y1="35" x2="390" y2="35" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="20" y="24" fill="var(--color-bearish)" fontSize="10.5" fontWeight="bold">저항대 (Resistance Zone) - 매도 공급 집중</text>
              <path d="M 10,120 Q 50,20 100,120 T 190,120 T 280,35 T 380,120" fill="none" stroke="var(--text-secondary)" strokeWidth="2.5" />
              <line x1="10" y1="120" x2="390" y2="120" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="20" y="142" fill="var(--color-bullish)" fontSize="10.5" fontWeight="bold">지지대 (Support Zone) - 대기 매수 집중</text>
              <circle cx="100" cy="120" r="4.5" fill="var(--color-bullish)" />
              <circle cx="190" cy="120" r="4.5" fill="var(--color-bullish)" />
              <circle cx="280" cy="35" r="4.5" fill="var(--color-bearish)" />
            </svg>
          </div>

          <h3>C.2.1 S/R Flip (역할 교체)</h3>
          <p>강한 저항선이 강하게 돌파된 이후 눌림(Retest) 조정을 줄 때, 기존 저항은 강력한 <strong>지지선</strong>으로 성격이 뒤바뀝니다. 이 플립 자리가 가장 리스크가 적고 손익비가 우수한 눌림목 매수 타점입니다.</p>

          <h2>3. 추세선과 채널 작도 규칙</h2>
          <p>추세선은 임의의 두 점으로 그었을 때는 가설이며, 반드시 **3번째 접점(3rd Touch)**에서 반등 또는 저항이 검증되어야 신뢰할 수 있습니다. 평행하게 대칭 지점선들을 잇는 평행 채널(Parallel Channel)은 채널 내부의 수렴과 중심선(Mid-line)의 자력 지지를 해석하기에 훌륭한 도구입니다.</p>
        </div>
      )
    },
    '04_patterns_breakout.md': {
      category: 'D. 패턴과 돌파',
      title: '04. 패턴과 돌파',
      content: (
        <div className="theory-markdown">
          <h1>04. 패턴과 돌파 (Patterns & Breakouts)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            차트 패턴은 과거 시장 참여자들의 심리적 교착 상태와 돌파 과정이 반복적으로 나타난 '시장의 지도'와 같습니다.
          </p>

          <h2>1. 추세 반전형 패턴 (Reversal)</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>헤드앤숄더 (Head & Shoulders)</strong>: 고점 돌파 실패 후(우어깨) 저점 지선 넥라인을 이탈할 때 반전 하락이 컨펌됩니다. 머리부터 넥라인까지 수직 길이만큼의 하락 목표치를 가집니다.</li>
            <li><strong>이중 천정형/바닥형 (Double Top/Bottom)</strong>: 고점/저항 영역을 두 번 돌파 실패하여 생기는 M/W 형태 패턴으로 넥라인 이탈 시 완성됩니다.</li>
          </ul>

          <h2>2. 추세 지속형 패턴 (Continuation)</h2>
          <div className="pattern-box" style={{ background: 'var(--bg-muted)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-color)', margin: '14px 0' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              불 플래그 (Bull Flag) & 삼각수렴 (Triangle)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>불 플래그 (Bull Flag)</strong>: 강한 수직 깃대 이후 완만한 우하향 평행 채널 깃발을 형성하다가 상단을 뚫고 나갈 때 2차 상승 랠리를 추진합니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '6px' }}><strong>상승 삼각수렴 (Ascending Triangle)</strong>: 고점은 수평으로 막혀 있으나 저점이 지속 상승하며 저항벽을 밀어 올리다 결국 상방 돌파하는 매수 우위의 삼각수렴 구조입니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '6px' }}><strong>상승/하락 쐐기형 (Wedges)</strong>: 추세 두 선이 한 방향으로 기울어져 수렴하는 형태로, 상승 쐐기는 가격 상승의 한계를 폭로하는 약세 반전형, 하락 쐐기는 하락 압력이 소진됨을 알리는 강세 반전형입니다.</p>
          </div>

          <h2>3. 돌파 판단의 3대 필터</h2>
          <ol style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'decimal' }}>
            <li><strong>종가 안착 (Close Confirmation)</strong>: 장중 돌파 꼬리는 불트랩 휩소일 수 있어, 반드시 캔들 종가 마감이 저항선 밖에서 완착되는 것을 지켜봐야 합니다.</li>
            <li><strong>거래량 확인 (Volume Confirmation)</strong>: 평균 거래량 대비 최소 **1.5배~2배 이상의 거래량**이 실리며 돌파해야 신뢰도가 높습니다.</li>
            <li><strong>리테스트 진입 (Retest)</strong>: 돌파 직후 추격하지 않고 돌파선 부근으로 조정을 주어 지지 전환(S/R Flip)이 확실해지는 눌림목을 잡는 정석 진입 기법입니다.</li>
          </ol>
        </div>
      )
    },
    '05_volume_liquidity.md': {
      category: 'E. 거래량과 유동성',
      title: '05. 거래량과 유동성',
      content: (
        <div className="theory-markdown">
          <h1>05. 거래량과 유동성 (Volume & Liquidity)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            차트의 핵심 모멘텀인 거래량과 세력이 개인들의 손절물량을 뺏기 위해 설계하는 유동성 풀 사냥(스톱 헌팅) 메커니즘을 밝힙니다.
          </p>

          <h2>1. VSA (Volume Spread Analysis) 원리</h2>
          <p>캔들의 몸통 길이(스프레드)와 동반된 거래량의 비례 및 이상치 분석입니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>조화 (Harmony)</strong>: 넓은 장대양봉에 폭발적 거래량이 동반되어 정직하게 추세가 분출되는 형태입니다.</li>
            <li><strong>불화 (Disharmony)</strong>: 몸통은 좁은 도지 캔들인데 거래량은 사상 최대치 폭증을 이룬 형태입니다. 저항대에서의 세력 물량 분산(Distribution / 매도 공급) 징후로 급락에 대비해야 합니다.</li>
          </ul>

          <h3>E.2.1 와이코프 매집 단계 (Spring)</h3>
          <p>와이코프 이론 상 세력이 바닥권에서 물량을 매집(Accumulation)하는 최종 단계로, 지지선을 일시적으로 깨 개인들의 손절 물량을 헐값에 강제로 청산시킨 후 즉시 박스 안으로 가격을 끌어올려 마감하는 <strong>스프링(Spring)</strong> 현상이 최적의 저점 매수 기회가 됩니다.</p>

          <h2>2. 유동성 스윕 (Liquidity Sweep)과 스톱 헌팅</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', maxHeight: '150px' }}>
              <line x1="10" y1="60" x2="390" y2="60" stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="3 3" />
              <text x="20" y="50" fill="var(--text-secondary)" fontSize="10" fontWeight="bold">주요 전저점 지지 영역 (Support Line)</text>
              <path d="M 10,20 L 100,50 L 150,30 L 220,60 L 260,95 L 300,40 M 300,40 L 370,10" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
              <text x="235" y="115" fill="var(--color-bearish)" fontSize="9.5" fontWeight="bold">Liquidity Sweep (가짜 이탈 스톱헌팅)</text>
              <circle cx="260" cy="95" r="4.5" fill="var(--color-bearish)" />
              <path d="M 260,95 L 300,40" fill="none" stroke="var(--color-bullish)" strokeWidth="3" />
            </svg>
          </div>
          <p>세력(스마트 머니)은 대규모 매수를 위해 지지선 밑의 롱 스톱로스(매도 유동성)를 터뜨린 뒤(Stop Hunting), 물량을 흡수하여 종가를 신속히 복귀(Bear Trap)시킵니다. 이것이 거래량 실린 긴 아래꼬리 핀바인 **유동성 스윕(Liquidity Sweep)**입니다.</p>

          <h2>3. 오더블록 (OB)과 FVG (Fair Value Gap)</h2>
          <p>
            가격이 급상승하거나 급락하기 직전에 형성된 세력의 최종 매집 거래 지대를 <strong>오더블록(Order Block)</strong>이라 칭하며, 향후 강력한 자석 지저선이 됩니다.
            또한, 장대봉 출현으로 거래 체결에 심각한 일방적 불균형이 발생한 3캔들 공간인 <strong>FVG(Fair Value Gap)</strong>는 가격이 되돌아와 채우려는 회귀 작용을 일으킵니다.
          </p>
        </div>
      )
    },
    '06_technical_indicators.md': {
      category: 'F. 보조지표와 컨플루언스',
      title: '06. 보조지표와 컨플루언스',
      content: (
        <div className="theory-markdown">
          <h1>06. 보조지표와 컨플루언스 (Indicators & Confluence)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            이동평균선 배열과 지수이동평균(EMA)의 지지력, RSI 지표 다이버전스 분석, 볼린저 밴드 스퀴즈 대응 및 여러 근거가 겹치는 컨플루언스 전략을 제시합니다.
          </p>

          <h2>1. 이동평균선 (Exponential Moving Average - EMA)</h2>
          <p>EMA 20(단기), 50(중기), 200(장기) 이평선은 강력한 추세 지침서 역할을 수행합니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>정배열 (Bullish)</strong>: 가격 &gt; 20 &gt; 50 &gt; 200 순으로 이평선들이 넓게 우상향 확산하는 흐름으로, 단/중기 이평선에 도달할 때마다 지지 반등 매수 타점이 됩니다.</li>
            <li><strong>크로스 시그널</strong>: EMA 20이 50을 상방 돌파하는 골든크로스는 추세 초입, 하방 돌파하는 데드크로스는 하락 초입의 신호입니다.</li>
          </ul>

          <h2>2. RSI 상대강도지수 다이버전스 심화</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)' }}>일반 상승 다이버전스</span>
                <svg width="140" height="90" viewBox="0 0 150 100">
                  <path d="M 20,30 L 70,50 L 90,40 L 140,70" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
                  <line x1="70" y1="50" x2="140" y2="70" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="50" r="3.5" fill="var(--text-primary)" />
                  <circle cx="140" cy="70" r="3.5" fill="var(--text-primary)" />
                  <text x="25" y="16" fill="var(--color-bearish)" fontSize="8.5" fontWeight="700">주가 신저점 (↓)</text>
                  <path d="M 20,80 L 70,85 L 90,75 L 140,65" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" />
                  <line x1="70" y1="85" x2="140" y2="65" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="85" r="3.5" fill="var(--color-brand)" />
                  <circle cx="140" cy="65" r="3.5" fill="var(--color-brand)" />
                  <text x="25" y="97" fill="var(--color-bullish)" fontSize="8.5" fontWeight="700">RSI 저점 상승 (↑)</text>
                </svg>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)' }}>일반 하락 다이버전스</span>
                <svg width="140" height="90" viewBox="0 0 150 100">
                  <path d="M 20,70 L 70,50 L 90,60 L 140,30" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
                  <line x1="70" y1="50" x2="140" y2="30" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="50" r="3.5" fill="var(--text-primary)" />
                  <circle cx="140" cy="30" r="3.5" fill="var(--text-primary)" />
                  <text x="25" y="16" fill="var(--color-bullish)" fontSize="8.5" fontWeight="700">주가 고점 상승 (↑)</text>
                  <path d="M 20,45 L 70,60 L 90,50 L 140,80" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" />
                  <line x1="70" y1="60" x2="140" y2="80" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="60" r="3.5" fill="var(--color-brand)" />
                  <circle cx="140" cy="80" r="3.5" fill="var(--color-brand)" />
                  <text x="25" y="94" fill="var(--color-bearish)" fontSize="8.5" fontWeight="700">RSI 고점 낮아짐 (↓)</text>
                </svg>
              </div>
            </div>
          </div>

          <h3>F.2.2 히든 상승 다이버전스 (Hidden Bullish)</h3>
          <p>주가의 조정 저점은 지켜지며 우상향하지만(HL), RSI 저점은 하방으로 깊게 꺾여 내려간 형태(LL)입니다. 이는 강한 상승 모멘텀 지속 및 일시 조정 마무리 신호로 **매우 강력한 매수 진입 찬스**입니다.</p>

          <h2>3. 다중 컨플루언스 (Confluence) 매매</h2>
          <p>보조지표 단독 신호는 노이즈가 강합니다. 고확률 타점은 여러 개의 분석 조건이 겹칠 때(Confluence) 만들어집니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>예시 중첩 타점</strong>: 주가가 중요 수평 지지선에 도달(S/R) + EMA 200 장기 이평선 지지 교차 + 1시간 봉 RSI 일반 상승 다이버전스 포착 + 아래꼬리 긴 핀바 도지 캔들 마감. 이처럼 3가지 이상의 독립적인 근거가 포개지는 자리를 엄선하여 거래하는 습관이 계좌를 살립니다.</li>
          </ul>
        </div>
      )
    },
    '07_multitimeframe_regime.md': {
      category: 'G. 멀티타임프레임과 시장 레짐',
      title: '07. 멀티타임프레임과 시장 레짐',
      content: (
        <div className="theory-markdown">
          <h1>07. 멀티타임프레임과 시장 레짐 (Multi-Timeframe & Market Regime)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            상위 파동의 숲과 하위 파동의 나무를 동시에 입체적으로 분석하고, 추세/박스 기후에 최적화된 시나리오와 무효화 계획을 세우는 법을 배웁니다.
          </p>

          <h2>1. 3가지 타임프레임 탑다운 분석 (MTF)</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>상위 프레임 (HTF - 일봉/4시간)</strong>: 대세의 숲을 보는 프레임으로, 주요 장기 수평 지지/저항(S/R) 및 매물대의 전체적인 위치를 정합니다.</li>
            <li><strong>중간 프레임 (MTF - 1시간)</strong>: 최근 가격 스윙(HH/HL)을 추적하고 구조 붕괴(MSB)를 판별해 롱/숏 방향성(Bias)을 확정합니다.</li>
            <li><strong>하위 프레임 (LTF - 15분/5분)</strong>: 진입 시 정밀 타이밍을 조율하고 캔들 반전(핀바, 장악)을 확인하여 손절 폭을 타이트하게 조율합니다.</li>
          </ul>

          <h2>2. 시장 레짐 (Market Regime) 구분과 대응</h2>
          <table className="theory-table" style={{ width: '100%', borderCollapse: 'collapse', margin: '14px 0', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: 'var(--bg-muted)', borderBottom: '2px solid var(--border-color)' }}>
                <th style={{ padding: '8px', fontSize: '12px', textAlign: 'left' }}>시장 레짐</th>
                <th style={{ padding: '8px', fontSize: '12px', textAlign: 'left' }}>이평선 상태</th>
                <th style={{ padding: '8px', fontSize: '12px', textAlign: 'left' }}>대응 전략</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>추세 레짐 (Trend)</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>정배열/역배열 발산</td>
                <td style={{ padding: '8px', fontSize: '12px', color: 'var(--color-brand)' }}>추세 돌파 진입, HL 눌림목 매수</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontSize: '12px', fontWeight: 'bold' }}>박스 레짐 (Range)</td>
                <td style={{ padding: '8px', fontSize: '12px' }}>평균값(20 EMA) 수렴</td>
                <td style={{ padding: '8px', fontSize: '12px', color: 'var(--color-bullish)' }}>채널 상하단 역추세 평균회귀 핀바 단타</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 시나리오 빌딩과 거래 무효화 (Invalidation)</h2>
          <p>예측이 빗나갔을 때 즉각적인 퇴로(손절가)를 마련하기 위해, 진입 전에 <strong>"내 상승/하락 시나리오가 완벽히 파괴되는 가격(Invalidation Point)"</strong>을 정밀하게 지정해 두고 이를 건드리면 미련 없이 퇴장하는 시나리오(IF-THEN) 플래닝이 뇌동매매를 방지합니다.</p>
        </div>
      )
    },
    '08_setup_entry_exit.md': {
      category: 'H. 셋업과 진입/청산',
      title: '08. 셋업과 진입/청산',
      content: (
        <div className="theory-markdown">
          <h1>08. 셋업과 진입/청산 (Setups, Entries & Exits)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            분석이 끝난 후 어떻게 실제 포지션을 진입하고 손절 라인을 걸며, 트레일링 스톱(추격 손절매)과 분할 익절을 통해 기계적으로 리스크를 이탈/관리할지 다룹니다.
          </p>

          <h2>1. 매매 셋업 (Checklist)과 진입 실행</h2>
          <p>진입 전 1) HTF 방향성 일치, 2) 기술적 근거 중첩(Confluence), 3) 손익비 최소 1:2 규격 통과, 4) 계좌의 최대 2% 허용 리스크 산정이 완료되어야 합니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>지정가 대기 (Limit Order)</strong>: 슬리피지가 없고 정밀한 평단가 확보가 가능하지만, 진입을 놓칠 위험이 있습니다.</li>
            <li><strong>시장가 체결 (Market Order)</strong>: 확인봉 종가 안착 확인 후 진입하여 휩소를 피할 수 있으나 평단가가 불리해집니다.</li>
          </ul>

          <h2>2. 본전 청산 이동 (Break-even Move)</h2>
          <p>가격이 진입 방향으로 전개되어 **감수한 리스크 대비 이익율이 1:1 비율**에 도달했을 때, 손절가 라인을 최초 진입 평단가 위치로 올바르게 수축(Move to Entry)시켜 해당 거래의 최대 기대 손실을 0(Zero Risk)으로 만드는 무위험 거래 전술입니다.</p>

          <h2>3. 청산 전술과 추적 손절매 (Trailing Stop)</h2>
          <p>수익 극대화를 위해 가격 상승 시 <strong>ATR 변동성 배수</strong> 또는 <strong>단기 지평선(20 EMA)</strong>을 추종하여 손절가 라인을 바짝 올리는 트레일링 스톱(Trailing Stop)을 가동하고, 저항 마디마다 분할 익절(Scale-out)을 집행합니다.</p>
        </div>
      )
    },
    '09_risk_position_management.md': {
      category: 'I. 리스크와 포지션 관리',
      title: '09. 리스크와 포지션 관리',
      content: (
        <div className="theory-markdown">
          <h1>09. 리스크와 포지션 관리 (Risk & Position Management)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            기하학적 확률 파산을 차단하는 승률/손익비 기대값 계산, 원금을 방어하는 계좌의 2% 룰 포지션 사이징 공식, 그리고 레버리지 청산 계산법을 마스터합니다.
          </p>

          <h2>1. 계좌의 2% 자금 관리 룰 (Position Sizing)</h2>
          <p>분석상의 손절폭이 넓어지면 진입 금액 수량을 줄여, 매매 실패 시 깎여나가는 손실 금액이 언제나 계좌의 동일한 2% 한도가 되도록 기계적 사이징을 계산해야 합니다.</p>
          <div className="formula-box" style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px', margin: '14px 0', fontFamily: 'monospace', fontSize: '12.5px', fontWeight: 'bold', textAlign: 'center' }}>
            진입 금액 = (총 자산 × 0.02) / 기술적 손절폭(%)
          </div>

          <h2>2. 손익비와 시스템 기댓값 (Expectancy)</h2>
          <p>손실 시 1을 잃고 수익 시 3을 버는 **1:3 손익비**를 엄격히 지킨다면, 승률이 40%에 불과하더라도 매매를 지속할수록 계좌는 수학적으로 우상향(기댓값 양수)을 지속하게 됩니다. 기댓값을 복리로 지키기 위해 자산 손실(Drawdown)이 발생했을 때 복구해야 하는 회복률과의 비대칭성 표를 명심해야 합니다.</p>

          <h2>3. 선물 레버리지와 강제 청산</h2>
          <div style={{ background: 'rgba(239, 68, 68, 0.03)', borderLeft: '4px solid var(--color-bearish)', padding: '14px 16px', borderRadius: '8px', margin: '14px 0' }}>
            <strong style={{ color: 'var(--color-bearish)', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={15} />
              청산 거리(%) = 100% / 레버리지 배수
            </strong>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.5' }}>
              50배 고배율 레버리지의 청산 거리는 단 **-2.0%**입니다. 즉, 장중 사소한 잔파동 흔들기 한 번에 담보금이 전액 공중 분해되는 파산 구조를 가집니다. 레버리지는 포지션 크기 확대용이 아니라 담보 증거금 예치 절약용으로만 낮춰(3~5배 이하) 활용해야 안전합니다.
            </p>
          </div>
        </div>
      )
    },
    '10_psychology_routine_review.md': {
      category: 'J. 심리, 루틴, 복기',
      title: '10. 심리, 루틴, 복기',
      content: (
        <div className="theory-markdown">
          <h1>10. 심리, 루틴, 복기 (Psychology & Review)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            인간의 감정 오류(FOMO, 보복 매매)를 원칙적으로 차단하고 체계적인 거래 전 체크리스트와 매매일지 복기 루틴을 장착하여 원칙 매매 습관을 형성합니다.
          </p>

          <h2>1. 파산을 유도하는 3대 심리 오류 제어</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', listStyleType: 'disc' }}>
            <li><strong>보복 매매 (Revenge Trading)</strong>: 연패 후 손실 회피 본능으로 분노하여 비중을 늘리는 충동. 연패 시 반드시 모니터를 벗어나 이성을 충전하는 **물리적 냉각기(Cool-down)**를 강제 집행합니다.</li>
            <li><strong>FOMO (소외 공포)</strong>: 장대양봉 꼭대기에서 나만 소외될까 봐 매수하는 추격매매. 내 타점을 벗어난 상승은 내 돈이 아님을 인정하고 버스를 보내주어야 합니다.</li>
            <li><strong>두려움 (Fear)</strong>: 손절 공포로 정석 타점에서 진입을 기피하거나, 조기 청산해 버리는 습관. 2% 룰과 통계적 확률 우위를 신뢰해 기계처럼 클릭해야 합니다.</li>
          </ul>

          <h2>2. 일간 트레이딩 루틴과 일지 복기</h2>
          <p>
            장중에 내 주관적 탐욕을 억제하기 위해 매매 전 <strong>IF-THEN 체크리스트</strong>를 준수하며, 일일 최대 손실액(Daily Limit) 도달 시 당일 매매를 영구 중단합니다. 
            또한 매매 후에는 일지(Date, 방향, 손익, 원칙 준수도, 감정)를 작성하여 주간 단위 자가 복기 감사를 실행해 나쁜 매매 습관(바보 비용)을 제거해야만 생존 확률이 상승합니다.
          </p>
        </div>
      )
    }
  };

  const doc = documents[theoryFile] || {
    category: '기타 이론',
    title: 'Theory Doc',
    content: <div className="theory-markdown"><p>해당 문서를 찾을 수 없습니다.</p></div>
  };

  if (isInline) {
    return (
      <div className="theory-content inline-mode" style={{ padding: '0 4px' }}>
        {doc.content}
      </div>
    );
  }

  return (
    <div className="theory-wrapper" style={{ padding: '24px 20px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        {onBack && (
          <button className="btn-close" onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '4px 0', fontSize: '14px', fontWeight: 600 }}>
            <ArrowLeft size={18} />
            <span>목록으로</span>
          </button>
        )}
        <span className="category-tag" style={{ background: 'rgba(90, 82, 229, 0.08)', color: 'var(--color-brand)', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '6px' }}>
          {doc.category}
        </span>
      </div>
      <div className="theory-content" style={{ flex: 1 }}>
        {doc.content}
      </div>
    </div>
  );
};

export default TheoryReader;

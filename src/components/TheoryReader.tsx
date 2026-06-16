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

          <h2>1. 차트의 구성 요소와 해석</h2>
          <h3>[소분류 A.1.1] 가격의 표현: OHLC와 봉차트</h3>
          <p>모든 거래 세션(분, 시간, 일 단위)은 네 가지 핵심 가격(시가, 고가, 저가, 종가)으로 요약되며 몸통(Body)과 꼬리(Wick)로 힘의 방향을 나타냅니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>시가 (Open)</strong>: 세션이 시작될 때 최초로 체결된 가격.</li>
            <li><strong>고가 (High)</strong>: 세션 중 구매력이 밀어 올린 가장 높은 가격.</li>
            <li><strong>저가 (Low)</strong>: 세션 중 판매 압력이 짓누른 가장 낮은 가격.</li>
            <li><strong>종가 (Close)</strong>: 세션 마감 시점에 마지막으로 체결된 가격.</li>
          </ul>

          <h3>[소분류 A.1.2] 차트 스케일: 선형 vs 로그</h3>
          <p>선형 스케일은 가격 변화의 절대 단위를 동일하게 표시하며, 로그 스케일은 가격 변화의 백분율 비율(%)을 기준으로 표시하여 큰 등락 폭을 가진 자산의 왜곡을 방지합니다.</p>

          <h2>2. 호가창과 가격 형성 원리</h2>
          <h3>[소분류 A.2.1] 오더북과 스프레드</h3>
          <p>지정가 대기 물량은 매수 호가(Bid)와 매도 호가(Ask)로 쌓여 오더북을 형성하고, 최우선 매도 호가와 최우선 매수 호가 사이의 간격을 호가 스프레드(Spread)라고 칭합니다.</p>

          <h3>[소분류 A.2.2] 주문 체결과 슬리피지</h3>
          <p>시장가 주문은 대기 물량을 즉시 씹어 삼키며 가격의 즉각적인 움직임을 유발합니다. 이때 물량이 부족해 진입 단가가 나쁘게 밀려 체결되는 비용을 <strong>슬리피지(Slippage)</strong>라고 합니다.</p>

          <h2>3. 시장 참여자의 심리와 특성</h2>
          <p>시장은 기관/MM 등의 거대 자금인 스마트 머니와 감정적 결정(FOMO, 복수매매)에 흔들리기 쉬운 리스크가 큰 개인 투자자(Retail) 간의 거래 유동성 대결로 흘러갑니다.</p>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-muted)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '10px' }}>
              {/* Bullish Candle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)', marginBottom: '8px' }}>양봉 (Bullish)</span>
                <div style={{ width: '2.5px', height: '25px', background: 'var(--color-bullish)' }} />
                <div style={{ position: 'absolute', top: '16px', right: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>고가 (High)</div>
                <div style={{ width: '48px', height: '85px', background: 'rgba(16, 185, 129, 0.12)', border: '2.5px solid var(--color-bullish)', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center', boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(16,185,129,0.08)' }}>
                  <span style={{ fontSize: '9px', color: '#047857', fontWeight: 800 }}>종가 (Close)</span>
                  <span style={{ fontSize: '11px', color: '#047857', fontWeight: 900 }}>몸통</span>
                  <span style={{ fontSize: '9px', color: '#047857', fontWeight: 800 }}>시가 (Open)</span>
                </div>
                <div style={{ width: '2.5px', height: '30px', background: 'var(--color-bullish)' }} />
                <div style={{ position: 'absolute', bottom: '18px', right: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>저가 (Low)</div>
              </div>

              {/* Bearish Candle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)', marginBottom: '8px' }}>음봉 (Bearish)</span>
                <div style={{ width: '2.5px', height: '30px', background: 'var(--color-bearish)' }} />
                <div style={{ position: 'absolute', top: '22px', left: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>고가 (High)</div>
                <div style={{ width: '48px', height: '85px', background: 'rgba(239, 68, 68, 0.12)', border: '2.5px solid var(--color-bearish)', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center', boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(239,68,68,0.08)' }}>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 800 }}>시가 (Open)</span>
                  <span style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 900 }}>몸통</span>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 800 }}>종가 (Close)</span>
                </div>
                <div style={{ width: '2.5px', height: '25px', background: 'var(--color-bearish)' }} />
                <div style={{ position: 'absolute', bottom: '15px', left: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>저가 (Low)</div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-app)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', lineHeight: 1.5, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>💡</span>
              <span><strong>종가의 가치:</strong> 종가는 당일 시장 참여자들의 최종 합의 가격입니다. 기관들의 대규모 자금은 주로 종가를 기준으로 하루 포지션을 마감하므로 캔들 분석 중 종가의 위치가 가장 신뢰도가 높습니다.</span>
            </div>
          </div>

          <h2>2. 핵심 단일 캔들 패턴</h2>
          <p>꼬리가 길고 몸통이 한쪽 끝으로 쏠려 있는 캔들은 시장이 해당 가격대를 강력하게 밀어냈음(Rejection)을 의미합니다.</p>
          <div className="pattern-box">
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <Lightbulb size={16} style={{ color: 'var(--color-brand)' }} />
              망치형 (Hammer) & 유성형 (Shooting Star)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>망치형 (Hammer)</strong>: 하락 바닥권에서 출현하며 아래꼬리가 몸통의 2배 이상 깁니다. 저가 매수세 유입을 뜻하는 대표적 반등 신호입니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '6px' }}><strong>유성형 (Shooting Star)</strong>: 상승 고가권에서 출현하며 위꼬리가 매우 깁니다. 상방을 저항 세력이 밀어내려 찍어 눌렀음을 뜻하는 하락 전환 신호입니다.</p>
          </div>

          <h2>3. 복합 캔들 조합 패턴</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>상승 장악형 (Bullish Engulfing)</strong>: 직전 음봉 몸통 전체를 다음날의 거대 양봉이 완전히 감싸버린 구조로, 바닥권 상승 반전 신뢰도가 아주 높습니다.</li>
            <li><strong>하락 장악형 (Bearish Engulfing)</strong>: 직전 양봉 몸통 전체를 다음날의 거대 음봉이 완전히 감싸 삼킨 구조로, 고점 차익실현의 전조입니다.</li>
            <li><strong>관통형 (Piercing Line)</strong>: 전일 음봉 몸통의 50% 이상을 당일 양봉이 관통하여 상방 마감한 형태로 매수세의 회복을 보여줍니다.</li>
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

          <h2>1. 스윙 포인트와 구조 전환 (BOS / MSB)</h2>
          <p>추세는 지그재그 파동으로 고점(High)과 저점(Low)을 갱신합니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>상승 구조</strong>: 고점을 지속 높이고(HH: Higher High) 저점도 높이는(HL: Higher Low) 상태입니다.</li>
            <li><strong>BOS (Break of Structure)</strong>: 기존 추세 방향으로 고점이나 저점을 이탈 갱신하며 추세를 연장하는 파동입니다.</li>
            <li><strong>MSB (Market Structure Break)</strong>: 상승을 이끌던 최종 HL(높은 저점) 지지 영역이 하방으로 무너져 캔들 종가 이탈할 때로, 시장 추세 구조가 완전히 파괴되었음을 뜻합니다.</li>
          </ul>

          <h2>2. 지지와 저항 (Support & Resistance)의 원리</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', maxHeight: '150px' }}>
              {/* Resistance Line (Red) */}
              <line x1="10" y1="35" x2="390" y2="35" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="20" y="24" fill="var(--color-bearish)" fontSize="10.5" fontWeight="bold">저항대 (Resistance Zone) - 매도 공급 집중</text>
              
              {/* Wave Line */}
              <path d="M 10,120 Q 50,20 100,120 T 190,120 T 280,35 T 380,120" fill="none" stroke="var(--text-secondary)" strokeWidth="2.5" />
              
              {/* Support Line (Green) */}
              <line x1="10" y1="120" x2="390" y2="120" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="20" y="142" fill="var(--color-bullish)" fontSize="10.5" fontWeight="bold">지지대 (Support Zone) - 대기 매수 집중</text>
              
              {/* Annotation Dots */}
              <circle cx="100" cy="120" r="4.5" fill="var(--color-bullish)" />
              <circle cx="190" cy="120" r="4.5" fill="var(--color-bullish)" />
              <circle cx="280" cy="35" r="4.5" fill="var(--color-bearish)" />
            </svg>
          </div>

          <h3>[소분류 C.2.1] S/R Flip (역할 교체)</h3>
          <p>강한 저항선이 강하게 돌파된 이후 눌림(Retest) 조정을 줄 때, 기존 저항은 강력한 <strong>지지선</strong>으로 성격이 뒤바뀝니다. 이 플립 자리가 가장 리스크가 적고 손익비가 우수한 눌림목 매수 타점입니다.</p>

          <h2>3. 추세선과 채널 작도</h2>
          <p>추세선은 임의의 두 점으로 그었을 때는 가설이며, 반드시 **3번째 접점(3rd Touch)**에서 반등 또는 저항이 검증되어야 신뢰할 수 있습니다. 평행하게 대칭 지점선들을 잇는 평행 채널(Parallel Channel)은 채널 내부의 수렴과 외부 이탈(가속/감속)을 해독하기 좋습니다.</p>
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
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>헤드앤숄더 (Head & Shoulders)</strong>: 고점 돌파 실패 후(우shoulder) 저점 지선 넥라인을 이탈할 때 반전 하락이 컨펌됩니다.</li>
            <li><strong>이중 천정형/바닥형 (Double Top/Bottom)</strong>: 고점/저항 영역을 두 번 돌파 실패하여 생기는 M/W 형태 패턴입니다.</li>
            <li><strong>원형 바닥형 (Rounding Bottom)</strong>: 급격한 V반등이 아닌 오랜 시간 매물을 받으며 부드럽게 둥근 대야 모양을 그리며 돌아서는 양상입니다.</li>
          </ul>

          <h2>2. 추세 지속형 패턴 (Continuation)</h2>
          <div className="pattern-box">
            <h4 style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
              불 플래그 (Bull Flag) & 삼각수렴 (Triangle)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>불 플래그 (Bull Flag)</strong>: 강한 수직 깃대 이후 완만한 횡보 채널 깃발을 형성하다가 상단을 뚫고 나갈 때 2차 상승 랠리를 추진합니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '6px' }}><strong>상승 삼각수렴 (Ascending Triangle)</strong>: 고점은 수평으로 막혀 있으나 저점이 지속 상승하며 저항벽을 밀어 올리다 결국 상방 돌파하는 흐름입니다.</p>
          </div>

          <h2>3. 돌파 판단의 3대 필터</h2>
          <ol style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>종가 안착 (Close Confirmation)</strong>: 장중 돌파 꼬리는 불트랩 휩소일 수 있어, 반드시 캔들 종가 마감이 저항선 밖에서 완성되는 것을 지켜봐야 합니다.</li>
            <li><strong>거래량 확인 (Volume Confirmation)</strong>: 평균 거래량 대비 최소 **1.5배~2배 이상의 거래량**이 실리며 돌파해야 신뢰도가 높습니다.</li>
            <li><strong>리테스트 진입 (Retest)</strong>: 돌파 직후 추격하지 않고 돌파선까지의 되돌림 조정 지지를 확인할 때 대기하는 정석 진입 기법입니다.</li>
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
          <p>캔들의 몸통 길이(스프레드)와 동반된 거래량의 비교 분석입니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>조화 (Harmony)</strong>: 넓은 장대양봉에 폭발적 거래량이 동반되어 정직하게 추세가 분출되는 형태입니다.</li>
            <li><strong>불화 (Disharmony)</strong>: 몸통은 좁은 도지 캔들인데 거래량은 사상 최대치 폭증을 이룬 형태입니다. 저항대에서의 세력 물량 분산(Distribution / 매도 공급) 징후로 급락에 대비해야 합니다.</li>
          </ul>

          <h2>2. 유동성 스윕 (Liquidity Sweep)과 스톱 헌팅</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', maxHeight: '150px' }}>
              <line x1="10" y1="60" x2="390" y2="60" stroke="var(--color-brand)" strokeWidth="2" strokeDasharray="3 3" />
              <text x="20" y="50" fill="var(--text-secondary)" fontSize="10" fontWeight="bold">주요 전저점 지지 영역 (Support Line)</text>
              <path d="M 10,20 L 100,50 L 150,30 L 220,60 L 260,95 L 300,40 M 300,40 L 370,10" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
              <text x="235" y="115" fill="var(--color-bearish)" fontSize="9.5" fontWeight="bold">Liquidity Sweep (가짜 이탈 스톱헌팅)</text>
              <circle cx="260" cy="95" r="4.5" fill="var(--color-bearish)" />
              <path d="M 260,95 L 300,40" fill="none" stroke="var(--color-bullish)" strokeWidth="3" markerEnd="url(#arrow)" />
            </svg>
          </div>
          <p>세력(스마트 머니)은 대규모 매수를 위해 지지선 밑의 롱 스톱로스(매도 유동성)를 터뜨린 뒤(Stop Hunting), 물량을 흡수하여 종가를 신속히 복귀(Bear Trap)시킵니다. 이것이 거래량 실린 긴 아래꼬리 핀바인 **유동성 스윕(Liquidity Sweep)**입니다.</p>

          <h2>3. 글로벌 시장 세션 특성</h2>
          <p>런던/뉴욕 중첩 시간대(밤 9시~새벽 1시)는 유동성이 풍부해 돌파 성공률이 높은 반면, 거래소가 한산한 아시아 세션이나 주말 공백 시간대에는 가짜 이탈 휩소 확률이 급증하므로 추격 매매를 피해야 합니다.</p>
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
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>정배열 (Bullish)</strong>: 가격 &gt; 20 &gt; 50 &gt; 200 순으로 이평선들이 넓게 우상향 확산하는 흐름으로, 단/중기 이평선에 도달할 때마다 지지 반등 매수 타점이 됩니다.</li>
            <li><strong>크로스 시그널</strong>: EMA 20이 50을 상방 돌파하는 골든크로스는 추세 초입, 하방 돌파하는 데드크로스는 하락 초입의 신호입니다.</li>
          </ul>

          <h2>2. RSI 상대강도지수 다이버전스 심화</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              {/* Bullish Divergence */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)' }}>일반 상승 다이버전스</span>
                <svg width="150" height="100" viewBox="0 0 150 100">
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

              {/* Bearish Divergence */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)' }}>일반 하락 다이버전스</span>
                <svg width="150" height="100" viewBox="0 0 150 100">
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

          <h3>[소분류 F.2.2] 히든 상승 다이버전스 (Hidden Bullish)</h3>
          <p>주가의 조정 저점은 지켜지며 우상향하지만(HL), RSI 저점은 하방으로 깊게 꺾여 내려간 형태입니다. 이는 강한 상승 모멘텀 지속 및 일시 조정 마무리 신호로 **매우 강력한 매수 진입 찬스**입니다.</p>

          <h2>3. 다중 컨플루언스 (Confluence) 매매</h2>
          <p>보조지표 단독 신호는 노이즈가 강합니다. 고확률 타점은 여러 개의 분석 조건이 겹칠 때(Confluence) 만들어집니다.</p>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
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

          <h2>1. 3가지 타임프레임 정렬 (Timeframe Alignment)</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
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
          <p>예측이 빗나갔을 때 즉각적인 퇴로(손절가)를 마련하기 위해, 진입 전에 <strong>"내 상승/하락 시나리오가 완벽히 파괴되는 가격(Invalidation Point)"</strong>을 정밀하게 지정해 두고 이를 건드리면 미련 없이 퇴장해야 합니다.</p>
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

          <h2>1. 매매 셋업 (Trading Setup) 3대 구성</h2>
          <ol style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>진입 조건 (Trigger)</strong>: 망치형 캔들 완성 또는 저항선 이탈 종가 확정 등 진입 트리거.</li>
            <li><strong>무효화 조건 (Stop Loss)</strong>: 내 가설이 훼손되는 손절 라인 가격.</li>
            <li><strong>청산 조건 (Take Profit)</strong>: 1차 저항 영역 또는 고정 손익비 최소 1:2 달성 지점.</li>
          </ol>
          <p style={{ marginTop: '8px' }}>모든 진입은 사전에 "IF (조건 만족) ➔ THEN (진입/손절/목표가 기계적 배치)"의 룰베이스 알고리즘에 의해 집행되어야 뇌동매매를 방지합니다.</p>

          <h2>2. 시장가(Market) vs 지정가(Limit) 실행</h2>
          <p>돌파 시점에 시장가 추격은 슬리피지(Slippage)를 일으켜 평균단가를 대단히 악화시킵니다. 돌파 확인 이후 돌파선 부근으로 다시 떨어지는 리테스트( 되돌림) 시점에 지정가 대기 주문(Limit Order)을 걸어 체결 단가를 고정하는 리스크 제어 방식이 손익비에 월등히 유리합니다.</p>

          <h2>3. 포지션 분할 관리와 트레일링 스톱</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>분할 익절(Scale-out) & 본전 이동(Break-even)</strong>: 가격이 손익비 1:1 지점 도달 시 수량의 50%를 익절하여 이익을 확정하고, 남은 50%의 손절가를 최초 진입가로 이동하여 해당 거래의 최대 손실 한도를 Zero(0)로 봉쇄합니다.</li>
            <li><strong>추격 손절매 (Trailing Stop)</strong>: 추세가 진행됨에 따라 스톱로스 라인을 직전의 의미 있는 높은 저점(HL) 지선 바로 밑으로 추종 상향하여 추세 이익을 최대폭으로 청산할 때까지 포지션을 유지합니다.</li>
          </ul>
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

          <h2>1. 승률과 손익비의 수학적 조화</h2>
          <p>장기 트레이딩 생존은 수학적 기대값이 양수(&gt; 0)가 되어야 가능합니다.</p>
          <div className="formula-box" style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>
            기대값 = (승률 × 평균수익) - (패률 × 평균손실)
          </div>
          <p style={{ marginTop: '8px' }}>손익비가 최소 **1:2 이상(손실 시 1, 수익 시 2)**인 타점만 엄선하여 고수하면, 승률이 35%에 불과하더라도 계좌는 매매를 거듭할수록 복리로 우상향합니다. 높은 승률보다 강력한 손익비를 추구해야 합니다.</p>

          <h2>2. 총자산의 2% 자금 관리 룰 (Position Sizing)</h2>
          <p>어떤 한 판을 지더라도 내 총계좌 원금의 최대 **2%**만 잃도록 수량을 계산하여 진입해야 합니다.</p>
          <div className="formula-box" style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px', textAlign: 'center', fontFamily: 'monospace', fontWeight: 'bold' }}>
            진입 금액 = (총 자산 × 0.02) / 기술적 손절폭(%)
          </div>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6', marginTop: '10px' }}>
            <li><strong>총자산 1,000만 원 트레이더의 예시</strong> (최대 허용 손실 20만 원):
              <ul style={{ paddingLeft: '16px' }}>
                <li>타점 대비 손절선이 <strong>-5%</strong>로 짧은 자리: <code>20만 원 / 0.05 = 400만 원</code> 매수 진입</li>
                <li>타점 대비 손절선이 <strong>-10%</strong>로 넓은 자리: <code>20만 원 / 0.10 = 200만 원</code> 매수 진입</li>
              </ul>
            </li>
          </ul>
          <p style={{ marginTop: '8px' }}>이처럼 변동성에 따라 수량을 조율함으로써, 예측 실패 시 잃는 손실 금액은 언제나 동일하게 20만 원으로 안전하게 방어됩니다.</p>

          <h2>3. 선물 레버리지와 청산 리스크</h2>
          <div style={{ background: 'rgba(239, 68, 68, 0.03)', borderLeft: '4px solid var(--color-bearish)', padding: '14px 16px', borderRadius: '8px', margin: '14px 0' }}>
            <strong style={{ color: 'var(--color-bearish)', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={15} />
              청산 거리(%) = 100% / 레버리지 배수
            </strong>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '6px', lineHeight: '1.5' }}>
              50배 고배율 레버리지의 경우, 내 포지션 반대 방향으로 단 **-2%**의 시세 변동 노이즈 스파이크만 발생해도 증거금 원금 전체가 즉시 강제 청산 당합니다. 레버리지는 포지션 크기를 늘리는 도구가 아니라 보증금 효율용으로만 작용하게 낮추어(3~5배 이하) 설정해야 안전합니다.
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
          <h1>10. 심리, 루틴, 복기 (Psychology, Routines & Reviews)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            인간의 감정 오류(FOMO, 보복 매매)를 원칙적으로 차단하고 체계적인 거래 전 체크리스트와 매매일지 복기 루틴을 장착하여 원칙 매매 습관을 형성합니다.
          </p>

          <h2>1. 거래 심리 오류 제어</h2>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>FOMO (소외감 공포) 억제</strong>: 기회가 날아갔다고 장대양봉 폭등 시점에 추격 매수하는 것은 고점 물림의 주범입니다. 내 타점을 비껴간 랠리는 무시하고 다음 정석 셋업 타점을 대기합니다.</li>
            <li><strong>보복 매매 (Revenge Trading) 차단</strong>: 3연속 손절 등을 겪었을 때는 즉시 시스템을 종료하고 강제로 시장을 떠나 이성을 찾을 때까지 냉각기(Cool-down) 시간을 물리적으로 강제 집행해야 합니다.</li>
          </ul>

          <h2>2. 일간 트레이딩 루틴 설계</h2>
          <p>매매 버튼을 누르기 전, <strong>자가 체크리스트</strong>를 준수하고 경제 캘린더 발표 일정(CPI 등) 30분 전후 변동성 왜곡 시기에는 진입을 차단하는 시간대 필터를 적용합니다.</p>

          <h2>3. 복기와 백테스트 (Backtest)</h2>
          <p>모든 거래의 진입/청산 차트와 근거, 감정을 **매매일지(Trading Journal)**에 기록하고, 주기적으로 손절당한 일지들만 모아 오류의 교집합 패턴을 분석해 금지 조항으로 기입합니다. 새로운 매매 기법 적용 전 과거 1~2년 치 차트 데이터로 최소 100회 이상의 과거 표본 검증(백테스트)을 통과한 뒤 가동해야 실전에서 흔들리지 않습니다.</p>
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

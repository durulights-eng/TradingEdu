import React from 'react';
import { ArrowLeft, Lightbulb, TrendingUp, HelpCircle, ShieldAlert } from 'lucide-react';

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
    '01_candlestick_basics.md': {
      category: '캔들스틱 기초',
      title: '01. 캔들스틱 기초 및 패턴 분석',
      content: (
        <div className="theory-markdown">
          <h1>01. 캔들스틱 기초 및 패턴 분석 (Candlestick Basics)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            캔들스틱(Candlestick) 차트는 일정 기간 동안의 가격 움직임(시가, 고가, 저가, 종가)을 시각적으로 구현하여 시장 참여자들의 심리와 힘의 균형 상태를 가장 정교하게 보여주는 도구입니다.
          </p>
          
          <h2>1. 캔들의 구조와 물리적 해석 (Anatomy of a Candlestick)</h2>
          <p>하나의 캔들은 설정된 시간 단위(예: 1분, 15분, 4시간, 1일) 동안의 시세 변화를 기록하며, 크게 <strong>몸통(Real Body)</strong>과 <strong>꼬리(Shadow/Wick)</strong>로 나뉩니다.</p>
          
          {/* Beautiful Candlestick Anatomy Diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-muted)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '10px' }}>
              {/* Bullish Candle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)', marginBottom: '8px' }}>양봉 (Bullish)</span>
                {/* High Wick */}
                <div style={{ width: '2.5px', height: '25px', background: 'var(--color-bullish)' }} />
                {/* Open/Close Labels relative to wicks */}
                <div style={{ position: 'absolute', top: '16px', right: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>고가 (High)</div>
                {/* Body */}
                <div style={{ width: '48px', height: '85px', background: 'rgba(16, 185, 129, 0.12)', border: '2.5px solid var(--color-bullish)', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center', boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(16,185,129,0.08)' }}>
                  <span style={{ fontSize: '9px', color: '#047857', fontWeight: 800 }}>종가 (Close)</span>
                  <span style={{ fontSize: '11px', color: '#047857', fontWeight: 900 }}>몸통</span>
                  <span style={{ fontSize: '9px', color: '#047857', fontWeight: 800 }}>시가 (Open)</span>
                </div>
                {/* Low Wick */}
                <div style={{ width: '2.5px', height: '30px', background: 'var(--color-bullish)' }} />
                <div style={{ position: 'absolute', bottom: '18px', right: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>저가 (Low)</div>
              </div>

              {/* Bearish Candle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', width: '100px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)', marginBottom: '8px' }}>음봉 (Bearish)</span>
                {/* High Wick */}
                <div style={{ width: '2.5px', height: '30px', background: 'var(--color-bearish)' }} />
                {/* Open/Close Labels relative to wicks */}
                <div style={{ position: 'absolute', top: '22px', left: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>고가 (High)</div>
                {/* Body */}
                <div style={{ width: '48px', height: '85px', background: 'rgba(239, 68, 68, 0.12)', border: '2.5px solid var(--color-bearish)', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '6px 0', alignItems: 'center', boxSizing: 'border-box', boxShadow: '0 4px 12px rgba(239,68,68,0.08)' }}>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 800 }}>시가 (Open)</span>
                  <span style={{ fontSize: '11px', color: '#b91c1c', fontWeight: 900 }}>몸통</span>
                  <span style={{ fontSize: '9px', color: '#b91c1c', fontWeight: 800 }}>종가 (Close)</span>
                </div>
                {/* Low Wick */}
                <div style={{ width: '2.5px', height: '25px', background: 'var(--color-bearish)' }} />
                <div style={{ position: 'absolute', bottom: '15px', left: '-45px', fontSize: '10px', color: 'var(--text-secondary)', fontWeight: 600 }}>저가 (Low)</div>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-app)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', lineHeight: 1.5, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>💡</span>
              <span><strong>물리적 힘의 원리:</strong> 종가가 시가보다 위에 형성되면 <strong>매수자 승리(양봉)</strong>, 종가가 시가보다 아래에 형성되면 <strong>매도자 승리(음봉)</strong>입니다. 꼬리는 장중 매수/매도 세력의 거절을 뜻합니다.</span>
            </div>
          </div>

          <ul style={{ paddingLeft: '16px' }}>
            <li><strong>시가 (Open)</strong>: 해당 시간 봉이 시작될 때의 첫 거래 가격.</li>
            <li><strong>종가 (Close)</strong>: 해당 시간 봉이 마감될 때의 마지막 거래 가격. <strong>종가는 그날의 최종 시장 합의 가격</strong>이므로 캔들 분석에서 가장 신뢰도가 높습니다.</li>
            <li><strong>고가 (High)</strong>: 해당 기간 중 매수세가 도달했던 가장 높은 가격 (위꼬리의 끝).</li>
            <li><strong>저가 (Low)</strong>: 해당 기간 중 매도세가 밀어붙였던 가장 낮은 가격 (아래꼬리의 끝).</li>
          </ul>

          <h3>꼬리와 몸통 비율의 심리학적 해석</h3>
          <ol style={{ paddingLeft: '16px' }}>
            <li><strong>몸통의 길이</strong>: 몸통이 길수록 매수 또는 매도의 방향성 관성이 매우 강함을 의미합니다. (예: 장대양봉은 강력한 매수세의 지배력을 증명)</li>
            <li><strong>꼬리의 의미</strong>: 꼬리는 <strong>'시장 참여자들의 거절(Rejection)'</strong>을 뜻합니다.
              <ul style={{ paddingLeft: '16px', marginTop: '6px' }}>
                <li><strong>긴 위꼬리</strong>: 장중에 매수세가 시세를 강하게 올렸으나, 고점 부근의 강력한 매도 저항 및 차익 실현 물량에 밀려 결국 주가가 밀려났음을 의미합니다. (상방 거절)</li>
                <li><strong>긴 아래꼬리</strong>: 장중에 투매가 나와 주가가 하락했으나, 바닥권에서 대기 중인 저가 매수세가 유입되어 종가를 다시 밀어 올렸음을 의미합니다. (하방 거절)</li>
              </ul>
            </li>
          </ol>

          <h2>2. 핵심 단일 캔들 패턴 (Single Candlestick Patterns)</h2>
          
          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <Lightbulb size={16} style={{ color: 'var(--color-brand)' }} />
              망치형 (Hammer) & 교수형 (Hanging Man)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>망치형 (Hammer)</strong>: 몸통이 캔들의 상단에 있고, 아래꼬리가 몸통 길이의 <strong>2배 이상</strong>이며, 위꼬리가 거의 없거나 아주 짧은 형태입니다.</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12.5px', marginTop: '6px', color: 'var(--text-secondary)' }}>
              <li><strong>해석</strong>: <strong>하락 추세 바닥</strong>에서 나타날 때 신뢰도가 극대화되는 강력한 <strong>상승 반전</strong> 시그널입니다. 장중 투매가 쏟아졌으나 저점 매수세가 완벽히 방어하여 시가 부근까지 종가를 끌어올린 힘의 균형 변화를 뜻합니다.</li>
            </ul>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '8px' }}><strong>교수형 (Hanging Man)</strong>: 망치형과 외형은 똑같으나, <strong>상승 추세 고점</strong>에서 발생합니다.</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12.5px', marginTop: '6px', color: 'var(--text-secondary)' }}>
              <li><strong>해석</strong>: 고점에서 장중 매도 물량이 쏟아지기 시작했다는 경고이며, 임시로 끌어올려졌으나 고점 매수자들이 가짜 지지에 낚여 물릴 위험이 큼을 예고하는 <strong>하락 전환</strong> 신호입니다.</li>
            </ul>
          </div>

          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <Lightbulb size={16} style={{ color: 'var(--color-brand)' }} />
              역망치형 (Inverted Hammer) & 유성형 (Shooting Star)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>역망치형 (Inverted Hammer)</strong>: 몸통이 하단에 위치하고, 위꼬리가 몸통 길이의 <strong>2배 이상</strong> 길게 달린 형태입니다.</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12.5px', marginTop: '6px', color: 'var(--text-secondary)' }}>
              <li><strong>해석</strong>: <strong>하락 추세 바닥</strong>에서 출현할 경우, 강한 매수 세력이 하락 압력을 뚫고 시세를 위로 한 차례 쳐 올리는 시도를 했음을 뜻하며, 하락 추세 종결 임박을 암시합니다.</li>
            </ul>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '8px' }}><strong>유성형 (Shooting Star)</strong>: 외형은 역망치형과 같으나, <strong>상승 추세 고점</strong>에서 발생합니다.</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12.5px', marginTop: '6px', color: 'var(--text-secondary)' }}>
              <li><strong>해석</strong>: 대표적인 <strong>하락 전환</strong> 시그널입니다. 장중에 매수 랠리가 펼쳐졌으나 고점의 두터운 악성 매물대와 매도 공급에 지배당해 상승분을 전부 반납하고 종가가 밀려 마감된 형태로, 강력한 상방 저항을 증명합니다.</li>
            </ul>
          </div>

          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <Lightbulb size={16} style={{ color: 'var(--color-brand)' }} />
              도지 (Doji)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}>시가와 종가가 거의 일치하여 몸통이 거의 보이지 않고 십자(+) 모양으로 보이는 캔들입니다.</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12.5px', marginTop: '6px', color: 'var(--text-secondary)' }}>
              <li><strong>해석</strong>: 매수세와 매도세의 힘이 팽팽하게 대립하고 있음을 나타내며, 기존 추세의 힘이 빠지고 조만간 추세가 바뀔 것임을 예고하는 변곡점 역할을 합니다.</li>
              <li><strong>비석형 도지 (Gravestone Doji)</strong>: 위꼬리가 길고 아래꼬리가 없는 도지. 고점에서 발생 시 매우 강력한 폭락 예고 신호입니다.</li>
              <li><strong>잠자리형 도지 (Dragonfly Doji)</strong>: 아래꼬리가 길고 위꼬리가 없는 도지. 바닥권에서 출현 시 강한 저가 매수를 뜻하는 반등 예고 신호입니다.</li>
            </ul>
          </div>

          <h2>3. 대표적 복합 캔들 패턴 (Multi-Candlestick Patterns)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '14px 0' }}>
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>상승 장악형 (Bullish Engulfing)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                첫째 날 하락 음봉이 발생하고, 둘째 날 더 낮은 시가에서 출발한 양봉이 첫째 날의 음봉 몸통을 머리부터 발끝까지 <strong>완전히 감싸 안으며(장악)</strong> 길게 마감하는 형태입니다. 하락 추세 바닥권에서 출현 시 가장 높은 신뢰도를 갖는 <strong>상승 전환</strong> 패턴입니다.
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>하락 장악형 (Bearish Engulfing)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                첫째 날 상승 양봉이 발생하고, 둘째 날 전일 양봉 몸통을 아래로 완전히 뒤덮는 거대한 음봉이 종가 기준으로 감싸 안으며 끝나는 형태입니다. 고점 영역에서 신뢰도가 극도로 높은 <strong>하락 반전</strong> 신호입니다.
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>샛별형 (Morning Star) & 석별형 (Evening Star)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                <strong>샛별형</strong>: 장대음봉 발생 후 다음 날 갭하락한 짧은 도지(또는 작은 캔들)가 출현하고, 셋째 날 첫날 음봉 몸통의 절반 이상을 뚫고 올라가는 장대양봉이 마감되는 3캔들 조합입니다. (바닥권 상승 전환)<br />
                <strong>석별형</strong>: 장대양봉 발생 후 다음 날 갭상승한 짧은 캔들이 생기고, 셋째 날 첫날 양봉 몸통의 50% 이상을 침범해 내려앉는 장대음봉이 마감되는 형태입니다. (고점 하락 전환)
              </p>
            </div>
          </div>

          <h2>4. 실전 트레이딩 핵심 팁</h2>
          <div style={{ background: 'rgba(90, 82, 229, 0.03)', border: '1px solid rgba(90, 82, 229, 0.12)', borderRadius: '12px', padding: '16px', fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>1. 캔들 패턴은 단독으로 쓰이지 않는다:</strong><br />
              망치형 캔들이 나타났다고 해서 무조건 매수하는 것은 위험합니다. 해당 망치형 캔들이 <strong>주요 지지/저항선, 피보나치 되돌림 구간, 평행 채널 하단</strong> 등 다른 신뢰도 높은 타점과 겹쳐서(Confluence) 발생했을 때만 의미가 있습니다.
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>2. 반드시 거래량(Volume)과 결합하라:</strong><br />
              샛별형이나 상승장악형 패턴이 출현할 때, <strong>양봉의 거래량이 평균 거래량보다 압도적으로 크게 터져야</strong> 진짜 기관이나 대형 자금이 들어왔음을 신뢰할 수 있으며, 거래량 없는 전환 패턴은 가짜 휩소(속임수)일 확률이 높습니다.
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>3. 종가 마감을 확인하라:</strong><br />
              봉이 완성되기 1분 전에는 망치형이었다가, 마감 10초 전에 급락하여 장대음봉으로 끝날 수도 있습니다. <strong>반드시 설정한 타임프레임의 캔들이 완벽하게 마감된 직후(다음 봉 시작 시점)</strong>에 최종 캔들 형태를 보고 매매 의사결정을 내려야 뇌동매매를 방지할 수 있습니다.
            </div>
          </div>
        </div>
      )
    },
    '02_support_resistance.md': {
      category: '지지와 저항',
      title: '02. 지지와 저항 및 돌파 판별',
      content: (
        <div className="theory-markdown">
          <h1>02. 지지와 저항 및 돌파 판별 (Support & Resistance)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            지지와 저항(S/R)은 모든 차트 분석과 매매 전략의 가장 근본이 되는 뼈대입니다. 매수 세력과 매도 세력이 시장 가격을 두고 치열하게 전투를 벌이는 심리적, 물리적 가격대를 나타냅니다.
          </p>

          <h2>1. 지지와 저항의 개념과 심리학적 배경</h2>
          {/* Beautiful Support & Resistance SVG Wave Diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: 'auto', maxHeight: '150px' }}>
              {/* Resistance Line (Red) */}
              <line x1="10" y1="35" x2="390" y2="35" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="20" y="24" fill="var(--color-bearish)" fontSize="10.5" fontWeight="bold">저항선 (Resistance Line) - 매도 공급 집중</text>
              
              {/* Support Line (Green) */}
              <line x1="10" y1="115" x2="390" y2="115" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="4 4" />
              <text x="20" y="134" fill="var(--color-bullish)" fontSize="10.5" fontWeight="bold">지지선 (Support Line) - 매수 수요 집중</text>
              
              {/* Price Wave (Indigo path bouncing between lines) */}
              <path d="M 30,115 L 80,35 L 140,115 L 200,35 L 260,115 L 310,35 L 360,115" fill="none" stroke="#5a52e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Peak Dots */}
              <circle cx="80" cy="35" r="4" fill="var(--color-bearish)" />
              <circle cx="200" cy="35" r="4" fill="var(--color-bearish)" />
              <circle cx="310" cy="35" r="4" fill="var(--color-bearish)" />

              {/* Trough Dots */}
              <circle cx="30" cy="115" r="4" fill="var(--color-bullish)" />
              <circle cx="140" cy="115" r="4" fill="var(--color-bullish)" />
              <circle cx="260" cy="115" r="4" fill="var(--color-bullish)" />
              <circle cx="360" cy="115" r="4" fill="var(--color-bullish)" />
            </svg>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-app)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', lineHeight: 1.5, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>📊</span>
              <span><strong>해석:</strong> 주가가 저항선에 닿으면 매도 물량 압박에 밀려 내려오고, 지지선에 다다르면 저점 대기 매수세 덕분에 반등합니다. 이 구간들이 돌파되면 역할 전환(S/R Flip)이 일어납니다.</span>
            </div>
          </div>

          <ul style={{ paddingLeft: '16px' }}>
            <li><strong>지지선 (Support Line)</strong>: 주가가 하락할 때 특정 가격대 이하로 떨어지지 않도록 대기 매수 수요가 집중적으로 유입되어 하락을 방어해 주는 구간입니다. (과거 반등 기억의 학습 효과)</li>
            <li><strong>저항선 (Resistance Line)</strong>: 주가가 상승할 때 특정 가격대 이상으로 올라가지 못하도록 매도 매물과 공매도 포지션이 출현하여 시세를 짓누르는 구간입니다. (차익 실현 및 본전 대기 물량 밀집)</li>
          </ul>

          <h2>2. 지지와 저항의 강도 판별 조건 (Strength of S/R)</h2>
          <ol style={{ paddingLeft: '16px' }}>
            <li><strong>터치 횟수 (Touches)</strong>: 특정 가격대에서 반등하거나 저항받은 횟수가 많을수록 그 선의 신뢰도는 높아집니다. 단, 너무 많은 터치는 점진적으로 매수/매도 벽을 소모시켜 최종적으로는 돌파되도록 유도합니다.</li>
            <li><strong>거래량 (Volume)</strong>: 특정 지지/저항선 부근에서 거대한 거래량이 터졌었다면, 그 자리는 대규모 손바꿈이나 매물이 누적된 <strong>'오더 블록(Order Block)'</strong> 역할을 하여 강한 방어력이 발생합니다.</li>
            <li><strong>최근성 (Recency)</strong>: 3년 전 지지선보다 최근 1~2주 내에 다진 지지선이 현재 시장 참여자들에게 강한 기억으로 작용하여 더 큰 힘을 가집니다.</li>
            <li><strong>라운드 피겨 (Round Numbers)</strong>: 주당 100달러, 1,000만 원, 1달러 등 딱 떨어지는 소수점/자리수 가격은 강력한 심리적 지지/저항 역할을 합니다.</li>
          </ol>

          <h2>3. 지지와 저항의 역할 전환 (Role Reversal)</h2>
          <p>지지와 저항선이 강하게 뚫리면 기존의 성질이 180도 뒤바뀌는 현상이 일어나며, 이를 <strong>역할 전환(Role Reversal)</strong>이라고 합니다.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13px' }}>저항선 돌파 후 지지선화 (R → S Flip)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                오랫동안 뚫지 못하던 강한 저항선 위로 주가가 확실히 안착하면, 공매도를 쳤다 물린 사람들이 평단가 부근에서 포지션을 청산(매수 환매수)하고 관망하던 대기 매수세가 가세하면서 이제는 든든한 <strong>지지선</strong>으로 탈바꿈합니다.
              </p>
            </div>
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13px' }}>지지선 붕괴 후 저항선화 (S → R Flip)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                아래로 깨진 지지선은 주가가 반등하려 할 때 매수 평단가 부근에서 본전 탈출하려는 투매 물량이 쏟아지며 강력한 <strong>저항선</strong>으로 변합니다.
              </p>
            </div>
          </div>

          <h2>4. 돌파와 함정: 참돌파 vs 가짜 돌파 (Traps)</h2>
          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <ShieldAlert size={16} style={{ color: 'var(--color-bearish)' }} />
              불 트랩 (Bull Trap - 가짜 상승 돌파)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}>저항선 위로 주가가 급등하며 돌파 성공을 알리는 듯했으나, 개인들의 추격 매수 물량을 받은 세력의 대량 매도 폭탄이 떨어지며 종가 기준으로 저항선 밑으로 다시 처박히는 현상입니다. 고점에서 개미들을 낚아 물량을 넘기기 위해 장중 돌파를 인위적으로 유도하는 함정입니다.</p>
          </div>
          
          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <ShieldAlert size={16} style={{ color: 'var(--color-bullish)' }} />
              베어 트랩 (Bear Trap - 가짜 하락 이탈)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}>지지선이 아래로 무너져 공포 투매가 유도되고 공매도가 급증했으나, 이내 거래량이 실린 강력한 양봉으로 지지선을 회복한 뒤 오히려 대폭등하는 현상입니다. 바닥에 밀집된 스톱 로스(Stop-loss) 물량을 싹 쓸어가기 위한(Sweep) 세력의 흔한 털기 기법입니다.</p>
          </div>

          <h3>가짜 돌파를 예방하는 검수법</h3>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.65' }}>
            <li><strong>종가 확인:</strong> 장중 캔들이 아무리 저항선 위로 치솟아도 봉 마감(종가)이 저항선 아래로 내려오면 돌파는 실패한 것입니다. 종가 안착 여부를 반드시 체크하십시오.</li>
            <li><strong>거래량 동반 여부:</strong> 참돌파는 기존의 강력한 대기 매물벽을 뚫고 오르는 것이기 때문에 <strong>평균 거래량의 2~3배 이상의 폭발적인 거래량</strong>이 함께 터져야 신뢰도가 높습니다.</li>
            <li><strong>리테스트(Retest) 활용:</strong> 돌파가 완성된 직후에 따라붙기보다, 가격이 다시 그 이탈한 선까지 하락하여 지지(또는 저항)를 해 주는 눌림목 반응을 확인하고 진입하는 것이 안전합니다.</li>
          </ul>
        </div>
      )
    },
    '03_trendlines_channels.md': {
      category: '추세선과 채널',
      title: '03. 추세선과 평행 채널 작도 이론',
      content: (
        <div className="theory-markdown">
          <h1>03. 추세선과 평행 채널 작도 이론 (Trendlines & Channels)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            트레이딩 명언 중 "추세는 당신의 친구다 (Trend is your friend)"라는 말이 있듯이, 시장의 현재 흐름이 상방, 하방, 혹은 횡보 중인지를 명확히 식별하는 것이 기술적 분석의 기본입니다.
          </p>

          <h2>1. 올바른 추세선 작도법과 규칙 (Trendline Drawing)</h2>
          <p>추세선(Trendline)은 주가 움직임의 주요 저점들을 잇거나(상승 추세선), 고점들을 이어(하락 추세선) 현재 시장의 지배적인 힘의 방향을 나타내는 사선형 지지/저항선입니다.</p>
          <ul style={{ paddingLeft: '16px' }}>
            <li><strong>상승 추세선 (Uptrend Line)</strong>: 점점 높아지는 저점(Higher Lows)들을 연결하여 그린 선입니다. 이 선은 가격 하락 시 <strong>동적 지지선(Dynamic Support)</strong> 역할을 합니다.</li>
            <li><strong>하락 추세선 (Downtrend Line)</strong>: 점점 낮아지는 고점(Lower Highs)들을 연결하여 그린 선입니다. 이 선은 가격 상승 시 <strong>동적 저항선(Dynamic Resistance)</strong> 역할을 합니다.</li>
          </ul>

          <h3>추세선의 신뢰성을 보장하는 4대 철칙</h3>
          <ol style={{ paddingLeft: '16px' }}>
            <li><strong>3점 테스트 법칙 (3rd Touch Rule)</strong>: 반드시 주가가 되돌아와 <strong>세 번째 터치(3rd Touch)에서 반등 혹은 저항에 성공</strong>해야 유효한 추세선으로 판정합니다.</li>
            <li><strong>꼬리 vs 몸통 일관성</strong>: 꼬리 끝을 이을지 몸통 끝을 이을지 일관되어야 합니다. 일반적으로 장중의 극단적 가격 합의 한계점까지 포함하는 <strong>꼬리 끝(Wick to Wick)</strong> 연결 방식이 신뢰도가 높습니다.</li>
            <li><strong>각도의 지속 가능성</strong>: 경사가 너무 가파르면(예: 45도 이상) 지속 시간이 매우 짧고 붕괴되기 쉽습니다. 지속력 높은 건강한 추세선은 대략 <strong>20도~40도</strong> 사이의 적절한 각도를 이룹니다.</li>
            <li><strong>선형 스케일 vs 로그 스케일</strong>: 가격 변동폭이 수십 배씩 발생하는 비트코인이나 성장주 차트의 경우, 일반 선형(Linear) 차트 대신 <strong>로그(Logarithmic) 차트</strong> 스케일을 켜고 그려야 왜곡 현상이 없습니다.</li>
          </ol>

          <h2>2. 평행 채널의 구조와 매매 기법 (Parallel Channels)</h2>
          {/* Beautiful Parallel Channel SVG Diagram */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <svg viewBox="0 0 400 160" style={{ width: '100%', height: 'auto', maxHeight: '160px' }}>
              {/* Background grids */}
              <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
              <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
              <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />

              {/* Upper Channel Line */}
              <line x1="20" y1="60" x2="380" y2="20" stroke="var(--color-bearish)" strokeWidth="2.5" />
              <text x="140" y="15" fill="var(--color-bearish)" fontSize="9.5" fontWeight="bold">채널 상단선 (저항: 분할 익절/숏 포지션 타점)</text>
              
              {/* Center Dash Line */}
              <line x1="20" y1="100" x2="380" y2="60" stroke="#5a52e5" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
              <text x="170" y="55" fill="var(--color-brand)" fontSize="9.5" fontWeight="bold" opacity="0.8">중심선 (Mid-line: 지지/저항 분곡점)</text>
              
              {/* Lower Channel Line */}
              <line x1="20" y1="140" x2="380" y2="100" stroke="var(--color-bullish)" strokeWidth="2.5" />
              <text x="120" y="152" fill="var(--color-bullish)" fontSize="9.5" fontWeight="bold">채널 하단선 (지지: 롱 포지션 진입 타점)</text>
              
              {/* Wave Path */}
              <path d="M 40,138 L 90,52 L 150,113 L 210,38 L 270,101 L 320,30 L 350,75" fill="none" stroke="#5a52e5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Bounces */}
              <circle cx="40" cy="138" r="4.5" fill="var(--color-bullish)" />
              <circle cx="150" cy="113" r="4.5" fill="var(--color-bullish)" />
              <circle cx="270" cy="101" r="4.5" fill="var(--color-bullish)" />
              
              <circle cx="90" cy="52" r="4.5" fill="var(--color-bearish)" />
              <circle cx="210" cy="38" r="4.5" fill="var(--color-bearish)" />
              <circle cx="320" cy="30" r="4.5" fill="var(--color-bearish)" />
            </svg>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-app)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', lineHeight: 1.5, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>📊</span>
              <span><strong>채널 매매 핵심:</strong> 추세 중심선이 지켜지면 상단 돌파가 탄력을 받고, 중심선이 붕괴되면 하단선 이탈 리스크가 급증합니다.</span>
            </div>
          </div>

          <ul style={{ paddingLeft: '16px' }}>
            <li><strong>채널 하단 (지지선)</strong>: 강세 추세 속에서 가장 매력적인 <strong>롱(매수) 진입 타점</strong>입니다. 손절선은 채널 하단 이탈 직후로 아주 짧게 잡을 수 있습니다.</li>
            <li><strong>채널 상단 (저항선)</strong>: 롱 포지션 보유자들의 주요 <strong>분할 익절 구간</strong>이며, 숏 포지션 진입 타점으로 활용됩니다.</li>
            <li><strong>채널 중심선 (Mid-line)의 중요성</strong>:
              <ul style={{ paddingLeft: '16px', marginTop: '4px' }}>
                <li>중심선은 단기적인 지지와 저항선 역할을 수행합니다.</li>
                <li>주가가 채널 중심선을 상향 돌파하면 에너지가 상방 경계선까지 닿으려는 성질이 있으며, 반대로 중심선을 넘지 못하고 꺾이면 하단선을 깨뜨리러 내려갈 위험이 커집니다. 즉, <strong>추세 강도의 가속/감속 판별 기준</strong>입니다.</li>
              </ul>
            </li>
          </ul>

          <h2>3. 추세선 이탈과 붕괴 (Breakout & Breakdown)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-bearish)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>추세선 하방 이탈 (Breakdown)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                우상향 상승 추세선을 캔들 종가 기준으로 하방으로 뚫고 내려앉는 현상입니다. 이는 매수 주도권이 완전히 소멸하고 공급 폭탄이 시장을 잠식했음을 의미하므로 즉각적인 포지션 축소나 손절이 요구됩니다.
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-bullish)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>추세선 상향 돌파 (Breakout)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                하락 추세 저항선을 장대양봉 종가 및 대량 거래량으로 상방 돌파하는 현상입니다. 하락 관성을 이겨내고 새로운 상승 랠리로 회귀함을 뜻하므로 강력한 매수 신호가 됩니다.
              </p>
            </div>
          </div>
        </div>
      )
    },
    '04_chart_patterns.md': {
      category: '차트 패턴',
      title: '04. 클래식 차트 패턴 및 목표가 계산',
      content: (
        <div className="theory-markdown">
          <h1>04. 클래식 차트 패턴 및 목표가 계산 (Chart Patterns)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            차트 패턴은 수십 년간 수백만 명의 트레이더들이 탐욕과 공포에 반응하며 차트에 남겨놓은 기하학적인 흔적입니다. 이를 통해 힘겨루기가 끝나는 지점과 이후 시세 분출 방향을 예측할 수 있습니다.
          </p>

          <h2>1. 대표적 추세 반전형 패턴 (Reversal Patterns)</h2>
          
          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <TrendingUp size={16} style={{ color: 'var(--color-brand)' }} />
              헤드앤숄더 (Head & Shoulders) & 역헤드앤숄더 (Inverse H&S)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}>상승 고점권에서 세 개의 봉우리를 만드는 패턴으로, 가운데 봉우리(머리)가 가장 높고 양쪽(왼쪽/오른쪽 어깨)이 상대적으로 낮으며 저점들을 연결한 지지선인 <strong>넥라인(Neckline)</strong>을 가집니다.</p>
            <ul style={{ paddingLeft: '16px', fontSize: '12.5px', marginTop: '6px', color: 'var(--text-secondary)' }}>
              <li><strong>해석</strong>: 오른쪽 어깨 형성 시 이전 고점(머리)을 넘기지 못해(낮아진 고점) 매수세 힘 소멸을 증명하며, <strong>넥라인 지지선이 붕괴되는 순간 하락 반전이 확정</strong>됩니다.</li>
              <li><strong>목표 가격 계산 (Measured Target)</strong>: 머리 고점부터 넥라인까지의 수직 거리(H)를 계산하여, 넥라인이 아래로 무너진 이탈 지점부터 동일한 거리(H)만큼 하방으로 시세가 떨어질 것으로 예측합니다.</li>
            </ul>
          </div>

          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <TrendingUp size={16} style={{ color: 'var(--color-brand)' }} />
              이중 천정형 (Double Top) & 이중 바닥형 (Double Bottom)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>이중 천정형 (M 패턴)</strong>: 주가가 강한 상승 후 특정 저항선에서 두 번 막히고 이전 저점(넥라인)을 이탈하는 패턴으로, 대표적인 하락 반전 신호입니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '8px' }}><strong>이중 바닥형 (W 패턴)</strong>: 하락 추세 바닥에서 비슷한 가격대 지지선을 두 번 테스트해 바닥을 공고히 다진 뒤 넥라인을 상향 돌파하는 패턴으로, 대표적 상승 반전 신호입니다.</p>
          </div>

          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <TrendingUp size={16} style={{ color: 'var(--color-brand)' }} />
              상승 쐐기형 (Rising Wedge) & 하락 쐐기형 (Falling Wedge)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>상승 쐐기형</strong>: 저점 상승 속도가 고점 상승 속도보다 빨라 위쪽에서 수렴하는 형태입니다. 매수 에너지가 갈수록 고갈됨을 뜻하므로 <strong>일반적으로 하방 붕괴(Bearish Breakdown)</strong>를 유도합니다.</p>
            <p style={{ fontSize: '13px', lineHeight: 1.6, marginTop: '8px' }}><strong>하락 쐐기형</strong>: 고점 하락 속도가 저점 하락 속도보다 빨라 아래쪽에서 수렴하는 형태로, 일반적으로 <strong>상방 돌파(Bullish Breakout)</strong>합니다.</p>
          </div>

          <h2>2. 대표적 추세 지속형 패턴 (Continuation Patterns)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '14px 0' }}>
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>불 플래그 (Bull Flag) & 베어 플래그 (Bear Flag)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                <strong>불 플래그</strong>: 가격이 수직 폭등(깃대)한 뒤, 완만하게 우하향하는 작은 평행 채널(깃발) 형태 조정을 거쳐 채널 상단을 위로 뚫는 패턴입니다. 이전 상승 기둥인 <strong>깃대의 높이만큼</strong> 돌파 지점으로부터 추가 상승을 기대합니다.<br />
                <strong>베어 플래그</strong>: 수직 급락 후 우상향하는 짧은 조정을 거치다가 채널 하단을 붕괴시키며 깃대 크기만큼 추가 폭락하는 하락 지속 패턴입니다.
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>상승 삼각수렴 (Ascending Triangle) & 하락 삼각수렴 (Descending Triangle)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                <strong>상승 삼각수렴</strong>: 고점 저항선은 수평이나 저점은 우상향하는 형태입니다. 매수 압력이 위로 계속 압박하고 있어 수평 저항선 돌파 시 <strong>상방으로 시세 분출</strong>이 일어날 확률이 큽니다.<br />
                <strong>하락 삼각수렴</strong>: 수평 지지선을 두고 고점들이 계속 낮아지는 구조로, 일반적으로 <strong>하방 붕괴</strong> 가능성이 매우 큽니다.
              </p>
            </div>
          </div>

          <h2>3. 패턴 매매 실전 검수 수칙</h2>
          <div style={{ background: 'rgba(90, 82, 229, 0.03)', border: '1px solid rgba(90, 82, 229, 0.12)', borderRadius: '12px', padding: '16px', fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>1. 거래량으로 최종 컨펌하라:</strong><br />
              넥라인이나 수렴 상단을 돌파할 때는 반드시 <strong>평소 거래량의 수배 수준에 달하는 강력한 거래량이 동반</strong>되어야 참돌파입니다.
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>2. 넥라인 돌파 마감(종가) 시에만 진입하라:</strong><br />
              넥라인이 뚫릴 것 같다고 해서 미리 예측 진입하면 넥라인 반등 시 극심한 손실을 입습니다. 반드시 캔들이 최종적으로 이탈 마감한 것을 보고 진입해야 합니다.
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>3. 손절선 설정:</strong><br />
              돌파된 넥라인 바로 아래 혹은 직전의 최근 저점(Higher Low) 바로 밑에 엄격히 손절을 배치해야 계좌를 방어할 수 있습니다.
            </div>
          </div>
        </div>
      )
    },
    '05_technical_indicators.md': {
      category: '보조지표',
      title: '05. 기술적 보조지표 및 다이버전스 분석',
      content: (
        <div className="theory-markdown">
          <h1>05. 기술적 보조지표 및 다이버전스 분석 (Technical Indicators)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            기술적 보조지표는 가격과 거래량이라는 가공되지 않은 데이터를 수학적 수식으로 정제하여 현재 추세의 방향, 강도, 과열 여부를 확인하는 도구입니다.
          </p>

          <h2>1. 이동평균선 (Moving Averages - 이평선)</h2>
          <ul style={{ paddingLeft: '16px' }}>
            <li><strong>지수이동평균 (EMA)</strong>: 최근 가격에 높은 가중치를 두어 주가 변동에 민감하게 반응하므로 <strong>EMA 20일, 50일, 200일선</strong>이 메인으로 널리 쓰입니다.</li>
            <li><strong>정배열</strong>: 단기(20) &gt; 중기(50) &gt; 장기(200) 순 정렬. 하락 시 이평선이 강력한 지지선으로 작동하는 강력한 상승 국면입니다.</li>
            <li><strong>역배열</strong>: 장기(200) &gt; 중기(50) &gt; 단기(20) 순 정렬. 반등 시마다 매물 저항벽이 되므로 매매 비중을 축소해야 합니다.</li>
            <li><strong>골든크로스 / 데드크로스</strong>: 단기선이 장기선을 상향 돌파(골든)하거나 하향 돌파(데드)할 때 추세 전환의 중요 신호가 됩니다.</li>
          </ul>

          <h2>2. 상대강도지수 (RSI)</h2>
          {/* Beautiful RSI Slider Gauge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: 'var(--bg-muted)', padding: '20px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                <span>RSI = 0</span>
                <span style={{ color: 'var(--color-bearish)' }}>70 (과매수)</span>
                <span style={{ color: 'var(--color-bullish)' }}>30 (과매도)</span>
                <span>RSI = 100</span>
              </div>
              {/* Slider track */}
              <div style={{ height: '24px', background: '#cbd5e1', borderRadius: '12px', position: 'relative', overflow: 'hidden', border: '1px solid var(--border-color)', opacity: 0.85 }}>
                {/* Overbought area (70-100) */}
                <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '30%', background: 'rgba(239, 68, 68, 0.18)', borderLeft: '1.5px dashed var(--color-bearish)' }} />
                {/* Oversold area (0-30) */}
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '30%', background: 'rgba(16, 185, 129, 0.18)', borderRight: '1.5px dashed var(--color-bullish)' }} />
                {/* Central area (30-70) */}
                <div style={{ position: 'absolute', left: '30%', width: '40%', top: 0, bottom: 0, background: 'rgba(90, 82, 229, 0.08)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ fontSize: '9.5px', color: 'var(--color-brand)', fontWeight: 800 }}>적정 변동 영역 (30 ~ 70)</span>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--text-muted)', fontWeight: 600 }}>
                <span>침체 (과매도)</span>
                <span>중립</span>
                <span>과열 (과매수)</span>
              </div>
            </div>
            
            {/* Highlight Callouts for RSI */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
              <span style={{ fontSize: '10.5px', background: 'rgba(239, 68, 68, 0.08)', color: 'var(--color-bearish)', padding: '4px 8px', borderRadius: '6px', fontWeight: 700 }}>
                ⚠️ RSI 70 이상: 과매수 (추격매수 금지)
              </span>
              <span style={{ fontSize: '10.5px', background: 'rgba(16, 185, 129, 0.08)', color: 'var(--color-bullish)', padding: '4px 8px', borderRadius: '6px', fontWeight: 700 }}>
                🌱 RSI 30 이하: 과매도 (분할매수 고려)
              </span>
            </div>
          </div>

          <ul style={{ paddingLeft: '16px' }}>
            <li><strong>과매수 (RSI &gt;= 70)</strong>: 단기 매수세 과열로 신규 매수를 지양해야 하는 구간입니다.</li>
            <li><strong>과매도 (RSI &lt;= 30)</strong>: 단기 과락 상태로 기술적 반등 가능성이 높습니다.</li>
            <li><strong>⚠️ 과매도 고착화 오류</strong>: 강력한 폭락장에서는 RSI가 10~20 근방 바닥 영역에 박힌 채 가격이 계속 하락할 수 있으므로 단순 수치 도달만으로 기계적인 진입은 엄금해야 합니다.</li>
          </ul>

          <h2>3. 강력한 역추세 치트키: RSI 다이버전스 (Divergence)</h2>
          {/* Beautiful Divergence Diagrams */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-muted)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', margin: '18px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* Bullish Divergence */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bullish)' }}>일반 상승 다이버전스</span>
                <svg viewBox="0 0 160 100" style={{ width: '100%', height: 'auto', background: 'var(--bg-app)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  {/* Price line going DOWN */}
                  <path d="M 20,20 L 70,60 L 90,40 L 140,80" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
                  <line x1="70" y1="60" x2="140" y2="80" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="60" r="3.5" fill="var(--text-secondary)" />
                  <circle cx="140" cy="80" r="3.5" fill="var(--text-secondary)" />
                  <text x="25" y="94" fill="var(--color-bearish)" fontSize="8.5" fontWeight="700">주가 저점 낮아짐 (↓)</text>

                  {/* RSI line going UP */}
                  <path d="M 20,70 L 70,80 L 90,75 L 140,60" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" />
                  <line x1="70" y1="80" x2="140" y2="60" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="80" r="3.5" fill="var(--color-brand)" />
                  <circle cx="140" cy="60" r="3.5" fill="var(--color-brand)" />
                  <text x="25" y="46" fill="var(--color-bullish)" fontSize="8.5" fontWeight="700">RSI 저점 높아짐 (↑)</text>
                </svg>
              </div>

              {/* Bearish Divergence */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-bearish)' }}>일반 하락 다이버전스</span>
                <svg viewBox="0 0 160 100" style={{ width: '100%', height: 'auto', background: 'var(--bg-app)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
                  {/* Price line going UP */}
                  <path d="M 20,80 L 70,40 L 90,55 L 140,20" fill="none" stroke="var(--text-primary)" strokeWidth="2.5" />
                  <line x1="70" y1="40" x2="140" y2="20" stroke="var(--color-bullish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="40" r="3.5" fill="var(--text-secondary)" />
                  <circle cx="140" cy="20" r="3.5" fill="var(--text-secondary)" />
                  <text x="25" y="14" fill="var(--color-bullish)" fontSize="8.5" fontWeight="700">주가 고점 높아짐 (↑)</text>

                  {/* RSI line going DOWN */}
                  <path d="M 20,45 L 70,60 L 90,50 L 140,80" fill="none" stroke="var(--color-brand)" strokeWidth="2.5" />
                  <line x1="70" y1="60" x2="140" y2="80" stroke="var(--color-bearish)" strokeWidth="2" strokeDasharray="3 3" />
                  <circle cx="70" cy="60" r="3.5" fill="var(--color-brand)" />
                  <circle cx="140" cy="80" r="3.5" fill="var(--color-brand)" />
                  <text x="25" y="94" fill="var(--color-bearish)" fontSize="8.5" fontWeight="700">RSI 고점 낮아짐 (↓)</text>
                </svg>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-app)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', lineHeight: 1.5, display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '16px', lineHeight: 1 }}>🔄</span>
              <span><strong>반전 시그널:</strong> 다이버전스는 주가의 가격 움직임과 지표 흐름이 서로 엇갈릴 때 발생하며, 매우 강력한 추세 종료/반전 시점을 나타냅니다.</span>
            </div>
          </div>

          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <HelpCircle size={16} style={{ color: 'var(--color-brand)' }} />
              일반 상승 다이버전스 (Regular Bullish Divergence)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>조건</strong>: 주가는 이전 저점보다 <strong>더 낮은 신저점</strong>을 갱신했으나, RSI 지표는 이전 저점보다 <strong>더 높은 저점</strong>을 만들며 우상향할 때 형성됩니다.</p>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              <strong>해석</strong>: 실제 하락 압력이 크게 죽고 내부 매수 에너지가 차오르고 있음을 뜻해, <strong>신뢰도가 극상인 하락 종결 및 상승 반전 신호</strong>입니다.
            </p>
          </div>
          
          <div className="pattern-box" style={{ borderLeft: '3px solid var(--color-brand)', background: 'var(--bg-subtle)', borderRadius: '12px', padding: '16px', margin: '14px 0' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
              <HelpCircle size={16} style={{ color: 'var(--color-brand)' }} />
              일반 하락 다이버전스 (Regular Bearish Divergence)
            </h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6 }}><strong>조건</strong>: 주가는 전고점을 넘어 <strong>더 높은 신고점</strong>을 달성했으나, RSI 지표의 고점은 전고점보다 <strong>낮게 꺾여</strong> 우하향할 때 형성됩니다.</p>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              <strong>해석</strong>: 상승 동력이 한계에 달해 <strong>조만간 대규모 폭락이 올 수 있다는 경고</strong>입니다.
            </p>
          </div>

          <h2>4. MACD와 볼린저 밴드 (MACD & Bollinger Bands)</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '14px 0' }}>
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>MACD (이동평균 수렴확산)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                MACD 선이 시그널 선을 아래에서 위로 <strong>골든크로스할 때 매수</strong>, 위에서 아래로 <strong>데드크로스할 때 매도</strong>하는 전략이 유용하며, 제로선(0) 위아래 돌파로 추세 방향을 체크합니다.
              </p>
            </div>
            
            <div style={{ background: 'var(--bg-muted)', borderLeft: '4px solid var(--color-brand)', padding: '12px 16px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--text-primary)', fontSize: '13.5px' }}>볼린저 밴드 (Bollinger Bands)</strong>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: '1.5' }}>
                중심선(20일 SMA)과 상하단 밴드로 구성되며, 밴드 폭이 좁아지는 <strong>스퀴즈(Squeeze)</strong> 현상 이후에는 강력한 변동성 폭발(상방/하방 이탈 추세)이 뒤따릅니다.
              </p>
            </div>
          </div>
        </div>
      )
    },
    '06_risk_management.md': {
      category: '리스크 관리',
      title: '06. 자금 관리 및 트레이딩 심리',
      content: (
        <div className="theory-markdown">
          <h1>06. 자금 관리 및 트레이딩 심리 (Risk & Money Management)</h1>
          <p className="lead-text" style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.6' }}>
            트레이딩은 확률 게임이며, <strong>자금 관리(Risk Management)는 장기적으로 살아남아 복리의 마법을 누리기 위한 유일한 생존 장치</strong>입니다.
          </p>

          <h2>1. 손익비(Risk-to-Reward)와 승률의 수학적 관계</h2>
          <p>트레이딩의 장기 기대값은 <strong>승률(Win Rate)</strong>과 <strong>손익비(Risk-to-Reward Ratio)</strong>의 상호작용으로 결정됩니다. 손익비를 높게 유지할수록 본전 유지를 위한 최소 승률은 낮아집니다.</p>
          
          <table className="theory-table" style={{ width: '100%', borderCollapse: 'collapse', margin: '18px 0', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: 'var(--bg-muted)', borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                <th style={{ padding: '10px', fontSize: '12.5px', fontWeight: 800 }}>손익비 (손실:수익)</th>
                <th style={{ padding: '10px', fontSize: '12.5px', fontWeight: 800 }}>필요한 본전 승률</th>
                <th style={{ padding: '10px', fontSize: '12.5px', fontWeight: 800 }}>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '10px', fontSize: '12px', fontWeight: 600 }}>1 : 1</td>
                <td style={{ padding: '10px', fontSize: '12px', fontWeight: 700, color: 'var(--text-primary)' }}>50%</td>
                <td style={{ padding: '10px', fontSize: '12px', color: 'var(--text-secondary)' }}>반반 확률을 넘겨야 수익 발생</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '10px', fontSize: '12px', fontWeight: 600 }}>1 : 2</td>
                <td style={{ padding: '10px', fontSize: '12px', fontWeight: 700, color: 'var(--color-bullish)' }}>33.3%</td>
                <td style={{ padding: '10px', fontSize: '12px', color: 'var(--text-secondary)' }}>10번 중 7번 틀려도 수익 우위</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '10px', fontSize: '12px', fontWeight: 600 }}>1 : 3</td>
                <td style={{ padding: '10px', fontSize: '12px', fontWeight: 700, color: 'var(--color-brand)' }}>25%</td>
                <td style={{ padding: '10px', fontSize: '12px', color: 'var(--text-secondary)' }}>10번 중 8번 손절당해도 계좌 우상향</td>
              </tr>
            </tbody>
          </table>

          <p>손익비가 최소 <strong>1:2 이상인 손익비 우위 타점</strong>(지지선 바로 위, 손절선이 짧은 눌림목 등)만 선별하여 골라 진입하는 버릇을 들여야 장기 생존할 수 있습니다.</p>

          <h2>2. 총자산의 2% 룰과 포지션 사이징 (Position Sizing)</h2>
          <p>감정에 치우친 배팅을 배제하고, 1회 거래당 최대 손실 가능액을 <strong>총 자산의 2%</strong>로 제한해야 합니다.</p>
          <div className="formula-box" style={{ background: 'var(--bg-muted)', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--color-brand)', borderRadius: '12px', padding: '16px', margin: '14px 0', fontFamily: 'monospace', fontSize: '13.5px', textAlign: 'center', color: 'var(--text-primary)', fontWeight: 'bold' }}>
            진입 금액 = (총 자산 × 0.02) / 손절 비율
          </div>
          <ul style={{ paddingLeft: '16px', fontSize: '13px', lineHeight: '1.6' }}>
            <li><strong>예시 상황:</strong> 총 원금 1,000만 원, 1회 손실 허용액 20만 원 (2%)</li>
            <li>손절 라인이 진입가 대비 <strong>-4%</strong> 지점인 경우:<br /><code style={{ background: 'var(--bg-app)', border: '1px solid var(--border-color)' }}>20만 원 / 0.04 = 500만 원</code> 진입</li>
            <li style={{ marginTop: '4px' }}>손절 라인이 진입가 대비 <strong>-10%</strong> 지점인 경우:<br /><code style={{ background: 'var(--bg-app)', border: '1px solid var(--border-color)' }}>20만 원 / 0.10 = 200만 원</code> 진입</li>
          </ul>
          <p style={{ marginTop: '8px' }}>이렇게 조절하면 <strong>10번 연속 손절을 맞아도 총 원금은 겨우 18% 감소</strong>하여 다음 기회를 엿볼 수 있습니다.</p>

          <h2>3. 레버리지와 마진 청산의 무서움 (Leverage & Liquidation)</h2>
          <div style={{ background: 'rgba(239, 68, 68, 0.03)', borderLeft: '4px solid var(--color-bearish)', padding: '14px 16px', borderRadius: '8px', margin: '14px 0' }}>
            <strong style={{ color: 'var(--color-bearish)', fontSize: '13.5px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldAlert size={15} />
              청산 거리(%) = 100% / 레버리지 배수
            </strong>
            <ul style={{ margin: '8px 0 0 16px', padding: 0, fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              <li><strong>10배 레버리지</strong>: 역방향으로 <strong>10%</strong> 움직이면 강제 청산(원금 전액 소멸)</li>
              <li><strong>50배 레버리지</strong>: 역방향으로 단 <strong>2%</strong>의 변동성 노이즈에 원금 완전 청산</li>
            </ul>
            <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>고배율 레버리지는 기하학적 확률 원리상 결국 반드시 파산하도록 설계되어 있습니다.</p>
          </div>

          <h2>4. 뇌동매매 방지와 감정 통제 법칙</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>1. FOMO 차단:</strong><br />
              계획에 없던 주가 급등 시 따라붙지 말고, 내가 설계한 타점까지 반드시 기다립니다.
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
              <strong style={{ color: 'var(--text-primary)' }}>2. 복수 매매 금지:</strong><br />
              손절 당한 직후 홧김에 비중을 높여 재진입하는 뇌동매매를 멈추기 위해, 하루 최대 <strong>-3R (3회 손절)</strong> 누적 손실 시 즉시 그날 매매를 종료하는 규칙을 세우십시오.
            </div>
          </div>
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

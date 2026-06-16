import React, { useState } from 'react';
import { BookOpen, Play, Lock, Trophy, ArrowLeft } from 'lucide-react';
import { TheoryReader } from './TheoryReader';
import { GlossaryViewer } from './GlossaryViewer';

import type { CategoryStat } from '../lib/ratingEngine';

interface DrillGymTabProps {
  onStartDrill: (theoryFile: string) => void;
  xp: number;
  drillStats: Record<string, CategoryStat>;
}

export const DrillGymTab: React.FC<DrillGymTabProps> = ({
  onStartDrill,
  xp,
  drillStats
}) => {
  const [subView, setSubView] = useState<'gym' | 'library' | 'dictionary'>('gym');
  const [activeTheory, setActiveTheory] = useState<string | null>(null);

  const drills = [
    {
      id: 1,
      category: 'A. 차트와 시장 기초',
      skillCategory: '시장구조/SR',
      title: 'A. 차트 & 시장 기초 훈련',
      desc: 'OHLC 구조, 호가와 체결 원리 및 슬리피지 관리 기초',
      file: '01_chart_market_basics.md',
      minXp: 0,
      gradient: 'linear-gradient(135deg, rgba(148, 163, 184, 0.08) 0%, rgba(148, 163, 184, 0.01) 100%)',
      borderColor: 'rgba(148, 163, 184, 0.22)'
    },
    {
      id: 2,
      category: 'B. 캔들스틱과 가격 행동',
      skillCategory: '캔들/가격행동',
      title: 'B. 캔들스틱 & 가격 행동 훈련',
      desc: '망치형, 유성형, 장악형 캔들 인지 및 가격 움직임 해독',
      file: '02_candlestick_price_action.md',
      minXp: 0,
      gradient: 'linear-gradient(135deg, rgba(90, 82, 229, 0.08) 0%, rgba(90, 82, 229, 0.01) 100%)',
      borderColor: 'rgba(90, 82, 229, 0.22)'
    },
    {
      id: 3,
      category: 'C. 시장 구조',
      skillCategory: '시장구조/SR',
      title: 'C. 시장 구조 & S/R 훈련',
      desc: '매물대 작도, 역할 전환(Role Reversal) 및 수평 구조 판독',
      file: '03_market_structure.md',
      minXp: 150,
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.01) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.22)'
    },
    {
      id: 4,
      category: 'D. 패턴과 돌파',
      skillCategory: '패턴/돌파',
      title: 'D. 차트 패턴 & 돌파 훈련',
      desc: '헤드앤숄더, 이중 천정/바닥, 삼각형 및 깃발 패턴 검수',
      file: '04_patterns_breakout.md',
      minXp: 300,
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.01) 100%)',
      borderColor: 'rgba(239, 68, 68, 0.22)'
    },
    {
      id: 5,
      category: 'E. 거래량과 유동성',
      skillCategory: '거래량/유동성',
      title: 'E. 거래량 & 유동성 스윕 훈련',
      desc: '불트랩/베어트랩 함정 포착 및 유동성 휩소 대응',
      file: '05_volume_liquidity.md',
      minXp: 450,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.01) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.22)'
    },
    {
      id: 6,
      category: 'F. 보조지표와 컨플루언스',
      skillCategory: '지표/컨플루언스',
      title: 'F. 보조지표 & 다이버전스 훈련',
      desc: 'EMA 배열 상태, RSI 과매도 고착화 오류 및 다이버전스 포착',
      file: '06_technical_indicators.md',
      minXp: 600,
      gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.01) 100%)',
      borderColor: 'rgba(124, 58, 237, 0.22)'
    },
    {
      id: 7,
      category: 'G. 멀티타임프레임과 시장 레짐',
      skillCategory: '추세/레짐',
      title: 'G. 멀티타임프레임 & 시장 레짐 훈련',
      desc: '타임프레임 정렬 분석 및 추세장/박스장 기후 판별',
      file: '07_multitimeframe_regime.md',
      minXp: 750,
      gradient: 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.01) 100%)',
      borderColor: 'rgba(217, 119, 6, 0.22)'
    },
    {
      id: 8,
      category: 'H. 셋업과 진입/청산',
      skillCategory: '셋업/실행',
      title: 'H. 진입/청산 셋업 & 실행 훈련',
      desc: '추적 손절매(Trailing Stop) 활용 및 기계적 주문 실행 판단',
      file: '08_setup_entry_exit.md',
      minXp: 900,
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.01) 100%)',
      borderColor: 'rgba(236, 72, 153, 0.22)'
    },
    {
      id: 9,
      category: 'I. 리스크와 포지션 관리',
      skillCategory: '리스크/심리',
      title: 'I. 리스크 & 포지션 관리 훈련',
      desc: '2% 룰 포지션 크기 수학적 사이징 및 손익비 기댓값 계산',
      file: '09_risk_position_management.md',
      minXp: 1050,
      gradient: 'linear-gradient(135deg, rgba(20, 184, 166, 0.08) 0%, rgba(20, 184, 166, 0.01) 100%)',
      borderColor: 'rgba(20, 184, 166, 0.22)'
    },
    {
      id: 10,
      category: 'J. 심리, 루틴, 복기',
      skillCategory: '리스크/심리',
      title: 'J. 트레이더 심리 & 매매 루틴 훈련',
      desc: 'FOMO 제어, 보복매매 차단 냉각기 및 매매일지 복기 습관',
      file: '10_psychology_routine_review.md',
      minXp: 1200,
      gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(244, 63, 94, 0.01) 100%)',
      borderColor: 'rgba(244, 63, 94, 0.22)'
    }
  ];

  const theoryModulesList = [
    { id: 1, title: '01. 차트와 시장 기초', desc: 'OHLC 구조, 호가와 체결 원리 및 슬리피지 관리', file: '01_chart_market_basics.md', category: 'A. 차트와 시장 기초' },
    { id: 2, title: '02. 캔들스틱과 가격 행동', desc: '망치형, 유성형 등 단일/복합 캔들 구성과 전쟁 심리', file: '02_candlestick_price_action.md', category: 'B. 캔들스틱과 가격 행동' },
    { id: 3, title: '03. 시장 구조와 S/R 분석', desc: '스윙구조(HH/HL), BOS와 MSB, 역할 전환(S/R Flip)', file: '03_market_structure.md', category: 'C. 시장 구조' },
    { id: 4, title: '04. 차트 패턴과 돌파 매매', desc: '반전/지속 패턴 및 돌파 판단의 3대 필터 검수 기법', file: '04_patterns_breakout.md', category: 'D. 패턴과 돌파' },
    { id: 5, title: '05. 거래량과 유동성 스윕', desc: 'VSA 스프레드 조화, 유동성 스윕 및 스톱 헌팅 포착', file: '05_volume_liquidity.md', category: 'E. 거래량과 유동성' },
    { id: 6, title: '06. 보조지표와 컨플루언스', desc: 'EMA 지지저항, RSI 일반/히든 다이버전스, 볼린저 밴드', file: '06_technical_indicators.md', category: 'F. 보조지표와 컨플루언스' },
    { id: 7, title: '07. 멀티타임프레임과 레짐', desc: '3타임프레임 정렬, 추세/박스 기후 구분 및 시나리오', file: '07_multitimeframe_regime.md', category: 'G. 멀티타임프레임과 시장 레짐' },
    { id: 8, title: '08. 셋업과 진입/청산 실행', desc: 'IF-THEN 룰, 지정가 대기 주문, 트레일링 스톱 기법', file: '08_setup_entry_exit.md', category: 'H. 셋업과 진입/청산' },
    { id: 9, title: '09. 리스크와 포지션 관리', desc: '손익비 기댓값 공식, 2% 룰 기반 포지션 사이징 수학', file: '09_risk_position_management.md', category: 'I. 리스크와 포지션 관리' },
    { id: 10, title: '10. 심리, 루틴, 복기 습관', desc: 'FOMO 억제, 보복매매 차단, 매매일지 복기 루틴 구축', file: '10_psychology_routine_review.md', category: 'J. 심리, 루틴, 복기' }
  ];

  return (
    <div className="drill-gym-wrapper" style={{ padding: '24px 20px', paddingBottom: '90px' }}>
      {/* Sub navigation header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Trophy size={20} style={{ color: 'var(--color-brand)' }} />
          <span>
            {subView === 'gym' ? '실전 차트 훈련소' : subView === 'library' ? '이론 백과' : '용어 사전'}
          </span>
        </h2>
        
        <div style={{ display: 'flex', gap: '6px' }}>
          {subView !== 'gym' && (
            <button 
              onClick={() => { setSubView('gym'); setActiveTheory(null); }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-secondary)',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              🏋️ 훈련소
            </button>
          )}
          <button 
            onClick={() => { setSubView('library'); setActiveTheory(null); }}
            style={{
              background: subView === 'library' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: subView === 'library' ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid var(--border-color)',
              color: subView === 'library' ? 'var(--color-brand)' : 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📚 이론 백과
          </button>
          <button 
            onClick={() => { setSubView('dictionary'); setActiveTheory(null); }}
            style={{
              background: subView === 'dictionary' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              border: subView === 'dictionary' ? '1px solid rgba(59, 130, 246, 0.4)' : '1px solid var(--border-color)',
              color: subView === 'dictionary' ? 'var(--color-brand)' : 'var(--text-secondary)',
              padding: '6px 12px',
              borderRadius: '16px',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            📖 용어 사전
          </button>
        </div>
      </div>

      {/* View router */}
      {subView === 'gym' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
          {drills.map((d) => {
            const isLocked = xp < d.minXp;
            const stats = drillStats[d.skillCategory] || { level: 1, accuracy: 50, attempts: 0, drillSessionCount: 0 };
            
            return (
              <div 
                key={d.id} 
                style={{ 
                  background: d.gradient, 
                  border: `1px solid ${isLocked ? 'rgba(255, 255, 255, 0.05)' : d.borderColor}`,
                  borderRadius: '20px', 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '16px',
                  position: 'relative',
                  opacity: isLocked ? 0.6 : 1,
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Lock Overlay Banner */}
                {isLocked && (
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    color: 'var(--text-secondary)',
                    fontWeight: 700
                  }}>
                    <Lock size={12} />
                    <span>{d.minXp} XP 해제</span>
                  </div>
                )}

                {/* Drill Title & Description */}
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {d.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {d.desc}
                  </p>
                </div>

                {/* Statistics Row (Level, Accuracy, Attempts) */}
                {!isLocked && (
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.2fr 1fr', 
                    background: 'rgba(0, 0, 0, 0.2)', 
                    borderRadius: '12px', 
                    padding: '10px 8px',
                    textAlign: 'center',
                    fontSize: '11px'
                  }}>
                    <div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>평가구분</div>
                      <div style={{ color: 'var(--color-brand)', fontWeight: 800, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{d.skillCategory}</div>
                    </div>
                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>평가숙련도</div>
                      <div style={{ color: 'var(--color-bullish)', fontWeight: 800 }}>{stats.accuracy}%</div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>훈련 횟수</div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 800 }}>
                        {stats.drillSessionCount !== undefined ? stats.drillSessionCount : Math.floor(stats.attempts / 5)}회
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <button 
                    onClick={() => {
                      setSubView('library');
                      setActiveTheory(d.file);
                    }}
                    style={{ 
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                      borderRadius: '12px',
                      padding: '10px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <BookOpen size={14} />
                    <span>이론 보기</span>
                  </button>

                  <button 
                    onClick={() => !isLocked && onStartDrill(d.file)}
                    disabled={isLocked}
                    style={{ 
                      flex: 1.3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      background: isLocked ? 'var(--bg-muted)' : 'var(--color-brand)',
                      border: isLocked ? '1px solid var(--border-color)' : 'none',
                      color: isLocked ? 'var(--text-muted)' : '#fff',
                      borderRadius: '12px',
                      padding: '10px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: isLocked ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {isLocked ? <Lock size={14} /> : <Play size={14} fill="currentColor" />}
                    <span>{isLocked ? '잠김' : '실전 훈련 시작'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {subView === 'library' && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {activeTheory === null ? (
            <div>
              <h2 className="card-title" style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={20} style={{ color: 'var(--color-brand)' }} />
                트레이딩 핵심 이론 백과
              </h2>
              <div className="modules-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {theoryModulesList.map((tm) => (
                  <div 
                    key={tm.id} 
                    className="module-card"
                    onClick={() => setActiveTheory(tm.file)}
                    style={{
                      cursor: 'pointer',
                      padding: '18px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s',
                      borderRadius: '16px',
                      border: '1px solid var(--border-color)',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.01) 0%, rgba(22, 26, 37, 0.4) 100%)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-brand)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  >
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '6px', color: 'var(--text-primary)' }}>{tm.title}</h3>
                      <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{tm.desc}</p>
                    </div>
                    <span className="category-tag" style={{ background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-brand)', fontSize: '11px', fontWeight: 700, padding: '4px 8px', borderRadius: '6px', flexShrink: 0 }}>
                      {tm.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <button 
                onClick={() => setActiveTheory(null)}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-secondary)', 
                  cursor: 'pointer', 
                  fontSize: '14px', 
                  fontWeight: 600,
                  marginBottom: '16px',
                  alignSelf: 'flex-start'
                }}
              >
                <ArrowLeft size={18} />
                <span>이론 목록으로 돌아가기</span>
              </button>
              <TheoryReader theoryFile={activeTheory} onBack={() => setActiveTheory(null)} />
            </div>
          )}
        </div>
      )}

      {subView === 'dictionary' && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <GlossaryViewer onBack={() => setSubView('gym')} />
        </div>
      )}
    </div>
  );
};

export default DrillGymTab;

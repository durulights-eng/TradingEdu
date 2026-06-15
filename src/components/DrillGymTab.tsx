import React, { useState } from 'react';
import { BookOpen, Play, Lock, Trophy, ArrowLeft } from 'lucide-react';
import { TheoryReader } from './TheoryReader';
import { GlossaryViewer } from './GlossaryViewer';

import type { CategoryStat } from '../lib/ratingEngine';

interface DrillGymTabProps {
  onStartDrill: (category: string) => void;
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
      category: '캔들/가격행동',
      title: '캔들/가격행동 훈련',
      desc: '캔들 구조 분석 및 단일/복합 캔들 반전 형태 즉각 인지',
      file: '01_candlestick_basics.md',
      minXp: 0,
      gradient: 'linear-gradient(135deg, rgba(90, 82, 229, 0.08) 0%, rgba(90, 82, 229, 0.01) 100%)',
      borderColor: 'rgba(90, 82, 229, 0.22)'
    },
    {
      id: 2,
      category: '시장구조/SR',
      title: '시장구조 & S/R 훈련',
      desc: '매물대 작도, 역할 전환(Role Reversal) 및 수평 구조 판독',
      file: '02_support_resistance.md',
      minXp: 0,
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.01) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.22)'
    },
    {
      id: 3,
      category: '추세/레짐',
      title: '추세선 & 시장 레짐 훈련',
      desc: '추세선 작도, 평행 채널 상하단 타점 및 시장의 추세성 식별',
      file: '03_trendlines_channels.md',
      minXp: 150,
      gradient: 'linear-gradient(135deg, rgba(217, 119, 6, 0.08) 0%, rgba(217, 119, 6, 0.01) 100%)',
      borderColor: 'rgba(217, 119, 6, 0.22)'
    },
    {
      id: 4,
      category: '패턴/돌파',
      title: '차트 패턴 & 돌파 훈련',
      desc: '헤드앤숄더, 이중 천정/바닥, 삼각형 및 깃발 패턴 검수',
      file: '04_chart_patterns.md',
      minXp: 300,
      gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.01) 100%)',
      borderColor: 'rgba(239, 68, 68, 0.22)'
    },
    {
      id: 5,
      category: '거래량/유동성',
      title: '거래량 & 유동성 스윕 훈련',
      desc: '불트랩/베어트랩 함정 포착 및 유동성 휩소 대응',
      file: '02_support_resistance.md',
      minXp: 450,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.01) 100%)',
      borderColor: 'rgba(59, 130, 246, 0.22)'
    },
    {
      id: 6,
      category: '지표/컨플루언스',
      title: '보조지표 & 다이버전스 훈련',
      desc: 'EMA 배열 상태, RSI 과매도 고착화 오류 및 다이버전스 포착',
      file: '05_technical_indicators.md',
      minXp: 600,
      gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(124, 58, 237, 0.01) 100%)',
      borderColor: 'rgba(124, 58, 237, 0.22)'
    },
    {
      id: 7,
      category: '셋업/실행',
      title: '진입/청산 셋업 & 실행 훈련',
      desc: '추적 손절매(Trailing Stop) 활용 및 기계적 주문 실행 판단',
      file: '06_risk_management.md',
      minXp: 750,
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.01) 100%)',
      borderColor: 'rgba(16, 185, 129, 0.22)'
    },
    {
      id: 8,
      category: '리스크/심리',
      title: '리스크 관리 & 매매 심리 훈련',
      desc: '2% 룰 포지션 사이징 수학 공식, 손익비 기댓값 계산 및 청산 방어',
      file: '06_risk_management.md',
      minXp: 900,
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.01) 100%)',
      borderColor: 'rgba(236, 72, 153, 0.22)'
    }
  ];

  const theoryModulesList = [
    { id: 1, title: '01. 캔들스틱 기초 (Candlesticks)', desc: '캔들의 구조와 단일/복합 캔들 반전 패턴', file: '01_candlestick_basics.md', category: '캔들스틱 기초' },
    { id: 2, title: '02. 지지와 저항 (Support & Resistance)', desc: '매물대 작도법 및 역할 전환과 가짜 돌파', file: '02_support_resistance.md', category: '지지와 저항' },
    { id: 3, title: '03. 추세선과 채널 (Trendlines & Channels)', desc: '추세 정의 및 평행 채널 작도와 추세선 돌파', file: '03_trendlines_channels.md', category: '추세선과 채널' },
    { id: 4, title: '04. 차트 패턴 (Chart Patterns)', desc: '헤드앤숄더 및 삼각형, 깃발형 패턴의 완성', file: '04_chart_patterns.md', category: '차트 패턴' },
    { id: 5, title: '05. 기술적 보조지표 (Technical Indicators)', desc: 'EMA 정배열, RSI 다이버전스 및 MACD 활용법', file: '05_technical_indicators.md', category: '보조지표' },
    { id: 6, title: '06. 리스크 관리 (Risk Management)', desc: '손익비 계산과 2% 룰 기반 포지션 사이징 공식', file: '06_risk_management.md', category: '리스크 관리' }
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
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '11px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              훈련소 홈
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
            const stats = drillStats[d.category] || { level: 1, accuracy: 50, attempts: 0 };
            
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
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>레벨</div>
                      <div style={{ color: 'var(--color-brand)', fontWeight: 800 }}>Lv.{stats.level}</div>
                    </div>
                    <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>숙련도</div>
                      <div style={{ color: 'var(--color-bullish)', fontWeight: 800 }}>{stats.accuracy}%</div>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '3px' }}>훈련 횟수</div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 800 }}>{stats.attempts}회</div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  <button 
                    onClick={() => {
                      // Switch to Library tab and select file
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
                    onClick={() => !isLocked && onStartDrill(d.category)}
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

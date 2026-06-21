import React, { useState, useEffect } from 'react';
import { Flame, Trophy, Play, Check, ShieldAlert, Sparkles, Award } from 'lucide-react';

interface WelcomeOnboardingProps {
  onClose: () => void;
}

export const WelcomeOnboarding: React.FC<WelcomeOnboardingProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [step1Active, setStep1Active] = useState(false);
  
  // Step 2 states
  const [elo, setElo] = useState(1000);
  const [barWidth, setBarWidth] = useState(0);

  // Step 3 states
  const [visibleChecks, setVisibleChecks] = useState<boolean[]>([false, false, false]);

  // Step 1 animation trigger
  useEffect(() => {
    if (currentStep === 1) {
      const timer = setTimeout(() => setStep1Active(true), 150);
      return () => clearTimeout(timer);
    } else {
      setStep1Active(false);
    }
  }, [currentStep]);

  // Step 2 ELO rating counter-up
  useEffect(() => {
    if (currentStep === 2) {
      setElo(1000);
      setBarWidth(0);
      let startTimestamp: number | null = null;
      const duration = 1500; // 1.5 seconds
      const startValue = 1000;
      const endValue = 1650;

      const stepAnimation = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        
        setElo(Math.floor(startValue + easeProgress * (endValue - startValue)));
        setBarWidth(easeProgress * 100);

        if (progress < 1) {
          window.requestAnimationFrame(stepAnimation);
        }
      };
      const frame = window.requestAnimationFrame(stepAnimation);
      return () => window.cancelAnimationFrame(frame);
    }
  }, [currentStep]);

  // Step 3 staggered checkmarks
  useEffect(() => {
    if (currentStep === 3) {
      setVisibleChecks([false, false, false]);
      
      const timer1 = setTimeout(() => {
        setVisibleChecks(prev => [true, prev[1], prev[2]]);
      }, 400);
      const timer2 = setTimeout(() => {
        setVisibleChecks(prev => [prev[0], true, prev[2]]);
      }, 900);
      const timer3 = setTimeout(() => {
        setVisibleChecks(prev => [prev[0], prev[1], true]);
      }, 1400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    localStorage.setItem('chartmon_onboarding_completed', 'true');
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#070b12',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      color: '#e4e8ed',
      fontFamily: "var(--font-main, 'Inter', sans-serif)",
      padding: '24px 20px',
      overflowY: 'auto'
    }}>
      <style>{`
        @keyframes pulse-glow {
          0% { transform: scale(0.95); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.75; box-shadow: 0 0 25px rgba(255, 91, 103, 0.7); }
          100% { transform: scale(0.95); opacity: 0.3; }
        }
        @keyframes glow-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float-badge {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .progress-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.3s;
        }
        .progress-dot.active {
          background: var(--color-brand, #7c6cfa);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      {/* Top Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="var(--color-brand, #7c6cfa)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="9" cy="7" r="1" fill="#50e3c2"/>
            <circle cx="15" cy="7" r="1" fill="#50e3c2"/>
          </svg>
          <strong style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>ChartMon</strong>
        </div>
        <button 
          onClick={handleComplete}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: 'var(--text-secondary, #8b99aa)',
            fontSize: '13px',
            fontWeight: 600,
            padding: '6px 12px',
            borderRadius: '20px',
            cursor: 'pointer'
          }}
        >
          건너뛰기
        </button>
      </div>

      {/* Main Slide Content Area */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px 0 32px'
      }}>
        
        {/* Step 1: 함정 인지 */}
        {currentStep === 1 && (
          <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>
            <div style={{
              transform: step1Active ? 'translateY(0)' : 'translateY(-15px)',
              opacity: step1Active ? 1 : 0,
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 91, 103, 0.1)',
                border: '1px solid rgba(255, 91, 103, 0.25)',
                color: 'var(--color-bearish, #ff5b67)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <ShieldAlert size={14} />
                실전 차트 속 함정 인지
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                책에서 배운 단순 패턴이<br />
                실전에서 무너지는 이유
              </h2>
              <p style={{ color: 'var(--text-secondary, #8b99aa)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                세력은 개미들의 매수세를 유도하기 위해 교묘한 돌파 트랩을 만듭니다. 함정 구간을 정확히 가려내는 훈련이 먼저입니다.
              </p>
            </div>

            {/* Simulated Chart Container */}
            <div style={{
              background: '#0c1119',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              borderRadius: '16px',
              padding: '24px 20px',
              position: 'relative',
              height: '180px',
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              marginTop: '10px'
            }}>
              {/* Grid Lines */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px 0', pointerEvents: 'none' }}>
                <div style={{ borderBottom: '1px dashed rgba(255,255,255,0.03)', width: '100%' }} />
                <div style={{ borderBottom: '1px dashed rgba(255,255,255,0.03)', width: '100%' }} />
                <div style={{ borderBottom: '1px dashed rgba(255,255,255,0.03)', width: '100%' }} />
              </div>

              {/* Candles */}
              <div style={{ height: '70px', width: '12px', background: '#23d18b', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', height: '110%', width: '2px', background: '#23d18b', left: '5px', bottom: '-5%' }} />
              </div>
              <div style={{ height: '90px', width: '12px', background: '#23d18b', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', height: '130%', width: '2px', background: '#23d18b', left: '5px', bottom: '-15%' }} />
              </div>
              <div style={{ height: '40px', width: '12px', background: '#ff5b67', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', height: '150%', width: '2px', background: '#ff5b67', left: '5px', bottom: '-25%' }} />
              </div>
              {/* Breakthrough Trap candle */}
              <div style={{ height: '110px', width: '12px', background: '#23d18b', borderRadius: '2px', position: 'relative', zIndex: 2 }}>
                <div style={{ position: 'absolute', height: '140%', width: '2px', background: '#23d18b', left: '5px', bottom: '-10%' }} />
                
                {/* Trap Pulse Highlight */}
                <div style={{
                  position: 'absolute',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 91, 103, 0.2)',
                  border: '2px solid var(--color-bearish, #ff5b67)',
                  top: '-15px',
                  left: '-10px',
                  animation: 'pulse-glow 2s infinite',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '9px',
                  color: '#fff',
                  textShadow: '0 1px 3px rgba(0,0,0,0.5)'
                }}>TRAP</div>
              </div>
              
              <div style={{ height: '50px', width: '12px', background: '#ff5b67', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', height: '120%', width: '2px', background: '#ff5b67', left: '5px', bottom: '-10%' }} />
              </div>
              <div style={{ height: '30px', width: '12px', background: '#ff5b67', borderRadius: '2px', position: 'relative' }}>
                <div style={{ position: 'absolute', height: '160%', width: '2px', background: '#ff5b67', left: '5px', bottom: '-30%' }} />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: ELO 실력 측정 */}
        {currentStep === 2 && (
          <div style={{ width: '100%', maxWidth: '420px', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(124, 108, 250, 0.1)',
              border: '1px solid rgba(124, 108, 250, 0.25)',
              color: 'var(--color-brand, #7c6cfa)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              <Sparkles size={14} />
              AI 1:1 맞춤형 난이도 튜닝
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              풀 때마다 자동 조절되는<br />
              정밀 난이도 동적 매칭 시스템
            </h2>
            <p style={{ color: 'var(--text-secondary, #8b99aa)', fontSize: '14px', lineHeight: 1.6, marginBottom: '28px' }}>
              나의 실력을 ELO 레이팅(RP)으로 측정하여 $\pm 200$ RP 범위 내의 최적화된 주식 차트 문제를 매칭합니다. 하루 15분, 차트 근육이 빠르게 강화됩니다.
            </p>

            {/* ELO Graph Widget */}
            <div style={{
              background: '#0c1119',
              border: '1px solid rgba(148, 163, 184, 0.12)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary, #8b99aa)', fontWeight: 600 }}>트레이더 등급</span>
                <span style={{ fontSize: '12px', color: '#ffba3a', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Trophy size={14} />
                  실시간 랭크 업
                </span>
              </div>

              {/* Counter Display */}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px', margin: '10px 0' }}>
                <span style={{ fontSize: '42px', fontWeight: 900, color: '#fff', fontVariantNumeric: 'cubic-bezier(0.1, 1, 0.1, 1)' }}>
                  {elo}
                </span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-brand, #7c6cfa)' }}>
                  RP
                </span>
              </div>

              {/* Progress Bar Container */}
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: `${barWidth}%`,
                  background: 'linear-gradient(90deg, #7c6cfa 0%, #a78bfa 100%)',
                  borderRadius: '4px',
                  transition: 'none' // Controlled strictly by the interval/RAF loop
                }} />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted, #5a6577)', fontWeight: 600 }}>
                <span>초급 트레이더 (1000 RP)</span>
                <span>프로 분석가 (1800 RP)</span>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: 뇌동매매 습관 극복 */}
        {currentStep === 3 && (
          <div style={{ width: '100%', maxWidth: '420px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(35, 209, 139, 0.1)',
                border: '1px solid rgba(35, 209, 139, 0.25)',
                color: 'var(--color-bullish, #23d18b)',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                <Flame size={14} />
                하루 15분 매매 나쁜 습관 극복
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                충동적인 매매 버릇을<br />
                잡아주는 차트 트레이닝
              </h2>
              <p style={{ color: 'var(--text-secondary, #8b99aa)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                내 매매 결정을 뒤바꿀 3가지 고질적 습관을 매일 가상 차트 훈련을 통해 근본적으로 튜닝하고 예방합니다.
              </p>
            </div>

            {/* Checklist items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
              <div style={{
                background: 'rgba(12, 17, 25, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.08)',
                borderRadius: '12px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                opacity: visibleChecks[0] ? 1 : 0.25,
                transform: visibleChecks[0] ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s ease-out'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: visibleChecks[0] ? 'var(--color-bullish, #23d18b)' : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transform: visibleChecks[0] ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ fontSize: '14px', color: '#fff', display: 'block', fontWeight: 700 }}>급등 차트 추격 매수 억제 훈련</strong>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary, #8b99aa)' }}>뇌동매매와 고점 물타기 습관 탈피</span>
                </div>
              </div>

              <div style={{
                background: 'rgba(12, 17, 25, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.08)',
                borderRadius: '12px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                opacity: visibleChecks[1] ? 1 : 0.25,
                transform: visibleChecks[1] ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s ease-out'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: visibleChecks[1] ? 'var(--color-bullish, #23d18b)' : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transform: visibleChecks[1] ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ fontSize: '14px', color: '#fff', display: 'block', fontWeight: 700 }}>무효화 기준 설정 및 칼손절 훈련</strong>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary, #8b99aa)' }}>주관식 물타기 방지 및 탈출 시점 포착</span>
                </div>
              </div>

              <div style={{
                background: 'rgba(12, 17, 25, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.08)',
                borderRadius: '12px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                opacity: visibleChecks[2] ? 1 : 0.25,
                transform: visibleChecks[2] ? 'translateY(0)' : 'translateY(10px)',
                transition: 'all 0.4s ease-out'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: visibleChecks[2] ? 'var(--color-bullish, #23d18b)' : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  transform: visibleChecks[2] ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <strong style={{ fontSize: '14px', color: '#fff', display: 'block', fontWeight: 700 }}>2% 리스크 제한 포지션 사이징</strong>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary, #8b99aa)' }}>계좌 폭파 없는 프로다운 진입 비중 조율</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: PRO 멤버십 제안 */}
        {currentStep === 4 && (
          <div style={{ width: '100%', maxWidth: '400px', textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 186, 58, 0.1)',
              border: '1px solid rgba(255, 186, 58, 0.25)',
              color: '#ffba3a',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 700,
              marginBottom: '16px'
            }}>
              <Award size={14} />
              ChartMon PRO 무제한 체험
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              지금 첫 7일간<br />
              PRO의 강력한 혜택을 무료로!
            </h2>
            <p style={{ color: 'var(--text-secondary, #8b99aa)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              모든 트레이닝 드릴 제한 없는 패스권과 8개 심화 이론 모듈 잠금 해제 권한이 제공됩니다.
            </p>

            {/* Ambient Glow Premium Card Wrapper */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              padding: '24px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 186, 58, 0.35)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              overflow: 'hidden',
              marginTop: '10px'
            }}>
              {/* Rotating Gradient Ambient Glow in background */}
              <div style={{
                position: 'absolute',
                top: '-40%',
                left: '-40%',
                width: '180%',
                height: '180%',
                background: 'radial-gradient(circle, rgba(255, 186, 58, 0.12) 0%, transparent 60%)',
                animation: 'glow-rotate 12s linear infinite',
                pointerEvents: 'none',
                zIndex: 0
              }} />

              {/* Floating Badge (Crown) */}
              <div style={{
                animation: 'float-badge 3s ease-in-out infinite',
                display: 'inline-flex',
                background: 'linear-gradient(135deg, #ffba3a 0%, #ff9100 100%)',
                padding: '10px',
                borderRadius: '50%',
                boxShadow: '0 4px 15px rgba(255, 186, 58, 0.4)',
                marginBottom: '14px',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ fontSize: '20px', lineHeight: 1 }}>👑</span>
              </div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ color: '#ffba3a', fontSize: '20px', fontWeight: 900, marginBottom: '14px' }}>ChartMon PRO</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left', margin: '0 auto 16px', maxWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    <Check size={14} style={{ color: '#ffba3a' }} />
                    <span>하루 3회 제한 없는 무제한 훈련소</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    <Check size={14} style={{ color: '#ffba3a' }} />
                    <span>8대 고급 차트 이론 전문 백과 오픈</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>
                    <Check size={14} style={{ color: '#ffba3a' }} />
                    <span>AI 실시간 ELO 등급 정밀 난이도 매칭</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted, #5a6577)', fontWeight: 600 }}>체험 기간 종료 후</span>
                  <span style={{ fontSize: '14px', color: '#ffba3a', fontWeight: 800 }}>월 9,900원 (첫 7일 무료)</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Sticky Bottom Actions */}
      <div style={{
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'center'
      }}>
        
        {/* Progress indicator */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <div className={`progress-dot ${currentStep === 1 ? 'active' : ''}`} />
          <div className={`progress-dot ${currentStep === 2 ? 'active' : ''}`} />
          <div className={`progress-dot ${currentStep === 3 ? 'active' : ''}`} />
          <div className={`progress-dot ${currentStep === 4 ? 'active' : ''}`} />
        </div>

        {/* Action Button */}
        <button
          onClick={handleNext}
          style={{
            background: currentStep === 4 
              ? 'linear-gradient(135deg, #ffba3a 0%, #ff9100 100%)' 
              : 'linear-gradient(135deg, var(--color-brand, #7c6cfa) 0%, #5b4bda 100%)',
            color: '#ffffff',
            border: 'none',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '380px',
            padding: '16px',
            fontSize: '16px',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: currentStep === 4 
              ? '0 6px 20px rgba(255, 186, 58, 0.25)' 
              : '0 6px 20px rgba(124, 108, 250, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <span>{currentStep === 4 ? '7일 무료 체험하고 시작하기' : '다음 단계로'}</span>
          <Play size={14} fill="currentColor" style={{ transform: 'rotate(0deg)' }} />
        </button>
      </div>
    </div>
  );
};

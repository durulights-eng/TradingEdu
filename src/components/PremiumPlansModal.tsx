import React, { useState } from 'react';
import { Check, X, CreditCard, Sparkles, ShieldCheck } from 'lucide-react';

interface PremiumPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export const PremiumPlansModal: React.FC<PremiumPlansModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'quarterly'>('quarterly');
  const [paymentStep, setPaymentStep] = useState<'plans' | 'play_billing' | 'success'>('plans');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleStartTrial = () => {
    setPaymentStep('play_billing');
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStep('success');
    }, 1500);
  };

  const handleSuccessClose = () => {
    onPaymentSuccess();
    setPaymentStep('plans');
    onClose();
  };

  const planDetails = {
    monthly: {
      name: 'ChartMon PRO 1개월 구독',
      price: '₩14,900',
      period: '월',
      billingText: '매월 ₩14,900 정기 결제',
    },
    quarterly: {
      name: 'ChartMon PRO 3개월 구독',
      price: '₩29,900',
      period: '3개월',
      billingText: '3개월마다 ₩29,900 정기 결제',
    },
  };

  const activePlan = planDetails[selectedPlan];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      background: 'rgba(5, 7, 11, 0.85)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      animation: 'fadeIn 0.25s ease-out forwards'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '440px',
        background: '#0c1119',
        border: '1px solid rgba(255, 186, 58, 0.2)',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 186, 58, 0.08)',
        display: 'flex',
        flexDirection: 'column',
      }}>
        
        {/* Style block for local animations */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes rotateGlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes pulseScale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          @keyframes drawCheck {
            to { stroke-dashoffset: 0; }
          }
          .google-play-spinner {
            width: 32px;
            height: 32px;
            border: 3.5px solid rgba(15, 157, 88, 0.15);
            border-top-color: #0f9d58;
            border-left-color: #4285f4;
            border-bottom-color: #f4b400;
            border-right-color: #db4437;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>

        {paymentStep === 'plans' && (
          <div style={{ 
            padding: '24px 20px', 
            maxHeight: '85vh', 
            overflowY: 'auto',
            animation: 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' 
          }}>
            {/* Close Button */}
            <button 
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: 'none',
                color: 'var(--text-secondary)',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              <X size={16} />
            </button>

            {/* Header section with Sparkles Glow */}
            <div style={{ textAlign: 'center', margin: '12px 0 20px 0', position: 'relative' }}>
              {/* Gold Sparkles Glow Background */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(255, 186, 58, 0.22) 0%, rgba(255, 186, 58, 0) 70%)',
                zIndex: 0
              }} />
              
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ffdc80 0%, #ffba3a 100%)',
                color: '#05070b',
                marginBottom: '12px',
                boxShadow: '0 8px 20px rgba(255, 186, 58, 0.3)',
                position: 'relative',
                zIndex: 1
              }}>
                <Sparkles size={28} fill="currentColor" />
              </div>
              
              <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', zIndex: 1, position: 'relative' }}>
                ChartMon <span style={{ color: '#ffba3a' }}>PRO</span>
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px', zIndex: 1, position: 'relative' }}>
                나만의 AI 주식 차트 트레이너, 모든 한계를 극복하세요
              </p>
            </div>

            {/* Benefits List */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '20px'
            }}>
              {[
                { title: '실시간 1:1 맞춤형 난이도 튜닝', desc: '내 실력(ELO RP) 범위 내의 퀴즈 무제한 공급' },
                { title: '10대 트레이딩 핵심 이론 백과 무제한', desc: '돌파/지지저항, 유동성, 리스크 관리 등 전 강좌 오픈' },
                { title: '실전 훈련소 일일 3회 제한 해제', desc: '매일 3회 제한 없이 무제한으로 뇌동매매 방지 트레이닝' },
                { title: '스킬 분석 레이더 및 스트릭 관리', desc: '8축 분석 리포트 및 상세 통계 대시보드 완전 공개' }
              ].map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px' }}>
                  <div style={{
                    marginTop: '2px',
                    color: '#ffba3a',
                    flexShrink: 0
                  }}>
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <strong style={{ fontSize: '13.5px', color: '#f1f5f9', display: 'block', fontWeight: 700 }}>{b.title}</strong>
                    <span style={{ fontSize: '11.5px', color: 'var(--text-secondary)', display: 'block', marginTop: '1px' }}>{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Plans Selection */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              
              {/* Quarterly Plan (30% off standard monthly) */}
              <div 
                onClick={() => setSelectedPlan('quarterly')}
                style={{
                  border: selectedPlan === 'quarterly' ? '2px solid #ffba3a' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: selectedPlan === 'quarterly' ? 'linear-gradient(135deg, rgba(255, 186, 58, 0.07) 0%, rgba(255, 186, 58, 0.01) 100%)' : 'rgba(255, 255, 255, 0.01)',
                  borderRadius: '16px',
                  padding: '16px',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                {/* 30% Off Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '16px',
                  background: '#ffba3a',
                  color: '#05070b',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '2px 8px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 8px rgba(255, 186, 58, 0.2)'
                }}>
                  🔥 33% 할인 + 추천
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: selectedPlan === 'quarterly' ? '5px solid #ffba3a' : '2px solid rgba(255,255,255,0.2)',
                    background: selectedPlan === 'quarterly' ? '#0c1119' : 'transparent',
                    boxSizing: 'border-box'
                  }} />
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#f8fafc', display: 'block', fontWeight: 800 }}>3개월 PRO 패키지</strong>
                    <span style={{ fontSize: '11.5px', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>3개월 ₩29,900 (월 ₩9,967 상당)</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '16px', fontWeight: 900, color: '#f8fafc', display: 'block' }}>₩29,900</span>
                  <span style={{ fontSize: '11px', color: '#ffba3a', fontWeight: 700 }}>/ 3개월</span>
                </div>
              </div>

              {/* Monthly Plan */}
              <div 
                onClick={() => setSelectedPlan('monthly')}
                style={{
                  border: selectedPlan === 'monthly' ? '2px solid #ffba3a' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: selectedPlan === 'monthly' ? 'linear-gradient(135deg, rgba(255, 186, 58, 0.07) 0%, rgba(255, 186, 58, 0.01) 100%)' : 'rgba(255, 255, 255, 0.01)',
                  borderRadius: '16px',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: selectedPlan === 'monthly' ? '5px solid #ffba3a' : '2px solid rgba(255,255,255,0.2)',
                    background: selectedPlan === 'monthly' ? '#0c1119' : 'transparent',
                    boxSizing: 'border-box'
                  }} />
                  <div>
                    <strong style={{ fontSize: '14.5px', color: '#f8fafc', display: 'block', fontWeight: 800 }}>월간 PRO 멤버십</strong>
                    <span style={{ fontSize: '11.5px', color: 'var(--text-secondary)', display: 'block', marginTop: '2px' }}>매월 ₩14,900 정기 결제</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '16px', fontWeight: 900, color: '#f8fafc', display: 'block' }}>₩14,900</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 700 }}>/ 월</span>
                </div>
              </div>

            </div>

            {/* Subscribe Button */}
            <button 
              onClick={handleStartTrial}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #ffdc80 0%, #ffba3a 100%)',
                color: '#05070b',
                border: 'none',
                borderRadius: '14px',
                padding: '16px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(255, 186, 58, 0.25)',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.95'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <Sparkles size={16} />
              <span>PRO 구독 시작하기</span>
            </button>

            {/* Continue with free */}
            <button 
              onClick={onClose}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                color: 'var(--text-secondary)',
                fontSize: '12px',
                fontWeight: 600,
                marginTop: '16px',
                cursor: 'pointer',
                textAlign: 'center',
                textDecoration: 'underline'
              }}
            >
              무료 버전으로 계속 학습하기
            </button>
          </div>
        )}

        {/* Google Play Billing Simulator */}
        {paymentStep === 'play_billing' && (
          <div style={{
            background: '#ffffff',
            color: '#1f1f1f',
            padding: '20px 24px',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            animation: 'slideUp 0.25s cubic-bezier(0, 0, 0.2, 1) forwards',
            fontFamily: 'Roboto, -apple-system, sans-serif'
          }}>
            {/* Play header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {/* Google Play Mini Logo */}
                <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                  <path fill="#4285F4" d="M3 20.28V3.72a1.6 1.6 0 0 1 2.45-1.37l14.28 8.28a1.6 1.6 0 0 1 0 2.74l-14.28 8.28A1.6 1.6 0 0 1 3 20.28z"/>
                  <path fill="#0F9D58" d="M3 12v8.28c0 .54.38.85.85.85a.9.9 0 0 0 .47-.14l6.93-4.01L3 12z"/>
                  <path fill="#FFC107" d="M19.73 10.63l-14.28-8.28a.9.9 0 0 0-.47-.14c-.47 0-.85.31-.85.85V12l8.25-4.76 7.35 3.39z"/>
                  <path fill="#EA4335" d="M11.25 12l-6.93-4.01A.9.9 0 0 0 3.85 11c0 .54.38.85.85.85h6.55z"/>
                </svg>
                <span style={{ fontSize: '12px', fontWeight: 500, color: '#5f6368', letterSpacing: '0.05em' }}>Google Play</span>
              </div>
              <button 
                onClick={() => setPaymentStep('plans')}
                disabled={isProcessing}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#5f6368',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* App Info */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              {/* App logo placeholder */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '10px',
                background: '#070b12',
                border: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img src="/icon.svg" style={{ width: '32px', height: '32px' }} alt="Logo" />
              </div>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: 500, margin: 0, color: '#202124', lineHeight: 1.2 }}>
                  {activePlan.name}
                </h3>
                <span style={{ fontSize: '12px', color: '#5f6368', display: 'block', marginTop: '2px' }}>
                  사이스페이스(주) • 정기 결제
                </span>
              </div>
            </div>

            {/* Payment Details Box */}
            <div style={{ 
              background: '#f8f9fa', 
              borderRadius: '8px', 
              padding: '12px 14px', 
              fontSize: '12.5px', 
              color: '#3c4043',
              lineHeight: 1.5,
              marginBottom: '16px',
              border: '1px solid #e8eaed'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500, color: '#202124' }}>
                <span>오늘 결제할 금액:</span>
                <span style={{ color: '#0f9d58' }}>{activePlan.price}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                <span>결제 주기:</span>
                <span>{activePlan.period}마다 자동 갱신</span>
              </div>
              <div style={{ borderTop: '1px solid #dadce0', margin: '8px 0', paddingTop: '8px' }} />
              <div style={{ fontSize: '11px', color: '#5f6368' }}>
                구독은 언제든 Google Play 구독 관리에서 해지할 수 있으며, 해지 시 다음 결제일부터 청구되지 않습니다. {activePlan.name}으로 {activePlan.price}이 결제됩니다.
              </div>
            </div>

            {/* Payment Method selector */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              borderTop: '1px solid #e8eaed',
              borderBottom: '1px solid #e8eaed',
              marginBottom: '20px',
              fontSize: '13px',
              color: '#3c4043'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CreditCard size={18} style={{ color: '#5f6368' }} />
                <span>신용카드 (•••• 4321)</span>
              </div>
              <span style={{ color: '#1a73e8', fontWeight: 500 }}>변경</span>
            </div>

            {/* Subscribe Action Button */}
            {isProcessing ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '8px 0' }}>
                <div className="google-play-spinner" />
                <span style={{ fontSize: '11px', color: '#5f6368', fontWeight: 500 }}>구글 플레이에서 처리 중...</span>
              </div>
            ) : (
              <button 
                onClick={handleConfirmPayment}
                style={{
                  width: '100%',
                  background: '#0f9d58',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textAlign: 'center',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
                }}
              >
                구독하기
              </button>
            )}

            {/* Play Footer details */}
            <div style={{ fontSize: '10px', color: '#70757a', textAlign: 'center', marginTop: '12px', lineHeight: 1.4 }}>
              구독을 탭하면 이용약관에 동의하는 것으로 간주됩니다. 정기 결제는 주기마다 자동으로 갱신됩니다.
            </div>
          </div>
        )}

        {/* Success State */}
        {paymentStep === 'success' && (
          <div style={{
            padding: '40px 24px',
            textAlign: 'center',
            animation: 'slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
          }}>
            {/* Animated Check Circle */}
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'rgba(35, 209, 139, 0.1)',
              border: '2px solid #23d18b',
              color: '#23d18b',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '24px',
              position: 'relative'
            }}>
              <ShieldCheck size={40} />
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
              ChartMon PRO 가입 완료!
            </h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '28px', padding: '0 8px' }}>
              소중한 구독에 감사드립니다.<br />
              이제 모든 훈련소 훈련과 핵심 이론 백과를 제한 없이 자유롭게 공부하실 수 있습니다. 🔥
            </p>

            <button 
              onClick={handleSuccessClose}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #23d18b 0%, #15803d 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '14px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(35, 209, 139, 0.2)'
              }}
            >
              학습 시작하기
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default PremiumPlansModal;

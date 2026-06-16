import React, { useState } from 'react';
import { Settings, Bell, BellOff, FileText, Shield, LogOut, Trash2, Info, Smartphone, ChevronRight } from 'lucide-react';

interface SettingsTabProps {
  userId: string | null;
  userEmail: string | null;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({ userId, userEmail }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(() => {
    return localStorage.getItem('chartmon_notifications_enabled') !== 'false';
  });

  const handleToggleNotifications = () => {
    const next = !notificationsEnabled;
    setNotificationsEnabled(next);
    localStorage.setItem('chartmon_notifications_enabled', String(next));
  };

  const handleLogout = () => {
    if (window.confirm('정말로 로그아웃하시겠습니까? 기기에 저장된 학습 데이터는 유지됩니다.')) {
      alert('로그아웃 기능은 구글 로그인 연동 후 활성화됩니다.');
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('⚠️ 정말로 계정을 삭제하시겠습니까?\n\n삭제 시 모든 학습 기록, 레이팅, 세션 히스토리가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.')) {
      if (window.confirm('최종 확인: 계정 삭제를 진행합니다. 계속하시겠습니까?')) {
        alert('계정 삭제 기능은 구글 로그인 연동 후 활성화됩니다.');
      }
    }
  };

  const handleShowTerms = () => {
    alert('이용약관\n\n본 앱(ChartMon)은 차트 분석 학습을 위한 교육용 앱입니다.\n\n1. 본 앱의 콘텐츠는 교육 목적으로만 제공되며, 실제 투자 조언이 아닙니다.\n2. 사용자의 학습 데이터는 서비스 개선을 위해 익명으로 활용될 수 있습니다.\n3. 앱 내 표시되는 차트 데이터는 과거 실제 데이터를 기반으로 하되 교육 목적으로 가공되었습니다.\n4. 본 서비스를 통해 발생하는 투자 손실에 대해 개발자는 책임을 지지 않습니다.\n\n최종 업데이트: 2026년 6월');
  };

  const handleShowPrivacy = () => {
    alert('개인정보 처리방침\n\n1. 수집하는 정보: 학습 기록, 퀴즈 정답률, 세션 히스토리\n2. 수집 목적: 맞춤형 학습 경험 제공 및 실력 분석\n3. 보관 기간: 계정 삭제 시까지\n4. 제3자 제공: 제공하지 않음\n5. 개인정보 삭제: 설정 > 계정 삭제를 통해 모든 데이터 즉시 삭제 가능\n\n문의: chartmon.app@gmail.com\n최종 업데이트: 2026년 6월');
  };

  return (
    <div className="settings-wrapper" style={{ padding: '24px 20px', paddingBottom: '90px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
        <Settings size={20} style={{ color: 'var(--color-brand)' }} />
        설정
      </h2>

      {/* Account Section */}
      <div className="settings-section">
        <div className="settings-section-title">계정</div>
        <div className="settings-card">
          <div className="settings-row" style={{ borderBottom: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              <Smartphone size={18} style={{ color: 'var(--color-brand)', flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>
                  {userId ? '클라우드 연동 완료' : '게스트 모드'}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {userId ? userEmail : '로그인 없이 학습 중입니다'}
                </div>
              </div>
            </div>
            {!userId && (
              <button 
                className="settings-connect-btn"
                onClick={() => alert('구글 계정 연동 기능을 준비 중입니다.')}
              >
                연동하기
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Notification Section */}
      <div className="settings-section">
        <div className="settings-section-title">알림</div>
        <div className="settings-card">
          <div className="settings-row" style={{ borderBottom: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              {notificationsEnabled 
                ? <Bell size={18} style={{ color: 'var(--color-brand)' }} /> 
                : <BellOff size={18} style={{ color: 'var(--text-muted)' }} />
              }
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>학습 리마인더 알림</div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  매일 학습 시간에 푸시 알림을 받습니다
                </div>
              </div>
            </div>
            <button 
              className={`toggle-switch ${notificationsEnabled ? 'active' : ''}`}
              onClick={handleToggleNotifications}
              aria-label="알림 토글"
            >
              <div className="toggle-knob" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="settings-section">
        <div className="settings-section-title">정보</div>
        <div className="settings-card">
          <button className="settings-row" onClick={handleShowTerms}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <FileText size={18} style={{ color: 'var(--text-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>이용약관</span>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
          </button>
          <button className="settings-row" onClick={handleShowPrivacy}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Shield size={18} style={{ color: 'var(--text-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>개인정보 처리방침</span>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
          </button>
          <button className="settings-row" style={{ borderBottom: 'none' }} onClick={() => {}}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Info size={18} style={{ color: 'var(--text-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>앱 버전</span>
            </div>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 600 }}>v1.0.0</span>
          </button>
        </div>
      </div>

      {/* Account Management */}
      <div className="settings-section">
        <div className="settings-section-title">계정 관리</div>
        <div className="settings-card">
          <button className="settings-row" onClick={handleLogout}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <LogOut size={18} style={{ color: 'var(--text-secondary)' }} />
              <span style={{ fontSize: '14px', fontWeight: 600 }}>로그아웃</span>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
          </button>
          <button className="settings-row settings-danger" style={{ borderBottom: 'none' }} onClick={handleDeleteAccount}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Trash2 size={18} style={{ color: '#ef4444' }} />
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#ef4444' }}>계정 삭제</span>
            </div>
            <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsTab;

import React, { useState } from 'react';
import { Settings, Bell, BellOff, FileText, Shield, LogOut, Trash2, Info, Smartphone, ChevronRight } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

interface SettingsTabProps {
  userId: string | null;
  userEmail: string | null;
  onLogout?: () => void;
  onDeleteAccount?: () => void;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({ userId, userEmail, onLogout, onDeleteAccount }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(() => {
    return localStorage.getItem('chartmon_notifications_enabled') !== 'false';
  });

  const scheduleDailyReminder = async () => {
    const check = await LocalNotifications.checkPermissions();
    let granted = check.display === 'granted';
    if (!granted) {
      const request = await LocalNotifications.requestPermissions();
      granted = request.display === 'granted';
    }
    
    if (!granted) {
      throw new Error('알림 권한이 허용되지 않았습니다. 기기 설정에서 알림 권한을 허용해 주세요.');
    }

    // Cancel existing reminder to avoid duplication
    await LocalNotifications.cancel({
      notifications: [{ id: 101 }]
    });

    // Schedule everyday at 21:00 (9:00 PM)
    await LocalNotifications.schedule({
      notifications: [
        {
          title: '오늘의 차트 훈련 🔥',
          body: '오늘의 데일리 차트 훈련 세션을 풀고 스트릭(Streak) 연속 활성을 이어가세요!',
          id: 101,
          schedule: {
            on: {
              hour: 21,
              minute: 0
            },
            repeats: true
          }
        }
      ]
    });
  };

  const cancelDailyReminder = async () => {
    try {
      await LocalNotifications.cancel({
        notifications: [{ id: 101 }]
      });
    } catch (e) {
      console.error('Failed to cancel notifications', e);
    }
  };

  const handleToggleNotifications = async () => {
    const next = !notificationsEnabled;
    
    if (Capacitor.isNativePlatform()) {
      if (next) {
        try {
          await scheduleDailyReminder();
          setNotificationsEnabled(true);
          localStorage.setItem('chartmon_notifications_enabled', 'true');
          alert('매일 오후 9시에 학습 리마인더 알림을 보내드립니다! 🔔');
        } catch (err: any) {
          alert(err.message || '알림 설정 중 오류가 발생했습니다.');
        }
      } else {
        await cancelDailyReminder();
        setNotificationsEnabled(false);
        localStorage.setItem('chartmon_notifications_enabled', 'false');
        alert('학습 리마인더 알림이 해제되었습니다.');
      }
    } else {
      // Web browser mode fallback
      setNotificationsEnabled(next);
      localStorage.setItem('chartmon_notifications_enabled', String(next));
      if (next) {
        alert('리마인더 알림이 활성화되었습니다. (실제 알림은 모바일 앱 기기에서 동작합니다)');
      } else {
        alert('리마인더 알림이 비활성화되었습니다.');
      }
    }
  };

  const handleLogout = () => {
    if (window.confirm('정말로 로그아웃하시겠습니까? 기기에 저장된 학습 데이터는 유지됩니다.')) {
      if (onLogout) {
        onLogout();
      } else {
        alert('로그아웃 기능은 구글 로그인 연동 후 활성화됩니다.');
      }
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('⚠️ 정말로 계정을 삭제하시겠습니까?\n\n삭제 시 모든 학습 기록, 레이팅, 세션 히스토리가 영구적으로 삭제됩니다. 이 작업은 되돌릴 수 없습니다.')) {
      if (window.confirm('최종 확인: 계정 삭제를 진행합니다. 계속하시겠습니까?')) {
        if (onDeleteAccount) {
          onDeleteAccount();
        } else {
          alert('계정 삭제 기능은 구글 로그인 연동 후 활성화됩니다.');
        }
      }
    }
  };

  const handleShowTerms = () => {
    window.open('https://chartmon.app/terms.html', '_system');
  };

  const handleShowPrivacy = () => {
    window.open('https://chartmon.app/privacy.html', '_system');
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
                  {userId ? '구글 로그인 완료' : '게스트 모드'}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {userId ? userEmail : '로그인 없이 학습 중입니다'}
                </div>
              </div>
            </div>
            {!userId && (
              <button 
                className="settings-connect-btn"
                onClick={() => alert('Supabase 연동이 설정되지 않아 게스트 모드로만 이용 가능합니다.')}
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

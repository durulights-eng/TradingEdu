# ChartMon - 운영관리자 어드민 웹사이트

ChartMon 서비스의 실시간 사용자 프로필 모니터링, 학습 진도 확인 및 퀴즈 문제은행 DB 데이터 CRUD(생성, 조회, 수정, 삭제)를 담당하는 React 웹 어플리케이션입니다.

---

## 🔒 보안 강화 조치 안내

* **하드코딩 비밀번호 제거**: 번들에 포함되어 보안 위험이 컸던 클라이언트 단 하드코딩 비밀번호(`chartmon123!`) 검증이 완전히 제거되었습니다.
* **Supabase Auth 연동**: 이제 이메일과 패스워드를 입력받아 Supabase Auth를 통해 실제 인증을 수행합니다.
* **RLS 쓰기 차단**: 일반 유저 계정은 Supabase RLS 보안 규칙에 의해 퀴즈 데이터를 수정할 수 없으며, 오직 `admin_users` 테이블에 등록된 공인 관리자 계정만 쓰기 작업을 완료할 수 있습니다.

---

## 🚀 주요 기능

1. **사용자 프로필 관리 (Users Tab)**
   * 가입한 전체 사용자의 이메일(UUID), 레벨 배지, 획득 XP, 연속 학습 스트릭(🔥), 최근 학습 날짜 조회.
   * 캔들 패턴, 지지저항, 추세선 등 세부 드릴 유형별 학습 수준(Lv) 및 누적 정답률을 실시간 파악.
2. **문제은행 CRUD 관리 (Quizzes Tab)**
   * Supabase DB에 실시간 저장된 60개+의 퀴즈 문제은행 전수 조회.
   * 캔들 데이터 좌표(JSON) 및 보조선 작도 정보(Drawings JSON)를 수정하고 신규 문항을 등록 및 삭제할 수 있는 에디터 모달 탑재.
3. **퀴즈 실전 검수기 (Inspector Tab & Preview Modal)**
   * 모바일 화면과 동일한 형태의 차트 캔버스 시각화 적용.
   * 수정 또는 등록한 문제를 실제로 풀어보고 오답/정답 반응 및 해설 설명 팝업이 완벽하게 렌더링되는지 사전 검수하는 시뮬레이터 제공.

---

## ⚙️ 로컬 환경 구동 설정

1. `admin` 폴더 내에 `.env.example` 파일을 복사하여 `.env`를 만듭니다.
   ```bash
   cp .env.example .env
   ```
2. 프로젝트 자격 증명을 작성합니다:
   ```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```
3. 어드민 루트에서 의존성을 설치하고 개발 서버를 가동합니다:
   ```bash
   npm install
   npm run dev
   ```

---

## 🔑 관리자(Admin) 권한 부여하는 방법

어드민 사이트에 로그인 가능한 운영자 이메일 계정을 확보하려면 아래 단계를 수행합니다:

1. 모바일 앱 또는 Supabase Auth UI를 통해 계정을 생성합니다 (예: `operator@chartmon.com`).
2. Supabase SQL Editor에서 해당 사용자의 ID를 `admin_users` 테이블에 인서트합니다:
   ```sql
   INSERT INTO public.admin_users (user_id) 
   VALUES (
     (SELECT id FROM auth.users WHERE email = 'operator@chartmon.com')
   );
   ```
3. 완료 후 어드민 웹 로그인 폼에 해당 이메일/비밀번호로 로그인하면 메인 대시보드로 자동 진입합니다. (관리자가 아닌 일반 유저가 로그인을 시도할 경우, 권한 에러 메시지와 함께 강제 로그아웃됩니다.)

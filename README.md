# ChartMon (차트몬)

ChartMon은 트레이딩 학습자들을 위한 차트 패턴 학습, 데일리 트레이닝, 실전 거래 결단력 평가 모바일 앱 및 운영자 관리 시스템입니다.

본 저장소는 **모바일 클라이언트 앱(Capacitor Android)**과 독립형 **운영자 어드민 웹사이트**로 구성되어 있습니다.

---

## 🏗️ 전체 아키텍처

* **모바일 클라이언트 (Root)**: React + TypeScript + Vite + Capacitor (Android 패키징)
* **운영자 어드민 (/admin)**: React + TypeScript + Vite 기반의 독립형 웹 어플리케이션
* **백엔드 (Supabase)**: 데이터베이스(Postgres), 사용자 인증(Auth), RLS 보안 정책, 실시간 트리거

---

## 🛠️ 개발 환경 설정 및 구동 방법

개발을 시작하기 전, 루트 경로와 `admin` 경로에 각각 `.env.example` 파일을 복사하여 `.env` 파일을 생성하고 Supabase 자격 증명을 설정해야 합니다.

### 1. 모바일 클라이언트 앱 (Root)
1. 의존성 설치:
   ```bash
   npm install
   ```
2. 환경 변수 설정:
   `.env.example`을 복사하여 `.env`를 생성한 뒤 Supabase URL 및 Anon Key를 채워 넣습니다.
3. 로컬 서버 실행:
   ```bash
   npm run dev
   ```
4. 앱 빌드 및 안드로이드 동기화:
   ```bash
   npm run build
   npx cap sync android
   ```
   이후 Android Studio를 통해 `.apk` 빌드 및 시뮬레이터 구동이 가능합니다.

### 2. 운영자 어드민 패널 (/admin)
1. 의존성 설치:
   ```bash
   npm install --prefix admin
   ```
2. 환경 변수 설정:
   `admin/.env.example`을 복사하여 `admin/.env`를 생성한 뒤 동일하게 Supabase 설정을 채워 넣습니다.
3. 로컬 서버 실행:
   ```bash
   npm run --prefix admin dev
   ```
   브라우저에서 `http://localhost:5173` (혹은 안내된 포트)로 접속할 수 있습니다.

---

## 🔒 Supabase 데이터베이스 및 보안 설정 (RLS)

실제 프로덕션 환경이나 개발 DB의 설정은 [docs/supabase_schema.sql](file:///d:/TradingEdu/docs/supabase_schema.sql)에 수록되어 있습니다.

### 주요 보안 정책 (RLS)
1. **quizzes (퀴즈 문제)**
   * `SELECT`: 일반 유저 및 익명 접속자 등 누구나 조회 가능.
   * `INSERT` / `UPDATE` / `DELETE`: 오직 관리자 권한(`admin_users` 테이블에 등록된 인증 유저)만 수행 가능.
2. **profiles (사용자 학습 데이터)**
   * `SELECT` / `UPDATE` / `INSERT`: 본인의 프로필 데이터만 제어할 수 있거나, 관리자(`admin_users`에 유저가 등록됨) 권한을 가진 유저가 전체 데이터를 관리할 수 있도록 허용. (보안 함수 `public.is_admin()`을 통해 RLS Recursion 방지)

---

## 🛡️ 최초 관리자(Admin) 계정 등록 방법

관리자 비밀번호 하드코딩 취약점이 해결됨에 따라, 어드민 패널에 로그인하기 위해서는 **Supabase Auth 사용자 가입** 및 **어드민 권한 부여**가 필요합니다.

1. **사용자 가입**:
   어플리케이션 가입 화면을 통하거나 Supabase 대시보드 Auth 메뉴에서 관리자로 사용할 이메일(예: `admin@chartmon.com`) 계정을 생성합니다.
2. **어드민 권한 부여 (SQL 실행)**:
   Supabase 대시보드의 **SQL Editor**로 이동한 뒤, 아래 쿼리를 수행하여 격리된 `admin_users` 테이블에 해당 계정의 ID를 삽입합니다:
   ```sql
   INSERT INTO public.admin_users (user_id)
   VALUES (
       (SELECT id FROM auth.users WHERE email = 'admin@chartmon.com') -- 가입한 어드민 이메일
   );
   ```
3. **어드민 패널 로그인**:
   어드민 웹사이트 접속 후 방금 설정한 관리자 이메일과 비밀번호로 로그인하여 정상 접속되는지 확인합니다.

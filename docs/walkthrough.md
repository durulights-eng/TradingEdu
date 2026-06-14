# ChartMon 어드민 권한 격리 및 보안 취약점 개선 완료 보고서

이 문서는 사용자가 본인의 `profiles` 행을 수정하여 어드민 권한(`is_admin = true`)을 자가 획득할 수 있었던 심각한 RLS 보안 취약점을 차단하기 위해, **어드민 권한 판별 체계를 별도의 `admin_users` 테이블로 분리 격리**하고 관련 앱 코드 및 설정을 갱신한 내역을 정리한 문서입니다.

---

## 1. 개선 성과

### 1) 어드민 권한 데이터베이스 격리 (`admin_users`)
* **profiles.is_admin 컬럼 제거**: 일반 유저가 RLS `auth.uid() = id` 조건을 우회해 자가 업데이트할 수 있는 가능성을 원천 차단하기 위해 `profiles` 테이블에서 `is_admin` 컬럼을 완전히 드랍했습니다.
* **admin_users 테이블 신설**: 오직 `auth.users`와 1:1 관계를 갖는 `public.admin_users(user_id)` 테이블을 신설하고 RLS를 적용했습니다.
  - 외부 API(클라이언트)를 통한 쓰기 정책(`INSERT`/`UPDATE`/`DELETE`)을 일체 허용하지 않아 일반 인증 사용자는 이 테이블의 레코드를 생성하거나 조작할 수 없습니다.
  - 오직 Supabase 관리자 대시보드(SQL Editor) 또는 서비스 롤을 통해서만 관리자를 추가/삭제할 수 있습니다.
* **보안 검증 함수 및 RLS 적용**:
  - `public.is_admin()` 권한 검사 헬퍼 함수가 `profiles` 대신 `admin_users` 테이블의 존재 여부를 체크하도록 수정하여 RLS 무한 루프(Recursion) 현상을 원천 방지했습니다.
  - `quizzes`, `profiles`, `admin_users` 테이블의 모든 RLS 조회 및 편집 정책에 갱신된 `public.is_admin()` 검증 방식을 정상 매핑 완료했습니다.
  - 신규 사용자 가입 트리거 `public.handle_new_user()`에서 `is_admin` 컬럼 삽입 로직을 배제하여 온전한 데이터 모델링을 수립했습니다.

### 2) 관리자 웹 앱 코드 갱신
* `admin/src/App.tsx`의 **마운트 세션 복원 및 로그인 검증 단계**에서 기존 `profiles` 테이블을 조회하는 대신, `admin_users` 테이블에 유저의 UUID가 존재하는지 조회하도록 API 쿼리를 교체했습니다.
* 유저 조회 실패 또는 관리자가 아닌 계정일 경우, 즉시 `supabase.auth.signOut()`을 수행해 로그인 세션을 소멸시키는 보안 가드를 유지했습니다.

### 3) 가이드라인 설명서 최신화
* [README.md](file:///d:/TradingEdu/README.md)와 [admin/README.md](file:///d:/TradingEdu/admin/README.md)에 안내되어 있던 기존 `UPDATE profiles` 방식의 관리자 권한 부여 SQL 가이드를 격리된 테이블에 ID를 인서트하는 `INSERT INTO public.admin_users` 가이드라인으로 교체 완료했습니다.

---

## 2. 최종 빌드 및 검증 결과

### 1) 자동화된 테스트 결과
* **ESLint 정적 분석**: 에러 및 경고 **0건** 완료 (`npm run lint` 통과)
* **모바일 클라이언트 앱 빌드**: 컴파일 성공 (`npm run build` 통과)
* **독립형 어드민 웹사이트 빌드**: 컴파일 성공 (`npm run --prefix admin build` 통과)

```bash
# 린트 무결성 확인 (0 errors, 0 warnings)
npm run lint

# 클라이언트 앱 빌드 성공
npm run build

# 어드민 패널 웹 빌드 성공
npm run --prefix admin build
```

### 2) 데이터베이스 RLS 차단력 확인
* 일반 가입 유저가 Supabase API 클라이언트를 통해 본인의 프로필을 조작하여 어드민 권한을 임의 승격하는 것이 논리적으로 불가능함을 SQL DDL 정의 및 RLS 정책 설정을 통해 확인 완료했습니다.

---

## 3. 로컬 저장 문서 현황

* [docs/implementation_plan.md](file:///d:/TradingEdu/docs/implementation_plan.md): 본 개선 작업을 위한 설계 기획서
* [docs/task.md](file:///d:/TradingEdu/docs/task.md): 전체 진척 체크리스트
* [docs/walkthrough.md](file:///d:/TradingEdu/docs/walkthrough.md): 본 최종 완료 보고서
* [docs/supabase_schema.sql](file:///d:/TradingEdu/docs/supabase_schema.sql): 갱신된 백엔드 DB 스키마 DDL 원본
* [README.md](file:///d:/TradingEdu/README.md): 프로젝트 전체 로컬 실행 및 설정 가이드
* [admin/README.md](file:///d:/TradingEdu/admin/README.md): 어드민 사용법 및 권한 배정 가이드

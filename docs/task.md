# ChartMon 어드민 권한 격리 및 우회 차단 체크리스트

- [x] 1. 데이터베이스 스키마 및 RLS 정책 마이그레이션
  - [x] `profiles` 테이블에서 `is_admin` 컬럼 제거
  - [x] 격리된 `admin_users` 테이블 생성 및 RLS 설정
  - [x] Recursion 방지용 `public.is_admin()` 함수가 `admin_users`를 조회하도록 수정
  - [x] `admin_users` 테이블에 SELECT 권한 정책 설정
  - [x] 가입 트리거 `public.handle_new_user()` 함수에서 `is_admin` 인서트 제거
  - [x] `profiles` RLS 정책 재설정
  - [x] 로컬 스키마 문서 `docs/supabase_schema.sql` 최신화
- [x] 2. 어드민 패널 앱 코드 수정
  - [x] `admin/src/App.tsx`의 마운트 세션 복원 시 `admin_users` 조회하도록 변경
  - [x] `admin/src/App.tsx`의 로그인 권한 확인 시 `admin_users` 조회하도록 변경
- [x] 3. 설명서 가이드라인 업데이트
  - [x] 루트 `README.md`에 `admin_users` 등록 SQL 가이드로 갱신
  - [x] `admin/README.md`에 동일한 SQL 가이드 반영
- [x] 4. 최종 검증
  - [x] `npm run lint` 수행 및 정적 분석 통과 확인
  - [x] 모바일 앱 빌드 컴파일 검증 (`npm run build`)
  - [x] 관리자 웹 빌드 컴파일 검증 (`npm run --prefix admin build`)

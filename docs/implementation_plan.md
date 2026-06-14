# ChartMon 관리자 권한 분리 및 우회 차단 설계서

일반 사용자가 `profiles` 테이블의 RLS 자가 업데이트 정책(`auth.uid() = id`)을 악용해 본인의 `is_admin` 필드를 `true`로 직접 변경함으로써 관리자 권한을 탈취하는 보안 취약점을 차단합니다. 

이를 해결하기 위해 **어드민 권한 식별용 테이블(`admin_users`)을 별도로 격리 분리**하고 RLS 정책을 재구축합니다.

---

## User Review Required

> [!IMPORTANT]
> **1. 어드민 전용 테이블(`admin_users`) 격리 도입**
> * 기존 `profiles` 테이블의 `is_admin` 컬럼을 완전히 제거합니다.
> * 관리자 식별을 위해 오직 `auth.users`와 1:1 관계를 가지는 `public.admin_users(user_id)` 테이블을 새롭게 신설합니다.
> * 이 테이블은 RLS 쓰기(`INSERT`/`UPDATE`/`DELETE`) 정책이 전혀 등록되지 않아 외부 API(클라이언트)를 통해서는 수정할 수 없고, 오직 Supabase 관리자 SQL 또는 서비스 롤을 통해서만 관리자를 등록할 수 있게 보안이 원천 차단됩니다.

---

## Proposed Changes

### 1. 데이터베이스 스키마 및 RLS 정책 변경

#### [MODIFY] [supabase_schema.sql](file:///d:/TradingEdu/docs/supabase_schema.sql)
* `profiles` 테이블 정의에서 `is_admin` 제거.
* `public.admin_users` 테이블 추가.
* `public.is_admin()` 권한 검사 함수가 `admin_users` 테이블에 유저가 존재하는지 조회하도록 로직 갱신.
* `public.handle_new_user()` 가입 트리거 함수가 프로필 생성 시 `is_admin`을 대입하지 않도록 수정.
* `admin_users` 테이블에 RLS 적용 및 SELECT 정책 추가.

```sql
-- 변경될 핵심 SQL DDL 내용

-- 1. profiles 테이블에서 기존 어드민 컬럼 제거
ALTER TABLE public.profiles DROP COLUMN IF EXISTS is_admin;

-- 2. 격리된 어드민 유저 테이블 생성
CREATE TABLE IF NOT EXISTS public.admin_users (
    user_id uuid REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- admin_users RLS 활성화
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- 3. Recursion 없는 어드민 검증 함수 갱신
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean SECURITY DEFINER AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users WHERE user_id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql;

-- 4. admin_users 조회 정책 추가 (자신의 정보 확인 또는 어드민의 전체 조회)
CREATE POLICY "Allow users to read own admin status or admins to read all" ON public.admin_users
    FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

-- 5. 트리거 복구 (is_admin 열 배제)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, streak, xp, trading_level, completed_quizzes, drill_stats)
  VALUES (
    new.id, 
    5,   -- 기본 스트릭 5일
    150, -- 기본 150 XP
    1,   -- 1단계 레벨
    '{}'::bigint[],
    '{}'::jsonb
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. RLS 정책 재정리 (profiles RLS에서 is_admin 열이 제거됨에 따라 안전)
DROP POLICY IF EXISTS "Allow users to read profile" ON public.profiles;
DROP POLICY IF EXISTS "Allow users to update profile" ON public.profiles;
DROP POLICY IF EXISTS "Allow users to insert profile" ON public.profiles;

CREATE POLICY "Allow users to read profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Allow users to update profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "Allow users to insert profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id OR public.is_admin());
```

---

### 2. 어드민 패널 앱 코드 수정

#### [MODIFY] [App.tsx](file:///d:/TradingEdu/admin/src/App.tsx)
* 어드민 로그인 및 마운트 세션 복원 시, `profiles` 대신 신규 `admin_users` 테이블에 현재 `user.id`가 존재하는지 체크하는 방식으로 갱신.

---

### 3. 프로젝트 설명서 보완

#### [MODIFY] [README.md](file:///d:/TradingEdu/README.md)
* 어드민 권한 부여 방법 안내 시 `profiles` 테이블 갱신 대신 `admin_users` 테이블에 인서트하는 SQL 쿼리로 변경:
  ```sql
  INSERT INTO public.admin_users (user_id) 
  VALUES ((SELECT id FROM auth.users WHERE email = 'admin@chartmon.com'));
  ```

#### [MODIFY] [README.md](file:///d:/TradingEdu/admin/README.md)
* 동일한 데이터베이스 인서트 방식 반영 및 설명 갱신.

---

## Verification Plan

### Automated Tests
* SQL DDL 마이그레이션 정상 적용 완료 확인.
* `npm run lint` 코드 정적 분석 통과 확인.
* `npm run --prefix admin build` 컴파일 통과 검증.

### Manual Verification
* 일반 가입 유저가 본인의 `profiles` 테이블 행을 수정하여 어드민 권한을 자가 획득(우회)할 수 없음을 직접 테스트하여 차단력 검증.
* `admin_users` 테이블에 등록된 공인 어드민 계정으로 어드민 웹 로그인 시 대시보드 정상 열림 및 CRUD 동작 확인.

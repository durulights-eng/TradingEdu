# ChartMon 최종 앱 기능 고도화 및 정식 출시 준비 계획 (Final Plan)

본 문서는 앱 심사 대기 중 및 승인 후 정식 출시 단계에서 실행할 최종 기능 고도화 계획을 정의합니다. 사용자 피드백과 편의성 개선을 중심으로 설계되었습니다.

---

## 1. 랜딩 페이지 링크 OG(Open Graph) 태그 설정
카카오톡, 슬랙, 디스코드 등 SNS에 랜딩 페이지(`https://chartmon.app`) 링크를 공유할 때 노출될 고품질의 미리보기 카드 정보를 설정합니다.

### 반영 파일
* [landing/index.html](file:///d:/TradingEdu/landing/index.html)
* [landing/public/og-image.png](file:///d:/TradingEdu/landing/public/og-image.png) (신규 제작)

### 구현 상세
* `<head>` 태그 내에 다음 OG 태그 및 트위터 카드 메타 태그를 추가합니다.
  ```html
  <!-- Open Graph -->
  <meta property="og:title" content="ChartMon(차트몬) - 무료 주식 차트 실력 진단 & 트레이딩 훈련" />
  <meta property="og:description" content="하루 15분 주식 차트 실전 훈련으로 올바른 매매 결정을 내리는 습관을 기르세요. 뇌동매매와 손절 지연을 예방합니다." />
  <meta property="og:image" content="https://chartmon.app/og-image.png" />
  <meta property="og:url" content="https://chartmon.app" />
  <meta property="og:type" content="website" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="ChartMon(차트몬) - 무료 주식 차트 실력 진단 & 트레이딩 훈련" />
  <meta name="twitter:description" content="하루 15분 주식 차트 실전 훈련으로 올바른 매매 결정을 내리는 습관을 기르세요." />
  <meta name="twitter:image" content="https://chartmon.app/og-image.png" />
  ```
* **이미지 디자인**: AI 이미지 생성 도구를 활용하여 차트몬의 다크 테마 UI와 ELO 레이팅 그래프가 포함된 세련된 `og-image.png` (1200x630 해상도)를 생성하여 `landing/public`에 삽입합니다.

---

## 2. 구글 플레이 결제 및 프로(PRO) 권한 제어 (Premium Gate)
인앱 결제(IAP)를 연동하고, 무료 회원과 프리미엄 회원의 이용 범위를 엄격하게 차단(Gate)합니다.

### 반영 파일
* [src/App.tsx](file:///d:/TradingEdu/src/App.tsx)
* [src/components/PremiumPlansModal.tsx](file:///d:/TradingEdu/src/components/PremiumPlansModal.tsx)
* [src/components/DrillGymTab.tsx](file:///d:/TradingEdu/src/components/DrillGymTab.tsx)
* [src/components/SettingsTab.tsx](file:///d:/TradingEdu/src/components/SettingsTab.tsx)

### 구현 상세
1. **결제 연동 이중화 (Capacitor Native IAP + Web Simulator)**
   * **네이티브 안드로이드**: `Capacitor.isNativePlatform()`이 참일 경우, Capacitor 인앱결제 API를 호출하여 구글 플레이의 실제 결제창을 호출하고 영수증을 Supabase에 등록합니다.
   * **웹/테스트 환경**: 모바일 웹이나 로컬 테스트 브라우저에서는 하단에서 슬라이드 업되는 구글 결제 모의창(바텀시트)을 띄우고, "구매" 클릭 시 Supabase 프로필의 `is_premium` 컬럼을 즉시 `true`로 설정하고 로컬 스토리지에 동기화합니다.
2. **훈련소(Drills) 일일 이용 제한**
   * 무료 회원은 **카테고리 구분 없이 하루에 총 3회**만 실전 훈련소 트레이닝을 진행할 수 있도록 제한합니다.
   * 당일 훈련 횟수는 `localStorage` 및 `profiles.drill_stats` 내에 일일 카운터 데이터로 저장/관리합니다.
   * 3회를 초과하여 훈련을 시작하려고 할 경우, 불투명 자물쇠 오버레이 및 경고와 함께 `PremiumPlansModal`로 유도합니다.
3. **핵심 이론 백과(Theory Reader) 잠금 설정**
   * 총 10개 이론 모듈 중 기초 모듈 2개(`01. 차트와 시장 기초`, `02. 캔들스틱과 가격 행동`)를 제외한 **나머지 8개 고급 이론 모듈을 잠금 처리**합니다.
   * 잠긴 항목에는 자물쇠 아이콘(`Lock`)을 표시하고 카드를 반투명하게 흐리게 블러(`backdrop-filter: blur(4px)`) 처리합니다.
   * 무료 회원이 잠긴 이론 카드를 클릭하면 뷰어를 열지 않고 바로 `PremiumPlansModal`이 활성화됩니다.
4. **골드 배지 및 구독 제안**
   * 설정 화면(`SettingsTab`) 상단 프로필 옆에 찬란한 골드 그라데이션이 적용된 `PRO` 배지를 표시합니다.
   * 무료 회원일 경우 프로필 하단에 "PRO 멤버십으로 모든 훈련 & 이론 무제한 이용하기" 버튼을 배치하여 모달을 띄웁니다.

---

## 3. 알림 토글(Local Notification) 최적화 및 시스템 설정 연동
사용자가 알림 설정을 켤 때 권한이 거부된 상태라면 시스템 팝업이 다시 뜨지 않는 문제를 해결하기 위해, 네이티브 앱 설정 화면으로 직접 이동시키는 UX를 구현합니다.

### 반영 파일
* [src/components/SettingsTab.tsx](file:///d:/TradingEdu/src/components/SettingsTab.tsx)
* `package.json` (`capacitor-native-settings` 플러그인 추가 설치)

### 구현 상세
1. **권한 상태 진단 (`LocalNotifications.checkPermissions()`)**:
   * 알림 설정 스위치를 켤 때 현재 권한 상태를 먼저 확인합니다.
2. **권한 상태에 따른 분기**:
   * **허용(`granted`) 상태**: 추가 팝업이나 시스템 권한 요청 없이 즉시 앱 내 알림 상태를 활성화(`true`)하고 로컬/DB에 저장합니다.
   * **거부(`denied`) 상태**: 권한이 한 번 이상 거부된 상태이므로 시스템 팝업을 띄울 수 없습니다. 따라서 안내 모달("알림이 꺼져 있습니다. 설정 화면에서 알림 권한을 허용해 주세요.")을 보여준 후, 사용자가 확인을 누르면 **기기 내 앱 상세 설정 화면(App Settings)**으로 즉시 이동시킵니다.
   * **최초 상태 (`prompt` 또는 권한 요청 필요)**: `LocalNotifications.requestPermissions()`를 호출해 시스템 권한 팝업을 띄우고 결과에 따라 처리합니다.
3. **설정 화면 이동 구현**:
   * `@capacitor-community` 진영 및 산업 표준으로 사용되는 `capacitor-native-settings` 라이브러리를 적용하여 Android 및 iOS의 앱 정보 상세 페이지로 링크합니다.
     ```typescript
     import { NativeSettings, AndroidSettings, IOSSettings } from 'capacitor-native-settings';
     
     // 설정으로 이동
     await NativeSettings.open({
       optionAndroid: AndroidSettings.ApplicationDetails,
       optionIOS: IOSSettings.App
     });
     ```

---

## 4. 앱 내 버그 제보 / 피드백 보내기 버튼 추가
앱 내에서 발생한 오류나 건의 사항을 랜딩 페이지의 문의 폼으로 쉽고 빠르게 전달하도록 설계합니다.

### 반영 파일
* [src/components/SettingsTab.tsx](file:///d:/TradingEdu/src/components/SettingsTab.tsx)
* [landing/src/App.tsx](file:///d:/TradingEdu/landing/src/App.tsx)
* [landing/index.html](file:///d:/TradingEdu/landing/index.html) (Anchor 추가)

### 구현 상세
* **앱 단**: 설정 메뉴 목록에 `버그 제보 및 피드백` 버튼을 추가합니다. 클릭 시 Capacitor Browser API를 통해 랜딩 페이지의 문의 섹션(`https://chartmon.app/#contact`)을 인앱 브라우저로 엽니다.
* **랜딩 페이지 단**:
  * 최하단 또는 별도 영역에 `#contact` 섹션을 구성합니다.
  * 문의 유형(버그 제보 / 기능 건의 / 제휴 문의), 작성자 이메일, 본문 내용을 입력할 수 있는 **문의하기 폼(Contact Form) UI**를 구현합니다.
  * 문의 수신은 간편하게 `contact@42space.net` 메일링 API 혹은 Supabase `inquiries` 테이블을 생성하여 데이터를 직접 수집하는 방식을 취합니다.

---

## 5. 웰컴 페이지 및 프리미엄 구독 유도 플로우 설계 (개발자용 테스트 모드 포함)
랜딩 페이지에서 웹 광고나 검색을 통해 최초로 유입된 사용자가 앱을 다운로드한 후, 실제 유료 결제(PRO)까지 부드럽고 설득력 있게 이어지도록 온보딩 단계를 설계합니다. 또한, 잦은 테스트를 위해 앱 재설치 없이 온보딩을 반복 확인할 수 있는 개발 장치를 구축합니다.

### 반영 파일
* [landing/src/App.tsx](file:///d:/TradingEdu/landing/src/App.tsx)
* [src/App.tsx](file:///d:/TradingEdu/src/App.tsx)
* [src/components/WelcomeOnboarding.tsx](file:///d:/TradingEdu/src/components/WelcomeOnboarding.tsx) (신규 독립 컴포넌트)
* [src/components/SettingsTab.tsx](file:///d:/TradingEdu/src/components/SettingsTab.tsx)

### 구현 상세
1. **랜딩 페이지의 전환 장치**:
   * 랜딩 페이지의 무료 실력 진단 완료 후, 결과 화면에서 "나의 취약점을 보완할 맞춤 트레이닝 처방전"과 함께 **"첫 7일간 PRO 멤버십 무료 체험"** 특별 혜택 배너를 노출시킵니다.
   * 앱 마켓 다운로드 버튼에 특별 트래킹 또는 유입 프로모션 강조 문구를 배치합니다.
2. **앱의 웰컴 온보딩 슬라이드 (깔끔하고 완성도 높은 모던 마이크로 인터랙션)**:
   * 최초 앱 진입 시(또는 게스트 시작 시) 정적 이미지 나열을 탈피하고, **부드러운 화면 전환과 절제된 마이크로 애니메이션**을 더해 앱의 완성도와 브랜드 신뢰성(성의 있는 느낌)을 전달합니다.
   * **1단계: 실전 차트 속 '함정' 인지 (Chart Visualization)**
     * *비주얼*: 실제 차트의 캔들이 스르륵(Fade-in) 나타나고, 돌파 실패 구간(Bull Trap)에 **부드럽고 은은한 붉은색 반투명 강조 펄스**가 주기적으로 깜빡입니다.
     * *인터랙션*: 텍스트가 위에서 아래로 부드럽게 내려오며(Slide-down) 함정 감지 프로세스를 자연스럽게 보여줍니다.
   * **2단계: 나의 진짜 실력 측정 (Smooth ELO Counter)**
     * *비주얼*: 트레이더 ELO 등급과 등급 상승 그래프가 나타납니다.
     * *인터랙션*: 등급 수치가 **`1000 RP`에서 `1650 RP`까지 1.5초간 카운터가 숫자로 빠르게 올라가며(Number Counter Effect)**, 동시에 진행 상황 그래프 바가 부드러운 가감속(Ease-in-out)을 그리며 차오릅니다.
   * **3단계: 15분 훈련으로 뇌동매매 극복 (Staggered Habit Check)**
     * *비주얼*: 극복해야 할 잘못된 매매 습관과 차트몬의 해결책을 대비하는 화면입니다.
     * *인터랙션*: 무료 유저들이 가장 겪기 쉬운 습관 항목들이 위로 스르륵 올라오고, 해결책 카드로 전환되며 **체크마크가 드로잉 애니메이션으로 깔끔하게 그려지며 안착**합니다. (시차를 둔 Staggered Animation 적용)
   * **4단계: 차트몬 PRO 멤버십 제안 (Ambient Glow Card)**
     * *비주얼*: 차트몬 PRO 프리미엄 혜택 카드와 정식 가입 제안입니다.
     * *인터랙션*: 프리미엄 카드 뒷배경에 **은은한 금빛 그라데이션 광원(Ambient Glow)이 천천히 회전/이동**하며 입체적인 분위기를 만들고, 구매 버튼이 자연스레 강조되도록 설계합니다. 왕관이나 등급 배지는 부드러운 호버링(Float) 느낌만 살려줍니다.
3. **개발자용 테스트/샌드박스 장치 (Replay Onboarding)**:
   * 온보딩 화면을 별도의 독립형 컴포넌트(`WelcomeOnboarding.tsx`)로 작성합니다.
   * 설정 화면(`SettingsTab.tsx`) 하단에 개발용 **`[온보딩 애니메이션 테스트]`** 버튼을 구성하여, 누르는 즉시 로컬 저장 상태와 관계없이 전체화면 온보딩 팝업을 활성화해 테스트 루프를 가속합니다.
   * 실제 운영 환경에서는 `localStorage`에 `chartmon_onboarding_completed` 키 유무에 따라 최초 1회만 자동 실행됩니다.

---

## 6. 핵심 앱 기능 디테일 개선
트레이닝을 진행할 때의 작은 불편함을 해소하고 학습 효율을 극대화하기 위한 마이크로 개선 사항들입니다.

### A. 전문 용어 터치 시 앱 상단 요약 팝업 (Terminology Banner)
* **기존 문제**: 본문 텍스트 내에서 돋보기/점선 처리된 용어를 누르면 해당 글자 위에 툴팁이 떴으나, 모바일 화면에서는 툴팁이 잘리거나 손가락에 가려 보이지 않는 불편함이 있었습니다.
* **해결 방안**:
  * 전문 용어(`InteractiveTerm`)를 터치하거나 클릭하면, 개별 컴포넌트 내에 툴팁을 띄우지 않고 **전역 커스텀 이벤트(`show-term-explanation`)**를 발행합니다.
  * 메인 뷰포트 상단(`App.tsx` 또는 `QuizCard.tsx` 최상위 레이어)에서 이 이벤트를 감지하여, 화면 위쪽에서 부드럽게 내려오는 슬라이드 애니메이션 배너를 노출합니다.
  * 배너 구성: 용어 이름(볼드 표시), 1~2문장의 핵심 요약 정의, 닫기(`X`) 버튼. 5초 뒤 자동 종료되거나 화면의 다른 곳을 터치하면 사라집니다. 
  * 퀴즈 풀이 중이거나 해설을 읽는 도중에도 레이아웃이 무너지지 않고 즉시 확인이 가능합니다.

### B. 퀴즈 선택 시 즉시 정답 판정 (Confirm Button 생략)
* **기존 문제**: 보기를 클릭하여 선택한 후, 하단 드로워의 "정답 확인" 버튼을 한 번 더 눌러야만 정답 처리가 되어 불필요한 터치 횟수가 많았습니다.
* **해결 방안**:
  * `QuizCard.tsx`의 객관식 보기 버튼을 누르는 순간 **즉시 선택된 보기로 정답 확인 기능(`handleCheck`)이 함께 실행**되도록 수정합니다.
  * 보기 클릭 → 즉시 정답/오답 애니메이션 사운드 구동 및 하단 드로워 피드백 영역 노출.
  * 사용자는 보기 하나만 터치하고, 해설을 읽은 뒤 "계속하기" 버튼만 누르면 다음 문제로 바로 넘어갈 수 있어 사용자 경험이 비약적으로 가속화됩니다.

## 7. 정밀 난이도 동적 매칭 (Personalized Difficulty Auto-Matching) 및 마케팅 소구 적용
유저가 무작위 문제가 아닌 **본인의 현재 ELO 레이팅(RP)에 매칭되는 정밀한 난이도의 퀴즈를 공급받음**으로써, "하루 15분 학습으로 진짜 실력이 오른다"는 몰입감을 극대화하고 이 강점을 랜딩 페이지와 온보딩 과정에 적극 노출합니다.

### 반영 파일
* [src/App.tsx](file:///d:/TradingEdu/src/App.tsx) (난이도 필터링 로직 구현)
* [src/components/WelcomeOnboarding.tsx](file:///d:/TradingEdu/src/components/WelcomeOnboarding.tsx) (온보딩 카피 라이팅 및 ELO 슬라이드 고도화)
* [landing/src/App.tsx](file:///d:/TradingEdu/landing/src/App.tsx) (마이크로 퀴즈 결과 페이지 및 카피 라이팅 최적화)

### 구현 상세
1. **정밀 난이도 동적 매칭 알고리즘 (인앱 반영)**:
   * **사용자 레이팅 수집**: 데일리 트레이닝 세션을 생성할 때, 유저의 `overallRating` 점수(기본 1000 RP)를 가져옵니다. 훈련소 드릴 세션의 경우 해당 카테고리의 `CategoryStat.rating` 점수를 가져옵니다.
   * **목표 난이도 계산**: 사용자 레이팅과 각 퀴즈 난이도별 매핑 점수(`DIFFICULTY_RATINGS`)의 오차가 **$\pm 150 \sim 200 \text{ RP}$ 이내인 난이도 등급(Difficulty 1~7)**을 타겟 범위로 설정합니다.
   * **필터링 로직**:
     * 전체 퀴즈 풀 중 `1차 타겟 난이도`를 먼저 골라냅니다.
     * 타겟 범위에 포함되는 퀴즈들을 랜덤 셔플하여 세션 문제로 우선 공급합니다.
     * 만약 풀지 않은 문제 중 해당 난이도의 문제가 부족할 경우, 오차 범위를 $\pm 350 \text{ RP}$ (인접 난이도 $\pm 1$)로 자동 확장하여 채워주고 최종적으로 전체 랜덤 풀에서 폴백 공급하여 세션 구동 실패를 원천 방지합니다.
2. **랜딩 페이지 마케팅 소구 고도화**:
   * **메인 슬로건 및 처방전 카피**: 15초 진단 완료 후 Step 3의 다운로드 유도 카드 영역에 다음 카피를 탑재합니다.
     > *"내 등급에 맞춰 실시간으로 난이도가 정밀 튜닝되는 **1:1 AI 트레이닝 시스템**. 하루 15분 투자로 상위 5% 트레이더의 차트 근육을 이식하세요."*
3. **웰컴 온보딩 슬라이드 반영**:
   * **2단계 ELO 상승 그래프 슬라이드**에서 "정밀 난이도 동적 매칭" 시스템을 시각화합니다.
     > *"당신의 실력을 ELO 레이팅으로 정밀 측정하고, **풀 때마다 난이도가 자동 조절되는 1:1 맞춤형 퀴즈**를 공급합니다. 하루 15분이면 당신도 차트 마스터가 될 수 있습니다."*

---

## 검증 계획

### 1. 빌드 무결성 확인
* 웹 환경: `npm run build` 실행 시 빌드 경고 및 에러 여부 검증
* 네이티브 환경: `npx cap sync` 및 Android Studio Gradle 싱크 검증

### 2. 가상 결제 및 프리미엄 기능 해제 수동 검증
* 웹 브라우저 및 안드로이드 에뮬레이터에서 가상 Google Play 결제를 성공시키고, 훈련소 이용 제한이 풀리는지, 잠겨있던 8개 이론 모듈이 흐림 처리 없이 모두 즉시 열리는지 확인합니다.

### 3. 용어 설명 팝업 및 정답 즉시 판정 동작 검증
* 퀴즈 카드 본문 내 전문 용어를 클릭 시 앱 상단 헤더 바로 밑에서 부드럽게 요약 설명 창이 스르륵 내려오는지 검증합니다.
* 퀴즈 보기를 선택하자마자 아래 "정답 확인" 버튼을 따로 누르지 않아도 즉시 정답 여부가 판정되고 해설창이 노출되는지 확인합니다.

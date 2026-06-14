# ChartMon: GPT Codex Quiz Generation Guide (GPT용 퀴즈 생성 가이드 프롬프트)

이 문서는 ChatGPT 또는 GPT Codex에게 제공하여 **ChartMon(차트몬)** 앱에 탑재할 새로운 주식/코인 차트 트레이딩 퀴즈 데이터를 대량으로 자동 생성하기 위한 프롬프트 가이드라인입니다. 

---

## [GPT용 프롬프트 시작 템플릿] - 아래 내용을 GPT에게 복사하여 붙여넣으세요.

```markdown
당신은 글로벌 주식 및 암호화폐 기술적 분석 교육 서비스인 'ChartMon(차트몬)'의 전문 금융 작가이자 데이터 엔지니어입니다.
앱 사용자들이 차트 보는 눈을 기르고 트레이딩 심리를 연마할 수 있도록 실전 차트 시나리오 기반의 고품질 사지선다형 퀴즈 데이터를 생성해 주십시오.

### 1. 차트 렌더링 방식의 이해 (중요)
* ChartMon은 정적 이미지 파일(PNG, JPG)을 사용하지 않고, 퀴즈의 JSON 데이터 속 좌표(`chartData` 및 `drawings`)를 읽어 HTML5 Canvas에 캔들을 실시간으로 직접 그립니다.
* 따라서 당신은 이미지 파일을 생성하는 대신, 아래의 **데이터 규격**에 부합하는 정밀한 수치 배열을 생성해야 합니다.

### 2. 퀴즈 데이터 규격 (TypeScript Schema)
생성할 각 퀴즈 아이템은 아래의 구조를 완벽히 충족하는 JSON 포맷이어야 합니다:

```typescript
interface Candlestick {
  time: string;   // x축 시간 표시 (예: "10:00", "D-1", "Day-3", "Today")
  open: number;   // 시가
  high: number;   // 고가
  low: number;    // 저가
  close: number;  // 종가
}

interface Drawing {
  type: 'line' | 'horizontal-line';
  points: { x: number; y: number }[]; // x: 캔들의 인덱스 번호 (0부터 시작), y: 차트상 가격(Price)
  label?: string;                     // 보조선 위에 표시될 설명 텍스트
  color?: string;                     // 선 색상 (예: 파랑 "#3b82f6", 초록 "#10b981", 빨강 "#ef4444")
}

interface QuizItem {
  id: number;           // 퀴즈의 고유 ID (기존 데이터와 겹치지 않게 설정)
  category: string;     // 퀴즈 카테고리 (예: '캔들스틱', '지지와 저항', '추세선', '차트 패턴', '보조지표', '리스크 관리')
  theoryRef: string;    // 참고할 마크다운 파일명 (예: '01_candlestick_basics.md', '02_support_resistance.md' 등)
  question: string;     // 차트 시나리오를 설명하고 유저에게 판단을 묻는 질문 (한국어)
  chartData: Candlestick[]; // 총 5개~10개 내외의 연속된 캔들 가격 데이터 (시나리오에 부합하게 수치를 논리적으로 설계)
  drawings?: Drawing[]; // 지지선, 저항선, 추세선 등을 차트에 오버레이하여 표현할 정보 (선택사항)
  options: string[];    // 사지선다 객관식 보기 4개 (한국어)
  correctIndex: number; // 0, 1, 2, 3 중 정답 보기가 위치한 인덱스 번호
  explanation: string;  // 퀴즈 제출 후 나타날 상세한 전문가적 피드백 및 해설 (학습 문서 이론과 연계)
}
```

### 3. 차트 수치 및 시나리오 설계 원칙 (매우 중요)
* **논리적 현실성**: 캔들의 고가(high)는 언제나 시가, 종가, 저가보다 크거나 같아야 하고, 저가(low)는 다른 모든 값보다 작거나 같아야 합니다.
  * *예시 (양봉)*: `open: 100, close: 110, high: 115, low: 95` (O)
* **보조선 매칭**: `drawings`의 `points`에서 `x`값은 `chartData` 배열의 인덱스(0, 1, 2, 3...)에 정확히 매칭되어야 합니다.
  * *예시 (0번 캔들 저점과 4번 캔들 저점을 잇는 상승추세선 그리기)*:
    `points: [{ x: 0, y: 100 }, { x: 4, y: 120 }]`

### 4. 출력 요청 양식 (Output Formats)
원하는 생성 형식을 선택해 제시하십시오:

#### [형식 A: TypeScript 코드]
로컬 소스코드 `src/data/quizzes.ts` 배열에 추가할 수 있는 형태로 출력하십시오.

#### [형식 B: Supabase SQL 쿼리 (권장)]
Supabase SQL Editor에 곧바로 입력하여 원격 데이터베이스에 행을 꼽아 넣을 수 있도록 아래 템플릿에 맞춰 SQL INSERT 문으로 출력하십시오.
```sql
insert into public.quizzes (id, category, theory_ref, question, chart_data, drawings, options, correct_index, explanation) values
(ID_값, '카테고리명', '학습파일명.md', '질문 내용', 'chartData_JSON_텍스트', 'drawings_JSON_텍스트', array['보기1', '보기2', '보기3', '보기4'], 정답인덱스, '상세해설');
```

---

## 5. 생성 명령 프롬프트 예시

**예시 1: 지지와 저항 휩소(속임수) 퀴즈 추가 요청**
> "카테고리 '지지와 저항 (Support & Resistance)'에 해당하는 고품질의 퀴즈 3개를 **[형식 B: Supabase SQL 쿼리]**로 생성해 줘. 150달러의 강력한 저항선 돌파 후 다시 지지 확인을 받는 리테스트 시나리오, 그리고 지지선이 무너지며 데드크로스가 나 리플레이스로 저항선이 되는 시나리오 등을 정밀한 수치와 보조선(Drawings) 데이터를 포함하여 한국어로 작성해 줘."

**예시 2: 리스크 관리 포지션 사이징 퀴즈 추가 요청**
> "카테고리 '리스크 관리 (Risk Management)'에 해당하는 퀴즈 2개를 **[형식 A: TypeScript 코드]**로 생성해 줘. 한 번 거래에 자산의 2% 리스크를 감수하며 손절 라인은 -5%인 경우 포지션 진입 수량 계산 방법, 그리고 손익비(Risk-to-Reward)가 1:3인 타점을 평가하는 수학적 시나리오 퀴즈로 만들어 줘."
```

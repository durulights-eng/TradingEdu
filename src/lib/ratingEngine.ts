// ChartMon ELO Rating & Skill Proficiency Calculator Engine

export interface CategoryStat {
  rating: number; // R_c (Category Rating, default 1000)
  attempts: number; // Total attempts in this category
  correct: number; // Total correct answers in this category
  nEff: number; // Effective number of solved questions (N_eff)
  recentAnswers: number[]; // Recent answers (0 or 1, max length 10) for trend calculation
  seenQuestions: Record<number, number>; // Question ID -> Seen count
  level: number; // Category Level (1 to 5)
  accuracy: number; // Category Proficiency (0 to 100)
}

export interface UserRatingState {
  overallRating: number; // R_u (Overall User ELO Rating, default 1000)
  categories: Record<string, CategoryStat>;
}

export const ALL_CATEGORIES = [
  '캔들/가격행동',
  '시장구조/SR',
  '추세/레짐',
  '패턴/돌파',
  '거래량/유동성',
  '지표/컨플루언스',
  '셋업/실행',
  '리스크/심리'
];

// Map difficulty 1-7 to ELO Rating R_q
export const DIFFICULTY_RATINGS: Record<number, number> = {
  1: 850,
  2: 1000,
  3: 1150,
  4: 1300,
  5: 1500,
  6: 1700,
  7: 1900
};

// Default category stat builder
export function createDefaultCategoryStat(): CategoryStat {
  return {
    rating: 1000,
    attempts: 0,
    correct: 0,
    nEff: 0,
    recentAnswers: [],
    seenQuestions: {},
    level: 1,
    accuracy: 50 // Default baseline proficiency
  };
}

// Default overall user rating builder
export function createDefaultRatingState(categories: string[]): UserRatingState {
  const cats: Record<string, CategoryStat> = {};
  categories.forEach(cat => {
    cats[cat] = createDefaultCategoryStat();
  });
  return {
    overallRating: 1000,
    categories: cats
  };
}

// Expected probability: E = 1 / (1 + 10^((Rq - Ru) / 400))
export function getExpectedScore(userRating: number, targetRating: number): number {
  return 1 / (1 + Math.pow(10, (targetRating - userRating) / 400));
}

// Calculate difficulty weight: D = 0.85 + 0.05 * difficulty
export function getDifficultyWeight(difficulty: number): number {
  return 0.85 + 0.05 * difficulty;
}

// Calculate novelty weight: X = 1 / (1 + 0.35 * sameQuestionSeenCount)
export function getNoveltyWeight(seenCount: number): number {
  return 1 / (1 + 0.35 * seenCount);
}

// Update overall rating for a single question
export function calculateSingleRatingUpdate(
  userRating: number,
  quizRating: number,
  isCorrect: boolean,
  difficulty: number,
  seenCount: number,
  kBase: number = 32
): { deltaR: number; expected: number } {
  const E = getExpectedScore(userRating, quizRating);
  const S = isCorrect ? 1 : 0;
  const D = getDifficultyWeight(difficulty);
  const X = getNoveltyWeight(seenCount);
  
  // Consistency multiplier (default to 1.0 for single queries)
  const C = 1.0; 
  
  const K = kBase * D * X * C;
  const deltaR = K * (S - E);
  
  return { deltaR, expected: E };
}

// Update overall ELO and category ELOs based on a completed session
export function processSessionUpdates(
  currentState: UserRatingState,
  sessionQuizzes: Array<{
    id: number;
    category: string;
    difficulty: number;
    isCorrect: boolean;
  }>,
  allCategories: string[]
): UserRatingState {
  // Ensure we copy state cleanly
  const nextState: UserRatingState = {
    overallRating: currentState.overallRating || 1000,
    categories: {}
  };

  // Initialize all categories with existing or default stats
  allCategories.forEach(cat => {
    if (currentState.categories && currentState.categories[cat]) {
      nextState.categories[cat] = JSON.parse(JSON.stringify(currentState.categories[cat]));
    } else {
      nextState.categories[cat] = createDefaultCategoryStat();
    }
  });

  if (sessionQuizzes.length === 0) return nextState;

  // 1. Calculate Overall User ELO Update (Session logic)
  let sumDeltaR = 0;
  let sumExpected = 0;
  let sumActual = 0;

  const quizDetails = sessionQuizzes.map(item => {
    const category = item.category;
    const catStat = nextState.categories[category] || createDefaultCategoryStat();
    
    // Calculate seen count (how many times they answered this specific question before)
    const seenCount = catStat.seenQuestions[item.id] || 0;
    
    const quizRating = DIFFICULTY_RATINGS[item.difficulty] || 1000;
    const { deltaR, expected } = calculateSingleRatingUpdate(
      nextState.overallRating,
      quizRating,
      item.isCorrect,
      item.difficulty,
      seenCount
    );

    sumDeltaR += deltaR;
    sumExpected += expected;
    sumActual += item.isCorrect ? 1 : 0;

    return {
      id: item.id,
      category,
      difficulty: item.difficulty,
      isCorrect: item.isCorrect,
      quizRating,
      seenCount,
      deltaR
    };
  });

  // Calculate consistency bonus based on expectations
  // sessionScore = Σ(S_i - E_i) / N
  const sessionScore = (sumActual - sumExpected) / sessionQuizzes.length;
  // consistencyBonus = clamp(0.9, 1.1, 1 + sessionScore * 0.35)
  const consistencyBonus = Math.min(1.1, Math.max(0.9, 1 + sessionScore * 0.35));
  
  const finalSessionDelta = sumDeltaR * consistencyBonus;
  nextState.overallRating = Math.max(500, Math.round(nextState.overallRating + finalSessionDelta));

  // 2. Calculate Category ELO & Proficiency Updates
  quizDetails.forEach(item => {
    const cat = item.category;
    const catStat = nextState.categories[cat];

    const D = getDifficultyWeight(item.difficulty);
    const X = getNoveltyWeight(item.seenCount);

    // K-factor for categories is 24 as suggested
    const K_i = 24 * D * X;
    const E_i = getExpectedScore(catStat.rating, item.quizRating);
    const S_i = item.isCorrect ? 1 : 0;
    
    // Update category ELO rating (R_c)
    catStat.rating = Math.max(500, Math.round(catStat.rating + K_i * (S_i - E_i)));

    // Increment seen questions count
    catStat.seenQuestions[item.id] = (catStat.seenQuestions[item.id] || 0) + 1;

    // Update attempts & correct counters
    catStat.attempts += 1;
    if (item.isCorrect) {
      catStat.correct += 1;
    }

    // Accumulate effective questions count (N_eff)
    catStat.nEff += D * X;

    // Update recent answers rolling window (max 10 items)
    catStat.recentAnswers.push(S_i);
    if (catStat.recentAnswers.length > 10) {
      catStat.recentAnswers.shift();
    }
  });

  // 3. Recalculate Proficiency & Level for ALL categories (including those not practiced)
  allCategories.forEach(cat => {
    const catStat = nextState.categories[cat];
    
    if (catStat.attempts === 0) {
      catStat.accuracy = 50; // default baseline
      catStat.level = 1;
      return;
    }

    // raw = clamp(0, 100, (R_c_new - 800) / 11)
    const raw = Math.min(100, Math.max(0, (catStat.rating - 800) / 11));
    
    // confidence = 1 - exp(-N_eff / 30)
    const confidence = 1 - Math.exp(-catStat.nEff / 30);
    
    // trend = clamp(-8, 8, 20 * (EMA_recent - EMA_long))
    const recentAcc = catStat.recentAnswers.length > 0
      ? catStat.recentAnswers.reduce((a, b) => a + b, 0) / catStat.recentAnswers.length
      : 0.5;
    const longAcc = catStat.correct / catStat.attempts;
    const trend = Math.min(8, Math.max(-8, 20 * (recentAcc - longAcc)));

    // proficiency = clamp(0, 100, 50 + confidence * (raw - 50) + trend)
    const proficiency = Math.min(100, Math.max(0, Math.round(50 + confidence * (raw - 50) + trend)));
    
    catStat.accuracy = proficiency;

    // Map proficiency to Lv.1 ~ Lv.5 (for dashboard level presentation)
    if (proficiency >= 90) catStat.level = 5;
    else if (proficiency >= 75) catStat.level = 4;
    else if (proficiency >= 60) catStat.level = 3;
    else if (proficiency >= 40) catStat.level = 2;
    else catStat.level = 1;
  });

  return nextState;
}

// Get rating tier description
export interface EloTier {
  name: string;
  badge: string;
  color: string;
  minRating: number;
  maxRating: number;
}

export const ELO_TIERS: EloTier[] = [
  { name: "입문 트레이더 (Novice)", badge: "🌱", color: "#b8c2d0", minRating: 0, maxRating: 899 },
  { name: "기초 트레이더 (Beginner)", badge: "📈", color: "#3b82f6", minRating: 900, maxRating: 1099 },
  { name: "실전 초급 (Pro-Lite)", badge: "🔍", color: "#fbbf24", minRating: 1100, maxRating: 1299 },
  { name: "중급 트레이더 (Intermediate)", badge: "🛡️", color: "#f59e0b", minRating: 1300, maxRating: 1499 },
  { name: "숙련 트레이더 (Advanced)", badge: "⚡", color: "#10b981", minRating: 1500, maxRating: 1699 },
  { name: "시니어 트레이더 (Senior)", badge: "👑", color: "#a855f7", minRating: 1700, maxRating: 1899 },
  { name: "엘리트 트레이더 (Elite)", badge: "🔥", color: "#ec4899", minRating: 1900, maxRating: Infinity }
];

export function getEloTier(rating: number): EloTier {
  return ELO_TIERS.find(t => rating >= t.minRating && rating <= t.maxRating) || ELO_TIERS[0];
}

export * from './quizzes/types';
export * from './quizzes/index';

export interface TradingTier {
  level: number;
  name: string;
  minXp: number;
  maxXp: number;
  badge: string;
  description: string;
}

export const tradingTiers: TradingTier[] = [
  { level: 1, name: "모의 투자자 (Paper Trader)", minXp: 0, maxXp: 199, badge: "🌱", description: "가상 자산으로 차트의 기초를 훈련하는 단계" },
  { level: 2, name: "차트 초심자 (Chart Novice)", minXp: 200, maxXp: 499, badge: "📈", description: "기초 지지/저항선 및 캔들 패턴을 해독하는 단계" },
  { level: 3, name: "기술 분석가 (Technical Analyst)", minXp: 500, maxXp: 999, badge: "🔍", description: "보조지표의 시그널과 다이버전스를 포착하는 단계" },
  { level: 4, name: "원칙 트레이더 (Discipline Trader)", minXp: 1000, maxXp: 1999, badge: "🛡️", description: "2% 자금 관리 원칙과 손익비에 맞추어 거래하는 단계" },
  { level: 5, name: "시장 마스터 (Market Master)", minXp: 2000, maxXp: Infinity, badge: "👑", description: "가짜 돌파를 걸러내고 시장의 심리를 다스리는 최상위 단계" }
];

export function getTradingTier(xp: number): TradingTier {
  return tradingTiers.find(t => xp >= t.minXp && xp <= t.maxXp) || tradingTiers[0];
}

export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getYesterdayDateString(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() - 1);
  return getLocalDateString(date);
}

export function isOlderThanYesterday(lastActiveStr: string, todayStr: string): boolean {
  if (!lastActiveStr) return false;
  if (lastActiveStr === todayStr) return false;
  const yesterdayStr = getYesterdayDateString(todayStr);
  return lastActiveStr !== yesterdayStr;
}

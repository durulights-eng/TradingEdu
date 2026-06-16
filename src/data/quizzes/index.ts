import type { QuizItem } from './types';
import { quizzes_candlestick_price_action } from './02_candlestick_price_action';
import { quizzes_chart_market_basics } from './01_chart_market_basics';
import { quizzes_market_structure } from './03_market_structure';
import { quizzes_volume_liquidity } from './05_volume_liquidity';
import { quizzes_patterns_breakout } from './04_patterns_breakout';
import { quizzes_multitimeframe_regime } from './07_multitimeframe_regime';
import { quizzes_technical_indicators } from './06_technical_indicators';
import { quizzes_risk_position_management } from './09_risk_position_management';
import { quizzes_setup_entry_exit } from './08_setup_entry_exit';
import { quizzes_psychology_routine_review } from './10_psychology_routine_review';

export const quizzes: QuizItem[] = [
  ...quizzes_candlestick_price_action,
  ...quizzes_chart_market_basics,
  ...quizzes_market_structure,
  ...quizzes_volume_liquidity,
  ...quizzes_patterns_breakout,
  ...quizzes_multitimeframe_regime,
  ...quizzes_technical_indicators,
  ...quizzes_risk_position_management,
  ...quizzes_setup_entry_exit,
  ...quizzes_psychology_routine_review
];

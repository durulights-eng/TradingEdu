export interface Candlestick {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number; // Optional volume field
}

export interface QuizItem {
  id: number;
  category: string;
  categoryKey: 'candle' | 'structure' | 'trend' | 'pattern' | 'volume' | 'indicator' | 'execution' | 'risk';
  difficulty: number;
  theoryRef: string;
  question: string;
  chartData: Candlestick[];
  drawings?: {
    type: 'line' | 'horizontal-line' | 'channel' | 'text';
    points: { x: number; y: number }[];
    label?: string;
    color?: string;
  }[];
  options: string[];
  correctIndex: number;
  explanation: string;
}

const fs = require('fs');
const path = require('path');

try {
  // Read quizzes.ts
  const filePath = path.join(__dirname, '../src/data/quizzes.ts');
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip TypeScript annotations using simple regexes
  content = content.replace(/export interface [\s\S]*?\n\n/g, '');
  content = content.replace(/: QuizItem\[\]/g, '');
  content = content.replace(/: Candlestick\[\]/g, '');
  content = content.replace(/: {[\s\S]*?}\[\]/g, '');
  content = content.replace('export const quizzes', 'const quizzes');
  content = content.replace('export interface TradingTier [\s\S]*', '');
  
  // Remove trailing functions and interfaces
  const quizzesEndIndex = content.lastIndexOf('];');
  if (quizzesEndIndex !== -1) {
    content = content.substring(0, quizzesEndIndex + 2);
  }
  content += '\nmodule.exports = quizzes;\n';

  // Write to a temporary file
  const tempPath = path.join(__dirname, 'temp_quizzes.js');
  fs.writeFileSync(tempPath, content);

  // Require the temp file
  const quizzes = require(tempPath);

  // Generate SQL
  let sql = `TRUNCATE public.quizzes RESTART IDENTITY;\n\n`;

  for (const q of quizzes) {
    const category = q.category.replace(/'/g, "''");
    const theoryRef = q.theoryRef.replace(/'/g, "''");
    const question = q.question.replace(/'/g, "''");
    const chartData = JSON.stringify(q.chartData).replace(/'/g, "''");
    const drawings = JSON.stringify(q.drawings || []).replace(/'/g, "''");
    
    // Format options as postgres text array: ARRAY['opt1', 'opt2', ...]
    const optionsStr = `ARRAY[` + q.options.map(o => `'${o.replace(/'/g, "''")}'`).join(', ') + `]::text[]`;
    const explanation = q.explanation.replace(/'/g, "''");
    
    sql += `INSERT INTO public.quizzes (id, category, theory_ref, question, chart_data, drawings, options, correct_index, explanation) VALUES (${q.id}, '${category}', '${theoryRef}', '${question}', '${chartData}'::jsonb, '${drawings}'::jsonb, ${optionsStr}, ${q.correctIndex}, '${explanation}');\n`;
  }

  // Write SQL file
  fs.writeFileSync(path.join(__dirname, 'seed_quizzes.sql'), sql);
  console.log('SQL generated successfully in docs/seed_quizzes.sql');

  // Cleanup
  fs.unlinkSync(tempPath);
} catch (err) {
  console.error('Failed to generate SQL:', err);
}

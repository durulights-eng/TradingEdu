const fs = require('fs');
const path = require('path');

try {
  const quizzesDir = path.join(__dirname, '../src/data/quizzes');
  const files = fs.readdirSync(quizzesDir).filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts');

  console.log(`Found ${files.length} modular quiz files to parse.`);

  const allQuizzes = [];
  for (const file of files) {
    let content = fs.readFileSync(path.join(quizzesDir, file), 'utf8');
    
    // Strip import statement
    content = content.replace(/import type[\s\S]*?\n/g, '');
    
    // Convert export const quizzes_xxx: QuizItem[] = [ ... ] to module.exports = [ ... ]
    content = content.replace(/export const quizzes_\w+:\s*QuizItem\[\]\s*=\s*/g, 'module.exports = ');
    
    const tempPath = path.join(__dirname, 'temp_' + file.replace('.ts', '.cjs'));
    fs.writeFileSync(tempPath, content);
    
    try {
      const quizzes = require(tempPath);
      allQuizzes.push(...quizzes);
    } finally {
      fs.unlinkSync(tempPath);
    }
  }

  console.log(`Successfully loaded ${allQuizzes.length} total quizzes for SQL generation.`);

  // Generate SQL
  let sql = `TRUNCATE public.quizzes RESTART IDENTITY;\n\n`;

  // Sort by ID to keep database records sequential
  allQuizzes.sort((a, b) => a.id - b.id);

  for (const q of allQuizzes) {
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

} catch (err) {
  console.error('Failed to generate SQL:', err);
}

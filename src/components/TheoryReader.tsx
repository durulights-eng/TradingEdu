import React from 'react';
import { ArrowLeft, BookOpen, CheckCircle2, Clock3, Lightbulb, ShieldAlert, Target } from 'lucide-react';
import { theoryDocuments } from '../data/theoryContent';
import { HighlightText } from './HighlightText';
import { TheoryDiagram } from './TheoryDiagram';

interface TheoryReaderProps {
  theoryFile: string;
  onBack?: () => void;
  isInline?: boolean;
}

export const TheoryReader: React.FC<TheoryReaderProps> = ({ theoryFile, onBack, isInline = false }) => {
  const document = theoryDocuments[theoryFile];

  if (!document) {
    return (
      <div className="theory-empty-state">
        <BookOpen size={28} />
        <strong>이론 문서를 찾을 수 없습니다.</strong>
        <span>{theoryFile}</span>
        {onBack && <button onClick={onBack}>목록으로 돌아가기</button>}
      </div>
    );
  }

  return (
    <article className={`theory-reader ${isInline ? 'theory-reader-inline' : ''}`}>
      {!isInline && onBack && (
        <button className="theory-back-button" onClick={onBack}>
          <ArrowLeft size={18} />
          이론 목록
        </button>
      )}

      <header className="theory-reader-header">
        <span className="theory-category-label">{document.category}</span>
        <h1>{document.title}</h1>
        <p>{document.subtitle}</p>
        <div className="theory-meta-row">
          <span><Clock3 size={15} /> 약 {document.readingMinutes}분</span>
          <span><BookOpen size={15} /> {document.sections.length}개 실전 단원</span>
        </div>
      </header>

      <section className="theory-objectives">
        <div className="theory-block-title"><Target size={18} /><h2>이 챕터를 끝내면</h2></div>
        <ul>
          {document.objectives.map(objective => <li key={objective}><CheckCircle2 size={15} /><span>{objective}</span></li>)}
        </ul>
      </section>

      <nav className="theory-toc" aria-label="챕터 목차">
        <strong>목차</strong>
        <div>
          {document.sections.map((section, index) => (
            <a key={section.title} href={`#theory-${theoryFile}-${index}`}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {section.title.replace(/^\d+\.\s*/, '')}
            </a>
          ))}
        </div>
      </nav>

      <div className="theory-sections">
        {document.sections.map((section, index) => (
          <section className="theory-section" id={`theory-${theoryFile}-${index}`} key={section.title}>
            <div className="theory-section-number">{String(index + 1).padStart(2, '0')}</div>
            <div className="theory-section-heading">
              <h2>{section.title}</h2>
              <p>{section.summary}</p>
            </div>

            {section.diagram && section.diagramCaption && (
              <TheoryDiagram type={section.diagram} caption={section.diagramCaption} />
            )}

            <div className="theory-body-copy">
              {section.paragraphs.map(paragraph => (
                <p key={paragraph}><HighlightText text={paragraph} /></p>
              ))}
            </div>

            <div className="theory-checkpoints">
              <strong>차트에서 확인할 것</strong>
              <ul>
                {section.checkpoints.map(item => <li key={item}><CheckCircle2 size={14} /><span>{item}</span></li>)}
              </ul>
            </div>

            <div className="theory-example-box">
              <Lightbulb size={18} />
              <div><strong>실전 예시</strong><p><HighlightText text={section.example} /></p></div>
            </div>

            {section.caution && (
              <div className="theory-caution-box">
                <ShieldAlert size={18} />
                <div><strong>흔한 오판</strong><p><HighlightText text={section.caution} /></p></div>
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="theory-final-checklist">
        <div className="theory-block-title"><CheckCircle2 size={19} /><h2>실전 전 최종 체크</h2></div>
        <div>
          {document.finalChecklist.map((item, index) => (
            <label key={item}><input type="checkbox" /><span>{index + 1}. {item}</span></label>
          ))}
        </div>
      </section>
    </article>
  );
};

export default TheoryReader;

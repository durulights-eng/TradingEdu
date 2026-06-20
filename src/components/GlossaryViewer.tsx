import React, { useMemo, useState } from 'react';
import { ArrowLeft, BookOpenText, ChevronDown, Search, X } from 'lucide-react';
import { dictionary } from '../data/dictionary';

interface GlossaryViewerProps {
  onBack: () => void;
}

const getCategory = (category?: string) => category ?? '핵심 용어';

export const GlossaryViewer: React.FC<GlossaryViewerProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    dictionary.forEach(item => {
      const category = getCategory(item.category);
      counts.set(category, (counts.get(category) ?? 0) + 1);
    });
    return ['전체', ...Array.from(counts.keys())];
  }, []);

  const filteredTerms = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase('ko');
    return dictionary
      .filter(item => activeCategory === '전체' || getCategory(item.category) === activeCategory)
      .filter(item => {
        if (!normalizedQuery) return true;
        const searchable = [item.term, item.definition, item.category, item.example, ...(item.aliases ?? [])]
          .filter(Boolean)
          .join(' ')
          .toLocaleLowerCase('ko');
        return searchable.includes(normalizedQuery);
      })
      .sort((a, b) => a.term.localeCompare(b.term, 'ko'));
  }, [activeCategory, searchQuery]);

  return (
    <div className="glossary-viewer">
      <header className="glossary-header">
        <button className="glossary-back-button" onClick={onBack}><ArrowLeft size={18} />훈련으로</button>
        <span className="glossary-count-badge">{dictionary.length}개 용어</span>
      </header>

      <div className="glossary-title-block">
        <BookOpenText size={24} />
        <div>
          <h2>트레이딩 용어사전</h2>
          <p>차트, 주문, 지표, 파생상품, 리스크 용어를 검색하고 실전 예시까지 확인하세요.</p>
        </div>
      </div>

      <div className="glossary-search">
        <Search size={18} />
        <input
          type="search"
          placeholder="예: 가짜 돌파, RSI, 시장가, 감마"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
        {searchQuery && <button onClick={() => setSearchQuery('')} aria-label="검색어 지우기"><X size={16} /></button>}
      </div>

      <div className="glossary-categories" aria-label="용어 카테고리">
        {categories.map(category => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="glossary-result-summary">
        <strong>{filteredTerms.length}</strong>개 결과
        {searchQuery && <span>“{searchQuery}” 검색</span>}
      </div>

      <div className="glossary-list">
        {filteredTerms.length > 0 ? filteredTerms.map(item => {
          const isExpanded = expandedTerm === item.term;
          return (
            <article className={`glossary-item ${isExpanded ? 'expanded' : ''}`} key={item.term}>
              <button className="glossary-item-trigger" onClick={() => setExpandedTerm(isExpanded ? null : item.term)}>
                <div>
                  <span className="glossary-item-category">{getCategory(item.category)}</span>
                  <h3>{item.term}</h3>
                </div>
                <ChevronDown size={18} />
              </button>
              {isExpanded && (
                <div className="glossary-item-content">
                  <p>{item.definition}</p>
                  {item.aliases && item.aliases.length > 0 && (
                    <div className="glossary-aliases"><strong>같이 찾는 말</strong>{item.aliases.map(alias => <span key={alias}>{alias}</span>)}</div>
                  )}
                  {item.example && (
                    <div className="glossary-example"><strong>예시</strong><p>{item.example}</p></div>
                  )}
                </div>
              )}
            </article>
          );
        }) : (
          <div className="glossary-empty"><Search size={25} /><strong>검색 결과가 없습니다.</strong><span>다른 표현이나 카테고리로 찾아보세요.</span></div>
        )}
      </div>
    </div>
  );
};

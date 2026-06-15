import React, { useState } from 'react';
import { dictionary } from '../data/dictionary';
import { ArrowLeft, Search, X } from 'lucide-react';

interface GlossaryViewerProps {
  onBack: () => void;
}

export const GlossaryViewer: React.FC<GlossaryViewerProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTerm, setExpandedTerm] = useState<string | null>(null);

  const filteredTerms = dictionary.filter(item =>
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (term: string) => {
    if (expandedTerm === term) {
      setExpandedTerm(null);
    } else {
      setExpandedTerm(term);
    }
  };

  return (
    <div style={{ padding: '24px 20px', paddingBottom: '90px', display: 'flex', flexDirection: 'column', flex: 1, gap: '20px' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button 
          onClick={onBack}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px', 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-secondary)', 
            cursor: 'pointer', 
            fontSize: '14px', 
            fontWeight: 600 
          }}
        >
          <ArrowLeft size={18} />
          <span>뒤로가기</span>
        </button>
        <span 
          style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: 'var(--color-brand)', 
            fontSize: '11px', 
            fontWeight: 700, 
            padding: '4px 8px', 
            borderRadius: '6px' 
          }}
        >
          용어 사전
        </span>
      </div>

      <h2 className="card-title" style={{ fontSize: '20px', fontWeight: 800 }}>
        📖 트레이딩 핵심 용어 사전
      </h2>

      {/* Search Box */}
      <div style={{ position: 'relative', width: '100%' }}>
        <input
          type="text"
          placeholder="용어 또는 설명 검색..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px 12px 42px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            background: 'var(--bg-surface)',
            color: 'var(--text-primary)',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-brand)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
        />
        <Search 
          size={18} 
          style={{ 
            position: 'absolute', 
            left: '14px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            color: 'var(--text-muted)' 
          }} 
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Terms List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => {
            const isExpanded = expandedTerm === item.term;
            return (
              <div
                key={index}
                onClick={() => toggleExpand(item.term)}
                className="module-card"
                style={{
                  cursor: 'pointer',
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  transition: 'all 0.2s ease',
                  borderColor: isExpanded ? 'var(--color-brand)' : 'var(--border-color)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {item.term}
                  </h3>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    {isExpanded ? '접기' : '더보기'}
                  </span>
                </div>
                {isExpanded && (
                  <p 
                    style={{ 
                      fontSize: '13px', 
                      color: 'var(--text-secondary)', 
                      lineHeight: '1.5',
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '8px',
                      margin: 0
                    }}
                  >
                    {item.definition}
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', fontSize: '14px' }}>
            검색 결과와 일치하는 용어가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
};

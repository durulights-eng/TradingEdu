import React from 'react';
import { dictionary } from '../data/dictionary';
import { InteractiveTerm } from './InteractiveTerm';

interface HighlightTextProps {
  text: string;
}

export const HighlightText: React.FC<HighlightTextProps> = ({ text }) => {
  if (!text) return null;

  // Sort dictionary terms by length descending to prevent shorter matches inside longer ones (e.g. "다이버전스" matching inside "상승 다이버전스")
  const sortedDictionary = [...dictionary].sort((a, b) => b.term.length - a.term.length);

  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const pattern = sortedDictionary.map(item => escapeRegExp(item.term)).join('|');
  if (!pattern) return <>{text}</>;

  // Regex splitting by capturing group to preserve matching terms in the split array
  const regex = new RegExp(`(${pattern})`, 'g');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        const match = sortedDictionary.find(item => item.term === part);
        if (match) {
          return <InteractiveTerm key={index} term={match.term} definition={match.definition} />;
        }
        return part;
      })}
    </>
  );
};

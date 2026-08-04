import React from 'react';

export function renderTextWithHighlights(text: string): React.ReactNode {
  if (!text) return null;
  
  const parts = text.split(/(<red>.*?<\/red>)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('<red>') && part.endsWith('</red>')) {
          const content = part.slice(5, -6);
          return (
            <span 
              key={index} 
              className="text-red-600 font-bold bg-red-50 px-1.5 py-0.5 rounded-md border border-red-200/60 inline"
            >
              {content}
            </span>
          );
        }
        return part;
      })}
    </>
  );
}

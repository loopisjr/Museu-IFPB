import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
}

export default function Quote({ children }: QuoteProps) {
  return (
    <blockquote style={{
      borderLeft: "4px solid #ccc",
      paddingLeft: "16px",
      margin: "5% 20%",
      fontStyle: "italic",
      color: "#555",
      textAlign: 'justify'
    }}>
      {children}
    </blockquote>
  );
}

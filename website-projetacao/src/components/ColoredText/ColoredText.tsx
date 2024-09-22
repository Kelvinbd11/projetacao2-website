import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span<{ $hasText?: boolean }>`
  color: ${({ $hasText }) => ($hasText ? 'rgb(0, 56, 176)' : 'rgb(0, 56, 176)')}; /* Altere as cores conforme necessário */
`;

interface ColoredTextProps {
  children: React.ReactNode;
}

const ColoredText: React.FC<ColoredTextProps> = ({ children }) => {
  const hasText = typeof children === 'string' && children.trim().length > 0;

  return <StyledSpan $hasText={hasText}>{children}</StyledSpan>;
};

export default ColoredText;
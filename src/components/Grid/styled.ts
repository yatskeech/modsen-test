import styled from 'styled-components';

export interface StyledGridProps {
  $rows?: number;
  $columns?: number;
  $gap: number;
}

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-rows: ${({ $rows }) => ($rows ? `repeat(${$rows}, 1fr)` : 'auto')};
  grid-template-columns: ${({ $columns }) => ($columns ? `repeat(${$columns}, 1fr)` : 'auto')};
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '0')};
`;

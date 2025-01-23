import styled from 'styled-components';

export interface StyledGridProps {
  $rows: number;
  $columns: number;
  $gap: number;
}

export const StyledGrid = styled.div<StyledGridProps>`
  display: grid;
  grid-template-rows: repeat(${({ $rows }) => $rows}, 1fr);
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: ${({ $gap }) => ($gap ? `${$gap}px` : '0')};
`;

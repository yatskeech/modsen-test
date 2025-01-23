import { StyledGridProps } from './styled.ts';
import { ReactNode } from 'react';

export interface GridProps extends StyledGridProps {
  children?: ReactNode;
}

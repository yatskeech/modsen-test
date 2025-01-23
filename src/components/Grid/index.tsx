import { StyledGrid } from './styled.ts';
import { GridProps } from '@components/Grid/types.ts';

function Grid({ children, ...props }: GridProps) {
  return <StyledGrid {...props}>{children}</StyledGrid>;
}

export default Grid;

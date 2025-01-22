import { StyledContainer } from './styled.ts';
import { ContainerProps } from './types.ts';

function Container({ children }: ContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;

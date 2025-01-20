import { TitleProps } from './types.ts';
import { StyledTitle } from './styled.ts';

function Title({ children, ...props }: TitleProps) {
  return <StyledTitle {...props}>{children}</StyledTitle>;
}

export default Title;

import { StyledWrapper, StyledSubtitle, StyledTitle } from './styled.ts';
import { HeadingProps } from './types.ts';

function Heading({ className, title, subtitle }: HeadingProps) {
  return (
    <StyledWrapper className={className}>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledTitle>{title}</StyledTitle>
    </StyledWrapper>
  );
}

export default Heading;

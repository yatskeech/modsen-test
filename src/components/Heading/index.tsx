import { Wrapper, Subtitle, Title } from './styled.ts';
import { HeadingProps } from './types.ts';

function Heading({ className, title, subtitle }: HeadingProps) {
  return (
    <Wrapper className={className}>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
    </Wrapper>
  );
}

export default Heading;

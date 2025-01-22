import { StyledBookmark, StyledButton } from './styled.ts';
import { ButtonProps } from './types.ts';

function Button(props: ButtonProps) {
  return (
    <StyledButton {...props}>
      <StyledBookmark />
    </StyledButton>
  );
}

export default Button;

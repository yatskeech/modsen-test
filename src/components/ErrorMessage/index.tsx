import { StyledError, StyledStatus } from './styled.ts';
import { ErrorMessageProps } from './types.ts';

function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    <StyledError className={className}>
      <StyledStatus />
      {message}
    </StyledError>
  );
}

export default ErrorMessage;

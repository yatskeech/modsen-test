import { StyledInput } from './styled.ts';
import { InputProps } from './types.ts';

function Input({ className, ...props }: InputProps) {
  return (
    <div className={className}>
      <StyledInput {...props} />
    </div>
  );
}

export default Input;

import { StyledLoader } from './styled.ts';
import { LoaderProps } from './types.ts';

function Loader({ className }: LoaderProps) {
  return <StyledLoader className={className} />;
}

export default Loader;

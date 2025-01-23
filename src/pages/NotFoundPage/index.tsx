import { StyledStatus, StyledText } from '@pages/NotFoundPage/styled.ts';

function NotFoundPage() {
  return (
    <StyledText>
      <StyledStatus />
      Oops... Looks like this page doesn't exist
    </StyledText>
  );
}

export default NotFoundPage;

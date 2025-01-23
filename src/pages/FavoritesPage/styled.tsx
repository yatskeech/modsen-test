import styled from 'styled-components';
import Title from '@components/Title';
import Bookmark from '@assets/icons/bookmark.svg';
import Heading from '@components/Heading';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

interface StyledTitleProps {
  $accent?: boolean;
}

export const StyledTitle = styled(Title)<StyledTitleProps>`
  display: flex;
  gap: 16px;
  align-items: center;
  color: ${({ $accent, theme }) => ($accent ? theme.colors.accent : theme.colors.primary)};
`;

export const StyledBookmark = styled(Bookmark)`
  width: 56px;
  height: 56px;

  & path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 40px;
`;

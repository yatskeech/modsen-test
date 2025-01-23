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

export const StyledMessage = styled.p`
  align-self: center;
  text-align: center;
  opacity: 0.6;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

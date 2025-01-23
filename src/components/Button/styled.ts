import styled from 'styled-components';
import BookmarkIcon from '@assets/icons/bookmark.svg';

export interface StyledButtonProps {
  $isFavorite?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme, $isFavorite }) => ($isFavorite ? '#FBD7B24D' : theme.colors.extra)};
  cursor: pointer;
  transition: 0.3s;
`;

export const StyledBookmark = styled(BookmarkIcon)`
  width: 24px;
  height: 24px;

  & path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

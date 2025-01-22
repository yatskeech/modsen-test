import styled from 'styled-components';
import BookmarkIcon from '@assets/icons/bookmark.svg';

export const StyledButton = styled.button`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.extra};
  cursor: pointer;
`;

export const StyledBookmark = styled(BookmarkIcon)`
  width: 24px;
  height: 24px;

  & path {
    stroke: ${({ theme }) => theme.colors.accent};
  }
`;

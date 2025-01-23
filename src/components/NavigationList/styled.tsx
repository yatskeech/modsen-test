import styled from 'styled-components';
import { Link } from 'react-router';
import BookmarkIcon from '@assets/icons/bookmark.svg';
import HomeIcon from '@assets/icons/home.svg';

export const StyledList = styled.ul`
  display: flex;
  gap: 16px;
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  font-family: 'Inter', sans-serif;
  line-height: 1;
  text-decoration: none;
`;

export const StyledHomeIcon = styled(HomeIcon)`
  width: 24px;
  height: 24px;
`;

export const StyledBookmarkIcon = styled(BookmarkIcon)`
  width: 24px;
  height: 24px;
`;

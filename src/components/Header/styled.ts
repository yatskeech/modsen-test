import styled from 'styled-components';
import { Link } from 'react-router';
import MuseumLogo from '@assets/logos/museum-light.svg';
import HomeIcon from '@assets/icons/home.svg';
import BookmarkIcon from '@assets/icons/bookmark.svg';

export const StyledWrapper = styled.header`
  padding: 32px 0;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

export const StyledInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const StyledMuseumLogo = styled(MuseumLogo)`
  height: 63px;
`;

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

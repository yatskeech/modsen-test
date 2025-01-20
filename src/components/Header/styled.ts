import styled from 'styled-components';
import museumLight from '@assets/logos/museum-light.svg';
import { NavLink } from 'react-router';

export const HeaderWrapper = styled.header`
  padding: 32px 0;
  background: linear-gradient(90deg, #343333 38.05%, #484848 69.22%, #282828 98.98%);
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const MuseumLogo = styled.img.attrs(() => ({ src: museumLight, alt: 'Museum of Art' }))`
  height: 63px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  list-style-type: none;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: white;
  font-family: 'Inter', sans-serif;
  line-height: 1;
  text-decoration: none;
`;

export const Icon = styled.img.attrs(({ src }) => ({ src, alt: '' }))`
  width: 24px;
  height: 24px;
`;

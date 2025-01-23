import styled from 'styled-components';
import MuseumLogo from '@assets/logos/museum-light.svg';

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

export const StyledNav = styled.nav`
  @media (max-width: 600px) {
    display: none;
  }
`;

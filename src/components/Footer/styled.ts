import styled from 'styled-components';
import museumDark from '@assets/logos/museum-dark.svg';
import modsen from '@assets/logos/modsen.svg';

export const FooterWrapper = styled.footer`
  padding: 32px 0;
  background: white;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`;

export const MuseumLogo = styled.img.attrs(() => ({ src: museumDark, alt: 'Museum of Art' }))`
  height: 63px;
`;

export const ModsenLogo = styled.img.attrs(() => ({ src: modsen, alt: 'Modsen' }))`
  height: 59px;
`;

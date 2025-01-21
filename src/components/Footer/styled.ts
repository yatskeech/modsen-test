import styled from 'styled-components';
import MuseumLogo from '@assets/logos/museum-dark.svg';
import ModsenLogo from '@assets/logos/modsen.svg';

export const StyledWrapper = styled.footer`
  padding: 32px 0;
  background: white;
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

export const StyledModsenLogo = styled(ModsenLogo)`
  height: 59px;
`;

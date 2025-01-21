import Container from '@components/Container';
import { StyledWrapper, StyledInner, MuseumLogo, ModsenLogo } from './styled.ts';
import { Link } from 'react-router';

function Footer() {
  return (
    <StyledWrapper>
      <Container>
        <StyledInner>
          <Link to="/">
            <MuseumLogo />
          </Link>
          <Link to="https://www.modsen-software.com/">
            <ModsenLogo />
          </Link>
        </StyledInner>
      </Container>
    </StyledWrapper>
  );
}

export default Footer;

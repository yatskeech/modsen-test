import Container from '@components/Container';
import { FooterWrapper, Inner, MuseumLogo, ModsenLogo } from './styled.ts';
import { Link } from 'react-router';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Inner>
          <Link to="/">
            <MuseumLogo />
          </Link>
          <Link to="https://www.modsen-software.com/">
            <ModsenLogo />
          </Link>
        </Inner>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

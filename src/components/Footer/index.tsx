import Container from '@components/Container';
import { FooterWrapper, Inner, MuseumLogo, ModsenLogo } from './styled.ts';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Inner>
          <MuseumLogo />
          <ModsenLogo />
        </Inner>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;

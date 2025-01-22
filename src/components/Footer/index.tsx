import Container from '@components/Container';
import { StyledWrapper, StyledInner, StyledMuseumLogo, StyledModsenLogo } from './styled.ts';
import { Link } from 'react-router';

function Footer() {
  return (
    <StyledWrapper>
      <Container>
        <StyledInner>
          <Link to="/">
            <StyledMuseumLogo />
          </Link>
          <Link to="https://www.modsen-software.com/">
            <StyledModsenLogo />
          </Link>
        </StyledInner>
      </Container>
    </StyledWrapper>
  );
}

export default Footer;

import Container from '@components/Container';
import { StyledWrapper, StyledInner, StyledMuseumLogo, StyledNav } from './styled.ts';
import { Link } from 'react-router';
import Burger from '@components/Burger';
import NavigationList from '@components/NavigationList';

function Header() {
  return (
    <StyledWrapper>
      <Container>
        <StyledInner>
          <Link to="/">
            <StyledMuseumLogo />
          </Link>
          <StyledNav>
            <NavigationList />
          </StyledNav>
          <Burger />
        </StyledInner>
      </Container>
    </StyledWrapper>
  );
}

export default Header;

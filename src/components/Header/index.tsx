import Container from '@components/Container';
import {
  StyledWrapper,
  StyledInner,
  StyledList,
  StyledLink,
  StyledMuseumLogo,
  StyledHomeIcon,
  StyledBookmarkIcon,
} from './styled.ts';
import { Link } from 'react-router';

function Header() {
  return (
    <StyledWrapper>
      <Container>
        <StyledInner>
          <Link to="/">
            <StyledMuseumLogo />
          </Link>
          <nav>
            <StyledList>
              <li>
                <StyledLink to="/">
                  <StyledHomeIcon />
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/favorites">
                  <StyledBookmarkIcon />
                  Your favorites
                </StyledLink>
              </li>
            </StyledList>
          </nav>
        </StyledInner>
      </Container>
    </StyledWrapper>
  );
}

export default Header;

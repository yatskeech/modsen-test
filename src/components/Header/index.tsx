import Container from '@components/Container';
import home from '@assets/icons/home.svg';
import bookmark from '@assets/icons/bookmark.svg';
import { StyledWrapper, StyledInner, StyledList, MuseumLogo, StyledLink, Icon } from './styled.ts';
import { Link } from 'react-router';

function Header() {
  return (
    <StyledWrapper>
      <Container>
        <StyledInner>
          <Link to="/">
            <MuseumLogo />
          </Link>
          <nav>
            <StyledList>
              <li>
                <StyledLink to="/">
                  <Icon src={home} />
                  Home
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/favorites">
                  <Icon src={bookmark} />
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

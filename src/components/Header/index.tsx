import Container from '@components/Container';
import home from '@assets/icons/home.svg';
import bookmark from '@assets/icons/bookmark.svg';
import { HeaderWrapper, Inner, List, MuseumLogo, NavigationLink, Icon } from './styled.ts';
import { Link } from 'react-router';

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <Inner>
          <Link to="/">
            <MuseumLogo />
          </Link>
          <nav>
            <List>
              <li>
                <NavigationLink to="/">
                  <Icon src={home} />
                  Home
                </NavigationLink>
              </li>
              <li>
                <NavigationLink to="/favorites">
                  <Icon src={bookmark} />
                  Your favorites
                </NavigationLink>
              </li>
            </List>
          </nav>
        </Inner>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;

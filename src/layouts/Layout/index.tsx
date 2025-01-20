import { Outlet } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Container from '@components/Container';
import { Main, Wrapper } from './styled.ts';

function Layout() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default Layout;

import { Outlet } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Container from '@components/Container';
import { StyledWrapper, StyledMain } from './styled.ts';

function Layout() {
  return (
    <StyledWrapper>
      <Header />
      <StyledMain>
        <Container>
          <Outlet />
        </Container>
      </StyledMain>
      <Footer />
    </StyledWrapper>
  );
}

export default Layout;

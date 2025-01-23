import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

export const StyledMain = styled.main`
  padding: 120px 0;
  flex-grow: 1;

  @media (max-width: 600px) {
    padding: 60px 0;
  }
`;

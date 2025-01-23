import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from '@router';
import theme from '@theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled.ts';
import { ArtWorksContextProvider } from './context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ArtWorksContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ArtWorksContextProvider>
  </StrictMode>,
);

import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#393939',
    second: '#E0A449',
    accent: '#F17900',
    extra: '#F9F9F9',

    border: '#F0F1F1',
    background: '#FAFAFA',

    error: '#C83A3A',
  },
};

function Theme() {
  return <ThemeProvider></ThemeProvider>;
}


export default theme;

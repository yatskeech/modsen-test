import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      second: string;
      accent: string;
      extra: string;

      border: string;
      background: string;

      error: string;
    };
  }
}

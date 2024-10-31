import { Global, ThemeProvider } from '@emotion/react';
import MainPage from './page/MainPage';
import GlobalStyle from './styles/GlobalStyle.js';
import { theme } from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;

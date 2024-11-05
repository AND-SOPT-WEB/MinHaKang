import { Global, ThemeProvider } from '@emotion/react';
import Home from './page/Home';
import GlobalStyle from './styles/GlobalStyle.js';
import { theme } from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Home />
    </ThemeProvider>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import GlobalStyle from './styles/GlobalStyle.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </StrictMode>
);

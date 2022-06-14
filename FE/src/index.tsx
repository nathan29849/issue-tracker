import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './assets/style.css';

import App from './App';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const { worker } = require('./mocks/browsers');
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
);

import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

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

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </RecoilRoot>
    </ThemeProvider>
  </QueryClientProvider>,
);

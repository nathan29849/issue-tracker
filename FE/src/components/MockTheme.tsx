import { ThemeProvider } from '@emotion/react';
import React from 'react';

import theme from '@styles/theme';

export default function MockTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

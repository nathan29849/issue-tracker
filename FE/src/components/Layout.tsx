import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import Header from '@components/Header';

const containerStyle = css`
  width: 90rem;
  padding: 0 5rem;
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <div css={containerStyle}>
      <Header />
      <Outlet />
    </div>
  );
}

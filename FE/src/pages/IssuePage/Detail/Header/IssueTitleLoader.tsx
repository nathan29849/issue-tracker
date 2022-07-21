import { css } from '@emotion/react';
import React from 'react';

import { Loader } from '@components/Indicator';

const IssueTitleLoader = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2.5rem;
      transform: translate3d(0, 1rem, 0);
    `}
  >
    <Loader size={2} />
  </div>
);

export default IssueTitleLoader;

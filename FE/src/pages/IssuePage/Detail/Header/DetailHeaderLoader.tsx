import { css } from '@emotion/react';
import React from 'react';

import { Loader } from '@components/Indicator';

const DetailHeaderLoader = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    `}
  >
    <Loader size={3} />
  </div>
);

export default DetailHeaderLoader;

import { css } from '@emotion/react';
import React from 'react';

import { Loader } from '@components/Indicator';

export const CreateCommentFormLoader = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      margin-top: 5rem;
    `}
  >
    <Loader size={3} />
  </div>
);

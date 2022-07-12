import { css } from '@emotion/react';
import React from 'react';

import { Loader } from '@components/Indicator';

const DeleteIssueButtonLoader = () => (
  <div
    css={css`
      transform: translate3d(-2rem, 0, 0);
    `}
  >
    <Loader size={2} />
  </div>
);

export default DeleteIssueButtonLoader;

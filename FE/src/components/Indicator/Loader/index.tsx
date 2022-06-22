import { css } from '@emotion/react';
import React from 'react';

import * as S from './style';

import { alignPosXY, flexbox } from '@styles/mixin';
import theme from '@styles/theme';

export const Loader: React.FC<{ text?: string; size?: number }> = ({
  text,
  size = 1,
}) => (
  <div
    css={css`
      position: relative;
    `}
  >
    <div
      css={css`
        ${alignPosXY('fixed')};
        ${flexbox({ jc: 'center', ai: 'center' })}
        width: ${size}rem;
        height: ${size}rem;
        border: 0.5rem solid ${theme.color.titleActive};
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: ${S.spinAnimation} 800ms infinite;
      `}
    />
    {text && (
      <div
        css={css`
          ${alignPosXY('fixed')};
          font-size: 1.3rem;
          animation: ${S.shakeAnimation} 100ms infinite;
          color: ${theme.color.titleActive};
        `}
      >
        {text}
      </div>
    )}
  </div>
);

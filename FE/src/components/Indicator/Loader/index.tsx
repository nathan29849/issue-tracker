import { css } from '@emotion/react';
import React from 'react';

import * as S from './style';

import { alignPosXY } from '@styles/mixin';
import theme from '@styles/theme';

export const Loader: React.FC<{
  text?: string;
  size?: number;
  loaderColor?: string;
  textColor?: string;
}> = ({
  text,
  size = 1,
  loaderColor = theme.color.titleActive,
  textColor = theme.color.titleActive,
}) => (
  <div
    css={css`
      display: inline-block;
      position: relative;
    `}
  >
    <div
      css={css`
        ${alignPosXY()};
        width: ${size}rem;
        height: ${size}rem;
        border: 0.5rem solid ${loaderColor};
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-radius: 50%;
        animation: ${S.spinAnimation} 800ms infinite;
      `}
    />
    {text && (
      <div
        css={css`
          ${alignPosXY()};
          white-space: nowrap;
          font-size: 1.3rem;
          animation: ${S.shakeAnimation} 100ms infinite;
          color: ${textColor};
        `}
      >
        {text}
      </div>
    )}
  </div>
);

import { css, keyframes } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { alignPosXY, flexbox } from '@styles/mixin';
import theme from '@styles/theme';

const spin = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const shake = keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) rotate(3deg);
  }
  to {
    transform: translate3d(-50%, -50%, 0) rotate(-3deg);
  }
`;

function Callback() {
  const navigate = useNavigate();
  const { search } = window.location;

  return (
    <div
      css={css`
        height: 100vh;
        background-color: ${theme.color.background};
      `}
    >
      <div
        css={css`
          ${alignPosXY('fixed')};
          ${flexbox({ jc: 'center', ai: 'center' })}
          width: 15rem;
          height: 15rem;
          border: 0.5rem solid ${theme.color.titleActive};
          border-top-color: transparent;
          border-bottom-color: transparent;
          border-radius: 50%;
          animation: ${spin} 800ms infinite;
        `}
      />
      <div
        css={css`
          ${alignPosXY('fixed')};
          font-size: 1.5rem;
          animation: ${shake} 100ms infinite;
          color: ${theme.color.titleActive};
        `}
      >
        로그인 중입니다...
      </div>
    </div>
  );
}

export default Callback;

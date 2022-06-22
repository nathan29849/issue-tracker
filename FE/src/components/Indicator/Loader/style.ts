import { keyframes } from '@emotion/react';

export const spinAnimation = keyframes`
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

export const shakeAnimation = keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) rotate(3deg);
  }
  to {
    transform: translate3d(-50%, -50%, 0) rotate(-3deg);
  }
`;

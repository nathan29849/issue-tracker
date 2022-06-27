import { keyframes } from '@emotion/react';

export const moveDownAnimation = keyframes`
from {
  opacity: 0;
  transform: translate3d(0, -1rem, 0);
} 
to {
  opacity: 1;
  transform: translate3d(0, 0 , 0);
}
`;

export const moveUpAnimation = keyframes`
from {
  opacity: 1;
  transform: translate3d(0, -1rem, 0);
} 
to {
  opacity: 0;
  transform: translate3d(0, -1rem , 0);
}
`;

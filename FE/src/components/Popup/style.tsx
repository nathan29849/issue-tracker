import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { flexbox, typoMedium, typoSmall } from '@styles/mixin';

const moveDownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -1rem, 0);
  } 
  to {
    opacity: 1;
    transform: translate3d(0, 0 , 0);
  }
`;

export const FilterPopup = styled.div`
  //position: absolute;
  //top: 2rem;
  //right: 0;
  width: 15rem;
  min-height: 2.75rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  z-index: 10;
  overflow: hidden;
  box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.color.line};
  animation: ${moveDownAnimation} 300ms ease;

  header {
    ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'center' })}
    height: 48px;
    padding: 0 1rem;
    ${typoMedium(400)}
    border-radius: 1rem 1rem 0 0;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.titleActive};
  }

  .filter__item-wrapper {
    ${flexbox({ dir: 'row', jc: 'space-between', ai: 'center' })}
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.color.offWhite};
    border-top: 1px solid;
    border-color: ${({ theme }) => theme.color.line};
  }

  .filter__item {
    ${flexbox({ ai: 'center' })};
    color: ${({ theme }) => theme.color.body};
    height: 1.6875rem;
    ${typoSmall(400)};
  }

  .filter__name {
    ${typoSmall(400)};
    color: ${({ theme }) => theme.color.body};
  }
`;

import styled from '@emotion/styled';

import { flexbox, typoMedium, typoSmall } from '@styles/mixin';

export const FilterLayer = styled.div`
  position: relative;
  ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'center' })}
  cursor: pointer;

  .filter__label {
    color: ${({ theme }) => theme.color.label};
    ${typoSmall(700)}
    margin-right: 0.5rem;
  }
`;

export const ArrowDown = styled.div`
  width: 6px;
  height: 6px;
  border: 1.6px solid;
  border-color: ${({ theme }) => theme.color.label};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
`;

export const FilterPopup = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 15rem;
  min-height: 2.75rem;
  border-radius: 1rem;
  border: 1px solid;
  border-color: #d9dbe9;
  z-index: 10;
  overflow: hidden;

  header {
    ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'center' })}
    height: 48px;
    padding: 0 1rem;
    ${typoMedium(400)}
    border-radius: 1rem 1rem 0 0;
    background-color: ${({ theme }) => theme.color.background};
  }

  .filter__item-wrapper {
    ${flexbox({ dir: 'row', jc: 'space-between', ai: 'center' })}
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.color.offWhite};
    border-top: 1px solid;
    border-color: ${({ theme }) => theme.color.line};
  }

  .filter__item {
    display: flex;
  }
`;

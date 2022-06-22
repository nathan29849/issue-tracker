import styled from '@emotion/styled';

import { flexbox, typoSmall } from '@styles/mixin';

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

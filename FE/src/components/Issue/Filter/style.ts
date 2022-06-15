import styled from '@emotion/styled';

import { typoSmall } from '@styles/mixin';

export const FilterLayer = styled.div`
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.color.label};
    ${typoSmall(700)}
    margin-right: 0.5rem;
  }
`;

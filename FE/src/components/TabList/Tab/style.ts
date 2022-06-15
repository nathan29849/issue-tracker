import styled from '@emotion/styled';

import { flexbox, typoSmall } from '@styles/mixin';

export const Icon = styled.span``;
export const Title = styled.h2``;
export const Count = styled.span``;

export const TabLayer = styled.button`
  width: 10rem;
  padding: 0.375rem 0;
  color: ${({ theme }) => theme.color.label};
  ${flexbox({ jc: 'center' })};
  ${typoSmall(400)}

  ${Icon}, ${Title} {
    margin-right: 0.5rem;
  }

  ${Title} {
    font-weight: 700;
  }
`;

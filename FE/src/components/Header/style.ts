import styled from '@emotion/styled';

import { flexbox } from '@styles/mixin';

export const Logo = styled.h1`
  cursor: pointer;
`;

export const HeaderLayer = styled.header`
  ${flexbox({ jc: 'space-between', ai: 'center' })}
  z-index: ${({ theme }) => theme.zIndex.header}
  height: auto;
  padding: 1.5625rem 0;
  margin-bottom: 2rem;
`;

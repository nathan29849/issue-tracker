import styled from '@emotion/styled';

import { flexbox } from '@styles/mixin';

export const Temp = styled.div`
  border: 1px solid black;
  width: 2.75rem;
  height: 2.75rem;
`;

export const Logo = styled.h1`
  cursor: pointer;
`;

export const UserAvatar = styled.div``;

export const HeaderLayer = styled.header`
  ${flexbox({ jc: 'space-between', ai: 'center' })}
`;

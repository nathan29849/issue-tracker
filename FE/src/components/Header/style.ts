import styled from '@emotion/styled';

import { flexbox } from '@styles/mixin';

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Logo = styled.h1`
  cursor: pointer;
`;

export const UserAvatar = styled.button`
  border: 2px solid ${({ theme }) => theme.color.body};
  border-radius: 50%;
  overflow: hidden;
  width: 2.75rem;
  height: 2.75rem;
  transition: all 500ms;

  &:hover {
    border-color: ${({ theme }) => theme.color.blue};
  }
`;

export const HeaderLayer = styled.header`
  ${flexbox({ jc: 'space-between', ai: 'center' })}
  z-index: ${({ theme }) => theme.zIndex.header}
  height: auto;
  padding: 1.5625rem 0;
  margin-bottom: 2rem;
`;

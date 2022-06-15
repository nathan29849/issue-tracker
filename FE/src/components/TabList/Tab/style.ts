import styled from '@emotion/styled';

import { flexbox, typoSmall } from '@styles/mixin';

export const Icon = styled.span``;
export const Title = styled.h2``;
export const Count = styled.span``;

export const TabLayer = styled.button<{ isActive?: boolean }>`
  width: 10rem;
  border-left: 1px solid transparent;
  height: 100%;

  padding: 0.375rem 0;
  color: ${({ theme }) => theme.color.label};
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.color.line : theme.color.background};
  ${flexbox({ jc: 'center' })};
  ${typoSmall(400)}

  ${Icon}, ${Title} {
    margin-right: 0.5rem;
  }

  ${Title} {
    font-weight: 700;
  }

  & + & {
    border-left-color: ${({ theme }) => theme.color.line};
  }

  &:hover {
    background-color: ${({ theme, isActive }) =>
      !isActive && theme.color.inputBackground};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.line};
  }
`;

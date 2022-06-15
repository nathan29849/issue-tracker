import styled from '@emotion/styled';

import { flexbox } from '@styles/mixin';

// 버튼
// 색상에 따라 Normal, Outlined
// 크기에 따라 Large, Medium, Small
// 종류에 따라 Button, TextButton

export const Button = styled.button<{
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
}>`
  ${flexbox({ jc: 'center', ai: 'center' })}
  font-weight: 700;
  padding: 0 24px;

  min-width: ${({ size }) =>
    size === 'lg' ? 340 : size === 'md' ? 240 : 120}px;
  height: ${({ size }) => (size === 'lg' ? 64 : size === 'md' ? 56 : 40)}px;
  border-radius: ${({ size }) => (size === 'lg' || size === 'md' ? 20 : 11)}px;

  background-color: ${({ theme, outlined }) =>
    outlined ? theme.color.offWhite : theme.color.blue};
  color: ${({ theme, outlined }) =>
    outlined ? theme.color.blue : theme.color.offWhite};
  border: 2px solid
    ${({ theme, outlined }) => (outlined ? theme.color.blue : 'transparent')};

  &:hover {
    background-color: ${({ theme, outlined }) =>
      outlined ? theme.color.offWhite : theme.color.darkBlue};
    color: ${({ theme, outlined }) =>
      outlined ? theme.color.darkBlue : theme.color.offWhite};
    border-color: ${({ theme, outlined }) =>
      outlined ? theme.color.darkBlue : theme.color.darkBlue};
  }

  &:focus {
    background-color: ${({ theme, outlined }) =>
      outlined ? theme.color.offWhite : theme.color.blue};
    color: ${({ theme, outlined }) =>
      outlined ? theme.color.blue : theme.color.offWhite};
    border-color: ${({ theme }) => theme.color.lightBlue};
    border-width: 4px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  i {
    margin-right: 4px;
  }
`;

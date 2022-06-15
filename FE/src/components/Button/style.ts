import styled from '@emotion/styled';

import { inlineFlexbox } from '@styles/mixin';

// 버튼
// 색상에 따라 Normal, Outlined
// 크기에 따라 Large, Medium, Small
// 종류에 따라 Button, TextButton

export const Button = styled.button<{
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
}>`
  ${inlineFlexbox({ jc: 'center', ai: 'center' })}
  font-weight: 700;
  padding: 0 1.5rem;

  min-width: ${({ size }) =>
    size === 'lg' ? 21.25 : size === 'md' ? 15 : 7.5}rem;

  height: ${({ size }) => (size === 'lg' ? 4 : size === 'md' ? 3.5 : 2.5)}rem;
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
    padding: 0 1.375rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  i {
    margin-right: 4px;
  }
`;

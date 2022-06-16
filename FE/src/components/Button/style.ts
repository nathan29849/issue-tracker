import styled from '@emotion/styled';

import {
  inlineFlexbox,
  typoXSmall,
  typoMedium,
  typoSmall,
  simpleOpacityTransition,
} from '@styles/mixin';

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
  ${({ size }) => (size === 'sm' ? typoXSmall(700) : typoMedium(700))};

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
    pointer-events: none;
  }

  i {
    margin-right: 0.25rem;
  }
`;

export const TextButton = styled.button<{ size: 'sm' | 'md' }>`
  background-color: inherit;
  color: ${({ theme }) => theme.color.label};

  ${({ size }) => (size === 'sm' ? typoXSmall(700) : typoSmall(700))}

  &:hover {
    color: ${({ theme }) => theme.color.body};
  }

  &:active {
    color: ${({ theme }) => theme.color.titleActive};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.body};
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  i {
    margin-right: 0.25rem;
  }
`;

export const LoginButton = styled.button<{
  bgColor?: string;
  textColor?: string;
}>`
  ${inlineFlexbox({ jc: 'center', ai: 'center' })}
  ${typoMedium(700)};
  ${simpleOpacityTransition({
    delay: 300,
    hoverOpacity: 0.8,
    activeOpacity: 1,
  })}
  padding: 0 1.5rem;
  min-width: 21.25rem;
  height: 4rem;
  border-radius: 20px;
  color: ${({ textColor }) => textColor};
  background-color: ${({ bgColor }) => bgColor};

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

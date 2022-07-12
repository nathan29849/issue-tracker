import styled from '@emotion/styled';

import {
  inlineFlexbox,
  typoXSmall,
  typoMedium,
  typoSmall,
  simpleOpacityTransition,
  flexbox,
} from '@styles/mixin';

// 버튼
// 색상에 따라 Normal, Outlined
// 크기에 따라 Large, Medium, Small
// 종류에 따라 Button, TextButton
const WIDTH = {
  LG: 21.25,
  MD: 15,
  SM: 7.5,
};

const HEIGHT = {
  LG: 4,
  MD: 3.5,
  SM: 2.5,
};

export const Button = styled.button<{
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
}>`
  ${inlineFlexbox({ jc: 'center', ai: 'center' })}
  font-weight: 700;
  padding: 0 1.5rem;
  cursor: pointer;

  min-width: ${({ size }) =>
    size === 'lg' ? WIDTH.LG : size === 'md' ? WIDTH.MD : WIDTH.SM}rem;

  height: ${({ size }) =>
    size === 'lg' ? HEIGHT.LG : size === 'md' ? HEIGHT.MD : HEIGHT.SM}rem;
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
  ${flexbox({ jc: 'center', ai: 'center' })}
  background-color: inherit;
  color: ${({ color }) => color};
  cursor: pointer;
  ${simpleOpacityTransition({
    hoverOpacity: 0.8,
    activeOpacity: 0.6,
  })}

  ${({ size }) => (size === 'sm' ? typoXSmall(700) : typoSmall(700))}

  &:disabled {
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
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const LoaderWrapper = styled.div<{ size?: 'sm' | 'md' | 'lg' }>`
  ${flexbox({ jc: 'center', ai: 'center' })}
  min-width: ${({ size }) =>
    size === 'lg' ? WIDTH.LG : size === 'md' ? WIDTH.MD : WIDTH.SM}rem;
  height: ${({ size }) =>
    size === 'lg' ? HEIGHT.LG : size === 'md' ? HEIGHT.MD : HEIGHT.SM}rem;
`;

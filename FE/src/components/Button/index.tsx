import React from 'react';

import * as S from './style';

import { OverridableProps } from '@utils/types';

type ButtonProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    children: React.ReactNode;
    outlined?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }
>;

type TextButtonProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    children: React.ReactNode;
    size?: 'sm' | 'md';
  }
>;

type LoginButtonProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    children: React.ReactNode;
    textColor?: string;
    bgColor?: string;
  }
>;

export const Button = <T extends React.ElementType = 'button'>({
  children,
  outlined = false,
  size = 'sm',
  ...restProps
}: ButtonProps<T>) => (
  <S.Button type="button" outlined={outlined} size={size} {...restProps}>
    <span>{children}</span>
  </S.Button>
);

export const TextButton = <T extends React.ElementType = 'button'>({
  children,
  size = 'sm',
  ...restProps
}: TextButtonProps<T>) => (
  <S.TextButton size={size} {...restProps}>
    {children}
  </S.TextButton>
);

export const LoginButton = <T extends React.ElementType = 'button'>({
  children,
  bgColor = '#000',
  textColor = '#fff',
  ...restProps
}: LoginButtonProps<T>) => (
  <S.LoginButton bgColor={bgColor} textColor={textColor} {...restProps}>
    {children}
  </S.LoginButton>
);

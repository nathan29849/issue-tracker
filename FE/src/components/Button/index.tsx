import React, { memo } from 'react';

import * as S from './style';

import { Loader } from '@components/Indicator';
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

const TButton = <T extends React.ElementType = 'button'>({
  children,
  outlined = false,
  size = 'sm',
  loading,
  as,
  ...restProps
}: ButtonProps<T>) =>
  loading ? (
    <S.LoaderWrapper size={size}>
      <Loader size={3} />
    </S.LoaderWrapper>
  ) : (
    <S.Button
      as={as ?? 'button'}
      type="button"
      outlined={outlined}
      size={size}
      {...restProps}
    >
      <span>{children}</span>
    </S.Button>
  );

const TTextButton = <T extends React.ElementType = 'button'>({
  children,
  size = 'sm',
  as,
  ...restProps
}: TextButtonProps<T>) => (
  <S.TextButton as={as ?? 'button'} size={size} {...restProps}>
    {children}
  </S.TextButton>
);

export const LoginButton = <T extends React.ElementType = 'button'>({
  children,
  bgColor = '#000',
  textColor = '#fff',
  as,
  ...restProps
}: LoginButtonProps<T>) => (
  <S.LoginButton
    as={as ?? 'button'}
    bgColor={bgColor}
    textColor={textColor}
    {...restProps}
  >
    {children}
  </S.LoginButton>
);

export const Button = memo(TButton);
export const TextButton = memo(TTextButton);

import React from 'react';

import * as S from './style';

export const Button: React.FC<
  {
    children: React.ReactNode;
    outlined?: boolean;
    size?: 'sm' | 'md' | 'lg';
  } & React.ComponentPropsWithoutRef<'button'>
> = ({ children, outlined = false, size = 'sm', ...rest }) => (
  <S.Button type="button" outlined={outlined} size={size} {...rest}>
    <span>{children}</span>
  </S.Button>
);

export const TextButton: React.FC<
  {
    children: React.ReactNode;
    size?: 'sm' | 'md';
  } & React.ComponentPropsWithoutRef<'button'>
> = ({ children, size = 'sm', ...rest }) => (
  <S.TextButton size={size} {...rest}>
    {children}
  </S.TextButton>
);

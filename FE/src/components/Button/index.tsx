import React from 'react';

import * as S from './style';

export const Button: React.FC<{
  children: React.ReactNode;
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}> = ({ children, outlined = false, size = 'sm', disabled = false }) => (
  <S.Button type="button" disabled={disabled} outlined={outlined} size={size}>
    <span>{children}</span>
  </S.Button>
);

export const TextButton: React.FC<{
  children: React.ReactNode;
  size?: 'sm' | 'md';
  disabled?: boolean;
}> = ({ children, size = 'sm', disabled = false }) => (
  <S.TextButton size={size} disabled={disabled}>
    {children}
  </S.TextButton>
);

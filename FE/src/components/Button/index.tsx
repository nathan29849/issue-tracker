import React from 'react';

import * as S from './style';

export const Button: React.FC<{
  children: React.ReactNode;
  outlined?: boolean;
  size?: 'sm' | 'md' | 'lg';
}> = ({ children, outlined = false, size = 'sm' }) => (
  <S.Button type="button" outlined={outlined} size={size}>
    <span>{children}</span>
  </S.Button>
);

import React from 'react';

import * as S from './style';

import { CombineElementProps } from '@utils/types';

type InputProps<T extends React.ElementType> = CombineElementProps<
  T,
  {
    width: number;
    placeholder: string;
    size?: 'sm' | 'md';
    value?: string;
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
  }
>;

export const Input = <T extends React.ElementType = 'input'>({
  width,
  placeholder,
  size = 'sm',
  value = undefined,
  disabled = false,
  error = false,
  success = false,
  ...restProps
}: InputProps<T>) => (
  <S.InputLayer
    width={width}
    size={size}
    disabled={disabled}
    active={!!value?.length}
    error={error}
    success={success}
  >
    <S.Input value={value} disabled={disabled} {...restProps} />
    <S.PlaceHolder>{placeholder}</S.PlaceHolder>
  </S.InputLayer>
);

import React, { useId } from 'react';

import * as S from './style';

import I from '@components/Icons';
import { OverridableProps } from '@utils/types';

type InputProps<T extends React.ElementType> = OverridableProps<
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

type TextareaProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    width: number;
    placeholder?: string;
    value: string;
  }
>;

export const Input = <T extends React.ElementType = 'input'>({
  width,
  placeholder,
  size = 'sm',
  value = '',
  disabled = false,
  error = false,
  success = false,
  ...restProps
}: InputProps<T>) => (
  <S.InputLayer
    width={width}
    size={size}
    disabled={disabled}
    active={!!value.length}
    error={error}
    success={success}
  >
    <S.Input value={value} disabled={disabled} {...restProps} />
    <S.PlaceHolder>{placeholder}</S.PlaceHolder>
  </S.InputLayer>
);

export const Textarea = <T extends React.ElementType = 'input'>({
  width,
  placeholder,
  value = '',
  ...restProps
}: TextareaProps<T>) => {
  const id = useId();

  return (
    <S.TextareaLayer width={width} size="md" active={!!value.length}>
      <S.Textarea as="textarea" value={value} {...restProps} />

      {/* TODO: 파일 첨부하기 부분을 Props로 */}
      {/* TODO: 이미지만 업로드받기 */}
      {/* TODO: 2초간 보여줄 문자열 */}

      <S.PlaceHolder>{placeholder || '코멘트를 입력하세요'}</S.PlaceHolder>
      <S.WordCount>띄어쓰기 </S.WordCount>
      <S.Footer>
        <S.Label htmlFor={id}>
          {undefined || (
            <>
              <I.Clip />
              <span>파일 첨부하기</span>
            </>
          )}
        </S.Label>
        <input id={id} type="file" accept="image/*" hidden />
      </S.Footer>
    </S.TextareaLayer>
  );
};

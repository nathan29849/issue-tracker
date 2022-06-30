import React, { memo, SetStateAction, useEffect, useId, useRef } from 'react';

import * as S from './style';

import I from '@components/Icons';
import { Loader } from '@components/Indicator';
import { useFileUpload } from '@hooks/useFileUpload';
import { OverridableProps } from '@utils/types';

type InputProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    width: number | string;
    placeholder: string;
    value: string;
    size?: 'sm' | 'md';
    disabled?: boolean;
    error?: boolean;
    success?: boolean;
  }
>;

type TextareaProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    width: number | string;
    placeholder?: string;
    value: string;
    setValue: React.Dispatch<SetStateAction<string>>;
  }
>;

export const TInput = <T extends React.ElementType = 'input'>({
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

export const TTextarea = <T extends React.ElementType = 'input'>({
  width,
  placeholder,
  value = '',
  setValue,
  ...restProps
}: TextareaProps<T>) => {
  const textareaRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const allowedFileTypes = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif',
  ];
  const { isLoading, uploadFromInput } = useFileUpload(allowedFileTypes);

  const handleChangeFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const imageInfoArr = await uploadFromInput(e);

    if (!imageInfoArr || !textareaRef.current) {
      return;
    }

    const cursorIndex = textareaRef.current.selectionStart || 0;
    const beforeCursorValue = value.slice(0, cursorIndex);
    const afterCursorValue = value.slice(cursorIndex);

    const targetString = imageInfoArr
      .map(({ filename, imageUrl }) => `![${filename}](${imageUrl})`)
      .join('\n');

    setValue(`${beforeCursorValue}${targetString}${afterCursorValue}`);
  };

  return (
    <S.TextareaLayer width={width} size="md" active={!!value.length}>
      <S.Textarea
        as="textarea"
        ref={textareaRef}
        value={value}
        {...restProps}
      />

      {/* TODO: 2초간 보여줄 문자열 */}

      <S.PlaceHolder>{placeholder || '코멘트를 입력하세요'}</S.PlaceHolder>
      <S.WordCount>띄어쓰기 </S.WordCount>
      <S.Footer>
        {isLoading ? (
          <S.FileUploadLoader>
            <Loader size={1.5} />
            <S.UploadMessage>업로드중입니다...</S.UploadMessage>
          </S.FileUploadLoader>
        ) : (
          <S.Label htmlFor={id}>
            <I.Clip />
            <span>파일 첨부하기</span>
          </S.Label>
        )}
        <input
          id={id}
          type="file"
          accept={allowedFileTypes.join(', ')}
          multiple
          onChange={handleChangeFileInput}
          hidden
        />
      </S.Footer>
    </S.TextareaLayer>
  );
};

export const Textarea = memo(TTextarea);
export const Input = memo(TInput);

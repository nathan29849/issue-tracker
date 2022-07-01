import React, { memo, SetStateAction, useId, useRef, useState } from 'react';

import * as S from './style';

import I from '@components/Icons';
import { Loader } from '@components/Indicator';
import { useDeferredVisibleUpdate } from '@hooks/useDeferredVisibleUpdate';
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
  const id = useId();
  const textareaRef = useRef<HTMLInputElement>(null);
  const allowedFileTypes = [
    'image/jpg',
    'image/jpeg',
    'image/png',
    'image/gif',
  ];
  const { isLoading, uploadFiles } = useFileUpload(allowedFileTypes);
  const [isDragEnter, setIsDragEnter] = useState(false);

  // value 값이 변할 때마다 effect 발생
  // 1. isElementVisible가 즉시 false가 된다.
  // 2. 250ms 타이머가 설정된다.
  // 3. 타이머가 끝나면 isElementVisible이 1500ms동안 true가 되었다가 false로 변한다.
  const { isElementVisible } = useDeferredVisibleUpdate([value], 250, 1500);

  const handleUploadFiles = async (files: FileList | null) => {
    const imageInfoArr = await uploadFiles(files);

    if (!imageInfoArr || !imageInfoArr.length || !textareaRef.current) {
      return;
    }

    // 업로드한 파일마다 ![이름](url)형태로 커서에 삽입하기.
    const cursorIndex = textareaRef.current.selectionStart || 0;
    const beforeCursorValue = value.slice(0, cursorIndex);
    const afterCursorValue = value.slice(cursorIndex);

    const targetString = imageInfoArr
      .map(({ filename, imageUrl }) => `![${filename}](${imageUrl})`)
      .join('\n');

    setValue(`${beforeCursorValue}${targetString}${afterCursorValue}`);
  };

  const handleDropFileInTextarea = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsDragEnter(false);
    handleUploadFiles(e.dataTransfer.files);
  };

  const handleChangeFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleUploadFiles(e.target.files);
    e.target.value = '';
  };

  return (
    <S.TextareaLayer
      width={width}
      size="md"
      active={!!value.length}
      dragEnter={isDragEnter}
    >
      <S.Textarea
        as="textarea"
        ref={textareaRef}
        value={value}
        onDrop={handleDropFileInTextarea}
        onDragEnter={() => setIsDragEnter(true)}
        onDragLeave={() => setIsDragEnter(false)}
        {...restProps}
      />

      {/* TODO: 2초간 보여줄 문자열 */}

      <S.PlaceHolder>{placeholder || '코멘트를 입력하세요'}</S.PlaceHolder>
      {isElementVisible && (
        <S.WordCount>
          띄어쓰기 포함 <span>{value.length}</span>자
        </S.WordCount>
      )}

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

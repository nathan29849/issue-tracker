import React, { memo, useEffect, useRef } from 'react';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Input } from '@components/Input';
import { useInput } from '@hooks/useInput';

interface Props {
  initialValue: string;
  handleClickEditCompleteButton: (title: string) => React.MouseEventHandler;
  handleClickEditCancelButton: React.MouseEventHandler;
}

const IssueTitleInput: React.FC<Props> = ({
  initialValue,
  handleClickEditCompleteButton,
  handleClickEditCancelButton,
}) => {
  const issueTitleInput = useInput(initialValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <Input
        ref={inputRef}
        placeholder="제목"
        width={940}
        {...issueTitleInput}
      />
      <S.Buttons>
        <Button outlined onClick={handleClickEditCancelButton}>
          <I.XMark />
          편집 취소
        </Button>
        <Button onClick={handleClickEditCompleteButton(issueTitleInput.value)}>
          <I.Edit />
          편집 완료
        </Button>
      </S.Buttons>
    </>
  );
};

export default memo(IssueTitleInput);

import React, { memo } from 'react';

import * as S from './style';

import { Button, TextButton } from '@components/Button';
import I from '@components/Icons';
import { ButtonClickEventHandler } from '@type/eventHandler';

interface Props {
  handleClickSubmitButton: ButtonClickEventHandler;
  handleClickCancelButton: ButtonClickEventHandler;
  isLoading: boolean;
  submitButtonDisabled: boolean;
}

const NewIssueMainButtons: React.FC<Props> = ({
  handleClickSubmitButton,
  handleClickCancelButton,
  isLoading,
  submitButtonDisabled,
}) => (
  <S.Buttons>
    <TextButton
      size="md"
      type="button"
      onClick={handleClickCancelButton}
      disabled={isLoading}
    >
      <I.XMark />
      작성 취소
    </TextButton>

    <Button
      size="md"
      type="button"
      onClick={handleClickSubmitButton}
      disabled={!submitButtonDisabled}
      loading={isLoading}
    >
      완료
    </Button>
  </S.Buttons>
);

export default memo(NewIssueMainButtons);

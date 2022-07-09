import React, { memo, useState } from 'react';

import * as S from './style';

import { TextButton } from '@components/Button';
import I from '@components/Icons';
import Modal from '@components/Modal';
import theme from '@styles/theme';
import { ButtonClickEventHandler } from '@type/eventHandler';

interface Props {
  onClick: ButtonClickEventHandler;
}

const DeleteIssueButton: React.FC<Props> = ({ onClick }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClickTextButton = () => setIsModalVisible(true);
  const handleClickCancelButton = () => setIsModalVisible(false);

  return (
    <S.DeleteIssueButtonLayer>
      <TextButton
        size="sm"
        color={theme.color.red}
        onClick={handleClickTextButton}
      >
        <I.Trash />
        이슈 삭제
      </TextButton>
      {isModalVisible && (
        <Modal
          title="이슈를 삭제합니다"
          handleCancelClick={handleClickCancelButton}
          handleSubmit={onClick}
        />
      )}
    </S.DeleteIssueButtonLayer>
  );
};

export default memo(DeleteIssueButton);

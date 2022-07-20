import React, { memo, useState } from 'react';

import * as S from './style';

import { TextButton } from '@components/Button';
import I from '@components/Icons';
import Modal from '@components/Modal';
import DeleteIssueButtonLoader from '@pages/IssuePage/Detail/Main/DeleteIssueButtonLoader';
import theme from '@styles/theme';

interface IDeleteIssueButtonProps {
  requestDeleteIssue: () => void;
  deleteIssueLoading: boolean;
}

const DeleteIssueButton: React.FC<IDeleteIssueButtonProps> = ({
  requestDeleteIssue,
  deleteIssueLoading,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClickTextButton = () => setIsModalVisible(true);
  const handleClickCancelButton = () => setIsModalVisible(false);
  const handleClickOkButton = () => {
    setIsModalVisible(false);
    requestDeleteIssue();
  };

  return (
    <S.DeleteIssueButtonLayer>
      {deleteIssueLoading ? (
        <DeleteIssueButtonLoader />
      ) : (
        <TextButton
          size="sm"
          color={theme.color.red}
          onClick={handleClickTextButton}
        >
          <I.Trash />
          이슈 삭제
        </TextButton>
      )}
      {isModalVisible ? (
        <Modal
          title="이슈를 삭제합니다"
          handleCancelClick={handleClickCancelButton}
          handleSubmit={handleClickOkButton}
        />
      ) : undefined}
    </S.DeleteIssueButtonLayer>
  );
};

export default memo(DeleteIssueButton);

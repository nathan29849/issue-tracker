import React, { memo } from 'react';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { IIssueStatus } from '@interfaces/IIssue';
import IssueTitleLoader from '@pages/IssuePage/Detail/Header/IssueTitleLoader';
import { ButtonClickEventHandler } from 'src/type/eventHandler';

interface IIssueTitleProps {
  isLoading: boolean;
  title: string;
  issueNumber: string;
  issueStatus: IIssueStatus;
  handleClickEditTitleButton: ButtonClickEventHandler;
  handleClickCloseIssueButton: ButtonClickEventHandler;
  handleClickReopenIssueButton: ButtonClickEventHandler;
}

const IssueTitle: React.FC<IIssueTitleProps> = ({
  isLoading,
  title,
  issueNumber,
  issueStatus,
  handleClickEditTitleButton,
  handleClickCloseIssueButton,
  handleClickReopenIssueButton,
}) => {
  const { status } = issueStatus;
  const isIssueClosed = status === 'CLOSED';

  return isLoading ? (
    <IssueTitleLoader />
  ) : (
    <>
      <S.Title>
        <S.IssueTitle>{title}</S.IssueTitle>
        <S.IssueNumber>#{issueNumber}</S.IssueNumber>
      </S.Title>
      <S.Buttons>
        <Button outlined onClick={handleClickEditTitleButton}>
          <I.Edit />
          제목 편집
        </Button>
        {isIssueClosed ? (
          <Button outlined onClick={handleClickReopenIssueButton}>
            <I.Circle.Alert />
            다시 열기
          </Button>
        ) : (
          <Button outlined onClick={handleClickCloseIssueButton}>
            <I.Bucket />
            이슈 닫기
          </Button>
        )}
      </S.Buttons>
    </>
  );
};

export default memo(IssueTitle);

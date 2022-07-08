import React, { memo } from 'react';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';

interface Props {
  title: string;
  issueNumber: string;
  issueStatus: 'OPEN' | 'CLOSED' | 'REOPEN';
  handleClickEditTitleButton: React.MouseEventHandler;
  handleClickCloseIssueButton: React.MouseEventHandler;
  handleClickReopenIssueButton: React.MouseEventHandler;
}

const IssueTitle: React.FC<Props> = ({
  title,
  issueNumber,
  issueStatus,
  handleClickEditTitleButton,
  handleClickCloseIssueButton,
  handleClickReopenIssueButton,
}) => {
  const isIssueClosed = issueStatus === 'CLOSED';

  return (
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

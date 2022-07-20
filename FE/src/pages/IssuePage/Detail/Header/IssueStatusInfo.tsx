import React, { memo, useMemo } from 'react';

import * as S from './style';

import { IssueLabel } from '@components/Label';
import { IIssueStatus } from '@interfaces/IIssue';
import { IssueStatusType } from '@type/issue';
import { getTimeDiffFromNow } from '@utils/time';

interface IIssueStatusInfoProps {
  issueStatus: IIssueStatus;
  updatedAt: string;
}

const getPredicateByIssueStatus = (status: IssueStatusType) => {
  switch (status) {
    case 'OPEN':
      return '열렸습니다';
    case 'REOPEN':
      return '다시 열렸습니다';
    case 'CLOSED':
      return '닫혔습니다';
    default:
      throw new Error(`Unknown IssueStatus, ${status}`);
  }
};

const IssueStatusInfo: React.FC<IIssueStatusInfoProps> = ({
  issueStatus,
  updatedAt,
}) => {
  const { editor, status } = issueStatus;
  const isIssueClosed = status === 'CLOSED';
  const timeDiff = useMemo(
    () => getTimeDiffFromNow(new Date(updatedAt)),
    [updatedAt],
  );

  const predicate = getPredicateByIssueStatus(status);

  return (
    <>
      <S.IssueStatus>
        <IssueLabel closed={isIssueClosed} />
      </S.IssueStatus>
      <S.IssueStatusDetail>
        이 이슈가 {timeDiff}에 {editor.userId}에 의해 {predicate}
      </S.IssueStatusDetail>
    </>
  );
};

export default memo(IssueStatusInfo);

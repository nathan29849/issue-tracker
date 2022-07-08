import React, { memo, useMemo } from 'react';

import * as S from './style';

import { IssueLabel } from '@components/Label';
import { IssueStatusType } from '@type/issue';
import { getTimeDiffFromNow } from '@utils/time';

interface Props {
  issueStatus: IssueStatusType;
  updatedAt: string;
}

const getPredicateByIssueStatus = (issueStatus: IssueStatusType) => {
  switch (issueStatus) {
    case 'OPEN':
      return '열렸습니다';
    case 'REOPEN':
      return '다시 열렸습니다';
    case 'CLOSED':
      return '닫혔습니다';
    default:
      throw new Error(`Unknown IssueStatus, ${issueStatus}`);
  }
};

const IssueStatusInfo: React.FC<Props> = ({ issueStatus, updatedAt }) => {
  const isIssueClosed = issueStatus === 'CLOSED';
  const timeDiff = useMemo(
    () => getTimeDiffFromNow(new Date(updatedAt)),
    [updatedAt],
  );

  const predicate = getPredicateByIssueStatus(issueStatus);

  return (
    <>
      <S.IssueStatus>
        <IssueLabel closed={isIssueClosed} />
      </S.IssueStatus>
      <S.IssueStatusDetail>
        이 이슈가 {timeDiff}에 X에 의해 {predicate}
      </S.IssueStatusDetail>
    </>
  );
};

export default memo(IssueStatusInfo);

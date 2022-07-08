import React, { memo, useMemo } from 'react';

import * as S from './style';

import { IssueLabel } from '@components/Label';
import { IssueStatusType } from '@type/issue';
import { getTimeDiffFromNow } from '@utils/time';

interface Props {
  issueStatus: IssueStatusType;
  updatedAt: string;
}

const IssueStatusInfo: React.FC<Props> = ({ issueStatus, updatedAt }) => {
  const isIssueClosed = issueStatus === 'CLOSED';
  const timeDiff = useMemo(
    () => getTimeDiffFromNow(new Date(updatedAt)),
    [updatedAt],
  );

  return (
    <>
      <S.IssueStatus>
        <IssueLabel closed={isIssueClosed} />
      </S.IssueStatus>
      <S.IssueStatusDetail>
        이 이슈가 {timeDiff}에 X에 의해 열렸습니다
      </S.IssueStatusDetail>
    </>
  );
};

export default memo(IssueStatusInfo);

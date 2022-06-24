import React from 'react';

import * as S from './style';

import { DetailHeader, NewHeader } from '@pages/IssuePage/Detail/Header';
import { NewMain } from '@pages/IssuePage/Detail/Main';

export default function IssueDetailPage({ newIssue = false }) {
  return (
    <S.IssueContainer>
      <S.IssueHeader>
        {newIssue ? <NewHeader /> : <DetailHeader title="이슈 제목" num={1} />}
        {/* URL에 따라  */}
      </S.IssueHeader>
      <S.IssueMain>{newIssue ? <NewMain /> : <NewMain />}</S.IssueMain>
    </S.IssueContainer>
  );
}

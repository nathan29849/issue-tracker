import React from 'react';

import * as S from './style';

import { DetailHeader, NewHeader } from '@pages/IssuePage/Deatil/Header';
import { NewMain } from '@pages/IssuePage/Deatil/Main';

export default function IssueLayout() {
  return (
    <S.IssueContainer>
      <S.IssueHeader>
        {/* <DetailHeader title="이슈 제목" num={1} /> */}
        <NewHeader />
        {/* URL에 따라  */}
      </S.IssueHeader>
      <S.IssueMain>
        <NewMain />
      </S.IssueMain>
    </S.IssueContainer>
  );
}

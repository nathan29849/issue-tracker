import React from 'react';

import * as S from './style';

import { SideBarProvider } from '@components/SideBar/context';
import { DetailHeader, NewHeader } from '@pages/IssuePage/Detail/Header';
import { DetailMain, NewMain } from '@pages/IssuePage/Detail/Main';

export default function IssueDetailPage({ newIssue = false }) {
  return (
    <S.IssueContainer>
      <S.IssueHeader>
        {newIssue ? <NewHeader /> : <DetailHeader title="이슈 제목" num={1} />}
        {/* URL에 따라  */}
      </S.IssueHeader>
      <S.IssueMain>
        {newIssue ? (
          <SideBarProvider>
            <NewMain />
          </SideBarProvider>
        ) : (
          <SideBarProvider>
            <DetailMain />
          </SideBarProvider>
        )}
      </S.IssueMain>
    </S.IssueContainer>
  );
}

import React from 'react';
import { useParams } from 'react-router-dom';

import * as S from './style';

import { SideBarProvider } from '@components/SideBar/context';
import { DetailHeader, NewHeader } from '@pages/IssuePage/Detail/Header';
import { DetailMain, NewMain } from '@pages/IssuePage/Detail/Main';

export default function IssueDetailPage() {
  const { id: issueId } = useParams();
  return (
    <S.IssueContainer>
      <S.IssueHeader>
        {!issueId ? <NewHeader /> : <DetailHeader issueId={issueId} />}
      </S.IssueHeader>
      <S.IssueMain>
        {!issueId ? (
          <SideBarProvider>
            <NewMain />
          </SideBarProvider>
        ) : (
          <SideBarProvider>
            <DetailMain issueId={issueId} />
          </SideBarProvider>
        )}
      </S.IssueMain>
    </S.IssueContainer>
  );
}

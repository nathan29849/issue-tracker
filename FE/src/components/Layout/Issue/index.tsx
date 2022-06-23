import React from 'react';

import * as S from './style';

export function IssueLayout() {
  return (
    <S.IssueContainer>
      <S.IssueHeader>
        <h2>머리</h2>
      </S.IssueHeader>
      <S.IssueMain>메인</S.IssueMain>
      <S.IssueSideBar>사이드바</S.IssueSideBar>
      <S.IssueFooter>
        <h2>바닥</h2>
      </S.IssueFooter>
    </S.IssueContainer>
  );
}

import React from 'react';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { IssueLabel } from '@components/Label';

// READ ISSUE
export const DetailHeader: React.FC<{
  title: string;
  num: number;
}> = ({ title, num }) => (
  <S.DetailHeaderLayer>
    <S.Title>
      <S.IssueTitle>{title}</S.IssueTitle>
      <S.IssueNumber>#{num}</S.IssueNumber>
    </S.Title>
    <S.Buttons>
      <Button outlined>
        <I.Edit />
        제목 편집
      </Button>
      <Button outlined>
        <I.Bucket />
        이슈 닫기
      </Button>
      <Button outlined>
        <I.XMark />
        편집 취소
      </Button>
      <Button>
        <I.Edit />
        편집 완료
      </Button>
    </S.Buttons>
    <S.MetaData>
      <S.IssueStatus>
        <IssueLabel />
      </S.IssueStatus>
      <S.IssueDateInfo>이 이슈가 N분전에 X에 의해 열렸습니다</S.IssueDateInfo>
      <S.IssueCommentInfo>코멘트 Y개</S.IssueCommentInfo>
    </S.MetaData>
  </S.DetailHeaderLayer>
);

// ADD ISSUE
export const NewHeader = () => (
  <S.DetailHeaderLayer>
    <S.Title>
      <S.IssueTitle>새로운 이슈 작성</S.IssueTitle>
    </S.Title>
  </S.DetailHeaderLayer>
);

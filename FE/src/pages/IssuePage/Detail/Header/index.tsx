import React, { memo, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import * as S from './style';

import { getIssue } from '@apis/issue';
import { usePatchIssueTitle } from '@hooks/usePatchIssue';
import DetailHeaderLoader from '@pages/IssuePage/Detail/Header/DetailHeaderLoader';
import IssueCommentCount from '@pages/IssuePage/Detail/Header/IssueCommentCount';
import IssueStatusInfo from '@pages/IssuePage/Detail/Header/IssueStatusInfo';
import IssueTitle from '@pages/IssuePage/Detail/Header/IssueTitle';
import IssueTitleInput from '@pages/IssuePage/Detail/Header/IssueTitleInput';

// READ ISSUE
export const DetailHeader: React.FC<{ issueId: string }> = memo(
  ({ issueId }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const { mutate: mutateIssueTitle, isLoading: patchTitleLoading } =
      usePatchIssueTitle(issueId);

    const { data: issueDetailData, isLoading: getIssueLoading } = useQuery(
      ['issueDetail'],
      () => getIssue(issueId),
    );

    const handleClickEditCancelButton = useCallback(
      () => setIsEditMode(false),
      [],
    );

    const handleClickEditCompleteButton = useCallback(
      (title: string) => () => {
        setIsEditMode(false);
        mutateIssueTitle(title);
      },
      [],
    );

    const handleClickEditTitleButton = useCallback(
      () => setIsEditMode(true),
      [],
    );
    const handleClickCloseIssueButton = useCallback(() => {
      // 이슈 닫기 요청 PATCH
    }, []);
    const handleClickReopenIssueButton = useCallback(() => {
      // 이슈 열기 요청 PATCH
    }, []);

    return getIssueLoading || !issueDetailData ? (
      <DetailHeaderLoader />
    ) : (
      <S.DetailHeaderLayer>
        {isEditMode ? (
          <IssueTitleInput
            initialValue={issueDetailData.title}
            handleClickEditCancelButton={handleClickEditCancelButton}
            handleClickEditCompleteButton={handleClickEditCompleteButton}
          />
        ) : (
          <IssueTitle
            isLoading={patchTitleLoading}
            title={issueDetailData.title}
            issueNumber={issueDetailData.id}
            issueStatus={issueDetailData.issueStatus}
            handleClickEditTitleButton={handleClickEditTitleButton}
            handleClickCloseIssueButton={handleClickCloseIssueButton}
            handleClickReopenIssueButton={handleClickReopenIssueButton}
          />
        )}
        <S.MetaData>
          <IssueStatusInfo
            issueStatus={issueDetailData.issueStatus}
            updatedAt={issueDetailData.updatedAt}
          />
          <IssueCommentCount commentCount={issueDetailData.comments.length} />
        </S.MetaData>
      </S.DetailHeaderLayer>
    );
  },
);

// ADD ISSUE
export const NewHeader = memo(() => (
  <S.DetailHeaderLayer>
    <S.Title>
      <S.IssueTitle>새로운 이슈 작성</S.IssueTitle>
    </S.Title>
  </S.DetailHeaderLayer>
));

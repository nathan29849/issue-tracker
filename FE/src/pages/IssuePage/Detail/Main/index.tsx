import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './style';

import { getIssue } from '@apis/issue';
import { Loader } from '@components/Indicator';
import { SideBar } from '@components/SideBar';
import {
  useSelectedAssigneeId,
  useSelectedMileStoneId,
  useSelectedLabelId,
} from '@components/SideBar/context';
import { useInput } from '@hooks/useInput';
import { useUserState } from '@hooks/useIsLoggedIn';
import { usePostIssue } from '@hooks/usePostIssue';
import IssueComment from '@pages/IssuePage/Detail/Main/IssueComment';
import NewIssueMainButtons from '@pages/IssuePage/Detail/Main/NewIssueMainButtons';
import NewMainInputs from '@pages/IssuePage/Detail/Main/NewIssueMainInputs';
import UserAvatarLayer from '@pages/IssuePage/Detail/Main/UserAvatarLayer';
import { useProfileImage } from '@recoil/selectors/user';

const issuePagePath = '/issue';

// ADD ISSUE
export const NewMain = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = usePostIssue();
  const profileImage = useProfileImage();
  const selectedAssignees = useSelectedAssigneeId();
  const selectedLabels = useSelectedLabelId();
  const [selectedMileStone] = useSelectedMileStoneId();
  const title = useInput();
  const comment = useInput();

  const handleClickCancelButton = useCallback(
    () => navigate(issuePagePath),
    [],
  );
  const handleClickSubmitButton = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.value.trim().length === 0) {
      return;
    }

    mutate({
      title: title.value,
      content: comment.value,
      assigneesId: selectedAssignees,
      labelsId: selectedLabels,
      milestoneId: selectedMileStone,
    });
  };

  return (
    <S.NewMainLayer as="form" onSubmit={handleClickSubmitButton}>
      <S.InputContainer>
        <UserAvatarLayer profileImage={profileImage} />
        <NewMainInputs title={title} comment={comment} />
      </S.InputContainer>
      <NewIssueMainButtons
        handleClickSubmitButton={handleClickSubmitButton}
        handleClickCancelButton={handleClickCancelButton}
        isLoading={isLoading}
        submitButtonDisabled={!title.value.trim().length}
      />
      <S.SideBar>
        <SideBar />
      </S.SideBar>
    </S.NewMainLayer>
  );
};

// ISSUE DETAIL
export const DetailMain = () => {
  const { authId } = useUserState();
  const { id: issueId } = useParams();
  const { data: issueDetailData, isLoading: getIssueLoading } = useQuery(
    ['issueDetail'],
    () => getIssue(issueId),
  );

  const isLoading = !issueDetailData || getIssueLoading;

  return (
    <S.DetailMainLayer>
      {isLoading ? (
        <Loader size={3} />
      ) : (
        <S.IssueComments>
          {issueDetailData.comments.map(commentProps => {
            const { id, author } = commentProps;
            return (
              <IssueComment
                key={id}
                isEditable={authId === author.authId}
                isIssueAuthor={issueDetailData.author.authId === author.authId}
                {...commentProps}
              />
            );
          })}
        </S.IssueComments>
      )}
      <S.SideBar>
        <SideBar />
      </S.SideBar>
    </S.DetailMainLayer>
  );
};

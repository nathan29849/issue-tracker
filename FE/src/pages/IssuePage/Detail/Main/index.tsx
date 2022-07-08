import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

import { Comment } from '@components/Comment';
import { SideBar } from '@components/SideBar';
import {
  useSelectedAssigneeId,
  useSelectedMileStoneId,
  useSelectedLabelId,
} from '@components/SideBar/context';
import { useInput } from '@hooks/useInput';
import { usePostIssue } from '@hooks/usePostIssue';
import Inputs from '@pages/IssuePage/Detail/Main/Inputs';
import NewIssueMainButtons from '@pages/IssuePage/Detail/Main/NewIssueMainButtons';
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
        <Inputs title={title} comment={comment} />
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
  const a = 1;
  const profileImage = useProfileImage();
  return (
    <S.DetailMainLayer>
      <S.CommentsContainer>
        <UserAvatarLayer profileImage={profileImage} />
        <Comment
          text="임시"
          userName="mjsdo"
          createdAt={new Date('2022-07-08T00:00:00Z')}
          isIssueAuthor={false}
        />
      </S.CommentsContainer>
      <S.SideBar>
        <SideBar />
      </S.SideBar>
    </S.DetailMainLayer>
  );
};

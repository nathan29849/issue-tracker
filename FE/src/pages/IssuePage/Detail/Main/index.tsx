import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './style';

import { Button, TextButton } from '@components/Button';
import I from '@components/Icons';
import { Textarea, Input } from '@components/Input';
import { SideBar } from '@components/SideBar';
import {
  useSelectedAssigneeId,
  useSelectedMileStoneId,
  useSelectedLabelId,
} from '@components/SideBar/context';
import UserAvatar from '@components/UserAvatar';
import { useInput } from '@hooks/useInput';
import { usePostIssue } from '@hooks/usePostIssue';
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

  const handleClickCancelButton = () => navigate(issuePagePath);
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
    <S.DetailMainLayer as="form" onSubmit={handleClickSubmitButton}>
      <S.InputContainer>
        <S.UserAvatar>
          <UserAvatar src={profileImage} size="lg" />
        </S.UserAvatar>
        <S.Inputs>
          <Input width="100%" placeholder="제목" size="md" {...title} />
          <Textarea width="100%" {...comment} />
        </S.Inputs>
      </S.InputContainer>
      <S.Buttons>
        <TextButton
          size="md"
          type="button"
          onClick={handleClickCancelButton}
          disabled={isLoading}
        >
          <I.XMark />
          작성 취소
        </TextButton>

        <Button
          size="md"
          type="button"
          onClick={handleClickSubmitButton}
          disabled={!title.value.trim().length}
          loading={isLoading}
        >
          완료
        </Button>
      </S.Buttons>
      <S.SideBar>
        <SideBar />
      </S.SideBar>
    </S.DetailMainLayer>
  );
};

// ISSUE DETAIL
export const DetailMain = () => (
  <S.DetailMainLayer>
    <S.SideBar>
      <SideBar />
    </S.SideBar>
  </S.DetailMainLayer>
);

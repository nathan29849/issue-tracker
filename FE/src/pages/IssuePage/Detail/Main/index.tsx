import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './style';

import { Button, TextButton } from '@components/Button';
import I from '@components/Icons';
import { Textarea, Input } from '@components/Input';
import UserAvatar from '@components/UserAvatar';
import { useInput } from '@hooks/useInput';
import { usePostIssue } from '@hooks/usePostIssue';
import { userState } from '@recoil/atoms/user';

const issuePagePath = '/issue';

// ADD ISSUE
export const NewMain = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = usePostIssue();
  const user = useRecoilValue(userState);

  const title = useInput();
  const comment = useInput();

  const handleClickCancelButton = () => {
    navigate(issuePagePath);
  };

  const handleClickSubmitButton = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.value.trim().length === 0) {
      return;
    }

    mutate({
      title: title.value,
      content: comment.value,
    });
  };

  return (
    <S.DetailMainLayer as="form" onSubmit={handleClickSubmitButton}>
      <S.Inputs>
        <S.UserAvatar>
          <UserAvatar src={user!.profileImageUrl} size="lg" />
        </S.UserAvatar>
        <Input width="100%" placeholder="제목" size="md" {...title} />
        <Textarea width="100%" {...comment} />
      </S.Inputs>
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
      <S.SideBar>사이드바</S.SideBar>
    </S.DetailMainLayer>
  );
};

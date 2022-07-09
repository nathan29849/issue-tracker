import React, { memo } from 'react';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Textarea } from '@components/Input';
import { useInput } from '@hooks/useInput';
import { useUserState } from '@hooks/useIsLoggedIn';
import UserAvatarLayer from '@pages/IssuePage/Detail/Main/UserAvatarLayer';

export const CreateCommentForm = () => {
  const { profileImageUrl } = useUserState();
  const comment = useInput();

  return (
    <S.IssueCommentForm>
      <S.TextareaLayer>
        <UserAvatarLayer profileImage={profileImageUrl} />
        <Textarea width="100%" {...comment} />
      </S.TextareaLayer>
      <Button disabled={!comment.value.length}>
        <I.Plus />
        코멘트 작성
      </Button>
    </S.IssueCommentForm>
  );
};

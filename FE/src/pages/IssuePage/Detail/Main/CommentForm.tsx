import React, { memo, useCallback } from 'react';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Textarea } from '@components/Input';
import { useInput } from '@hooks/useInput';
import { useUserState } from '@hooks/useIsLoggedIn';
import { usePostComment } from '@hooks/usePostComment';
import { CreateCommentFormLoader } from '@pages/IssuePage/Detail/Main/CommentFormLoader';
import UserAvatarLayer from '@pages/IssuePage/Detail/Main/UserAvatarLayer';
import { ButtonClickEventHandler } from '@type/eventHandler';

const CreateButton: React.FC<{
  disabled: boolean;
  onClick: ButtonClickEventHandler;
}> = memo(({ disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick}>
    <I.Plus />
    코멘트 작성
  </Button>
));

export const CreateCommentForm: React.FC<{ issueId: string }> = ({
  issueId,
}) => {
  const { profileImageUrl } = useUserState();
  const comment = useInput();
  const { isLoading: postCommentLoading, mutateAsync: mutateIssueComments } =
    usePostComment(issueId);

  const handleClickCreateButton = useCallback(async () => {
    if (!comment.value.length) {
      return;
    }

    // 항상 status 값을 리턴한다.
    // Post 실패시, Input 값을 초기화하지 않는다.
    const { status } = await mutateIssueComments(comment.value);
    if (status === 'success') {
      comment.setValue('');
      return;
    }

    globalThis.alert('코멘트 등록에 실패했습니다.');
  }, [comment, mutateIssueComments]);

  return (
    <S.IssueCommentForm>
      {postCommentLoading ? (
        <CreateCommentFormLoader />
      ) : (
        <>
          <S.TextareaLayer>
            <UserAvatarLayer profileImage={profileImageUrl} />
            <Textarea width="100%" {...comment} />
          </S.TextareaLayer>
          <CreateButton
            disabled={!comment.value.length}
            onClick={handleClickCreateButton}
          />
        </>
      )}
    </S.IssueCommentForm>
  );
};

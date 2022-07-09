import React, { memo } from 'react';

import {
  ClosedIssueComment,
  ReopenIssueComment,
  Comment,
} from '@components/Comment';
import * as S from '@pages/IssuePage/Detail/Main/style';
import UserAvatarLayer from '@pages/IssuePage/Detail/Main/UserAvatarLayer';
import { CommentType } from '@type/issue';

interface Props extends CommentType {
  isEditable: boolean;
  isIssueAuthor: boolean;
}

const IssueComment: React.FC<Props> = ({
  author,
  content,
  type,
  updatedAt,
  isEditable,
  isIssueAuthor,
}) => {
  const updatedDate = new Date(updatedAt);

  return (
    <S.IssueComment>
      <UserAvatarLayer profileImage={author.profileImageUrl} />
      {type === 'CLOSED' ? (
        <ClosedIssueComment userName={author.userId} createdAt={updatedDate} />
      ) : type === 'REOPEN' ? (
        <ReopenIssueComment userName={author.userId} createdAt={updatedDate} />
      ) : (
        <Comment
          text={content}
          userName={author.userId}
          createdAt={updatedDate}
          isEditable={isEditable}
          isIssueAuthor={isIssueAuthor}
        />
      )}
    </S.IssueComment>
  );
};

export default memo(IssueComment);

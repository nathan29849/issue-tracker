import React from 'react';

import * as S from './style';

import { TextButton } from '@components/Button';
import I from '@components/Icons';
import { Label } from '@components/Label';
import theme from '@styles/theme';
import { getTimeDiffFromNow } from '@utils/time';

interface SystemComment {
  userName: string;
  createdAt: Date;
}

interface Props extends SystemComment {
  children: React.ReactNode;
  isIssueAuthor: boolean;
  isEditable?: boolean;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}

export const Comment: React.FC<Props> = ({
  children,
  userName,
  createdAt,
  isIssueAuthor,
  isEditable = true,
  borderColor,
  bgColor,
  textColor,
}) => {
  const timeDiffFromCreatedTimeToNow = getTimeDiffFromNow(createdAt);

  // 코멘트 컨텐츠를 적절하게 변환시킨 후 Content에 넣는다.
  return (
    <S.CommentLayer
      borderColor={borderColor}
      bgColor={bgColor}
      textColor={textColor}
    >
      <S.Header>
        <S.CommentAuthorInfo>
          <S.CommentAuthor>{userName}</S.CommentAuthor>
          <S.TimeStamp>{timeDiffFromCreatedTimeToNow}</S.TimeStamp>
        </S.CommentAuthorInfo>
        {isIssueAuthor && (
          <S.IssueAuthorLabel>
            <Label outlined as="div">
              작성자
            </Label>
          </S.IssueAuthorLabel>
        )}
        <S.Buttons>
          {isEditable && (
            <S.EditButton>
              <TextButton>
                <I.Edit />
                편집
              </TextButton>
            </S.EditButton>
          )}
          <S.EmojiButton>
            <I.Smile />
          </S.EmojiButton>
        </S.Buttons>
      </S.Header>
      <S.Content>{children}</S.Content>
    </S.CommentLayer>
  );
};

export const ClosedIssueComment: React.FC<SystemComment> = props => (
  <Comment
    {...props}
    isIssueAuthor={false}
    isEditable={false}
    bgColor={theme.color.lightPurple}
    borderColor={theme.color.purple}
    textColor={theme.color.darkPurple}
  >
    이슈가 닫혔습니다.
  </Comment>
);

export const ReopenIssueComment: React.FC<SystemComment> = props => (
  <Comment
    {...props}
    isIssueAuthor={false}
    isEditable={false}
    bgColor={theme.color.lightBlue}
    borderColor={theme.color.blue}
    textColor={theme.color.darkBlue}
  >
    이슈가 다시 열렸습니다.
  </Comment>
);

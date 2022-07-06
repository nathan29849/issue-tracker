import React, { useMemo } from 'react';

import * as S from './style';

import { TextButton } from '@components/Button';
import I from '@components/Icons';
import { Label } from '@components/Label';
import theme from '@styles/theme';
import { textToHtml } from '@utils/textToHtml';
import { getTimeDiffFromNow } from '@utils/time';

interface SystemComment {
  userName: string;
  createdAt: Date;
}

interface Props extends SystemComment {
  text: string;
  isIssueAuthor: boolean;
  isEditable?: boolean;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}

export const Comment: React.FC<Props> = ({
  text,
  userName,
  createdAt,
  isIssueAuthor,
  isEditable = true,
  borderColor,
  bgColor,
  textColor,
}) => {
  const timeDiffFromCreatedTimeToNow = getTimeDiffFromNow(createdAt);
  const html = useMemo(() => textToHtml(text), [text]);

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
      <S.Content dangerouslySetInnerHTML={{ __html: html }} />
    </S.CommentLayer>
  );
};

export const ClosedIssueComment: React.FC<SystemComment> = props => (
  <Comment
    {...props}
    text="이슈가 닫혔습니다."
    isIssueAuthor={false}
    isEditable={false}
    bgColor={theme.color.lightPurple}
    borderColor={theme.color.purple}
    textColor={theme.color.darkPurple}
  />
);

export const ReopenIssueComment: React.FC<SystemComment> = props => (
  <Comment
    {...props}
    text="이슈가 다시 열렸습니다."
    isIssueAuthor={false}
    isEditable={false}
    bgColor={theme.color.lightBlue}
    borderColor={theme.color.blue}
    textColor={theme.color.darkBlue}
  />
);

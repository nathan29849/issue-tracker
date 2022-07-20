import React, { memo } from 'react';

import * as S from './style';

interface IIssueCommentCountProps {
  commentCount: number;
}

const IssueCommentCount: React.FC<IIssueCommentCountProps> = ({
  commentCount,
}) => <S.IssueCommentCount>코멘트 {commentCount}개</S.IssueCommentCount>;

export default memo(IssueCommentCount);

import React, { memo } from 'react';

import * as S from './style';

import { Input, Textarea } from '@components/Input';

// TODO: any 수정하기
interface INewIssueMainInputsProps {
  title: any;
  comment: any;
}

const NewIssueMainInputs: React.FC<INewIssueMainInputsProps> = ({
  title,
  comment,
}) => (
  <S.Inputs>
    <Input width="100%" placeholder="제목" size="md" {...title} />
    <Textarea width="100%" {...comment} />
  </S.Inputs>
);

export default memo(NewIssueMainInputs);

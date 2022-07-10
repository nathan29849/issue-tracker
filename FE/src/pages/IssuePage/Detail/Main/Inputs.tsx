import React, { memo } from 'react';

import * as S from './style';

import { Input, Textarea } from '@components/Input';

interface Props {
  title: any;
  comment: any;
}

const Inputs: React.FC<Props> = ({ title, comment }) => (
  <S.Inputs>
    <Input width="100%" placeholder="제목" size="md" {...title} />
    <Textarea width="100%" {...comment} />
  </S.Inputs>
);

export default memo(Inputs);

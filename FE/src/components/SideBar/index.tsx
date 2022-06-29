import React from 'react';

import AssigneePanel from './AssigneePanel';
import LabelPanel from './LabelPanel';
import MileStonePanel from './MileStonePanel';
import * as S from './style';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <S.Container>{children}</S.Container>
);

export default {
  Container,
  AssigneePanel,
  LabelPanel,
  MileStonePanel,
};

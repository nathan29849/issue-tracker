import React from 'react';

import AssigneePanel from './AssigneePanel';
import * as S from './style';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <S.Container>{children}</S.Container>
);

const LabelPanel = () => <>ㅇ</>;

const MileStonePanel = () => <>ㅇ</>;

export default {
  Container,
  AssigneePanel,
  LabelPanel,
  MileStonePanel,
};

import React from 'react';

import I from '@components/Icons';
import * as S from '@components/SideBar/style';

export const Header: React.FC<{
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}> = ({ title, onClick }) => (
  <S.Header onClick={onClick}>
    <S.Title>{title}</S.Title>
    <S.SelectButton type="button">
      <I.Plus />
    </S.SelectButton>
  </S.Header>
);

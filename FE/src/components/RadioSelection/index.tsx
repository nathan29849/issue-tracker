import React from 'react';

import * as S from './style';

import I from '@components/Icons';

const Container: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <S.RadioSelectionLayer>
    <S.Title>
      <h2>{title}</h2>
    </S.Title>
    <S.Options>{children}</S.Options>
  </S.RadioSelectionLayer>
);

const Option: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onClick?: React.MouseEventHandler;
}> = ({ children, checked = false, onClick }) => (
  <S.Option checked={checked} onClick={onClick}>
    {checked ? <I.Circle.Check /> : <I.Circle.Plain />}
    <span>{children}</span>
  </S.Option>
);

export default {
  Container,
  Option,
};

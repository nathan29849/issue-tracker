import React from 'react';

import * as S from './style';

import I from '@components/Icons';

function Container({ title, children }) {
  return (
    <S.RadioSelectionLayer>
      <S.Title>
        <h2>{title}</h2>
      </S.Title>
      <S.Options>{children}</S.Options>
    </S.RadioSelectionLayer>
  );
}

function Option({ children, checked, ...restProps }) {
  return (
    <S.Option checked={checked} {...restProps}>
      {checked ? <I.Circle.Check /> : <I.Circle.Plain />}
      <span>{children}</span>
    </S.Option>
  );
}

export default {
  Container,
  Option,
};

import React from 'react';

import * as S from './style';

const maxDisplayCount = 99;

function Tab({ icon, title, count, isActive = false }) {
  return (
    <S.TabLayer isActive={isActive}>
      <S.Icon>{icon}</S.Icon>
      <S.Title>{title}</S.Title>
      <S.Count>
        ({Math.min(maxDisplayCount, count)}
        {count > maxDisplayCount && '+'})
      </S.Count>
    </S.TabLayer>
  );
}

export default Tab;

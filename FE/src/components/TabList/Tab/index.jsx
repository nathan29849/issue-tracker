import React from 'react';
import { useMatch } from 'react-router-dom';

import * as S from './style';

const maxDisplayCount = 99;

function Tab({ icon, title, count, link }) {
  const match = useMatch(link);

  return (
    <S.TabLayer isActive={!!match}>
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

import React from 'react';

import * as S from './style';

import I from '@components/Icons';

export default function FilterBar() {
  return (
    <S.FilterBarLayer>
      <S.FilterButton>
        <span>필터</span>
        {/* TODO: Arrow Down SVG 추가해야함  */}
        <I.Search />
      </S.FilterButton>
      <S.SearchBar>
        <S.Icon>
          <I.Search />
        </S.Icon>
        <S.Input type="text" placeholder="Search All Issues" />
      </S.SearchBar>
    </S.FilterBarLayer>
  );
}

import React from 'react';

import * as S from './style';
import Tab from './Tab';

import I from '@components/Icons';

export default function TabList() {
  return (
    <S.TabListLayer>
      <Tab icon={<I.Tag />} title="레이블" count={1} />
      <Tab icon={<I.MileStone />} title="마일스톤" count={1} />
    </S.TabListLayer>
  );
}

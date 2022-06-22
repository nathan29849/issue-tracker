import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import Tab from './Tab';

import I from '@components/Icons';

export default function TabList() {
  return (
    <S.TabListLayer>
      <Link to="/issue/label">
        <Tab icon={<I.Tag />} title="레이블" count={1} link="/issue/label" />
      </Link>
      <Link to="/issue/milestone">
        <Tab
          icon={<I.MileStone />}
          title="마일스톤"
          count={1}
          link="/issue/milestone"
        />
      </Link>
    </S.TabListLayer>
  );
}

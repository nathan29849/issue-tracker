import * as S from './style';

import { Button } from '@components/Button';
import FilterBar from '@components/FilterBar';
import I from '@components/Icons';
import TabList from '@components/TabList';

export default function IssuePage() {
  return (
    <div>
      <S.Header>
        <FilterBar />
        <TabList />
        <Button>
          <I.Plus />
          이슈 추가
        </Button>
      </S.Header>
    </div>
  );
}

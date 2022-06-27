import { Link } from 'react-router-dom';

import * as S from './style';

import { Button } from '@components/Button';
import FilterBar from '@components/FilterBar';
import I from '@components/Icons';
import Issue from '@components/Issue';
import TabList from '@components/TabList';

const NewIssueButton = () => (
  <Link to="new">
    <Button>
      <I.Plus />
      이슈 추가
    </Button>
  </Link>
);

export default function IssuePage() {
  return (
    <S.IssuePageLayer>
      <S.Header>
        <S.HeaderLeft>
          <FilterBar />
        </S.HeaderLeft>
        <S.HeaderRight>
          <TabList />
          <NewIssueButton />
        </S.HeaderRight>
      </S.Header>
      <S.Main>
        <Issue />
      </S.Main>
    </S.IssuePageLayer>
  );
}

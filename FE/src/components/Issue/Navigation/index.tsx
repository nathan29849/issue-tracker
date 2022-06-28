import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';

import * as S from './style';

import I from '@components/Icons';
import Filter from '@components/Issue/Filter';
import { useSearch } from '@hooks/useSearch';
import { assigneeState } from '@recoil/atoms/assignee';
import { authorState } from '@recoil/atoms/author';
import { issueState } from '@recoil/atoms/issue';
import { labelState } from '@recoil/atoms/label';
import { mileStoneState } from '@recoil/atoms/milestone';

export type FilterLabelTypes = 'assignee' | 'label' | 'mileStone' | 'author';

export default function Navigation() {
  const { init } = useSearch('q', 'is:open');
  const location = useLocation();
  const filterLabels: FilterLabelTypes[] = [
    'assignee',
    'label',
    'mileStone',
    'author',
  ];

  const assigneeData = useRecoilValue(assigneeState);
  const labelData = useRecoilValue(labelState);
  const milestoneData = useRecoilValue(mileStoneState);
  const authorData = useRecoilValue(authorState);

  const [issues, setIssues] = useRecoilState(issueState);

  const [popupState, setPopupState] = useState({
    assignee: false,
    label: false,
    mileStone: false,
    author: false,
  });

  const [filterPopupData, setFilterPoupData] = useState({
    assignee: assigneeData,
    label: labelData,
    mileStone: milestoneData,
    author: authorData,
  });

  const [labelIssueStatus, setLabelIssueStatus] = useState(true);

  const openIssueCount = issues.filter(issue => issue.status === 'open').length;
  const closeIssueCount = issues.filter(
    issue => issue.status === 'close',
  ).length;

  const handleLabelClick = (status: string) => {
    if (status === 'open') {
      setLabelIssueStatus(true);
      init({ paramValue: 'is:open' });
    } else if (status === 'close') {
      setLabelIssueStatus(false);
      init({ paramValue: 'is:close' });
    }
  };

  const handleFilterClick = (label: FilterLabelTypes, status: boolean) => {
    setPopupState(prevPopupState => ({ ...prevPopupState, [label]: status }));
  };

  const onPopup = (label: FilterLabelTypes) => !!popupState[label];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlValues = params.get('q');

    if (urlValues === null) return;

    if (urlValues === 'is:open') {
      setLabelIssueStatus(true);
    } else if (urlValues === 'is:close') {
      setLabelIssueStatus(false);
    }
  }, [location]);

  return (
    <S.NavigationLayer>
      <S.LeftLayer>
        <I.CheckBox.Initial color="#D9DBE9" />
        <S.IssueLabel
          labelIssueStatus={labelIssueStatus}
          onClick={() => handleLabelClick('open')}
        >
          <I.Circle.Alert />
          <span>열린 이슈({openIssueCount})</span>
        </S.IssueLabel>

        <S.IssueLabel
          labelIssueStatus={!labelIssueStatus}
          onClick={() => handleLabelClick('close')}
        >
          <I.Bucket />
          <span>닫힌 이슈({closeIssueCount})</span>
        </S.IssueLabel>
      </S.LeftLayer>
      <S.RightLayer>
        {filterLabels.map((label: FilterLabelTypes) => (
          <Filter
            key={label}
            onPopup={onPopup(label)}
            label={label}
            filterPopupData={filterPopupData[label].info}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </S.RightLayer>
    </S.NavigationLayer>
  );
}

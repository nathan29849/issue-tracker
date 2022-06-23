import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

import { NavigationLayer, LeftLayer, RightLayer, IssueLabel } from './style';

import I from '@components/Icons';
import Filter from '@components/Issue/Filter';
import { assigneeState } from '@recoil/atoms/assignee';
import { authorState } from '@recoil/atoms/author';
import { issueState } from '@recoil/atoms/issue';
import { labelState } from '@recoil/atoms/label';
import { mileStoneState } from '@recoil/atoms/milestone';

export type FilterLabelTypes = 'assignee' | 'label' | 'mileStone' | 'author';

export default function Navigation() {
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

  const [labelIssueStatus, setLabelIssueStatus] = useState({
    open: true,
    close: false,
  });

  const openIssueCount = issues.filter(issue => issue.status === 'open').length;
  const closeIssueCount = issues.filter(
    issue => issue.status === 'close',
  ).length;

  const handleLabelClick = (status: string) => {
    if (status === 'open') {
      setLabelIssueStatus({
        open: true,
        close: false,
      });
    } else if (status === 'close') {
      setLabelIssueStatus({
        open: false,
        close: true,
      });
    }
  };

  const handleFilterClick = (label: FilterLabelTypes, status: boolean) => {
    setPopupState(prevPopupState => ({ ...prevPopupState, [label]: status }));
  };

  const onPopup = (label: FilterLabelTypes) => !!popupState[label];

  return (
    <NavigationLayer>
      <LeftLayer>
        <I.CheckBox.Initial color="#D9DBE9" />
        <IssueLabel
          labelIssueStatus={labelIssueStatus.open}
          onClick={() => handleLabelClick('open')}
        >
          <I.Circle.Alert />
          <span>열린 이슈({openIssueCount})</span>
        </IssueLabel>

        <IssueLabel
          labelIssueStatus={labelIssueStatus.close}
          onClick={() => handleLabelClick('close')}
        >
          <I.Bucket />
          <span>닫힌 이슈({closeIssueCount})</span>
        </IssueLabel>
      </LeftLayer>
      <RightLayer>
        {filterLabels.map((label: FilterLabelTypes) => (
          <Filter
            key={label}
            onPopup={onPopup(label)}
            label={label}
            filterPopupData={filterPopupData[label].info}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </RightLayer>
    </NavigationLayer>
  );
}

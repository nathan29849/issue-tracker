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

export type FilterLabelTypes =
  | '이슈'
  | '담당자'
  | '레이블'
  | '마일스톤'
  | '작성자';

export default function Navigation() {
  const filterLabels = ['담당자', '레이블', '마일스톤', '작성자'];

  const assigneeData = useRecoilValue(assigneeState);
  const labelData = useRecoilValue(labelState);
  const milestoneData = useRecoilValue(mileStoneState);
  const authorData = useRecoilValue(authorState);

  const [issues, setIssues] = useRecoilState(issueState);

  const [popupState, setPopupState] = useState({
    담당자: false,
    레이블: false,
    마일스톤: false,
    작성자: false,
  });

  const [filterPopupData, setFilterPoupData] = useState({
    담당자: assigneeData,
    레이블: labelData,
    마일스톤: milestoneData,
    작성자: authorData,
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

  const handleFilterClick = (label: string, status: boolean) => {
    setPopupState(popupState => ({ ...popupState, [label]: status }));
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
        {filterLabels.map((label: any) => (
          <Filter
            key={label}
            onPopup={onPopup(label)}
            label={label}
            filterPopupData={filterPopupData[label]}
            handleFilterClick={handleFilterClick}
          />
        ))}
      </RightLayer>
    </NavigationLayer>
  );
}

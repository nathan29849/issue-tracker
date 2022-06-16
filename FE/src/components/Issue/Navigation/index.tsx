import Filter from '@components/Issue/Filter';
import I from '@components/Icons';
import { useRecoilValue, useRecoilState } from 'recoil';
import { issueState } from '@recoil/atoms/issue';
import { assigneeState } from '@recoil/atoms/assignee';
import { authorState } from '@recoil/atoms/author';
import { NavigationLayer, LeftLayer, RightLayer, IssueLabel } from './style';
import { useState } from 'react';

export type FilterLabelTypes = '담당자' | '레이블' | '마일스톤' | '작성자';

export default function Navigation() {
  const filterLabels = ['담당자', '레이블', '마일스톤', '작성자'];

  const assignee = useRecoilValue(assigneeState);
  const author = useRecoilValue(authorState);
  const [issues, setIssues] = useRecoilState(issueState);

  const [popupState, setPopupState] = useState({
    담당자: false,
    레이블: false,
    마일스톤: false,
    작성자: false,
  });

  const [filterPopupData, setFilterPoupData] = useState({
    담당자: assignee,
    레이블: assignee,
    마일스톤: author,
    작성자: author,
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
    setPopupState(popupState => {
      return { ...popupState, [label]: status };
    });
  };

  const onPopup = (label: FilterLabelTypes) => {
    return popupState[label] ? true : false;
  };

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
        {filterLabels.map((label: any) => {
          return (
            <Filter
              key={label}
              onPopup={onPopup(label)}
              label={label}
              filterPopupData={filterPopupData[label]}
              handleFilterClick={handleFilterClick}
            />
          );
        })}
      </RightLayer>
    </NavigationLayer>
  );
}

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
import { FilterLabelTypes } from '@type/issue';

interface NavigationProps {
  allCheck: boolean;
  calculateCheckCount: () => number;
  handleIssueAllCheck: (allCheckStatus: boolean) => void;
}

export default function Navigation({
  allCheck,
  calculateCheckCount,
  handleIssueAllCheck,
}: NavigationProps) {
  const { urlParamInit } = useSearch('q', 'is:open');
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
  const checkBoxStatus = {
    info: [
      { id: 'open-statusPopup', title: '선택한 이슈 열기' },
      { id: 'close-statusPopup', title: '선택한 이슈 닫기' },
    ],
  };

  const [issues, setIssues] = useRecoilState(issueState);

  const [popupState, setPopupState] = useState({
    assignee: false,
    label: false,
    mileStone: false,
    author: false,
    checkBoxStatus: false,
  });

  const [filterPopupData, setFilterPoupData] = useState<any>({
    assignee: assigneeData,
    label: labelData,
    mileStone: milestoneData,
    author: authorData,
    checkBoxStatus,
  });

  const [labelIssueStatus, setLabelIssueStatus] = useState(true);

  const openIssueCount = issues.filter(issue => issue.status === 'open').length;
  const closeIssueCount = issues.filter(
    issue => issue.status === 'close',
  ).length;

  const handleLabelClick = (status: string) => {
    if (status === 'open') {
      setLabelIssueStatus(true);
      urlParamInit({ paramValue: 'is:open' });
    } else if (status === 'close') {
      setLabelIssueStatus(false);
      urlParamInit({ paramValue: 'is:close' });
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
        {allCheck ? (
          <button type="button" onClick={() => handleIssueAllCheck(false)}>
            <I.CheckBox.Active color="#007AFF" />
          </button>
        ) : (
          <button type="button" onClick={() => handleIssueAllCheck(true)}>
            <I.CheckBox.Initial color="#D9DBE9" />
          </button>
        )}
        {calculateCheckCount() !== 0 ? (
          <div>{calculateCheckCount()}개 이슈 선택</div>
        ) : (
          <>
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
          </>
        )}
      </S.LeftLayer>
      <S.RightLayer>
        {calculateCheckCount() !== 0 ? (
          <Filter
            onPopup={onPopup('checkBoxStatus')}
            item="checkBoxStatus"
            filterPopupData={filterPopupData.checkBoxStatus.info}
            handleFilterClick={handleFilterClick}
          />
        ) : (
          <>
            {filterLabels.map((item: FilterLabelTypes) => (
              <Filter
                key={item}
                onPopup={onPopup(item)}
                item={item}
                filterPopupData={filterPopupData[item].info}
                handleFilterClick={handleFilterClick}
              />
            ))}
          </>
        )}
      </S.RightLayer>
    </S.NavigationLayer>
  );
}

import Filter from '@components/Issue/Filter';
import I from '@components/Icons';
import { useRecoilValue } from 'recoil';
import { issueState } from '@recoil/atoms/issue';
import { NavigationLayer, LeftLayer, RightLayer, IssueLabel } from './style';
import { useState } from 'react';

export default function Navigation() {
  const [labelStatus, setLabelStatus] = useState({ open: true, close: false });
  const filterLabels = ['담당자', '레이블', '마일스톤', '작성자'];
  const issues = useRecoilValue(issueState);
  const openIssueCount = issues.filter(issue => issue.status === 'open').length;
  const closeIssueCount = issues.filter(
    issue => issue.status === 'close',
  ).length;

  const handleLabelClick = (status: string) => {
    if (status === 'open') {
      setLabelStatus({
        open: true,
        close: false,
      });
    } else if (status === 'close') {
      setLabelStatus({
        open: false,
        close: true,
      });
    }
  };

  return (
    <NavigationLayer>
      <LeftLayer>
        <I.CheckBox.Initial color="#D9DBE9" />
        <IssueLabel
          labelStatus={labelStatus.open}
          onClick={() => handleLabelClick('open')}
        >
          <I.Circle.Alert />
          <span>열린 이슈({openIssueCount})</span>
        </IssueLabel>

        <IssueLabel
          labelStatus={labelStatus.close}
          onClick={() => handleLabelClick('close')}
        >
          <I.Bucket />
          <span>닫힌 이슈({closeIssueCount})</span>
        </IssueLabel>
      </LeftLayer>
      <RightLayer>
        {filterLabels.map((label: string) => {
          return <Filter key={`${label}`} label={label} />;
        })}
      </RightLayer>
    </NavigationLayer>
  );
}

import Filter from '@components/Issue/Filter';
import I from '@components/Icons';
import { useRecoilValue } from 'recoil';
import { issueState } from '@recoil/atoms/issue';
import {
  NavigationLayer,
  LeftLayer,
  RightLayer,
  OpenedIssue,
  ClosedIssue,
} from './style';

export default function Navigation() {
  const filterLabels = ['담당자', '레이블', '마일스톤', '작성자'];
  const issue = useRecoilValue(issueState);

  return (
    <NavigationLayer>
      <LeftLayer>
        <I.CheckBox.Initial color="#D9DBE9" />
        <OpenedIssue>
          <I.Circle.Alert />
          <span>열린 이슈(2)</span>
        </OpenedIssue>

        <ClosedIssue>
          <I.Bucket />
          <span>닫힌 이슈(0)</span>
        </ClosedIssue>
      </LeftLayer>
      <RightLayer>
        {filterLabels.map((label: string) => {
          return <Filter key={`${label}`} label={label} />;
        })}
      </RightLayer>
    </NavigationLayer>
  );
}

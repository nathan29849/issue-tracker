import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import { IssueWrapperLayer } from './style';

import Item from '@components/Issue/Item';
import Navigation from '@components/Issue/Navigation';
import { issueState } from '@recoil/atoms/issue';

export default function Issue() {
  const [issue, setIssue] = useRecoilState(issueState);

  useQuery('issueData', () => {
    fetch('issue').then(res => {
      res.json().then(result => {
        setIssue(result);
      });
    });
  });

  return (
    <IssueWrapperLayer>
      <Navigation />
      {issue &&
        issue.map(issueData => (
          <Item issue={issueData} key={`issue-${issueData.id}`} />
        ))}
    </IssueWrapperLayer>
  );
}

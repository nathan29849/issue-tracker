import Navigation from '@components/Issue/Navigation';
import Item from '@components/Issue/Item';
import { issueState } from '@recoil/atoms/issue';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { IssueWrapperLayer } from './style';

export default function Issue() {
  const [issue, setIssue] = useRecoilState(issueState);

  useQuery('issueData', () => {
    fetch('http://localhost:8080/issue').then(res => {
      res.json().then(result => {
        setIssue(result);
      });
    });
  });

  return (
    <>
      <IssueWrapperLayer>
        <Navigation />
        {issue &&
          issue.map(issueData => {
            return <Item issue={issueData} key={`issue-${issueData.id}`} />;
          })}
      </IssueWrapperLayer>
    </>
  );
}

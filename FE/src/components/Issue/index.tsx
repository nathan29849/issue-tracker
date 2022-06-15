import Navigation from '@components/Issue/Navigation';
import Item from '@components/Issue/Item';
import styled from '@emotion/styled';
import { issueState } from '@recoil/atoms/issue';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

const IssueWrapperStyle = styled.section`
  width: 80rem;
  border: 1px solid;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.color.line};
`;

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
      <IssueWrapperStyle>
        <Navigation />
        {issue &&
          issue.map(issueData => {
            return <Item issue={issueData} key={`issue-${issueData.id}`} />;
          })}
      </IssueWrapperStyle>
    </>
  );
}

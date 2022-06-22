import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { IssueWrapperLayer } from './style';

import Item from '@components/Issue/Item';
import Navigation from '@components/Issue/Navigation';
import { issueState } from '@recoil/atoms/issue';

export default function Issue() {
  const [issue, setIssue] = useRecoilState(issueState);
  const [renderIssue, setRenderIssue] = useState(
    issue.filter(is => is.status === 'open'),
  );
  const location = useLocation();

  useQuery('issueData', () => {
    fetch('issue').then(res => {
      res.json().then(result => {
        setIssue(result);
      });
    });
  });

  useEffect(() => {
    const urlSearch = decodeURI(decodeURIComponent(location.search));
    const params = new URLSearchParams(urlSearch);
    const key = params.get('q');

    switch (key) {
      case 'is:open':
      case null:
        setRenderIssue(issue.filter(is => is.status === 'open'));
        break;
      case 'mine@me':
        break;
      case 'assignedToMe@me':
        break;
      case 'comment@me':
        break;
      case 'is:close':
        setRenderIssue(issue.filter(is => is.status === 'close'));
        break;
      default:
        throw Error('key not found');
    }
  }, [issue, location]);

  return (
    <IssueWrapperLayer>
      <Navigation />
      {renderIssue &&
        renderIssue.map(issueData => (
          <Item issue={issueData} key={`issue-${issueData.id}`} />
        ))}
    </IssueWrapperLayer>
  );
}

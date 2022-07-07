import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import { IssueWrapperLayer } from './style';

import Item from '@components/Issue/Item';
import Navigation from '@components/Issue/Navigation';
import { IIssueTypes, issueState } from '@recoil/atoms/issue';

interface ICheckIssue {
  id: number;
  check: boolean;
}

export default function Issue() {
  const [issueList, setIssueList] = useRecoilState(issueState);
  const [allCheck, setAllCheck] = useState(false);
  const [checkIssue, setCheckIssue] = useState<ICheckIssue[]>([]);

  const handleIssueCheck = (id: number) => {
    setCheckIssue(
      checkIssue.map(issue =>
        issue.id === id ? { id, check: !issue.check } : issue,
      ),
    );
  };

  const handleIssueAllCheck = (allCheckStatus: boolean) => {
    if (allCheckStatus) {
      const newCheckIssue = checkIssue.map(issue => {
        const obj = {} as ICheckIssue;
        obj.id = issue.id;
        obj.check = true;
        return obj;
      });

      setAllCheck(true);
      setCheckIssue(newCheckIssue);
    } else {
      const newCheckIssue = checkIssue.map(issue => {
        const obj = {} as ICheckIssue;
        obj.id = issue.id;
        obj.check = false;
        return obj;
      });

      setAllCheck(false);
      setCheckIssue(newCheckIssue);
    }
  };

  const isCheckIssue = (id: number) => {
    const item = checkIssue.filter(issue => id === issue.id)[0];
    if (item) return item.check;
    return false;
  };

  const calculateCheckCount = () => {
    const count = checkIssue.filter(issue => issue.check).length;
    return count;
  };

  useQuery('issueData', async () => {
    const response = await (await fetch('issue')).json();
    setIssueList(response);
  });

  useEffect(() => {
    // open & close 구별해서 데이터 파싱 필요..
    const initIssueCheck = issueList.map(issue => {
      const obj = {} as ICheckIssue;
      obj.id = issue.id;
      obj.check = false;
      return obj;
    });

    setCheckIssue(initIssueCheck);
  }, [issueList]);

  return (
    <IssueWrapperLayer>
      <Navigation
        allCheck={allCheck}
        calculateCheckCount={calculateCheckCount}
        handleIssueAllCheck={handleIssueAllCheck}
      />
      {issueList &&
        issueList.map((issueData: IIssueTypes, index: number) => (
          <Item
            issue={issueData}
            lastIdx={issueList.length === index + 1}
            key={`issue-${issueData.id}`}
            isCheck={isCheckIssue(issueData.id)}
            handleIssueCheck={handleIssueCheck}
          />
        ))}
    </IssueWrapperLayer>
  );
}

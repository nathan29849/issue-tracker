import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { IssueWrapperLayer } from './style';

import Item from '@components/Issue/Item';
import Navigation from '@components/Issue/Navigation';
import { IIssueTypes, issueState } from '@recoil/atoms/issue';

interface IKeyParams {
  [key: string]: string;
}

export default function Issue() {
  const [initIssue, setInitIssue] = useRecoilState(issueState);
  const [renderIssue, setRenderIssue] = useState<IIssueTypes[]>([]);
  const location = useLocation();

  useQuery('issueData', async () => {
    const response = await (await fetch('issue')).json();
    setInitIssue(response);
    setRenderIssue(
      response.filter((issue: IIssueTypes) => issue.status === 'open'),
    );
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlValues = params.get('q');

    if (urlValues === null) return;

    const parsingUrlValue = urlValues?.split(' ').map(v => v);

    // 스페이스바 기준으로 나눠진 데이터들 중 다시 sep(:) split =>  Key, value를 담는 배열로 나누는 함수 제작
    // 뽑은 key, value를 넘겨 기존 issueData를 필터하는 함수 제작
    const filterDataArray = parsingUrlValue?.map(data => {
      const obj: IKeyParams = {};
      const [key, value] = data.split(':');
      obj[key] = value;
      return obj;
    });

    // 백엔드 API가 완성되면 이부분 함수 분리 + 로직 재작성
    filterDataArray?.forEach(arr => {
      const key = Object.keys(arr)[0];
      const value = Object.values(arr)[0];

      switch (key) {
        case 'is':
          setRenderIssue(
            initIssue.filter((issue: IIssueTypes) => issue.status === value),
          );
          break;
        case 'mine':
          break;
        case 'assignedToMe':
          break;
        case 'comment':
          break;
        case 'assignee':
          break;
        case 'label':
          break;
        case 'mileStone':
          break;
        case 'author':
          break;
        default:
          console.log(urlValues);
      }
    });
  }, [initIssue, location]);

  return (
    <IssueWrapperLayer>
      <Navigation />
      {renderIssue &&
        renderIssue.map((issueData: IIssueTypes, index: number) => (
          <Item
            issue={issueData}
            lastIdx={renderIssue.length === index + 1}
            key={`issue-${issueData.id}`}
          />
        ))}
    </IssueWrapperLayer>
  );
}

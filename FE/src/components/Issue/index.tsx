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

interface ICheckIssue {
  id: number;
  check: boolean;
}

export default function Issue() {
  // TODO initIssue 와 renderIssue는 현재 필터된 결과를 화면에 뿌려보기 위해 사용한 상태며 차후엔 하나의 상태로 관리
  const [initIssue, setInitIssue] = useRecoilState(issueState);
  const [renderIssue, setRenderIssue] = useState<IIssueTypes[]>([]);
  const [allCheck, setAllCheck] = useState(false);
  const [checkIssue, setCheckIssue] = useState<ICheckIssue[]>([]);
  const location = useLocation();

  const handleIssueCheck = (id: number) => {
    setCheckIssue(
      checkIssue.map(issue =>
        issue.id === id ? { id, check: !issue.check } : issue,
      ),
    );
  };

  const handleIssueAllCheck = (status: boolean) => {
    if (status) {
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
    const count = checkIssue.filter(issue => issue.check === true).length;
    return count;
  };

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

  useEffect(() => {
    // open & close 구별해서 데이터 파싱 필요..
    const initIssueCheck = initIssue.map(issue => {
      const obj = {} as ICheckIssue;
      obj.id = issue.id;
      obj.check = false;
      return obj;
    });

    setCheckIssue(initIssueCheck);
  }, [initIssue]);

  return (
    <IssueWrapperLayer>
      <Navigation
        allCheck={allCheck}
        calculateCheckCount={calculateCheckCount}
        handleIssueAllCheck={handleIssueAllCheck}
      />
      {renderIssue &&
        renderIssue.map((issueData: IIssueTypes, index: number) => (
          <Item
            issue={issueData}
            lastIdx={renderIssue.length === index + 1}
            key={`issue-${issueData.id}`}
            isCheck={isCheckIssue(issueData.id)}
            handleIssueCheck={handleIssueCheck}
          />
        ))}
    </IssueWrapperLayer>
  );
}

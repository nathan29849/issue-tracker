import { ACCESS_TOKEN } from '@constants/cookie';
import { IIssue } from '@interfaces/IIssue';
import { getCookie } from '@utils/cookie';

interface PostIssueRequestBody {
  title: 'string';
  content: 'string'; // Comment
  assigneesId: number[];
  labelsId: number[];
  milestoneId: number;
}

// queryString 추가해야함.
export const getIssues = async () => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/issues`);
  const issues = await response.json();

  // TODO: 에러 핸들링
  return issues;
};

export const getIssue = async (issueId?: string): Promise<IIssue> => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/issues/${issueId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
  const issue = await response.json();

  // TODO: 에러 핸들링
  return issue;
};

export const postIssue = async (
  requestBody: PostIssueRequestBody,
): Promise<{ issueId: number }> => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const issueData = await response.json();

  // TODO: 임시 로직 고치기
  if (!Object.hasOwn(issueData, 'issueId')) {
    throw Error('이슈 등록 실패');
  }

  return issueData;
};

export const patchIssueTitle = async (issueId: string, title: string) => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/issues/${issueId}/title`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    },
  );

  const responseData = await response.json();

  // TODO: 에러 핸들링

  return responseData;
};

export const deleteIssue = async (issueId: string) => {
  const accessToken = getCookie(ACCESS_TOKEN);

  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/issues/${issueId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  const responseData = await response.json();

  // TODO: 에러 핸들링

  return responseData;
};

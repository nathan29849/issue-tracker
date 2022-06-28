import { ACCESS_TOKEN } from '@constants/cookie';
import { getCookie } from '@utils/cookie';

interface PostIssueRequestBody {
  title: 'string';
  content: 'string'; // Comment
  assigneesId: number[];
  labelsId: number[];
  milestoneId: number;
}

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

  const data = await response.json();

  // TODO: 임시 로직 고치기
  if (!Object.hasOwn(data, 'issueId')) {
    throw Error('이슈 등록 실패');
  }

  return data;
};

import { ACCESS_TOKEN } from '@constants/cookie';
import { Label } from '@type/label';
import { getCookie } from '@utils/cookie';

export interface PostLabelRequestBody {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

export const getLabels = async (): Promise<Label[]> => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/labels`);
  const labelData = await response.json();

  // TODO: 에러핸들링

  return labelData;
};

export const postLabels = async (
  labelRequestBody: PostLabelRequestBody,
): Promise<{ labelId: number }> => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(labelRequestBody),
  });

  const labelData = await response.json();

  // TODO: 에러핸들링

  return labelData;
};

export const patchLabel = async (
  patchId: number,
  labelRequestBody: PostLabelRequestBody,
) => {
  const accessToken = getCookie(ACCESS_TOKEN);
  if (!patchId) throw new Error('id is undefined');
  if (!labelRequestBody) throw new Error('requestbody is undefined');

  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/issues/${patchId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(labelRequestBody),
    },
  );

  const labelData = await response.json();

  // TODO: 에러핸들링

  return labelData;
};

export const deleteLabel = async (
  deleteId: number,
): Promise<{ deleteId: number }> => {
  const accessToken = getCookie(ACCESS_TOKEN);

  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/milestones/${deleteId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const deleteData = await response.json();

  return deleteData;
};

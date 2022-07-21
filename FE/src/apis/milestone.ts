import { ACCESS_TOKEN } from '@constants/cookie';
import { MileStone, MileStoneRequestBody } from '@type/milestone';
import { getCookie } from '@utils/cookie';

export const getMileStones = async (): Promise<MileStone> => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/milestones`);
  const mileStoneData = await response.json();

  // TODO: 에러핸들링
  if (!mileStoneData) {
    throw new Error('mileStone get api fail');
  }

  return mileStoneData;
};

export const postMileStone = async (
  mileStoneRequestBody: MileStoneRequestBody,
): Promise<{ mileStoneId: number }> => {
  const accessToken = getCookie(ACCESS_TOKEN);
  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/milestones`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mileStoneRequestBody),
    },
  );

  const mileStoneData = await response.json();

  // TODO: 에러핸들링

  return mileStoneData;
};

export const patchMileStone = async (
  patchId: number,
  mileStoneRequestBody: MileStoneRequestBody,
) => {
  const accessToken = getCookie(ACCESS_TOKEN);
  if (!patchId) throw new Error('id is undefined');
  if (!mileStoneRequestBody) throw new Error('requestbody is undefined');

  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/issues/${patchId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mileStoneRequestBody),
    },
  );

  const mileStoneData = await response.json();

  // TODO: 에러핸들링

  return mileStoneData;
};

export const deleteMileStone = async (
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

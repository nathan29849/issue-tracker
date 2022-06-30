import { ACCESS_TOKEN } from '@constants/cookie';
import { MileStone } from '@type/milestone';
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

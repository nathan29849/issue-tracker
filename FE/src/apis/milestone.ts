import { MileStone } from '@type/milestone';

export const getMileStones = async (): Promise<MileStone[]> => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/milestones`);
  const mileStoneData = await response.json();

  // TODO: 에러핸들링

  return mileStoneData;
};

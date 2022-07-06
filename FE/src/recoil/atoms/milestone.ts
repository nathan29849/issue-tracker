import { atom } from 'recoil';

export interface IMileStoneTypes {
  id: number;
  title: string;
  description?: string;
  dueDate?: string;
}

export const mileStoneState = atom<{ info: IMileStoneTypes[] }>({
  key: 'mileStoneState',
  default: {
    info: [
      {
        id: 1,
        title: 'muffinMileStone한글네글',
        description: 'muffinMileStone한글네글 des',
      },
      {
        id: 2,
        title: 'colaMileStone한글셋',
        description: 'muffinMileStone한글셋 des',
      },
    ],
  },
});

import { atom } from 'recoil';

export interface IMileStoneTypes {
  id: number;
  name: string;
}

export const mileStoneState = atom<{ info: IMileStoneTypes[] }>({
  key: 'mileStoneState',
  default: {
    info: [
      {
        id: 1,
        name: 'muffinMileStone한글네글',
      },
      {
        id: 2,
        name: 'colaMileStone한글셋',
      },
    ],
  },
});

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
        name: '1주차 마일스톤',
      },
      {
        id: 2,
        name: '2주차 마일스톤',
      },
    ],
  },
});

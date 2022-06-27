import { atom } from 'recoil';

export interface ILabelTypes {
  id: number;
  color: string;
  name: string;
  darkText?: boolean;
}

export const labelState = atom<{ info: ILabelTypes[] }>({
  key: 'labelState',
  default: {
    info: [
      {
        id: 1,
        color: '#000000',
        name: 'colaLabel',
      },
      {
        id: 2,
        color: '#0025E7',
        name: 'muffinLabel',
      },
    ],
  },
});

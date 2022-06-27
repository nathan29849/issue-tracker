import { atom } from 'recoil';

export interface ILabelTypes {
  id: number;
  backgroundColor: string;
  title: string;
  textColor: string;
}

export const labelState = atom<{ info: ILabelTypes[] }>({
  key: 'labelState',
  default: {
    info: [
      {
        id: 1,
        backgroundColor: '#000000',
        title: 'colaLabel',
        textColor: 'BLACK',
      },
      {
        id: 2,
        backgroundColor: '#0025E7',
        title: 'muffinLabel',
        textColor: 'BLACK',
      },
    ],
  },
});

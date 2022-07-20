import { atom } from 'recoil';

import { ILabel } from '@interfaces/ILabel';

export const labelState = atom<{ info: ILabel[] }>({
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

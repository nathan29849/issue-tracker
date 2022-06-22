import { atom } from 'recoil';

export interface IAuthorTypes {
  id: number;
  imageUrl: string;
  name: string;
}

export const authorState = atom<{ info: IAuthorTypes[] }>({
  key: 'authorState',
  default: {
    info: [
      {
        id: 1,
        imageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        name: 'cola',
      },
      {
        id: 2,

        imageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        name: 'muffin',
      },
    ],
  },
});

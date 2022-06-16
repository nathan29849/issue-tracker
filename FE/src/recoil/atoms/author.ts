import { atom } from 'recoil';

export interface IAuthorTypes {
  id: number;
  content: { imageUrl: string; name: string };
}

export const authorState = atom<{ info: IAuthorTypes[] }>({
  key: 'userState',
  default: {
    info: [
      {
        id: 1,
        content: { imageUrl: 'image', name: 'cola' },
      },
      {
        id: 2,
        content: { imageUrl: 'image', name: 'muffin' },
      },
    ],
  },
});

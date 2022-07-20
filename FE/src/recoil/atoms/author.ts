import { atom } from 'recoil';

import { AuthorType } from '@type/user';

export interface IAuthorTypes {
  id: number;
  profileImageUrl: string;
  name: string;
}

export const authorState = atom<{ info: AuthorType[] }>({
  key: 'authorState',
  default: {
    info: [
      {
        userId: '1',
        profileImageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        username: 'cola',
      },
      {
        userId: '2',
        profileImageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        username: 'muffin',
      },
    ],
  },
});

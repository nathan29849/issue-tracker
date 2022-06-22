import { atom } from 'recoil';

interface IUserTypes {
  id: number;
  content: { imageUrl: string; name: string };
}

export const userState = atom<{ info: IUserTypes[] }>({
  key: 'userState',
  default: {
    info: [
      {
        id: 1,
        content: { imageUrl: 'image', name: 'assignee1' },
      },
      {
        id: 2,
        content: { imageUrl: 'image', name: 'assignee1' },
      },
    ],
  },
});

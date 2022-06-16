import { atom } from 'recoil';

interface IUserTypes {
  id: number;
  imageUrl: string;
  name: string;
}

export const userState = atom<IUserTypes>({
  key: 'userState',
  default: {
    id: 1,
    imageUrl: 'image',
    name: 'name',
  },
});

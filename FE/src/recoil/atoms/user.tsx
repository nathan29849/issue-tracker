import { atom } from 'recoil';

interface User {
  userId: string;
  userName: string;
  profileImageUrl: string;
}

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

import { selector } from 'recoil';

import { userState } from '@recoil/atoms/user';

export const userCountState = selector({
  key: 'userCountState',
  get: ({ get }) => {
    const { id, imageUrl, name } = get(userState);
    return imageUrl.length;
  },
});

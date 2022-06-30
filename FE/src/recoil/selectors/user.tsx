import { selector, useRecoilValue } from 'recoil';

import { defaultProfileImageUrl } from '@constants/default';
import { userState } from '@recoil/atoms/user';

export const userProfileImage = selector({
  key: 'userProfileImage',
  get: ({ get }) => {
    const user = get(userState);
    return user ? user.profileImageUrl : defaultProfileImageUrl;
  },
});

export const useProfileImage = () => {
  const profileImage = useRecoilValue(userProfileImage);
  return profileImage;
};

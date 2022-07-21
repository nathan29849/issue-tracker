import { useRecoilValue } from 'recoil';

import { userState } from '@recoil/atoms/user';

export const useIsLoggedIn = () => {
  const user = useRecoilValue(userState);
  return !!user;
};

export const useUserState = () => {
  const user = useRecoilValue(userState);

  if (!user) {
    throw new Error('Unknown user error');
  }

  return user;
};

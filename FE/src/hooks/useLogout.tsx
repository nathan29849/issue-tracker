import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constants/cookie';
import { userState } from '@recoil/atoms/user';
import { deleteCookie } from '@utils/cookie';

const loginPagePath = '/';

// 로그아웃
// 상태 세팅, 쿠키 지우고 로그인 페이지로 이동
export const useLogout = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const logout = useCallback(() => {
    setUser(null);
    deleteCookie([ACCESS_TOKEN, REFRESH_TOKEN]);
    navigate(loginPagePath);
  }, [navigate, setUser]);

  return logout;
};

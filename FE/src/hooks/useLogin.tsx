import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { githubLogin, githubSilentRefresh } from '@apis/login';
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  ACCESS_TOKEN_OPTIONS,
  REFRESH_TOKEN_OPTIONS,
} from '@constants/cookie';
import { userState } from '@recoil/atoms/user';
import { setCookie, deleteCookie } from '@utils/cookie';

const loginPagePath = '/';

// 최초 로그인
// 응답받은 Token을 쿠키에 넣고, User 정보를 전역 상태에 저장한다.
export const useLogin = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const login = async (searchParams: string) => {
    try {
      const { accessToken, refreshToken, userId, userName, profileImageUrl } =
        await githubLogin(searchParams);
      setCookie(ACCESS_TOKEN, accessToken, ACCESS_TOKEN_OPTIONS);
      setCookie(REFRESH_TOKEN, refreshToken, REFRESH_TOKEN_OPTIONS);
      setUser({ userId, userName, profileImageUrl });
    } catch (error) {
      console.error('Login Error: ', error);
    } finally {
      navigate(loginPagePath);
    }
  };

  return login;
};

// Silent Refresh
// 새로고침, 페이지 종료 후 재접속 등으로 User 상태가 사라졌을 때 사용
// Refresh Token 사용
// 성공한 경우 해당 페이지에 그대로 유지 (로그인 페이지라면 Issue 페이지로 이동)
// 만료된 경우 로그인 페이지로 이동한다.
export const useSilentRefresh = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const silentRefresh = async () => {
    try {
      const { accessToken, refreshToken, userId, userName, profileImageUrl } =
        await githubSilentRefresh();
      setCookie(ACCESS_TOKEN, accessToken, ACCESS_TOKEN_OPTIONS);
      setCookie(REFRESH_TOKEN, refreshToken, REFRESH_TOKEN_OPTIONS);
      setUser({ userId, userName, profileImageUrl });
    } catch (error) {
      console.error('Silent Refresh Error: ', error);
      deleteCookie([ACCESS_TOKEN, REFRESH_TOKEN]);
      navigate(loginPagePath);
    }
  };

  return silentRefresh;
};

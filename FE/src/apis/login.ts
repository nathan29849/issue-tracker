import { IUser } from '@interfaces/IUser';
import { getCookie } from '@utils/cookie';

interface UserData extends IUser {
  userId: string;
  username: string;
  profileImageUrl: string;
  accessToken: string;
  refreshToken: string;
}

export const githubLogin = async (searchParams: string): Promise<UserData> => {
  const response = await fetch(
    `${process.env.TEAM30_GITHUB_OAUTH_URL}/callback${searchParams}`,
  );
  const loginData = await response.json();

  // TODO: 명세 나오면 실패조건 다시 설정 => status OK 같은 상태로 처리해야 할까요?
  if (!Object.hasOwn(loginData, 'userId')) {
    throw Error('로그인 실패');
  }

  return loginData;
};

export const githubSilentRefresh = async (): Promise<UserData> => {
  const refreshToken = getCookie('refreshToken');
  const response = await fetch(
    `${process.env.TEAM30_GITHUB_OAUTH_URL}/refresh`,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    },
  );

  const tokenData = await response.json();
  // TODO: 명세 나오면 실패조건 다시 설정
  if (!Object.hasOwn(tokenData, 'userId')) {
    throw Error('로그인 실패');
  }

  return tokenData;
};

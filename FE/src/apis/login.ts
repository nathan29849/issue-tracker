interface User {
  userId: string;
  userName: string;
  profileImageUrl: string;
}

export const githubLogin = async (searchParams: string): Promise<User> => {
  const response = await fetch(
    `${process.env.TEAM30_GITHUB_OAUTH_URL}/callback${searchParams}`,
    // { credentials: 'include' },
  );
  const data = await response.json();

  if (!Object.hasOwn(data, 'userId')) {
    throw Error('로그인 실패');
  }

  return data;
};

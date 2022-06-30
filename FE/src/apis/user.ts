import { User } from '@type/user';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/users`);
  const userData = await response.json();

  // TODO: 에러핸들링

  return userData;
};

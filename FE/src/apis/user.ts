import { IUser } from '@interfaces/IUser';

export const getUsers = async (): Promise<IUser[]> => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/users`);
  const userData = await response.json();

  // TODO: 에러핸들링

  return userData;
};

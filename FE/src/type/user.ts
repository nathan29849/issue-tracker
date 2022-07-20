import { IUser } from '@interfaces/IUser';

export type AuthorType = Pick<IUser, 'userId' | 'profileImageUrl' | 'username'>;
export type AssigneeType = Pick<
  IUser,
  'userId' | 'profileImageUrl' | 'username'
>;

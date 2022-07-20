import { IUser } from './IUser';

import { CommentStatusType } from '@type/comment';

export interface IComment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: IUser;
  type: CommentStatusType;
}

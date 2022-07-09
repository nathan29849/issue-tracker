import { Label } from '@type/label';
import { IMileStone } from '@type/milestone';
import { User } from '@type/user';

export type CommentStatusType = 'NORMAL' | 'REOPEN' | 'CLOSED';

export interface CommentType {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  type: CommentStatusType;
}

export type IssueStatusType = 'OPEN' | 'CLOSED' | 'REOPEN';

export interface IssueStatus {
  status: IssueStatusType;
  editor: User;
}

export interface Issue {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  labels: Label[];
  milestone: IMileStone;
  author: User;
  assignees: User[];
  comments: CommentType[];
  issueStatus: IssueStatus;
}

export type FilterLabelTypes =
  | 'assignee'
  | 'label'
  | 'mileStone'
  | 'author'
  | 'checkBoxStatus';

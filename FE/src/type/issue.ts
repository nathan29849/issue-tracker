import { Label } from '@type/label';
import { IMileStone } from '@type/milestone';
import { User } from '@type/user';

export type CommentStatusType = 'NORMAL' | 'REOPEN' | 'CLOSED';

export interface Comment {
  content: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  type: CommentStatusType;
}

export type IssueStatusType = 'OPEN' | 'CLOSED' | 'REOPEN';

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
  comments: Comment[];
  issueStatus: {
    status: IssueStatusType;
    editor: User;
  };
}

export type FilterLabelTypes =
  | 'assignee'
  | 'label'
  | 'mileStone'
  | 'author'
  | 'checkBoxStatus';

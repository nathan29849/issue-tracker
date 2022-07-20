import { IComment } from './IComment';
import { ILabel } from './ILabel';
import { IMileStone } from './IMilestone';
import { IUser } from './IUser';

import { IssueStatusType } from '@type/issue';

export interface IIssueStatus {
  status: IssueStatusType;
  editor: IUser;
}

export interface IIssue {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  labels: ILabel[];
  milestone: IMileStone;
  author: IUser;
  assignees: IUser[];
  comments: IComment[];
  issueStatus: IIssueStatus;
}

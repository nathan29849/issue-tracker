import { IComment } from '@interfaces/IComment';

export type CommentStatusType = 'NORMAL' | 'REOPEN' | 'CLOSED';
export type CommentEditParams = IComment & {
  isEditable: boolean;
  isIssueAuthor: boolean;
};

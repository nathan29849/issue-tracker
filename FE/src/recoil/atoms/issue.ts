import { atom } from 'recoil';

export interface IIssueTypes {
  id: number;
  number: number; // 이슈 고유값
  status: string;
  title: string;
  manager: string[];
  labels: string[];
  milestone: string;
  author: object[];
  date: string;
}

export const issueState = atom<IIssueTypes[]>({
  key: 'issueState',
  default: [],
});

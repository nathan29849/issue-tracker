import { atom } from 'recoil';

import { IIssue } from '@interfaces/IIssue';

export const issueState = atom<IIssue[]>({
  key: 'issueState',
  default: [],
});

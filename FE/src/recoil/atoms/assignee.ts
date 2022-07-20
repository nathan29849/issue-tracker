import { atom } from 'recoil';

import { AssigneeType } from '@type/user';

type AssigneeStateTypes = { info: AssigneeType[] } & { none: boolean };

export const assigneeState = atom<AssigneeStateTypes>({
  key: 'assigneeState',
  default: {
    none: true,
    info: [
      {
        userId: '1',
        profileImageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        username: 'assignee1',
      },
      {
        userId: '2',
        profileImageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        username: 'assignee1',
      },
    ],
  },
});

import { atom } from 'recoil';

export interface IAssigneeTypes {
  id: number;
  content: { imageUrl: string; name: string };
}

type AssigneeStateTypes = { info: IAssigneeTypes[] } & { none: boolean };

export const assigneeState = atom<AssigneeStateTypes>({
  key: 'assigneeState',
  default: {
    none: true,
    info: [
      {
        id: 1,
        content: { imageUrl: 'image', name: 'assignee1' },
      },
      {
        id: 2,
        content: { imageUrl: 'image', name: 'assignee1' },
      },
    ],
  },
});

import { atom } from 'recoil';

export interface IAssigneeTypes {
  id: number;
  imageUrl: string;
  name: string;
}

type AssigneeStateTypes = { info: IAssigneeTypes[] } & { none: boolean };

export const assigneeState = atom<AssigneeStateTypes>({
  key: 'assigneeState',
  default: {
    none: true,
    info: [
      {
        id: 1,
        imageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        name: 'assignee1',
      },
      {
        id: 2,

        imageUrl: 'https://source.unsplash.com/user/erondu/20x20',
        name: 'assignee1',
      },
    ],
  },
});

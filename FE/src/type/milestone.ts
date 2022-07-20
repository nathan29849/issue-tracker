import { IMileStone } from '@interfaces/IMilestone';

export type MileStonePostParams = Pick<
  IMileStone,
  'title' | 'description' | 'dueDate'
>;

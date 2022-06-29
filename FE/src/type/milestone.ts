export interface MileStone {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  progressRate: number;
}

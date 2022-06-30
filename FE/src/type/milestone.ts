export interface IMileStone {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  openIssueCount: number;
  closedIssueCount: number;
}

export interface MileStone {
  currentMilestones: IMileStone[];
  expiredMilestones: IMileStone[];
  nullDueDateMilestones: IMileStone[];
}

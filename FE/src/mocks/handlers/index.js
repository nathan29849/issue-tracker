import { DeleteLabel } from './DeleteLabel';
import { DeleteMileStone } from './DeleteMileStone';
import { getIssue } from './GetIssue';
import { getIssues } from './GetIssues';
import { GetLabels } from './GetLabels';
import { GetMileStones } from './GetMileStones';
import { GetUsers } from './GetUsers';
import { GitHubLogin, RefreshGitHubLogin } from './GitHubLogin';
import { patchIssueTitle } from './PatchIssue';
import { PatchLabel } from './PatchLabel';
import { PatchMilestone } from './PatchMileStone';
import { PostImage } from './PostImage';
import { PostIssue } from './PostIssue';
import { PostLabels } from './PostLabels';
import { PostMileStones } from './PostMileStones';

export const handlers = [
  getIssue,
  patchIssueTitle,
  getIssues,
  GetLabels,
  PostLabels,
  DeleteLabel,
  PatchLabel,
  GitHubLogin,
  RefreshGitHubLogin,
  PostIssue,
  GetUsers,
  GetMileStones,
  PostMileStones,
  PatchMilestone,
  PostImage,
  DeleteMileStone,
];

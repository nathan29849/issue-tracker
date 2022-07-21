import { DeleteIssue } from './DeleteIssue';
import { DeleteLabel } from './DeleteLabel';
import { DeleteMileStone } from './DeleteMileStone';
import { GetIssue } from './GetIssue';
import { GetIssues } from './GetIssues';
import { GetLabels } from './GetLabels';
import { GetMileStones } from './GetMileStones';
import { GetUsers } from './GetUsers';
import { GitHubLogin, RefreshGitHubLogin } from './GitHubLogin';
import { patchIssueTitle } from './PatchIssue';
import { PatchLabel } from './PatchLabel';
import { PatchMilestone } from './PatchMileStone';
import { PostComment } from './PostComment';
import { PostImage } from './PostImage';
import { PostIssue } from './PostIssue';
import { PostLabels } from './PostLabels';
import { PostMileStones } from './PostMileStones';

export const handlers = [
  GitHubLogin,
  RefreshGitHubLogin,
  GetIssues,
  GetIssue,
  patchIssueTitle,
  PostIssue,
  DeleteIssue,
  GetLabels,
  PostLabels,
  DeleteLabel,
  PatchLabel,
  GetMileStones,
  PostMileStones,
  PatchMilestone,
  DeleteMileStone,
  GetUsers,
  PostImage,
  PostComment,
];

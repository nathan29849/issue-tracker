// src/mocks/handlers.js
import { rest } from 'msw';

import { DeleteLabel } from './DeleteLabel';
import { GetLabels } from './GetLabels';
import { GetMileStones } from './GetMileStones';
import { GetUsers } from './GetUsers';
import { GitHubLogin, RefreshGitHubLogin } from './GitHubLogin';
import { PatchLabel } from './PatchLabel';
import { PostImage } from './PostImage';
import { PostIssue } from './PostIssue';
import { PostLabels } from './PostLabels';

const getIssue = rest.get('/issue', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.delay(1000),
    ctx.json([
      {
        id: 1,
        number: 3,
        status: 'open',
        title: '로그인 페이지 기능 작업',
        manager: ['muffin', 'cola'],
        labels: ['feat', 'sub', 'bug'],
        milestone: '1주차 이슈트래커',
        author: [{ name: 'muffin', iamgeUrl: 'http://xxx' }],
        date: '2022-12-17T03:24:00',
      },
      {
        id: 2,
        number: 5, // 이슈 고유값
        status: 'close',
        title: '로그인 기능 작업',
        manager: ['muffin', 'cola'],
        labels: ['feat', 'sub', 'bug'],
        milestone: '2주차 이슈트래커',
        author: [{ name: 'cola', iamgeUrl: 'http://xxx' }],
        date: '2022-12-17T03:24:00',
      },
      {
        id: 3,
        number: 2, // 이슈 고유값
        status: 'close',
        title: '리팩토링 작업',
        manager: ['muffin', 'cola'],
        labels: ['feat', 'sub', 'bug'],
        milestone: '3주차 이슈트래커',
        author: [{ name: 'muffin', iamgeUrl: 'http://xxx' }],
        date: '2022-12-17T03:24:00',
      },
    ]),
  ),
);

export const handlers = [
  getIssue,
  GetLabels,
  PostLabels,
  DeleteLabel,
  PatchLabel,
  GitHubLogin,
  RefreshGitHubLogin,
  PostIssue,
  GetUsers,
  GetMileStones,
  PostImage,
];

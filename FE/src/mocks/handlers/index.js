// src/mocks/handlers.js
import { rest } from 'msw';

import { GetLabels } from './GetLabels';
import { GetMileStones } from './GetMileStones';
import { GetUsers } from './GetUsers';
import { GitHubLogin, RefreshGitHubLogin } from './GitHubLogin';
import { PostIssue } from './PostIssue';

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

const getLable = rest.get('/issue/label', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.delay(1000),
    ctx.json([
      {
        id: 81,
        backgroundColor: '#F7F7FC',
        title: 'duplicate',
        description: 'duplicate Des',
        textColor: 'BLACK',
      },
      {
        id: 82,
        backgroundColor: '#004DE3',
        title: 'documentation',
        description: 'documentation Des',
        textColor: 'WHITE',
      },
      {
        id: 83,
        backgroundColor: '#C60B00',
        title: 'bug',
        description: 'bug Des',
        textColor: 'WHITE',
      },
    ]),
  ),
);

const postLabel = rest.post('/issue/label', (req, res, ctx) => {
  const { title, backgroundColor, description, textColor } = JSON.parse(
    req.body,
  );

  return res(
    ctx.status(200),
    ctx.delay(1000),
    ctx.json({
      title,
      backgroundColor,
      description,
      textColor,
    }),
  );
});

export const handlers = [
  getIssue,
  getLable,
  postLabel,
  GetLabels,
  GitHubLogin,
  RefreshGitHubLogin,
  PostIssue,
  GetUsers,
  GetMileStones,
];

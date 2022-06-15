// src/mocks/handlers.js
import { rest } from 'msw';

const getUser = rest.get('/user', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.delay(2000),
    ctx.json({
      id: 120123123,
      username: 'sadjfaioij',
      password: 'dpofoqpwjer',
    }),
  ),
);

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
        status: 'open',
        title: '이슈 페이지 기능 작업',
        manager: ['muffin', 'cola'],
        labels: ['feat', 'sub', 'bug'],
        milestone: '1주차 이슈트래커',
        author: [{ name: 'muffin', iamgeUrl: 'http://xxx' }],
        date: '2022-12-17T03:24:00',
      },
    ]),
  ),
);

export const handlers = [getUser, getIssue];

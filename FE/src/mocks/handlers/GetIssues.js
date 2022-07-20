import { rest } from 'msw';

export const GetIssues = rest.get('/issue', (req, res, ctx) =>
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
        author: { username: 'muffin', profileImageUrl: 'http://xxx' },
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
        author: { username: 'cola', profileImageUrl: 'http://xxx' },
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
        author: { username: 'muffin', profileImageUrl: 'http://xxx' },
        date: '2022-12-17T03:24:00',
      },
      {
        id: 4,
        number: 10,
        status: 'open',
        title: '레이블 페이지 기능 작업',
        manager: ['muffin'],
        labels: ['feat', 'sub'],
        milestone: '3주차 이슈트래커',
        author: { username: 'muffin', profileImageUrl: 'http://xxx' },
        date: '2022-12-17T03:24:00',
      },
      {
        id: 5,
        number: 12,
        status: 'open',
        title: '이슈 생성 페이지 기능 작업',
        manager: ['cola'],
        labels: ['feat', 'sub'],
        milestone: '3주차 이슈트래커',
        author: { username: 'cola', profileImageUrl: 'http://xxx' },
        date: '2022-12-17T03:24:00',
      },
    ]),
  ),
);

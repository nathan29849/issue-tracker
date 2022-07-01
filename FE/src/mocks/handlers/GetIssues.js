import { rest } from 'msw';

const getIssue = rest.get(
  `${process.env.TEAM30_BASE_URL}/api/issues`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        {
          id: 1,
          status: 'OPEN',
          title: '로그인 페이지 기능 작업',
          manager: ['muffin', 'cola'],
          labels: [
            {
              id: 1,
              title: 'BUG',
              backgroundColor: '#fe2',
              textColor: 'BLACK',
            },
          ],
          milestone: {
            id: 1,
            title: '1주차 마일스톤',
            description: '마일스톤',
          },
          author: [
            {
              userId: 'muffin',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/45479309?v=4',
            },
          ],
          assignees: [
            {
              userId: 'mjsdo',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
            },
          ],
          createdAt: '2022-12-17T03:24:00',
        },
        {
          id: 2,
          status: 'CLOSED',
          title: '레이블 페이지 기능 작업',
          manager: ['muffin', 'cola'],
          labels: [
            {
              id: 1,
              title: 'BUG',
              backgroundColor: '#fe2',
              textColor: 'BLACK',
            },
          ],
          milestone: {
            id: 1,
            title: '1주차 마일스톤',
            description: '마일스톤',
          },
          author: [
            {
              userId: 'muffin',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/45479309?v=4',
            },
          ],
          assignees: [
            {
              userId: 'mjsdo',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
            },
          ],
          createdAt: '2022-12-17T03:24:00',
        },
        {
          id: 3,
          status: 'OPEN',
          title: '마일스톤 페이지 기능 작업',
          manager: ['muffin', 'cola'],
          labels: [
            {
              id: 1,
              title: 'BUG',
              backgroundColor: '#fe2',
              textColor: 'BLACK',
            },
          ],
          milestone: {
            id: 1,
            title: '1주차 마일스톤',
            description: '마일스톤',
          },
          author: [
            {
              userId: 'muffin',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/45479309?v=4',
            },
          ],
          assignees: [
            {
              userId: 'mjsdo',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
            },
          ],
          createdAt: '2022-12-17T03:24:00',
        },
      ]),
    ),
);

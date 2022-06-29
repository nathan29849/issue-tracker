import { rest } from 'msw';

export const GetMileStones = rest.get(
  `${process.env.TEAM30_BASE_URL}/api/milestones`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json([
        {
          id: 31,
          title: '1주차 마일스톤',
          description: '',
          createdAt: '2022-06-25T02:11:32.883Z',
          updatedAt: '2022-06-26T02:11:32.883Z',
          dueDate: '2022-06-29',
          progressRate: 42,
        },
        {
          id: 32,
          title: '2주차 마일스톤',
          description: '',
          createdAt: '2022-06-27T02:11:32.883Z',
          updatedAt: '2022-06-28T02:11:32.883Z',
          dueDate: '2022-06-29',
          progressRate: 56,
        },
        {
          id: 33,
          title: '3주차 마일스톤',
          description: 'dsfhgpoqke',
          createdAt: '2022-06-29T02:11:32.883Z',
          updatedAt: '2022-06-29T02:11:32.883Z',
          dueDate: '2022-07-01',
          progressRate: 7,
        },
      ]),
    ),
);

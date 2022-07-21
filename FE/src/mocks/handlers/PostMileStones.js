import { rest } from 'msw';

export const PostMileStones = rest.post(
  `${process.env.TEAM30_BASE_URL}/api/milestones`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        mileStoneId: 1,
      }),
    ),
);

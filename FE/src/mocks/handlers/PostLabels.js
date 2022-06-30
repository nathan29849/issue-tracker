import { rest } from 'msw';

export const PostLabels = rest.post(
  `${process.env.TEAM30_BASE_URL}/api/labels`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        postId: 1,
      }),
    ),
);

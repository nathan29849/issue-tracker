import { rest } from 'msw';

export const PostComment = rest.post(
  `${process.env.TEAM30_BASE_URL}/api/issues/:issueId/comments`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        status: 'success',
      }),
    ),
);

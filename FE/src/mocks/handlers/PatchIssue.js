import { rest } from 'msw';

export const patchIssueTitle = rest.patch(
  `${process.env.TEAM30_BASE_URL}/api/issues/:id/title`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        status: 'success',
      }),
    ),
);

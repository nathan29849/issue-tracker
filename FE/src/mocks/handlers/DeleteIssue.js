import { rest } from 'msw';

export const DeleteIssue = rest.delete(
  `${process.env.TEAM30_BASE_URL}/api/issues/:issueId`,
  (req, res, ctx) => {
    const { issueId } = req.params;

    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        status: 'success',
      }),
    );
  },
);

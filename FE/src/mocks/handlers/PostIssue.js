import { rest } from 'msw';

export const PostIssue = rest.post(
  `${process.env.TEAM30_BASE_URL}/api/issues`,
  (req, res, ctx) => {
    console.log(req.body);
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        issueId: 1,
      }),
    );
  },
);

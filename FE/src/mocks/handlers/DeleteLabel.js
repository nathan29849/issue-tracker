import { rest } from 'msw';

export const DeleteLabel = rest.delete(
  `${process.env.TEAM30_BASE_URL}/api/milestones/:deleteId`,
  (req, res, ctx) => {
    const { deleteId } = req.params;

    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        deleteId,
      }),
    );
  },
);

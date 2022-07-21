import { rest } from 'msw';

export const PatchLabel = rest.patch(
  `${process.env.TEAM30_BASE_URL}/api/label/:patchId`,
  (req, res, ctx) => {
    const { patchId } = req.params;
    const patchLabelData = req.body;
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        patchId,
        ...patchLabelData,
      }),
    );
  },
);

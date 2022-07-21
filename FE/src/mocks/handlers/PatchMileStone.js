import { rest } from 'msw';

export const PatchMilestone = rest.patch(
  `${process.env.TEAM30_BASE_URL}/api/milestones/:patchId`,
  (req, res, ctx) => {
    const { patchId } = req.params;
    const patchMilestoneData = req.body;
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json({
        patchId,
        ...patchMilestoneData,
      }),
    );
  },
);

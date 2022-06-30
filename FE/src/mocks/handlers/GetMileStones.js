import { rest } from 'msw';

export const GetMileStones = rest.get(
  `${process.env.TEAM30_BASE_URL}/api/milestones`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json({
        currentMilestones: [
          {
            id: 1,
            title: '코카콜라 마일스톤',
            description: '코카콜라 마일스톤1',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-08-20',
            openIssueCount: 10,
            closedIssueCount: 12,
          },
          {
            id: 4,
            title: '나단 마일스톤',
            description: '나단 마일스톤4',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-08-25',
            openIssueCount: 11,
            closedIssueCount: 40,
          },
          {
            id: 5,
            title: 'TEAM-30 마일스톤',
            description: 'team-30 마일스톤5',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-09-22',
            openIssueCount: 14,
            closedIssueCount: 31,
          },
        ],
        expiredMilestones: [
          {
            id: 2,
            title: '머핀 마일스톤',
            description: '머핀 마일스톤2',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-05-20',
            openIssueCount: 17,
            closedIssueCount: 9,
          },
          {
            id: 3,
            title: '루니 마일스톤',
            description: '루니 마일스톤3',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-06-20',
            openIssueCount: 13,
            closedIssueCount: 4,
          },
        ],
        nullDueDateMilestones: [
          {
            id: 6,
            title: 'Codesquard 마일스톤',
            description: 'codesquad 마일스톤6',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: null,
            openIssueCount: 10,
            closedIssueCount: 21,
          },
        ],
      }),
    ),
);

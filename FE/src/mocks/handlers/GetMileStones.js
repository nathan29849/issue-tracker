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
            title: '마일스톤1',
            description: '코카콜라 마일스톤1',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-08-20',
            openIssueCount: 0,
            closedIssueCount: 0,
          },
          {
            id: 4,
            title: '마일스톤4',
            description: '나단 마일스톤4',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-08-25',
            openIssueCount: 0,
            closedIssueCount: 0,
          },
          {
            id: 5,
            title: '마일스톤5',
            description: 'team-30 마일스톤5',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-09-22',
            openIssueCount: 0,
            closedIssueCount: 0,
          },
        ],
        expiredMilestones: [
          {
            id: 2,
            title: '마일스톤2',
            description: '머핀 마일스톤2',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-05-20',
            openIssueCount: 0,
            closedIssueCount: 0,
          },
          {
            id: 3,
            title: '마일스톤3',
            description: '루니 마일스톤3',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: '2022-06-20',
            openIssueCount: 0,
            closedIssueCount: 0,
          },
        ],
        nullDueDateMilestones: [
          {
            id: 6,
            title: '마일스톤6',
            description: 'codesquad 마일스톤6',
            createdAt: '2020-01-12 00:00:01',
            updatedAt: '2020-02-12 00:00:01',
            dueDate: null,
            openIssueCount: 0,
            closedIssueCount: 0,
          },
        ],
      }),
    ),
);

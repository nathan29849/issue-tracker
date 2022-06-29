import { rest } from 'msw';

export const GetLabels = rest.get(
  `${process.env.TEAM30_BASE_URL}/api/labels`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json([
        {
          id: 81,
          backgroundColor: '#F7F7FC',
          title: 'duplicate',
          description: 'duplicate Des',
          textColor: 'BLACK',
        },
        {
          id: 82,
          backgroundColor: '#004DE3',
          title: 'documentation',
          description: 'documentation Des',
          textColor: 'WHITE',
        },
        {
          id: 83,
          backgroundColor: '#C60B00',
          title: 'bug',
          description: 'bug Des',
          textColor: 'WHITE',
        },
      ]),
    ),
);

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
          backgroundColor: '#D93F0B',
          title: 'Fix',
          description: 'Fix Sth',
          textColor: 'WHITE',
        },
        {
          id: 82,
          backgroundColor: '#0075CA',
          title: 'Docs',
          description: 'Improvements or additions to documentation',
          textColor: 'WHITE',
        },
        {
          id: 83,
          backgroundColor: '#D73E4A',
          title: 'Bug',
          description: "Something isn't working",
          textColor: 'WHITE',
        },
        {
          id: 84,
          backgroundColor: '#76C3AC',
          title: 'BE',
          description: 'Backend',
          textColor: 'WHITE',
        },
        {
          id: 85,
          backgroundColor: '#ED828F',
          title: 'FE',
          description: 'Frontend',
          textColor: 'WHITE',
        },
        {
          id: 86,
          backgroundColor: '#E9DC03',
          title: 'Feature',
          description: 'Feature',
          textColor: 'BLACK',
        },
        {
          id: 87,
          backgroundColor: '#a2eeef',
          title: 'Enhancement',
          description: 'New feature or request',
          textColor: 'BLACK',
        },
        {
          id: 88,
          backgroundColor: '#7057ff',
          title: 'Good First Issue',
          description: 'Good for newcomers',
          textColor: 'WHITE',
        },
        {
          id: 89,
          backgroundColor: '#008672',
          title: 'Help Wanted',
          description: 'Extra attention is needed',
          textColor: 'WHITE',
        },
        {
          id: 90,
          backgroundColor: '#e4e669',
          title: 'Invalid',
          description: "This doesn't seem right",
          textColor: 'BLACK',
        },
        {
          id: 91,
          backgroundColor: '#cfd3d7',
          title: 'Duplicate',
          description: 'This issue or pull request already exists',
          textColor: 'BLACK',
        },
        {
          id: 92,
          backgroundColor: '#d876e3',
          title: 'Question',
          description: 'Further information is requested',
          textColor: 'WHITE',
        },
      ]),
    ),
);

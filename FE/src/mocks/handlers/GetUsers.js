import { rest } from 'msw';

export const GetUsers = rest.get(
  `${process.env.TEAM30_BASE_URL}/users`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json([
        {
          id: 1,
          userId: 'mjsdo',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
        },
        {
          id: 2,
          userId: 'muffin',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/45479309?v=4',
        },
        {
          id: 3,
          userId: 'nathan29849',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/67811880?v=4',
        },
      ]),
    ),
);

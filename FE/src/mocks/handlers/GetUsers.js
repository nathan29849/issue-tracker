import { rest } from 'msw';

export const GetUsers = rest.get(
  `${process.env.TEAM30_BASE_URL}/users`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(0),
      ctx.json([
        {
          userId: 'mjsdo',
          userName: 'abc',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
        },
        {
          userId: 'muffin',
          userName: 'def',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/45479309?v=4',
        },
        {
          userId: 'nathan29849',
          userName: 'ghi',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/67811880?v=4',
        },
      ]),
    ),
);

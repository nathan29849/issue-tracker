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
        {
          id: 4,
          userId: 'ldldz',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/11494626?v=4',
        },
        {
          id: 5,
          userId: 'kimyouknow',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/71386219?v=4',
        },
        {
          id: 6,
          userId: 'JinJeon',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/67730358?v=4',
        },
        {
          id: 7,
          userId: 'Serin-Kim',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/68533016?v=4',
        },
      ]),
    ),
);

import { rest } from 'msw';

export const GitHubLogin = rest.get(
  `${process.env.TEAM30_GITHUB_OAUTH_URL}/callback`,
  (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json({
        authId: '123',
        userId: 'mjsdo',
        username: 'mjsdo',
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        profileImageUrl:
          'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
      }),
    ),
);

export const RefreshGitHubLogin = rest.get(
  `${process.env.TEAM30_GITHUB_OAUTH_URL}/refresh`,
  (req, res, ctx) => {
    const authorizationValue = req.headers.get('authorization').split(' ')[1];
    if (authorizationValue !== 'refreshToken') {
      return res(
        ctx.status(400),
        ctx.delay(500),
        ctx.json({
          tokenExpired: true,
        }),
      );
    }

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        authId: '123',
        userId: 'mjsdo',
        username: 'mjsdo',
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
        profileImageUrl:
          'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
      }),
    );
  },
);

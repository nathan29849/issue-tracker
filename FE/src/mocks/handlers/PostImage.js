import { rest } from 'msw';

export const PostImage = rest.post(
  `${process.env.TEAM30_FILE_UPLOAD_URL}`,
  (req, res, ctx) => {
    console.log(req.body.files);
    const reqBody =
      req.body.files.length > 1 ? req.body.files : [req.body.files];
    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        reqBody.map(({ name }) => ({
          filename: name,
          imageUrl: 'url',
        })),
      ),
    );
  },
);

import { rest } from 'msw';

export const PostImage = rest.post(
  `${process.env.TEAM30_FILE_UPLOAD_URL}`,
  (req, res, ctx) => {
    const { files } = req.body;

    let reqBody;

    if (files) {
      reqBody = files.length > 1 ? files : [files];
    } else {
      reqBody = [];
    }

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

import { rest } from 'msw';

export const getIssue = rest.get(
  `${process.env.TEAM30_BASE_URL}/api/issues/:id`,
  (req, res, ctx) => {
    const {
      params: { id: issueId },
    } = req;

    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        id: issueId,
        title: `${issueId}번째 이슈`,
        content: '임시',
        createdAt: '2022-07-07T07:08:25.157Z',
        updatedAt: '2022-07-08T05:44:26.264Z',
        labels: [
          {
            id: 0,
            title: 'Label1',
            description: 'Label description',
            backgroundColor: '#ffee00',
            textColor: 'BLACK',
          },
          {
            id: 1,
            title: 'Label2',
            description: 'Label description',
            backgroundColor: '#ff7700',
            textColor: 'BLACK',
          },
        ],
        milestone: {
          id: 0,
          title: '코드스쿼드 마일스톤',
          description: '마일스톤 설명',
          createdAt: '2022-07-08T05:44:26.264Z',
          updatedAt: '2022-07-08T05:44:26.264Z',
          dueDate: '2022-07-08',
          openIssueCount: 10,
          closedIssueCount: 16,
        },
        author: {
          userId: 'mjsdo',
          authId: '123',
          username: 'username123',
          profileImageUrl:
            'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
        },
        assignees: [
          {
            userId: 'mjsdo',
            authId: '123',
            username: 'username123',
            profileImageUrl:
              'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
          },
          {
            userId: 'muffin',
            authId: '1234',
            username: 'username123',
            profileImageUrl:
              'https://avatars.githubusercontent.com/u/45479309?v=4',
          },
          {
            userId: 'nathan29849',
            authId: '12345',
            username: 'username123',
            profileImageUrl:
              'https://avatars.githubusercontent.com/u/67811880?v=4',
          },
        ],
        comments: [
          {
            content:
              '작성된코멘트\n ![사진](https://avatars.githubusercontent.com/u/79135734?s=96&v=4) \n코멘트코멘트입니다입니다.',
            createdAt: '2022-07-08T05:44:26.264Z',
            updatedAt: '2022-07-08T05:44:26.264Z',
            author: {
              id: 0,
              authId: '123',
              username: 'mjsdo',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
            },
            type: 'NORMAL',
          },
          {
            content:
              'AS FA SD FA\n AS DF AS DF AS FA SF AS FA SD FA SD FA SF AS FA SF AS DF AS DF AS FA SF ASF',
            createdAt: '2022-07-08T05:44:26.264Z',
            updatedAt: '2022-07-08T05:44:26.264Z',
            author: {
              id: 0,
              authId: '123',
              username: 'mjsdo',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
            },
            type: 'NORMAL',
          },
          {
            content: '',
            createdAt: '2022-07-08T05:44:26.264Z',
            updatedAt: '2022-07-08T05:44:26.264Z',
            author: {
              id: 0,
              authId: '123',
              username: 'mjsdo',
              profileImageUrl:
                'https://avatars.githubusercontent.com/u/79135734?s=96&v=4',
            },
            type: 'CLOSED',
          },
        ],
        issueStatus: 'CLOSED',
      }),
    );
  },
);

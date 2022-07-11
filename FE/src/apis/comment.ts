import { ACCESS_TOKEN } from '@constants/cookie';
import { getCookie } from '@utils/cookie';

interface PostCommentResponseBody {
  status: 'success' | 'fail';
}

export const postComment = async (
  issueId: string,
  content: string,
): Promise<PostCommentResponseBody> => {
  const response = await fetch(
    `${process.env.TEAM30_BASE_URL}/api/issues/${issueId}/comments`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getCookie(ACCESS_TOKEN)}`,
      },
      body: JSON.stringify({ content }),
    },
  );

  if (!response.ok) {
    return { status: 'fail' };
  }

  return { status: 'success' };
};

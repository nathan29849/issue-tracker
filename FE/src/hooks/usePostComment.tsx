import { useMutation, useQueryClient } from 'react-query';

import { postComment } from '@apis/comment';

export const usePostComment = (issueId: string) => {
  const queryClient = useQueryClient();
  const { mutate, mutateAsync, isLoading } = useMutation(
    (content: string) => postComment(issueId, content),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['issueDetail']);
      },
    },
  );

  return { mutate, mutateAsync, isLoading };
};

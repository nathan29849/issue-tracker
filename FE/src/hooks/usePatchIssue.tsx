import { useMutation, useQueryClient } from 'react-query';

import { patchIssueTitle } from '@apis/issue';

export const usePatchIssueTitle = (issueId: string) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (title: string) => patchIssueTitle(issueId, title),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['issueDetail']);
      },
      onError: () => {
        globalThis.alert('제목 편집에 실패했습니다.');
      },
    },
  );

  return { mutate, isLoading };
};

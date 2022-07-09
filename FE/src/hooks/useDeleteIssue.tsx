import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { deleteIssue } from '@apis/issue';

const issuePage = '/issue';

export const useDeleteIssue = (issueId: string) => {
  const navigate = useNavigate();
  const { mutate, mutateAsync, isLoading } = useMutation(
    () => deleteIssue(issueId),
    {
      onSuccess: () => {
        globalThis.alert('이슈를 성공적으로 삭제했습니다.');
        navigate(issuePage);
      },
      onError: () => {
        globalThis.alert('이슈 삭제에 실패했습니다.');
      },
    },
  );

  return { mutate, mutateAsync, isLoading };
};

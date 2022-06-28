import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postIssue } from '@apis/issue';

export const usePostIssue = () => {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    (requestBody: any) => postIssue(requestBody),
    {
      onSuccess: data => {
        globalThis.alert('이슈를 성공적으로 등록하였습니다!');
        navigate(`/issue/${data.issueId}`);
      },
      onError: () => {
        globalThis.alert('이슈 등록에 실패했습니다.');
      },
    },
  );

  return { mutate, isLoading };
};

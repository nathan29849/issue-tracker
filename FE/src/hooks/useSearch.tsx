import { useSearchParams } from 'react-router-dom';

// 서치 파라미터중 특정 키에 해당하는 값을 반환하는 Hook
export const useSearch = (key: string, defaultValue: string) => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get(key);

  return searchValue ?? defaultValue;
};

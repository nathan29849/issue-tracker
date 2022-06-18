import { useSearchParams } from 'react-router-dom';

export const useSearch = (
  paramKey: string,
  defaultValue: string,
  sep = ':',
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(paramKey) ?? defaultValue;

  const add = (key: string, value: string) => {
    const targetString = [key, value].join(sep);
    if (paramValue.includes(targetString)) {
      return;
    }
    const newSearchParams = `${paramKey}=${paramValue} ${targetString}`;
    setSearchParams(newSearchParams);
  };

  return { paramValue, add };
};

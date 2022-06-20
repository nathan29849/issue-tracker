import { useSearchParams } from 'react-router-dom';

export const useSearch = (
  paramKey: string,
  defaultValue: string,
  sep = ':',
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(paramKey) ?? defaultValue;

  const add = (param1: string | { paramValue: string }, param2?: string) => {
    const [key, value] =
      typeof param1 === 'string'
        ? [param1, param2]
        : param1.paramValue.split(sep);

    const targetString = [key, value].join(sep);

    if (paramValue.includes(targetString)) {
      return;
    }

    const newSearchValue = `${paramValue} ${targetString}`.trim();
    const newSearchParams = `${paramKey}=${newSearchValue}`;
    setSearchParams(newSearchParams);
  };

  const replace = (key: string, value: string) => {
    const targetString = [key, value].join(sep);
    const regex = new RegExp(`${key}${sep}\\w*`, 'g');

    if (paramValue.includes(targetString)) {
      return;
    }

    const newParamValue = `${paramValue
      .replace(regex, '')
      .split(' ')
      .filter(Boolean)
      .join(' ')} ${targetString}`.trim();
    const newSearchParams = `${paramKey}=${newParamValue}`;

    setSearchParams(newSearchParams);
  };

  const init = (param1: string | { paramValue: string }, param2?: string) => {
    if (typeof param1 === 'string') {
      const [key, value] = [param1, param2];

      setSearchParams(`${paramKey}=${key}${sep}${value}`);
      return;
    }

    setSearchParams(`${paramKey}=${param1.paramValue}`);
  };

  return { paramValue, add, replace, init };
};

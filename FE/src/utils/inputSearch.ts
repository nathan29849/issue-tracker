import { issueFilterKeys } from '@constants/default';

export const checkSearchParamKey = (searchValue: string) => {
  const parsingValue = searchValue.split(' ');

  for (let i = 0; i < parsingValue.length; i += 1) {
    const key = parsingValue[i].split(':')[0];
    if (!issueFilterKeys.includes(key)) return false;
  }

  return true;
};

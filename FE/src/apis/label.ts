import { Label } from '@type/label';

export const getLabels = async (): Promise<Label[]> => {
  const response = await fetch(`${process.env.TEAM30_BASE_URL}/api/labels`);
  const data = await response.json();

  // TODO: 에러핸들링

  return data;
};

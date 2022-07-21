export const checkDueDate = (dueDate: string) => {
  const pattern = /^(19|20)\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/;
  return pattern.test(dueDate);
};

export const checkDueDate = (dueDate: string) => {
  const pattern = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/;
  return pattern.test(dueDate);
};

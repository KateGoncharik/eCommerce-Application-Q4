export const formatCategoryKey = (key: string): string => {
  const splittedKey = key.split(' ');
  return splittedKey.join('_');
};

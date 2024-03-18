export const deleteProperty = (
  obj: Record<string, string[]>,
  propertyToDelete: string,
) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, _]) => key !== propertyToDelete),
  );
};

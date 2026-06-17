export function getRandomKey<T extends Record<string, unknown>>(
  obj: T,
  excludedKey?: keyof T | string,
) {
  const keys = Object.keys(obj).filter((key) => key !== excludedKey);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

export function getRandomKey(obj: any) {
  let keys = Object.keys(obj);
  let randomIndex = Math.floor(Math.random() * keys.length);
  return keys[randomIndex];
}

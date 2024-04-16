export const deepClone = <T extends { [key: string]: any }>(object: T) =>
  JSON.parse(JSON.stringify(object));

export function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}


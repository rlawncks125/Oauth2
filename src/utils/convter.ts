export const convterObjectToArray = <T extends Object>(obj: T) =>
  Object.keys(obj) as Array<keyof T>;

export const getItem = (key:string) => JSON.parse(localStorage.getItem(key) as string)

export const setItem = (key: string, data: any) => {
  return localStorage.setItem(key, JSON.stringify(data));
};
import { validateEmpty } from "../validateEmpty";

export const validateEmail = (str: string): boolean => {
  if (!validateEmpty(str)) return false;
  const result = str.toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return result ? true : false
  
};

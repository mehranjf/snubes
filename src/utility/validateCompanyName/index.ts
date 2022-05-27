import { validateEmpty } from "../validateEmpty";

export const validateCompanyName = (str: string): boolean => {
  if (!validateEmpty(str)) return false;
  if (str.length > 80) return false;
  return /^[a-zA-Z\s., ]+$/.test(str);
};

import { validateEmpty } from "../validateEmpty"

export const validateName = (str:string):boolean => {
    if(!validateEmpty(str)) return false;
    if (str.length > 50) return false;
    return true;
}
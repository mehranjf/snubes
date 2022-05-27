export const validateEmpty = (str:string):boolean =>{
    if(str.trim() === ""){
        return false;
    }
    return true;
}
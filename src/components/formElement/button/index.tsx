import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  row?: boolean
}
const FormButton = ({ text,row=true, ...otherProps }: ButtonProps) => {
  return (
    <ButtonStyle row={row}>
      <button {...otherProps}>{text}</button>
    </ButtonStyle>
  );
};
export default FormButton;

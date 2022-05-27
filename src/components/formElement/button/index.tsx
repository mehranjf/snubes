import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./style";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const FormButton = ({ text, ...otherProps }: ButtonProps) => {
  return (
    <ButtonStyle>
      <button {...otherProps}>{text}</button>
    </ButtonStyle>
  );
};
export default FormButton;

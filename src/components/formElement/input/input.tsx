import React, { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { InputStyle } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  ref: string;
  row?: boolean;
  error: boolean;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label,error, row = true, ...otherProps },
  ref
) => {
  return (
    <InputStyle row={row} >
      <span className="label text">{label}</span>
      <input {...otherProps} name={name} ref={ref} className={error ? "error text":"text"}/>
    </InputStyle>
  );
};

const FormInput = React.forwardRef(Input);

export default FormInput;

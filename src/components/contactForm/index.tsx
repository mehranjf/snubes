import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fillContact } from "../../redux/reducer/contactSlice";
import { validateCompanyName } from "../../utility/validateCompanyName";
import { validateEmail } from "../../utility/validateEmail";
import { validateName } from "../../utility/validateName";
import FormButton from "../formElement/button";
import FormInput from "../formElement/input/input";
import PhoneNumber from "../formElement/phoneNumber";
import { ContactFormStyle } from "./style";

const ContactForm = () => {
  const companyRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef("");
  const [companyError, setCompanyError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const dispatch = useDispatch();
  const handleSendForm = () => {
    let companyErrorFlag = false;
    let nameErrorFlag = false;
    let emailErrorFlag = false;
    let phoneErrorFleg = false;
    if (
      !validateCompanyName(
        companyRef.current?.value ? companyRef.current?.value : ""
      )
    ) {
      companyErrorFlag = true;
      setCompanyError(true);
    }
    if (!validateName(nameRef.current?.value ? nameRef.current?.value : "")) {
      nameErrorFlag = true;
      setNameError(true);
    }
    if (
      !validateEmail(emailRef.current?.value ? emailRef.current?.value : "")
    ) {
      emailErrorFlag = true;
      setEmailError(true);
    }
    if (phoneRef.current.length < 8) {
      phoneErrorFleg = true;
      setPhoneError(true);
    }
    if (companyErrorFlag || nameErrorFlag || emailErrorFlag || phoneErrorFleg) {
      return;
    }
    dispatch(
      fillContact({
        company: companyRef.current?.value ? companyRef.current?.value : "",
        name: nameRef.current?.value ? nameRef.current?.value : "",
        phone: phoneRef.current,
        email: emailRef.current?.value ? emailRef.current?.value : "",
      })
    );
  };
  return (
    <ContactFormStyle>
      <FormInput
        label="company"
        name="company"
        placeholder="Company"
        ref={companyRef}
        maxLength={80}
        error={companyError}
        onChange={() => setCompanyError(false)}
      />
      <FormInput
        label="name"
        name="name"
        placeholder="Full name"
        ref={nameRef}
        maxLength={50}
        error={nameError}
        onChange={() => setNameError(false)}
      />
      <PhoneNumber
        label="Phone"
        phoneRef={phoneRef}
        error={phoneError}
        setPhoneError={setPhoneError}
      />
      <FormInput
        label="E-mail"
        name="email"
        placeholder="name@mail.com"
        ref={emailRef}
        type={"email"}
        error={emailError}
        onChange={() => setEmailError(false)}
      />
      <FormButton text="Get informed" onClick={handleSendForm} />
    </ContactFormStyle>
  );
};
export default ContactForm;

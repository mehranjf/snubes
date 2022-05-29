import { useEffect, useState } from "react";
import { PhoneNumberStyle } from "./style";
import PhoneInput, {
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import { CountryCode } from "libphonenumber-js/types";
interface phoneNumberType {
  label: string;
  row?: boolean;
  phoneRef: React.MutableRefObject<string>;
  error: boolean;
  setPhoneError: React.Dispatch<React.SetStateAction<boolean>>;
}
const PhoneNumber = ({ label, row = true, phoneRef,error,setPhoneError }: phoneNumberType) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<CountryCode>("DE");
  useEffect(() => {
    getGeoInfo();
  }, []);
  const getGeoInfo = () => {
    axios.get("https://ipapi.co/json/").then((response: any) => {
      setCountryCode(response.data.country_code);
    })
    .catch(()=>{
      console.log("error on api call")
    })
  };
  return (
    <PhoneNumberStyle row={row}>
      <label className={error ? "error": ""}>
        <span className="label">{label}</span>
        <PhoneInput
          international
          initialValueFormat="national"
          defaultCountry={countryCode}
          value={phone}
          onChange={(value) => {
            setPhone(value ? value?.toString() : "");
            phoneRef.current = value ? value?.toString() : "";
            setPhoneError(false);
          }}
        />
      </label>
    </PhoneNumberStyle>
  );
};
export default PhoneNumber;

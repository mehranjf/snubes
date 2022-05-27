import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ContactForm from "../../contactForm";
import { SliderContactStyle } from "./style";

const SliderContact = () => {
  const { company, name, email, phone } = useSelector(
    (state: RootState) => state.contact
  );
  return (
    <SliderContactStyle>
      <div className="sliderContact">
        {company ? (
          <>
            <h3>Thank you for your request!</h3>
            <span>
              You’ve taken the first step. Our experts will get in touch with
              you soon.
            </span>
            <div className="sliderContactFormInfo">
              <div>
                <span>Company</span>
                <h4 className="title">{company}</h4>
              </div>
              <div>
                <span>Name</span>
                <h4 className="title">{name}</h4>
              </div>
              <div>
                <span>Phone</span>
                <h4 className="title">{phone}</h4>
              </div>
              <div>
                <span>Email</span>
                <h4 className="title">{email}</h4>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3>Find inbound call centers for your company</h3>
            <span>
              Use our AI and Big Data driven call center sourcing solution
            </span>
            <div className="sliderContactForm">
              <ContactForm />
            </div>
          </>
        )}
      </div>
    </SliderContactStyle>
  );
};
export default SliderContact;

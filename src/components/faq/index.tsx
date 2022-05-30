import { faqData } from "./data";
import { FaqStyle } from "./style";
import internet from "../../assets/images/internet.jpg";
import ContactForm from "../contactForm";
const Faq = () => {
  return (
    <FaqStyle>
      <div className="container">
        <div className="faqWraper">
          <div className="faqTxt">
            <h2 className="mainTitle">Frequently Asked Questions</h2>
            {faqData
              ? faqData.map((item, index) => {
                  return (
                    <div className="faqItem" key={index}>
                      <h3 className="title">{item.title}</h3>
                      <p className="text">{item.text}</p>
                    </div>
                  );
                })
              : null}
            <div className="faqImg">
              <img src={internet} alt="isp" />
            </div>
          </div>
          <div className="faqForm">
            <div className="faqFormWrapper">
              <div className="faqFormTitle">
                <h4 className="mainTitle">Find inbound call centers</h4>
              </div>
              <div className="faqFormContact">
                  <ContactForm row={false}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};
export default Faq;

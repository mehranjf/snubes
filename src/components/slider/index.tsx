import { sliderData } from "./data";
import SliderContact from "./sliderContact";
import { SliderStyle } from "./style";

const Slider = () => {
  return (
    <SliderStyle>
      <div className="sliderWrapper">
        <div className="container">
          <div className="sliderItems">
            <div className="contactPart">
              <SliderContact />
            </div>

            <div className="honourPart">
              <h1>Welcome to Europe’s largest call center database</h1>
              {sliderData ? (
                <div className="honour">
                  {sliderData.map((item) => {
                    return (
                      <div className="honourItem" key={item.title}>
                        <span>{item.number}</span>
                        <h3>{item.title}</h3>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </SliderStyle>
  );
};
export default Slider;

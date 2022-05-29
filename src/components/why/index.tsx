import { whyData } from "./data";
import { WhyStyle } from "./style";
import laptop from "../../assets/images/laptop.jpg";
import pen from "../../assets/images/pen.jpg";
import useWindowDimensions from "../../shared/customHook/useWindowDimensions";

const Why = () => {
  const { width } = useWindowDimensions();
  return (
    <WhyStyle>
      {width > 480 ? (
        <img alt="laptop" src={laptop} className="laptop" />
      ) : null}
      {width > 992 ? <img alt="laptop" src={pen} className="pen" /> : null}

      <div className="smallContainer">
        <h2 className="mainTitle">Why Snubes?</h2>
        {whyData ? (
          <div className="whyData">
            {whyData.map((item) => {
              return (
                <div className="whyDataItem" key={item.title}>
                  <h3 className="title">{item.title}</h3>
                  <p className="text">{item.text}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </WhyStyle>
  );
};
export default Why;

import { featureData } from "./data";
import { FeaturesStyle } from "./style";

const Features = () => {
  return (
    <FeaturesStyle>
      <div className="container">
        <div className="featureWraper">
          {featureData
            ? featureData.map((item) => {
                return (
                  <div className="featureItem" key={item.title}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3 className="title">{item.title}</h3>
                      <p className="text">{item.text}</p>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </FeaturesStyle>
  );
};
export default Features;

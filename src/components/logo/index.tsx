import { logoData } from "./data";
import { LogoStyle } from "./style";

const Logo = () => {
  return (
    <LogoStyle>
      <div className="container">
        <div className="logoWrapper">
          {logoData
            ? logoData.map((item,index) => {
                return <img src={item} alt="logo" key={index}/>;
              })
            : null}
        </div>
      </div>
    </LogoStyle>
  );
};
export default Logo;

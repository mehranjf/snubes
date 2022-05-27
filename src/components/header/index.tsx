import { HeaderStyle } from "./style";
import logo from "../../assets/images/snubes-logo.svg";
import { headerData } from "./data";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "../svg/hamburger";
import useWindowDimensions from "../../shared/customHook/useWindowDimensions";
import Menu from "./menu";
const Header = () => {
  const { width } = useWindowDimensions();
  return (
    <HeaderStyle>
      <div className="container">
        <div className="headerWraper">
          <div className="logo">
            <Link to="https://www.snubes.com/">
              <img src={logo} alt="snubes-logo" />
            </Link>
          </div>
          {width < 992 ? (
            <span className="hamburgerIcon">
              <HamburgerIcon />
            </span>
          ) : (
            <div className="menu">
              {headerData ? (
                <Menu data={headerData}/>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </HeaderStyle>
  );
};
export default Header;

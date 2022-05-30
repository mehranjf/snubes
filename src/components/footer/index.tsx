import { Link } from "react-router-dom";
import { CopyRightStyle, FooterStyle } from "./style";
import internet from "../../assets/images/internet.jpg";
import useWindowDimensions from "../../shared/customHook/useWindowDimensions";
const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <>
      <FooterStyle>
        <div className="container">
          <div className="footerWrapper">
            {width > 768 ? (
              <div className="footerItem">
                <img src={internet} alt="isp" />
              </div>
            ) : null}

            <div className="footerItem">
              <ul>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">Become a Partner</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="footerItem">
              <ul>
                <li>
                  <Link to="/">Imprint</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footerItem">
              <ul>
                <li>
                  <Link to="/">support@snubes.com</Link>
                </li>
                <li>
                  <Link to="/">+49 (0) 305 5645327</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FooterStyle>
      <CopyRightStyle>© 2019 Snubes GmbH All Rights Reserved.</CopyRightStyle>
    </>
  );
};
export default Footer;

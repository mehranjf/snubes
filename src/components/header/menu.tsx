import { Link } from "react-router-dom";
import { colors } from "../../shared/color";
import { ArrowDown } from "../svg/arrowDown";
import { menuDataType } from "./type";

const Menu = ({data}:{data:Array<menuDataType>}) => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li key={item.name + index}>
            <Link to={item.link}>
              {item.name}
              {item.children ? (
                <span>
                  <ArrowDown color={colors.gray[900]} />
                </span>
              ) : null}
            </Link>
            {item.children ? (
              <ul>
                {item.children.map((childItem, childIndex) => {
                  return (
                    <li key={childItem.name + childIndex}>
                      <Link to={childItem.link}>{childItem.name}</Link>
                    </li>
                  );
                })}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
};
export default Menu;

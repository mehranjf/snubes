import styled from "styled-components";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";

export const FooterStyle = styled.footer`
  background-color: ${colors.black[500]};
  padding: 2rem 0;
  .footerWrapper {
    display: flex;
    justify-content: space-between;
    .footerItem {
      li {
        margin-bottom: 0.875rem;
        a {
          color: ${colors.white};
          font-size: 1.063rem;
          line-height: 1.25rem;
        }
      }
    }
    @media all and (max-width: ${size.medium}) {
      flex-wrap: wrap;
      .footerItem {
        width: 100%;
        text-align:center ;
      }
    }
  }
`;

import styled from "styled-components";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";

export const LogoStyle = styled.section`
  padding-bottom: 3rem;
  border-bottom: solid 0.625rem ${colors.gray[200]};
  .logoWrapper {
    display: flex;
    justify-content: space-between;
    img {
      height: 2.25rem;
      width: auto;
      margin: 1rem;
    }
    @media all and (max-width: ${size.medium}) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

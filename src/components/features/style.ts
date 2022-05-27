import styled from "styled-components";
import { size } from "../../shared/size";

export const FeaturesStyle = styled.section`
  padding: 2rem 0;
  .featureWraper {
    display: flex;
    justify-content: space-between;
    gap: 2.5rem;
    .featureItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      img {
        height: 82px;
        width: auto;
      }
      h3 {
        margin: 0.3rem 0;
      }
    }
    @media all and (max-width: ${size.medium}) {
      flex-wrap: wrap;
      .featureItem{
          width: 100%;
          flex-direction: row;
          text-align: left;
          &>div{
              padding-left: 1rem;
          }
      }
    }
  }
`;

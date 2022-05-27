import styled from "styled-components";
import { colors } from "../../../shared/color";
import { size } from "../../../shared/size";

export const SliderContactStyle = styled.div`
  .sliderContact {
    background-color: ${colors.white};
    padding: 1.5rem 2.2rem;
    border-radius: 0.5rem;
    h3 {
      font-size: 1.6rem;
      text-align: center;
      line-height: 2.375rem;
      font-weight: bold;
    }
    span {
      display: block;
      font-size: 1.125rem;
      text-align: center;
      line-height: 1.75rem;
    }
    .sliderContactForm {
      margin-top: 1rem;
    }
    .sliderContactFormInfo {
      margin-top: 1.87rem;
      padding-top: 1.87rem;
      border-top: solid 1px ${colors.gray[100]};
      & > div {
        display: flex;
        margin-bottom: 1.25rem;
        justify-content: center;
        span {
          display: inline-block;
          width: 7rem;
          text-align: left;
        }
        h4 {
          width: 15rem;
          max-width: calc(100% - 7rem);
          font-weight: bold;
        }
      }
    }
    @media all and (max-width: ${size.small}) {
      .sliderContactFormInfo {
        & > div {
          flex-direction: column;
          span{
            width: 100%;
          }
          h4{
            width: 100%;
            max-width: 100%;
          }
        }
      }
    }
  }
  @media all and (max-width: ${size.large}) {
    .sliderContact {
      padding: 1.5rem 1rem;
      .sliderContactForm {
        text-align: center;
        & > div {
          display: inline-block;
          max-width: 100%;
        }
      }
    }
  }
`;

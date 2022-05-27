import styled from "styled-components";
import sliderBg from "../../assets/images/sliderBg.jpg";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";

export const SliderStyle = styled.section`
  .sliderWrapper {
    width: 100%;
    background-image: url(${sliderBg});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1.25rem 0;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: linear-gradient(
        to bottom,
        rgba(68, 85, 102, 0),
        rgba(68, 85, 102, 0.75)
      );
    }
    .sliderItems {
      display: flex;
      align-items: flex-end;
      position: relative;
      & > div {
        width: 50%;
        &.honourPart {
          padding-left: 2rem;
          color: ${colors.white};
          h1,
          h3,
          span {
            text-shadow: 0 0 5px rgba(68, 85, 102, 0.5);
          }
          h1 {
            font-size: 1.125rem;
            line-height: 1.75rem;
            font-weight: bold;
          }
          .honour {
            display: flex;
            margin: 0.6rem 0;
            gap: 2.8rem;
            @media all and (max-width: 1100px) {
              gap: 2rem;
            }
            .honourItem {
              span {
                font-size: 2rem;
                line-height: 2rem;
                font-weight: bold;
              }
              h3 {
                font-weight: 400;
                font-size: 1.125rem;
                line-height: 1.75rem;
              }
            }
          }
        }
      }
    }
  }
  @media all and (max-width: ${size.large}) {
    .sliderWrapper {
      .sliderItems {
        .honourPart {
          width: 100%;
          h1 {
            text-align: center;
          }
          .honour {
            justify-content: center;
            .honourItem{
              text-align: center;
            }
          }
        }
      }
    }
  }
  @media all and (max-width: ${size.small}) {
    .sliderWrapper {
      .sliderItems {
        .honourPart {
          
          h1 {
            text-align: center;
          }
          .honour {
            flex-wrap: wrap;;
            gap: 0 !important;
            .honourItem{
              padding: 0.75rem;
              text-align: center;
              width: 50%;
            }
          }
        }
      }
    }
  }
`;

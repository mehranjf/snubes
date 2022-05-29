import styled from "styled-components";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";
export const CommentStyle = styled.section`
  padding: 3.75rem 0;
  .commentItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
    q {
      display: block;
      margin: 2.5rem 0 1.75rem 0;
      font-style: italic;
    }
    b {
      font-weight: bold;
    }
  }
  .swiper-pagination-bullets {
    bottom: 0;
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: #e5e9ee;
    }
    .swiper-pagination-bullet-active {
      background-color: ${colors.gray[100]};
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray[200]};
    border-radius: 50%;
    &:after {
      color: ${colors.gray[700]};
      font-size: 1.5rem;
    }
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    left: 0;
  }
  @media all and (max-width: ${size.medium}) {
    .smallContainer {
      padding: 0 5rem;
    }
  }
  @media all and (max-width: ${size.small}) {
    .smallContainer {
      padding: 0 1rem;
    }
    .swiper-button-next,
    .swiper-button-prev {
      background-color: transparent;
      top: unset;
      bottom: -10px;
      &:after {
        font-size: 1rem;
      }
    }
  }
`;

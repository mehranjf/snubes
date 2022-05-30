import styled from "styled-components";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";

export const FaqStyle = styled.section`
  padding: 3.75rem 0 2rem 0;
  .faqWraper {
    display: flex;
    .faqTxt {
      width: 65%;
      padding-right: 3.75rem;
      .faqItem {
        margin-top: 2.5rem;
        p {
          margin-top: 0.625rem;
        }
      }
      .faqImg {
        margin-top: 2.5rem;
        img {
          width: 7.3rem;
          height: auto;
        }
      }
    }
    .faqForm {
      width: 35%;
      .faqFormWrapper {
        border: solid 1px ${colors.blue.main};
        border-radius: 0.5rem;
        .faqFormTitle {
          background-color: ${colors.blue.main};
          text-align: center;
          color: ${colors.white};
          padding: 1.25rem;
        }
        .faqFormContact {
          padding: 1.875rem;
        }
      }
    }
  }
  @media all and (max-width: ${size.medium}) {
    .faqWraper {
      flex-wrap: wrap;
      .faqTxt {
        width: 100%;
        .faqImg {
          text-align: center;
          margin-bottom: 2rem;
        }
      }
      .faqForm {
        width: 100%;
      }
    }
  }
`;

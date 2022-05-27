import styled from "styled-components";
import { colors } from "../../../shared/color";
import { size } from "../../../shared/size";
interface Props {
  row: boolean;
}
export const PhoneNumberStyle = styled.div`
  label {
    display: flex;
    flex-direction: ${({ row }: Props) => (row ? "row" : "column")};
    align-items: center;
    margin-bottom: 1rem;
    span.label {
      width: 5.25rem;
      text-align: ${({ row }: Props) => (row ? "right" : "left")} !important;
      padding-right: 0.5rem;
    }
    div.PhoneInput {
      width: 22rem;
      max-width: ${({ row }: Props) =>
        row ? "calc(100% - 5.25rem)" : "100%"} !important;
    }
    .PhoneInputCountry {
      border: solid 1px ${colors.gray[100]};
      width: 5.6rem;
      height: 3rem;
      border-radius: 0.25rem;
      outline: none;
      display: flex;
      justify-content: center;
    }
    input {
      border: solid 1px ${colors.gray[100]};
      height: 3rem;
      padding: 1rem;
      border-radius: 0.25rem;
      font-size: 1.125rem;
      line-height: 1.75rem;

      outline: none;
      &:focus {
        border-color: ${colors.blue.main};
      }
    }
    @media all and (max-width: ${size.small}) {
      flex-direction: column;
      span.label {
        width: 100%;
        text-align: left !important;
        margin-bottom: 0.25rem;
      }
      div.PhoneInput {
        width: 100%;
        max-width: 100% !important;
      }
      input {
        width: 100%;
        max-width: 100% !important;
      }
    }
    &.error {
      input {
        border-color: ${colors.red.error} !important;
      }
    }
  }
`;

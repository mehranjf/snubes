import styled from "styled-components";
import { colors } from "../../../shared/color";
import { size } from "../../../shared/size";
interface Props {
  row: boolean;
}
export const InputStyle = styled.label`
  display: flex;
  flex-direction: ${({ row }: Props) => (row ? "row" : "column")};
  align-items: center;
  margin-bottom: 1rem;
  span.label{
    width: 5.25rem;
    text-align: ${({ row }: Props) => (row ? "right" : "left")} !important;
    padding-right: .5rem;

  }
  input{
      border:solid 1px ${colors.gray[100]} ;
      width: 22rem;
      height: 3rem;
      padding: 1rem;
      border-radius: 0.25rem;
      max-width: ${({ row }: Props) => (row ? "calc(100% - 5.25rem)" : "100%")} !important;
      outline: none;
      &:focus{
          border-color:${colors.blue.main} ;
      }
      &.error{
        border-color: ${colors.red.error};
      }
  }
  @media all and (max-width:${size.small}){
    flex-direction: column;
    span.label{
      width: 100%;
      text-align: left !important;
      margin-bottom: 0.25rem;
    }
    input{
      width: 100%;
      max-width: 100% !important;
    }
  }
`;

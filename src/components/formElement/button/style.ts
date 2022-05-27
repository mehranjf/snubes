import styled from "styled-components";
import { colors } from "../../../shared/color";
import { size } from "../../../shared/size";

export const ButtonStyle = styled.div`
  margin-left: 5.25rem;
  text-align: center;
  margin-top: 1.5rem;
  width: 22rem;
  max-width: 100%;
  button {
    display: block;
    margin: 0 auto;
    width: 17.5rem;
    height: 3rem;
    max-width: 100%;
    color: ${colors.white};
    font-size: 1.125rem;
    text-align: center;
    line-height: 1.75rem;
    border-radius: 0.25rem;
    border: none;
    outline: none;
    background-color: ${colors.blue.main};
  }
  @media all and (max-width: ${size.small}){
    margin-left: 0;
    
  }
`;

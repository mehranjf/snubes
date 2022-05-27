import styled, { keyframes } from "styled-components";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";
const subMenuAnimation = keyframes`
  from{
    opacity:0;
    transform: translateY(10px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`
export const HeaderStyle = styled.header`
  .headerWraper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    .logo {
      img {
        width: 10rem;
        height: auto;
      }
    }
    .menu {
      ul {
        display: flex;
        li {
          position: relative;
          a {
            color: ${colors.gray[700]};
            display: block;
            padding: 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            transition: all 200ms;
            svg{
              margin-top: -5px;
              margin-left: .5rem;
              width: .75rem;
              height: auto;
              transition: all 200ms;
            }
          }
          ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 10rem;
            flex-direction: column;
            background-color: #fff;
            box-shadow: 0 0 6px 0 rgb(0 0 0 / 15%);
            animation: ${subMenuAnimation} 300ms ease-out 1;  
            z-index:5;          
          }
          &:hover{
            ul{
              display: block;
            }
            &>a{
              color:${colors.blue.main};
              svg{
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }
    .hamburgerIcon{
      cursor: pointer;
      display: none;
    }
    @media all and (max-width:${size.large}){
      .menu{
        display: none;
      }
      .hamburgerIcon{
        display: block;
      }
    }
  }
`;

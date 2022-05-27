import { createGlobalStyle } from "styled-components";
import { colors } from "./shared/color";
import { size } from "./shared/size";
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box ;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
    }
    html{
        font-size: 16px;
    }
    body{
        font-family: 'Roboto', sans-serif;
        color: ${colors.black[400]};
    }
    .container{
        width: 75rem;
        padding: 0 1rem;
        max-width: 100%;
        margin: 0 auto;
    }
    .title{
        font-size:1.125rem ;
        line-height:1.75rem ;
        font-weight: bold;
    }
    .text{
        font-size:1.125rem ;
        line-height:1.75rem ;
        font-weight: 400;
    }
    @media all and (max-width:${size.medium}){
        .title{
        font-size:1rem ;
        line-height:1.5rem ;
    }
    .text{
        font-size:1rem ;
        line-height:1.5rem ;
    }
    }
`;
export default GlobalStyle;

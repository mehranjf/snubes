import styled from "styled-components";
import { colors } from "../../shared/color";
import { size } from "../../shared/size";

export const WhyStyle = styled.section`
    border-top:solid .625rem ${colors.gray[200]};
    border-bottom: solid .625rem ${colors.gray[200]};
    padding: 3.75rem 0;
    position: relative;
    .laptop{
        position: absolute;
        top: 0;
        right: 0;
        width: 650px;
        height: auto;
    }
    .pen{
        position: absolute;
        top:0 ;
        left: 0;
        width: 400px;
        height: auto;
    }
    .mainTitle{
        position: relative;
    }
    .whyDataItem{
        margin-top: 2rem;
        position: relative;
        h3{
            margin-bottom: .75rem;
        }
    }
    @media all and (max-width:${size.medium}){
        .smallContainer{
            width: 70%;
            margin-left:0 ;

        }
    }
    @media all and (max-width:${size.small}){
        .smallContainer{
            width: 100%;

        }
    }
`
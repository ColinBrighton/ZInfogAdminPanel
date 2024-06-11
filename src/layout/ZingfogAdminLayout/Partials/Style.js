import { THEME } from "@theme/index";
import styled from "styled-components";

export const TopHeader = styled.header`
    background:${THEME.white};
    position:relative;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    width:100%;
    height:75px;
    z-index:99;
    display:flex;
    align-items:center;

    .container{
        display:flex;
        align-items:center;
        justify-content:space-between;

        .options{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:20px;

            span{
                font-size:16px;
                font-weight:600;
                color: #808080;
                cursor: pointer;
            }
            img{
                cursor: pointer;
            }
        }
    }
`

export const BodySection = styled.main`
    background:${THEME.primary_color_light};
    height:calc(100vh - 135px);
    padding:14px 7px;
    width:100%;
    overflow-x:auto;
`

export const FooterContainer = styled.footer`
    height:60px;
    width:100%;
    display:flex;
    align-items:center;
    background:${THEME.primary_color_light};

    .container{
      display:flex;
      align-items: center;
      gap:10px;
      flex-direction:column;
      justify-content: space-between;

    @media screen and (min-width:1200px){
      flex-direction:row;
    }

    .copy{
      color:#6D6C6C;
      font-size: 16px;
      font-weight: 400;
      line-height: 20.16px;
    }

    .wrights{
      color:${THEME.white};
      font-size: 16px;
      font-weight: 400;
      line-height: 20.16px;
      display:flex;
      align-items: center;
      justify-content: center;
      gap:5px;

      .phone{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 24px;
        font-weight: 500;

        span{
            color:${THEME.primary};
            padding:2px;
        }
      }

      .break{
        border:1px solid ${THEME.white};
        height:16px;
      }

      a{
        color:#00D3EB;
        text-decoration:none;
      }
    }
    }
`
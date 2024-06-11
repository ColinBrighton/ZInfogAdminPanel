import { THEME } from "@theme/index";
import styled from "styled-components";

export const HomeWrapper = styled.section`
    background:${THEME.white};
    border:1px solid #000;
    /* height:100%; */
    height:calc(100% - 60px);
    box-shadow: 0px 4px 4px 0px #00000040;
    border-top:none;
`

export const ReportTable = styled.table`
    background:${THEME.white};
    border:none;
    border-collapse:collapse;
    width:calc(100% - 6px);
    margin:auto;
    /* height:100%; */
    flex:1;
    overflow:auto;
     tr th{
        font-family: Outfit;
        font-size: 16px;
        font-weight: 800;
        line-height: 20.16px;
        text-align: left;
        padding:9px 14px;
        border-bottom: 1px solid;
     }
     thead tr{
        box-shadow: 0px 4px 4px 0px #00000040;
     }

     tbody tr{
        border-bottom:1px solid #000;
        padding:0 5px;
        td{
            font-size: 16px;
            font-weight: 400;
            line-height: 20.16px;
            text-align: left;
            padding:9px 14px;

            img{
                cursor: pointer;
            }
        }
     }
`

export const StatusTag = styled.span`
    color:${THEME.black};
    display:block;
    background:${props=>props.status == 'success' ? '#89FFAA' : props.status == 'error' ? '#F2A38A' : '#E7F880'};
    width: 122px;
    height: 23px;
    border-radius:12px;
    display:flex;
    align-items:center;
    padding-left:15px;
`

export const TopOption = styled.div`
    /* height:66px; */
    /* padding:14px 0; */

    .container{
        padding:14px 0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        flex-direction:column;
        gap:20px;

        @media ${THEME.LAPTOP} {
            flex-direction:row;
        }

        h1{
            font-size: 25px;
            font-weight: 500;
            line-height: 31.5px;
            text-align: left;
            color:#1F6CAB;
        }
        .filterHolder{
            display:flex;
            align-items:flex-start;
            justify-content:space-between;
            flex-direction:column;
            gap:16px;

        @media ${THEME.TABLET} {
            align-items:center;
            flex-direction:row;
        }

            .filterbtn{
                font-size: 20px;
                font-weight: 500;
                line-height: 25.2px;
                text-align: right;
                color:${THEME.white};
                background:#1F6CAB;
                padding:2px 12px 2px 6px;
                outline:none;
                box-shadow:none;
                border: 1px solid #1F6CAB;
                border-radius:5px;
                cursor: pointer;
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:12px;
            }

            .searchHolder{
                height: 30px;
                width: 450px;
                /* background:${THEME.white}; */
                background: #F4F4F4;
                display:flex;
                align-items:center;
                justify-content:space-between;
                border: 1px solid #1F6CAB;
                border-radius:6px;

                .search{
                    height: 28px;
                    width:390px;
                    outline:none;
                    box-shadow:none;
                    border:none;
                    background: #F4F4F4;
                    padding:2px 2px 2px 10px;
                    border-radius:6px;
                }
                .icon{
                    margin-right:10px;
                }
            }
        }
    }

    .filterWrapper{
        border: 1px solid #828282;
        background:${THEME.white};

        .filterfooter{
            border: 0.5px solid #000000;
            background: #E4FBFB;
            height: 50px;
            display:flex;
            align-items:center;

            .btnwrapper{
                display:flex;
                align-items:center;
                justify-content:space-between;

                h4{
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 20.16px;
                    text-align: left;
                    color:#9E9A9A;
                }
                .btnHolder{
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:20px;
                }
            }
        }
    }
`
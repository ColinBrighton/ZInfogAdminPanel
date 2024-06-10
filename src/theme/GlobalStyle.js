import { Styles } from '@components/form/CommonProperties'
import { createGlobalStyle } from 'styled-components'
import { THEME } from '.'

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        box-sizing:border-box;
        font-family: 'Nunito Sans', sans-serif; 
    } 
   
  & .ant-menu-item-icon {
    font-size: 23px !important;
   }

   .ant-form-item .ant-form-item-explain-error {
    color: ${Styles.errorColor};
    font-weight: ${Styles.errorFontWeight};
    font-size: ${Styles.errorFontSize};
    }
   .ant-drawer .ant-drawer-body {
    padding: 0% !important;
    overflow: hidden !important;
   }

   .scroll {
    overflow-y: scroll;
   }

    ::-webkit-scrollbar {
    width: 0px;
    height: 10px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px #1677ff; 
        cursor: pointer;
        border-radius: 10px;

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(3 108 255 / 43%);
        border-radius: 10px;
    }
    
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgb(3 108 255 / 43%);
        visibility: visible;
    }

    /* Antd Form  */
    .ant-form-item {
        margin-bottom: 6px !important;
    }

    &.ant-drawer-right>.ant-drawer-content-wrapper{
        top:50px;
        right:0;
        bottom:50px;
        transition:0.5s;

        @media ${THEME.MOBILEL} {
            right:50px;
        }
    }

    &.ant-drawer .ant-drawer-panel-motion-right-leave-active{
        transform:translateX(150%)
    }

   &.ant-drawer .ant-drawer-body{
        padding:20px !important;
        overflow-y:scroll !important;
    }
`

export default GlobalStyle

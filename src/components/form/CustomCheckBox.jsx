
import React from 'react'
import styled from 'styled-components'
import { Checkbox as AntdCheckbox, Form } from 'antd'
import { THEME } from '@theme/index'
import { Styles } from '@components/form/CommonProperties'

const StyledCheckbox = styled(AntdCheckbox)`
  & .ant-checkbox .ant-checkbox-inner {
    width: ${Styles.checkBoxWidth};
    height: ${Styles.checkBoxHeight};
    border-radius:${Styles.checkBoxRadius};
    border:2px solid ${Styles.checkBoxBGColor};
    &:hover {
      background: ${Styles.checkBoxBGColor};
    }
  }

  & .ant-checkbox .ant-checkbox-inner:after {
    inset-inline-start:25%;
    border: 2px solid ${Styles.checkBoxColor};
    border-left: 0;
    border-top: 0;
  }

  &.ant-checkbox-wrapper {
    align-items: center;
    height: 100%;
  }

  & .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${Styles.checkBoxBGColor};
    border-color: ${Styles.checkBoxBGColor};
  }
  
  .ant-checkbox + span {
    padding-left: 12px;
  }
  &.ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover .ant-checkbox-checked:not(.ant-checkbox-disabled) .ant-checkbox-inner {
    background-color: ${Styles.checkBoxBGColor};
    border-color: transparent;
}
`

const LabelWrapper = styled.div`
  font-size:${Styles.LableSize};
  font-weight:${Styles.LableWeight};
  color:${Styles.LableColor};
`

const CustomCheckBox = ({ onChange,rules, label, checked, name, color,  ...rest }) => {

   return (
    <Form.Item name={name} rules={rules} valuePropName="checked">
      <StyledCheckbox
        checked={checked}
        color={color}
        onChange={onChange}
        {...rest}
      >
        <LabelWrapper>{label}</LabelWrapper>
      </StyledCheckbox>
    </Form.Item>
  )
}

export default CustomCheckBox
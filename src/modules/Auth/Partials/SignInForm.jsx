import React from 'react'
import styled from 'styled-components'
import { Col, Form, Input } from 'antd'
import { CustomRow, Flex } from '@components/others'
import { Button, CustomInput, CustomInputPassword } from '@components/form'
import { THEME } from '@theme/index'


const Header = styled.div`
  color:#fff;
  margin-bottom:10px;
`
const ResetText = styled.p`
  color:${THEME.black};
  text-decoration: underline;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`


const SignInForm = ({ handleSignIn }) => {

  const [form] = Form.useForm();

  const onFinish = values => {

    const onFinishValues = {
      ...values,
      client_id: 'ei0gvH1bk8wNVj0xqKgtGVzxa3yWXa',
      client_secret: "Yjq2KXplGi6Niarcp1gn6PP7OrMDlP",
      grant_type: "client_credentials"
    }

    handleSignIn(onFinishValues)
  }

  return (
    <Form onFinish={onFinish}
      labelCol={{
        span: 24,
      }}
      autoComplete='off'
      wrapperCol={{
        span: 24,
      }}
      form={form}>

      <Flex center={'true'}>
        <Header>
          <p style={{ fontSize: '24px', fontWeight: 400, color: THEME.primary_color_dark }}>Login</p>
        </Header>
      </Flex>

      <CustomRow space={[12, 12]}>
        <Col span={24}>
          <CustomInput
            name="user_name"
            label={'Uername'}
            placeholder={'Enter your Username'}
            rules={[
              { required: true, message: 'Please enter username' },
            ]} />
        </Col>

        <Col span={24}>
          <CustomInputPassword
            name="password"
            label={'Password'}
            placeholder={'Enter your Password'}
            rules={[
              { required: true, message: 'Please enter a password' },
            ]} />
        </Col>

      </CustomRow>
      <Flex center={'true'} margin={'10px 0'}>
        <Button.Primary text={'SUBMIT'} htmlType="submit" />
      </Flex>
      <Flex center={'true'} >
        <ResetText>Reset Password</ResetText>
      </Flex>

    </Form>
  )
}

export default SignInForm

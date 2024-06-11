import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '@theme/index'
import { setCredentials, selectCurrentUser } from '@modules/Auth/authSlice'
import SignInForm from './SignInForm'
import { baseRequest } from '@request/request'
import { OpenNotification } from '@components/common'
import { LOGIN_BACKGROUND, LOGO, PLUS } from '@assets/images'
import { Flex } from '@components/others'
import { FiPhone } from "react-icons/fi";
import { APIURLS } from '@request/apiUrls/urls'

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  background-image: url(${LOGIN_BACKGROUND});
  background-size: cover;
  background-position: center;
  gap:30px;

  .footer{
    width:90%;
    padding:20px 0;
    display:flex;
    align-items: center;
    gap:10px;
    flex-direction:column;
    justify-content: space-between;

    @media screen and (min-width:840px){
      flex-direction:row;
    }

    .copy{
      color:${THEME.white};
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

const SignInCard = styled.div`
  background-color:${THEME.primary_color};
  backdrop-filter:blur(1px);
  padding: 40px 32px;
  border-radius:20px;
  max-width: 450px;
  width: 456px;
  box-shadow: 0px 4px 4px 0px #00000040;
`

export const LoginHolder = styled.div`
  position: relative;
  width: 603px;
  background-color: white;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  border-radius: 20px;
  .imgholder{
    margin:40px 0px 20px 0px
}
.text{
  font-size: 24px;
  font-weight: 700;
  color:${THEME.primary_color_dark};
  margin-bottom: 20px;
}
.phoneNo{
  font-size: 24px;
  font-weight: 700;
  color:${THEME.primary_color_dark};
}
span {
  color:${THEME.primary_color_dark};
  cursor: pointer;
}

span.error{
  color:${THEME.red};
  margin-top:20px;
  text-decoration:underline;
}
`

const PlusIconHolher = styled.div`
position: absolute;
z-index: 9999;
top: ${props => props.top && props.top};
left: ${props => props.left && props.left};
right: ${props => props.right && props.right};
bottom: ${props => props.bottom && props.bottom};

img{
  height: ${props => props.height ? props.height : 0};
  width: ${props => props.width ? props.width : 0};
}
`

const UserSignin = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const [error, setError] = useState('')

  // const handleSignIn = async (data) => {   // Login API 
  //   try {
  //     const authData = await baseRequest.post(APIURLS.LOGIN, data)
  //     console.log(authData, 'authData');
  //     // Mock API, add the origin API and payload data
  //     dispatch(setCredentials(authData))
  //     OpenNotification({
  //       type: 'success',
  //       msg: 'Hello ADMIN',
  //       description: `Welcome Back ${authData.username}`
  //     })
  //     navigate('/', { replace: true })

  //   } catch (error) {
  //     console.error('Getting error while login', error)
  //   }
  // }

  const handleSignIn = async (data) => {
    console.log(data);
    if (data.user_name == 'daya' && data.password == '123') {
      setError('')
      const authData = {
        name: "Daya hospital portal",
        user_id: 288,
        user_role: "user",
        token: "6q0LLX5wJthexuxQl9IAV1cuTLsSnS"
      }
      dispatch(setCredentials(authData))
          OpenNotification({
            type: 'success',
            msg: 'Hello USER',
            description: `Welcome Back ${authData.name}`
          })
          navigate('/')
    } else {
      setError('Wrong credentials! Email id or password entered is wrong.')
      console.log('no entry');
    }
  }


  const token = useSelector(selectCurrentUser);

  useEffect(() => {
    if (token) {
      // if()
      navigate('/signin')
    }
  }, [token])

  return (
    <Wrapper column>

      <LoginHolder>

        {/* Plus Icons */}
        <PlusIconHolher height={'30px'} width={'30px'} top={'35px'} left={'25px'}>
          <img src={PLUS} alt="plus" />
        </PlusIconHolher>
        <PlusIconHolher height={'60px'} width={'60px'} top={'90px'} right={'20px'}>
          <img src={PLUS} alt="plus" />
        </PlusIconHolher>
        <PlusIconHolher height={'100px'} width={'100px'} bottom={'40px'} left={'10px'}>
          <img src={PLUS} alt="plus" />
        </PlusIconHolher>

        {/* logo */}
        <div className='imgholder'>
          <img src={LOGO} alt="logo" title='Zinfog Code Labs' />
        </div>
        <p className='text'>Report Download portal</p>

        {/* Login Form */}
        <SignInCard>
          <SignInForm handleSignIn={handleSignIn} />
        </SignInCard>

        {error && <span className='error'>
          {error}
        </span>}

        <Flex center centervertically gap={'5px'} margin={"30px 0px"}>
          <FiPhone size={25} color={THEME.primary_color_dark} />
          <p className='phoneNo'>(+91) 9288008801</p>
        </Flex>

        <Flex margin={'20px 0px'}>
          <p>I hereby agree and accept the <span>Terms of service</span> and <span>Privacy policy</span></p>
        </Flex>

      </LoginHolder>

      <div className='footer'>
        <div className="copy">Copyright © 2023 Access Home Lab Solutions</div>
        <div className="wrights">
          <span>All Rights Reserved</span>
          <span className="break"></span>
          <a href="#">Terms and Conditions</a>
          <span className="break"></span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

    </Wrapper>
  )
}
export default UserSignin

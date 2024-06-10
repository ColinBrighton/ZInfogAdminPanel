import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '@theme/index'
import { setCredentials,selectCurrentUser } from '@modules/Auth/authSlice'
import SignInForm from './SignInForm'
import { baseRequest } from '@request/request'
import { OpenNotification } from '@components/common'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin:auto;
  display:grid;
  background:${THEME.BLUE_T_69} ;
`

const SignInCard = styled.div`
  background-color:${THEME.PRIMARY_PURPLE};
  backdrop-filter:blur(1px);
  padding: 40px 32px;
  border-radius:0px 40px 0px 40px;
  max-width: 450px;
  width: 100%;
  margin: auto;
  height: 50%;
  border: 2px solid #949292;
`

const UserSignin = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleSignIn = async (data) => {
    try {
      // const authData = await baseRequest.post(`user/login`, {
      //   ...data,
      // })
      const authData = {
        username:'Admin', 
        jwt:'HOFMDG58DFSGDF9SG6F7GN6DG8DFS56G87DFG678',
        userRole:'admin'
      }

      // Mock API, add the origin API and payload data
        dispatch(setCredentials(authData))
        OpenNotification({
          type:'success',
          msg:'Hello ADMIN',
          description:`Welcome Back ${authData.username}`
        })
        navigate('/',{replace:true})

    } catch (error) {
      console.error('Getting error while login', error)
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
      <SignInCard>
        <SignInForm handleSignIn={handleSignIn} />
      </SignInCard>
    </Wrapper>
  )
}
export default UserSignin

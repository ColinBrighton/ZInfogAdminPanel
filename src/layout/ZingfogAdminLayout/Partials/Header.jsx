import React from 'react'
import { TopHeader } from '@layout/ZingfogAdminLayout/Partials/Style'
import { LOGO, PROFILE, SIGNOUT } from '@assets/images/index'
import { Container } from '@theme/Styled'
import { useDispatch } from 'react-redux'
import { logOut } from '@modules/Auth/authSlice'

const Header = () => {
  const dispatch = useDispatch();
  return (
    <TopHeader>
      <Container>
        <div className="container">
          <img src={LOGO} alt="zinfoglogo" />

          <div className="options">
            <span>username</span>
            <img src={PROFILE} alt="userProfile" />
            <img src={SIGNOUT} alt="signout" onClick={()=>dispatch(logOut())}/>
          </div>
        </div>

      </Container>
    </TopHeader>
  )
}

export default Header

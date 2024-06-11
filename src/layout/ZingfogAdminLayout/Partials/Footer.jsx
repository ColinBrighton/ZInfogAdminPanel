import React from 'react'
import { FooterContainer } from '@layout/ZingfogAdminLayout/Partials/Style'
import { Container } from '@theme/Styled'
import { PHONE } from '@assets/images'

const Footer = () => {
  return (
    <FooterContainer>
<Container>
  <div className="container">
  <div className="copy">Copyright © 2023 Access Home Lab Solutions</div>
        <div className="wrights">
          <div className='phone'>
            <img src={PHONE} alt="phonelogo" />
            <span>(+91) 9288008801</span>
          </div>
          <span>All Rights Reserved</span>
          <span className="break"></span>
          <a href="#">Terms and Conditions</a>
          <span className="break"></span>
          <a href="#">Privacy Policy</a>
        </div>
  </div>
</Container>
    </FooterContainer>
  )
}

export default Footer

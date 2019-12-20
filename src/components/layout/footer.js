import React from 'react'
import styled from "styled-components"

import Emoji from "../images/emoji"

const FooterContainer = styled.div`
  position: right;
  width: 100%;
  height: 30%;
  padding: 10px 0;
`

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const FooterLinks = styled.div`

`;

const FooterText = styled.div`
  color: #333333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterStyle>
        <FooterLinks>
          Github
          Twitter
          Instagram
          facebook
        </FooterLinks>
        <FooterText>
          Built with <Emoji symbol="❤️" label="love" /> by Christopher Cardoso © {new Date().getFullYear()}
        </FooterText>
      </FooterStyle>
    </FooterContainer>
  )
}

export default Footer

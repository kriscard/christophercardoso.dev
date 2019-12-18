import React from 'react'
import styled from "styled-components"

import Emoji from "../images/emoji"

const FooterStyle = styled.div`
  position: right;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #333333;
  padding: 10px 0;
  color: #FFFFFF;
`

const Footer = () => {
  return (
    <FooterStyle>
      <footer>
        Built with <Emoji symbol="❤️" label="love" /> by Christopher Cardoso © {new Date().getFullYear()}
      </footer>
    </FooterStyle>
  )
}

export default Footer

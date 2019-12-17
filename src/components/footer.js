import React from 'react'
import Emoji from "./emoji"
import styled from "styled-components"

const FooterStyle = styled.div`
  position: right;
  width: 100%;
  display: flex;
  justify-content: center;
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

import React from "react"
import styled from "styled-components"

import Nav from '../nav'
import LogoImage from '../images/logo'
import Container from "../style/container"
import { GridWithFlexBox } from "../style/grid"


const HeaderStyle = styled.header`
  display: block;

  .avatar {
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
  }
`;

const LogoBlock = styled.div`
  display: block;
  width: inherit;
  height: inherit;

  a {
    display: block;
  }
  img {
    border-radius: 50%;
  }
`;

const Header = () => (
  <Container>
    <GridWithFlexBox>
      <HeaderStyle>
        <LogoBlock>
          <LogoImage />
        </LogoBlock>
      </HeaderStyle>
      <Nav />
    </GridWithFlexBox>
  </Container>
)

export default Header

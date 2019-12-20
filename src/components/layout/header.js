import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../style/container"
import Nav from '../nav'
import LogoImage from '../images/logo'

const HeaderStyle = styled.header`
  margin: 0.5rem;
  max-width: 21%;
`;

const DisplayTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .title_h3 {
    z-index: -1;
    opacity: 0;
    position: absolute;
    transform: translateX(3rem);
    transition: transform .3s ease,opacity .15s ease;
    color: #333333;
    margin: 10px 0px 0px;
  }

  &:hover .title_h3 {
    opacity: 1;
    transform: translateX(3.5rem);
    transition: transform .2s ease,opacity .3s ease;
  }
`;


const Header = ({ siteTitle }) => (
  <Container>
    <HeaderStyle>
      <DisplayTitle>
        <Link to="/" >
          <LogoImage />
        </Link>
        <h3 className="title_h3">{siteTitle}</h3>
      </DisplayTitle>
    </HeaderStyle>
    <Nav />
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Christopher Cardoso`,
}

export default Header

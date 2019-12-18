import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./style/container"
import Nav from './nav'
import LogoImage from './logo'

const DisplayTitle = styled.div`
    display: none;

    &:hover {
      display: inline;
    }
`;


const Header = ({ siteTitle }) => (
  <Container>
    <header style={{ margin: `0.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <LogoImage />
        <DisplayTitle>
          <h3>{siteTitle}</h3>
        </DisplayTitle>
      </Link>
    </header>
    <Nav />
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import Container from "./style/container"
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <Container>
    <header style={{ margin: `0.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{siteTitle}</h3>
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

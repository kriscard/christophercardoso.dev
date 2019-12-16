import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{ marginBottom: `1.5rem` }}>
    <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
      <h3 style={{ display: `inline` }}>{siteTitle}</h3>
    </Link>
    <ul style={{ listStyle: `none`, float: `right` }}>
      {/* TODO : Replace the to with an anchor and use react-anchor-link-smooth-scroll */}
      <ListLink to="/">Project</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
 )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

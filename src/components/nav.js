import React from 'react'
import { Link } from "gatsby"

const nav = () => {
  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `2rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  return (
    <ul style={{ listStyle: `none`, float: `right` }}>
      {/* TODO : Replace the to with an anchor and use react-anchor-link-smooth-scroll */}
      <ListLink to="/">Project</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  )
}


export default nav

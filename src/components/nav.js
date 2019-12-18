import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const ListStyle = styled.li`
  display: inline-block;
  margin-right: 2rem;

  a {
    position: relative;
    display: inline-block;
    color: #262340;
    font-weight: 600;
    transition: color 0.2s ease;
    font-size: 17px;

    &:hover, &:focus {
      color: #01BEAE;
    }
  }
`;

const LinkStyle = styled.ul`
  list-style: none;
  float: right;
`;

const nav = () => {
  const ListLink = props => (
    <ListStyle>
      <li>
        <Link to={props.to}>{props.children}</Link>
      </li>
    </ListStyle>
  )

  return (
    <LinkStyle>
      <ul style={{ listStyle: `none`, float: `right` }}>
        {/* TODO : Replace the to with an anchor and use react-anchor-link-smooth-scroll */}
        <ListLink to="/">Project</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </LinkStyle>
  )
}


export default nav

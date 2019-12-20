import React from 'react'
import styled from "styled-components"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const ListStyle = styled.li`
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;

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
  width: 25%;
`;

const nav = () => {
  const ListLink = props => (
    <AnchorLink href={props.href}>{props.children}</AnchorLink>
  )

  return (
    <LinkStyle>
      <ListStyle>
        <li><ListLink href="#projects">Project</ListLink></li>
        <li><ListLink href="#about">About</ListLink></li>
        <li><a href="mailto:cardoso.christopher01@gmail.com" target="_blank">Contact</a></li>
      </ListStyle>
    </LinkStyle>
  )
}


export default nav

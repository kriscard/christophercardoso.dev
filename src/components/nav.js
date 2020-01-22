import React from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 24px;
`

const LinkStyle = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`

const ListStyle = styled.li`
  margin-left: 24px;
  display: flex;
  justify-content: space-between;

  a {
    position: relative;
    display: inline-block;
    color: #262340;
    font-weight: 600;
    transition: color 0.2s ease;
    font-size: 17px;
    margin: 0;

    &:hover,
    &:focus,
    &:active {
      color: #01beae;
    }
  }
`

const nav = () => {
  const ListLink = props => (
    <AnchorLink href={props.href}>{props.children}</AnchorLink>
  )

  return (
    <Nav className="nav">
      <LinkStyle>
        <ListStyle>
          <ListLink href="#projects">Project</ListLink>
        </ListStyle>
        <ListStyle>
          <ListLink href="#about">About</ListLink>
        </ListStyle>
        <ListStyle>
          <a
            href="mailto:cardoso.christopher01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </ListStyle>
      </LinkStyle>
    </Nav>
  )
}

export default nav

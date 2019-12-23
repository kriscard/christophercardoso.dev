import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Nav from '../nav'
import LogoImage from '../images/logo'
import Container from "../style/container"

const HeaderStyle = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 40px 0 40px;
  min-height: 80px;
  justify-content: space-between;
`;

const DisplayTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    @media (max-width: 780px) {
      display: none;
    }
  }

  .title_h3 {
    z-index: -1;
    opacity: 0;
    /* position: absolute; */
    transform: translateX(3rem);
    transition: transform .3s ease,opacity .15s ease;
    color: #333333;
    font-size: 18px;
  }

  &:hover .title_h3 {
    opacity: 1;
    transform: translateX(3.5rem);
    transition: transform .2s ease,opacity .3s ease;
  }
`;


const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Container>
      <DisplayTitle>
        <Link to="/" >
          <LogoImage />
        </Link>
        <h3 className="title_h3">{siteTitle}</h3>
      </DisplayTitle>
      <Nav />
    </Container>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Christopher Cardoso`,
}

export default Header

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  /* position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
  margin: 20px; */
`

const LogoImage = () => (
  <StaticQuery
    query={graphql`
      query {
      bannerImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `}
    render={data => (
      <StyledImg
        fixed={data.bannerImage.childImageSharp.fixed}
        style={{
          height: "100px",
          width: "100px",
        }}
        alt="logo"
      />
    )
    }
  />
)

export default LogoImage

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const AboutImageStyle = styled(Img)`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
  margin: 20px;

  @media (max-width: 991px) {
    position: absolute !important;
    img {
      display: none;
    }
  }
`

const AboutImage = () => (
  <StaticQuery
    query={graphql`
      query {
      aboutImage: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fixed {
          ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `}
    render={data => (
      <AboutImageStyle
        fixed={data.aboutImage.childImageSharp.fixed}
        alt="About me"
      />
    )
    }
  />
)

export default AboutImage

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
      <Img
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

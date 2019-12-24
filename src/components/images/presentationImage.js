import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 10px;
  margin: 20px;

  @media (max-width: 780px) {
    position: absolute !important;
    display: none !important;
  }
`

const PresentationImage = () => (
  <StaticQuery
    query={graphql`
      query {
        bannerImage: file(relativePath: { eq: "developer.png" }) {
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
        alt="Presentation Image"
      />
    )}
  />
)

export default PresentationImage

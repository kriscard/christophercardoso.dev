import React from 'react'
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const AboutText = () => (
  <StaticQuery
    query={graphql`
      query AboutTextQuery {
        markdownRemark(frontmatter: { path: { eq: "/aboutMe" } }) {
          frontmatter {
            title
            description
          }
        }
      }
  `}
    render={data => (
      <AboutMeStyles>
        <h3>{data.markdownRemark.frontmatter.title}</h3>
        <p>{data.markdownRemark.frontmatter.description}</p>
      </AboutMeStyles>
    )}
  />
)

export default AboutText

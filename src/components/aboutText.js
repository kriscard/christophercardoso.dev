import React from 'react'
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ButtonStyles = styled.a`
  padding: 10px 25px;
  font-size: 18px;
  background: #01BEAE;
  color: #fff;
  border-radius: 30px;
  transition: padding 0.2s ease;
  font-weight: 700;
  margin: auto;

  &:hover {
    padding: 8px 18px;
  }
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
        <ButtonStyles
          href="mailto:cardoso.christopher01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me!
        </ButtonStyles>
      </AboutMeStyles>
    )}
  />
)

export default AboutText

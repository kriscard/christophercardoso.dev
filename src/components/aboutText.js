import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const AboutMeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const Paragraph = styled.p`
  max-width: 25rem;
  font-size: 18px;
  padding: 10px;
`

const Title = styled.h3`
  margin: auto;
  line-height: 1.15;
`

const ButtonStyles = styled.a`
  padding: 10px 25px;
  font-size: 18px;
  background: #01beae;
  color: #fff;
  border-radius: 30px;
  transition: padding 0.2s ease;
  font-weight: 700;
  margin: 12px auto;

  &:hover {
    padding: 8px 18px;
  }
`

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
        <Title>{data.markdownRemark.frontmatter.title}</Title>
        <Paragraph>{data.markdownRemark.frontmatter.description}</Paragraph>
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

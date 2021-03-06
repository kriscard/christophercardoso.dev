import React from 'react'
import styled from 'styled-components'
import {StaticQuery, graphql} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Wrapper from '../components/style/wrapper'
import Container from '../components/style/container'
import {Grid, Item} from '../components/style/grid'
import PresentationImage from '../components/images/presentationImage'

const ButtonStyle = styled.div`
  a {
    color: #01beae;
    font-weight: 600;
    text-align: bottom;
    border-bottom: 1px solid rgba(1, 190, 174, 0.2);
    border-width: 3px;
    margin-left: 10px;

    &:hover {
      border-bottom: 1px solid rgba(1, 190, 174, 1);
      border-width: 3px;
      transition: 0.8s;
    }

    &:visited {
      color: #01beae;
    }
  }
`
const Presentation = () => (
  <StaticQuery
    query={graphql`
      query PresentationQuery {
        markdownRemark(frontmatter: {path: {eq: "/presentation"}}) {
          frontmatter {
            title
            description
            linkText
          }
        }
      }
    `}
    render={data => (
      <Wrapper>
        <Container>
          <Grid>
            <Item>
              <div>
                <h1>{data.markdownRemark.frontmatter.title}</h1>
                <p>{data.markdownRemark.frontmatter.description}</p>
                <ButtonStyle>
                  <AnchorLink href="#about">
                    {data.markdownRemark.frontmatter.linkText}
                  </AnchorLink>
                </ButtonStyle>
              </div>
            </Item>
            <Item>
              <PresentationImage />
            </Item>
          </Grid>
        </Container>
      </Wrapper>
    )}
  />
)

export default Presentation

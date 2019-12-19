import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import { Grid, Item } from "../components/style/grid"
import Wrapper from '../components/style/wrapper'
import Container from '../components/style/container'



const Project = () => {

  const data = this.props.data;
  const imageOne = data.imageOne.childImageSharp.fluid
  const imageTwo = data.imageTwo.childImageSharp.fluid
  const imageThree = data.imageThree.childImageSharp.fluid
  const imageFour = data.imageFour.childImageSharp.fluid

  const Projects = [
    {
      name: 'Speaken Front End',
      description: 'Travel template featuring a slider with a swipe transition built with CSS Grid and Flexbox.',
      image: imageOne,
      color: '#fee7ca',
      link: 'https://speaken.com/index.html'
    },
    {
      name: 'Speaken Back End',
      description: 'Image gallery template built with CSS Grid and Flexbox featuring text-following cursor hover effects.',
      image: imageTwo,
      color: '#ffdde1',
      link: 'https://speaken.com/index.html'
    },
    {
      name: 'Portfolio',
      description: 'Tea-themed random, placeholder text generator app built with Gatsby.js and React.',
      image: imageThree,
      color: '#c9decc',
      link: 'https://www.christophercardoso.dev'
    },
    {
      name: `Face Recognation`,
      description: 'Complete branding and website refresh for a painting company in New Jersey.',
      image: imageFour,
      color: '#cbe1f2',
      link: 'https://github.com/kriscard/rails_get_to_the_fest'
    }
  ]
  // TODO  Create styled component for ItemContent Image ProjectInfo
  return (
    <Wrapper>
      <Container>
        <Grid>
          {Projects.map(project => (
            <Item>
              <a href={project.link} title={work.name} target="_blank">
                <ItemContent>
                  <Image>

                  </Image>
                  <ProjectInfo>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </ProjectInfo>
                </ItemContent>
              </a>
            </Item>
          ))
          }
        </Grid>
      </Container>
    </Wrapper>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectQuery {
    imageOne: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
        fluid(
          maxWidth: 800
        ) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

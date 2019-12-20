import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Grid, Item } from "./style/grid"
import Wrapper from './style/wrapper'
import Container from './style/container'
import ProjectImage from './images/projectImage'


const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectBackground = styled.div`
  background-color: #F6F7FB;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


const Project = () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "speaken.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        imageTwo: file(relativePath: { eq: "speaken_api.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        imageThree: file(relativePath: { eq: "portfolio.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        imageFour: file(relativePath: { eq: "face-recognation.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
  `}
    render={data => {
      AOS.init();

      const imageOne = data.imageOne.childImageSharp.fluid
      const imageTwo = data.imageTwo.childImageSharp.fluid
      const imageThree = data.imageThree.childImageSharp.fluid
      const imageFour = data.imageFour.childImageSharp.fluid

      const Projects = [
        {
          id: 0,
          name: 'Speaken Front End',
          description: 'Travel template featuring a slider with a swipe transition built with CSS Grid and Flexbox.',
          image: imageOne,
          color: '#fee7ca',
          link: 'https://speaken.com/index.html'
        },
        {
          id: 1,
          name: 'Speaken API',
          description: 'Image gallery template built with CSS Grid and Flexbox featuring text-following cursor hover effects.',
          image: imageTwo,
          color: '#ffdde1',
          link: 'https://speaken.com/index.html'
        },
        {
          id: 2,
          name: 'Portfolio',
          description: 'Tea-themed random, placeholder text generator app built with Gatsby.js and React.',
          image: imageThree,
          color: '#c9decc',
          link: 'https://www.christophercardoso.dev'
        },
        {
          id: 3,
          name: `Face Recognation`,
          description: 'Complete branding and website refresh for a painting company in New Jersey.',
          image: imageFour,
          color: '#cbe1f2',
          link: 'https://github.com/kriscard/rails_get_to_the_fest'
        }
      ]

      return (
        <Wrapper>
          <ProjectBackground>
            <Container>
              <Grid>
                {Projects.map(project => (
                  <Item
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    key={project.id}
                  >
                    <a href={project.link} title={project.name} target="_blank" rel="noopener noreferrer">
                      <ItemContent>
                        <div>
                          <ProjectImage
                            image={project.image}
                            name={project.name}
                            color={project.color}
                          />
                        </div>
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
          </ProjectBackground>
        </Wrapper>
      )
    }}
  />
)

export default Project

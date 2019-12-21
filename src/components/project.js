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
  width: 100%;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: #262340;
    padding: 10px;
    margin: 0;
  }

  p {
    color: #262340;
  }
`;


const Project = () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "speaken.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
        imageTwo: file(relativePath: { eq: "speaken_api.png" }) {
          childImageSharp {
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        },
        imageThree: file(relativePath: { eq: "portfolio.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
        imageFour: file(relativePath: { eq: "face-recognation.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        },
      }
  `}
    render={data => {
      typeof window !== 'undefined' && AOS.init()

      const imageOne = data.imageOne.childImageSharp.fluid
      const imageTwo = data.imageTwo.childImageSharp.fluid
      const imageThree = data.imageThree.childImageSharp.fluid
      const imageFour = data.imageFour.childImageSharp.fluid

      const Projects = [
        {
          id: 0,
          name: 'Speaken Tutor Application',
          description: 'React app with TypeScript, Next.JS, hooks and DDD',
          image: imageOne,
          color: '#fee7ca',
          link: 'https://speaken.com/index.html'
        },
        {
          id: 1,
          name: 'Speaken API',
          description: 'Create new feature for the Rails API with Test Driven Development',
          image: imageTwo,
          color: '#ffdde1',
          link: 'https://speaken.com/index.html'
        },
        {
          id: 2,
          name: 'chriscardoso.dev',
          description: 'Create a portfolio with Gatsby and GraphQL',
          image: imageThree,
          color: '#c9decc',
          link: 'https://www.christophercardoso.dev'
        },
        {
          id: 3,
          name: `Face Recognation`,
          description: 'Create a face recognation app with React and Redux and a NodeJS API',
          image: imageFour,
          color: '#cbe1f2',
          link: 'https://catchface.herokuapp.com/'
        }
      ]

      return (
        <Wrapper id="projects">
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
                        <div className="project-image">
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

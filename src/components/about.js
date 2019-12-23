import React from 'react'
import styled from "styled-components"

import Wrapper from '../components/style/wrapper'
import AboutImage from '../components/images/aboutImage'
import AboutText from '../components/aboutText'
import { Grid, Item } from '../components/style/grid'

const AboutContainer = styled.div`
  padding: 3rem 1rem;
  margin: auto;
`

const About = () => {
  return (
    <Wrapper id="about">
      <AboutContainer>
        <Grid>
          <Item>
            <AboutImage />
          </Item>
          <Item>
            <AboutText />
          </Item>
        </Grid>
      </AboutContainer>
    </Wrapper>
  )
}

export default About

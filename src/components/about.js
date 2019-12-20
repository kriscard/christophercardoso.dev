import React from 'react'
import styled from "styled-components"

import Wrapper from '../components/style/wrapper'
import AboutImage from '../components/images/aboutImage'
import AboutText from '../components/aboutText'
import { Grid, Item } from '../components/style/grid'

const AboutContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: flex-start;
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

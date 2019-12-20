import React from 'react'
import styled from "styled-components"

import Wrapper from '../components/style/wrapper'
import AboutImage from '../components/images/aboutImage'
import AboutText from '../components/aboutText'

const AboutContainer = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  justify-content:space-between;
  align-items: flex-start;
`

const About = () => {
  return (
    <Wrapper>
      <AboutContainer>
        <AboutImage />
        <AboutText />
      </AboutContainer>
    </Wrapper>
  )
}

export default About

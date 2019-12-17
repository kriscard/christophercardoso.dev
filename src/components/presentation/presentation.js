import React from 'react'
import styled from "styled-components"

import Wrapper from '../style/wrapper'
import Container from '../style/container'

const ButtonStyle = styled.a`
  color: #01BEAE;
  font-weight: 600;
  text-align: bottom;
  border-bottom: 1px solid rgba(1, 190, 174, 0.4);
  border-width: 3px;
  margin-left: 10px;

 &:hover {
  border-bottom: 1px solid rgba(1, 190, 174, 1);
  border-width: 3px;
  transition: 0.8s;
 }
`
const Presentation = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <h1>Hi! I'm Christopher Cardoso, a full stack developer based in Toronto.</h1>
          <p>Passionate by JavaScript, TypeScript, React and all the modern JS stack. I love learning new technologies and provide a great user experience on the products I build</p>
          <ButtonStyle>
            <a>More about me</a>
          </ButtonStyle>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Presentation

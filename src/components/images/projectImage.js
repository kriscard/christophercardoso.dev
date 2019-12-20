import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
  position: relative;
  clip-path: inset(0);
  overflow: hidden;
  transition: clip-path 300ms ease;

  &:hover {
    clip-path: inset(0.5rem);
  }
`;


const ProjectImage = ({ image, name, color }) => {
  return <StyledImg fluid={image} alt={name} backgroundColor={color} />
}

export default ProjectImage

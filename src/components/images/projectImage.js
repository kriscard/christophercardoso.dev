import React from 'react'
import Img from "gatsby-image"

const ProjectImage = ({ image, name, color }) => {
  return (
    <Img fluid={image} alt={name} backgroundColor={color} />
  )
}

export default ProjectImage

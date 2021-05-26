import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const FluidImage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "ikonStash.jpg"}) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
        name
      }
    }
  `)
  const image = getImage(data.file)
  return <GatsbyImage image={image} alt={data.name} />
}

export default FluidImage

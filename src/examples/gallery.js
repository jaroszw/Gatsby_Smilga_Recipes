import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 0.5rem;
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image
        const pathToImage = getImage(image)

        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            # transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

export default Gallery

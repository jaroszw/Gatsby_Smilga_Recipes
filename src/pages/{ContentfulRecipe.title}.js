import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { BsClock } from "react-icons/bs"
import slugify from "slugify"
import SEO from "../components/SEO"

const RecipeTemplate = ({ data }) => {
  const {
    title,
    prepTime,
    content,
    description: { description },
    image,
  } = data.contentfulRecipe
  const pathToImage = getImage(image)
  const { tags, instructions, ingredients, tools } = content
  return (
    <main className="page">
      <SEO title={title} description={description} />
      <div className="recipe-page">
        <section className="recipe-hero">
          <GatsbyImage image={pathToImage} alt={title} className="about-img" />
          <article className="recipe-info">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="recipe-icons">
              <article>
                <BsClock />
                <h5>prep time</h5>
                <p>{prepTime}</p>
              </article>
            </div>
            <p className="recipe-tags">
              Tags:
              {tags.map((tag, index) => {
                const slug = slugify(tag, { lower: true })
                return (
                  <Link to={`/tags/${slug}`} key={index}>
                    {tag}
                  </Link>
                )
              })}
            </p>
          </article>
        </section>
        <section className="recipe-content">
          <article className="second-column">
            <h4>Instructions</h4>
            {instructions.map((item, index) => {
              return (
                <div key={index} className="single-instruction">
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{item}</p>
                </div>
              )
            })}
          </article>
          <article>
            <div>
              <h4>ingredients</h4>
              {ingredients.map((item, index) => {
                return (
                  <p className="single-ingredient" key={index}>
                    {item}
                  </p>
                )
              })}
            </div>
            <div>
              <h4>tools</h4>
              {tools.map((item, index) => {
                return (
                  <p className="single-tool" key={index}>
                    {item}
                  </p>
                )
              })}
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      servings
      prepTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
      description {
        description
      }
      content {
        instructions
        ingredients
        tags
        tools
      }
    }
  }
`

export default RecipeTemplate

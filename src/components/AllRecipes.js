import React from "react"
import TagList from "./TagsList"
import RecipesList from "./RecipesLis"

import { useStaticQuery, graphql } from "gatsby"

const AllRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  )
}

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        title
        cookTime
        prepTime
        id
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default AllRecipes

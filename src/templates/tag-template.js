import React from "react"
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesLis"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <main className="page">
      <SEO title={pageContext.tag} />
      <h2>{pageContext.tag}</h2>
      <div className="tag-recipes">
        <RecipesList recipes={recipes}></RecipesList>
      </div>
    </main>
  )
}

export default TagTemplate

export const query = graphql`
  query GetRecipeByTag($tag: String!) {
    allContentfulRecipe(
      filter: { content: { tags: { eq: $tag } } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        cookTime
      }
    }
  }
`

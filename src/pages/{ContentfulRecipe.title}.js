import React from "react"
import { graphql } from "gatsby"

const RecipeTemplate = props => {
  console.log(props)
  return (
    <div>
      <h4>{props.params.title}</h4>
    </div>
  )
}

export const query = graphql`
  query getSingleRecipe($title: String!) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      prepTime
    }
  }
`

export default RecipeTemplate

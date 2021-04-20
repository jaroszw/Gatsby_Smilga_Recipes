import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, prepTime, image, cookTime } = recipe
        const pathToImage = getImage(image)

        return (
          <Link key={id} to={`/${title}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime} min| Cook: {cookTime} min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList

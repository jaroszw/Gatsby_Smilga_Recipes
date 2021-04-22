import React from "react"
import { graphql } from "gatsby"
import Recipes from "../components/RecipesLis"

export default function Contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <div>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              explicabo et natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
              sunt.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
              dolore earum sit quae deleniti ipsa quibusdam facere expedita
              voluptatum tempora!
            </p>
          </article>
          <article>
            <form
              className="form conact-form"
              action="https://formspree.io/f/xdoykyrw"
              method="POST"
            >
              <div className="form-row">
                <lable htmlFor="name">your name</lable>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <lable htmlFor="email">your email</lable>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <lable htmlFor="message">message</lable>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesome souce</h5>
          <Recipes recipes={recipes} />
        </section>
      </main>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { feature: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

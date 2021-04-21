import React from "react"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setupTags"

export default function Tag({ data }) {
  const newTags = setupTags(data.allContentfulRecipe.nodes)

  return (
    <div>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </div>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

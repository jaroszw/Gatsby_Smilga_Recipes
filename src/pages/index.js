import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Fetch from "../examples/fetch"

export default function Home() {
  return (
    <div>
      <Fetch />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}

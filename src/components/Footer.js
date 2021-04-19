import React from "react"

export default function Footer() {
  const date = new Date().getFullYear()
  return (
    <footer className="page-footer">
      <p>
        &copy; {date} <span>Simple Recipes</span> Built with
        <a href="https://www.gatsbyjs.com/">Gatsby.js</a>
      </p>
    </footer>
  )
}

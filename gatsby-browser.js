import React from "react"
import Layout from "./src/components/Layout"
import ErrorLayout from "./src/components/ErrorLayout"

export function wrapPageElement({ element, props }) {
  if (props.custom404) return <ErrorLayout>{element}</ErrorLayout>
  return <Layout {...props}>{element}</Layout>
}

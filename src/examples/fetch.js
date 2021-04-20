import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// export const getData = graphql`
//   {
//     site {
//       meta: siteMetadata {
//         description
//         author
//         title
//         simpleData
//         personalProfile
//         person {
//           age
//           name
//         }
//         complexData {
//           age
//           surname
//         }
//       }
//     }
//   }
// `

const Fetch = () => {
  // const data = useStaticQuery(getData)
  return (
    <div>
      <h1>FETCH</h1>
    </div>
  )
}

export default Fetch

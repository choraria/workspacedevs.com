import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <h1>Directory of Google Workspace Developers!</h1>
    </Layout>
  )
}

export const query = graphql`
query peopleQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          description
          intro
          location
          name
          slug
          title
        }
        id
      }
    }
  }
}
`

export default IndexPage
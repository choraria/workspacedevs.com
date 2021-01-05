// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/#make-a-template-for-your-posts

import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Header />
      <div>
        <h1>{mdx.frontmatter.name}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query peoplePageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
      }
    }
  }
`;

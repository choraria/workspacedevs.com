// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/#make-a-template-for-your-posts

import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Header />
      <div>
        <h1>{mdx.frontmatter.name}</h1>
        <div style={{ width: `200px`, float: "right" }}>
          {mdx.frontmatter.linkedin && (
            <div class="box">
              <Link to={mdx.frontmatter.linkedin}>
                <Image src="linkedin.png" alt="linkedin" />
              </Link>
            </div>
          )}
          {mdx.frontmatter.github && (
            <div class="box">
              <Link to={mdx.frontmatter.github}>
                <Image src="github.png" alt="github" />
              </Link>
            </div>
          )}
          {mdx.frontmatter.twitter && (
            <div class="box">
              <Link to={mdx.frontmatter.twitter}>
                <Image src="twitter.png" alt="twitter" />
              </Link>
            </div>
          )}
          {mdx.frontmatter.website && (
            <div class="box">
              <Link to={mdx.frontmatter.website}>
                <Image src="website.png" alt="website" />
              </Link>
            </div>
          )}
          {mdx.frontmatter.facebook && (
            <div class="box">
              <Link to={mdx.frontmatter.facebook}>
                <Image src="facebook.png" alt="facebook" />
              </Link>
            </div>
          )}
        </div>
        <br />
        <br />
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
      <Footer />
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
        slug
        location
        intro
        image
        github
        linkedin
        twitter
        website
        facebook
      }
    }
  }
`;

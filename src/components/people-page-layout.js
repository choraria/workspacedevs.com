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
              <a href={mdx.frontmatter.linkedin}>
                <Image src="linkedin.png" alt="linkedin" />
              </a>
            </div>
          )}
          {mdx.frontmatter.github && (
            <div class="box">
              <a href={mdx.frontmatter.github}>
                <Image src="github.png" alt="github" />
              </a>
            </div>
          )}
          {mdx.frontmatter.twitter && (
            <div class="box">
              <a href={mdx.frontmatter.twitter}>
                <Image src="twitter.png" alt="twitter" />
              </a>
            </div>
          )}
          {mdx.frontmatter.website && (
            <div class="box">
              <a href={mdx.frontmatter.website}>
                <Image src="website.png" alt="website" />
              </a>
            </div>
          )}
          {mdx.frontmatter.facebook && (
            <div class="box">
              <a href={mdx.frontmatter.facebook}>
                <Image src="facebook.png" alt="facebook" />
              </a>
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

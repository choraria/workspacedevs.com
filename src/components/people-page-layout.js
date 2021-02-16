// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/#make-a-template-for-your-posts

import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import SEO from "../components/seo";
import "./layout.css";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  const name = mdx.frontmatter.name;
  const pattern = new RegExp(/(\S+) (.*)/);
  const firstName = pattern.exec(name)[1];
  const lastName = pattern.exec(name)[2];

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 720, padding: `0 1rem` }}>
      <SEO
        title={mdx.frontmatter.name}
        description={mdx.frontmatter.intro}
        image={mdx.frontmatter.image}
        ogType={"profile"}
        firstName={firstName}
        lastName={lastName}
      />
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

        <div>
          <div
            style={{
              maxWidth: "150px",
              float: "left",
              margin: "5px 55px 5px 0",
            }}
          >
            <img src={mdx.frontmatter.image} alt={mdx.frontmatter.name}></img>
            {mdx.frontmatter.twitter && (
              <a
                href={mdx.frontmatter.twitter}
                class="twitter-follow-button"
                data-size="large"
                data-show-count="false"
              >
                Follow
              </a>
            )}
          </div>
          <div>
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
      <div style={{ margin: `10rem auto` }}>
        <Footer />
      </div>
    </div>
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

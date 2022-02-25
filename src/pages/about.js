import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";
import "../components/layout.css";
import defaultImage from "../images/directory-google-workspace-developers.png";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <div style={{ margin: `3rem auto`, maxWidth: 720, padding: `0 1rem` }}>
      <SEO
        title={"Directory"}
        description={data.site.siteMetadata.description}
        image={`${data.site.siteMetadata.siteUrl}${defaultImage}`}
        ogType={"website"}
      />
      <Header />
      <div>
        There are those who <i>need</i> help and then there are those who{" "}
        <b>can</b> help. <br />
        <br />
        This space is to help bridge that gap within the Google Workspace
        (previously, G Suite) Developers community and mostly geared towards
        users who work within the Apps Script ecosystem.
        <br />
        <br />
        More on the <b>why</b> can be found{" "}
        <a href="https://twitter.com/choraria/status/1348705346605338624">
          here
        </a>
        .<br />
        <br />
        <div>
          <blockquote
            class="twitter-tweet"
            data-conversation="none"
            data-theme="dark"
          >
            <p lang="en" dir="ltr">
              Why?
              <br />
              <br />
              The idea behind this was out of a personal need — I receive a
              dozen or so emails, LinkedIn &amp; Twitter pings every month from
              people asking for some help with their{" "}
              <a href="https://twitter.com/hashtag/AppsScript">
                #AppsScript
              </a>{" "}
              code or building a full solution in general.
              <br />
              <br />I try and help as many (&amp; as much) as I can but...{" "}
              <a href="https://t.co/ZDDHew4xHd">pic.twitter.com/ZDDHew4xHd</a>
            </p>
            &mdash; Sourabh Choraria (@choraria){" "}
            <a href="https://twitter.com/choraria/status/1348705346605338624">
              January 11, 2021
            </a>
          </blockquote>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

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
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

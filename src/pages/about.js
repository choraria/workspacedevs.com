import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/seo";

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={data.site.siteMetadata.description} />
      <Header />
      <div>
        There are those who need help and then there are those who can help.{" "}
        <br />
        This space is to help bridge that gap!
      </div>
      <Footer />
    </Layout>
  );
};

export default AboutPage;

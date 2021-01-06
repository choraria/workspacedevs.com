import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = ({ data }) => {
  return (
    <Layout>
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

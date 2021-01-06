import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const NotFoundPage = () => {
  return (
    <Layout>
      <Header />
      <div>
        <h2 style={{ borderBottom: 0, textAlign: "center" }}>
          Oops! Looks like this page doesn't exist.
        </h2>
      </div>
      <Footer />
    </Layout>
  );
};

export default NotFoundPage;

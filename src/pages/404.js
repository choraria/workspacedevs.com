import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../components/layout.css";

const NotFoundPage = () => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 720, padding: `0 1rem` }}>
      <Header />
      <div>
        <h2 style={{ borderBottom: 0, textAlign: "center" }}>
          Oops! Looks like this page doesn't exist.
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;

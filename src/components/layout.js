// https://www.gatsbyjs.com/docs/tutorial/part-three/#-create-your-first-layout-component

import React from "react";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 1200, padding: `0 1rem` }}>
      {children}
    </div>
  );
}

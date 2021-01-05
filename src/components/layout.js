// https://www.gatsbyjs.com/docs/tutorial/part-three/#-create-your-first-layout-component

import React from "react";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}
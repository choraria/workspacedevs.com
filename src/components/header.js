// https://www.gatsbyjs.com/docs/tutorial/part-three/#-add-navigation-links-between-pages

import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li
    style={{
      display: "inline-block",
      marginRight: "1rem",
      textDecorationLine: "underline",
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Header() {
  return (
    <div style={{ margin: `3rem auto` }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
          <h3 style={{ display: "inline", }}>Directory</h3>
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="https://github.com/schoraria911">Submit</ListLink>
        </ul>
      </header>
    </div>
  );
}

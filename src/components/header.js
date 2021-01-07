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
          <h2 style={{ display: "inline", borderBottom: 0 }}>Directory</h2>
        </Link>
        <ul style={{ listStyle: "none", float: "right" }}>
          <ListLink to="/about/">About</ListLink>
          <a
            href="https://github.com/schoraria911"
            style={{ textDecorationLine: "underline" }}
          >
            Submit
          </a>
        </ul>
      </header>
    </div>
  );
}

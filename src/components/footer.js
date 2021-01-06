// https://www.gatsbyjs.com/docs/tutorial/part-three/#-add-navigation-links-between-pages

import React from "react";
import { Link } from "gatsby";

const ListLink = (props) => (
  <li
    style={{
      display: "inline-block",
      marginRight: "1rem",
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Footer() {
  return (
    <div style={{ margin: `3rem auto` }}>
      <footer>
        <p style={{ display: "inline" }}>
          Created using{" "}
          <Link
            to="https://gatsbyjs.com/"
            style={{ textShadow: "none", backgroundImage: "none" }}
          >
            Gatsby
          </Link>
        </p>

        <ul style={{ listStyle: "none", float: "right" }}>
          Maintained by{" "}
          <ListLink to="https://twitter.com/schoraria911">SC</ListLink>
        </ul>
      </footer>
    </div>
  );
}

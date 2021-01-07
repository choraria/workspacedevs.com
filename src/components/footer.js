// https://www.gatsbyjs.com/docs/tutorial/part-three/#-add-navigation-links-between-pages

import React from "react";

const ListLink = (props) => (
  <li
    style={{
      display: "inline-block",
      marginRight: "1rem",
    }}
  >
    <a href={props.to}>{props.children}</a>
  </li>
);

export default function Footer() {
  return (
    <div style={{ margin: `3rem auto` }}>
      <footer>
        <p style={{ display: "inline" }}>
          Built with{" "}
          <a
            href="https://gatsbyjs.com/"
            style={{ textShadow: "none", backgroundImage: "none" }}
          >
            Gatsby
          </a>
        </p>
        <ul style={{ listStyle: "none", float: "right" }}>
          by <ListLink to="https://twitter.com/schoraria911">SC</ListLink>
        </ul>
      </footer>
    </div>
  );
}

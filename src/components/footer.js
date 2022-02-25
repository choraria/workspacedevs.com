// https://www.gatsbyjs.com/docs/tutorial/part-three/#-add-navigation-links-between-pages

import React from "react";

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
          <li
            style={{
              display: "inline-block",
              marginRight: "1rem",
            }}
          >
            by <a href="https://twitter.com/choraria">SC</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <div>
        <h1  style={{ borderBottom: 0 }}>Google Workspace Developers</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Intro</th>
            </tr>
          </thead>
          <tbody>
            {data.allMdx.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>
                  <Link to={node.frontmatter.slug}>
                    {node.frontmatter.name}
                  </Link>
                </td>
                <td>{node.frontmatter.location}</td>
                <td>{node.frontmatter.intro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query peopleQuery {
    allMdx {
      edges {
        node {
          frontmatter {
            description
            intro
            location
            name
            slug
            title
          }
          id
        }
      }
    }
  }
`;

export default IndexPage;

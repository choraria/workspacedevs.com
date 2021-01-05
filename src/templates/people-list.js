import React from "react";
import { Link, graphql } from "gatsby";

export default class PeopleList extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();

    const people = this.props.data.allMdx.edges;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Intro</th>
            </tr>
          </thead>
          <tbody>
            {people.map(({ node }) => (
              <tr key={node.id}>
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
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </div>
    );
  }
}

export const listPeopleQuery = graphql`
  query peopleListQuery($skip: Int!, $limit: Int!) {
    allMdx(limit: $limit, skip: $skip) {
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

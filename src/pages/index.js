import React, { useState, useEffect } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
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
  `);

  // https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/

  const allPeople = data.allMdx.edges;
  const [list, setList] = useState([...allPeople.slice(0, 10)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(allPeople.length > 10);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < allPeople.length;
      const nextResults = isMore
        ? allPeople.slice(currentLength, currentLength + 10)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]); //eslint-disable-line
  useEffect(() => {
    const isMore = list.length < allPeople.length;
    setHasMore(isMore);
  }, [list]); //eslint-disable-line

  return (
    <Layout>
      <Header />

      <div class="cards">
  <div class="card">ONE</div>
  <div class="card">TWO</div>
  <div class="card">THREE</div>
  <div class="card">FOUR</div>
  <div class="card">FIVE</div>
  <div class="card">SIX</div>
  <div class="card">SEVEN</div>
  <div class="card">EIGHT</div>
  <div class="card">NINE</div>
  <div class="card">TEN</div>
  <div class="card">ELEVEN</div>
  <div class="card">TWELVE</div>
</div>


      {/* <div>
        <h1 style={{ borderBottom: 0 }}>Google Workspace Developers</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Intro</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ node }) => (
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
        {hasMore ? (
          <button onClick={handleLoadMore}>Load More</button>
        ) : (
          <p>Those are all!</p>
        )}
      </div> */}
    </Layout>
  );
};

export default IndexPage;

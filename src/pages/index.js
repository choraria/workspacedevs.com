import React, { useState, useEffect } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Image from "../components/image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              facebook
              github
              image
              intro
              linkedin
              location
              name
              slug
              title
              twitter
              website
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
      <div>
        <h1 style={{ borderBottom: 0 }}>Google Workspace Developers</h1>
        <div class="cards">
          {list.map(({ node }) => (
            <div class="card" key={node.id}>
              <div style={{ textAlign: "right" }}>
                <img
                  src={node.frontmatter.image}
                  alt={node.frontmatter.name}
                  class="avatar"
                />
                <div class="name">
                  <Link to={node.frontmatter.slug}>
                    {node.frontmatter.name}
                  </Link>
                </div>
                <div class="location">{node.frontmatter.location}</div>
                <div class="intro">{node.frontmatter.intro}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          {hasMore ? (
            <button onClick={handleLoadMore} style={{ marginTop: `1.5rem` }}>
              Load More
            </button>
          ) : (
            <p style={{ marginTop: `1.5rem` }}>Those are all!</p>
          )}
        </div>
        <div>
        <div class="socialLink"><Image src="linkedin.png" alt="linkedin" /></div>
        <div class="socialLink"><Image src="github.png" alt="github" /></div>
        <div class="socialLink"><Image src="twitter.png" alt="twitter" /></div>
        <div class="socialLink"><Image src="website.png" alt="website" /></div>
        <div class="socialLink"><Image src="facebook.png" alt="facebook" /></div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

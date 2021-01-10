import React, { useState, useEffect } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import SEO from "../components/seo";
import defaultImage from "../images/directory-google-workspace-developers.png";

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
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const allPeople = data.allMdx.edges;

  // https://www.erichowey.dev/writing/load-more-button-and-infinite-scroll-in-gatsby/

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
      <SEO
        title={"Directory"}
        description={data.site.siteMetadata.description}
        image={`${data.site.siteMetadata.siteUrl}${defaultImage}`}
        ogType={"website"}
      />
      <Header />
      <div>
        <h1 style={{ borderBottom: 0 }}>Google Workspace Developers</h1>
        <div class="cards">
          {list.map(({ node }) => (
            <div class="card" key={node.id}>
              <div style={{ textAlign: "right" }}>
                <Link to={node.frontmatter.slug}>
                  <img
                    src={node.frontmatter.image}
                    alt={node.frontmatter.name}
                    class="avatar"
                    width="75px"
                    height="75px"
                  />
                </Link>
                <div class="name">
                  <Link to={node.frontmatter.slug}>
                    {node.frontmatter.name}
                  </Link>
                </div>
                <div class="location">{node.frontmatter.location}</div>
                <div class="intro">{node.frontmatter.intro}</div>
              </div>
              <br />
              <div>
                {node.frontmatter.linkedin && (
                  <div class="box">
                    <a href={node.frontmatter.linkedin}>
                      <Image src="linkedin.png" alt="linkedin" />
                    </a>
                  </div>
                )}
                {node.frontmatter.github && (
                  <div class="box">
                    <a href={node.frontmatter.github}>
                      <Image src="github.png" alt="github" />
                    </a>
                  </div>
                )}
                {node.frontmatter.twitter && (
                  <div class="box">
                    <a href={node.frontmatter.twitter}>
                      <Image src="twitter.png" alt="twitter" />
                    </a>
                  </div>
                )}
                {node.frontmatter.website && (
                  <div class="box">
                    <a href={node.frontmatter.website}>
                      <Image src="website.png" alt="website" />
                    </a>
                  </div>
                )}
                {node.frontmatter.facebook && (
                  <div class="box">
                    <a href={node.frontmatter.facebook}>
                      <Image src="facebook.png" alt="facebook" />
                    </a>
                  </div>
                )}
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
            <p style={{ marginTop: `1.5rem` }}>More to come...</p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Layout>
  );
};

export default IndexPage;

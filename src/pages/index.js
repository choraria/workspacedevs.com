import React, { useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import SEO from "../components/seo";
import defaultImage from "../images/directory-google-workspace-developers.png";

const IndexPage = (props) => {
  const { data } = props;
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

  // https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial

  const emptyQuery = "";
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = (event) => {
    const query = event.target.value;
    const people = allPeople || [];
    const filteredData = people.filter((person) => {
      const { intro, location, name, title } = person.node.frontmatter;
      const { excerpt } = person.node;
      return (
        intro.toLowerCase().includes(query.toLowerCase()) ||
        location.toLowerCase().includes(query.toLowerCase()) ||
        name.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        excerpt.toLowerCase().includes(query.toLowerCase())
      );
    });
    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const people = hasSearchResults ? filteredData : list;

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

        <div style={{ textAlign: "center", paddingBottom: `1.5rem` }}>
          <input
            type="text"
            aria-label="Search"
            placeholder="Search for..."
            onChange={handleInputChange}
            style={{ width: `100%`, maxWidth: `320px` }}
          />
        </div>

        <div class="cards">
          {people.map(({ node }) => (
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

export const peopleQuery = graphql`
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
          excerpt(pruneLength: 100000)
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
`;

// https://www.gatsbyjs.com/docs/mdx/programmatically-creating-pages/#create-pages-from-sourced-mdx-files

const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const people = result.data.allMdx.edges;

  people.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/components/people-page-layout.js`),
      context: {
        id: node.id,
      },
    });
  });
};
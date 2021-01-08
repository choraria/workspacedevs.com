module.exports = {
  siteMetadata: {
    title: "Workspace Devs",
    description: "A directory of Google Workspace and Apps Script Developers.",
    siteUrl: "https://workspacedevs.com/",
    author: "Sourabh Choraria",
    twitterUsername: "@schoraria911",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-9QKH9V9DCY",
        head: true,
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Workspace Devs",
        short_name: "WSD",
        start_url: "/",
        icon: "src/images/icon.png",
        display: "standalone",
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "people",
        path: "./src/people/",
      },
      __key: "people",
    },
  ],
};

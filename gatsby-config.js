module.exports = {
  siteMetadata: {
    title: `Octue`,
    description: ``,
    author: `@octue`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3498db`,
        display: `minimal-ui`,
        icon: `/src/assets/images/gatsby-icon.png`,
      },
    },
    `gatsby-theme-material-ui`
  ],
}

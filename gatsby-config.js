require('dotenv').config()

module.exports = {
  siteMetadata: {
    author: 'Octue Ltd',
    authorTwitterHandle: '@octue',
    description: 'Making scientists 20x more effective',
    image: 'src/assets/images/backgrounds/tinted-hex.jpg',
    lang: 'en',
    locale: 'en_EN',
    siteName: 'Octue',
    siteTwitterHandle: '@octue',
    siteUrl: 'https://www.octue.com',
    title: 'Octue',
  },
  plugins: [
    // `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        // The project environment to read from. Defaults to the primary environment:
        apiToken: process.env.DATO_API_TOKEN,
        environment: process.env.DATO_ENVIRONMENT,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        // previewMode: true,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        // disableLiveReload: false,
        // Setup locale fallbacks
        localeFallbacks: {
          de: ['en'],
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#3498db',
        display: 'minimal-ui',
        icon: 'src/assets/images/logos/octue/square-transparent-white.png',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans\:300,400,500,500i`, `Open Sans\:400`],
      },
    },
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-JWR2G94NMF',
          // "GA-TRACKING_ID", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the body rather than the head, to reduce page load time
          head: false,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**'],
        },
      },
    },
  ],
}

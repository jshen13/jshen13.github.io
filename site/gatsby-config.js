module.exports = {
  siteMetadata: {
    title: `Jeffrey Shen`,
    description: `About Jeffrey Shen's experience and activites.`,
    info: `I'm a fourth-year at UC Berkeley studying Electrical Engineering and Computer Science from LA. I love keeping up with technology & software and I'm currently pursuing a career in software engineering.`,
    author: `@jshen_13`,
    image: `/logo.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-pdf`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4278ed`,
        theme_color: `#4278ed`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-151003054-2", 
          "G-TJKYT54R24"
        ],
      },
    },
    `gatsby-plugin-preload-fonts`
  ],
}

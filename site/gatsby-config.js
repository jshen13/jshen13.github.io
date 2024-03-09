module.exports = {
  siteMetadata: {
    title: `Jeffrey Shen`,
    description: `About Jeffrey Shen's experience and activites.`,
    info: `I'm currently a software engineer based in San Francisco. I studied Electrical Engineering and Computer Science at UC Berkeley and graduated in 2023. I love keeping up with technology & software and have interests in computer vision and graphics, backend development, and data science.`,
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
        background_color: `#0a1136`,
        theme_color: `#0a1136`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo2.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: [
    //       "UA-151003054-2", 
    //       "G-TJKYT54R24"
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingIds: ["G-TJKYT54R24"],
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    `gatsby-plugin-preload-fonts`
  ],
}

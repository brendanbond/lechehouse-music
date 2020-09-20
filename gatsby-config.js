module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    about: `Lechehouse Music is a recording studio in Buda, TX. Located just South
    of Austin, it is owned and operated by Beto Martinez, Grammy Winning
    Guitarist, producer and Co-Founder of the Critically-Acclaimed bands
    Grupo Fantasma, Brownout and Money Chicha. A hybrid recording space, the
    studio is centered around a beloved Tascam 388 for comfy analog depth,
    also incorporating a digital workflow for a versatile approach. A recent
    agreement with Fatbeats Distribution will see future recordings released
    under the Lechehouse Label.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-graphql-codegen`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};

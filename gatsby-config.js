module.exports = {
  siteMetadata: {
    title: `My Awesome Blog`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Sachin C`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5r9hi1ocm7p7`,
        accessToken: `gbE8Ivmx3a2VHuqYndTrIa0PQHVSyx6B3VYuPhZwN1w`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: `6596ba85c65bbb99b9aef5e722a0a3`,
        previewMode: true,
        disableLiveReload: true,
      },
    },
    {
      resolve: `gatsby-source-contentstack`,
      options: {
        api_key: process.env.contentstack_api_key,
        delivery_token: process.env.contentstack_delivery_token,
        environment: process.env.contentstack_environment,
      },
    },
  ],
}

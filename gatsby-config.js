module.exports = {
  siteMetadata: {
    title: 'Mollo Tech',
    author: 'Andrew Mollohan',
    description: 'Andrew Mollohan | Software Engineer',
    siteUrl: 'https://atmollohan.github.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'atmollohan-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#1e1814',
        theme_color: '#c46a3c',
        display: 'standalone',
        icon: 'src/images/favicon.svg',
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          api: 'modern-compiler',
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
  ],
}

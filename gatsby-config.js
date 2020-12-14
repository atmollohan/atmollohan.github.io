module.exports = {
  siteMetadata: {
    title: 'Andrew Mollohan | Portfolio',
    author: 'Andrew Mollohan',
    description: 'Personal Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'atmollohan-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bw1.gif', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}

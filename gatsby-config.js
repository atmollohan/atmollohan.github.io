module.exports = {
  siteMetadata: {
    title: 'Mollo Tech',
    author: 'Andrew Mollohan',
    description: 'Andrew Mollohan | Software Engineer',
    siteUrl: 'https://mollo.tech',
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            title: `Mollo Tech Blog`,
            description: `Writing about infrastructure, DevSecOps, and side projects by Andrew Mollohan`,
            output: `/rss.xml`,
            match: `^/blog`,
            feed_url: `https://mollo.tech/rss.xml`,
            copyright: `Copyright ${new Date().getFullYear()} Andrew Mollohan`,
            query: `
              {
                site {
                  siteMetadata {
                    siteUrl
                  }
                }
                allMarkdownRemark(
                  filter: { frontmatter: { slug: { regex: "^/blog/" } } }
                  sort: { frontmatter: { date: DESC } }
                ) {
                  nodes {
                    excerpt(pruneLength: 200)
                    html
                    frontmatter {
                      slug
                      title
                      date
                      description
                      tags
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.nodes.map((node) => ({
                title: node.frontmatter.title,
                description: node.frontmatter.description || node.excerpt,
                date: node.frontmatter.date,
                url: `${site.siteMetadata.siteUrl}${node.frontmatter.slug}`,
                guid: `${site.siteMetadata.siteUrl}${node.frontmatter.slug}`,
                categories: node.frontmatter.tags || [],
                custom_elements: [{ 'content:encoded': node.html }],
              })),
          },
        ],
      },
    },
  ],
}

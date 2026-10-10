const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.error(result.errors)
    return
  }

  const template = path.resolve('./src/templates/shared-detail.jsx')
  const blogTemplate = path.resolve('./src/templates/blog-post.js')

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    if (node.frontmatter.slug) {
      createPage({
        path: node.frontmatter.slug,
        component: node.frontmatter.slug.startsWith('/blog/')
          ? blogTemplate
          : template,
        context: {
          id: node.id,
        },
      })
    }
  })
}

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

  const template = path.resolve(
    './src/pages/{markdownRemark.frontmatter__slug}.jsx'
  )

  result.data.allMarkdownRemark.nodes.forEach((node) => {
    if (node.frontmatter.slug) {
      createPage({
        path: node.frontmatter.slug,
        component: template,
        context: {
          id: node.id,
        },
      })
    }
  })
}

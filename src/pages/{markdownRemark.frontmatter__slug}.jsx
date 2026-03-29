import * as React from 'react'
import { graphql, Link } from 'gatsby'

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#333',
          marginBottom: '1rem',
          display: 'inline-block',
        }}
      >
        ← Back to Home
      </Link>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

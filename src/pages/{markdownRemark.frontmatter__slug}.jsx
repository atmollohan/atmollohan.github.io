import * as React from 'react'
import { graphql, Link } from 'gatsby'

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#1b1f22',
        minHeight: '100vh',
        color: '#ffffff',
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          marginBottom: '1rem',
          display: 'inline-block',
          fontSize: '1.5rem',
        }}
      >
        <i className="fa fa-home" aria-hidden="true"></i>
      </Link>
      <h1 style={{ color: '#ffffff' }}>{frontmatter.title}</h1>
      <div
        style={{ color: '#ffffff' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
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

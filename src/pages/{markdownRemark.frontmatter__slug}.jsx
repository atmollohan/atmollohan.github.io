import * as React from 'react'
import { graphql, Link } from 'gatsby'

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#1b1f22',
        padding: '4rem 2rem',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link
          to="/"
          style={{
            color: '#ff6b35',
            textDecoration: 'none',
            fontSize: '1rem',
            marginBottom: '2rem',
            display: 'inline-block',
          }}
        >
          ← Back to Home
        </Link>

        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '300',
            marginBottom: '0.5rem',
            color: '#ffffff',
          }}
        >
          {frontmatter.title}
        </h1>

        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
          <strong style={{ color: '#ffffff' }}>{frontmatter.company}</strong> |{' '}
          {frontmatter.role} | {frontmatter.period}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '2rem',
            }}
          >
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.7rem',
                  backgroundColor: '#000000',
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid #ffffff',
                  borderRadius: '3px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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
        company
        role
        period
        tags
      }
    }
  }
`

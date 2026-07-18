import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout location={{ pathname: frontmatter.slug }}>
      <article id="project-detail" className="active">
        <Link to="/" className="back-link">
          &larr; Back to Home
        </Link>

        <h1 className="project-title">{frontmatter.title}</h1>

        <p className="project-meta">
          <strong>{frontmatter.company}</strong> | {frontmatter.role} |{' '}
          {frontmatter.period}
        </p>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="tech-tags">
            {frontmatter.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 160)
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

export const Head = ({ data }) => {
  const { frontmatter, excerpt } = data.markdownRemark
  const siteUrl = 'https://mollo.tech'
  const pageUrl = `${siteUrl}${frontmatter.slug}`

  return (
    <>
      <title>{`${frontmatter.title} | Andrew Mollohan`}</title>
      <meta
        name="description"
        content={`${frontmatter.role} at ${frontmatter.company}. ${excerpt}`}
      />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={frontmatter.title} />
      <meta
        property="og:description"
        content={`${frontmatter.role} at ${frontmatter.company}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Andrew Mollohan" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={frontmatter.title} />
      <meta
        name="twitter:description"
        content={`${frontmatter.role} at ${frontmatter.company}`}
      />

      <html lang="en" />
    </>
  )
}

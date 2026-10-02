import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const formatDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout location={{ pathname: frontmatter.slug }}>
      <article id="blog-post" className="active">
        <Link to="/blog" className="back-link">
          &larr; All posts
        </Link>

        <h1 className="project-title">{frontmatter.title}</h1>

        <p className="project-meta">
          <time dateTime={frontmatter.date}>
            {formatDate(frontmatter.date)}
          </time>
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

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 200)
      frontmatter {
        slug
        title
        date
        description
        tags
      }
    }
  }
`

export const Head = ({ data }) => {
  const { frontmatter, excerpt } = data.markdownRemark
  const siteUrl = 'https://mollo.tech'
  const pageUrl = `${siteUrl}${frontmatter.slug}`
  const metaDescription = frontmatter.description || excerpt

  return (
    <>
      <title>{`${frontmatter.title} | Andrew Mollohan`}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:title" content={frontmatter.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Andrew Mollohan" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={frontmatter.title} />
      <meta name="twitter:description" content={metaDescription} />

      <html lang="en" />
    </>
  )
}

Head.propTypes = {
  data: PropTypes.object.isRequired,
}

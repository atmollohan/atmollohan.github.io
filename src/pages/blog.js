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

const PostCard = ({ title, slug, date, description, tags }) => (
  <div className="project-card">
    <h3>
      <Link to={slug}>{title}</Link>
    </h3>
    <p className="meta">
      <time dateTime={date}>{formatDate(date)}</time>
    </p>
    {description && <p className="meta">{description}</p>}
    {tags && tags.length > 0 && (
      <div className="tech-tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
)

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.array,
}

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={{ pathname: '/blog' }}>
      <article id="blog" className="active">
        <Link to="/" className="back-link">
          &larr; Back to Home
        </Link>

        <h2 className="major">Blog</h2>
        <p>Writing about infrastructure, DevSecOps, and side projects.</p>

        <div className="project-list">
          {posts.map((post) => (
            <PostCard
              key={post.frontmatter.slug}
              title={post.frontmatter.title}
              slug={post.frontmatter.slug}
              date={post.frontmatter.date}
              description={post.frontmatter.description}
              tags={post.frontmatter.tags}
            />
          ))}
        </div>

        <p className="meta">
          <a href="/rss.xml">Subscribe via RSS</a>
        </p>
      </article>
    </Layout>
  )
}

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "^/blog/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
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
  }
`

export const Head = () => (
  <>
    <title>Blog | Andrew Mollohan</title>
    <meta
      name="description"
      content="Writing about infrastructure, DevSecOps, and side projects by Andrew Mollohan"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Mollo Tech Blog"
      href="/rss.xml"
    />
    <html lang="en" />
  </>
)

export default BlogPage

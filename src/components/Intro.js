import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import SocialLinks from './SocialLinks'

const IntroContent = ({
  article,
  articleTimeout,
  onCloseArticle,
  html,
  projects,
}) => {
  const close = (
    <div
      role="button"
      aria-label="close"
      className="close"
      tabIndex={0}
      onClick={() => {
        onCloseArticle()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onCloseArticle()
        }
      }}
    ></div>
  )

  return (
    <article
      id="intro"
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">What I Do</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="intro-projects">
        <h3>Projects</h3>
        {projects.map((project) => (
          <Link
            key={project.frontmatter.slug}
            to={project.frontmatter.slug}
            className="intro-project-card"
          >
            <span className="project-card-title">
              {project.frontmatter.title}
            </span>
            {project.frontmatter.description && (
              <span className="project-card-desc">
                {project.frontmatter.description}
              </span>
            )}
            {project.frontmatter.tags &&
              project.frontmatter.tags.length > 0 && (
                <span className="project-card-tags">
                  {project.frontmatter.tags.join(', ')}
                </span>
              )}
          </Link>
        ))}
      </div>
      <SocialLinks />
      {close}
    </article>
  )
}

IntroContent.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  html: PropTypes.string,
  projects: PropTypes.array.isRequired,
}

const Intro = (props) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { slug: { eq: "/intro" } }) {
          html
        }
        allMarkdownRemark(
          filter: { frontmatter: { slug: { regex: "^/projects/" } } }
          sort: { frontmatter: { order: ASC } }
        ) {
          nodes {
            frontmatter {
              slug
              title
              description
              tags
            }
          }
        }
      }
    `}
    render={(data) => (
      <IntroContent
        html={data.markdownRemark.html}
        projects={data.allMarkdownRemark.nodes}
        {...props}
      />
    )}
  />
)

Intro.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Intro

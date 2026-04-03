import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const WorkContent = ({ article, articleTimeout, onCloseArticle, html }) => {
  const close = (
    <div
      role="button"
      aria-label="close"
      className="close"
      tabIndex={0}
      onClick={onCloseArticle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onCloseArticle()
        }
      }}
    ></div>
  )

  return (
    <article
      id="work"
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Work</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {close}
    </article>
  )
}

WorkContent.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  html: PropTypes.string,
}

const Work = (props) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { slug: { eq: "/work" } }) {
          html
        }
      }
    `}
    render={(data) => (
      <WorkContent html={data.markdownRemark.html} {...props} />
    )}
  />
)

Work.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Work

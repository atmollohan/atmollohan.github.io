import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SocialLinks from './SocialLinks'
import GitHubActivity from './GitHubActivity'

const IntroContent = ({ article, articleTimeout, onCloseArticle, html }) => {
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
      <GitHubActivity username="atmollohan" />
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
}

const Intro = (props) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { slug: { eq: "/intro" } }) {
          html
        }
      }
    `}
    render={(data) => (
      <IntroContent html={data.markdownRemark.html} {...props} />
    )}
  />
)

Intro.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Intro

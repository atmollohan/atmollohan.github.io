import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'

const ContactContent = ({ article, articleTimeout, onCloseArticle, html }) => {
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
      id="contact"
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Contact</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <ContactForm onCloseArticle={onCloseArticle} />
      <SocialLinks />
      {close}
    </article>
  )
}

ContactContent.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  html: PropTypes.string,
}

const Contact = (props) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { slug: { eq: "/contact" } }) {
          html
        }
      }
    `}
    render={(data) => (
      <ContactContent html={data.markdownRemark.html} {...props} />
    )}
  />
)

Contact.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default Contact

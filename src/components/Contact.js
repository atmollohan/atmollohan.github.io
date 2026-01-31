import React from 'react'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import SocialLinks from './SocialLinks'

const Contact = ({ article, articleTimeout, onCloseArticle, timeout }) => {
  const close = (
    <div
      role="button"
      aria-label="close"
      className="close"
      tabIndex={0}
      onClick={onCloseArticle}
      onKeyDown={onCloseArticle}
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
      <p>
        If you are looking to work together, drop me a line using the form I set
        up. I listed a couple links to my active social media if that's your
        jam.
      </p>
      <ContactForm onCloseArticle={onCloseArticle} />
      <SocialLinks />
      {close}
    </article>
  )
}

Contact.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Contact

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SocialLinks from './SocialLinks'
import twins from '../images/fampiece-crop.jpg'

const IntroContent = ({ article, articleTimeout, onCloseArticle, html }) => {
  const [response, setResponse] = useState('')

  const close = (
    <div
      role="button"
      aria-label="close"
      className="close"
      tabIndex={0}
      onClick={() => {
        onCloseArticle()
        setResponse('')
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onCloseArticle()
          setResponse('')
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
      <h2 className="major">Intro</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p>Can you guess which one is me?</p>
      <div>
        <div>
          <button className="button" onClick={() => setResponse('left')}>
            Left
          </button>
          <button className="button" onClick={() => setResponse('right')}>
            Right
          </button>
        </div>
        <br></br>
        {response === 'right' && <p>It&apos;s okay... I forgive you.</p>}
        {response === 'left' && <p>I knew you could do it!</p>}
        <div
          className="image main"
          style={{
            position: 'relative',
            display: 'block',
            textAlign: 'center',
            margin: '0 auto',
          }}
        >
          <img
            src={twins}
            alt="twins"
            style={{
              display: 'block',
              maxWidth: '100%',
              margin: '0 auto',
              animation:
                response === 'left' ? 'bounce 0.6s ease-in-out' : 'none',
            }}
          />
        </div>
        <br></br>
        <p>I grew up as one of a pair. Believe it or not, we are fraternal.</p>
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

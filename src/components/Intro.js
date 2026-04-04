import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import SocialLinks from './SocialLinks'
import twins from '../images/fampiece-crop.jpg'

const IntroContent = ({ article, articleTimeout, onCloseArticle, html }) => {
  const [response, setResponse] = useState('')
  const [animating, setAnimating] = useState(false)

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

  const handleGuess = (guess) => {
    if (animating) return
    setAnimating(true)
    setResponse(guess)
    setTimeout(() => setAnimating(false), 600)
  }

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
        <div className="guess-buttons">
          <button
            className={`button ${response === 'left' ? 'correct' : ''}`}
            onClick={() => handleGuess('left')}
          >
            Left
          </button>
          <button
            className={`button ${response === 'right' ? 'wrong' : ''}`}
            onClick={() => handleGuess('right')}
          >
            Right
          </button>
        </div>
        <br></br>
        {response === 'right' && (
          <p className="feedback wrong-feedback">
            It&apos;s okay... I forgive you.
          </p>
        )}
        {response === 'left' && (
          <p className="feedback correct-feedback">I knew you could do it!</p>
        )}
        <div
          className="image main twin-image"
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
            }}
            className={
              response === 'left'
                ? 'correct-guess'
                : response === 'right'
                  ? 'wrong-guess'
                  : ''
            }
          />
          {response && (
            <div className="twin-overlay">
              <span className="twin-label">
                {response === 'left' ? "✓ That's me!" : "✗ That's my twin!"}
              </span>
            </div>
          )}
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

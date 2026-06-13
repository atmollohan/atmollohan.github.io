import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import wholeFamSki from '../images/wholeFamSki.jpg'
import famPic from '../images/wholefam.jpg'
import buGrad from '../images/buGrad.jpg'
import optumPats from '../images/fiverings.jpg'
import twins from '../images/fampiece-crop.jpg'

const AboutContent = ({ article, articleTimeout, onCloseArticle, html }) => {
  const [guess, setGuess] = useState('')
  const [animating, setAnimating] = useState(false)

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

  const handleGuess = (g) => {
    if (animating) return
    setAnimating(true)
    setGuess(g)
    setTimeout(() => setAnimating(false), 600)
  }

  return (
    <article
      id="about"
      className={`${article === 'about' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">About</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <h3 className="major">The Twin Guessing Game</h3>
      <p>Can you guess which one is me?</p>
      <div>
        <div className="guess-buttons">
          <button
            className={`button ${guess === 'left' ? 'correct' : ''}`}
            onClick={() => handleGuess('left')}
          >
            Left
          </button>
          <button
            className={`button ${guess === 'right' ? 'wrong' : ''}`}
            onClick={() => handleGuess('right')}
          >
            Right
          </button>
        </div>
        {guess === 'right' && (
          <p className="feedback wrong-feedback">
            It&apos;s okay... I forgive you.
          </p>
        )}
        {guess === 'left' && (
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
            alt="Andrew and his fraternal twin"
            style={{
              display: 'block',
              maxWidth: '100%',
              margin: '0 auto',
            }}
            className={
              guess === 'left'
                ? 'correct-guess'
                : guess === 'right'
                  ? 'wrong-guess'
                  : ''
            }
          />
          {guess && (
            <div className="twin-overlay">
              <span className="twin-label">
                {guess === 'left' ? "✓ That's me!" : "✗ That's my twin!"}
              </span>
            </div>
          )}
        </div>
        <p>I grew up as one of a pair. Believe it or not, we are fraternal.</p>
      </div>
      <hr />
      <div className="row">
        <span className="image main">
          <img
            src={wholeFamSki}
            alt="retro mollohans at killington"
            loading="lazy"
          />
        </span>
        <span className="image main">
          <img src={famPic} alt="mollohans at phili" loading="lazy" />
        </span>
      </div>
      <span className="image main">
        <img src={buGrad} alt="andrew mollohan BU" loading="lazy" />
      </span>
      <span className="image main">
        <img src={optumPats} alt="OptumPatriots" loading="lazy" />
      </span>
      {close}
    </article>
  )
}

AboutContent.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  html: PropTypes.string,
}

const About = (props) => (
  <StaticQuery
    query={graphql`
      query {
        markdownRemark(frontmatter: { slug: { eq: "/about" } }) {
          html
        }
      }
    `}
    render={(data) => (
      <AboutContent html={data.markdownRemark.html} {...props} />
    )}
  />
)

About.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
}

export default About

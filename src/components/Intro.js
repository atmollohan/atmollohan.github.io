import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Confetti from './Confetti'
import SocialLinks from './SocialLinks'
import twins from '../images/fampiece-crop.jpg'
import resume from '../content/resume.current.v1.7.pdf'

const Intro = ({ article, articleTimeout, onCloseArticle, timeout }) => {
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
      onKeyDown={() => {
        onCloseArticle()
        setResponse('')
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
      <p>
        Oh... I didn't see you there. It looks like you stumbled across my
        portfolio. Feel free to look around or, if you're in a rush, grab a copy
        of my{' '}
        <a href={resume} target="_blank" rel="noreferrer" title="atmollohan">
          resume
        </a>
        . A resume only gives you a page's worth of information. So I figured it
        would be better to wear my JS hat and build a portfolio with modern
        frameworks. This is a good space for me to show what I can do in both my
        9-5 and my 5-9.
      </p>
      <p>
        Here are some technical areas of interest:
        <ul>
          <li>Cloud Computing</li>
          <li>Self Hosting</li>
          <li>Application Development</li>
          <li>AI / ML Development</li>
          <li>Computer Hardware</li>
          <li>Workflow Automation</li>
          <li>Software Security</li>
          <li>Data Engineering</li>
          <li>Decentralized Finance</li>
          <li>Ecommerce</li>
          <li>Digital Design</li>
        </ul>
      </p>
      <p>
        Reach out if you want to collaborate or just take a look around and let
        me know what you think!
      </p>
      {response === 'left' && <Confetti />}
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
        {response === 'right' && <p>It's okay... I forgive you.</p>}
        {response === 'left' && <p>I knew you could do it!</p>}
        <span className="image main">
          <img src={twins} alt="twins" />
        </span>
        <br></br>
        <p>I grew up as one of a pair. Believe it or not, we are fraternal.</p>
      </div>
      <p>
        In case you're curious about this site specifically, I used a
        React-based, open-source framework called Gatsby using a fairly minimal{' '}
        <a
          href="https://github.com/codebushi/gatsby-starter-dimension"
          target="_blank"
          rel="noreferrer"
        >
          design
        </a>{' '}
        that I pulled from their templates. I have the source code on{' '}
        <a
          href="https://github.com/atmollohan/atmollohan.github.io"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{' '}
        and am deploying it automatically on commits to main with GitHub
        Actions.
      </p>
      <SocialLinks />
      {close}
    </article>
  )
}

Intro.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Intro

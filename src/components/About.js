import React from 'react'
import PropTypes from 'prop-types'
import wholeFamSki from '../images/wholeFamSki.jpg'
import famPic from '../images/wholefam.jpg'
import buGrad from '../images/buGrad.jpg'

const About = ({ article, articleTimeout, onCloseArticle, timeout }) => {
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
      id="about"
      className={`${article === 'about' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">About</h2>
      <p>
        I grew up in Lincoln, RI right outside of Providence and had a pretty
        picturesque upbringing. With a population of about 20,000 it is a
        small town full of some great parks and Rhode Island's own Twin River
        Casino. I often reflect on the amazing memories and lifelong
        friendships I made during my Rhode Island childhood. Growing up, we
        spent winters skiing in Vermont and summers at the beach in
        Narragansett with friends and family. It's a dream of mine to own a
        large lake house and host all my friends and family. Right now I am
        absorbing all the knowledge and experience I can from the incredible
        people I've worked with in order to grow both as a person and a
        professional. If you can make yourself 1% better every day, over the
        course of a year that compounds into meaningful improvement.
      </p>
      <div className="row">
        <span className="image main">
          <img src={wholeFamSki} alt="retro mollohans at killington" />
        </span>
        <span className="image main">
          <img src={famPic} alt="mollohans at phili" />
        </span>
      </div>
      <p>
        I am so grateful to family for their support in all my endeavors. It's
        vital to recognize the importance of your loved ones. I would be
        nowhere had it not been for my parents, especially when it came to
        selecting a college — a big decision for an 18-year-old. I have
        strong opinions about the world in which we live and the systems with
        which we operate. However, it's those opinions that drive me forward
        to make changes. I attended&nbsp;
        <a href="https://www.bu.edu/" target="_blank" rel="noreferrer">
          Boston University
        </a>
        , majored in applied mathematics and computer science, and graduated
        with cum laude honors. To be honest, college was harder than high
        school but I'm glad that I went because I met great people and made
        some lasting memories.
      </p>
      <span className="image main">
        <img src={buGrad} alt="andrew mollohan BU" />
      </span>
      <div className="row">
        <p>
          I guess that brings us to the present. These days I live in Boston.
          I spent much of the COVID-19 pandemic working from home, which was
          a big change. It was strange at first being isolated but that
          allowed me to focus on learning. I picked up running when the gyms
          shut down and completed a couple half marathons since then. I still
          spend a lot of my free time in the winter skiing with friends and
          family.
        </p>
      </div>
      {close}
    </article>
  )
}

About.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default About

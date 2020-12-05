import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Confetti from '../components/Confetti'
import famPic from '../images/wholefam.jpg'
import optumPats from '../images/fiverings.jpg'
import twins from '../images/fampiece-crop.jpg'
import resume from '../files/Andrew Mollohan Resume.pdf'

const Main = ({ route, article, articleTimeout, onCloseArticle, timeout, setWrapperRef}) => {
  const [response, setResponse] = useState('')
  let close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle()
        setResponse('')
      }}
    ></div>
  )

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      
      <article
        id="intro"
        className={`${article === 'intro' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <p>From the heart of New England</p>
        <p>
          Oh ..... I didnt see you there. It looks like you stumbled across my
          Portfolio. Feel free to look around or if you're in a rush grab a copy
          of my{' '}
          <a href={resume} target="_blank" title="atmollohan">
            resume
          </a>
        </p>
        {response === 'left' && <Confetti />}
        <span className="image main">
          <img src={twins} alt="twins" />
        </span>
        <p>Can you guess which one is me?</p>
        <button className="button" onClick={() => setResponse('left')}>Left</button>
        <button className="button" onClick={() => setResponse('right')}>Right</button>
        {response==='right' && <p>Its okay, I forgive you.</p> }
        {close}
      </article>

      <article
        id="work"
        className={`${article === 'work' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src={optumPats} alt="" />
        </span>
        <p>
          After I graduating from Boston University in the Spring of 2018 I
          started my career as a Software Engineer at Optum which is the tech
          subsidiary of United Health Group which is the largest health
          insurance provider in the country having more than 49 million members.
        </p>
        <p>
          I have a passion for problem solving and felt that I could apply my
          skill set to a industry that is being modernized at a rapid pass.
          According to Baseline "Nearly 90% of all data has been created in the
          last two years" and the systems that currently support some of
          societies biggest institutions are running on some incredibly old
          systems that will need to be made more robust and scalable in the next
          coming years.
        </p>
        <p>
          It never ceases to amaze me at the innovation we are seeing all around
          the world that only exist because of how far modern software and
          hardware has taken us.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${article === 'about' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <p>
          I grew up in Lincoln RI right outside of Providence and had a pretty
          picturesque up bringing. My family and I would spend winters skiing in
          Vermont and summers at the beach in Naragansett.
        </p>
        <span className="image main">
          <img src={famPic} alt="" />
        </span>
        <p>
          Lets be honest we all owe such huge debts to family for their support
          in our endevors. Its important to recognize how important your loved
          ones are
        </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${article === 'contact' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <ul className="icons">
          <li>
            <a
              href="https://www.linkedin.com/in/andrew-mollohan-868b87b3"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/atmollohan" className="icon fa-github">
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/atmollohan/"
              className="icon fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/andrew.mollohan/"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

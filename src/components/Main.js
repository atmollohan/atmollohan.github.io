import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Confetti from '../components/Confetti'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
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
        <p>
          After graduating from Boston University in Spring 2018, I
          started my career as a Software Engineer at Optum. Optum is the tech
          subsidiary of United Health Group, the largest health
          insurance provider in the country currently supporting more than 49 million members.
        </p>
        <span className="image main">
          <img src={optumPats} alt="OptumPatriots" />
        </span>
        <p>
          I have a passion for problem solving and believe that I can apply my
          skill set to an industry that is being modernized at a rapid pass.
          According to Baseline, "Nearly 90% of all data has been created in the
          last two years." The systems currently supporting some of
          societie's biggest institutions are running on some incredibly antiquated
          systems that will need to be made more robust and scalable.
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
          picturesque up bringing. Growing up we would spend winters skiing in
          Vermont and summers at the beach in Naragansett with friends and family.
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
        <ContactForm onCloseArticle={onCloseArticle} />
        <SocialLinks />
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

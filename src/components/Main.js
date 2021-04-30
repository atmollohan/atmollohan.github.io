import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Confetti from '../components/Confetti'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import famPic from '../images/wholefam.jpg'
import optumPats from '../images/fiverings.jpg'
import twins from '../images/fampiece-crop.jpg'
import znBanner from '../images/znBanner.jpg'
import wholeFamSki from '../images/wholeFamSki.jpg'
import buGrad from '../images/buGrad.jpg'
import resume from '../files/atmResume.pdf'


const Main = ({ route, article, articleTimeout, onCloseArticle, timeout, setWrapperRef}) => {
  const [response, setResponse] = useState('')
  let close = (
    <div
      role = "button"
      aria-label="close"
      className="close"
      tabIndex={0}
      onClick={() => {
        onCloseArticle()
        setResponse('')
      }}
      onKeyDown={(e) => {
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
          <a href={resume} target="_blank" rel="noreferrer" title="atmollohan">
            resume
          </a>. Feel free to use reach out if you want to collaborate.
        </p>
        {response === 'left' && <Confetti />}
        <p>Can you guess which one is me?</p>
        <div>
          <div>
            <button className="button" onClick={() => setResponse('left')}>Left</button>
            <button className="button" onClick={() => setResponse('right')}>Right</button>
          </div>
          <br></br>
          {response==='right' && <p>Its okay... I forgive you.</p> }
          {response==='left' && <p>I knew you could do it!</p> }
          <span className="image main">
            <img src={twins} alt="twins" />
          </span>
          <br></br>
          <SocialLinks />
        </div>
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
        <p>
          After nearly three years of working at Optum I decided that I wanted to progress my
          carrier at a smaller more dynamic company. I started working at <a href="https://www.zeronorth.io/" target="_blank" rel="noopener noreferrer">ZeroNorth</a> in February of 2021
          and began to quickly immerse myself in the world of software security.
        </p>
        <span className="image">
          <img src={znBanner} alt="ZeroNorth Logo" className="logo" />
        </span>
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
          I grew up in Lincoln RI right outside of Providence and had a pretty picturesque up bringing.
          I have amazing memories and life long friendships from the small suburb that I grew up in. 
          Throughout childhood up we would spend winters skiing in Vermont and summers at the beach in Naragansett with friends and family.
        </p>
        <div className="row">
          <span className="image main">
            <img src={wholeFamSki} alt="retro mollohans at killington" />
          </span>
          <span className="image main">
            <img src={famPic} alt="mollohans at phili" />
          </span>
          {/* <span className="image main">
            <img src={famSki} alt="mollohans at killington" />
          </span> */}
        </div>
        <p>
          We all owe such huge debts to family for their support
          in our endevors. Its important to recognize how important your loved
          ones are. After graduating from highschool I attended 
          &nbsp;<a href="https://www.bu.edu/" target="_blank" rel="noreferrer">Boston Univeristy</a>&nbsp;
          and majored in applied mathematics and computer science graduating cum laude
        </p>
        <span className="image main">
          <img src={buGrad} alt="andrew mollohan BU" />
        </span>
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

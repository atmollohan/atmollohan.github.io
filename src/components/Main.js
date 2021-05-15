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
// import ikonStash from '../images/ikonStash.jpg'
// import famSki from '../images/famSki.jpg'
import resume from '../files/atmResume.pdf'
import FluidImage from '../components/FluidImage'


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
          </a>. Feel free to use reach out if you want to collaborate. Or just take a look around and let me know what you think
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
          <p>I grew up as 1 of a pair believe it or not we're fraternal.</p>
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
          society's biggest institutions are running on some incredibly antiquated
          systems that will need to be made more robust and scalable.
        </p>
        <p>
          Outside of my 9:00 to 5:00 I continue to work with new exciting technologies. 
          I have really enjoyed building out elegant UI's aside working with serverless and other various backend systems.
          The tools they have out there these days is pretty amazing, how quickly the industry shifts is part of the reason I love it so much.
          I have gotten the chance to help build and fully automate the deployment of a discord bot to aws via github actions with my friends.
          We currently have a mini economy implemented in our chat server that communicates with a database service called fauna DB.
          Another project I really enjoyed working on was a consulting contract 
          for the Partnership to Reduce Cancer in Rhode Island or <a href="https://www.prcri.org/annual-cancer-summit" target="_blank" rel="noopener noreferrer">PCRI</a>.
          They are doing a lot of great work surronding the much needed support to cancer community.
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
          A want to say that about 20,000 people lived there so it was a pretty small town fully of some great parks and Rhode Islands own Twin River.
          I often reflect on amazing memories and life long friendships I gained from my childhood in RI. 
          Growing up we would spend winters skiing in Vermont and summers at the beach in Naragansett with friends and family.
          Its a life goal of mine to one day own a big huge lake house that all my friends and family could come stay at.
          But that is then and this is now. The think I care about the most right now is absorbing all the knowledge and 
          expierience I can. If I can make yourself 1% better every day then on the year you'll be 37x where you started off at.
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
          We all owe such huge debts to family for their support in our endevors. 
          Its important to recognize how important your loved ones are and 
          I can openly admit that I would be nowhere today had I not had both my parents. 
          Especially when it came to College since it was such a big decision to what is basically a child.
          I have strong oppinions about the current system we live and operate in but those oppinions also fuel me to 
          drive forward and make changes. After graduating from highschool I attended 
          &nbsp;<a href="https://www.bu.edu/" target="_blank" rel="noreferrer">Boston Univeristy</a>&nbsp;
          and majored in applied mathematics and computer science graduating with cum laude honors.
          To be honest college was way harder than highschool but Im glad that I went because I met awesome people and made some great
          memories.
        </p>
        <span className="image main">
          <img src={buGrad} alt="andrew mollohan BU" />
        </span>
        <div className="row">
          <p>
            I guess that brings us to the present. These days I am living up in boston, I spent the whole covid year living and working from home
            which was a big change for sure. I felt a lot more isolated but that ended up driving me to work harder.
            I started running a lot and even bagged a couple virtual half marathons. I also love to climb, I mostly
            climb indoors but sometime get the chance to boulder outdoors. Another one of my life dreams to to go lead climbing
            out west even if its something easy I think it would be a lot of fun. I still spend a lot of my free time in the winter skiing.
            I am a proud Ikon Pass Holder
          </p>
          {/* <img style={{maxHeight: "auto", maxWidth: "30%"}} src={ikonStash} alt="ikon pass holder" /> */}
          <FluidImage />
        </div>
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
        <p>
          If you are looking to work together drop me a line directly with this form I set up.
          I listed a couple links to my active social medias in case its easier that way. 
        </p>
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

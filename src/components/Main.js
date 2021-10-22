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
        <p>
          Oh ..... I didnt see you there. It looks like you stumbled across my
          Portfolio. Feel free to look around or if you're in a rush grab a copy
          of my{' '}
          <a href={resume} target="_blank" rel="noreferrer" title="atmollohan">
            resume
          </a>. I figured it was better build a portfolio from scratch to show off some of the work that I do outside of my 9-5. 
          Feel free to use reach out if you want to collaborate. Or just take a look around and let me know what you think!
        </p>
        <p>
          Here are some areas of interest:
          <ul>
            <li>Digital Design</li>
            <li>Workflow Automation</li>
            <li>Web/Application development and design</li>
            <li>Cyber Security</li>
            <li>E-commerce</li>
            <li>Digital Marketing</li>
          </ul>
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
          Optum provided me a fantastic environment to learn and grow. 
        </p>
        <span className="image main">
          <img src={optumPats} alt="OptumPatriots" />
        </span>
        <p>
          I have a passion for problem solving and believe that I can apply my
          skill set to industries that are being modernized at a rapid pass.
          According to Baseline, "Nearly 90% of all data has been created in the
          last two years." The systems currently supporting some of
          society's biggest institutions are running on some incredibly antiquated
          systems that will need to be made more robust and scalable.
        </p>
        <p>
          Outside of my 9-5 I continue to work with new exciting technologies. 
          I have really enjoyed building out elegant UI's along side working with serverless and other various backend systems.
          The tools they have out there these days are pretty amazing, how quickly the industry shifts is part of the reason I love it so much.
          In the past year or so helped build and automate the deployment of a discord bot to aws via github actions with some friends.
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
        <p>
          In the past year I have also worked closely with a old friend to launch the digital assets for a local coffee roasting company.
          Teddy Sullivans We Roast Coffee has been a huge hit in our home town and has been growing fast.
          Local media outlet's have also taken notice including:
          <ul>
            <li><a href="https://www.valleybreeze.com/news/unlock-your-inner-barista-with-we-roast-coffee/article_e204dee8-5897-5521-a8a1-a20767b2a45f.html" target="_blank" rel="noreferrer">The Valley Breeze</a></li>  
            <li><a href="https://tourblackstone.com/we-roast-coffee/" target="_blank" rel="noreferrer">tourblackstone.com</a></li>  
          </ul>
          If you're in northern RI and are looking for the best cup of coffee around pop into his store during business hours at <a href="https://www.google.com/maps/place/WeRoast+Coffee/@41.9030184,-71.4110711,15z/data=!4m5!3m4!1s0x0:0x33a3e23755923cba!8m2!3d41.9030184!4d-71.4110711" target="_blank" rel="noreferrer">276 Front Street</a>.
        </p>
        <p>
          We built out a store and hosted it with a nice memorable url at <a href="https://weroast.coffee/" target="_blank" rel="noreferrer">weroast.coffee</a>.
          {/* <iframe src="https://weroast.coffee/" title="We Roast Store"></iframe> */}
        </p>
        <p>
          During initial talks I had built out a proof of concept blog using a JAM stack (JavaScript, API's and MARK down). I implemented the front end using Gatsby which is a JS framework built on top of react.
          I also used various third party software's and api's including: 
          <ul>
            <li>Auth0 for authentication and authorization</li>
            <li>Contentful for CMS</li>
            <li>Netlify for automated deployments and cloud hosting</li>
          </ul>
          You can see the latest deployed instance <a href="https://weroast.netlify.app/" target="_blank" rel="noreferrer">here</a>.
          {/* <iframe src="https://weroast.netlify.app/" title="We Roast Custom Blog"></iframe> */}
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
          I grew up in Lincoln RI right outside of Providence and had a pretty picturesque up bringing.
          About 20,000 people lived there so it was a pretty small town full of some great parks and Rhode Islands own Twin River Casino!
          I often reflect on the amazing memories and life long friendships I gained from my childhood in RI. 
          Growing up we would spend winters skiing in Vermont and summers at the beach in Naragansett with friends and family.
          It is a life goal of mine to one day own a big huge lake house that all my friends and family could come stay at.
          But that is then and this is now. Right now I am absorbing all the knowledge and 
          expierience I can from the incredible people I've worked with in order grow both as a person and a professional. If you can make yourself 1% better every day then on the year you'll be 37x where you started off at.
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
          It's important to recognize how important your loved ones are and 
          I can openly admit that I would be nowhere today had I not had both my parents. 
          Especially when it came to College since it was such a big decision to what is basically a child.
          I have strong oppinions about the current system we live and operate in but those oppinions also fuel me to 
          drive forward and make changes. After graduating from highschool I attended 
          &nbsp;<a href="https://www.bu.edu/" target="_blank" rel="noreferrer">Boston Univeristy</a>&nbsp;
          and majored in applied mathematics and computer science graduating with cum laude honors.
          To be honest college was way harder than highschool but I am glad that I went because I met awesome people and made some great
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

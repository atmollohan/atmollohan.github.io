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
import resume from '../files/atmReactiveResume.pdf'

const Main = ({
  route,
  article,
  articleTimeout,
  onCloseArticle,
  timeout,
  setWrapperRef,
}) => {
  const [response, setResponse] = useState('')
  let close = (
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
          </a>
          . A resume only gives you a page worth of information. So I figured it
          would be better to wear my JS hat and build a portfolio from modern
          frameworks. This is a good space for me to show off what I can do in
          both my 9:00-5:00 and my 5:00-9:00.
        </p>
        <p>
          Here are some technical areas of interest:
          <ul>
            <li>Cloud Computing</li>
            <li>AI Development</li>
            <li>Application Development</li>
            <li>Data Engineer / Analysis</li>
            <li>Workflow Automation</li>
            <li>Decentralized Finance</li>
            <li>Computer Hardware / Self Hosting</li>
            <li>Software Security Scanning and Analysis</li>
            <li>Digital Design / Marketing / E-commerce</li>
          </ul>
        </p>
        <p>
          Reach out if you want to collaborate or just take a look around and
          let me know what you think!
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
          {response === 'right' && <p>Its okay... I forgive you.</p>}
          {response === 'left' && <p>I knew you could do it!</p>}
          <span className="image main">
            <img src={twins} alt="twins" />
          </span>
          <br></br>
          <p>I grew up as 1 of a pair. Believe it or not we are fraternal.</p>
        </div>
        <p>
          In case you're curious about this site specifically, I used a
          React-based, open-source framework called Gatsby using a fairly
          minimal{' '}
          <a
            href="https://github.com/codebushi/gatsby-starter-dimension"
            target="_blank"
            rel="noreferrer"
          >
            design
          </a>{' '}
          that I pulled from their templates. I have the source code on
          <a
            href="https://github.com/atmollohan/atmollohan.github.io"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>{' '}
          and am deploying it automatically on commits to main with github
          actions.
        </p>
        <SocialLinks />
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
          After graduating from Boston University in Spring 2018, I started my
          career as a Software Engineer at Optum. Optum is the tech subsidiary
          of United Health Group, the largest health insurance provider in the
          country, currently supporting more than 49 million members. Optum
          provided me a fantastic environment to learn and grow.
        </p>
        <span className="image main">
          <img src={optumPats} alt="OptumPatriots" />
        </span>
        <p>
          I have a passion for problem solving and believe that I can apply my
          skill set to industries that are being modernized at a rapid pace.
          According to Baseline, "Nearly 90% of all data has been created in the
          last two years." The systems currently supporting some of society's
          biggest institutions are running on some incredibly antiquated systems
          that will need to be made more robust and scalable.
        </p>
        <p>
          Outside of my 9:00 to 5:00, I continue to work with new and exciting
          technologies. I have really enjoyed building out elegant user
          interfaces while working with serverless and other varied backend
          systems. The tools available these days are pretty amazing. The speed
          at which the industry shifts is part of the reason I love it so much.
          Recently, I worked with some friends to build and automate the
          deployment of a discord bot to amazon web services via github actions.
          We currently have a mini economy implemented in our chat server that
          communicates with a database service called fauna DB. Another project
          I really enjoyed working on was a consulting contract with the
          Partnership to Reduce Cancer in Rhode Island (
          <a
            href="https://www.prcri.org/annual-cancer-summit"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRCRI
          </a>
          ). They are are providing a tremendous amount of support to the cancer
          community in Rhode Island.
        </p>
        <p>
          After nearly three years of working at Optum, I decided that I wanted
          to progress my career at a smaller, more dynamic company that would
          allow me to grow my technical skills faster. I began working at{' '}
          <a
            href="https://www.zeronorth.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ZeroNorth
          </a>
          , a Boston based startup, in February 2021 and quickly immersed myself
          in the world of Cybersecurity. ZeroNorth offered a robust platform for
          automating and orchestrating security scanning offereing a wide range
          of different tools. Similar to my role at Optum, I worked in a full
          stack capacity working with an Angular frontend, Node API, Typescript
          libraries and Python security runners. I also directly worked with a
          wide range of the scanners themselves. I learned a tremendous amount
          in my time at ZeroNorth and am super grateful for the team we had.
        </p>
        <span className="image">
          <img src={znBanner} alt="ZeroNorth Logo" className="logo" />
        </span>
        <p>
          Throughout the first year of or two of Covid I had worked closely with
          an old friend to launch the digital assets for his local coffee
          company. Teddy Sullivan's{' '}
          <a href="https://weroast.coffee/" target="_blank" rel="noreferrer">
            We Roast Coffee
          </a>{' '}
          has been a huge hit in our hometown and has developed a big base of
          locals who sing its praises. Local media outlets have also taken
          notice:
          <ul>
            <li>
              <a
                href="https://www.valleybreeze.com/news/unlock-your-inner-barista-with-we-roast-coffee/article_e204dee8-5897-5521-a8a1-a20767b2a45f.html"
                target="_blank"
                rel="noreferrer"
              >
                The Valley Breeze
              </a>
            </li>
            <li>
              <a
                href="https://tourblackstone.com/we-roast-coffee/"
                target="_blank"
                rel="noreferrer"
              >
                tourblackstone.com
              </a>
            </li>
          </ul>
          If you're in northern RI, looking for the best cup of coffee around,
          then pop into his store during business hours at{' '}
          <a
            href="https://www.google.com/maps/place/WeRoast+Coffee/@41.9030184,-71.4110711,15z/data=!4m5!3m4!1s0x0:0x33a3e23755923cba!8m2!3d41.9030184!4d-71.4110711"
            target="_blank"
            rel="noreferrer"
          >
            276 Front Street
          </a>
          . Though word on the street is that they are moving{' '}
          <a
            href="https://www.valleybreeze.com/news/weroasts-sullivan-to-serve-community-coffee-and-cocktails-at-new-headquarters/article_57d716ac-fe7e-11ee-a708-8f175a596772.html"
            target="_blank"
            rel="noreferrer"
          >
            soon
          </a>
          .
        </p>
        <p>
          We built out an online store with shopify and hosted it with a nice
          memorable domain of{' '}
          <a href="https://weroast.coffee/" target="_blank" rel="noreferrer">
            weroast.coffee
          </a>
          .
        </p>
        <p>
          During initial talks I built out a blot as a proof of concept using a
          JAM stack (JavaScript, APIs and mark down). I implemented the front
          end using Gatsby which is a javascript framework built on top of
          react. I also used various third party software and APIs including:{' '}
          <a href="https://auth0.com/" target="_blank" rel="noreferrer">
            Auth0
          </a>{' '}
          for authentication and authorization{' '}
          <a
            href="https://www.contentful.com/"
            target="_blank"
            rel="noreferrer"
          >
            Contentful
          </a>{' '}
          for content management and{' '}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>{' '}
          for automated deployments and cloud hosting. The original blog was
          since replaced with the shopify store and front page.
        </p>
        <p>
          In November of 2021 ZeroNorth was aquired by{' '}
          <a
            href="https://harness.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harness
          </a>{' '}
          which is a leading cloud software development platform that sells a
          variety of products to speed up various parts of the software delivery
          life cycle (SDLC) for hundreds of fortue 500 companies. ZeroNorth
          became a new Harness module called Security Tests Orchestration (STO)
          which was the first official Security solution to be rolled out at
          Harness in the Summer of 2022 which was a little more than a half
          years work after being aquired.
        </p>
        <p>
          I have been working for Harness since then doing all kinds sorts
          technical work for them. The results of my hard work were shown in my
          contribution to th eteam and success of our module earing me two
          annual star performer awards (2022, 2024), well have to see if I can
          get the hat trick. This growing expierience and responsibilities along
          with the support of my awesome team has helped me to move level up as
          an engineer many times and advance my career greatly. Im now at a
          point where no problem seems too big because I've seen it all.
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
          I grew up in Lincoln, RI right outside of Providence and had a pretty
          picturesque up bringing. With a population of about 20,000 it is a
          pretty small town full of some great parks and Rhode Island's own Twin
          River Casino! I often reflect on the amazing memories and life-long
          friendships I made during my Rhode Island childhood. Growing we spent
          winters skiing in Vermont and summers at the beach in Naragansett with
          friends and family. It's a dream of mine to own a big huge lake house
          and host all my friends and family. But that is then and this is now.
          Right now I am absorbing all the knowledge and expierience I can from
          the incredible people I've worked with in order grow both as a person
          and a professional. If you can make yourself 1% better every day then
          at the end of the year you will have improved by a factor 37.
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
          I am so grateful to family for their support in all my endevors. It's
          vital to recognize the importance of your loved ones. I would be
          nowhere had it not been for my parents. Especially when it came to
          selecting a College. A big decision for an 18 year old. I have strong
          opinions about the world in which we live and the systems with which
          we operate. However it's those opinions that drive me forward to make
          changes. I attended &nbsp;
          <a href="https://www.bu.edu/" target="_blank" rel="noreferrer">
            Boston Univeristy
          </a>
          , majored in applied mathematics and computer science, and graduated
          with cum laude honors. To be honest, college was way harder than high
          school but I am glad that I went because I met awesome people and made
          some great memories.
        </p>
        <span className="image main">
          <img src={buGrad} alt="andrew mollohan BU" />
        </span>
        <div className="row">
          <p>
            I guess that brings us to the present. These days I live in Boston.
            I spent all of Covid working from home, which was a big
            change for sure. It was strange at first being isolated but that ended up
            allowing me to learn more. I picked up running when the gyms shut down and even bagged a
            couple half marathons since then. I still spend a lot of my free time in the winter skiing with friends and family.
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
          If you are looking to work together drop me a line directly with this
          form I set up. I listed a couple links to my active social medias if
          that's your jam.
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

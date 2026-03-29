import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import wholeFamSki from '../images/wholeFamSki.jpg'
import famPic from '../images/wholefam.jpg'
import buGrad from '../images/buGrad.jpg'
import optumPats from '../images/fiverings.jpg'

const AboutContent = ({ article, articleTimeout, onCloseArticle, html }) => {
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
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="row">
        <span className="image main">
          <img src={wholeFamSki} alt="retro mollohans at killington" />
        </span>
        <span className="image main">
          <img src={famPic} alt="mollohans at phili" />
        </span>
      </div>
      <span className="image main">
        <img src={buGrad} alt="andrew mollohan BU" />
      </span>
      <span className="image main">
        <img src={optumPats} alt="OptumPatriots" />
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

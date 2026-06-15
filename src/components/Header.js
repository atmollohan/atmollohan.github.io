import PropTypes from 'prop-types'
import React from 'react'

const Header = (props) => (
  <header id="header" style={!props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* TODO: Add Mollo Tech logo - generate SVG logo with amber accent */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mollo Tech</h1>
        <p className="subhead">Andrew Mollohan</p>
        <p className="tagline">Cloud Platform Engineer</p>
        <p className="byline">Building infrastructure for autonomous systems</p>
      </div>
    </div>
    <nav aria-label="Main navigation">
      <ul>
        {['work', 'intro', 'about', 'contact'].map((section) => (
          <li key={section}>
            <button
              className={section === 'work' ? 'button special' : ''}
              aria-current={props.article === section ? 'page' : undefined}
              aria-expanded={props.article === section}
              onClick={() => {
                props.onOpenArticle(section)
              }}
            >
              {section === 'work'
                ? "What I've Built"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  article: PropTypes.string,
}

export default Header

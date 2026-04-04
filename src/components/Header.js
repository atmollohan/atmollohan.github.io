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
        <h3>Andrew Mollohan</h3>
        <p>Head of an engineer, heart of a pioneer.</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

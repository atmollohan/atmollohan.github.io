import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const routes = [
  { to: '/work', label: 'All Work' },
  { to: '/projects', label: 'All Projects' },
  { to: '/blog', label: 'Blog' },
]

const Header = (props) => (
  <header id="header" style={!props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* TODO: Add Mollo Tech logo - generate SVG logo with amber accent */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Mollo Tech</h1>
        <p className="subhead">Andrew Mollohan</p>
      </div>
    </div>
    <nav aria-label="Main navigation">
      <ul>
        {['intro', 'about', 'work', 'contact'].map((section) => (
          <li key={section}>
            <button
              className={''}
              aria-current={props.article === section ? 'page' : undefined}
              aria-expanded={props.article === section}
              onClick={() => {
                props.onOpenArticle(section)
              }}
            >
              {section === 'work'
                ? 'Work'
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
        {routes.map((route) => (
          <li key={route.to}>
            <Link to={route.to}>{route.label}</Link>
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

import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const sections = ['intro', 'about', 'work']

const routes = [
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
]

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1)

const SectionButton = ({ section, isActive, onOpen }) => (
  <li>
    <button
      className={''}
      aria-current={isActive ? 'page' : undefined}
      aria-expanded={isActive}
      onClick={() => onOpen(section)}
    >
      {capitalize(section)}
    </button>
  </li>
)

SectionButton.propTypes = {
  section: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func,
}

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
        {sections.map((section) => (
          <SectionButton
            key={section}
            section={section}
            isActive={props.article === section}
            onOpen={props.onOpenArticle}
          />
        ))}
        {routes.map((route) => (
          <li key={route.to}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
        <SectionButton
          section="contact"
          isActive={props.article === 'contact'}
          onOpen={props.onOpenArticle}
        />
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

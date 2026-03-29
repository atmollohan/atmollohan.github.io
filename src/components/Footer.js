import React from 'react'
import PropTypes from 'prop-types'
import packageJson from '../../package.json'

const Footer = (props) => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">v{packageJson.version}</p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer

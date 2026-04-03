import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {
  useEffect(() => {
    const links = document.querySelectorAll('main a[href^="http"]')
    links.forEach((link) => {
      link.setAttribute('target', '_blank')
      link.setAttribute('rel', 'noopener noreferrer')
    })
  }, [])

  let content

  if (location && location.pathname === '/') {
    content = <div>{children}</div>
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    )
  }

  return <>{content}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout

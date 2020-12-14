import PropTypes from 'prop-types'
import React, { useState } from 'react'

const SocialLinks = () => (
  <ul className="icons">
    <li>
      <a
        href="https://www.linkedin.com/in/andrew-mollohan-868b87b3"
        className="icon fa-linkedin"
      >
        <span className="label">LinkedIn</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/atmollohan" className="icon fa-github">
        <span className="label">GitHub</span>
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/atmollohan/"
        className="icon fa-instagram"
      >
        <span className="label">Instagram</span>
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/andrew.mollohan/"
        className="icon fa-facebook"
      >
        <span className="label">Facebook</span>
      </a>
    </li>
  </ul>
)

export default SocialLinks

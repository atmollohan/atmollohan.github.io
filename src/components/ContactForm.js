import PropTypes from 'prop-types'
import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = ({ onCloseArticle }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
      setTimeout(() => {
        onCloseArticle()
        setServerState({
          submitting: false,
          status: null,
        })
      }, 2000)
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://getform.io/f/6e8ba933-607a-4319-98a6-d36450623767',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Thanks for reaching out!', form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <form method="post" onSubmit={handleOnSubmit}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      <ul className="actions">
        <li>
          <input
            type="submit"
            value="Send Message"
            className="special"
            disabled={serverState.submitting}
          />
        </li>
        <li>
          <input type="reset" value="Reset" />
        </li>
        {serverState.status && (
          <li className={!serverState.status.ok ? 'errorMsg' : ''}>
            {serverState.status.msg}
          </li>
        )}
      </ul>
    </form>
  )
}

ContactForm.propTypes = {
  onCloseArticle: PropTypes.func,
}

export default ContactForm

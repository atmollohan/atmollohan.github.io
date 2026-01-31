import PropTypes from 'prop-types'
import React from 'react'
import Intro from './Intro'
import Work from './Work'
import About from './About'
import Contact from './Contact'

const Main = ({
  route,
  article,
  articleTimeout,
  onCloseArticle,
  timeout,
  setWrapperRef,
}) => {

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <Intro
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      />

      <Work
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      />

      <About
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      />

      <Contact
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
        timeout={timeout}
      />
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

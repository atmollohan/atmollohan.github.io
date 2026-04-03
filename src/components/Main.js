import PropTypes from 'prop-types'
import React from 'react'
import Intro from './Intro'
import Work from './Work'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const Main = ({
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
      />

      <Work
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
      />

      <Projects
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
      />

      <About
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
      />

      <Contact
        article={article}
        articleTimeout={articleTimeout}
        onCloseArticle={onCloseArticle}
      />
    </div>
  )
}

Main.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

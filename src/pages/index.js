import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

const IndexPage = ({ location }) => {
  const [isArticleVisible, setIsArticleVisible] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [articleTimeout, setArticleTimeout] = useState(false)
  const [article, setArticle] = useState('')
  const [loading, setLoading] = useState('is-loading')
  const wrapperRef = useRef(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading('')
      setShowContent(true)
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (isArticleVisible) {
          setArticleTimeout(false)
          setTimeout(() => {
            setIsArticleVisible(false)
            setArticle('')
          }, 400)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isArticleVisible])

  const handleOpenArticle = useCallback(
    (selectedArticle) => {
      if (isArticleVisible) return
      setIsArticleVisible(true)
      setArticle(selectedArticle)
      setArticleTimeout(false)
      setTimeout(() => {
        setArticleTimeout(true)
      }, 100)
    },
    [isArticleVisible]
  )

  const handleCloseArticle = useCallback(() => {
    setArticleTimeout(false)
    setTimeout(() => {
      setIsArticleVisible(false)
      setArticle('')
    }, 400)
  }, [])

  const setWrapperRef = useCallback((node) => {
    wrapperRef.current = node
  }, [])

  return (
    <Layout location={location}>
      <div
        className={`body ${loading} ${
          isArticleVisible ? 'is-article-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header
            onOpenArticle={handleOpenArticle}
            timeout={showContent && !isArticleVisible}
          />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={showContent}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            setWrapperRef={setWrapperRef}
          />
          <Footer timeout={showContent && !isArticleVisible} />
        </div>
        <div id="bg"></div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>Mollo Tech | Portfolio | Andrew Mollohan</title>
    <meta name="description" content="Portfolio of Andrew Mollohan" />
    <meta
      name="keywords"
      content="portfolio, software engineer, developer, Boston"
    />
    <html lang="en" />
  </>
)

IndexPage.propTypes = {
  location: PropTypes.object,
}

export default IndexPage

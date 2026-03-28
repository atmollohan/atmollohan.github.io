import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export const Head = () => (
  <>
    <title>404 - Page Not Found | Andrew Mollohan</title>
    <meta name="robots" content="noindex" />
    <html lang="en" />
  </>
)

export default NotFoundPage

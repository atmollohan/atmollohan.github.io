import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>New page coming soon...</h1>
    <Link to="/">Go back to the goods</Link>
  </Layout>
)

export const Head = () => (
  <>
    <title>Coming Soon | Andrew Mollohan</title>
    <meta name="robots" content="noindex" />
    <html lang="en" />
  </>
)

export default SecondPage

import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './layout'

describe('Layout', () => {
  it('renders children', () => {
    render(
      <Layout location={{ pathname: '/' }}>
        <p>Test child content</p>
      </Layout>
    )
    expect(screen.getByText('Test child content')).toBeInTheDocument()
  })

  it('renders skip to content link', () => {
    render(
      <Layout location={{ pathname: '/' }}>
        <p>Content</p>
      </Layout>
    )
    const skipLink = screen.getByText('Skip to content')
    expect(skipLink).toBeInTheDocument()
    expect(skipLink).toHaveAttribute('href', '#main')
    expect(skipLink).toHaveClass('skip-to-content')
  })

  it('renders wrapper for non-root pages', () => {
    const { container } = render(
      <Layout location={{ pathname: '/v2' }}>
        <p>Content</p>
      </Layout>
    )
    expect(container.querySelector('#wrapper.page')).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import BlogPage from './blog'

jest.mock('gatsby', () => {
  const MockLink = ({ children, to, ...props }) => (
    <a href={to} {...props}>
      {children}
    </a>
  )

  MockLink.propTypes = {
    children: require('prop-types').node,
    to: require('prop-types').string,
  }

  return {
    graphql: jest.fn(),
    withPrefix: jest.fn((path) => path),
    Link: MockLink,
  }
})

const postNode = {
  frontmatter: {
    slug: '/blog/building-lil-chef',
    title: 'Building Lil Chef: A Local-First Meal Planner',
    date: '2026-09-29',
    description: 'Five providers, no ORM, a Raspberry Pi deploy target.',
    tags: ['Next.js', 'Ollama'],
  },
  excerpt: 'A local-first meal planner.',
}

const pageData = (nodes) => ({ allMarkdownRemark: { nodes } })

describe('BlogPage', () => {
  it('renders one card per post, linked to its slug', () => {
    render(<BlogPage data={pageData([postNode])} />)

    const link = screen.getByRole('link', {
      name: 'Building Lil Chef: A Local-First Meal Planner',
    })
    expect(link).toHaveAttribute('href', '/blog/building-lil-chef')
  })

  it('renders the formatted date on the card', () => {
    render(<BlogPage data={pageData([postNode])} />)

    const time = screen.getByText('September 29, 2026')
    expect(time).toHaveAttribute('datetime', '2026-09-29')
  })

  it('renders the description and tags', () => {
    render(<BlogPage data={pageData([postNode])} />)

    expect(
      screen.getByText('Five providers, no ORM, a Raspberry Pi deploy target.')
    ).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Ollama')).toBeInTheDocument()
  })

  it('links to the rss feed with a plain anchor, not a route link', () => {
    render(<BlogPage data={pageData([postNode])} />)

    expect(screen.getByText('Subscribe via RSS')).toHaveAttribute(
      'href',
      '/rss.xml'
    )
  })

  it('links back to the site', () => {
    render(<BlogPage data={pageData([postNode])} />)

    expect(screen.getByText(/Back to Home/)).toHaveAttribute('href', '/')
  })

  it('renders without an inline display style on the article', () => {
    const { container } = render(<BlogPage data={pageData([postNode])} />)

    const article = container.querySelector('#blog')
    expect(article.getAttribute('style')).toBeNull()
  })

  it('renders a post with no tags and no description', () => {
    const node = {
      frontmatter: {
        slug: '/blog/a-post',
        title: 'A Post',
        date: '2026-01-15',
        description: null,
        tags: [],
      },
      excerpt: 'Short excerpt.',
    }

    render(<BlogPage data={pageData([node])} />)

    expect(screen.getByRole('link', { name: 'A Post' })).toHaveAttribute(
      'href',
      '/blog/a-post'
    )
    expect(screen.getByText('January 15, 2026')).toBeInTheDocument()
  })
})

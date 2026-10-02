import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { render, screen } from '@testing-library/react'
import BlogPostTemplate, { Head } from './blog-post'

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

const postData = {
  markdownRemark: {
    html: '<p>Meal plans from a local-first app.</p>',
    excerpt: 'Meal plans from a local-first app.',
    frontmatter: {
      slug: '/blog/building-lil-chef',
      title: 'Building Lil Chef: A Local-First Meal Planner',
      date: '2026-09-29',
      description: 'Five providers, no ORM, a Raspberry Pi deploy target.',
      tags: ['Next.js', 'PostgreSQL', 'Ollama'],
    },
  },
}

describe('BlogPostTemplate', () => {
  it('renders the post title', () => {
    render(<BlogPostTemplate data={postData} />)

    expect(
      screen.getByRole('heading', {
        name: 'Building Lil Chef: A Local-First Meal Planner',
      })
    ).toBeInTheDocument()
  })

  it('renders the date as a local calendar day, not the day before', () => {
    render(<BlogPostTemplate data={postData} />)

    const time = screen.getByText('September 29, 2026')
    expect(time).toBeInTheDocument()
    expect(time).toHaveAttribute('datetime', '2026-09-29')
  })

  it('renders every tag as a chip', () => {
    render(<BlogPostTemplate data={postData} />)

    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('Ollama')).toBeInTheDocument()
  })

  it('renders the rendered post body', () => {
    const { container } = render(<BlogPostTemplate data={postData} />)

    const body = container.querySelector('.project-content')
    expect(body.innerHTML).toBe('<p>Meal plans from a local-first app.</p>')
  })

  it('links back to the blog listing', () => {
    render(<BlogPostTemplate data={postData} />)

    const backLink = screen.getByText(/All posts/)
    expect(backLink).toHaveAttribute('href', '/blog')
  })

  it('renders without tags', () => {
    const data = {
      markdownRemark: {
        ...postData.markdownRemark,
        frontmatter: { ...postData.markdownRemark.frontmatter, tags: [] },
      },
    }

    const { container } = render(<BlogPostTemplate data={data} />)

    expect(container.querySelector('.tech-tags')).toBeNull()
    expect(
      screen.getByRole('heading', {
        name: 'Building Lil Chef: A Local-First Meal Planner',
      })
    ).toBeInTheDocument()
  })
})

describe('Head', () => {
  it('falls back to the excerpt when the post has no description', () => {
    const data = {
      markdownRemark: {
        ...postData.markdownRemark,
        frontmatter: {
          ...postData.markdownRemark.frontmatter,
          description: null,
        },
      },
    }

    const markup = renderToStaticMarkup(<Head data={data} />)

    expect(markup).toContain(
      '<meta name="description" content="Meal plans from a local-first app."/>'
    )
  })

  it('uses the description for canonical and og metadata', () => {
    const markup = renderToStaticMarkup(<Head data={postData} />)

    expect(markup).toContain(
      '<link rel="canonical" href="https://mollo.tech/blog/building-lil-chef"/>'
    )
    expect(markup).toContain('<meta property="og:type" content="article"/>')
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import Intro from './Intro'

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
    StaticQuery: jest.fn(({ render }) =>
      render({
        markdownRemark: {
          html: '<p>Test intro content</p>',
        },
        allMarkdownRemark: {
          nodes: [],
        },
      })
    ),
    graphql: jest.fn(),
    withPrefix: jest.fn((path) => path),
    Link: MockLink,
  }
})

describe('Intro', () => {
  const mockOnCloseArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders intro heading when article is active', () => {
    render(
      <Intro
        article="intro"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByText('What I Do')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(
      <Intro
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('links to the current resume PDF', () => {
    render(
      <Intro
        article="intro"
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByText('Download Resume (PDF)')).toHaveAttribute(
      'href',
      '/resume.1.8.0.pdf'
    )
  })

  it('renders close button', () => {
    render(
      <Intro
        article="intro"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByLabelText('close')).toBeInTheDocument()
  })
})

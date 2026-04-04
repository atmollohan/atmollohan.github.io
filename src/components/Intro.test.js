import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Intro from './Intro'

jest.mock('gatsby', () => ({
  StaticQuery: jest.fn(({ render }) =>
    render({
      markdownRemark: {
        html: '<p>Test intro content</p>',
      },
    })
  ),
  graphql: jest.fn(),
}))

describe('Intro', () => {
  const mockOnCloseArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders intro content', () => {
    render(
      <Intro
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(
      screen.getByText(/can you guess which one is me/i)
    ).toBeInTheDocument()
  })

  it('renders left and right buttons', () => {
    render(
      <Intro
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('shows correct feedback when left button is clicked', () => {
    render(
      <Intro
        article="intro"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    fireEvent.click(screen.getByText('Left'))
    expect(screen.getByText(/i knew you could do it/i)).toBeInTheDocument()
  })

  it('shows wrong feedback when right button is clicked', () => {
    render(
      <Intro
        article="intro"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    fireEvent.click(screen.getByText('Right'))
    expect(screen.getByText(/it.s okay.* i forgive you/i)).toBeInTheDocument()
  })

  it('renders intro heading when article is active', () => {
    render(
      <Intro
        article="intro"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByText('Intro')).toBeInTheDocument()
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

  it('renders fraternal twins text', () => {
    render(
      <Intro
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
      />
    )

    expect(screen.getByText(/we are fraternal/i)).toBeInTheDocument()
  })
})

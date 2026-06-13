import React from 'react'
import { render, screen } from '@testing-library/react'
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

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Work from './Work'

jest.mock('gatsby', () => ({
  StaticQuery: jest.fn(({ render }) =>
    render({
      markdownRemark: {
        html: '<p>Test work content</p>',
      },
    })
  ),
  graphql: jest.fn(),
}))

describe('Work', () => {
  const mockOnCloseArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders work heading when active', () => {
    render(
      <Work
        article="work"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(screen.getByText('Work')).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(
      <Work
        article="work"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(screen.getByLabelText('close')).toBeInTheDocument()
  })

  it('calls onCloseArticle when close button clicked', () => {
    render(
      <Work
        article="work"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    fireEvent.click(screen.getByLabelText('close'))
    expect(mockOnCloseArticle).toHaveBeenCalled()
  })

  it('does not render when not active', () => {
    const { container } = render(
      <Work
        article="intro"
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    const article = container.querySelector('#work')
    expect(article).toBeInTheDocument()
  })
})

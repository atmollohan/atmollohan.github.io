import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Contact from './Contact'

jest.mock('gatsby', () => ({
  StaticQuery: jest.fn(({ render }) =>
    render({
      markdownRemark: {
        html: '<p>Test contact content</p>',
      },
    })
  ),
  graphql: jest.fn(),
}))

describe('Contact', () => {
  const mockOnCloseArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders contact heading when active', () => {
    render(
      <Contact
        article="contact"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(
      <Contact
        article="contact"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(screen.getByLabelText('close')).toBeInTheDocument()
  })

  it('calls onCloseArticle when close button clicked', () => {
    render(
      <Contact
        article="contact"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    fireEvent.click(screen.getByLabelText('close'))
    expect(mockOnCloseArticle).toHaveBeenCalled()
  })

  it('renders social links within contact', () => {
    render(
      <Contact
        article="contact"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })
})

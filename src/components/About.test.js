import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import About from './About'

jest.mock('gatsby', () => ({
  StaticQuery: jest.fn(({ render }) =>
    render({
      markdownRemark: {
        html: '<p>Test about content</p>',
      },
    })
  ),
  graphql: jest.fn(),
}))

describe('About', () => {
  const mockOnCloseArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders about heading when active', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    const closeButton = screen.getByLabelText('close')
    expect(closeButton).toBeInTheDocument()
  })

  it('calls onCloseArticle when close button clicked', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    fireEvent.click(screen.getByLabelText('close'))
    expect(mockOnCloseArticle).toHaveBeenCalled()
  })

  it('renders images with alt text', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    const images = screen.getAllByRole('img', { hidden: true })
    expect(images.length).toBeGreaterThanOrEqual(5)
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt')
    })
  })

  it('renders the twin guessing game', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    expect(
      screen.getByText(/Can you guess which one is me/i)
    ).toBeInTheDocument()
    expect(screen.getByText('Left')).toBeInTheDocument()
    expect(screen.getByText('Right')).toBeInTheDocument()
  })

  it('shows correct feedback when left is clicked', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    fireEvent.click(screen.getByText('Left'))
    expect(screen.getByText(/i knew you could do it/i)).toBeInTheDocument()
  })

  it('shows wrong feedback when right is clicked', () => {
    render(
      <About
        article="about"
        articleTimeout={true}
        onCloseArticle={mockOnCloseArticle}
      />
    )
    fireEvent.click(screen.getByText('Right'))
    expect(screen.getByText(/it.s okay.* i forgive you/i)).toBeInTheDocument()
  })
})

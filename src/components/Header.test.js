import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  const mockOnOpenArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the header with title and name', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(screen.getByText('Mollo Tech')).toBeInTheDocument()
    expect(screen.getByText('Andrew Mollohan')).toBeInTheDocument()
  })

  it('renders role tagline', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(
      screen.getByText('Cloud Platform Engineer')
    ).toBeInTheDocument()
  })

  it('renders all navigation buttons', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(screen.getByText("What I've Built")).toBeInTheDocument()
    expect(screen.getByText('Intro')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('calls onOpenArticle with correct article when button clicked', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    fireEvent.click(screen.getByText('Intro'))
    expect(mockOnOpenArticle).toHaveBeenCalledWith('intro')

    fireEvent.click(screen.getByText("What I've Built"))
    expect(mockOnOpenArticle).toHaveBeenCalledWith('work')

    fireEvent.click(screen.getByText('About'))
    expect(mockOnOpenArticle).toHaveBeenCalledWith('about')

    fireEvent.click(screen.getByText('Contact'))
    expect(mockOnOpenArticle).toHaveBeenCalledWith('contact')
  })

  it('renders logo with correct class', () => {
    const { container } = render(
      <Header onOpenArticle={mockOnOpenArticle} timeout={true} />
    )

    const logo = container.querySelector('.logo')
    expect(logo).toBeInTheDocument()
  })

  it('has header element with correct id', () => {
    const { container } = render(
      <Header onOpenArticle={mockOnOpenArticle} timeout={true} />
    )

    expect(container.querySelector('#header')).toBeInTheDocument()
  })
})

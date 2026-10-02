import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

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

  it('renders all navigation buttons', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('Intro')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('calls onOpenArticle with correct article when button clicked', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    fireEvent.click(screen.getByText('Intro'))
    expect(mockOnOpenArticle).toHaveBeenCalledWith('intro')

    fireEvent.click(screen.getByText('Work'))
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

  it('renders the two route links after the SPA buttons', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    const items = screen.getByRole('navigation').querySelectorAll('li')
    const labels = Array.from(items).map((item) => item.textContent)

    expect(labels).toEqual([
      'Intro',
      'About',
      'Work',
      'Contact',
      'All Projects',
      'Blog',
    ])
  })

  it('points each route link at its route', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(screen.getByText('All Projects')).toHaveAttribute(
      'href',
      '/projects'
    )
    expect(screen.getByText('Blog')).toHaveAttribute('href', '/blog')
  })

  it('does not mark the SPA buttons as links', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(screen.getByText('Intro').tagName).toBe('BUTTON')
    expect(screen.getByText('Blog').tagName).toBe('A')
  })

  it('does not call onOpenArticle when a route link is clicked', () => {
    const onOpenArticle = jest.fn()

    render(<Header onOpenArticle={onOpenArticle} timeout={true} />)

    fireEvent.click(screen.getByText('Blog'))
    fireEvent.click(screen.getByText('All Projects'))

    expect(onOpenArticle).not.toHaveBeenCalled()
  })

  it('renders the route links as plain anchors with no active marking', () => {
    const { container } = render(
      <Header onOpenArticle={mockOnOpenArticle} timeout={true} />
    )

    expect(container.querySelectorAll('nav a.special')).toHaveLength(0)
    expect(container.querySelectorAll('nav a[aria-current]')).toHaveLength(0)
  })
})

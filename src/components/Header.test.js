import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

let mockPathname = '/'

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
    useLocation: () => ({ pathname: mockPathname }),
  }
})

describe('Header', () => {
  const mockOnOpenArticle = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    mockPathname = '/'
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

  it('renders the three route links after the SPA buttons', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    const items = screen.getByRole('navigation').querySelectorAll('li')
    const labels = Array.from(items).map((item) => item.textContent)

    expect(labels).toEqual([
      'Work',
      'Intro',
      'About',
      'Contact',
      'All Work',
      'All Projects',
      'Blog',
    ])
  })

  it('points each route link at its route', () => {
    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    expect(screen.getByText('All Work')).toHaveAttribute('href', '/work')
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

  it('marks no route as active on the site root', () => {
    const { container } = render(
      <Header onOpenArticle={mockOnOpenArticle} timeout={true} />
    )

    expect(container.querySelectorAll('a.special')).toHaveLength(0)
    expect(container.querySelectorAll('nav a[aria-current]')).toHaveLength(0)
  })

  it.each([
    ['/work', 'All Work'],
    ['/projects', 'All Projects'],
    ['/blog', 'Blog'],
    ['/blog/building-lil-chef', 'Blog'],
  ])('marks %s active via .special and aria-current', (pathname, label) => {
    mockPathname = pathname

    render(<Header onOpenArticle={mockOnOpenArticle} timeout={true} />)

    const link = screen.getByText(label)
    expect(link).toHaveClass('special')
    expect(link).toHaveAttribute('aria-current', 'page')
  })

  it('marks only the blog link active on a blog post route', () => {
    mockPathname = '/blog/building-lil-chef'

    const { container } = render(
      <Header onOpenArticle={mockOnOpenArticle} timeout={true} />
    )

    const active = Array.from(container.querySelectorAll('nav a.special')).map(
      (link) => link.textContent
    )
    expect(active).toEqual(['Blog'])
  })

  it('keeps the active SPA button on aria-current while on a route page', () => {
    mockPathname = '/blog'

    render(
      <Header onOpenArticle={mockOnOpenArticle} timeout={true} article="blog" />
    )

    const blogLink = screen.getByText('Blog')
    expect(blogLink).toHaveAttribute('aria-current', 'page')
  })
})

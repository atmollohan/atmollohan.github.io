import React from 'react'
import { render } from '@testing-library/react'
import Main from './Main'

jest.mock('gatsby', () => ({
  StaticQuery: jest.fn(({ render }) =>
    render({
      markdownRemark: {
        html: '<p>Test content</p>',
      },
    })
  ),
  graphql: jest.fn(),
}))

describe('Main', () => {
  const mockOnCloseArticle = jest.fn()
  const mockSetWrapperRef = jest.fn()

  it('renders main element with correct id', () => {
    const { container } = render(
      <Main
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
        timeout={true}
        setWrapperRef={mockSetWrapperRef}
      />
    )
    expect(container.querySelector('#main')).toBeInTheDocument()
  })

  it('renders main element with main role', () => {
    const { container } = render(
      <Main
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
        timeout={true}
        setWrapperRef={mockSetWrapperRef}
      />
    )
    expect(container.querySelector('#main')).toHaveAttribute('role', 'main')
  })

  it('is hidden when timeout is false', () => {
    const { container } = render(
      <Main
        article=""
        articleTimeout={false}
        onCloseArticle={mockOnCloseArticle}
        timeout={false}
        setWrapperRef={mockSetWrapperRef}
      />
    )
    const main = container.querySelector('#main')
    expect(main.style.display).toBe('none')
  })
})

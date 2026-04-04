import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import packageJson from '../../package.json'

describe('Footer', () => {
  it('renders the version number', () => {
    render(<Footer timeout={true} />)

    expect(screen.getByText(`v${packageJson.version}`)).toBeInTheDocument()
  })

  it('has footer element with correct id', () => {
    const { container } = render(<Footer timeout={true} />)

    expect(container.querySelector('#footer')).toBeInTheDocument()
  })

  it('renders with copyright text', () => {
    render(<Footer timeout={true} />)

    expect(screen.getByText(/v\d+\.\d+\.\d+/)).toBeInTheDocument()
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import SocialLinks from './SocialLinks'

describe('SocialLinks', () => {
  it('renders social media links', () => {
    render(<SocialLinks />)

    const linkedinLink = screen.getByText('LinkedIn')
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink.closest('a')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/andrew-mollohan-868b87b3'
    )
  })

  it('renders GitHub links with correct labels', () => {
    render(<SocialLinks />)

    const personalLink = screen.getByText('Personal')
    const havocLink = screen.getByText('Havoc')
    const harnessLink = screen.getByText('Harness')

    expect(personalLink).toBeInTheDocument()
    expect(havocLink).toBeInTheDocument()
    expect(harnessLink).toBeInTheDocument()
  })

  it('renders Instagram link', () => {
    render(<SocialLinks />)

    const instagramLink = screen.getByText('Instagram')
    expect(instagramLink).toBeInTheDocument()
  })
})

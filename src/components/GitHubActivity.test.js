import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import GitHubActivity from './GitHubActivity'

const mockRepos = [
  {
    id: 1,
    name: 'test-repo',
    description: 'A test repository',
    html_url: 'https://github.com/atmollohan/test-repo',
    language: 'JavaScript',
    stargazers_count: 5,
    updated_at: '2026-06-10T00:00:00Z',
  },
  {
    id: 2,
    name: 'another-repo',
    description: null,
    html_url: 'https://github.com/atmollohan/another-repo',
    language: 'Go',
    stargazers_count: 0,
    updated_at: '2026-06-01T00:00:00Z',
  },
]

describe('GitHubActivity', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows loading state initially', () => {
    global.fetch = jest.fn(() => new Promise(() => {}))
    render(<GitHubActivity username="atmollohan" />)
    expect(screen.getByText(/loading recent activity/i)).toBeInTheDocument()
  })

  it('renders repo cards after successful fetch', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockRepos),
    })

    render(<GitHubActivity username="atmollohan" />)

    await waitFor(() => {
      expect(screen.getByText('test-repo')).toBeInTheDocument()
    })

    expect(screen.getByText('another-repo')).toBeInTheDocument()
    expect(screen.getByText('A test repository')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('shows error message when fetch fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 403,
    })

    render(<GitHubActivity username="atmollohan" />)

    await waitFor(() => {
      expect(
        screen.getByText(/unable to load recent activity/i)
      ).toBeInTheDocument()
    })

    const link = screen.getByText(/github.com\/atmollohan/i)
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute(
      'href',
      'https://github.com/atmollohan'
    )
  })

  it('uses correct GitHub API URL', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve([]),
    })

    render(<GitHubActivity username="atmollohan" />)

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.github.com/users/atmollohan/repos?sort=updated&per_page=6'
      )
    })
  })

  afterEach(() => {
    delete global.fetch
  })
})

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const NUM_REPOS = 6

const GitHubActivity = ({ username }) => {
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=${NUM_REPOS}`
        )
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
        const data = await res.json()
        if (!cancelled) {
          setRepos(data)
          setLoading(false)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
          setLoading(false)
        }
      }
    }

    fetchRepos()

    return () => {
      cancelled = true
    }
  }, [username])

  if (error) {
    return (
      <div className="github-activity">
        <p className="github-error">
          Unable to load recent activity. Visit{' '}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            github.com/{username}
          </a>{' '}
          to see what I am working on.
        </p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="github-activity">
        <p className="github-loading">Loading recent activity...</p>
      </div>
    )
  }

  return (
    <div className="github-activity">
      <h3>Recent Open Source Activity</h3>
      <div className="github-repos">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer noopener"
            className="github-repo-card"
            aria-label={`${repo.name}${repo.description ? ': ' + repo.description : ''}`}
          >
            <span className="repo-name">{repo.name}</span>
            {repo.description && (
              <span className="repo-description">{repo.description}</span>
            )}
            <span className="repo-meta">
              {repo.language && (
                <span className="repo-language">{repo.language}</span>
              )}
              <span className="repo-stars">★ {repo.stargazers_count}</span>
              <span className="repo-updated">
                Updated{' '}
                {new Date(repo.updated_at).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="github-footer">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          See more on GitHub →
        </a>
      </p>
    </div>
  )
}

GitHubActivity.propTypes = {
  username: PropTypes.string.isRequired,
}

export default GitHubActivity

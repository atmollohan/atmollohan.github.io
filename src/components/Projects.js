import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const ProjectCard = ({ title, company, role, period, slug, tags, html }) => (
  <article className="project-card">
    <h3>
      <Link to={slug}>{title}</Link>
    </h3>
    <p className="meta">
      <strong>{company}</strong> | {role} | {period}
    </p>
    <div className="tech-tags">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </article>
)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  html: PropTypes.string.isRequired,
}

const ProjectsContent = ({
  article,
  articleTimeout,
  onCloseArticle,
  projects,
}) => {
  const close = (
    <div
      role="button"
      aria-label="close"
      className="close"
      tabIndex={0}
      onClick={onCloseArticle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onCloseArticle()
        }
      }}
    ></div>
  )

  return (
    <article
      id="projects"
      className={`${article === 'projects' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">Projects</h2>
      <p>Detailed view of my work history and key projects.</p>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.frontmatter.slug}
            title={project.frontmatter.title}
            company={project.frontmatter.company}
            role={project.frontmatter.role}
            period={project.frontmatter.period}
            slug={project.frontmatter.slug}
            tags={project.frontmatter.tags || []}
            html={project.html}
          />
        ))}
      </div>
      {close}
    </article>
  )
}

ProjectsContent.propTypes = {
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  projects: PropTypes.array.isRequired,
}

const Projects = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { slug: { regex: "^/projects/" } } }
          sort: { frontmatter: { period: DESC } }
        ) {
          nodes {
            frontmatter {
              slug
              title
              company
              role
              period
              tags
            }
            html
          }
        }
      }
    `}
    render={(data) => (
      <ProjectsContent projects={data.allMarkdownRemark.nodes} {...props} />
    )}
  />
)

export default Projects

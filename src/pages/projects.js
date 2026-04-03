import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const ProjectCard = ({ title, company, role, period, slug, tags }) => (
  <div className="project-card">
    <h3>
      <Link to={slug}>{title}</Link>
    </h3>
    <p className="meta">
      {company} | {role} | {period}
    </p>
    <div className="tech-tags">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  </div>
)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

const ProjectsPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout location={{ pathname: '/projects' }}>
      <article id="projects" className="active" style={{ display: 'none' }}>
        <h2 className="major">Projects</h2>
        <p>A detailed look at my work history and key projects.</p>
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
            />
          ))}
        </div>
      </article>
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
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
      }
    }
  }
`

export const Head = () => (
  <>
    <title>Projects | Andrew Mollohan</title>
    <meta
      name="description"
      content="Detailed projects and work history of Andrew Mollohan"
    />
    <html lang="en" />
  </>
)

export default ProjectsPage

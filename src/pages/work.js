import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'

const WorkCard = ({ title, company, role, period, slug, tags }) => (
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

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
}

const WorkPage = ({ data }) => {
  const work = data.allMarkdownRemark.nodes

  return (
    <Layout location={{ pathname: '/work' }}>
      <article id="work" className="active" style={{ display: 'none' }}>
        <h2 className="major">Work</h2>
        <p>Professional experience and key contributions.</p>
        <div className="project-list">
          {work.map((item) => (
            <WorkCard
              key={item.frontmatter.slug}
              title={item.frontmatter.title}
              company={item.frontmatter.company}
              role={item.frontmatter.role}
              period={item.frontmatter.period}
              slug={item.frontmatter.slug}
              tags={item.frontmatter.tags || []}
            />
          ))}
        </div>
      </article>
    </Layout>
  )
}

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { slug: { regex: "^/work/" } } }
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
    <title>Work | Andrew Mollohan</title>
    <meta
      name="description"
      content="Professional experience and work history of Andrew Mollohan - Senior Cloud Engineer"
    />
    <html lang="en" />
  </>
)

export default WorkPage

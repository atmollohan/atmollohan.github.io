const path = require('path')
const { createPages } = require('../gatsby-node')

const makeGraphql = (nodes) =>
  jest.fn().mockResolvedValue({ data: { allMarkdownRemark: { nodes } } })

const blogTemplate = path.resolve('./src/templates/blog-post.js')
const sharedTemplate = path.resolve(
  './src/pages/{markdownRemark.frontmatter__slug}.jsx'
)

describe('createPages', () => {
  it('routes /blog/ slugs to the blog template and everything else to the shared template', async () => {
    const createPage = jest.fn()

    await createPages({
      graphql: makeGraphql([
        { id: '1', frontmatter: { slug: '/blog/building-lil-chef' } },
        { id: '2', frontmatter: { slug: '/projects/lil-chef' } },
        { id: '3', frontmatter: { slug: '/work/havocai' } },
      ]),
      actions: { createPage },
    })

    expect(createPage).toHaveBeenCalledTimes(3)
    expect(createPage).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        path: '/blog/building-lil-chef',
        component: blogTemplate,
        context: { id: '1' },
      })
    )
    expect(createPage).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({
        path: '/projects/lil-chef',
        component: sharedTemplate,
      })
    )
    expect(createPage).toHaveBeenNthCalledWith(
      3,
      expect.objectContaining({
        path: '/work/havocai',
        component: sharedTemplate,
      })
    )
  })

  it('skips nodes without a slug', async () => {
    const createPage = jest.fn()

    await createPages({
      graphql: makeGraphql([{ id: '1', frontmatter: {} }]),
      actions: { createPage },
    })

    expect(createPage).not.toHaveBeenCalled()
  })

  it('creates no pages when the graphql query errors', async () => {
    const createPage = jest.fn()
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    await createPages({
      graphql: jest.fn().mockResolvedValue({ errors: ['boom'] }),
      actions: { createPage },
    })

    expect(createPage).not.toHaveBeenCalled()
    consoleError.mockRestore()
  })
})

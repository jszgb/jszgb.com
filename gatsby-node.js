const path = require('path')
const createPaginatedPages = require('gatsby-paginate')
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        site {
          siteMetadata {
            title
          }
        }
        posts: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fileAbsolutePath: { regex: "/(slides)/.*\.md$/" } }
          ) {
          totalCount
          edges {
            node {
              id
              html
              frontmatter {
                date(formatString: "DD.MM.YYYY.")
                title
              }
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.posts.edges,
        createPage: createPage,
        pageTemplate: 'src/templates/slides.js',
        pathPrefix: 'slides',
        pageLength: 3
      })

      resolve()
    })
  })
}

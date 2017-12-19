import React from 'react'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <div>
      {posts.map(({node: post}, i) => {
        const { frontmatter, html } = post
        return (<article key={i}>
          <time className='post-date date'>{frontmatter.date}</time>
          <h1 className='post-title'>{frontmatter.title}</h1>
          <div className='post-content'dangerouslySetInnerHTML={{__html: html}} />
        </article>)
      })}
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark (
    sort: { order: DESC, fields: [frontmatter___date]},
    filter: {fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"}}
  ){
    totalCount

    edges {
      node {
        id
        html
        frontmatter {
          title
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
}
`

export default IndexPage

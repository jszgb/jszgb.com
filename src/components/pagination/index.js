import React from 'react'

import PaginationNumbers from '../pagination-numbers'

import { Container, Link } from './styles'

const Pagination = (props) => {
  const { index, last, first, pageCount } = props
  let previousUrl = `slides/${index - 1 === 1 ? '' : (index - 1)}`
  const nextUrl = last ? `slides/${index}` : `slides/${(index + 1)}`
  const firstPage = `slides`
  const isLastPage = last
  const lastPage = `slides/${pageCount}`

  if (first) {
    previousUrl = `slides`
  }

  return (
    <Container>
      <Link to={firstPage} disabled={first}>First</Link>
      <Link to={previousUrl} disabled={first}>Prev</Link>
      <PaginationNumbers index={index} last={last} pageCount={pageCount} />
      <Link to={nextUrl} disabled={isLastPage}>Next</Link>
      <Link to={lastPage} disabled={isLastPage}>Last</Link>
    </Container>
  )
}

export default Pagination

import React from 'react'

import { Link, Container } from './styles'

const MAX_NUMS = 5

const renderNumberItem = (pageNum, activePage) => <Link key={pageNum} active={pageNum === activePage} to={`slides/${pageNum}`}>{pageNum}</Link>

const paginate = (activePage, pageCount) => {
  const pages = Array(pageCount).fill().map((v, i) => i + 1)

  if (activePage < pageCount - MAX_NUMS) {
    return pages
      .slice(activePage - 1, activePage + MAX_NUMS - 1)
      .map(page => renderNumberItem(page, activePage))
  }

  return pages
    .slice(pageCount - MAX_NUMS - 1, pageCount)
    .map(page => renderNumberItem(page, activePage))
}

export default (props) => {
  const { index, pageCount } = props

  if (pageCount === 0) {
    return null
  }

  // Generate pagination numbers
  let nums = paginate(index, pageCount)

  return (
    <Container>
      {nums}
    </Container>
  )
}

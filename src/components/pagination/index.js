import React from 'react'

const Pagination = (props) => {
  const { index, first, last, pageCount } = props
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <div className="Pagination">
      <a href="#">Prev</a>
      <a href="#">Next</a>
    </div>
  )
}

export default Pagination

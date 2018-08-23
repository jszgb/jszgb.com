import React from 'react'

import Meetup from '../../components/meetup/index'
import Pagination from '../../components/pagination/index'

import { PaginationContainer } from './styles'

const renderMeetup = ({ frontmatter, html }) => {
  return <Meetup {...frontmatter} html={html} />
}

export default ({ pathContext }) => {
  const { group } = pathContext

  return (
    <div>
      {group.map(({ node }) => renderMeetup(node)) }

      <PaginationContainer>
        <Pagination {...pathContext} />
      </PaginationContainer>
    </div>
  )
}

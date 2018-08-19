import React from "react";

import Meetup from '../components/meetup'
import Pagination from '../components/pagination'

const renderMeetup = ({ frontmatter, html }) => {
  return <Meetup {...frontmatter} html={html} />;
}

export default ({ pathContext }) => {
  const { group } = pathContext

  return (
    <div>
      {group.map(({ node }) => renderMeetup(node)) }

      <Pagination {...pathContext} />
    </div>
  )
}


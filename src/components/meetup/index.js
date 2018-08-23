import React from 'react';

const Meetup = ({ date, title, html }) => (
  <article>
    <time className='post-date date'>{date}</time>
    <h1 className='post-title'>{title}</h1>
    <div className='post-content'dangerouslySetInnerHTML={{__html: html}} />
  </article>
);

export default Meetup;
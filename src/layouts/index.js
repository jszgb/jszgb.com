import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Social from './social'
import Nav from './nav'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>JavaScript Zagreb</title>
      <meta name='description' content='JavaScript Zagreb user group website' />
      <meta name='keywords' content='javascript, node, react, frontend, backend, development' />
      <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet' />
    </Helmet>
    <div className='container'>
      <Nav />
      <Social />
      <main>
        <div className='articles'>
          <div className='cms_main'>
            {children()}
          </div>
        </div>
        <footer>
          <small className='cms_footer_text'>© 2017 All Rights Reserved.</small>
        </footer>
      </main>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Social from './social'
import Nav from './nav'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='JavaScript Zagreb'
      meta={[
        { name: 'description', content: 'JavaScript Zagreb user group website' },
        { name: 'keywords', content: 'javascript, node, react, frontend, backend, development' }
      ]}
    />
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

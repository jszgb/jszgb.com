import React from 'react'
import Link from 'gatsby-link'

import logo from '../images/logo.svg'

const Nav = () => (
  <aside id='logo-menu'>
    <div id='fixit'>
      <a href='/'><img src={logo} /></a>
      <nav className='cms_nav'>
        <ul>
          <li>
            <Link to='/' activeClassName='active'><span>Index</span></Link>
          </li>
          <li>
            <Link to='/slides' activeClassName='active'><span>Slides</span></Link>
          </li>
        </ul>
      </nav>
      <div className='next' />
      <a href='https://jszgb-slack.herokuapp.com/'><img className='gitter' src='https://jszgb-slack.herokuapp.com/badge.svg' alt='' /></a>
    </div>
  </aside>

)

export default Nav

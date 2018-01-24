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
            <Link exact to='/' activeClassName='active'><span>Home</span></Link>
          </li>
          <li>
            <Link to='/slides' activeClassName='active'><span>Slides</span></Link>
          </li>
          <li>
            <a href='https://www.meetup.com/JavaScript-Zagreb' target='_blank'><span>Meetups</span></a>
          </li>
          <li>
            <a href='https://github.com/jszgb' target='_blank'><span>Github</span></a>
          </li>
          <li>
            <a href='https://jszgb-slack.herokuapp.com/' target='_blank'><span>Slack</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>

)

export default Nav

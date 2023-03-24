import React from 'react'
import logoBlack from '../../asset/logo-black2.png'
import logoWhite from '../../asset/logo-white2.png'
import './Nav.css'

function Nav() {
  return (
    <div className='nav-bar'>
      <div className='logoBox'>
        <a href='#'>
          <img src={logoWhite} alt='logo' />
        </a>
      </div>
      <div className='linkBox'>
        <a href='#'>About Us</a>
        <a href='#'>Services</a>
        <a href='#'>Contact Us</a>
      </div>
    </div>
  )
}

export default Nav

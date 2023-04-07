import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import logoBlack from '../../asset/logo-black2.png'
import logoWhite from '../../asset/logo-white2.png'
import './Nav.css'

function Nav() {
  return (
    <div className='nav-bar'>
      <div className='logoBox'>
        <Link to='header' smooth={true} delay={150} duration={1000} isDynamic={true} offset={-50}>
          <img src={logoBlack} alt='logo' />
        </Link>
      </div>
      <div className='linkBox'>
        <Link to='aboutUs' smooth={true} delay={150} duration={1000} isDynamic={true} offset={-100}>
          About Us
        </Link>
        <Link to='portfolio' smooth={true} delay={150} duration={1000} isDynamic={true} offset={-50}>
          Services
        </Link>
        <Link to='contact' smooth={true} delay={150} duration={1000} isDynamic={true} offset={160}>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Nav

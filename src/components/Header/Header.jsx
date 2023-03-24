import React from 'react'
import Nav from './Nav/Nav'
import Hero from '../Hero/Hero'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
      <Nav />
      <Hero />
    </div>
  )
}

export default Header

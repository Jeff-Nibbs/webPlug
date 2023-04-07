import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './Hero.css'

function Hero() {
  return (
    <div className='header-container'>
      <div className='hero'>
        <div className='cta'>
          <h1 className='cta-title'>Daddy Vibes</h1>
          <h3 className='cta-text'>I know you want to</h3>
          <Link to='contact' smooth={true} delay={150} duration={1000} isDynamic={true} offset={160} className='cta-btn'>
            Hit me up
          </Link>
        </div>
        <div className='cta-img'></div>
      </div>
    </div>
  )
}

export default Hero

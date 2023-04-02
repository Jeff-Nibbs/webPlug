import React from 'react'
import globe from '../asset/earth.png'
import './Hero.css'

function Hero() {
  return (
    <div className='header-container'>
      <div className='hero'>
        <div className='cta'>
          <h1 className='cta-title'>Who's your daddy</h1>
          <h3 className='cta-text'>I know you want to</h3>
          <button className='cta-btn'>Hit me up</button>
        </div>
        <div className='cta-img'>
          <img src={globe} alt='globe' />
        </div>
      </div>
    </div>
  )
}

export default Hero

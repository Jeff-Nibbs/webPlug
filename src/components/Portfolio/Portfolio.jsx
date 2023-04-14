import React from 'react'
import './Portfolio.css'
import Carousel from './carousel/Carousel'

function Portfolio() {
  return (
    <div id='portfolio' className='port-container'>
      <h1>Our Work</h1>
      <Carousel />
    </div>
  )
}

export default Portfolio

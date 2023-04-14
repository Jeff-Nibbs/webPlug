import React from 'react'
import './Portfolio.css'
import ImageCarousel from './carousel/ImageCarousel'
import { imageData } from './carousel/imageData'

function Portfolio() {
  return (
    <div id='portfolio' className='port-container'>
      <h1>Our Work</h1>
      <ImageCarousel imageData={imageData} />
    </div>
  )
}

export default Portfolio

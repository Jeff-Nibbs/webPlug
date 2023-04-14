import React, { useState } from 'react'
import { imageData } from './imageData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './ImageCarousel.css'

import web1 from '../../../assets/webSites/web1.jpeg'
import web2 from '../../../assets/webSites/web2.jpg'
import web3 from '../../../assets/webSites/web3.jpeg'
import web4 from '../../../assets/webSites/web4.jpeg'
import web5 from '../../../assets/webSites/web5.jpeg'
import web7 from '../../../assets/webSites/web7.jpeg'

function ImageCarousel() {
  const [current, setCurrent] = useState(0)
  const imageData = [web1, web2, web3, web4, web5, web7]
  const length = imageData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(imageData) || length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {imageData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && <img src={slide} alt='web site' className='image' />}
          </div>
        )
      })}
    </section>
  )
}

export default ImageCarousel

import React from 'react'
import './Portfolio.css'
import web1 from '../asset/webSites/web1.jpeg'
import web2 from '../asset/webSites/web2.jpg'
import web3 from '../asset/webSites/web3.jpeg'
import web4 from '../asset/webSites/web4.jpeg'
import web5 from '../asset/webSites/web5.jpeg'
import web7 from '../asset/webSites/web7.jpeg'

function Portfolio() {
  return (
    <div id='portfolio' className='port-container'>
      <div className='port-card'>
        <div className='port-img-box'>
          <img src={web1} alt='port-pic' />
        </div>
        <div className='port-text'>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className='port-card'>
        <div className='port-img-box'>
          <img src={web2} alt='port-pic' />
        </div>
        <div className='port-text'>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className='port-card'>
        <div className='port-img-box'>
          <img src={web3} alt='port-pic' />
        </div>
        <div className='port-text'>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className='port-card'>
        <div className='port-img-box'>
          <img src={web4} alt='port-pic' />
        </div>
        <div className='port-text'>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className='port-card'>
        <div className='port-img-box'>
          <img src={web5} alt='port-pic' />
        </div>
        <div className='port-text'>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div className='port-card'>
        <div className='port-img-box'>
          <img src={web7} alt='port-pic' />
        </div>
        <div className='port-text'>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div id='contact' className='form-container'>
      <h2>Get at Us</h2>
      <form>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact

import React from 'react'
import './Contact.css'
import whattsapp from '../../assets/whattsapp.png'
import arrow_right from '../../assets/arrow_right.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={whattsapp} alt=""/></h3>
            <p>Fell Free to reach out through contact from or find our contact
                information below . your feedback , questiob , and suggestions are 
                important to us we strive to provide exceptional service yo our 
                university community.</p>
            <ul>
                <li><img src={whattsapp} alt=""/>Contact@GreatStack.dev </li>
                <li><img src={whattsapp} alt=""/>+250794152807</li>

            </ul>
        </div>
        <div className="contact-col">
          <form>
            <lable>Your Name</lable>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <p>Write your message here</p>
            <textarea name ="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={arrow_right} alt=""/></button>

          </form>
          <span>Sending</span>
        </div>
    </div>
  )
}

export default Contact
 
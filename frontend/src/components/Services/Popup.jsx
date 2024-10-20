import React from 'react'
import Button from '../Hero/Button'

const Popup = () => {
  return (
    <div className="hover-box p-5 d-flex justify-content-center align-items-center flex-column gap-0" >
          <p className='hover-head'>Ready to elevate your online presence?</p> 
          <p className='hover-head'>Let's turn your vision into reality!</p> 
          <p className='hover-body'>Contact us today to schedule a consultation and discover our exceptional web design services.</p>
          <Button title="Register" classes="white"/>
        </div>
  )
}

export default Popup

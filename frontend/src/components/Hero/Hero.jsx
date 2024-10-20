import React from 'react'
import logo from '../../assets/images/cloudi5-logo.png'
import Feature from './Feature'
import Button from './Button'


const Hero = () => {
  return (
    <div className='hero-container d-flex justify-content-center align-items-center flex-column' >
        <span className='overlay'></span>
        <img src={logo} className='logo' alt="Cloudi5-LOGO"></img>
        <p className='hero-content' data-aos="fade-right">Crafting Digital Experiences, <br></br>
        One Pixel at a Time.</p>
        <div data-aos="fade-right" className='featur d-flex gap-4 mt-3 flex-wrap justify-content-center align-items-center px-3' >
            <Feature title="Innovation" />
            <Feature title="Online Presence" />
            <Feature title="Creative" />
        </div>
        <Button title="Register Now" classes="yellow" data-aos="fade-right"/>
    </div>
  )
}

export default Hero

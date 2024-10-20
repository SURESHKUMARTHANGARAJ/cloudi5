import React from 'react'
import ServiceBox from './ServiceBox'
import Needs from './Needs'
import Popup from './Popup'

const Services = () => {
  return (
    <div className='service'>
      <p className="service-header">Our Services</p>
      <p className="service-sub">“User-Centric Design, Responsive Solutions, Tailored Solutions”</p>
        <ServiceBox />
        <Needs />
        <Popup />
    </div>
  )
}

export default Services

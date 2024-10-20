import React from 'react'
import logo from '../../assets/images/cloudi5-logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer className='pt-5'>
      <div className='footer-container'>
          <div className="foot-conatiner">
            <p className='foot-head'>SERVICES</p>
            <p className='foot-body'>Web Design</p>
            <p className='foot-body'>Web Development</p>
            <p className='foot-body'>Digital Marketing</p>
            <p className='foot-body'>Mobile Application</p>
            <p className='foot-body'>Logo Design</p>
          </div>
          <div className="foot-conatiner">
            <p className='foot-head'>OUR PRODUCTS</p>
            <p className='foot-body'>E-Commerce</p>
            <p className='foot-body'>School Software</p>
            <p className='foot-body'>ERP</p>
            <p className='foot-body'>CRM</p>
            <p className='foot-body'>Lead Management</p>
            
          </div>
          <div className="foot-conatiner">
            <p className='foot-head'>LEGAL PAGES</p>
            <p className='foot-body'>Terms and Conditions</p>
            <p className='foot-body'>Privacy Policy</p>
            <p className='foot-body'>Cancellation Policy</p>
            <p className='foot-body'>Customer Policy</p>
            <p className='foot-body'>Return Policy</p>
          </div>
          <div className="foot-conatiner">
            <p className='foot-head'>COMPANY</p>
            <p className='foot-body'>About Us</p>
            <p className='foot-body'>Blog</p>
            <p className='foot-body'>Careers</p>
            <p className='foot-body'>Contact Us</p>
          </div>
          <div className="foot-conatiner faq">
            <p className='text-end foot-head'>NEED SUPPORT</p>
            <p className='text-end foot-body'>FAQs </p>
          </div>
        </div>

        <div className="stripe mt-5"></div>

        <div className="cloudi5">
          <div className="cloudi5-left">
            <img src={logo} alt="Logo" />
            <p>We are committed to excellence in everything we do. From the quality of our work to the level of service we provide, we strive for nothing less than perfection.</p>
          </div>
          <div className="cloudi5-right">
            <p className="foot-head">SOCIAL MEDIA</p>
            <p>Follow us on social media to find out the latest updates on our progress</p>
            <div className="icons">
            <FaLinkedinIn className='s-icon'/>
            <FaFacebookF className='s-icon'/>
            <FaInstagram className='s-icon'/>
            <FaXTwitter className='s-icon'/>
            </div>
          </div>
        </div>

        <div className="copyright p-3 w-100 text-center">
          &copy; Cloudi5 Technologies 2024. All Rights Reserved.
        </div>
    </footer>
  )
}

export default Footer

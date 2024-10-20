import React from 'react'
import img from '../../assets/images/img1.png'
import { FaRegCircleCheck } from "react-icons/fa6";

const Needs = () => {
  return (
    <div className='needs px-4 pt-4 position-relative'>
            <p className='need-header p-4'>Why Choose Cloudi5 <span>for Your Web Design Needs :</span></p>
            <div className="container-fluid px-4">
              <div className="row gap-4">
              <div className="need-left col col-12 col-md-12 col-lg-7 gap-5">
              <div className="need-cont d-flex justify-content-start align-items-center gap-4 flex-row pb-3">
              <div className='need-icon'><FaRegCircleCheck /></div>
                <p>With years of experience in the industry, our team brings a wealth 
                of expertise to every project.</p>
              </div>
              <div className="need-cont d-flex justify-content-start align-items-center gap-4 flex-row pb-3">
                <div className='need-icon'><FaRegCircleCheck /></div>
                <p>We have successfully designed and developed websites for a diverse 
                range of clients across various industries.</p>
              </div>
              <div className="need-cont d-flex justify-content-start align-items-center gap-4 flex-row pb-3">
                <div className='need-icon'><FaRegCircleCheck /></div>
                <p>From seamless navigation to compelling calls-to-action, we ensure 
                that every aspect of your website is designed with the user in mind.</p>
              </div>
              <div className="need-cont d-flex justify-content-start align-items-center gap-4 flex-row pb-3">
                <div className='need-icon'><FaRegCircleCheck /></div>
                <p>We understand that every business is unique.</p>
              </div>
            </div>
              <div className='need-right col col-12 col-md-12 col-lg-4 mx-auto'>
                <img src={img} alt="Tutor-img" />
              </div>
              </div>
            </div>
        </div>
        
  )
}

export default Needs

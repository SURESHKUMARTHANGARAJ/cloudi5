import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { MdOutlineTouchApp } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { FaHandHoldingUsd } from "react-icons/fa";


const ServiceBox = ({icon,title}) => {
  return (
    <div className="container-fluid p-3 pt-5 pb-5">
        <div className="row gap-5 service-top">
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto" data-aos="fade-up">           <BsArrowRightCircle className="service-icon" />
            <p className="service-text">Access to Existing Customers</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto" data-aos="fade-up">           <FiEye className="service-icon" />
            <p className="service-text">Brand and Visibility</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto" data-aos="fade-up">           <MdOutlineTouchApp className="service-icon" />
            <p className="service-text">Easy to use Admin Panel</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto" data-aos="fade-up">           <GrAnnounce className="service-icon" />
            <p className="service-text">Gain from our digital marketing initiative</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto " data-aos="fade-up">
            <MdOutlineManageAccounts className="service-icon" />
            <p className="service-text">Dedicated Success Executive</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto " data-aos="fade-up">
            <GiBrain className="service-icon" />
            <p className="service-text">Training and guidance</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto " data-aos="fade-up">
            <BsShop className="service-icon" />
            <p className="service-text">Feature at your service</p>
            </div>
            <div className="service-box col col-sm-12 col-md-6 col-lg-3 px-4 py-3 mx-auto " data-aos="fade-up">
            <FaHandHoldingUsd className="service-icon" />
            <p className="service-text">Working capital support</p>
            </div>
        </div>
    </div>

  )
}

export default ServiceBox

import React from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

const Feature = ({title}) => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-2'>
            <FaRegCircleCheck className="feature-text"/>
            <p className="feature-text">{title}
            </p>
    </div>
  )
}

export default Feature

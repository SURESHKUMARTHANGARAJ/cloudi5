import React from 'react'

const Button = ({title,classes}) => {
  return (
    <a href="#register" data-aos="fade-right">
      <button className={`button ${classes}`}>
        {title}
      </button>
    </a>
  )
}

export default Button

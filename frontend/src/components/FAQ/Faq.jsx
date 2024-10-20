import React, { useState, useEffect } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Faq = () => {

    const [selected,setSelected] = useState(null);
    const [data,setData] = useState([]);

    const toggle = (i) => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i);
    }

    useEffect(() => {
      const fetchFAQs = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/v1/faqs');
          if (!response.ok) {
            throw new Error('Failed to fetch FAQs');
          }
          const result = await response.json();
          await setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchFAQs();
    }, []);  
  

  return (
    <div className="faq">
        <p className='faq-title mt-5'>Frequently Asked Questions</p>
        <p className='faq-sub'>(FAQ’s)</p>
    <div className='wrapper mt-2'>
      <div className="accordion">
      {data.map((item) => (
          <div className="item mt-3" key={item._id}>
            <div className="faq-head" onClick={() => toggle(item._id)}>
              <p>{item.question}</p>
              <span>{selected === item._id ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div className={`faq-content ${selected === item._id ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Faq

import React from 'react'
import '../components/styles/ScrollButton.css'

const ScrollButton = () => {
  const PHONE_NUMBER = "3325887454"
  return (
    <div>

      <div className='whatsapp-section'>
        <div className='whatsapp-container'>
          <a href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`}>
            <button className='link-wa'>
              <i className='bx bxl-whatsapp'></i>
            </button>
          </a>
        </div>
      </div>

      <div>
        <a href="#home">
          <button className='scrollY'>
            <i className='bx bxs-up-arrow-circle'></i>
          </button>
        </a>
      </div>

    </div>
  )
}

export default ScrollButton
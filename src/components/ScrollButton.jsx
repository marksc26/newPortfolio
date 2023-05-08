import React from 'react'
import '../components/styles/ScrollButton.css'

const ScrollButton = () => {
  return (
    <div>
        <a href="#home">
            <button className='scrollY'>
                <i className='bx bxs-up-arrow-circle'></i>
            </button> 
        </a>

    </div>
  )
}

export default ScrollButton
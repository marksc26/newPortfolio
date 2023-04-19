import React from 'react'
import './styles/Modal.css'

const Modal = ({setShowModal}) => {

    const closeModal = () => {
        setShowModal(false)
    }

    
  return (
    <section className="show-modal">    
        <div className='modal'>
            <h3>Thank You!</h3>
            <p>your form submission has been received!</p>
            <div className='button-container'>
               <button  onClick={closeModal}>Close</button>  
            </div>
             
        </div>
    </section>
  )
}

export default Modal
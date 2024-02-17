import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offres pour vous</h1>
        <p>Only on best selleers products</p>
        <button>Check now</button>
      </div>

      <div className="offerright">
            <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer

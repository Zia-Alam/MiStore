import React from 'react'
import Offer from '../components/Offer.js'
import  '../style/Offers.css'

const Offers = ({offer}) => {
  return (
    <div className='offerSection'>

      {offer.map( (item, index) => {
        return (
        <Offer key={item.image}  index={index} link={item.url} src={item.image}/> )
      })}

    </div>
  )
}

export default Offers

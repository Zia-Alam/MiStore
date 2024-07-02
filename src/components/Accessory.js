import React from 'react'
import '../style/Accessory.css'

const Accessory = ({image, name, price, index}) => {
  return (
    <div className='sub_items'>
      <img src={image} alt={`${index} product`} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

export default Accessory

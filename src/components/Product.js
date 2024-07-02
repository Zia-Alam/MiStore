import React from 'react'
import '../style/Product.css'


const Product = ({image, review, name, price}) => {
  return (
    <div className='prod_card'>
      <div>
        <img src={image} alt="" />
      </div>
      <div className="text_area">
      <div>
        <h4>{review}</h4>
      </div>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      </div>
    </div>
  )
}

export default Product

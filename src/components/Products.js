import React from 'react'
import '../style/Products.css'
import Product from '../components/Product.js'

const Products = ({productReviews}) => {
  return (
    <div className='prod_area'>
      {productReviews.map((item) => {
        return(
        <Product key={item.image} image={item.image} review={item.review} name={item.name} price={item.price}/> )
      })}
    </div>
  )
}

export default Products

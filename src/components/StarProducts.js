import React from 'react'
import  '../style/StarProducts.css'

const StarProducts = ({products}) => {
  return (
    <div className='pd'>
        <div className="left">
            <a href={products[0].url}>
        <img src={products[0].image} alt="" /></a>
        </div>

        <div className="right">
            <div className="r_top">
            <a href={products[1].url}>
            <img src={products[1].image} alt="" /></a>
            <a href={products[2].url}>
            <img src={products[2].image} alt="" /></a>
            </div>
            <div className="r_bottom">
            <a href={products[3].url}>
            <img src={products[3].image} alt="" /></a>
            </div>
        
        </div>
      
    </div>
  )
}

export default StarProducts

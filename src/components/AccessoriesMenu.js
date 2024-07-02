import React from 'react'
import { Link } from 'react-router-dom'
import '../style/AccessoriesMenu.css'

const AccessoriesMenu = () => {
  return (
    <div className='accessory'>
      <Link to="/music">Music Store</Link>
      <Link to="/smartDevice">Smart Devices</Link>
      <Link to="/home">Home</Link>
      <Link to="/lifeStyle">Lifestyle</Link>
      <Link to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default AccessoriesMenu

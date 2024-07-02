import React from 'react'
import '../style/Accessories.css'
import Accessory from '../components/Accessory.js'

const Accessories = ({ music, musicCover, smartDevice, smartDeviceCover, home, homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover}) => {
  return (
    <div className='accessories'>
      <div className="cover">
        <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt="" />
      </div>

      <div className="items">
        {music && music.map((item, index) => {
          return (
            <Accessory key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
          )
        })}

        {smartDevice && smartDevice.map((item, index) => {
          return (
            <Accessory key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
          )
        })}

        {home && home.map((item, index) => {
          return (
            <Accessory key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
          )
        })}

        {lifeStyle && lifeStyle.map((item, index) => {
          return (
            <Accessory key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
          )
        })}

        {mobileAccessories && mobileAccessories.map((item, index) => {
          return (
            <Accessory key={item.image} image={item.image} name={item.name} price={item.price} index={index} />
          )
        })}

        <Accessory image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>
    </div>
  )
}

export default Accessories

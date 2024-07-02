import '../style/MainFooter.css'
import React from 'react'
import Foot from '../components/Foot.js'

const MainFooter = ({data}) => {
  return (
    <div className='main_foot_div'>
     <div>
        <p>SUPPORT</p>
        <Foot data={data.support}/>
    </div> 
     <div className='shop_learn'>
        <p>SHOP AND LEARN</p>
        <div>
        <Foot data={data.shopAndLearn}/>
        </div>
    </div> 
     <div>
        <p>RETAIL STORE</p>
        <Foot data={data.retailStore}/>
    </div> 
     <div>
        <p>ABOUT US</p>
        <Foot data={data.aboutUS}/>
    </div> 
     <div>
        <p>CONTACT US</p>
        <Foot data={data.contactUs}/>
    </div> 
     <div className='chat_btn'>
        <p>Chat with our Virtual AI Bot (24/7 Live Agent Support)</p>
        <button>CHAT NOW</button>
     </div>
    </div>
  )
}

export default MainFooter

import React from 'react'
import '../style/MainFooter.css'

const Foot = ({data}) => {
 return (
    <div className='foot_link'>
    {data.map((item) => {
return (
    
      <a href={item.url}>{item.name}</a>
    
)
    })}
</div>)
  
}

export default Foot

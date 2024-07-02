import React from 'react'
import  '../style/Heading.css'

const Heading = ({text}) => {
  return (
    <div className='heading'>
        <div className='h1'></div>
      <p>{text}</p>
      <div className='h1'></div> 
    </div>
  )
}

export default Heading

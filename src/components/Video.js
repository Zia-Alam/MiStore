import React from 'react'
import '../style/Videos.css'

const Video = ({image}) => {
  return (
    <div className='vid_sec'>
      
                        <div className="img" style={{backgroundImage: `url(${image})`}}>
                        {/* <p>{play}</p> */}
                        </div>

                        
                   
    </div>
  )
}

export default Video

import '../style/Videos.css'
import React from 'react'
import Video from '../components/Video.js'

const play = <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 -960 960 960" width="44px" fill="#ffffff"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>

const Videos = ({ videos }) => {
    return (
        <div className="vid_sec">

        {videos.map((item) => {
            return (
                
             <div className="img" style={{backgroundImage: `url(${item.image})`}}>
             <div className="play_btn">{play}</div>
             <p>{item.name}</p>
             </div> )
        })}
        </div>
    )
}

export default Videos

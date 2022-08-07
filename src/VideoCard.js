import { Avatar } from '@mui/material'
import './VideoCard.css'
import React from 'react'

function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  
  return (
    <div className='videoCard'>
    <img className='videoCard__thumbnai' scr={image} alt="" />
     <div className='video__info'>    
     <Avatar className='videocard__avatar' 
     alt={channel} 
     src={channelImage}/>

    <div className='videoCard__text'>
      <h4>{title}</h4>
      <p>{channel}</p>
      <p>
        {views} . {timestamp}
      </p>
    </div>
    </div>
    </div>
  )
}

export default VideoCard
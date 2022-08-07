import React from 'react'
import "./VideoRow.css";
function VideoRow({ 
    views,
    channel,
    timestamp,
    sub,
    title,
    image,
    description}) {
  return (
    <div className='videoRow'>
    <img src={image} alt=""/>
    <div className='videoRow__text'>
    <h3>{title}</h3>
    <p className='videoRow__headline'>
    {channel} .<span className='videoRow__subsNumber'> {sub} </span> subcribers {views} views .{timestamp}
    </p>
    <p className='videoRow__description'>{description}</p>
    </div>
    </div>
  )
}

export default VideoRow
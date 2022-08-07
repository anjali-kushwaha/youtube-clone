import React from 'react'
import VideoCard from "./VideoCard"
import './RecommentedVideos.css'
import PIC2 from "./image/pic2.png"
function RecommentedVideos() {
  return (
    <div className='recommendedVideos'>
         <h2>Recommended </h2>
          <div className='recommendedVideos__videos'>
             <VideoCard
             title="Beauty Tips"
             views="2.5M"
             timestamp="2 days ago"
             channelImage=""
             channel="kim kim"
             image={PIC2}
             /> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
             <VideoCard/> 
            
            </div>
        
    </div>

  )
}

export default RecommentedVideos
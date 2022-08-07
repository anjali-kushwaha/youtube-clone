import React from 'react'
import "./ChannelRow.css"
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/CheckCircleOutline';
//import { Description } from '@material-ui/icons';

function ChannelRow({
    image,
    channel,
    verified,
    sub,
    noOfVideos,
    description
}) {
  return (
    <div className="channelRow">
    <Avatar className='channelRow__logo' 
    alt={channel} src={image} />
    <div className='channelRow__text'>
    <h4>
    {channel} {verified && <VerifiedIcon/>}
    </h4>
    <p>
    {sub} subcribers .{noOfVideos} videos
    </p>
    <p>{description}</p>
    </div>

    </div>
    )
}

export default ChannelRow